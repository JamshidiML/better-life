import {
  ArrowLeft,
  ArrowRight,
  Check,
  Edit3,
  RotateCcw,
  Trash2,
} from 'lucide-react';
import { useState } from 'react';
import { Button } from '../../shared/ui/Button';
import { actionLabel, fallbackLabel } from '../support-plan/options';
import type { SupportPlan } from '../support-plan/model';

interface ProtectiveSpiralProps {
  plan: SupportPlan;
  onClear: () => void;
  onEdit: () => void;
  onExit: () => void;
  onFinish: () => void;
}

const SPIRAL_LABELS = ['Pause', 'Your goal', 'Next action', 'Fallback', 'Done'];

export function ProtectiveSpiral({
  plan,
  onClear,
  onEdit,
  onExit,
  onFinish,
}: ProtectiveSpiralProps) {
  const [step, setStep] = useState(0);

  const continueForward = () => setStep((current) => Math.min(4, current + 1));

  return (
    <section className="page spiral-page" aria-labelledby="spiral-title">
      <div className="spiral-progress" aria-label="Supportive guide progress">
        <span>
          {step + 1} / {SPIRAL_LABELS.length}
        </span>
        <div aria-hidden="true">
          {SPIRAL_LABELS.map((label, index) => (
            <span className={index <= step ? 'is-active' : ''} key={label} />
          ))}
        </div>
      </div>

      {step === 0 ? (
        <SpiralFrame
          eyebrow="Pause"
          title="Give yourself a moment before deciding what to do next."
        >
          <p>
            There is no timer and nothing is blocked. Continue when you choose
            to.
          </p>
          <div className="spiral-actions">
            <Button icon={<ArrowRight size={19} />} onClick={continueForward}>
              Continue
            </Button>
            <Button onClick={onExit} variant="quiet">
              Exit
            </Button>
          </div>
        </SpiralFrame>
      ) : null}

      {step === 1 ? (
        <SpiralFrame eyebrow="Your words" title="Recall your own goal.">
          <blockquote>You said you want to: {plan.goal}</blockquote>
          <p>Better Life does not interpret this goal.</p>
          <ForwardBack onBack={() => setStep(0)} onNext={continueForward} />
        </SpiralFrame>
      ) : null}

      {step === 2 ? (
        <SpiralFrame eyebrow="Your choice" title="Your next action">
          <blockquote>
            {plan.primaryAction === 'continue_without_action'
              ? 'Continue without an action.'
              : actionLabel(plan.primaryAction)}
          </blockquote>
          <p>This is a Supportive option, not treatment or a requirement.</p>
          <ForwardBack onBack={() => setStep(1)} onNext={continueForward} />
        </SpiralFrame>
      ) : null}

      {step === 3 ? (
        <SpiralFrame eyebrow="Fallback" title="What would you like next?">
          <blockquote>{fallbackLabel(plan.fallbackAction)}</blockquote>
          {plan.fallbackAction === 'close_better_life' ? (
            <p>Choose Exit to close the guide without another action.</p>
          ) : plan.fallbackAction === 'no_fallback' ? (
            <p>You chose to continue with no fallback.</p>
          ) : (
            <p>
              Better Life will not contact anyone or start anything for you.
            </p>
          )}
          <div className="spiral-actions">
            {plan.fallbackAction !== 'no_fallback' &&
            plan.fallbackAction !== 'close_better_life' ? (
              <Button icon={<ArrowRight size={19} />} onClick={continueForward}>
                Try my fallback
              </Button>
            ) : null}
            <Button onClick={continueForward} variant="secondary">
              I&apos;m done
            </Button>
            <Button onClick={() => setStep(2)} variant="quiet">
              Back
            </Button>
          </div>
        </SpiralFrame>
      ) : null}

      {step === 4 ? (
        <SpiralFrame
          eyebrow="Complete"
          title="You made a deliberate next choice."
        >
          <div className="completion-mark" aria-hidden="true">
            <Check size={28} strokeWidth={2.5} />
          </div>
          <div className="completion-actions">
            <Button icon={<Check size={18} />} onClick={onFinish}>
              Finish
            </Button>
            <Button
              icon={<Edit3 size={18} />}
              onClick={onEdit}
              variant="secondary"
            >
              Edit my plan
            </Button>
            <Button
              icon={<RotateCcw size={18} />}
              onClick={() => setStep(0)}
              variant="secondary"
            >
              Start again
            </Button>
            <Button
              icon={<Trash2 size={18} />}
              onClick={onClear}
              variant="danger"
            >
              Clear my data
            </Button>
          </div>
        </SpiralFrame>
      ) : null}
    </section>
  );
}

function SpiralFrame({
  children,
  eyebrow,
  title,
}: {
  children: React.ReactNode;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="spiral-frame">
      <span className="section-label">{eyebrow}</span>
      <h1 id="spiral-title">{title}</h1>
      {children}
    </div>
  );
}

function ForwardBack({
  onBack,
  onNext,
}: {
  onBack: () => void;
  onNext: () => void;
}) {
  return (
    <div className="spiral-actions">
      <Button icon={<ArrowRight size={19} />} onClick={onNext}>
        Continue
      </Button>
      <Button icon={<ArrowLeft size={18} />} onClick={onBack} variant="quiet">
        Back
      </Button>
    </div>
  );
}
