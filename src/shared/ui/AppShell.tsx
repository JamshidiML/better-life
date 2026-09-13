import { Compass, HardDrive, RadioTower } from 'lucide-react';
import type { ReactNode } from 'react';

const JOURNEY_STEPS = [
  'Goal',
  'Context',
  'Action',
  'Fallback',
  'Data choice',
] as const;

interface AppShellProps {
  children: ReactNode;
  currentStep?: number;
  phaseLabel?: string;
}

export function AppShell({
  children,
  currentStep,
  phaseLabel = 'Supportive Core',
}: AppShellProps) {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <aside className="app-rail" aria-label="Better Life">
        <div>
          <div className="brand-lockup">
            <span className="brand-mark" aria-hidden="true">
              <Compass size={22} strokeWidth={2} />
            </span>
            <div>
              <strong>Better Life</strong>
              <span>{phaseLabel}</span>
            </div>
          </div>

          {typeof currentStep === 'number' ? (
            <nav className="journey-progress" aria-label="Guide progress">
              <p>Build your guide</p>
              <ol>
                {JOURNEY_STEPS.map((step, index) => (
                  <li
                    className={
                      index === currentStep
                        ? 'is-current'
                        : index < currentStep
                          ? 'is-complete'
                          : ''
                    }
                    key={step}
                    aria-current={index === currentStep ? 'step' : undefined}
                  >
                    <span aria-hidden="true">{index + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </nav>
          ) : null}
        </div>

        <div className="rail-facts" aria-label="Prototype boundaries">
          <p>
            <HardDrive size={17} aria-hidden="true" />
            Local by design
          </p>
          <p>
            <RadioTower size={17} aria-hidden="true" />
            No monitoring
          </p>
        </div>
      </aside>
      <main id="main-content" className="app-main" tabIndex={-1}>
        {children}
      </main>
    </div>
  );
}
