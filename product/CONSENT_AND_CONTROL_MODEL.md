# Consent and control model

Status: Cycle 1 Draft - legal and user validation required
Issue: #22
Branch: `codex/22-privacy-architecture`

## Consent principles

- **Evidence-supported:** EDPB consent guidance treats valid consent as freely given, specific, informed, and unambiguous, with withdrawal as easy as giving consent. [EDPB Guidelines 05/2020](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-052020-consent-under-regulation-2016679_en)
- **Open question:** Consent is not automatically the correct legal basis or Article 9 condition for every Better Life activity; legal review must decide purpose by purpose.
- **Verified:** Product controls below apply even where processing relies on another legal basis; “consent” cannot be used to justify a forbidden or unsafe design.

## Consent units

| Unit | Classification | Default | User must understand | Withdrawal effect |
| --- | --- | --- | --- | --- |
| Local personal plan | Hypothesis | Available without external processing | Device storage, backup/notification behavior | Delete/archive local state. |
| Local platform rule | Platform limitation | Off | Permission, observed event, limitations, false block/bypass | Disable rule and revoke permission. |
| Account | Open question | Not required first | Identifier, security/support processing | Close account; local mode may remain. |
| Sync | Open question | Off | Fields, encryption/access, devices, recovery, metadata | Stop future sync and delete server copy per policy. |
| Product research/analytics | Verified | Off unless truly necessary and otherwise justified | Exact fields, purpose, retention, recipients | Stop future collection; rights/deletion workflow. |
| External AI | Verified | Off | Exact selected input, provider, retention/training, output limits | Cancel future use; delete where supported/disclosed. |
| Ally setup | Verified | Off | Recipient, purpose, what is never shared | Remove recipient and pending capability. |
| Each ally send | Verified | No pre-send | Exact recipient/message and delivery limits | Cancel before send; after send cannot retract recipient copy. |
| Peer participation | Verified | Excluded from MVP | Pseudonymity, moderation, reports, retention, emergency limits | Leave/block immediately; incident exceptions explained. |
| Strict/friction mode | Hypothesis | Off | Exact restriction, platform limits, recovery, duration | Safe calm-state path; no partner veto. |

## State model

| State | Classification | Meaning | Allowed transition |
| --- | --- | --- | --- |
| `NOT_OFFERED` | Verified | Capability unavailable or gate not passed. | Only after evidence/privacy/safety review. |
| `AVAILABLE_OFF` | Verified | Clear optional offer, no processing. | `LEARN_MORE` or `ACTIVE`; dismissal stays off. |
| `LEARN_MORE` | Verified | Layered purpose/data/risk/control explanation. | Back/off or explicit activation. |
| `ACTIVE` | Verified | Current version and settings apply. | Pause, modify, withdraw, expire, or re-consent. |
| `PAUSED` | Hypothesis | No new optional processing; state retained as disclosed. | Resume or withdraw/delete. |
| `WITHDRAWN` | Verified | Future optional processing/capability stopped. | Delete/retain only by disclosed rule; fresh consent for reactivation. |
| `EXPIRED` | Hypothesis | Time/purpose/version trigger ended activation. | Fresh review; no silent renewal. |
| `RECONSENT_REQUIRED` | Verified | Material purpose/data/recipient/risk change. | Stay off until explicit choice. |

## Consent record

| Field | Classification | Requirement |
| --- | --- | --- |
| Purpose/capability ID and version | Verified | Specific, immutable receipt; not a bundled “privacy accepted” flag. |
| Data classes and source | Verified | User-readable plus machine-enforced inventory reference. |
| Processing location and recipients | Verified | Local, Better Life service, named processor category/person. |
| User action and interface version | Verified | Evidence of choice without copying intimate payload. |
| Timestamp/expiry | Verified | Renewal/review trigger where appropriate. |
| Withdrawal/deletion state | Verified | Auditable completion and exceptions. |

## Anti-coercion controls

1. **Verified:** Current scope is adult voluntary self-use; no partner, employer, parent, or organization admin role.
2. **Verified:** Ally cannot view settings/history, enforce a restriction, reset credentials, approve exit, or know that they were removed.
3. **Verified:** Strict/friction changes are authored by the user while calm; recovery is not an ally approval flow.
4. **Verified:** Notifications and receipts do not reveal sensitive goals to device observers by default.
5. **Verified:** Refusing optional processing does not remove core local planning, safety information, export, or deletion.

## Audit and control surface

**Verified:** A single control view must answer: what is on; what data exists locally/remotely; who can receive it; last external send; active devices/permissions; retention; export/delete; and how to withdraw. No hidden developer-only state may contradict it.

## Test cases

- **Verified:** withdrawing sync stops all future uploads and queues server deletion.
- **Verified:** cancelling an ally preview sends nothing.
- **Verified:** material processor/purpose/data change enters `RECONSENT_REQUIRED`.
- **Verified:** decline and withdrawal are no harder than activation.
- **Verified:** removing an ally or restriction does not notify or require the ally.
- **Open question:** comprehension and coercion tests must include shared devices, intimate-partner abuse scenarios, low literacy, disability, and target languages.
