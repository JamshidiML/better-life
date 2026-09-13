import { Check } from 'lucide-react';

interface ChoiceButtonProps {
  label: string;
  detail?: string;
  selected: boolean;
  onClick: () => void;
  testId?: string;
}

export function ChoiceButton({
  label,
  detail,
  selected,
  onClick,
  testId,
}: ChoiceButtonProps) {
  return (
    <button
      aria-pressed={selected}
      className={`choice-button ${selected ? 'is-selected' : ''}`}
      data-testid={testId}
      onClick={onClick}
      type="button"
    >
      <span className="choice-button__check" aria-hidden="true">
        {selected ? <Check size={16} strokeWidth={3} /> : null}
      </span>
      <span>
        <strong>{label}</strong>
        {detail ? <small>{detail}</small> : null}
      </span>
    </button>
  );
}
