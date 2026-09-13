import { AlertCircle, RotateCcw } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import {
  PlanBuilder,
  type BuilderStep,
} from '../features/onboarding/PlanBuilder';
import { Welcome } from '../features/onboarding/Welcome';
import { SavedPlanHome } from '../features/privacy-controls/SavedPlanHome';
import { ProtectiveSpiral } from '../features/protective-spiral/ProtectiveSpiral';
import {
  EMPTY_PLAN_DRAFT,
  type PlanDraft,
  type SupportPlan,
} from '../features/support-plan/model';
import { BrowserSupportPlanStorage } from '../shared/storage/supportPlanStorage';
import { AppShell } from '../shared/ui/AppShell';
import { Button } from '../shared/ui/Button';

type AppScreen = 'welcome' | 'builder' | 'spiral' | 'saved' | 'recovery';

const builderStepIndex: Record<BuilderStep, number> = {
  goal: 0,
  context: 1,
  action: 2,
  fallback: 3,
  data: 4,
};

export function App() {
  const storage = useMemo(
    () => new BrowserSupportPlanStorage(window.localStorage),
    [],
  );
  const initialRead = useMemo(() => storage.read(), [storage]);
  const [screen, setScreen] = useState<AppScreen>(() => {
    if (initialRead.status === 'ready') return 'saved';
    if (initialRead.status === 'corrupt') return 'recovery';
    return 'welcome';
  });
  const [activePlan, setActivePlan] = useState<SupportPlan | null>(
    initialRead.status === 'ready' ? initialRead.plan : null,
  );
  const [savedPlan, setSavedPlan] = useState<SupportPlan | null>(
    initialRead.status === 'ready' ? initialRead.plan : null,
  );
  const [builderDraft, setBuilderDraft] = useState<PlanDraft>(EMPTY_PLAN_DRAFT);
  const [builderStep, setBuilderStep] = useState<BuilderStep>('goal');
  const [builderKey, setBuilderKey] = useState(0);
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    document.getElementById('main-content')?.focus();
  }, [screen]);

  const startBuilder = (
    draft: PlanDraft = EMPTY_PLAN_DRAFT,
    step: BuilderStep = 'goal',
  ) => {
    setBuilderDraft({ ...draft });
    setBuilderStep(step);
    setBuilderKey((current) => current + 1);
    setStatusMessage('');
    setScreen('builder');
  };

  const activatePlan = (plan: SupportPlan) => {
    try {
      if (plan.persistenceMode === 'save_local') {
        if (savedPlan) storage.update(plan);
        else storage.create(plan);
        setSavedPlan(plan);
      } else if (savedPlan) {
        storage.clear();
        setSavedPlan(null);
      }
    } catch {
      throw new Error(
        'This browser could not update local storage. Choose Use once or Discard instead.',
      );
    }
    setActivePlan(plan);
    setScreen('spiral');
  };

  const clearAll = (message = 'Your locally saved data was cleared.') => {
    storage.clear();
    setSavedPlan(null);
    setActivePlan(null);
    setStatusMessage(message);
    setScreen('welcome');
  };

  const finishSpiral = () => {
    if (activePlan?.persistenceMode === 'save_local') {
      setActivePlan(savedPlan);
      setScreen('saved');
      return;
    }
    setActivePlan(null);
    setStatusMessage('Your use-once guide was cleared.');
    setScreen('welcome');
  };

  const exitSpiral = () => {
    if (activePlan?.persistenceMode === 'save_local') {
      setScreen('saved');
      return;
    }
    setActivePlan(null);
    setStatusMessage('Your use-once guide was cleared when you exited.');
    setScreen('welcome');
  };

  if (screen === 'recovery') {
    return (
      <AppShell>
        <section
          className="page recovery-page"
          aria-labelledby="recovery-title"
        >
          <AlertCircle size={32} aria-hidden="true" />
          <div className="eyebrow">Local data notice</div>
          <h1 id="recovery-title">Your saved guide could not be loaded.</h1>
          <p className="lede">
            The local data is malformed or uses an unsupported version. Better
            Life has not used it. You can clear it and start again.
          </p>
          <Button
            icon={<RotateCcw size={18} />}
            onClick={() => clearAll('The unreadable local data was cleared.')}
          >
            Clear local data and restart
          </Button>
        </section>
      </AppShell>
    );
  }

  if (screen === 'builder') {
    return (
      <AppShell currentStep={builderStepIndex[builderStep]}>
        <PlanBuilder
          initialDraft={builderDraft}
          initialStep={builderStep}
          key={builderKey}
          onActivate={activatePlan}
          onDiscard={() => clearAll('Your plan was discarded.')}
          onExit={() => setScreen(savedPlan ? 'saved' : 'welcome')}
          onStepChange={setBuilderStep}
        />
      </AppShell>
    );
  }

  if (screen === 'spiral' && activePlan) {
    return (
      <AppShell phaseLabel="Supportive Spiral">
        <ProtectiveSpiral
          plan={activePlan}
          onClear={() => clearAll()}
          onEdit={() =>
            startBuilder(
              {
                goal: activePlan.goal,
                broadContext: activePlan.broadContext,
                primaryAction: activePlan.primaryAction,
                fallbackAction: activePlan.fallbackAction,
              },
              'action',
            )
          }
          onExit={exitSpiral}
          onFinish={finishSpiral}
        />
      </AppShell>
    );
  }

  if (screen === 'saved' && savedPlan) {
    return (
      <AppShell>
        <SavedPlanHome
          plan={savedPlan}
          onClear={() => clearAll()}
          onEdit={() =>
            startBuilder(
              {
                goal: savedPlan.goal,
                broadContext: savedPlan.broadContext,
                primaryAction: savedPlan.primaryAction,
                fallbackAction: savedPlan.fallbackAction,
              },
              'action',
            )
          }
          onUse={() => {
            setActivePlan(savedPlan);
            setScreen('spiral');
          }}
        />
      </AppShell>
    );
  }

  return (
    <AppShell>
      <Welcome
        onDemo={(draft) => startBuilder(draft)}
        onStart={() => startBuilder()}
        statusMessage={statusMessage}
      />
    </AppShell>
  );
}
