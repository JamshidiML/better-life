# Cycle 2 Protection Modes And Reversal Ladder

- Status: research and product-definition protocol; no implementation authorization
- Issue: #20 and Founder Amendment Issue #42
- Review date: 2026-07-15

## Classification

This document uses: `Source-verified fact`, `Evidence-supported conclusion`, `Repository decision`, `Founder decision`, `Founder decision pending`, `Design requirement`, `Proposed control`, `Hypothesis`, `Platform limitation`, `Open question`, `Repository-state verified`, `Research procedure executed`, `Desk-review observation`, `Executed test result`, and `Arithmetic check`.

Cycle 3 clarification: `Executed test result` requires environment/version, input, expected result, observed result, evidence location, and pass/fail. Repository inspection and scenario review are not tests.

No proposed control has been implemented or tested with participants.

## Architecture Pre-Check

| Required element | Classification | Cycle 2 answer |
| --- | --- | --- |
| User problem | Evidence-supported conclusion | Some adults describe a gap between a calm-state intention and an immediate action; Better Life has not established prevalence, target fit, or individual benefit. |
| Expected benefit | Hypothesis | User-authored protection modes may make a chosen pause or alternative action easier while preserving agency. |
| Supporting evidence | Evidence-supported conclusion | Thread 02 supports research on bounded self-management mechanisms, not efficacy of Better Life or digital blocking. |
| Required data | Design requirement | Active mode, scoped rule, context, start/expiry, pending change, recovery route, consent receipt, and minimum local audit event. No explicit content is required. |
| Consent requirements | Founder decision | The user chooses the mode and exact policy at a user-chosen setup time, voluntarily confirms readiness, and completes the required comprehension check; Strict also requires recovery rehearsal. The product does not infer calmness, mental state, capacity, or diagnosis. Changes, sharing, and external processing require separate visible consent. |
| Safety risks | Evidence-supported conclusion | Lockout, shame, coercive configuration, inaccessible recovery, care displacement, over-reliance, and false confidence are material risks. |
| Misuse risks | Evidence-supported conclusion | A partner, employer, family member, or administrator could attempt surveillance, punishment, hidden enrollment, or indefinite control. |
| Platform feasibility | Platform limitation | Enforcement and uninstall resistance vary by browser, OS, account, device-management state, and network layer; no universal guarantee is possible. |
| Success metric | Hypothesis | Agency, comprehension, recovery success, legitimate-use harm, unwanted bypass, shame/burden, expiry correctness, and incremental value over Supportive mode. |
| Exit strategy | Design requirement | Every policy expires or is renewable by choice, has independent safe recovery, supports teardown, and is removed if harm exceeds incremental benefit. |

## The Three Modes

| Mode | Classification | User promise | Permitted behavior | Prohibited behavior |
| --- | --- | --- | --- | --- |
| Supportive | Founder decision | `Guide me` | Manual Spiral, neutral reminder, private plan, one chosen action, optional resource. | Blocking, forced delay, hidden monitoring, automatic ally contact. |
| Friction | Founder decision | `Help me pause` | Local warning, optional user-chosen pause, confirmation, context-specific detour, immediate legitimate-use route. | Claims that access is prevented, escalating punishment, inaccessible exit. |
| Strict | Founder decision | `Protect the decision I made while calm` | Scoped block/allow rules, finite policy term, precommitted downgrade delay, health/degraded state, independent user-controlled recovery. | Inferring calmness/capacity, secret enrollment, indefinite lock, universal protection claim, social ownership, disabling emergency/accessibility recovery. |

Supportive is the default research mode. Friction and Strict require incremental evidence and the relevant platform, privacy, security, accessibility, coercion, and legal gates.

## Policy Lifecycle

| Lifecycle event | Classification | Required behavior |
| --- | --- | --- |
| Draft | Design requirement | Show scope, layer, known bypasses, data, duration, recovery, ally role, and teardown effect before activation. |
| Activate | Design requirement | At a user-chosen setup time, voluntary readiness confirmation and comprehension create a versioned consent receipt. Strict activation also requires independent recovery rehearsal. No model or proxy infers mental state or capacity. |
| Increase | Proposed control | Supportive to Friction or Friction to Strict may begin after exact-change preview and confirmation; an optional reflection delay may be chosen. |
| Request decrease | Founder decision | A Friction/Strict downgrade creates a visible pending change under the user's calm-state rule; it never silently changes policy. |
| Cooling-off | Proposed control | The user chooses any finite delay in advance. Research candidates are: immediate where appropriate; 15 minutes; 1 hour; 12 hours; 24 hours; 72 hours; next morning; end of a selected difficult window; a fixed term; or a scheduled review. No default or universally preferred value is approved. |
| Cancel pending decrease | Design requirement | Cancelling means keep the current protection. It requires confirmation but no ally permission and creates no penalty. |
| Complete decrease | Design requirement | At the due time, re-authenticate if configured, show exact effect, then apply. If the service is unavailable, fail toward the previously documented safe state. |
| Renew | Design requirement | Renewal is never automatic by default. Show observed health/limitations and require current confirmation before the end time. |
| Expire | Design requirement | The policy ends at the stated time. Notify neutrally; retain no enforcement through an expired consent receipt. |
| Replace | Design requirement | Revoke the old policy/adapter grants before or atomically with the new policy; expose partial failure. |
| Teardown | Design requirement | Remove policy, pending changes, ally role, managed rules, credentials/tokens, notifications, and approved logs, subject to precisely disclosed legal/security exceptions. |

## Change And Recovery State Model

| State | Classification | Entry | User choices | Exit invariant |
| --- | --- | --- | --- | --- |
| `ACTIVE` | Design requirement | Confirmed unexpired policy | Continue, request change, legitimate-use recovery, safety recovery, review | No hidden transition. |
| `CHANGE_PREVIEW` | Design requirement | User requests mode/scope change | Confirm, edit, cancel | Cancel returns to unchanged policy. |
| `DECREASE_PENDING` | Design requirement | Confirmed downgrade under precommitted delay | Keep pending, cancel downgrade, invoke independent safety recovery | Ally may acknowledge only if explicitly selected; ally cannot extend. |
| `CHANGE_DUE` | Design requirement | Delay expires | Apply exact change, defer once only if preselected, cancel to keep protection | No indefinite limbo. |
| `TEMPORARY_EXCEPTION` | Design requirement | Legitimate-use recovery approved by user's rule | Use narrow exception, end early | Policy resumes at exact displayed time. |
| `SAFE_RECOVERY` | Design requirement | Lockout, coercion, accessibility, care, or account-compromise concern | Restore necessary access, suspend ally, rotate credentials, seek independent help | Human safety and essential access outrank adherence. |
| `DEGRADED` | Design requirement | Adapter/permission/account/network health fails | Restore safe access, repair adapter, lower mode, teardown | Do not claim protection while unhealthy. |
| `EXPIRED` | Design requirement | Policy term ends | Renew, choose lower mode, remain off | Expired policy cannot enforce. |

## Legitimate-Use Recovery

| Case | Proposed control | Safety boundary |
| --- | --- | --- |
| False positive | Show the matched rule/layer and offer the narrowest temporary exception. | Never require disclosure of intimate purpose. |
| Essential account or work task | Permit a user-predefined essential allow-list or a finite exception. | Strict mode cannot block account recovery, safety, healthcare, accessibility, or legal obligations. |
| Adapter failure | Restore a documented safe state and show `degraded`, layer, and next check. | Silent fail-open or fail-closed behavior is prohibited. |
| Lost credential/device | Use independent re-authentication and finite recovery, not ally veto. | Recovery must be tested without the configured ally or original device. |
| Coercion concern | Suspend ally notifications and irreversible changes; offer neutral exit and independent support. | The product cannot guarantee safety on a compromised device. |

`Temporary exception` changes access for a precise target and duration; it does not mutate the underlying policy. The preview must show target, duration, affected layer, local audit behavior, and resume time.

## Trusted-Ally Behavior

| Ally role | Classification | Allowed | Not allowed |
| --- | --- | --- | --- |
| None | Founder decision | Full product operation with independent recovery. | Making an ally mandatory. |
| Notification | Proposed control | Receive the exact previewed neutral event for a fixed term. | Browsing history, explicit context, device telemetry, secret notification. |
| Acknowledgement | Proposed control | Acknowledge a pending change or support request. | Veto, extend delay, punish, force explanation. |
| Time-limited co-approval | Repository decision | Prohibited in Cycle 3. | Any peer/ally approval, veto, delay extension, or protection authority. |
| Recovery share | Repository decision | Prohibited in Cycle 3. | Any peer/ally key custody or recovery authority. |

Anonymous peers can never hold any role in protection, change approval, recovery, reporting, or enforcement.

## Uninstall And Layer Loss

- Platform limitation: an ordinary extension or app cannot guarantee prevention of uninstall, alternate browsers, alternate accounts, other devices, or network changes.
- Design requirement: before removal, show the affected policy/layer and teardown action without shame, bargaining, or false prevention claims.
- Design requirement: if the OS/browser removes a component without product participation, the next available health check marks the layer unavailable; it does not infer intent.
- Design requirement: an unmanaged orphan rule, profile, DNS configuration, token, or notification is a teardown defect and blocks release.
- Proposed control: Strict mode may use an official managed-control adapter only after separate consent and legal/security review; management must remain visible and removable through documented recovery.

## Scenario Matrix

| Scenario | Expected behavior | Failure / stop signal |
| --- | --- | --- |
| User enters Supportive mode, skips every step | Close immediately with no penalty or escalation. | Nagging, failure label, or hidden history. |
| User enables Friction for one context | Preview exact trigger, pause, exception, duration, and platform limit. | Broad block or misleading prevention claim. |
| User enables Strict at a chosen setup time | Require voluntary readiness confirmation, exact policy, finite term, health check, comprehension, and recovery rehearsal. Do not infer calmness or capacity. | Activation without comprehension and independent recovery. |
| User requests Strict to Supportive during a high-risk moment | Create the precommitted pending change and show due time; safe recovery remains available. | Ally veto, moving deadline, or hidden cancellation. |
| User cancels that pending downgrade | Keep Strict, remove pending state, confirm locally. | Cancellation sends social signal or adds a penalty. |
| Cooling-off expires while device is offline | Apply at next trustworthy opportunity under the documented rule, showing elapsed/degraded state; never extend secretly. | Indefinite enforcement based on unavailable server. |
| Legitimate site is blocked | Narrow temporary exception or essential allow-list; no intimate explanation. | Full disable is the only recovery. |
| Ally is unavailable or hostile | Timeout to independent path, suspend/revoke role, preserve safe access. | Permanent lock or retaliation disclosure. |
| User loses all original devices | Independent recovery restores safe access and rotates old credentials. | Original device/ally is sole route. |
| Adapter is bypassed or uninstalled | Show layer unavailable when observable, preserve remaining layers, offer teardown/reconfigure. | Claim that Strict still protects. |
| Policy reaches expiry | Enforcement ends unless the user actively renews. | Silent auto-renewal or expired control. |
| User reports shame, panic, coercion, or care interference | Stop/reduce the intervention, restore access, offer reviewed support routes, and record minimum adverse-effect data only by consent. | Adherence prioritized over wellbeing. |

## Measurement And Decision Gates

| Measure | Classification | Decision rule |
| --- | --- | --- |
| Mode comprehension and exact-change recall | Hypothesis | Strict cannot progress if users cannot correctly explain scope, expiry, limits, and recovery. |
| Exit/recovery/teardown completion | Design requirement | Any inaccessible critical route is a launch blocker. |
| Legitimate-use harm and false-block recovery | Hypothesis | Compare by mode and accessibility context; repeated essential-access harm stops escalation. |
| Shame, burden, panic, coercion, care displacement | Hypothesis | Measure adverse effects with opt-out; a credible severe event pauses the study. |
| Incremental benefit | Hypothesis | Friction must beat Supportive; Strict must beat Friction on a pre-registered user-centered outcome without worse safety. |
| Adapter health and bypass | Platform limitation | Report by layer with denominator; no composite guarantee. |

## Stop And External Review

Stop escalation for inaccessible recovery, hidden disclosure, coercive enrollment, indefinite enforcement, essential-access harm, punitive language, material adverse effects, orphaned controls, or claims beyond observed adapter behavior.

External review required before participant testing beyond static concepts: clinical/safety, coercive-control, accessibility, privacy/legal, platform security, diverse lived experience, and research ethics. Founder decisions are still required for approved cooling candidates, Strict eligibility, and quantitative stop thresholds. Co-approval and recovery-share roles are prohibited in Cycle 3.
