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
type StorageState = 'available' | 'unavailable' | 'corrupt' | 'deletion_failed';

const storageNotices: Record<Exclude<StorageState, 'available'>, string> = {
  unavailable:
    'Better Life could not read browser storage. A saved plan may still be there. You can use a guide once without saving.',
  corrupt:
    'The saved local data could not be read as a guide. It has not been removed. You can use a guide once without saving.',
  deletion_failed:
    "Better Life could not confirm removal from browser storage. A saved plan may still be there. You can try removal again or clear this site's data in your browser settings.",
};

const builderStepIndex: Record<BuilderStep, number> = {
  goal: 0,
  context: 1,
  action: 2,
  fallback: 3,
  data: 4,
};

export function App() {
  const storage = useMemo(() => new BrowserSupportPlanStorage(), []);
  const [storedPlan, setStoredPlan] = useState(() => storage.read());
  const [screen, setScreen] = useState<AppScreen>(() => {
    if (storedPlan.status === 'ready') return 'saved';
    if (
      storedPlan.status === 'corrupt' ||
      storedPlan.status === 'unavailable'
    ) {
      return 'recovery';
    }
    return 'welcome';
  });
  const [storageState, setStorageState] = useState<StorageState>(() =>
    storedPlan.status === 'corrupt' || storedPlan.status === 'unavailable'
      ? storedPlan.status
      : 'available',
  );
  const [activePlan, setActivePlan] = useState<SupportPlan | null>(null);
  const savedPlan = storedPlan.status === 'ready' ? storedPlan.plan : null;
  const setSavedPlan = (plan: SupportPlan | null) =>
    setStoredPlan(plan ? { status: 'ready', plan } : { status: 'empty' });
  const [builderDraft, setBuilderDraft] = useState<PlanDraft>(EMPTY_PLAN_DRAFT);
  const [builderStep, setBuilderStep] = useState<BuilderStep>('goal');
  const [builderKey, setBuilderKey] = useState(0);
  const [statusMessage, setStatusMessage] = useState('');
  const [recoveryAttempt, setRecoveryAttempt] = useState(0);
  const storageNotice =
    storageState === 'available' ? undefined : storageNotices[storageState];

  useEffect(() => {
    const target = screen === 'builder' ? 'builder-title' : 'main-content';
    document.getElementById(target)?.focus();
  }, [screen, recoveryAttempt]);

  const clearTemporary = () => {
    setActivePlan(null);
    setBuilderDraft(EMPTY_PLAN_DRAFT);
  };

  const startBuilder = (
    draft: PlanDraft = EMPTY_PLAN_DRAFT,
    step: BuilderStep = 'goal',
  ) => {
    setBuilderDraft({
      goal: draft.goal,
      broadContext: draft.broadContext,
      primaryAction: draft.primaryAction,
      fallbackAction: draft.fallbackAction,
    });
    setActivePlan(null);
    setBuilderStep(step);
    setBuilderKey((current) => current + 1);
    setStatusMessage('');
    setScreen('builder');
  };

  const activatePlan = (plan: SupportPlan): string | undefined => {
    if (plan.persistenceMode === 'save_local') {
      if (storageState !== 'available') {
        return 'Saving is unavailable until browser storage can be checked. Choose Use once or Discard.';
      }
      const result = savedPlan ? storage.update(plan) : storage.create(plan);
      if (!result.ok) {
        return 'Better Life could not save this plan in browser storage. You can try saving again, choose Use once, or discard these changes.';
      }
      setSavedPlan(plan);
    }
    // Temporary use never writes, replaces, or clears the existing saved plan.
    setActivePlan(plan);
    setBuilderDraft(EMPTY_PLAN_DRAFT);
    setStatusMessage('');
    setScreen('spiral');
  };

  const discardDraft = () => {
    clearTemporary();
    setStatusMessage(
      savedPlan
        ? 'Your temporary changes were discarded. Your saved plan is unchanged.'
        : 'Your plan was discarded.',
    );
    setScreen(savedPlan ? 'saved' : 'welcome');
  };

  const clearAll = (message = 'Your locally saved data was cleared.') => {
    const result = storage.clear();
    clearTemporary();
    setSavedPlan(null);
    setRecoveryAttempt((attempt) => attempt + 1);
    if (!result.ok) {
      setStorageState('deletion_failed');
      setStatusMessage('');
      setScreen('recovery');
      return;
    }
    setStorageState('available');
    setStatusMessage(message);
    setScreen('welcome');
  };

  const finishSpiral = (exited = false) => {
    const wasTemporary = activePlan?.persistenceMode === 'use_once';
    clearTemporary();
    setStatusMessage(
      wasTemporary
        ? savedPlan
          ? 'Your temporary guide was cleared. Your saved plan is unchanged.'
          : exited
            ? 'Your use-once guide was cleared when you exited.'
            : 'Your use-once guide was cleared.'
        : '',
    );
    setScreen(savedPlan ? 'saved' : 'welcome');
  };

  const retryRead = () => {
    const result = storage.read();
    clearTemporary();
    setSavedPlan(result.status === 'ready' ? result.plan : null);
    setRecoveryAttempt((attempt) => attempt + 1);
    if (result.status === 'unavailable' || result.status === 'corrupt') {
      setStorageState(result.status);
      setScreen('recovery');
      return;
    }
    setStorageState('available');
    setStatusMessage(
      result.status === 'empty'
        ? 'No saved guide was found in this browser.'
        : '',
    );
    setScreen(result.status === 'ready' ? 'saved' : 'welcome');
  };

  if (screen === 'recovery') {
    const corrupt = storageState === 'corrupt';
    const deletionFailed = storageState === 'deletion_failed';
    return (
      <AppShell>
        <section
          className="page recovery-page"
          aria-labelledby="recovery-title"
        >
          <AlertCircle size={32} aria-hidden="true" />
          <div className="eyebrow">Local data notice</div>
          <h1 id="recovery-title">
            {deletionFailed
              ? 'Removal could not be confirmed.'
              : corrupt
                ? 'Your saved guide could not be loaded.'
                : 'Browser storage is unavailable.'}
          </h1>
          <p className="lede" role="alert" key={recoveryAttempt}>
            {corrupt
              ? 'The local data is malformed or uses an unsupported version. Better Life has not used it. You can clear it and start again.'
              : storageNotice}
          </p>
          <div className="saved-actions">
            <Button
              icon={<RotateCcw size={18} />}
              onClick={
                corrupt
                  ? () => clearAll('The unreadable local data was cleared.')
                  : deletionFailed
                    ? () => clearAll()
                    : retryRead
              }
            >
              {corrupt
                ? 'Clear local data and restart'
                : deletionFailed
                  ? 'Try removal again'
                  : 'Try reading again'}
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                clearTemporary();
                setStatusMessage('');
                setScreen('welcome');
              }}
            >
              Continue without saving
            </Button>
          </div>
        </section>
      </AppShell>
    );
  }

  if (screen === 'builder') {
    return (
      <AppShell
        currentStep={builderStepIndex[builderStep]}
        storageNotice={storageNotice}
      >
        <PlanBuilder
          initialDraft={builderDraft}
          initialStep={builderStep}
          key={builderKey}
          hasSavedPlan={savedPlan !== null}
          canSave={storageState === 'available'}
          onActivate={activatePlan}
          onDiscard={discardDraft}
          onExit={discardDraft}
          onStepChange={setBuilderStep}
        />
      </AppShell>
    );
  }

  if (screen === 'spiral' && activePlan) {
    return (
      <AppShell phaseLabel="Supportive Spiral" storageNotice={storageNotice}>
        <ProtectiveSpiral
          plan={activePlan}
          onClear={() => clearAll()}
          onEdit={() => startBuilder(activePlan, 'action')}
          onExit={() => finishSpiral(true)}
          onFinish={() => finishSpiral()}
        />
      </AppShell>
    );
  }

  if (screen === 'saved' && savedPlan) {
    return (
      <AppShell>
        <SavedPlanHome
          plan={savedPlan}
          statusMessage={statusMessage}
          onClear={() => clearAll()}
          onEdit={() => startBuilder(savedPlan, 'action')}
          onUse={() => {
            setActivePlan(savedPlan);
            setStatusMessage('');
            setScreen('spiral');
          }}
        />
      </AppShell>
    );
  }

  return (
    <AppShell storageNotice={storageNotice}>
      <Welcome
        onDemo={(draft) => startBuilder(draft)}
        onStart={() => startBuilder()}
        statusMessage={statusMessage}
        onStorageReview={
          storageNotice ? () => setScreen('recovery') : undefined
        }
      />
    </AppShell>
  );
}
