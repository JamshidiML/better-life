# Assumption Log - Thread 01

- Issue: #13
- Branch: `codex/13-cross-device-feasibility`
- Cycle: 1

| ID | Classification | Assumption | Why it matters | Validation | Status |
| --- | --- | --- | --- | --- | --- |
| A01 | Hypothesis | Adult voluntary self-use is the first deployment model. | Excludes parental, employer, and covert control architectures. | Founder confirmation and Phase 0 interviews | Open |
| A02 | Hypothesis | Browser-first partial coverage can deliver meaningful value. | Drives first-wedge recommendation. | Prototype plus user comprehension/usefulness tests | Open |
| A03 | Hypothesis | Domain-level rules are sufficient for the first spike. | Avoids page-body and image classification. | False-positive/negative fixture and interviews | Open |
| A04 | Open question | Apple will approve Family Controls distribution for this use case. | Determines iOS product feasibility. | Entitlement request and App Review evidence | Open |
| A05 | Hypothesis | Android VPN overhead and OEM behavior are acceptable. | Determines second enforcement adapter. | Real-device measurements | Open |
| A06 | Hypothesis | Policy metadata can sync without intimate event history. | Shapes cross-device architecture. | Thread 07 privacy review and threat model | Open |
| A07 | Hypothesis | A 100 ms browser navigation-overhead threshold is user-acceptable. | Defines spike target. | Benchmark and usability test | Open |

## Cycle 2 Additions

| ID | Classification | Assumption | Why it matters | Validation | Status |
| --- | --- | --- | --- | --- | --- |
| A08 | Founder decision | A central visible policy with separate adapters preserves the product vision. | Establishes architecture direction but not feasibility. | Founder review of Cycle 2 model | Open |
| A09 | Hypothesis | Users can understand a per-layer health dashboard without false confidence or overload. | Determines whether layered protection remains usable. | Comprehension and adverse-effect test | Open |
| A10 | Hypothesis | A user-held inventory export supports post-uninstall recovery without hidden persistence. | Governs teardown and reinstall. | Usability, loss, tamper, and shared-device tests | Open |
| A11 | Open question | At least one consumer adapter can meet transparent recovery and teardown gates. | Required before an actual MVP decision. | Stage B real-device spikes | Open |
| A12 | Hypothesis | Official-control guidance can be completed accurately across supported OS versions. | Determines orchestrator value. | Named-version setup/rollback tests | Open |
| A13 | Founder decision pending | Optional synchronization is valuable enough to justify account, key, and privacy risk. | Affects cross-device continuity. | User research plus Thread 07 threat model | Open |

## Cycle 3 Additions

| ID | Classification | Assumption | Why it matters | Validation | Status |
| --- | --- | --- | --- | --- | --- |
| A14 | Hypothesis | Stable source IDs and named maintenance events will reduce platform-claim drift. | Supports auditable adapter research. | Independent source audit and future conformance protocol | Open |
| A15 | Repository decision | Thread 07 owns canonical contract `BL-PLC-01`; Thread 01 owns capability and adapter matrices. | Prevents duplicate layer schemas across unmerged branches. | Cross-thread review in PR #40 | Adopted for Cycle 3 |
| A16 | Open question | A printable user-held inventory can be authentic enough for recovery without hidden persistence. | Affects reset and replacement-device recovery. | Security and recovery usability review | Open |
