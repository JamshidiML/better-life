# VS-01 Acceptance Report

- Slice: `VS-01 — Supportive Core`
- Date: 2026-08-12
- Delivery verification: 2026-09-13
- Frozen baseline: `298ab23fa00899ba533db3cecc487d6cf7c02087`
- Freeze tag: `better-life/research-freeze-phase-4.1`
- Implementation branch: `codex/vertical-slice-01-supportive-core`
- Creator: Codex
- Decision: Candidate for founder and independent ChatGPT review; do not merge

## Acceptance Matrix

| Acceptance criterion        | Expected                                                                            | Observed                                                                                                | Result                 | Evidence                            | Limitation                                                                      |
| --------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ---------------------- | ----------------------------------- | ------------------------------------------------------------------------------- |
| Welcome boundary            | Short, human no-diagnosis/no-monitoring/no-blocking/no-contact/data-choice boundary | All boundaries and leave control visible                                                                | Pass                   | React integration, E2E, screenshots | Copy is research-stage working language                                         |
| General goal                | Neutral presets and bounded custom text                                             | Five presets, Something else, 120-character maximum                                                     | Pass                   | Model and UI tests                  | No user comprehension evidence                                                  |
| Broad context               | User-entered; no detection claim                                                    | Five presets, Something else, explicit no-detection copy, 120-character maximum                         | Pass                   | Model and E2E                       | No contextual automation by design                                              |
| Supportive action           | Small neutral set, skippable, nonclinical                                           | Six actions including Continue without an action                                                        | Pass                   | Integration and E2E-07              | Wording lacks specialist/user validation                                        |
| Fallback                    | Another action, close, or none; no automatic contact                                | All three classes implemented                                                                           | Pass                   | Integration and E2E                 | No external communication exists                                                |
| Use once                    | Session memory only; Finish/Exit clears                                             | In-memory plan clears and reload is clean                                                               | Pass                   | E2E-01                              | Browser crash behavior is equivalent to losing memory, not explicitly simulated |
| Save locally                | Minimal plan restores after reload                                                  | Validated plan restores from one local key                                                              | Pass                   | Storage tests and E2E-02            | Browser-profile storage is unencrypted and single-device                        |
| Discard                     | Immediate deletion and neutral return                                               | Current/saved state cleared; Welcome returns                                                            | Pass                   | Integration and E2E-03              | None in current single-plan scope                                               |
| Protective Spiral           | 3–5 short interactions with exit and no forced timer                                | Five steps: Pause, goal, action, fallback, completion                                                   | Pass                   | Integration and E2E-01              | Benefit is not participant-validated                                            |
| Completion controls         | Finish, edit, restart, clear                                                        | All controls operational                                                                                | Pass                   | Integration; E2E-04/05              | Start again restarts the same plan only                                         |
| Edit                        | Updated plan persists correctly                                                     | Action/fallback can be changed and survive reload                                                       | Pass                   | E2E-04                              | Single-plan editing only                                                        |
| Clear everything            | Saved data removed; clean reload                                                    | Local key removed and Welcome restored                                                                  | Pass                   | E2E-05                              | Browser backups outside application control are not claimed cleared             |
| Corrupted state             | No crash; neutral recovery/reset                                                    | Malformed and unsupported data blocked from rendering                                                   | Pass                   | Unit tests and E2E-06               | Initial storage API denial is not separately simulated                          |
| Keyboard journey            | Critical journey completes by keyboard                                              | All seven builder decisions keyboard-activated                                                          | Pass                   | E2E-07                              | Full manual tab-order/screen-reader audit remains open                          |
| Accessibility automation    | No detectable critical automated violations                                         | Axe reports zero violations on Welcome and saved-plan states                                            | Pass in tested scope   | Playwright axe test                 | No formal WCAG claim                                                            |
| Responsive layout           | Usable at 375, 768, and 1440 pixels                                                 | Captures inspected without clipping, overlap, or text overflow                                          | Pass                   | Six screenshot artifacts            | Physical devices not tested                                                     |
| Runtime privacy             | No external user-data request                                                       | Only local static requests observed; plan text absent from request records                              | Pass in tested scope   | Runtime network E2E                 | Browser/OS behavior beyond test harness not claimed                             |
| No configured analytics/API | No endpoint or analytics client                                                     | No endpoint, `fetch`, XHR, WebSocket, beacon, analytics, telemetry, or remote asset configuration       | Pass                   | Source audit and runtime test       | Future dependencies require repeat audit                                        |
| Production build            | Static optimized build succeeds                                                     | Vite bundle generated                                                                                   | Pass                   | `npm run build`                     | Prototype is not production authorization                                       |
| Research separation         | VS-01 leaves the frozen branch/tag and research PRs untouched                       | Implementation starts at frozen SHA on a separate branch; PR #45 and freeze tag retain the approved SHA | Pass for this delivery | Git and GitHub verification         | PR #30 was already merged outside this delivery; see status record below        |

## Verification Results

| Command                        | Result                                                                                     |
| ------------------------------ | ------------------------------------------------------------------------------------------ |
| `npm ci`                       | Passed: 243 packages installed from the lockfile; install audit reported 0 vulnerabilities |
| `npm run format:check`         | Passed                                                                                     |
| `npm run typecheck`            | Passed                                                                                     |
| `npm run lint`                 | Passed with zero warnings                                                                  |
| `npm test`                     | Passed: 3 files, 15 tests                                                                  |
| `npm run test:e2e`             | Passed: 13 tests in installed Google Chrome                                                |
| `npm run build`                | Passed: production bundle generated                                                        |
| `npm audit --audit-level=high` | Passed: 0 vulnerabilities                                                                  |
| `git diff --check`             | Passed                                                                                     |

The first sandboxed E2E attempt could not bind `127.0.0.1:4173` (`EPERM`). The same test command was rerun with approved local-server permission and passed. This was an execution-environment restriction, not an application defect.

### Delivery Verification Record

- The checks above were repeated for delivery on 2026-09-13 with Node `v26.3.0`, npm `11.16.0`, Vitest `4.1.11`, and installed Google Chrome. The delivery creator score is 90/100, pending independent review; the original 91/100 is preserved below.
- The refreshed audit initially reported two moderate findings in Vitest `4.1.10` and `@vitest/mocker` (GHSA-82fw-gwwq-j7x9). Updating to patch release `4.1.11` cleared them; the subsequent audit reported zero vulnerabilities. Application runtime dependencies were unchanged.
- The lockfile reinstall reported optional `fsevents` install-script approval warnings. No additional script approvals were granted; build and test verification completed successfully.
- Responsive evidence starts at the top of each page after the initial focus handoff; horizontal overflow is checked at 375, 768, and 1440 pixels. All six screenshots use synthetic content.
- Repository-state verified: PR #45 is open, Draft, and unmerged at `298ab23fa00899ba533db3cecc487d6cf7c02087`. Both local and remote freeze tags resolve to that commit.
- Repository-state verified: PR #30 is already merged, with GitHub recording `2026-08-19T09:30:45Z`. That merge predates this delivery. PRs #31-#40 remain open Drafts. This delivery neither changes those PRs nor rewrites that history.

### Score History

| Record                            | Creator | Independent reviewer | Accepted score | Decision                                                        |
| --------------------------------- | ------: | -------------------- | -------------- | --------------------------------------------------------------- |
| Original VS-01 report, 2026-08-12 |  91/100 | Pending              | Not assigned   | Candidate for review                                            |
| Delivery verification, 2026-09-13 |  90/100 | Pending              | Not assigned   | Draft delivery; founder and independent ChatGPT review required |

The frozen research scores are a separate history: Phase 4 creator 88, Phase 4 ChatGPT 87, Phase 4.1 creator 88, and Phase 4.1 ChatGPT 90. No research score is changed or converted into an implementation acceptance score.

Delivery inspection lowered functional completeness by one point: access to `window.localStorage`, `getItem`, and `removeItem` can throw without a recovery UI. The earlier report described only an untested initial-storage limitation. This is now an explicit Medium reliability limitation requiring review; no denial scenario has been executed or represented as passing.

## Runtime Network Result

The complete synthetic Supportive journey was observed through Playwright request events.

- External origins contacted: **0**
- User-plan POST or request payloads: **0**
- Synthetic goal/context found in observed request records: **0**
- Expected local requests: application HTML, JavaScript, and CSS from `http://127.0.0.1:4173`

This supports a local-only runtime claim for the tested production preview. It does not prove all browser, extension, operating-system, or future-build behavior.

## Quality Scorecard

**Delivery creator self-score: 90/100**

| Dimension                     | Weight | Score | Evidence for awarded points                                                                                                               | Deduction                                                                      |
| ----------------------------- | -----: | ----: | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Functional completeness       |     25 |    23 | Complete builder, Spiral, use once, local save/reload, discard, edit, restart, clear, recovery, and synthetic demos in the tested browser | One-plan/browser scope; denied storage access/read/delete has no recovery UI   |
| Test evidence                 |     20 |    19 | 15 unit/integration tests and 13 E2E tests cover every required named journey plus network and screenshots                                | E2E runs only in installed Chrome; no physical device matrix                   |
| UX quality                    |     15 |    12 | Calm responsive product UI, clear hierarchy, explicit boundaries, six inspected screenshots                                               | No real-user usability/comprehension evidence; copy remains working language   |
| Privacy/data minimization     |     15 |    14 | Six-field minimal model, no IDs/timestamps/telemetry, local-only observed runtime, clear/discard controls                                 | Browser local storage is unencrypted and visible to the same profile/origin    |
| Accessibility                 |     10 |     8 | Semantic controls, focus handoff, skip link, reduced motion, keyboard E2E, zero axe violations in tested views                            | No formal WCAG, screen-reader, forced-colors, zoom, or lived-experience review |
| Code quality/maintainability  |     10 |     9 | Strict TypeScript, feature-oriented components, validated storage boundary, zero-warning lint, lockfile, small dependency set             | No top-level error boundary; only the current schema version exists            |
| Documentation/reproducibility |      5 |     5 | Architecture, data behavior, screenshots, commands, evidence, limitations, non-goals, and acceptance matrix recorded                      | None in required creator-document scope                                        |

### Score Decision

- Total: **90/100**
- Critical defects: **0 known**
- High defects: **0 known**
- Medium limitations: **4**
- Confidence: **Medium-high for tested prototype behavior; low for user benefit**
- Creator decision: **Meets the numeric VS-01 prototype target and is ready for independent/founder review; not self-approved and not merge-authorized**

The score is not clinical evidence, participant evidence, production readiness, formal accessibility conformance, or approval of any future mode.

## Known Defects And Limitations

| Severity | Item                                                                     | Current control                                                                                                           | Exit condition                                                                                |
| -------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Medium   | Cross-browser behavior beyond installed Chrome is unverified             | Claims remain limited to tested Chrome behavior                                                                           | Add Firefox/WebKit/Edge-compatible runs and inspect failures                                  |
| Medium   | Saved plan is unencrypted browser-profile storage                        | General-text prompt, factual copy, Use once/Discard, minimal fields                                                       | Approved stronger local storage design with truthful recovery/deletion behavior               |
| Medium   | No real-user evidence for usefulness, comprehension, or emotional impact | No efficacy claim; prototype/research separation                                                                          | Separately authorized research after governance gates, not this PR                            |
| Low      | Automated accessibility evidence is incomplete                           | Semantic UI, keyboard test, axe, reduced motion                                                                           | Manual screen-reader/zoom/forced-colors and qualified review                                  |
| Medium   | Browser storage access/read/delete failure lacks recovery UI             | Save-time failure is caught and tested; ordinary clear/read paths pass, but denied storage access is outside tested scope | Add fault-injection coverage and explicit recovery without claiming failed deletion succeeded |

No unresolved Critical or High defect is currently known within the declared local prototype scope. Independent review may revise this classification.

## Non-Authorization Record

This report does not authorize participant research, clinical use, production release, Friction Mode, Strict Mode, blocking, monitoring, AI, external support, adapter execution, or merge. Research PRs remain separate from the VS-01 delivery; their inspected status, including the pre-existing merge of PR #30, is recorded above.
