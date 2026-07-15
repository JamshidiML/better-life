# Data classification and handling standard

Status: Cycle 1 Draft - legal and security review required
Issue: #22
Branch: `codex/22-privacy-architecture`
Research cutoff: 2026-07-15

## Legal and product boundary

- **Source-verified fact:** GDPR Article 9 lists data concerning health, sex life, sexual orientation, religious/philosophical beliefs, and certain biometric data among special categories. [GDPR](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679)
- **Evidence-supported conclusion:** Better Life inputs and inferences can reveal sex-life, health, religion, or sexual-orientation information even when the user never supplies those labels.
- **Open question:** Exact controller/processor roles, legal bases, Article 9 condition, and jurisdictional obligations require qualified counsel and a documented DPIA.
- **Repository decision:** Product classification is intentionally conservative and does not itself assert a legal conclusion.

## Classes

| Class | Classification | Examples | Storage / access | Prohibited handling |
| --- | --- | --- | --- | --- |
| D0 Public | Design requirement | Published policy, source citations, non-user-specific help content | Public, versioned, integrity-controlled | Mixing with user records as if consented data. |
| D1 Internal operational | Design requirement | Service health, coarse error code, build/version, aggregate capacity | Short retention; least-privilege operations | User behavior funnels, advertising, intimate labels, raw identifiers. |
| D2 Account/security | Design requirement | Opaque account ID, authentication state, consent receipt, device key ID, abuse-control event | Separated service, encrypted, audited, role-limited | Public profile, ad identity, casual support access. |
| D3 Intimate user-authored | Design requirement | Goal, value, context label, plan, optional outcome, ally choice, support message | Local by default; external only for a named function and separate consent | Ad/marketing use, model training, hidden sharing, broad staff access. |
| D4 Intimate observed/inferred | Design requirement | Domain/app event, high-risk window, inferred interest, “risk” or “relapse” score, content classification | Avoid; narrow local event only if essential and explicitly configured | Cloud raw browsing, screenshots, hidden inference, pricing/engagement use. |
| D5 Safety/incident | Design requirement | Block relation, abuse report, flagged message, moderator action, appeal | Isolated incident store, purpose-bound access, audited retention | General analytics, recommendation, public reputation. |
| DX Prohibited | Design requirement | Raw explicit content by default, secret partner report, contact-list scrape, covert screenshot, diagnosis inference, password/secret in logs | Must not be collected | Any collection, storage, sharing, training, or export as normal product data. |

## Data element inventory

| Element | Class | Classification | First-shape need | Handling decision |
| --- | --- | --- | --- | --- |
| Paper/low-fidelity plan | D3 | Hypothesis | Research prototype can avoid system collection entirely. | Participant keeps it; no raw copy in repo/external AI. |
| Adult/voluntary attestation | D2 | Design requirement | Only if an account/pilot requires it. | Store state/version, not identity proof unless separately justified. |
| Goal/value/action | D3 | Hypothesis | Useful for a digital plan. | Local encrypted storage; notification hidden; user edit/delete. |
| Broad context/time | D3 | Hypothesis | Optional. | User-authored; no location or causal inference. |
| Domain/app event | D4 | Platform limitation | Not needed for manual prototype. | If later approved: local allow/block list and event handling; no raw cloud history. |
| Explicit content/image/screenshot | DX | Design requirement | Not required. | Reject collection by default, including support and telemetry. |
| Outcome/reflection | D3 | Hypothesis | Optional research/product measure. | Local or consented research dataset with participant code. |
| Email/phone | D2 | Open question | Not needed for accountless first shape. | Avoid until authentication/support need is justified. |
| Ally contact/message | D2 + D3 | Hypothesis | Not needed first. | Exact preview, separated recipient, minimal delivery state, no address-book upload. |
| Peer pseudonym/message | D2 + D3/D5 | Open question | Excluded from MVP by Thread 04. | Pairwise identifiers and isolated moderation only if future gates pass. |
| IP/security event | D2 | Platform limitation | Infrastructure may process it. | Minimize, truncate/pseudonymize where defensible, short retention, no behavior linkage. |
| Crash/error telemetry | D1/D2 | Hypothesis | Operational value possible. | Allowlist schema; no free text, URL, goal, message, or screen content. |
| Consent receipt | D2 | Design requirement | Needed for external processing/sharing. | Purpose/version/time/action; do not copy intimate payload. |
| Clinical diagnosis/record | DX for current product | Design requirement | Outside scope. | Do not solicit/store; user may seek qualified care independently. |

## Derived data rule

1. **Design requirement:** Derived or pseudonymized data inherits the highest sensitivity of its source unless a documented re-identification and purpose review approves a lower handling class.
2. **Design requirement:** Aggregation is not automatically anonymous in small or shame-sensitive populations.
3. **Design requirement:** Hashing an email, domain, or identifier does not make it non-personal when it remains linkable or enumerable.
4. **Design requirement:** Free-text, URLs, filenames, notification payloads, logs, support tickets, and backups are data stores and must follow the inventory.

## Handling matrix

| Control | D1 | D2 | D3 | D4 | D5 | DX |
| --- | --- | --- | --- | --- | --- | --- |
| Collect | Minimal | Justified | Explicit purpose/consent as applicable | Avoid; narrow local only | Incident need only | No |
| Default location | Service | Separated service | Local device | Local ephemeral | Isolated service | None |
| Human access | Operations | Security/support by role | None by default | None | Trained case reviewers | None |
| Analytics | Aggregate ops | Security only | No default | No | Safety aggregate only | No |
| External AI/training | No raw data | No | Off; separate reviewed consent cannot override unsafe scope | No | No automated final decision/training | No |
| Export | Aggregate docs | User-readable account/security | User-readable intimate data | Explain local state if retained | Case data subject to rights/safety/legal review | N/A |
| Delete | Schedule | Account/right workflow | Immediate local plus sync propagation | Immediate local | Approved incident schedule/exceptions | N/A |

## Data review gate

**Design requirement:** No new field is approved until owner records purpose, class, source, legal basis/condition question, storage, processors, access, retention, export, deletion, consent, misuse, metric, and non-collection alternative.
