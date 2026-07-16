# Assumption Log - Thread 07

Issue: #22
Branch: `codex/22-privacy-architecture`
Date: 2026-07-15

| ID | Classification | Assumption | Validation / falsification | Status |
| --- | --- | --- | --- | --- |
| A01 | Hypothesis | Accountless local planning/manual Spiral provides enough first value. | Thread 10 and user tests; add service only for demonstrated need. | Open |
| A02 | Hypothesis | Raw explicit content, raw browsing history, and sensitive inference are unnecessary. | Data review for every proposed feature; reject feature if it depends on them. | Open |
| A03 | Hypothesis | Users accept data-loss risk in exchange for no default sync. | Recovery concept tests; test encrypted export before server sync. | Open |
| A04 | Hypothesis | Allowlisted operational telemetry can exclude intimate context. | Schema/threat review and synthetic incident drills. | Open |
| A05 | Open question | Consent is the appropriate legal basis/Article 9 condition for particular optional processing. | EU/German legal analysis and DPIA; do not claim now. | Open |
| A06 | Open question | E2EE sync can meet metadata, revocation, recovery, deletion, and usability requirements. | Architecture/security spike only after user need. | Deferred |
| A07 | Hypothesis | 14/30-day operational/security design targets are enough. | Threat, support, legal, and incident evidence; adjust before implementation. | Open |

## Cycle 2 Additions

| ID | Classification | Assumption | Validation / falsification | Status |
| --- | --- | --- | --- | --- |
| A08 | Hypothesis | Every product-created adapter artifact can be enumerated and mapped to one receipt. | Platform spike plus fresh/install/remove/restore reconciliation; retire adapter on persistent orphan. | Open |
| A09 | Hypothesis | Teardown can preserve essential access while removing all product-owned control. | Synthetic failure drills across adapters and partial provider outages. | Open |
| A10 | Open question | OS/browser/provider backup and restore behavior can prevent deleted D3/policy from reactivating. | Platform-specific backup/reinstall tests and legal/security review. | Open |
| A11 | Open question | A bounded ally recovery share can add value without coercion or sole authority. | Superseded by Cycle 3 prohibition; a new founder decision and independent evidence would be required to reopen. | Closed for Cycle 3 |
| A12 | Hypothesis | Users can understand per-layer ownership and residuals without consent fatigue. | Layered consent/teardown comprehension and burden tests. | Open |

## Cycle 3 Additions

| ID | Classification | Assumption | Validation / falsification | Status |
| --- | --- | --- | --- | --- |
| A13 | Hypothesis | One canonical Protection Layer Contract can prevent adapter-specific privacy, recovery, and teardown drift. | Independent contract review and synthetic conformance tests for every candidate adapter. | Open |
| A14 | Hypothesis | Useful personalization can remain local, inspectable, resettable, deletable, and rules-based without global model training. | Compare local explicit rules with static experience; measure benefit, burden, inference error, and deletion correctness. | Open |
| A15 | Open question | Any federated or differential-privacy analytics can provide decision value at acceptable residual privacy risk for intimate contexts. | Formal threat/utility analysis, NIST-aligned evaluation, DPIA, independent review; do not deploy by default. | Deferred |
| A16 | Hypothesis | A printable/user-held recovery inventory improves teardown and replacement-device understanding without becoming a sensitive disclosure artifact. | Comprehension, shoulder-surfing, coercion, loss, accessibility, and secure-storage research. | Open |
| A17 | Open question | Public-health reporting can be sufficiently anonymized and useful without small-cell, location, or vulnerable-group exposure. | Separate protocol, statistical disclosure review, ethics/counsel approval, and public-interest decision. | Deferred |
