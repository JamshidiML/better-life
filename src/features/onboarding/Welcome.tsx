import {
  ArrowRight,
  BookOpen,
  ChevronRight,
  EyeOff,
  ShieldOff,
  Trash2,
  X,
} from 'lucide-react';
import { useState } from 'react';
import { DEMO_PLANS } from '../support-plan/options';
import type { PlanDraft } from '../support-plan/model';
import { Button } from '../../shared/ui/Button';

interface WelcomeProps {
  statusMessage?: string;
  onStart: () => void;
  onDemo: (draft: PlanDraft) => void;
}

export function Welcome({ statusMessage, onStart, onDemo }: WelcomeProps) {
  const [showHow, setShowHow] = useState(false);

  return (
    <section className="page welcome-page" aria-labelledby="welcome-title">
      <div className="eyebrow">VS-01 · Local prototype</div>
      <h1 id="welcome-title">A practical next step, chosen by you.</h1>
      <p className="lede">
        Better Life helps you make a short self-guidance plan and use it when
        you want a pause before your next decision.
      </p>

      {statusMessage ? (
        <p className="status-message" role="status">
          {statusMessage}
        </p>
      ) : null}

      <div className="boundary-strip" aria-label="What this prototype does">
        <div>
          <ShieldOff size={20} aria-hidden="true" />
          <span>
            <strong>No diagnosis or blocking</strong>
            It does not monitor behavior or stop access.
          </span>
        </div>
        <div>
          <EyeOff size={20} aria-hidden="true" />
          <span>
            <strong>No automatic contact</strong>
            Nothing is sent to another person.
          </span>
        </div>
        <div>
          <Trash2 size={20} aria-hidden="true" />
          <span>
            <strong>Your data choice</strong>
            Use once, save in this browser, or discard.
          </span>
        </div>
      </div>

      <div className="welcome-actions">
        <Button icon={<ArrowRight size={19} />} onClick={onStart}>
          Guide me
        </Button>
        <Button
          icon={<BookOpen size={18} />}
          onClick={() => setShowHow(true)}
          variant="secondary"
        >
          How this works
        </Button>
      </div>

      <p className="leave-note">You can leave at any time.</p>

      <div className="demo-section">
        <div>
          <span className="section-label">Synthetic demos</span>
          <p>Try the full journey without entering personal information.</p>
        </div>
        <div className="demo-list">
          {DEMO_PLANS.map((demo) => (
            <button
              className="demo-row"
              key={demo.name}
              onClick={() => onDemo(demo.draft)}
              type="button"
            >
              <span>
                <strong>{demo.name}</strong>
                <small>{demo.description}</small>
              </span>
              <ChevronRight size={19} aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>

      {showHow ? (
        <dialog
          aria-labelledby="how-title"
          className="how-dialog"
          onCancel={() => setShowHow(false)}
          open
        >
          <div className="dialog-heading">
            <div>
              <span className="section-label">How it works</span>
              <h2 id="how-title">A guide, not a judgment.</h2>
            </div>
            <button
              aria-label="Close how this works"
              className="icon-button"
              onClick={() => setShowHow(false)}
              type="button"
            >
              <X size={20} />
            </button>
          </div>
          <ol className="how-list">
            <li>Choose a general goal and when your guide may be useful.</li>
            <li>Choose one ordinary action and an optional fallback.</li>
            <li>Use the short Supportive Spiral when you decide to.</li>
          </ol>
          <p>
            Better Life does not detect your context. It does not diagnose,
            monitor, block, or contact anyone. You decide whether the plan is
            used once, saved in this browser, or discarded.
          </p>
          <Button autoFocus onClick={() => setShowHow(false)}>
            Got it
          </Button>
        </dialog>
      ) : null}
    </section>
  );
}
