# VS-01 — Supportive Core

- Track: Engineering prototype
- Frozen research baseline: `298ab23fa00899ba533db3cecc487d6cf7c02087`
- Freeze tag: `better-life/research-freeze-phase-4.1`
- Implementation branch: `codex/vertical-slice-01-supportive-core`
- Status: Revised after independent ChatGPT review (86/100); second independent and founder review required
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
| Exit strategy        | Temporary finish/exit/discard clears only the temporary guide; explicit deletion reports success only after readback confirms absence.                        | Test evidence                         |

## Implemented Journey

1. **Welcome and boundary** explains practical self-guidance, no diagnosis, no monitoring, no blocking, no automatic contact, the three data choices, and the ability to leave.
2. **Goal** accepts one neutral preset or bounded custom text up to 120 characters.
3. **Context** accepts one neutral preset or bounded custom text up to 120 characters and states that Better Life does not detect it.
4. **Supportive action** offers six neutral options, including skipping.
5. **Fallback** offers another action, closing Better Life, or no fallback. It never contacts another person.
6. **Data choice** presents exactly Use once, Save on this device, and Discard.
7. **Protective Spiral** presents Pause, the user's goal, selected action, fallback, and nonjudgmental completion.
8. **Saved-plan home** restores a valid local plan after reload and offers use, edit, and clear controls.
9. **Recovery** distinguishes malformed/unsupported data, unreadable storage, and unconfirmed deletion. It offers retry or continued use without saving, with persistent factual notices.

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
- Malformed-state, storage-unavailable, and unconfirmed-deletion recovery
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

| Choice              | Runtime behavior                                                                                                                                                                                                                      |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Use once            | In-memory plan only. Finish/Exit clears temporary state and returns to the saved plan if present; saved bytes are unchanged. Reload discards temporary use and restores the original saved plan.                                      |
| Save on this device | An explicit successful write saves or replaces the validated plan under `better-life.vs01.support-plan`. Failure stays on the data-choice screen with an alert. Disabled while prior storage is unreadable or removal is unconfirmed. |
| Discard             | Discard temporary changes only. Preserve existing saved data and return to the saved-plan home, or Welcome when no valid saved plan is loaded. Never calls browser storage.                                                           |

Storage access is deferred through a getter inside the adapter's guarded operations. Read results distinguish empty, ready, corrupt, and unavailable. Writes and removals return explicit success/failure results. No storage exception text or plan content is logged.

### Temporary Edits And Consent

A saved plan and a temporary plan have separate lifecycles. Editing creates a draft in memory. Use once runs the edited draft without any storage write or removal; Finish, Exit, Discard, and Leave guide clear temporary state and return to the original saved-plan home. Reload restores the original saved bytes. Only choosing Save on this device replaces the saved plan; the button explains replacement before activation. Discard explicitly means discarding temporary changes.

### Storage Failures And Deletion

- Access/getItem failure: show a factual unavailable screen, preserve unknown stored data, and offer Try reading again or Continue without saving.
- Malformed/unsupported data: show the distinct data-recovery screen; no automatic deletion or replacement.
- Continuing without saving: retain the notice throughout the journey, keep Use once and Discard operational, and disable Save until storage is checked. Review browser storage on Welcome returns to the recovery controls.
- Failed setItem: keep the draft and the prior in-memory saved plan, show a static alert, focus it, and permit retry, Use once, or Discard. Success is reported only if the browser write returns successfully.
- Explicit Clear my data/reset: remove only the plan key, then read it back. Confirm removal only when that key is absent. Access, removal, or confirmation-read failure shows that removal could not be confirmed; it never emits the success message.
- After unconfirmed removal: drop application-held plan/draft references and offer retry or Use once. A saved plan may remain on disk, so the UI does not continue presenting the cached guide as confirmed saved or deleted.
- Confirmation describes the observed browser key at that moment. It does not assert secure erasure, backup deletion, prevention of later writes from other tabs, or browser/OS memory zeroization.

The revision changes no schema, data fields, storage key, dependency, or persistence system.

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

Revised states, each inspected at all requested widths:

| State                            | 375px                                                       | 768px                                                       | 1440px                                                        |
| -------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------------------------- |
| Temporary edit choices           | [Mobile](screenshots/vs01-revision-temporary-edits-375.png) | [Tablet](screenshots/vs01-revision-temporary-edits-768.png) | [Desktop](screenshots/vs01-revision-temporary-edits-1440.png) |
| Failed save                      | [Mobile](screenshots/vs01-revision-save-failed-375.png)     | [Tablet](screenshots/vs01-revision-save-failed-768.png)     | [Desktop](screenshots/vs01-revision-save-failed-1440.png)     |
| Original plan preserved          | [Mobile](screenshots/vs01-revision-saved-preserved-375.png) | [Tablet](screenshots/vs01-revision-saved-preserved-768.png) | [Desktop](screenshots/vs01-revision-saved-preserved-1440.png) |
| Unconfirmed deletion             | [Mobile](screenshots/vs01-revision-delete-failed-375.png)   | [Tablet](screenshots/vs01-revision-delete-failed-768.png)   | [Desktop](screenshots/vs01-revision-delete-failed-1440.png)   |
| Storage unavailable              | [Mobile](screenshots/vs01-revision-unavailable-375.png)     | [Tablet](screenshots/vs01-revision-unavailable-768.png)     | [Desktop](screenshots/vs01-revision-unavailable-1440.png)     |
| Use once with saving unavailable | [Mobile](screenshots/vs01-revision-use-once-only-375.png)   | [Tablet](screenshots/vs01-revision-use-once-only-768.png)   | [Desktop](screenshots/vs01-revision-use-once-only-1440.png)   |

## Accessibility

- Semantic headings, buttons, labels, description lists, status messages, and alerts
- Visible focus styles and a skip link
- Keyboard-activatable critical journey
- Focus handoff when builder steps and app screens change
- No mouse-only control
- Reduced-motion override
- Automated axe checks on Welcome, saved-plan, unavailable-storage, failed-save, and failed-deletion states
- Failure alerts receive focus or a focused recovery screen; normal transitions focus the main region or builder heading
- A browser keyboard test traverses from the failed-save alert back to Use once with Shift+Tab and activates it

Automated checks do not establish formal WCAG conformance. Screen-reader, zoom, forced-colors, cognitive-accessibility, and real-user evaluation remain open.

## Test Evidence

| Layer                | Result                     | Scope                                                                                                                                                                             |
| -------------------- | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unit and integration | 34/34 passed               | Original coverage plus temporary saved-plan lifecycle, all four throwing storage operations, retries, deletion readback, unknown/corrupt data preservation, and truthful feedback |
| E2E                  | 26/26 passed               | Original 13 checks plus saved-plan preservation/reload, failure injection, explicit deletion, keyboard error recovery, accessibility, and revised screens                         |
| Responsive           | Passed                     | 375px, 768px, and 1440px Playwright captures plus visual inspection                                                                                                               |
| Runtime privacy      | Passed within tested scope | No external requests and no plan text in observed request records                                                                                                                 |
| Production build     | Passed                     | Vite production bundle generated without errors                                                                                                                                   |

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
npm audit --audit-level=high
git diff --check
```

`npm run test:e2e` uses the installed Google Chrome channel and starts the built local preview automatically. Stop the dev server on port 4173 before running it.

## Known Limitations

1. E2E evidence covers installed Google Chrome only; Firefox, Safari, Edge, and mobile-device browsers are not verified.
2. `localStorage` is not encrypted and is available to the same browser profile and origin. People using a shared or unlocked profile should prefer Use once or Discard.
3. Clearing browser site data removes a saved plan. There is no export, backup, account, or sync.
4. The prototype supports one plan and one browser profile only.
5. No participant evidence, usability study, clinical review, treatment evidence, or product-effect evidence exists.
6. Axe and keyboard automation do not replace screen-reader, low-vision, motor, cognitive, or lived-experience review.
7. The application does not detect context, run in the background, send notifications, or work as a device-native offline app.
8. Fault injection covers denied access, getItem, setItem, removeItem, and deletion verification. It cannot establish all browser-policy, OS, hardware, eviction, or extension behavior.
9. The saved-plan view is a snapshot for a single tab. Concurrent changes from another tab or browser settings are not synchronized or conflict-resolved; user-visible preservation claims apply to this app's tested actions.
10. Deletion confirmation is limited to reading back the plan key as absent at that moment, not secure erasure or removal from browser/OS backups.

## Bounded Extension Points

- Add schema migration only when a new local field has a demonstrated product need.
- Add browser projects to the existing Playwright suite before making broader compatibility claims.
- Revise research copy only after scoped founder and independent review; do not treat prototype wording as final language.
- Add an installable/offline delivery mode only if its cache and deletion behavior can preserve the same privacy controls.

These are technical extension points, not authorization for VS-02 or future product features.

## Explicit Non-Goals

VS-01 does not implement Friction Mode, Strict Mode, blocking, extensions, VPN, DNS, router control, device control, Screen Time, Family Controls, monitoring, detection, content classification, AI, LLM APIs, diagnosis, treatment, emergency response, peer networking, trusted allies, sponsors, Twelve-Step delivery, fellowship content, rewards, badges, tokens, subscriptions, payments, marketing, analytics, cloud accounts, or cloud sync.

It is a prototype implementation track. It does not authorize participant research, clinical activity, production release, or merge of the frozen research PRs.
