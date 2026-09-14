# Cycle 3 Pathway and Mode Boundaries

- Issue: #20
- Branch: `codex/20-protective-spiral`
- Date: 2026-07-16
- Status: product-definition and research protocol only
- Canonical owner: Thread 05 for modes and transitions (`BL-MODE-01`)

## Decision Frame

| Required question | Cycle 3 answer |
| --- | --- |
| User problem | A person may want help following a prior self-authored decision during a difficult moment, while still needing agency, essential access, recovery, and care. |
| Expected benefit | Supportive guidance, optional friction, or bounded strict protection may help; no Better Life benefit is established. |
| Supporting evidence | Evidence-supported conclusion: bounded self-management mechanisms merit research. Better Life mode efficacy, safety, and comparative benefit are hypotheses. |
| Required data | Prefer local mode, scope, rule version, start/expiry, pending change, selected cooling candidate, comprehension receipt, recovery rehearsal receipt, and adapter health. No explicit content is required. |
| Consent requirements | User-chosen setup time, voluntary readiness confirmation, exact preview, comprehension, and separate consent for each purpose. Strict additionally requires recovery rehearsal. |
| Safety risks | Lockout, essential-access harm, shame, panic, care displacement, compulsive reassurance, coercive setup, inaccessible recovery, and stale commitments. |
| Misuse risks | Partner/employer/family control, inferred incapacity, surveillance, indefinite enforcement, renamed ally veto, and learning/reward prerequisites. |
| Platform feasibility | Platform limitation: enforcement differs by device/layer and can fail or be bypassed. No universal or impossible-bypass claim is permitted. |
| Success metric | Comprehension, voluntary choice, agency, recovery completion, legitimate-use harm, adverse effects, expiry/teardown correctness, and incremental benefit between adjacent modes. |
| Exit strategy | Immediate safe exit where appropriate, independent user-controlled recovery, exact expiry, degraded-state fallback, teardown, and removal of a mode if harm exceeds incremental benefit. |

## Exact User-Facing Mode Copy

| Mode | Exact primary copy | Behavior promise | Must never imply |
| --- | --- | --- | --- |
| Supportive | `Guide me` | Offer optional, private, non-enforcing guidance and one easy exit. | Diagnosis, weakness, monitoring, blocking, or treatment. |
| Friction | `Help me pause` | Add the exact visible user-chosen step or pause before a selected context, with legitimate-use recovery. | Prevention guarantee, punishment, moral failure, or inaccessible exit. |
| Strict | `Protect the decision I made while calm` | Apply an exact finite user-authored rule within approved adapter limits, with health state and independent recovery. | AI-confirmed calmness/capacity, permanent lock, clinical severity, or third-party authority. |

Repository decision: modes are product-control choices, not diagnoses, treatment levels, recovery stages, capacity ratings, or moral scores. The product never assigns a mode.

## Operational Meaning of `While Calm`

The phrase in Strict copy names the user's own earlier decision. It does not authorize inference.

Strict setup requires all four observable events:

1. `User-chosen setup time`: the user initiates setup at a time they choose; no behavioral model decides that they are calm.
2. `Voluntary readiness confirmation`: the user confirms they wish to configure the rule now and can leave without penalty.
3. `Comprehension`: the user demonstrates understanding of scope, duration, adapter limits, pending-change behavior, independent recovery, expiry, and teardown in a non-clinical check.
4. `Recovery rehearsal`: the user completes the approved independent recovery path in a safe simulation before activation.

Failure or refusal means `not eligible to activate Strict now`, not incapacity, diagnosis, or personal failure. Supportive, exit, care routes, and essential access remain available. No model, biometric, time-of-day heuristic, typing pattern, browsing pattern, ally, moderator, clinician, or questionnaire may certify calmness for Better Life activation.

## Eligibility by Mode

| Gate | Supportive | Friction | Strict |
| --- | --- | --- | --- |
| User selects mode | Required | Required | Required |
| Exact scope/behavior preview | Simple preview | Required | Required by layer |
| Voluntary readiness confirmation | Required | Required | Required |
| Comprehension | Dismiss/exit understood | Pause/exception/expiry understood | Scope/limits/change/recovery/expiry/teardown demonstrated |
| Recovery rehearsal | Not required; exit always available | Narrow exception route preview | Required independent rehearsal |
| Adapter evidence | None | Only for the selected visible step | Approved layer-specific capability/health evidence |
| External gates | Low-fidelity user/clinical/accessibility review | Incremental benefit plus privacy/accessibility review | Friction benefit first; platform/security/coercion/legal/clinical/accessibility approval |
| Pathway stage/reward/payment | Never required | Never required | Never required |

## Cooling Candidate Set

These are research candidates, not defaults, recommendations, or equivalent options:

| Candidate | Research question | Required boundary |
| --- | --- | --- |
| Immediate, where appropriate | Is immediate change safer for exit, care, accessibility, coercion, or essential access? | Safety recovery cannot be delayed. |
| 15 minutes | Does a short pause add agency without material disruption? | Exact end time and cancel/continue behavior shown. |
| 1 hour | Does a longer pause remain understandable and proportionate? | Legitimate-use route remains. |
| 12 hours | Can a bounded half-day interval be recalled and recovered safely? | Sleep/work/time-zone context considered. |
| 24 hours | Does one day introduce care, work, or account-recovery harm? | No silent extension. |
| 72 hours | Is multi-day friction ever justified by incremental evidence? | Stronger external review and essential-use safeguards. |
| Next morning | Is a user-defined local time clearer than elapsed hours? | User confirms time zone, daylight-saving handling, and exact timestamp. |
| End of selected difficult window | Can the user name a finite contextual window without product inference? | Product does not infer when the window starts/ends. |
| Fixed term | Is a selected policy term understandable and safe? | Exact start/end; no default renewal. |
| Scheduled review | Does a named review appointment improve intentionality? | Review is not automatic renewal or third-party approval. |

Repository decision: no cooling default is approved. Candidate selection must be voluntary, shown as exact local date/time or event rule, and bounded by immediate safety/accessibility/care recovery.

## Transition Invariants

| Transition | Required behavior | Prohibited behavior |
| --- | --- | --- |
| Off -> Supportive | User selects `Guide me`; close/skip always visible. | Assigned mode, diagnosis, or history requirement. |
| Supportive -> Friction | Preview exact step, context, duration, recovery, data, and limit; confirm. | Escalation because the user skipped content or had a setback. |
| Friction -> Strict | Pass all Strict setup gates and external stage gates. | Reward/stage/payment requirement or inferred calmness. |
| Strict/Friction decrease | Apply the exact previously selected user-controlled pending-change rule. | Ally/sponsor veto, moving deadline, social notification by default. |
| Any mode -> Safe recovery | Restore necessary access and suspend social/external dependencies immediately where appropriate. | Delay for compliance, learning, reward, or approval. |
| Any mode -> Care route | Provide accurate bounded route without changing mode secretly. | Claiming care means failure or that product replaces care. |
| Any mode -> Expired/Off | End at exact term; revoke active authority and show resulting state. | Silent renewal or expired enforcement. |
| Any mode -> Teardown | Remove rules, permissions, tokens, pending changes, notifications, and local data selected for deletion. | Orphaned control or exit penalty. |

## Living Pathway Interface

Canonical pathway ownership remains Thread 06 (`BL-PC-01`). Thread 05 consumes only a user-selected optional support action; it does not own stage completion.

- Pathway content may explain a mode or help the user prepare a private plan.
- Mode selection, essential access, safe recovery, exit, teardown, professional care, and crisis/emergency routes do not require a stage, lesson, reflection, story, reward, payment, peer, ally, or model.
- Skipping, deferring, revising, repeating, or exiting a pathway never escalates a mode or changes protection.
- A setback never triggers Strict, extends a cooling period, removes a reward, notifies a person, or marks failure.
- Rewards may acknowledge optional learning only after a separate safety review; they never change mode capabilities or recovery priority.

## Non-Impersonation and Social Authority

- Better Life/AI may explain current product state from verified facts; it does not impersonate a psychiatrist, psychologist, therapist, sponsor, emergency service, or human peer.
- Peers, allies, moderators, professionals, and external sponsors have no Better Life mode, adapter, change, recovery, key, teardown, or exit authority.
- Ally co-approval and recovery-share custody are prohibited, regardless of label.

## Research Sequence

1. Static comprehension of exact mode copy and no-inference explanation.
2. Low-fidelity Supportive-only `Guide me` flow versus no tool/current coping.
3. Friction concept only after Supportive safety and usefulness review.
4. Cooling-candidate comparison with no default and prespecified adverse outcomes.
5. Strict static comprehension and recovery rehearsal only after adjacent evidence and all specialist gates.
6. Adapter testing uses synthetic inputs before any participant enforcement research.

No sequence step authorizes the next automatically.

## First MVE Boundary

`MVE` means `Minimum Viable Experiment`. The first MVE is small, local, accountless, practical, Supportive-only, manual, and non-clinical. It has no Friction/Strict enforcement, rewards, peer/ally/community, model learning, diagnosis, treatment, or inferred mental state.

## Verification and Terminal Status

- Repository-state verified: changes are product-definition documentation only.
- Desk-review observation: the exact copy, cooling candidates, no-inference rule, pathway boundary, transition invariants, and Strict gates are present.
- Not performed: participant research, clinical/coercion/accessibility/legal review, adapter test, recovery rehearsal, state-machine test, or enforcement test.

Terminal status: **Ready for low-fidelity mode and pathway-comprehension research. Enforcement remains prohibited; no implementation authorization.**
