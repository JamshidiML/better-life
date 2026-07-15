# Protective Spiral test scenarios

Status: Cycle 1 Draft
Issue: #20
Branch: `codex/20-protective-spiral`

## Acceptance approach

- **Design requirement:** Scenario tests evaluate specification behavior, not clinical efficacy.
- **Open question:** Quantitative UX and harm thresholds require clinical, research, accessibility, and founder approval before participant testing.

| ID | Classification | Scenario | Expected behavior | Failure / stop signal |
| --- | --- | --- | --- | --- |
| S01 | Design requirement | User manually starts and immediately exits. | One-action exit, no penalty, no outbound data. | Exit obscured or event publicly exposed. |
| S02 | Design requirement | User skips every action. | Close calmly; optional later review only by user initiation. | Shame, escalating restriction, repeated nagging. |
| S03 | Hypothesis | User starts under high cognitive load. | One short action, readable copy, no large menu. | Confusion, >one primary command, text overflow. |
| S04 | Design requirement | Configured action is unsafe or inaccessible now. | Skip/fallback/exit without explanation. | Flow insists on movement/breathing/contact. |
| S05 | Design requirement | Partner configured the plan under pressure. | Consent review and easy disable; no partner notification. | Partner can veto or learn exit. |
| S06 | Platform limitation | Local trigger is false positive. | Immediate legitimate-use recovery and limitation disclosure. | Lockout, blame, hidden escalation. |
| S07 | Platform limitation | Trigger fails to fire. | Manual start remains available; no protection guarantee. | User is told system prevented/observed behavior. |
| S08 | Design requirement | User cancels ally message at preview. | Nothing sent; no delivery record beyond approved local state. | Any recipient notification. |
| S09 | Design requirement | Ally delivery fails. | “Not confirmed” plus private alternatives. | Implied receipt or repeated auto-send. |
| S10 | Design requirement | AI/provider is unavailable. | Static flow and exit remain functional. | Blocked session or false answer. |
| S11 | Design requirement | User asks whether they have an addiction. | Non-diagnostic boundary and professional route. | Screening presented as diagnosis. |
| S12 | Design requirement | User asks for immediate emergency help. | Clear real-world routes and no rescue promise. | Peer/AI retained as sole responder. |
| S13 | Hypothesis | User reports a setback after the flow. | Optional repair, one plan adjustment, no streak loss. | Failure label, confession requirement, punishment. |
| S14 | Design requirement | Notification appears on shared/locked device. | Neutral or disabled preview according to setting. | Sensitive product/behavior text leaks. |
| S15 | Design requirement | User revokes consent mid-session. | Pending triggers/shares cancel and session exits. | Old consent remains active. |
| S16 | Design requirement | User deletes configuration/history. | Approved data removed; exceptions precisely disclosed. | Hidden history or broken future use. |
| S17 | Hypothesis | User repeatedly opens the Spiral for reassurance. | Offer quiet exit/config review; no engagement reward. | Product encourages compulsive checking. |
| S18 | Design requirement | Resource link is stale or wrong geography. | Show limitation/fallback; report for maintenance. | False local availability or endorsement. |
| S19 | Platform limitation | Browser/app protection is bypassed. | Explain known limitation; invite calm review, no blame. | “Tamper” shame or stronger covert monitoring. |
| S20 | Design requirement | Screen reader, zoom, keyboard, or reduced motion is used. | Stable focus, concise labels, no time pressure, no motion dependency. | Any action or exit becomes inaccessible. |

## Research measures

| Measure | Classification | Why collected | Minimum-data rule |
| --- | --- | --- | --- |
| Task comprehension and completion | Hypothesis | Determine whether the flow is usable under simulated load. | No sexual-content disclosure. |
| Perceived autonomy/control | Hypothesis | Detect coercive framing. | Short optional response. |
| Burden and shame effect | Hypothesis | Identify adverse product effects. | Allow “prefer not to answer”; aggregate. |
| Action usefulness | Hypothesis | Compare candidate steps. | Do not call it clinical improvement. |
| Exit, cancel, delete success | Design requirement | Validate consent/control invariants. | System test plus participant observation. |
| False trigger/block and recovery | Platform limitation | Validate technical harm and claims. | Synthetic domains/apps before real behavior. |

## Stop conditions

- **Design requirement:** Any hidden send, inaccessible exit, partner control, sensitive notification leak, or punitive state is a critical stop.
- **Design requirement:** Any copy interpreted as diagnosis, therapy, emergency monitoring, or guaranteed prevention blocks release.
- **Hypothesis:** Repeated increased shame, distress, or compulsive checking blocks escalation and triggers redesign/clinical review.
