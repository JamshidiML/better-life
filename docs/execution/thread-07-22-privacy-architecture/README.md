# Execution Thread 07 - Cycle 1 to Cycle 3 Index

Issue: #22
Title: Privacy, consent, and sensitive-data architecture
Branch: `codex/22-privacy-architecture`
Date: 2026-07-16
Status: Draft PR workstream, Cycle 3 revision; no personal-data, learning, adapter, or implementation authorization.

## Read-First Evidence

- Repository-state verified: the required repository documents were read before Cycle 1 work.
- Repository-state verified: the independent review, PR #41, Issue #42, and every PR #36 comment were read before Cycle 2 revision.
- Repository-state verified: Issue #44, Issue #42, PR #43, the Cycle 2 independent review, and PR #36 Cycle 2 feedback were read before Cycle 3 revision.
- Repository decision: non-existent legacy filenames previously listed here are not claimed as read artifacts.

## Deliverables

- Design requirement: [Data classification](../../../security/DATA_CLASSIFICATION.md)
- Design requirement: [Privacy reference architecture](../../../architecture/PRIVACY_REFERENCE_ARCHITECTURE.md)
- Design requirement: [Consent and control model](../../../product/CONSENT_AND_CONTROL_MODEL.md)
- Design requirement: [Retention, deletion, and export](../../../security/RETENTION_DELETION_AND_EXPORT.md)
- Design requirement: [Cycle 2 Protection Stack privacy and teardown](../../../architecture/CYCLE_2_PROTECTION_STACK_PRIVACY_AND_TEARDOWN.md)
- Design requirement: [Cycle 3 canonical Protection Layer and learning governance](../../../architecture/CYCLE_3_CANONICAL_PROTECTION_LAYER_AND_LEARNING_GOVERNANCE.md)

## Quality Artifacts

- [Quality Scorecard](QUALITY_SCORECARD.md)
- [Assumption Log](ASSUMPTION_LOG.md)
- [Risk Log](RISK_LOG.md)
- [Cycle 2 Quality Scorecard](CYCLE_2_QUALITY_SCORECARD.md)
- [Cycle 2 Review Response](CYCLE_2_REVIEW_RESPONSE.md)
- [Cycle 3 Quality Scorecard](CYCLE_3_QUALITY_SCORECARD.md)
- [Cycle 3 Review Response](CYCLE_3_REVIEW_RESPONSE.md)

## Current Review Request

- Open question: Does ChatGPT find any hidden external flow, sensitive inference, overbroad access, or deletion gap?
- Open question: Do EU/German privacy counsel and security reviewers accept the local/accountless first architecture and identify required changes?
- Open question: Does the founder accept losing automatic backup/sync convenience when it cannot be provided with proportionate privacy?
- Open question: Do privacy counsel and users agree that all six purposes require separate lawful-basis/consent and product-control decisions?
- Open question: Can every adapter satisfy the canonical Protection Layer Contract, printable inventory, replacement-device, and teardown requirements?

## Active Taxonomy

- `Repository-state verified`: direct inspection of repository or GitHub state.
- `Research procedure executed`: a documented research procedure with source, date, and limitations.
- `Desk-review observation`: wording, structure, or apparent consistency inspected without a test.
- `Executed test result`: reserved for a real test with environment/version, input, expected result, observed result, evidence location, and pass/fail outcome.
