# VS-01 — Supportive Core

- Track: Engineering prototype
- Frozen research baseline: `298ab23fa00899ba533db3cecc487d6cf7c02087`
- Freeze tag: `better-life/research-freeze-phase-4.1`
- Implementation branch: `codex/vertical-slice-01-supportive-core`
- Status: Complete creator implementation; independent and founder review required
- Product boundary: Supportive-only, local, nonclinical, no monitoring, no blocking

## Decision Frame

| Required question    | VS-01 answer                                                                                                                                                  | Classification                        |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| User problem         | A person may want a simple way to recall a self-chosen goal and ordinary next action without setting up monitoring or an account.                             | Founder decision                      |
| Expected benefit     | Reduce immediate decision burden by presenting the person's own goal, selected action, and fallback in a short sequence.                                      | Hypothesis; not participant-validated |
| Supporting basis     | The frozen research baseline and founder vertical-slice brief define a Supportive-only low-fidelity product boundary. No clinical-effect claim is made.       | Repository decision                   |
| Required data        | One general goal, one broad context, one action ID, one fallback ID, one persistence choice, and schema version.                                              | Implemented and code-verified         |
| Consent              | The person initiates every flow and separately chooses Use once, Save on this device, or Discard.                                                             | Implemented and E2E-verified          |
| Safety risks         | Overinterpreting support as treatment, entering sensitive text, false privacy confidence, or mistaking the app for monitoring.                                | Open risk with explicit UI controls   |
| Misuse risks         | Another person could operate an unlocked shared browser profile or read its local storage. No ally, remote access, surveillance, or automatic contact exists. | Platform limitation                   |
| Platform feasibility | A static React application can support the complete journey with in-memory state and browser `localStorage`; no backend is required.                          | Implementation-verified in Chrome     |
| Success metric       | The journey, Spiral, persistence choices, editing, reset, keyboard path, and malformed-data recovery pass automated acceptance tests.                         | Test evidence                         |
| Exit strategy        | Leave guide exits setup; Exit leaves the Spiral; Finish clears use-once state; Clear my data removes saved state; Discard deletes the current plan.           | E2E-verified                          |

## Implemented Journey

1. **Welcome and boundary** explains practical self-guidance, no diagnosis, no monitoring, no blocking, no automatic contact, the three data choices, and the ability to leave.
2. **Goal** accepts one neutral preset or bounded custom text up to 120 characters.
3. **Context** accepts one neutral preset or bounded custom text up to 120 characters and states that Better Life does not detect it.
4. **Supportive action** offers six neutral options, including skipping.
5. **Fallback** offers another action, closing Better Life, or no fallback. It never contacts another person.
6. **Data choice** presents exactly Use once, Save on this device, and Discard.
7. **Protective Spiral** presents Pause, the user's goal, selected action, fallback, and nonjudgmental completion.
8. **Saved-plan home** restores a valid local plan after reload and offers use, edit, and clear controls.
9. **Recovery** isolates malformed or unsupported local state and offers a neutral explicit reset.

The Focus and Routine scenarios are synthetic product demos. They are not therapeutic recommendations.

## Screens

- Welcome and product boundary
- Goal choice and bounded custom goal
- Broad context choice and bounded custom context
- Supportive action choice
- Fallback choice
- Persistence choice
- Five-step Protective Spiral
- Saved-plan home
- Malformed-state recovery
- How-this-works dialog

## Architecture

```text
src/
  app/
    App.tsx                       # screen orchestration and state ownership
    app.css                       # responsive product presentation
  features/
    onboarding/                   # welcome and five-decision builder
    support-plan/                 # data contract, validation, approved options
    protective-spiral/            # operational Supportive interaction
    privacy-controls/             # restored-plan home and clear controls
  shared/
    storage/                      # browser storage abstraction
    ui/                           # small reusable controls and shell
tests/                            # model, storage, and React integration
e2e/                              # acceptance, privacy, accessibility, evidence
```

`App` owns the active in-memory plan, optional valid saved plan, and current screen. Feature components receive only the data and commands they need. There is no router, global state package, backend, authentication layer, event bus, analytics client, or external runtime service.

## Local Data Model

```ts
interface SupportPlan {
  schemaVersion: 1;
  goal: string; // maximum 120 characters
  broadContext: string; // maximum 120 characters
  primaryAction: SupportActionId;
  fallbackAction: FallbackAction;
  persistenceMode: 'use_once' | 'save_local';
}
```

The model intentionally has no account, timestamps, hidden identifier, diagnosis, severity, history, telemetry, contact details, or free-text action field.

### Persistence Behavior

| Choice              | Runtime behavior                                                                                            |
| ------------------- | ----------------------------------------------------------------------------------------------------------- |
| Use once            | Plan remains in React memory only. Finish or Exit clears it. Reload/close also loses the in-memory state.   |
| Save on this device | A validated minimal plan is written under `better-life.vs01.support-plan` in this browser's `localStorage`. |
| Discard             | Current and saved plan state are cleared immediately and the app returns to Welcome.                        |

Storage supports create, read, update, clear, schema validation, malformed JSON recovery, unsupported-version recovery, and a visible fallback when browser-local saving fails.

## Privacy Behavior

- No analytics, telemetry, advertising, error-tracking SaaS, account, API client, cloud database, remote font, or remote asset is configured.
- User text is rendered by React as text; it is never inserted as arbitrary HTML or executed.
- The runtime network test completes the journey and observes only same-origin static application requests.
- The test additionally confirms that the synthetic goal and context do not appear in request payload records.
- Development and preview normally request HTML, JavaScript, and CSS from `127.0.0.1:4173`; these static local requests contain no plan data.
- The UI uses factual language: “Saved in this browser on this device.” It does not claim anonymity, encryption, formal security, or technical privacy proof beyond observed behavior.

## Screenshot Evidence

- [375px welcome](screenshots/vs01-mobile-375.png)
- [768px welcome](screenshots/vs01-tablet-768.png)
- [1440px welcome](screenshots/vs01-desktop-1440.png)
- [Supportive action](screenshots/vs01-builder-action.png)
- [Protective Spiral](screenshots/vs01-protective-spiral.png)
- [Saved plan](screenshots/vs01-saved-plan.png)

Screenshots contain synthetic demo content only.

## Accessibility

- Semantic headings, buttons, labels, description lists, status messages, and alerts
- Visible focus styles and a skip link
- Keyboard-activatable critical journey
- Focus handoff when builder steps and app screens change
- No mouse-only control
- Reduced-motion override
- Automated axe checks on Welcome and saved-plan states

Automated checks do not establish formal WCAG conformance. Screen-reader, zoom, forced-colors, cognitive-accessibility, and real-user evaluation remain open.

## Test Evidence

| Layer                | Result                     | Scope                                                                                                                                  |
| -------------------- | -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Unit and integration | 15/15 passed               | Validation, bounds, schema, storage CRUD, corrupted data, persistence modes, builder, Spiral, editing, clearing, storage-write failure |
| E2E                  | 13/13 passed               | E2E-01 through E2E-07, runtime network, axe, responsive evidence, flow screenshots                                                     |
| Responsive           | Passed                     | 375px, 768px, and 1440px Playwright captures plus visual inspection                                                                    |
| Runtime privacy      | Passed within tested scope | No external requests and no plan text in observed request records                                                                      |
| Production build     | Passed                     | Vite production bundle generated without errors                                                                                        |

Exact final command outputs are summarized in `VS_01_ACCEPTANCE_REPORT.md`.

## Run Locally

```bash
npm ci
npm run dev
```

Open `http://127.0.0.1:4173`.

Verified quality commands:

```bash
npm run format:check
npm run typecheck
npm run lint
npm test
npm run build
npm run test:e2e
npm audit
git diff --check
```

`npm run test:e2e` uses the installed Google Chrome channel and starts the built local preview automatically.

## Known Limitations

1. E2E evidence covers installed Google Chrome only; Firefox, Safari, Edge, and mobile-device browsers are not verified.
2. `localStorage` is not encrypted and is available to the same browser profile and origin. People using a shared or unlocked profile should prefer Use once or Discard.
3. Clearing browser site data removes a saved plan. There is no export, backup, account, or sync.
4. The prototype supports one plan and one browser profile only.
5. No participant evidence, usability study, clinical review, treatment evidence, or product-effect evidence exists.
6. Axe and keyboard automation do not replace screen-reader, low-vision, motor, cognitive, or lived-experience review.
7. The application does not detect context, run in the background, send notifications, or work as a device-native offline app.
8. Denied storage access, read, and deletion errors are not handled by recovery UI or separately simulated. Save-time failure is handled and tested. Ordinary load and clear paths pass; broader storage-failure behavior remains a Medium reliability limitation for review.

## Bounded Extension Points

- Add schema migration only when a new local field has a demonstrated product need.
- Add browser projects to the existing Playwright suite before making broader compatibility claims.
- Revise research copy only after scoped founder and independent review; do not treat prototype wording as final language.
- Add an installable/offline delivery mode only if its cache and deletion behavior can preserve the same privacy controls.

These are technical extension points, not authorization for VS-02 or future product features.

## Explicit Non-Goals

VS-01 does not implement Friction Mode, Strict Mode, blocking, extensions, VPN, DNS, router control, device control, Screen Time, Family Controls, monitoring, detection, content classification, AI, LLM APIs, diagnosis, treatment, emergency response, peer networking, trusted allies, sponsors, Twelve-Step delivery, fellowship content, rewards, badges, tokens, subscriptions, payments, marketing, analytics, cloud accounts, or cloud sync.

It is a prototype implementation track. It does not authorize participant research, clinical activity, production release, or merge of the frozen research PRs.
