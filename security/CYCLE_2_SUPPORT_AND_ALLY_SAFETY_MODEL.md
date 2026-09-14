# Cycle 2 Support And Trusted-Ally Safety Model

- Status: research architecture; no live system authorization
- Issue: #19 and Founder Amendment Issue #42
- Review date: 2026-07-15

## Classification

This document uses: `Source-verified fact`, `Evidence-supported conclusion`, `Repository decision`, `Founder decision`, `Founder decision pending`, `Design requirement`, `Proposed control`, `Hypothesis`, `Platform limitation`, `Open question`, `Repository-state verified`, `Research procedure executed`, `Desk-review observation`, `Executed test result`, and `Arithmetic check`.

Cycle 3 clarification: `Executed test result` requires environment/version, input, expected result, observed result, evidence location, and pass/fail. Repository inspection and scenario design are not executed tests.

No proposed control is implemented or tested.

## Separation Of Support And Authority

| System | May do | Must never do |
| --- | --- | --- |
| Anonymous peer support | Exchange a bounded user-confirmed support signal after separate consent. | Hold a policy key, approve/deny protection changes, receive tamper data, access browsing history, recover an account, or control a device. |
| Chosen trusted ally | Perform the exact time-limited role selected while calm. | Become secret administrator, permanent veto, owner, moderator, clinician, or recipient of intimate content by default. |
| Better Life protection system | Apply visible user-authored rules and operate documented recovery. | Infer that social support consent authorizes enforcement or disclosure. |
| Human moderation | Enforce platform safety policy and handle reports. | Control the user's protection plan or act as emergency service. |

Anonymous support and enforcement authority use separate data models, permissions, staff access, audit logs, and kill switches.

## Trusted-Ally Levels

| Level | Role | Data disclosed | Duration/withdrawal | Independent recovery |
| ---: | --- | --- | --- | --- |
| 0 | No ally | None | Default; user can remain here permanently. | User-owned recovery only. |
| 1 | Notification only | Exact previewed event and neutral message | Event-specific, expiring, revocable while calm | Ally response not required. |
| 2 | Acknowledgement | Level 1 plus acknowledged/not acknowledged | No veto; timeout; replacement allowed | Change proceeds by the selected independent rule. |
| 3 | Time-limited co-approval | Exact requested change, not browsing history | Fixed protection term; no indefinite denial | Delayed independent recovery after anti-coercion check. |
| 4 | Split recovery hypothesis | Minimum recovery share, never content/history | Time-bound; key rotation on relationship change | User-held additional factor or independent delayed route required. |
| 5 | Independent delayed recovery without ally | No ally data | User-selected waiting period and re-authentication | This is the recovery path. |

Cycle 3 supersession: Levels 3 and 4 are prohibited Better Life roles. No peer, ally, sponsor-like role, or community actor may co-approve a protection change or hold a recovery share. Reconsideration would require a new founder decision, independent coercive-control and security evidence, and explicit cross-thread revision; no such reconsideration is authorized.

## Ally Abuse And Failure Cases

| Case | Detection/entry | Required response | Residual risk / stop rule |
| --- | --- | --- | --- |
| Secret enrollment | No role activates without local exact-role confirmation and receipt. | Reject enrollment; show visible ally list/history. | Any hidden role is Critical and blocks launch. |
| Coercive ally | User selects `I do not feel safe with this person` or reports coercion. | Freeze ally access, neutral safe-exit flow, independent recovery, preserve minimum abuse evidence only with consent/legal basis. | Compromised device or real-world retaliation remains; specialist support route required. |
| Unavailable ally | Acknowledgement/approval times out. | Never create indefinite lockout; use the previously chosen independent delayed route. | If timeout has no safe path, Level 2-4 cannot launch. |
| Compromised ally account | Suspicious session/key event or user report. | Revoke factor, rotate recovery material, notify user neutrally, require re-enrollment. | Detection is fallible; no guarantee. |
| Relationship breakdown | User requests replacement/withdrawal while calm or through safe recovery. | Revoke old role, rotate keys, expire messages, show history. | Old recipient may retain prior messages; disclose this. |
| Ally retaliation/false report | Conflicting report or appeal. | Ally cannot moderate or punish; platform human reviews abuse report. | Do not reveal user content to adjudicate beyond minimum case data. |
| User loses recovery key | User enters documented recovery flow. | Re-authentication plus finite delay and anti-coercion check; no forgotten-password mechanism. | Security/usability balance untested. |
| User under coercion during recovery | User selects a safe-exit indicator or support route. | Suppress ally contact if configured, pause irreversible changes, offer independent channel. | Exact UX requires coercive-control expertise. |

## Operational Moderation Model

| Role | Accountability | Minimum safeguards |
| --- | --- | --- |
| Safety lead | Owns policy, incident severity, shutdown, external review. | Named human, separation from growth targets, documented on-call authority. |
| Moderator | Reviews P0-P2 cases and applies proportionate action. | Training, least privilege, supervision, workload cap, wellbeing support, no private case browsing. |
| Incident commander | Coordinates P0 containment and service pause. | Predefined authority, evidence minimization, legal/security contact tree. |
| Appeals reviewer | Reviews contested action independently. | Different person/team where feasible; reasoned record; retaliation controls. |
| Privacy/security responder | Handles exposure, access abuse, processor incident. | Access audit, preservation limits, breach/legal escalation. |
| Clinical/safety advisor | Reviews language and escalation protocol. | Advisory only; platform must not represent itself as clinical service. |

### Coverage and response objectives

These are Proposed controls for simulation, not service promises:

| Severity | Proposed objective | Failure response |
| --- | --- | --- |
| P0 | Automated containment immediately; human acknowledgement within 15 minutes; incident command within 30 minutes. | Stop new matching and page on-call lead. Repeated miss blocks live testing. |
| P1 | Contain user contact immediately where possible; human review within 4 hours. | Reduce/stop availability if coverage cannot meet the objective. |
| P2 | Human review within 2 business days. | Publish degraded state and cap intake. |
| Appeal | Independent response within 7 calendar days. | No permanent low-severity penalty before appeal where safety permits. |

No 24/7 claim is allowed until funded staffing simulations demonstrate coverage.

## Service Shutdown Criteria

Stop new matches while preserving block/report/delete when any of the following occurs:

1. Broken block isolation, unauthorized moderator access, or systemic identity exposure.
2. No trained P0 coverage for the advertised period.
3. Critical grooming/exploitation case linked to a known unmitigated defect.
4. Report backlog exceeds the approved safety capacity.
5. Legal basis, processor, or jurisdiction scope becomes invalid or unknown.
6. Appeal or bias audit shows material uncorrected disparate harm.
7. Independent review finds risk greater than incremental benefit over no-network alternatives.

## Age, Capacity, And Jurisdiction Escalation

| Question | Cycle 2 position | Escalation required |
| --- | --- | --- |
| Adult eligibility | Repository scope is adults only; self-attestation is not proven assurance. | Legal/privacy/safety assessment of proportionate assurance. |
| Minor enters service | End social access, preserve only legally required evidence, show age-appropriate external route. | Child-safety and country legal protocol before launch. |
| Illegal content | No informal interpretation by peers/AI. Contain and route under written policy. | EU/German counsel, safety, law-enforcement disclosure policy. |
| Imminent danger | Platform does not promise detection/rescue. Show localized real-world routes. | Clinical/safety and country-specific review. |
| International matching | Disabled unless each country pair has approved language, legal basis, retention, and escalation. | Jurisdiction matrix and funded coverage. |
| Capacity/coercion concern | Do not diagnose incapacity. Offer exit and independent support route. | Coercive-control and clinical review. |

## Identity-Leakage Response

Automated identity-leakage prevention cannot be guaranteed.

1. Proposed control: warn on likely names, handles, phone/email, location, links, and coded contact exchange.
2. Show the exact suspected segment and offer `edit`, `send without this segment`, or `cancel` where policy permits.
3. Hard-block only content categories approved by safety/legal policy; show a neutral reason and appeal.
4. If disclosure is sent, immediately offer match end/block/report and explain recipient-copy limits.
5. Never tell the user that all identity leakage was detected.

## Report And Moderation Data Lifecycle

Numeric periods are hypotheses pending legal/privacy review.

| Data | Proposed purpose | Proposed retention band | Access/deletion rule |
| --- | --- | --- | --- |
| Unreported relay message | Delivery and short abuse window | Up to 24 hours after expiry | Automatic deletion; no analytics/training. |
| Reported content/context | Incident, action, appeal | Active case plus proposed 90 days after closure | Isolated case access; user sees exception; legal hold separately recorded. |
| Block relation | Prevent re-contact | Account lifetime plus proposed 30-day abuse buffer | Opaque relation; deletion tradeoff requires counsel. |
| Moderator action/audit | Accountability, abuse detection | Proposed 12 months | No unnecessary content; access audited. |
| Security log | Account/processor defense | Proposed 30-90 days by event class | No raw message by default. |
| Ally consent/role history | Permission, withdrawal, dispute | Active role plus proposed 12 months locally | User-visible; cloud retention only if separately approved. |
| Legal hold | Named legal duty | Case-specific | Separate status, owner, scope, and release date; no silent indefinite hold. |

The platform must disclose what deletion removes, what is retained, why, who can access it, and the review/expiry event. Thread 07 owns final data architecture.

## Sybil, Ban Evasion, And Moderator Abuse

- Proposed control: rate limits and block relations using the least linkable signals that meet the approved threat model.
- Platform limitation: stronger assurance conflicts with pseudonymity and data minimization.
- Proposed control: just-in-time moderator access, case purpose, immutable audit, two-person export approval, anomaly alerts, and periodic access review.
- Stop condition: no live network if abuse resistance requires civil identity collection disproportionate to demonstrated benefit.

## Safer Alternative Experiment

Stage 1 compares only low-fidelity concepts with no live stranger exchange:

1. Private plan and manual Spiral.
2. No ally.
3. User-chosen Level 1 notification preview with no message sent.
4. Static examples of a structured anonymous support signal.

Measure expected usefulness, coercion concern, privacy regret, role comprehension, safe exit, and preference. A live network is unjustified unless it shows incremental value over private/chosen-ally options and every external gate passes.

Escalation required: EU/German legal and privacy review, DPIA, security/red team, coercive-control expertise, moderator operations, clinical/safety review, accessibility, diverse lived experience, user/adverse-effect testing, and funded staffing.
