# Cycle 2 Product Shape And Lifecycle UX

- Status: research product definition; no production implementation authorization
- Issue: #25 and Founder Amendment Issue #42
- Review date: 2026-07-15

## Classification

This document uses: `Source-verified fact`, `Evidence-supported conclusion`, `Repository decision`, `Founder decision`, `Founder decision pending`, `Design requirement`, `Proposed control`, `Hypothesis`, `Platform limitation`, `Open question`, `Repository-state verified`, `Research procedure executed`, `Desk-review observation`, `Executed test result`, and `Arithmetic check`.

Cycle 3 clarification: repository and scenario review are not executed tests. `Executed test result` requires environment/version, input, expected result, observed result, evidence location, and pass/fail.

No screen, adapter, permission flow, protection mode, or lifecycle control described here has been implemented or tested with users.

## Architecture Pre-Check

| Required element | Classification | Cycle 2 answer |
| --- | --- | --- |
| User problem | Evidence-supported conclusion | Some adults want a calm-state plan that can create visible support or bounded friction later without diagnosis, surveillance, third-party ownership, or false cross-device claims. |
| Expected benefit | Hypothesis | A small accountless core plus explicitly staged adapters may test user value before expensive multi-layer enforcement. |
| Supporting evidence | Evidence-supported conclusion | Threads 01-09 bound platform feasibility, mechanism transfer, safety, privacy, ecosystem, and cost; none establishes Better Life efficacy or product-market fit. |
| Required data | Design requirement | Local Constitution/policy, mode, adapter capability/health, consent receipts, pending changes, recovery and teardown state; explicit content and raw browsing history are unnecessary. |
| Consent requirements | Founder decision | The user initiates setup at a chosen time, voluntarily confirms readiness, and demonstrates comprehension; Strict also requires recovery rehearsal. No calmness, capacity, or mental state is inferred. Every adapter permission, external flow, and material change has a separate visible receipt. |
| Safety risks | Evidence-supported conclusion | Lockout, coercion, shame, false confidence, sensitive disclosure, inaccessible recovery, care displacement, and orphan controls. |
| Misuse risks | Evidence-supported conclusion | Partner/employer administration, secret reporting, ally veto, vulnerability optimization, and strictness used as punishment. |
| Platform feasibility | Platform limitation | Supportive can be platform-light; Friction and Strict depend on adapter-specific browser/OS/account/network capability and remain bypassable or externally controlled. |
| Success metric | Hypothesis | Comprehension, agency, mode/permission understanding, exact-change recall, adapter health truth, recovery/teardown success, burden/shame, false restriction, and incremental benefit. |
| Exit strategy | Design requirement | Keep layers separable; downgrade/expire/recover/teardown visibly; stop before MVP if MVE or adapter spikes lack safe incremental value. |

## Stage Sequence

| Stage | Classification | Artifact/experience | Data and people | Advancement gate |
| --- | --- | --- | --- | --- |
| 0. Research MVE | Repository decision | Paper/clickable setup, Constitution, three-mode explanation, dashboard states, manual Spiral, change/recovery/teardown scenarios. | Synthetic data; no account, monitoring, external AI, ally send, stranger network, or payment. | Repeated user problem, comprehension, agency/value, no unacceptable harm, specialist approval. |
| 1. Local digital MVE | Hypothesis | Accountless local prototype of Supportive mode, plan, static education, manual Spiral, control view, no-save/delete. | Local test data under approved protocol; no enforcement adapter. | Incremental value over paper/no tool and verified zero external intimate flow. |
| 2. Adapter spikes | Platform limitation | Disposable technical research for Chromium/Firefox behavior, Android network path, and Apple official-control feasibility; synthetic domains only. | No participant behavior; minimum permissions; separate threat/teardown tests. | Capability, false block/bypass, performance, permissions, health, recovery, uninstall, and orphan results. |
| 3. Integrated product prototype | Hypothesis | Local dashboard plus one approved adapter; Supportive and bounded Friction; Strict marked unavailable unless all Strict gates pass. | No cloud by default; exact adapter receipt; no social network. | User incremental benefit, safety/privacy/accessibility/legal/security, full-cost, and teardown evidence. |
| 4. Actual MVP candidate | Founder decision pending | Accountless local core plus the smallest validated adapter set and only modes each adapter can truthfully support. | Optional services remain separate; peer/AI excluded. | Independent score >=95, zero Critical/High, founder approval, all applicable gates. |

MVE means Minimum Viable Experiment, not a production product. An adapter spike answers a bounded feasibility question and must be disposable; it does not create a roadmap commitment.

## Mode UX Contract

| Mode | Founder-defined promise | Primary UX | Permission/data | Availability rule |
| --- | --- | --- | --- | --- |
| Supportive | `Guide me` | Manual Pause, private plan, neutral prompt, one action/fallback, optional reviewed route. | No adapter permission by default; local plan/no-save option. | Available in MVE if language, privacy, and accessibility gates pass. |
| Friction | `Help me pause` | Exact trigger preview, pause/confirm/detour, immediate legitimate-use exception, health state. | Narrow per-adapter permission and local rule/event. | Offered only for a spike-approved scope; never described as prevention. |
| Strict | `Protect the decision I made while calm` | Exact policy, user-chosen setup, voluntary confirmation, comprehension, recovery rehearsal, finite term, pending downgrade, health/degraded state, teardown. | Highest justified permission; versioned receipt; no raw history/cloud default. | `Not offered` until platform, coercion, security, privacy/legal, accessibility, full-cost, user-benefit, and teardown gates pass. |

The mode selector is a segmented control only when all displayed modes are genuinely available. Otherwise, unavailable modes appear as plain status with the unmet gate; they are not teasers or upsells.

## Information Architecture

| View | Classification | Must answer | Must not contain |
| --- | --- | --- | --- |
| Home | Design requirement | Current mode, policy summary, protection-stack health, pending change/expiry, Pause, and one safe next action. | Streak, moral score, fear alert, upsell, feed. |
| My policy | Design requirement | Goal/neutral label, mode, context/time/device/browser/account/network scope, expiry, recovery, outcomes, version. | Diagnosis, inferred intent, explicit-history requirement. |
| Protection Stack | Design requirement | Each adapter/layer: on/off/degraded/unknown, exact scope, permission, last health evidence, known gaps, repair/disable. | One composite `fully protected` claim. |
| Changes | Design requirement | Requested before/after, due time, cooling-off rule, cancel/keep/apply, receipts and history. | Moving deadline, ally veto, hidden mutation. |
| Progress | Design requirement | User-selected agency/fit/burden/repair plus product-control integrity and missingness. | Recovery/risk/adherence score, public streak, causal claim. |
| Privacy and people | Design requirement | Local/cloud data, receipts, permissions, devices, processors, ally role/data/expiry, last external send. | Hidden developer state or bundled consent. |
| Recovery | Design requirement | Legitimate-use, safety/coercion, lost account/device, compromised ally, degraded adapter, essential access. | Intimate explanation requirement or sole ally route. |
| Teardown | Design requirement | What will stop/remove, external owner, residual, backup/offline device, partial-failure owner, reinstall effect. | False `delete all` or silent orphan. |
| Learn/help | Design requirement | Evidence/limits, platform support, care/emergency routes, accessibility/language support. | Treatment or emergency-monitoring promise. |

## First Setup

| Step | Classification | User-visible decision | Exit/failure behavior |
| ---: | --- | --- | --- |
| 0 | Design requirement | Adult voluntary self-use, non-clinical boundary, no universal protection. | Leave; care/emergency routes remain available. |
| 1 | Design requirement | Local/no-save privacy summary and shared-device/backup limits. | Try without save or leave. |
| 2 | Hypothesis | One neutral goal/category and optional reason. | Skip optional detail; no explicit narrative. |
| 3 | Founder decision | Choose Supportive, or learn why Friction/Strict may be unavailable. | No pressure toward stronger mode. |
| 4 | Hypothesis | Choose one primary action/fallback and broad context. | Skip/edit; accessibility override. |
| 5 | Design requirement | Preview Constitution: scope, term, review/expiry, recovery, outcomes, data. | Edit/discard/use session-only. |
| 6 | Design requirement | If adapter requested, show capability, exact permission, external owner/data, bypass, health, recovery, teardown. | Decline leaves Supportive core unchanged. |
| 7 | Design requirement | If Strict is eligible, rehearse independent recovery and essential access. | Failure keeps Strict off. |
| 8 | Design requirement | Activate exact version and issue receipt. | Partial adapter activation reports degraded/off, never success. |

Permissions are progressive: request only when the user chooses the capability and after explanation. Broad permission cannot be requested merely to simplify engineering.

## Exact-Change Preview

Every material change shows:

1. `Before` and `after` mode, scope, schedule, duration, adapter, permission, data, person, and recovery.
2. What happens now, what becomes pending, due time/timezone, and what cancellation means.
3. Which receipt becomes invalid, which remains valid, and what new confirmation is required.
4. Legitimate-use and immediate safety-recovery paths.
5. Teardown or residual effect for removed layers.

| Command | Classification | Required behavior |
| --- | --- | --- |
| Increase | Proposed control | Fresh confirmation; Strict also requires comprehension and recovery rehearsal. |
| Request downgrade | Founder decision | Create visible finite pending change under user-precommitted rule. |
| Cancel downgrade | Design requirement | Keep current policy and remove pending change; no ally permission/notification/penalty. |
| Apply due change | Design requirement | Re-authenticate if configured, show exact effect, update receipts and remove obsolete controls. |
| Renew | Design requirement | Show health/limits/adverse findings and require current confirmation; no default auto-renewal. |
| Expire | Design requirement | End enforcement at declared time; no stale adapter rule. |
| Replace | Design requirement | Versioned change plus old-rule/permission/ally cleanup and partial-failure report. |

## Cooling-Off UX

- Founder decision: a Strict/Friction downgrade may use a finite rule selected by the user during an eligible setup process; the product does not infer calmness or capacity.
- Hypothesis: candidate intervals require research; no default duration is approved.
- Design requirement: the pending panel shows requested change, requested-at, due-at with timezone, remaining time without alarm pressure, `cancel change`, and `safety recovery`.
- Design requirement: offline/server failure cannot secretly extend the due time; the documented local/external authority and next trustworthy action are shown.
- Repository decision: ally co-approval and recovery-share custody are prohibited; no social actor can move the deadline or remove independent recovery.

## Health And Degraded States

| Adapter state | UI meaning | Allowed actions | Prohibited claim |
| --- | --- | --- | --- |
| `OFF` | No current consent/control. | Learn/enable if gate passes. | Protected. |
| `STARTING` | Permission/rule activation not yet confirmed. | Cancel, retry, use Supportive. | Active before verification. |
| `HEALTHY` | Last adapter-specific checks passed for exact scope/time. | Review, test, change, disable. | Universal or future guarantee. |
| `DEGRADED` | Known partial function, stale check, missing permission, conflict, or provider failure. | Restore essential access, repair, lower mode, teardown. | Strict still fully active. |
| `UNKNOWN` | Current state cannot be observed. | Treat as unverified, show reason, use safer fallback. | Assume fail-open or fail-closed succeeded. |
| `BYPASSED/REMOVED` | Observable alternate path, uninstall, or external removal. | Preserve remaining layers; reconfigure or teardown; no blame. | Infer intent or moral failure. |
| `ORPHAN` | Artifact exists without current policy/receipt or expected cleanup failed. | Stop affected mode, remove/reconcile, incident review. | Complete teardown. |

The dashboard may summarize `2 of 3 configured layers currently healthy` but cannot collapse different scopes into a protection score.

## Progress UX

| Family | Classification | Display rule |
| --- | --- | --- |
| Agency/fit | Hypothesis | Optional user response about choice and plan usefulness. |
| Burden/adverse effect | Hypothesis | Shame, distress, rumination, coercion, lockout, disclosure, care interference; reviewed even if use rises. |
| Repair | Hypothesis | One user-chosen adjustment; no reset/failure language. |
| Chosen behavior | Hypothesis | Optional user-defined measure with uncertainty/missingness; never disorder severity. |
| Product control | Design requirement | Consent, change, recovery, health, expiry, delete and teardown correctness. |

Usage, session count, blocked attempts, strictness, payer status, and ally acknowledgement cannot be presented as personal progress or optimized as success proxies.

## Recovery UX

| Entry | Required response | Stop signal |
| --- | --- | --- |
| False/legitimate block | Show matched rule/layer and narrow time/target exception without intimate explanation. | Full disable is only route or essential access blocked. |
| Essential access | Restore account/care/safety/work/legal/accessibility path under predeclared rule. | Adherence outranks essential need. |
| Coercion concern | Neutral safe exit, suspend ally contact, pause irreversible changes, independent route. | Ally/partner notified or controls exit. |
| Lost device/account/key | Re-authenticate independently, finite recovery, rotate old material, list residual devices. | Original device or ally is sole route. |
| Compromised ally | Revoke role/key, rotate, independent recovery, disclose recipient-copy limits. | Ally extends lock or sees history. |
| Adapter degraded | Restore documented safe state, show what remains, repair/lower/teardown. | Silent fail-open/fail-closed. |
| User distress/care need | Stop/reduce intervention and show reviewed real-world routes. | Product claims assessment/rescue or delays care. |

## Teardown And Uninstall UX

1. Preview affected mode/policy, layers, permissions, data, ally, pending changes, essential access, backups/offline devices, external owners, and expected residuals.
2. Quiesce new processing, revoke roles/tokens/keys/permissions, remove product-created rules/profiles/stores/notifications, then verify by re-enumeration.
3. Report each item as removed, retained with reason/expiry, external/manual, failed/retry owner, or unknown/blocker.
4. A platform uninstall may occur without product callback. On reinstall/next observable contact, reconcile expiry/receipt/revocation/orphans before activation.
5. Uninstall or bypass is not treated as relapse, dishonesty, or a reason to escalate control.

Any high-privilege orphan, stale Strict control, restored deleted policy, inaccessible recovery, hidden D3/D4 copy, or false `complete` result is a Critical stop.

## Research Scenarios

| Scenario | Expected behavior |
| --- | --- |
| User selects Supportive and refuses storage | Session-only plan/Pause works; closing removes it. |
| User requests Friction on unsupported Safari/Firefox scope | Exact unsupported status; no Chromium claim transfer; Supportive remains. |
| User declines extension permission | No repeated pressure; core unchanged; receipt shows off. |
| Extension rule activates only in one profile | Dashboard names that profile and alternate-path limits. |
| Strict eligibility check fails recovery rehearsal | Strict remains not offered; no partial activation. |
| Strict downgrade requested during configured window | Pending exact change with due time, cancel and safety recovery. |
| Adapter loses permission while offline | On next check show degraded/unknown; no false health. |
| Legitimate work/care site is blocked | Narrow exception/essential access without explicit explanation. |
| Ally is hostile/unavailable | Independent timeout/recovery; revoke role; no veto. |
| Policy expires while app is closed | Adapter rule cannot remain authorized; next open shows expiry/removal/partial result. |
| App/extension uninstalled then reinstalled | No automatic reactivation; reconcile stale artifacts/receipts. |
| User deletes Constitution with offline second device | Local teardown plus visible unresolved device/tombstone state; no total-deletion claim. |
| User reports shame or compulsive checking | Disable measure/reduce mode/stop study; no adherence pressure. |
| User needs professional or emergency help | Direct reviewed route without account, payment, education completion, or monitoring promise. |

## Acceptance And Stop Rules

Repository decision: an actual MVP candidate is not accepted unless independent quality score is at least 95/100, all universal/applicable specialist gates pass, and Critical/High defects are zero. Founder approval cannot waive safety, privacy, consent, clinical-claim, legal, security, accessibility, or coercion gates.

Stop or narrow before product implementation when the MVE lacks incremental value, users cannot explain mode/scope/limits/recovery, adverse effects are unacceptable, an adapter cannot prove exact capability/health/teardown, essential access is harmed, costs require unsafe monetization, or cross-thread specialist decisions remain open.

No account, cloud sync, external AI, anonymous peer network, payment, organization administration, or human-support operation is part of the baseline MVP candidate. Each remains a separate future decision with its own evidence, consent, safety, privacy, cost, and exit proof.

External review required: founder, independent ChatGPT quality review, clinical/method, coercive-control, privacy/legal/DPO, browser/mobile/network security, accessibility/inclusion/localization, consumer/business, and direct user/adverse-effect research.
