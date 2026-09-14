import { ArrowRight, Edit3, HardDrive, Trash2 } from 'lucide-react';
import { Button } from '../../shared/ui/Button';
import { actionLabel, fallbackLabel } from '../support-plan/options';
import type { SupportPlan } from '../support-plan/model';

interface SavedPlanHomeProps {
  plan: SupportPlan;
  statusMessage?: string;
  onClear: () => void;
  onEdit: () => void;
  onUse: () => void;
}

export function SavedPlanHome({
  plan,
  statusMessage,
  onClear,
  onEdit,
  onUse,
}: SavedPlanHomeProps) {
  return (
    <section className="page saved-page" aria-labelledby="saved-title">
      <div className="eyebrow">
        <HardDrive size={16} aria-hidden="true" /> Saved in this browser
      </div>
      <h1 id="saved-title">Your saved guide is ready.</h1>
      {statusMessage ? (
        <p className="status-message" role="status">
          {statusMessage}
        </p>
      ) : null}
      <p className="lede">
        Better Life does not detect your context or start this guide on its own.
      </p>

      <dl className="plan-summary">
        <div>
          <dt>Your goal</dt>
          <dd>{plan.goal}</dd>
        </div>
        <div>
          <dt>Useful context</dt>
          <dd>{plan.broadContext}</dd>
        </div>
        <div>
          <dt>First action</dt>
          <dd>{actionLabel(plan.primaryAction)}</dd>
        </div>
        <div>
          <dt>Fallback</dt>
          <dd>{fallbackLabel(plan.fallbackAction)}</dd>
        </div>
      </dl>

      <div className="saved-actions">
        <Button icon={<ArrowRight size={19} />} onClick={onUse}>
          Use my guide
        </Button>
        <Button icon={<Edit3 size={18} />} onClick={onEdit} variant="secondary">
          Edit my plan
        </Button>
        <Button icon={<Trash2 size={18} />} onClick={onClear} variant="danger">
          Clear my data
        </Button>
      </div>

      <p className="data-fact">
        This prototype stores only the four choices shown above and its schema
        version. No account, analytics, cloud sync, or remote API is used.
      </p>
    </section>
  );
}
