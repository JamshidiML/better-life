# Personal plan specification

Status: Cycle 1 Draft - non-diagnostic self-help plan
Issue: #21
Branch: `codex/21-personal-recovery-plan`
Research cutoff: 2026-07-15

## Position and pre-check

| Required element | Classification | Cycle 1 answer |
| --- | --- | --- |
| User problem | Evidence-supported conclusion | Some adults want to turn a self-chosen behavior goal into concrete preparation, action, and review without diagnosis or surveillance. |
| Expected benefit | Hypothesis | A concise user-authored plan may reduce memory/decision load and support agency before, during, and after difficult moments. |
| Supporting evidence | Evidence-supported conclusion | Thread 02 supports testing selected planning, values, coping, and repair mechanisms while withholding treatment/efficacy claims. |
| Required data | Hypothesis | Goal, reason/value, user-described contexts, preferred actions, device/platform choices, optional support route, review cadence, and outcomes selected by the user. |
| Consent requirements | Design requirement | Every collection, automation, device integration, external processing, and human share is separate, visible, revocable, and editable. |
| Safety risks | Design requirement | Moralizing, diagnosis implication, rumination, compulsive tracking, care displacement, coercion, and sensitive-data exposure. |
| Misuse risks | Design requirement | Partner-authored goals, hidden monitoring, employer use, forced disclosure, public streaks, and inferred sexuality/religion/trauma are prohibited. |
| Platform feasibility | Platform limitation | Device actions vary by Thread 01 capability; a plan must remain useful without enforcement. |
| Success metric | Hypothesis | Plan comprehension, self-ownership, use of a chosen action, perceived agency, burden/shame, review completion, and safe exit. |
| Exit strategy | Design requirement | Pause, archive, export, delete, or replace the plan without penalty; remove personalization that cannot explain itself. |

## Plan lifecycle

| Stage | Classification | User task | Output | Safety boundary |
| --- | --- | --- | --- | --- |
| 1. Scope | Design requirement | Confirm adult voluntary self-use and non-clinical limits. | Consent state | No partner/employer setup. |
| 2. Choose | Hypothesis | State one self-chosen change in neutral language. | Editable goal | No diagnosis, forced abstinence, or moral score. |
| 3. Connect | Hypothesis | Add a brief personal reason/value or skip. | Optional local text | User can hide/delete; do not infer values. |
| 4. Notice | Hypothesis | Select or add broad situations where support might help. | User-authored context labels | No explicit content, browsing history, or causal claim required. |
| 5. Prepare | Hypothesis | Choose one primary and one fallback action. | Calm-state action plan | Safety/accessibility checks; no punishment. |
| 6. Configure | Platform limitation | Optionally select manual, schedule, or local platform entry. | Transparent rule | Automation off by default; show bypass/failure limits. |
| 7. Support | Hypothesis | Optionally choose private, ally, professional, or emergency routes. | Bounded support choices | No automatic send or peer/AI clinical role. |
| 8. Review | Hypothesis | Select useful non-clinical outcomes and cadence. | Minimal progress view | No required streak or “recovery score.” |
| 9. Re-consent | Design requirement | Review changes affecting data, restriction, or people. | Versioned consent | Material change cannot rely on old consent. |

## Data fields

| Field | Classification | Need and default | Visibility / control |
| --- | --- | --- | --- |
| Adult/voluntary attestation | Design requirement | Required for current scope; minimal state | User visible; renew on material concern/change. |
| Goal label | Hypothesis | Required for plan usefulness; user-authored | Local default; edit/delete. |
| Personal reason/value | Hypothesis | Optional | Hidden by default in notifications/sharing. |
| Context labels | Hypothesis | Optional broad categories | No automatic inference; edit/delete. |
| Time/window | Hypothesis | Optional coarse schedule | Local; no location need. |
| Device/action rule | Platform limitation | Optional | Exact platform permission and limitation visible. |
| Primary/fallback action | Hypothesis | Required only to activate Spiral | User-authored/selected; review expiry. |
| Ally/resource | Hypothesis | Optional and off | Exact recipient/share preview; remove instantly. |
| Progress fields | Hypothesis | User selects; all optional for product use | Local summary; export/delete. |

## Explicitly excluded inputs and inferences

- **Design requirement:** no diagnosis, explicit-content upload, raw browsing history, screenshot capture, contact-list upload, precise location, or hidden partner reports.
- **Design requirement:** no inferred sexuality, religion, trauma, mental-health condition, relationship status, “addiction severity,” honesty, or probability of relapse.
- **Design requirement:** no eligibility, pricing, or feature restriction based on sensitive behavior or a generated risk score.

## Plan output

**Hypothesis:** A valid first plan fits on one calm-state summary:

1. “My chosen change” - user wording.
2. “Why it matters to me” - optional.
3. “When I may want support” - up to three broad contexts.
4. “First action / fallback” - one each.
5. “How to open support” - manual by default.
6. “Who or what can help” - optional, with boundaries.
7. “What I want to notice” - up to three selected outcomes.
8. “Review / pause / delete” - always visible.

## Failure and exit strategy

| Failure | Classification | Required response |
| --- | --- | --- |
| Plan is not used | Design requirement | Ask whether it still fits; never infer resistance or escalate punishment. |
| Goal changes | Design requirement | Preserve user agency; edit/archive rather than mark failure. |
| Automation fails | Platform limitation | Keep plan/manual Spiral usable and explain limitation. |
| Tracking increases shame or checking | Hypothesis | Turn off measure, simplify view, and offer deletion. |
| User needs clinical help | Design requirement | Show qualified-care route without diagnosing or abandoning private tools. |

## Cycle 1 recommendation

- **Hypothesis:** Test a paper/low-fidelity plan with manual Spiral and no account, AI, monitoring, or human share.
- **Repository decision:** Do not call the plan a treatment plan or claim recovery outcomes.
- **Open question:** “Personal plan” may be safer language than “recovery plan”; user and clinical review must decide.
