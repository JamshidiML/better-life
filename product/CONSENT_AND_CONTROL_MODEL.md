# Consent and control model

Status: Cycle 1 Draft - legal and user validation required
Issue: #22
Branch: `codex/22-privacy-architecture`

## Consent principles

- **Source-verified fact:** EDPB consent guidance addresses freely given, specific, informed, and unambiguous consent and says withdrawal should be as easy as giving consent. [EDPB Guidelines 05/2020](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-052020-consent-under-regulation-2016679_en)
- **Open question:** Consent is not automatically the correct legal basis or Article 9 condition for every Better Life activity; legal review must decide purpose by purpose.
- **Design requirement:** Product controls below apply even where processing relies on another legal basis; “consent” cannot be used to justify a forbidden or unsafe design.

## Consent units

| Unit | Classification | Default | User must understand | Withdrawal effect |
| --- | --- | --- | --- | --- |
| Local personal plan | Hypothesis | Available without external processing | Device storage, backup/notification behavior | Delete/archive local state. |
| Local platform rule | Platform limitation | Off | Permission, observed event, limitations, false block/bypass | Disable rule and revoke permission. |
| Account | Open question | Not required first | Identifier, security/support processing | Close account; local mode may remain. |
| Sync | Open question | Off | Fields, encryption/access, devices, recovery, metadata | Stop future sync and delete server copy per policy. |
| Product research/analytics | Design requirement | Off unless truly necessary and otherwise justified | Exact fields, purpose, retention, recipients | Stop future collection; rights/deletion workflow. |
| External AI | Design requirement | Off | Exact selected input, provider, retention/training, output limits | Cancel future use; delete where supported/disclosed. |
| Ally setup | Design requirement | Off | Recipient, purpose, what is never shared | Remove recipient and pending capability. |
| Each ally send | Design requirement | No pre-send | Exact recipient/message and delivery limits | Cancel before send; after send cannot retract recipient copy. |
| Peer participation | Repository decision | Excluded from MVP | Pseudonymity, moderation, reports, retention, emergency limits | Leave/block immediately; incident exceptions explained. |
| Strict/friction mode | Hypothesis | Off | Exact restriction, platform limits, recovery, duration | Safe calm-state path; no partner veto. |

## State model

| State | Classification | Meaning | Allowed transition |
| --- | --- | --- | --- |
| `NOT_OFFERED` | Design requirement | Capability unavailable or gate not passed. | Only after evidence/privacy/safety review. |
| `AVAILABLE_OFF` | Design requirement | Clear optional offer, no processing. | `LEARN_MORE` or `ACTIVE`; dismissal stays off. |
| `LEARN_MORE` | Design requirement | Layered purpose/data/risk/control explanation. | Back/off or explicit activation. |
| `ACTIVE` | Design requirement | Current version and settings apply. | Pause, modify, withdraw, expire, or re-consent. |
| `PAUSED` | Hypothesis | No new optional processing; state retained as disclosed. | Resume or withdraw/delete. |
| `WITHDRAWN` | Design requirement | Future optional processing/capability stopped. | Delete/retain only by disclosed rule; fresh consent for reactivation. |
| `EXPIRED` | Hypothesis | Time/purpose/version trigger ended activation. | Fresh review; no silent renewal. |
| `RECONSENT_REQUIRED` | Design requirement | Material purpose/data/recipient/risk change. | Stay off until explicit choice. |

## Consent record

| Field | Classification | Requirement |
| --- | --- | --- |
| Purpose/capability ID and version | Design requirement | Specific, immutable receipt; not a bundled “privacy accepted” flag. |
| Data classes and source | Design requirement | User-readable plus machine-enforced inventory reference. |
| Processing location and recipients | Design requirement | Local, Better Life service, named processor category/person. |
| User action and interface version | Design requirement | Evidence of choice without copying intimate payload. |
| Timestamp/expiry | Design requirement | Renewal/review trigger where appropriate. |
| Withdrawal/deletion state | Design requirement | Auditable completion and exceptions. |

## Anti-coercion controls

1. **Design requirement:** Current scope is adult voluntary self-use; no partner, employer, parent, or organization admin role.
2. **Design requirement:** Ally cannot view settings/history, secretly enforce a restriction, become sole recovery authority, extend a delay, punish, or require explanation.
3. **Design requirement:** Strict/friction changes are authored by the user while calm. Any future ally co-approval or recovery share is separately selected, finite, and never removes independent recovery.
4. **Design requirement:** Notifications and receipts do not reveal sensitive goals to device observers by default.
5. **Design requirement:** Refusing optional processing does not remove core local planning, safety information, export, or deletion.

## Audit and control surface

**Design requirement:** A single control view must answer: what is on; what data exists locally/remotely; who can receive it; last external send; active devices/permissions; retention; export/delete; and how to withdraw. No hidden developer-only state may contradict it.

## Test cases

- **Design requirement:** withdrawing sync stops all future uploads and queues server deletion.
- **Design requirement:** cancelling an ally preview sends nothing.
- **Design requirement:** material processor/purpose/data change enters `RECONSENT_REQUIRED`.
- **Design requirement:** decline and withdrawal are no harder than activation.
- **Design requirement:** removing an ally or restriction does not notify or require the ally.
- **Open question:** comprehension and coercion tests must include shared devices, intimate-partner abuse scenarios, low literacy, disability, and target languages.
