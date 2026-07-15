# Personalization rules

Status: Cycle 1 Draft - deterministic, explainable rules only
Issue: #21
Branch: `codex/21-personal-recovery-plan`

## Invariants

1. **Design requirement:** Personalization uses explicit user choices and transparent rules, not inferred diagnosis or hidden behavioral profiles.
2. **Design requirement:** “Why am I seeing this?” reveals the input, rule, and way to change/disable it.
3. **Design requirement:** A recommendation never sends data, changes a restriction, or contacts a person without separate confirmation.
4. **Design requirement:** Core safety, privacy, consent, export, deletion, and professional-care controls are never personalized away.
5. **Design requirement:** No objective optimizes engagement, shame, vulnerability, or commercial conversion.

## Allowed Cycle 1 rules

| ID | Classification | Explicit input | Rule/output | User control | Validation |
| --- | --- | --- | --- | --- | --- |
| P01 | Hypothesis | User selects manual-only support. | Show manual Spiral; hide automation prompts. | Change anytime. | Comprehension and usefulness. |
| P02 | Hypothesis | User selects one broad context. | Suggest the user-authored action attached to it. | Inspect/edit/disable. | False-context and burden rate. |
| P03 | Hypothesis | User marks an action unavailable/unhelpful. | Offer the configured fallback next time. | Undo/reset. | Incremental usefulness. |
| P04 | Design requirement | User disables notifications. | Send none. | Immediate setting. | Delivery/system test. |
| P05 | Hypothesis | User selects concise vs explanatory education. | Adjust module length, not scientific conclusion. | Toggle. | Comprehension parity. |
| P06 | Design requirement | User revokes ally consent. | Remove ally option and cancel pending messages. | Immediate. | No-send property test. |
| P07 | Hypothesis | User chooses review cadence. | Offer review at that cadence with neutral snooze. | Pause/disable. | Unwanted prompt rate. |
| P08 | Platform limitation | User enables an adapter-approved local platform rule. | Show only supported capability and failure recovery. | Disable locally. | Thread 01 platform tests. |

## Prohibited rules and inferences

| Classification | Prohibited behavior | Reason |
| --- | --- | --- |
| Design requirement | Infer CSBD, “addiction severity,” relapse likelihood, honesty, or treatment need. | Clinical overreach and unvalidated inference. |
| Design requirement | Infer sexuality, religion, trauma, mental health, relationship status, or explicit interests. | Sensitive/protected inference not required. |
| Design requirement | Use browsing/content, location, contacts, purchases, or late-night use to infer risk without explicit narrow consent. | Surveillance and false inference. |
| Design requirement | Increase restriction, notify an ally, or expose data because a score crossed a threshold. | Coercion and unsafe automation. |
| Design requirement | Personalize price, access, persuasion, or cancellation using vulnerability/behavior. | Exploitation and dark patterns. |
| Design requirement | Rank users, peers, or “recovery” publicly. | Shame, gaming, and sensitive disclosure. |

## Rule record

| Field | Classification | Requirement |
| --- | --- | --- |
| Input | Design requirement | Named explicit user choice and location/retention. |
| Output | Design requirement | Exact visible change; no hidden side effect. |
| Rationale | Hypothesis | Benefit statement and supporting evidence/uncertainty. |
| Consent | Design requirement | Whether rule is core/local/external/share and how to revoke. |
| Safety | Design requirement | Misuse, false-positive, coercion, and accessibility cases. |
| Metric | Hypothesis | Usefulness plus burden/adverse-effect measure. |
| Exit | Design requirement | Disable, reset, delete derived state, and static fallback. |
| Version | Design requirement | Owner, date, source, review trigger. |

## Escalation order

- **Design requirement:** First simplify or ask the user; do not silently infer more data.
- **Design requirement:** If no transparent low-risk rule solves the problem, leave the experience unpersonalized.
- **Open question:** Machine-learned personalization is outside Cycle 1 and requires a new evidence, privacy, fairness, security, and clinical review.
