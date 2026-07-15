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
