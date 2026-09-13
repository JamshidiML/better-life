import {
  ArrowLeft,
  ArrowRight,
  HardDrive,
  RotateCcw,
  Trash2,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Button } from '../../shared/ui/Button';
import { ChoiceButton } from '../../shared/ui/ChoiceButton';
import {
  CONTEXT_OPTIONS,
  FALLBACK_CHOICES,
  GOAL_OPTIONS,
  SUPPORT_ACTIONS,
} from '../support-plan/options';
import {
  createSupportPlan,
  MAX_CONTEXT_LENGTH,
  MAX_GOAL_LENGTH,
  type PersistenceMode,
  type PlanDraft,
  type SupportPlan,
} from '../support-plan/model';

export type BuilderStep = 'goal' | 'context' | 'action' | 'fallback' | 'data';

const STEPS: BuilderStep[] = ['goal', 'context', 'action', 'fallback', 'data'];

interface PlanBuilderProps {
  initialDraft: PlanDraft;
  initialStep?: BuilderStep;
  onActivate: (plan: SupportPlan) => void;
  onDiscard: () => void;
  onExit: () => void;
  onStepChange: (step: BuilderStep) => void;
}

export function PlanBuilder({
  initialDraft,
  initialStep = 'goal',
  onActivate,
  onDiscard,
  onExit,
  onStepChange,
}: PlanBuilderProps) {
  const [draft, setDraft] = useState<PlanDraft>(initialDraft);
  const [step, setStep] = useState<BuilderStep>(initialStep);
  const [goalIsCustom, setGoalIsCustom] = useState(
    initialDraft.goal.length > 0 &&
      !GOAL_OPTIONS.includes(
        initialDraft.goal as (typeof GOAL_OPTIONS)[number],
      ),
  );
  const [contextIsCustom, setContextIsCustom] = useState(
    initialDraft.broadContext.length > 0 &&
      !CONTEXT_OPTIONS.includes(
        initialDraft.broadContext as (typeof CONTEXT_OPTIONS)[number],
      ),
  );
  const [error, setError] = useState('');
  const stepIndex = STEPS.indexOf(step);

  useEffect(() => {
    document.getElementById('builder-title')?.focus();
  }, [step]);

  const canContinue = useMemo(() => {
    if (step === 'goal') return draft.goal.trim().length > 0;
    if (step === 'context') return draft.broadContext.trim().length > 0;
    if (step === 'action') return draft.primaryAction.length > 0;
    if (step === 'fallback') return draft.fallbackAction.length > 0;
    return true;
  }, [draft, step]);

  const next = () => {
    if (!canContinue) return;
    setError('');
    const nextStep = STEPS[stepIndex + 1];
    setStep(nextStep);
    onStepChange(nextStep);
  };

  const back = () => {
    setError('');
    if (stepIndex === 0) {
      onExit();
      return;
    }
    const previousStep = STEPS[stepIndex - 1];
    setStep(previousStep);
    onStepChange(previousStep);
  };

  const activate = (mode: PersistenceMode) => {
    setError('');
    try {
      onActivate(createSupportPlan(draft, mode));
    } catch (caught) {
      setError(
        caught instanceof Error
          ? caught.message
          : 'Please complete each choice before continuing.',
      );
    }
  };

  return (
    <section className="page builder-page">
      <div className="builder-topline">
        <span>
          Step {stepIndex + 1} of {STEPS.length}
        </span>
        <button className="text-button" onClick={onExit} type="button">
          Leave guide
        </button>
      </div>

      {step === 'goal' ? (
        <BuilderSection
          description="You can keep this general. You do not need to describe private details."
          title="What would you like help with?"
        >
          <div className="compact-choice-grid">
            {GOAL_OPTIONS.map((goal) => (
              <ChoiceButton
                key={goal}
                label={goal}
                onClick={() => {
                  setGoalIsCustom(false);
                  setDraft({ ...draft, goal });
                }}
                selected={!goalIsCustom && draft.goal === goal}
              />
            ))}
            <ChoiceButton
              label="Something else"
              onClick={() => {
                if (!goalIsCustom) setDraft({ ...draft, goal: '' });
                setGoalIsCustom(true);
              }}
              selected={goalIsCustom}
            />
          </div>
          {goalIsCustom ? (
            <BoundedTextArea
              id="custom-goal"
              label="Your general goal"
              maxLength={MAX_GOAL_LENGTH}
              onChange={(goal) => setDraft({ ...draft, goal })}
              placeholder="For example: Finish one task before checking my phone"
              value={draft.goal}
            />
          ) : null}
        </BuilderSection>
      ) : null}

      {step === 'context' ? (
        <BuilderSection
          description="This is a reminder you write for yourself. Better Life does not detect when it happens."
          title="When would this help be useful?"
        >
          <div className="compact-choice-grid">
            {CONTEXT_OPTIONS.map((context) => (
              <ChoiceButton
                key={context}
                label={context}
                onClick={() => {
                  setContextIsCustom(false);
                  setDraft({ ...draft, broadContext: context });
                }}
                selected={!contextIsCustom && draft.broadContext === context}
              />
            ))}
            <ChoiceButton
              label="Something else"
              onClick={() => {
                if (!contextIsCustom) setDraft({ ...draft, broadContext: '' });
                setContextIsCustom(true);
              }}
              selected={contextIsCustom}
            />
          </div>
          {contextIsCustom ? (
            <BoundedTextArea
              id="custom-context"
              label="Your general context"
              maxLength={MAX_CONTEXT_LENGTH}
              onChange={(broadContext) => setDraft({ ...draft, broadContext })}
              placeholder="For example: When I start switching between apps"
              value={draft.broadContext}
            />
          ) : null}
        </BuilderSection>
      ) : null}

      {step === 'action' ? (
        <BuilderSection
          description="Choose one ordinary next action. These options are not treatment or emergency support."
          title="Choose one Supportive action"
        >
          <div className="choice-list">
            {SUPPORT_ACTIONS.map((action) => (
              <ChoiceButton
                detail={action.detail}
                key={action.id}
                label={action.label}
                onClick={() => setDraft({ ...draft, primaryAction: action.id })}
                selected={draft.primaryAction === action.id}
                testId={`primary-${action.id}`}
              />
            ))}
          </div>
        </BuilderSection>
      ) : null}

      {step === 'fallback' ? (
        <BuilderSection
          description="Nothing happens automatically. You remain in control of the next choice."
          title="If the first option does not help, what would you like to try next?"
        >
          <div className="choice-list">
            {FALLBACK_CHOICES.filter(
              (fallback) => fallback.id !== draft.primaryAction,
            ).map((fallback) => (
              <ChoiceButton
                detail={fallback.detail}
                key={fallback.id}
                label={fallback.label}
                onClick={() =>
                  setDraft({ ...draft, fallbackAction: fallback.id })
                }
                selected={draft.fallbackAction === fallback.id}
                testId={`fallback-${fallback.id}`}
              />
            ))}
          </div>
        </BuilderSection>
      ) : null}

      {step === 'data' ? (
        <BuilderSection
          description="Choose what happens to this plan. There is no account, cloud sync, analytics, or remote API."
          title="What should happen to your plan?"
        >
          <div className="data-choice-list">
            <button
              className="data-choice"
              data-testid="persistence-use-once"
              onClick={() => activate('use_once')}
              type="button"
            >
              <RotateCcw size={22} aria-hidden="true" />
              <span>
                <strong>Use once</strong>
                <small>
                  Keep the plan for this session. Explicitly finishing clears
                  it.
                </small>
              </span>
              <ArrowRight size={19} aria-hidden="true" />
            </button>
            <button
              className="data-choice"
              data-testid="persistence-save-local"
              onClick={() => activate('save_local')}
              type="button"
            >
              <HardDrive size={22} aria-hidden="true" />
              <span>
                <strong>Save on this device</strong>
                <small>Saved in this browser on this device.</small>
              </span>
              <ArrowRight size={19} aria-hidden="true" />
            </button>
            <button
              className="data-choice data-choice--discard"
              data-testid="persistence-discard"
              onClick={onDiscard}
              type="button"
            >
              <Trash2 size={22} aria-hidden="true" />
              <span>
                <strong>Discard</strong>
                <small>Delete this plan now and return to the start.</small>
              </span>
              <ArrowRight size={19} aria-hidden="true" />
            </button>
          </div>
        </BuilderSection>
      ) : null}

      {error ? (
        <p className="form-error" role="alert">
          {error}
        </p>
      ) : null}

      {step !== 'data' ? (
        <div className="builder-actions">
          <Button icon={<ArrowLeft size={18} />} onClick={back} variant="quiet">
            Back
          </Button>
          <Button
            disabled={!canContinue}
            icon={<ArrowRight size={18} />}
            onClick={next}
          >
            Continue
          </Button>
        </div>
      ) : (
        <div className="builder-actions builder-actions--single">
          <Button icon={<ArrowLeft size={18} />} onClick={back} variant="quiet">
            Back
          </Button>
        </div>
      )}
    </section>
  );
}

function BuilderSection({
  children,
  description,
  title,
}: {
  children: React.ReactNode;
  description: string;
  title: string;
}) {
  return (
    <div className="builder-section">
      <header>
        <h1 id="builder-title" tabIndex={-1}>
          {title}
        </h1>
        <p>{description}</p>
      </header>
      {children}
    </div>
  );
}

function BoundedTextArea({
  id,
  label,
  maxLength,
  onChange,
  placeholder,
  value,
}: {
  id: string;
  label: string;
  maxLength: number;
  onChange: (value: string) => void;
  placeholder: string;
  value: string;
}) {
  return (
    <div className="text-field">
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        maxLength={maxLength}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        rows={3}
        value={value}
      />
      <small aria-live="polite">
        {value.length} / {maxLength}
      </small>
    </div>
  );
}
