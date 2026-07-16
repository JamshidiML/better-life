# Cycle 2 Protection Constitution

- Status: research product definition; no production or participant authorization
- Issue: #21 and Founder Amendment Issue #42
- Review date: 2026-07-15

## Classification

This document uses: `Source-verified fact`, `Evidence-supported conclusion`, `Repository decision`, `Founder decision`, `Founder decision pending`, `Design requirement`, `Proposed control`, `Hypothesis`, `Platform limitation`, `Open question`, `Repository-state verified`, `Research procedure executed`, `Desk-review observation`, `Executed test result`, and `Arithmetic check`.

Cycle 3 clarification: repository/schema review is not an executed test. `Executed test result` requires environment/version, input, expected result, observed result, evidence location, and pass/fail.

No schema or policy behavior described here has been implemented or validated with users.

## Neutral Position

- Founder decision: the Protection Constitution is the user-owned, versioned statement of a selected protection policy.
- Design requirement: it is not a diagnosis, treatment plan, confession, contract with another person, proof of abstinence, or assessment of moral worth.
- Design requirement: the user may name it `Protection plan`, `My boundaries`, `Focus plan`, or another neutral label; sensitive wording is not required.
- Design requirement: a person can use private planning and Supportive mode without creating a Constitution for enforcement.
- Open question: the term `Constitution` itself requires user-language and localization testing.

## Architecture Pre-Check

| Required element | Classification | Cycle 2 answer |
| --- | --- | --- |
| User problem | Evidence-supported conclusion | Some adults want a calm-state way to preserve a later intention across contexts without diagnosis, surveillance, or third-party ownership. |
| Expected benefit | Hypothesis | An inspectable policy may reduce ambiguity about scope, mode, change, recovery, and data while preserving self-authorship. |
| Supporting evidence | Evidence-supported conclusion | Thread 02 permits cautious research on self-management mechanisms; it does not establish Better Life efficacy or the benefit of enforcement. |
| Required data | Design requirement | Policy identity/version, mode, scope, context, duration, consent, recovery, review, outcome choices, and adapter references; explicit content is unnecessary. |
| Consent requirements | Founder decision | The user initiates setup at a chosen time, voluntarily confirms readiness, and demonstrates comprehension; Strict additionally requires recovery rehearsal. No calmness, capacity, diagnosis, or mental state is inferred. Each external layer, share, or material change has an exact consent receipt. |
| Safety risks | Evidence-supported conclusion | Coercion, lockout, overbreadth, shame, compulsive review, accessibility harm, care displacement, and sensitive-data exposure. |
| Misuse risks | Evidence-supported conclusion | Partner/employer authorship, hidden monitoring, indefinite control, discriminatory inference, and ally veto. |
| Platform feasibility | Platform limitation | Context and enforcement capabilities differ by adapter and cannot be represented as universal or tamper-proof. |
| Success metric | Hypothesis | Ownership/comprehension, exact-scope recall, change/recovery success, burden/shame, false restriction, deletion/teardown, and user-relevant outcomes. |
| Exit strategy | Design requirement | Pause, expire, replace, export, delete, or teardown the Constitution without penalty and with precise residual-data disclosure. |

## Minimal Constitution

The minimal form is the default research object.

| Field | Classification | Required content | Data/minimization rule |
| --- | --- | --- | --- |
| `policy_id`, `version` | Design requirement | Random local identifier and monotonic version. | No behavior encoded in identifier. |
| `owner_attestation` | Design requirement | Adult, voluntary self-use, date, and device/session that confirmed. | No partner/employer ownership field. |
| `neutral_goal` | Hypothesis | One user-authored, editable sentence or category. | No explicit detail or diagnostic label required. |
| `mode` | Founder decision | Supportive, Friction, or Strict. | Store exact selected mode, not inferred intensity. |
| `scope` | Design requirement | Named context, site/app category, account, device, browser/profile, or network layer. | Use the narrowest adapter-readable reference. |
| `schedule` | Design requirement | Start, active windows if any, timezone behavior, and finite expiry. | No silent indefinite term. |
| `change_rule` | Founder decision | Exact downgrade delay, pending-change handling, cancellation, renewal, and expiry behavior. | Candidate durations remain hypotheses. |
| `recovery_rule` | Design requirement | Legitimate-use, safety/coercion, lost-device/account, and degraded-adapter paths. | Must work without an ally. |
| `consent_receipts` | Design requirement | Version, purpose, data, recipient/processor, permission, term, withdrawal effect. | Separate per layer/share/material change. |
| `review_at` | Design requirement | Next user-chosen review date or expiry-only review. | No repeated pressure if ignored; no inference about mental state. |

## Extended Constitution

Every extended field is optional and separately justified.

| Field group | Classification | Candidate content | Guard and exit |
| --- | --- | --- | --- |
| Personal reason/value | Hypothesis | Short user-authored text. | Local/hidden default; edit, hide, or delete without weakening unrelated controls. |
| Broad contexts | Hypothesis | Time, routine, environment, or user-named situation. | No inferred cause or explicit-content history. |
| Protective Spiral | Hypothesis | One primary action and one fallback. | Skip/exit; no punishment or automatic escalation. |
| Essential access | Design requirement | Accounts, care, work, safety, legal, accessibility, or recovery routes that must remain usable. | Review before Strict activation and every material scope change. |
| Trusted ally | Hypothesis | Exact level, recipient, message/event classes, term, timeout, revocation. | Optional; no content/history by default; independent recovery. |
| Adapter set | Platform limitation | Browser, OS, device, network, or official account-control references. | Per-adapter health/limits/teardown; no aggregate guarantee. |
| Outcome choices | Hypothesis | Up to three user-selected agency, fit, burden, repair, behavior, or function measures. | No universal streak/score; delete/disable independently. |
| Education preferences | Hypothesis | Concise/explanatory form, language, reading/accessibility preferences. | Scientific conclusion cannot be personalized. |
| Review prompts | Hypothesis | Cadence and neutral snooze. | Off by default; no loss framing. |

## Scope Grammar

| Dimension | Classification | Examples | Required limitation |
| --- | --- | --- | --- |
| Context | Hypothesis | User-named routine or broad situation. | Never inferred diagnosis, sexuality, religion, trauma, or intent. |
| Time | Design requirement | Date range, recurring window, timezone rule. | Show daylight-saving/travel behavior; finite expiry. |
| Device | Platform limitation | This device or named enrolled device. | No claim about another or unmanaged device. |
| Browser/profile | Platform limitation | Supported browser and exact profile. | Alternate profiles/browsers disclosed. |
| Account | Platform limitation | Official account-control scope where available. | Account recovery and provider ownership remain external. |
| Network | Platform limitation | Approved DNS/VPN/router scope. | Other networks, encrypted DNS, VPN conflicts, and admin ownership disclosed. |
| Mode | Founder decision | Supportive, Friction, Strict. | Promise must match adapter capability and health. |

Each rule compiles only to adapters whose capability statement covers the exact scope. Unsupported combinations remain visibly unprotected; the system must not widen scope to make a rule appear successful.

## Consent Receipt

| Receipt field | Classification | Requirement |
| --- | --- | --- |
| What changed | Design requirement | Human-readable before/after plus structured policy diff. |
| Why and evidence state | Design requirement | User-stated purpose and classification; no efficacy certainty. |
| Data and location | Design requirement | Fields, local/cloud/processor destination, retention, deletion effect. |
| Permission/control | Design requirement | OS/browser/account/network grant and exact revocation path. |
| Person/organization | Design requirement | Exact ally, moderator, processor, or organization and role. |
| Duration | Design requirement | Activation, expiry, review, renewal rule. |
| Recovery/teardown | Design requirement | Independent route, affected layers, residuals, partial-failure behavior. |
| Confirmation | Design requirement | Current user action, timestamp, policy version, receipt version. |

Bundled consent is prohibited. A changed recipient, purpose, data class, adapter permission, mode, recovery rule, or retention period invalidates the affected receipt and requires a new preview and confirmation.

## Review, Change, Expiry, And Renewal

| Event | Classification | Required behavior |
| --- | --- | --- |
| Routine review | Proposed control | Show scope, health, pending changes, expiry, data, ally role, and outcomes; allow `keep`, `change`, `pause`, or `teardown`. |
| Increase protection | Proposed control | Exact preview and comprehension; Strict also requires recovery rehearsal. |
| Decrease protection | Founder decision | Use the user's finite precommitted delay, visible due time, and independent safety recovery. |
| Cancel pending decrease | Design requirement | Keep the current policy; remove pending state; no ally permission or social signal. |
| Mode/scope/data/ally change | Design requirement | Versioned diff and fresh affected receipts; unchanged receipts remain traceable. |
| Expiry | Design requirement | Enforcement ends at the declared time unless the user actively renews. |
| Renewal | Design requirement | Show adapter health/limitations and unresolved harms; no silent default renewal. |
| Supersede | Design requirement | New version references old version; revoke obsolete rules, receipts, grants, and ally roles. |
| Delete/teardown | Design requirement | Remove the policy and adapter artifacts; disclose and audit any precise legal/security exception. |

## Ally And Recovery Constitution

| Question | Classification | Required answer before activation |
| --- | --- | --- |
| Is an ally required? | Founder decision | No. |
| What can the ally see? | Design requirement | Exact event/message fields, never browsing or explicit history by default. |
| What can the ally do? | Design requirement | At most notification or acknowledgement without veto; Cycle 3 prohibits co-approval and recovery-share custody. |
| When does the role end? | Design requirement | Fixed expiry, withdrawal, replacement, compromise, or relationship-change event. |
| What if unavailable/hostile? | Design requirement | Timeout and independent recovery; ally cannot extend or punish. |
| What if account/device is lost? | Design requirement | Independent re-authentication and finite recovery; rotate old grants/material. |
| What if coercion is suspected? | Design requirement | Neutral safe exit, suspend ally notifications, protect essential access, specialist route. |

Anonymous peers cannot be Constitution owners, approvers, recovery factors, policy recipients, or enforcement agents.

## Outcomes And Interpretation

| Outcome family | Classification | Permitted interpretation | Prohibited interpretation |
| --- | --- | --- | --- |
| Agency/control | Hypothesis | User-reported ability to choose/use/recover. | Proof of recovery or moral strength. |
| Plan fit | Hypothesis | Action/rule was understandable and usable. | User compliance or honesty. |
| Burden/adverse effects | Hypothesis | Shame, distress, rumination, coercion, lockout, disclosure, care interference. | Acceptable cost merely because usage rises. |
| Repair | Hypothesis | User chose a next adjustment after a difficult event. | `Relapse` diagnosis or failure reset. |
| Chosen behavior | Hypothesis | User-defined measure with missingness and uncertainty. | Disorder severity, causality, universal success. |
| Product integrity | Design requirement | Consent, recovery, expiry, health, deletion, teardown correctness. | Personal outcome. |
| Function/wellbeing | Open question | Optional validated measure after review. | Product-caused improvement without controlled evidence. |

No Constitution score, adherence score, risk score, public streak, or comparison rank is permitted.

## Care Boundary And Inclusion Review

| Concern | Classification | Design requirement |
| --- | --- | --- |
| Clinical need | Design requirement | Qualified-care and emergency routes remain directly accessible; the Constitution does not assess, monitor, or replace care. |
| Moral incongruence | Evidence-supported conclusion | Distress and self-labeling can be shaped by moral incongruence; the product must not validate a diagnosis or impose a moral frame. |
| Sexuality/relationship diversity | Design requirement | Do not infer orientation, relationship form, practice, identity, or consent from goals; reviewers must include diverse lived experience. |
| Religion/culture | Design requirement | User may bring chosen values, but no doctrine, abstinence frame, or shame language is assumed or ranked. |
| Disability/accessibility | Design requirement | Recovery, education, and policy controls must work with assistive technology and must not require unsafe physical actions. |
| Neurodiversity/literacy/language | Design requirement | Offer concise, plain-language, and localized forms without changing consent or scientific meaning. |
| Coercive control | Design requirement | Private setup and independent recovery are mandatory; a compromised device remains an explicit platform limitation. |
| Minors | Repository decision | Current scope is adults only; age assurance and child-safety handling require legal/safety design before any expansion. |

## Scenarios And Stop Rules

| Scenario | Expected behavior | Stop signal |
| --- | --- | --- |
| User creates minimal Supportive plan | Only owner, neutral goal, mode, term, review, and receipts are required. | Pressure to disclose explicit context. |
| User selects site rule on one browser profile | Receipt names exact profile/adapter and alternate-path limitation. | UI implies device-wide or cross-browser coverage. |
| User changes timezone or travels | Show schedule interpretation before change; no silent extension. | Protection interval changes invisibly. |
| User requests Strict downgrade | Create finite pending change under precommitted rule; independent safety recovery remains. | Ally veto or moving due time. |
| User ignores renewal | Policy expires; no guilt prompt or silent enforcement. | Auto-renewal without current confirmation. |
| Ally relationship ends | Revoke role, rotate material, preserve independent recovery, disclose retained prior messages. | Old ally remains authorized. |
| Plan language causes shame or identity conflict | Edit/archive/remove fields or stop; record adverse effect only by consent. | Product insists on adherence or validates diagnosis. |
| User needs professional help | Care route remains accessible without completing education or weakening privacy. | Product delays or substitutes for care. |
| Constitution is deleted | Teardown inventory reports removed, retained, failed, and owner of follow-up. | Orphan adapter rule or unexplained residual. |

Stop participant escalation for coercive authorship, hidden or bundled consent, inaccessible recovery, essential-access harm, diagnostic/moral interpretation, material exclusion, care displacement, silent expiry/renewal error, or orphaned control.

External review required: clinical/method, coercive-control, privacy/legal, security/platform, accessibility, inclusion/lived experience, localization, and research ethics. Founder decisions remain pending on final naming, cooling candidates, Strict eligibility, and quantitative thresholds. Ally co-approval and recovery sharing are prohibited in Cycle 3.
