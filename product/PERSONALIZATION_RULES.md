# Personalization rules

Status: Cycle 1 Draft - deterministic, explainable rules only
Issue: #21
Branch: `codex/21-personal-recovery-plan`

## Invariants

1. **Verified:** Personalization uses explicit user choices and transparent rules, not inferred diagnosis or hidden behavioral profiles.
2. **Verified:** “Why am I seeing this?” reveals the input, rule, and way to change/disable it.
3. **Verified:** A recommendation never sends data, changes a restriction, or contacts a person without separate confirmation.
4. **Verified:** Core safety, privacy, consent, export, deletion, and professional-care controls are never personalized away.
5. **Verified:** No objective optimizes engagement, shame, vulnerability, or commercial conversion.

## Allowed Cycle 1 rules

| ID | Classification | Explicit input | Rule/output | User control | Validation |
| --- | --- | --- | --- | --- | --- |
| P01 | Hypothesis | User selects manual-only support. | Show manual Spiral; hide automation prompts. | Change anytime. | Comprehension and usefulness. |
| P02 | Hypothesis | User selects one broad context. | Suggest the user-authored action attached to it. | Inspect/edit/disable. | False-context and burden rate. |
| P03 | Hypothesis | User marks an action unavailable/unhelpful. | Offer the configured fallback next time. | Undo/reset. | Incremental usefulness. |
| P04 | Verified | User disables notifications. | Send none. | Immediate setting. | Delivery/system test. |
| P05 | Hypothesis | User selects concise vs explanatory education. | Adjust module length, not scientific conclusion. | Toggle. | Comprehension parity. |
| P06 | Verified | User revokes ally consent. | Remove ally option and cancel pending messages. | Immediate. | No-send property test. |
| P07 | Hypothesis | User chooses review cadence. | Offer review at that cadence with neutral snooze. | Pause/disable. | Unwanted prompt rate. |
| P08 | Platform limitation | User enables a verified local platform rule. | Show only supported capability and failure recovery. | Disable locally. | Thread 01 platform tests. |

## Prohibited rules and inferences

| Classification | Prohibited behavior | Reason |
| --- | --- | --- |
| Verified | Infer CSBD, “addiction severity,” relapse likelihood, honesty, or treatment need. | Clinical overreach and unvalidated inference. |
| Verified | Infer sexuality, religion, trauma, mental health, relationship status, or explicit interests. | Sensitive/protected inference not required. |
| Verified | Use browsing/content, location, contacts, purchases, or late-night use to infer risk without explicit narrow consent. | Surveillance and false inference. |
| Verified | Increase restriction, notify an ally, or expose data because a score crossed a threshold. | Coercion and unsafe automation. |
| Verified | Personalize price, access, persuasion, or cancellation using vulnerability/behavior. | Exploitation and dark patterns. |
| Verified | Rank users, peers, or “recovery” publicly. | Shame, gaming, and sensitive disclosure. |

## Rule record

| Field | Classification | Requirement |
| --- | --- | --- |
| Input | Verified | Named explicit user choice and location/retention. |
| Output | Verified | Exact visible change; no hidden side effect. |
| Rationale | Hypothesis | Benefit statement and supporting evidence/uncertainty. |
| Consent | Verified | Whether rule is core/local/external/share and how to revoke. |
| Safety | Verified | Misuse, false-positive, coercion, and accessibility cases. |
| Metric | Hypothesis | Usefulness plus burden/adverse-effect measure. |
| Exit | Verified | Disable, reset, delete derived state, and static fallback. |
| Version | Verified | Owner, date, source, review trigger. |

## Escalation order

- **Verified:** First simplify or ask the user; do not silently infer more data.
- **Verified:** If no transparent low-risk rule solves the problem, leave the experience unpersonalized.
- **Open question:** Machine-learned personalization is outside Cycle 1 and requires a new evidence, privacy, fairness, security, and clinical review.
