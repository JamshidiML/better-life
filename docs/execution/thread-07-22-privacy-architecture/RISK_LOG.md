# Risk Log - Thread 07

Issue: #22
Branch: `codex/22-privacy-architecture`
Date: 2026-07-15

| ID | Severity | Classification | Risk | Control | Residual status |
| --- | --- | --- | --- | --- | --- |
| R01 | Critical | Verified | Breach/exposure of intimate plan, behavior, content, or support data. | D3/D4 local default, DX prohibition, separated services, minimal access/logging. | Device and future optional service risk remains. |
| R02 | Critical | Verified | Coercive partner/other person controls, recovers, or observes account. | No admin/ally control, neutral surface, local re-auth, fast exit, no ally recovery. | Compromised shared device remains. |
| R03 | Critical | Verified | Raw explicit content, URLs, screenshots, or free text enters logs/AI/support. | DX class, schema allowlist, no session replay/training, test ingestion paths. | Supply-chain/debug risk requires testing. |
| R04 | High | Open question | Processing lacks valid legal basis/Article 9 condition or DPIA. | No compliance claim; legal gate before personal-data implementation. | Unmitigated until counsel. |
| R05 | High | Verified | Deletion misses backup, processor, offline device, cache, or derived data. | Inventory and end-to-end deletion tests; no launch if untestable. | Architecture not implemented/tested. |
| R06 | High | Verified | Export/recovery creates a new disclosure channel. | Re-auth, encrypted local export, no email, reject ally/provider recovery. | User destination risk remains. |
| R07 | High | Verified | Consent is bundled, coerced, stale, or used to justify unsafe design. | Unit/state model, re-consent, easy withdrawal, core local service remains. | Comprehension/legal review pending. |
| R08 | High | Verified | “Anonymous/private/GDPR compliant” overclaim misleads users. | Claims prohibited until verified and precisely qualified. | Marketing governance pending. |
| R09 | Medium | Platform limitation | OS backup/notification/shared account exposes local data. | Test platform behavior, neutral/off defaults, backup decision. | Platform residual remains. |
| R10 | Medium | Hypothesis | No-sync design causes unexpected data loss. | Clear explanation and tested user-managed export. | User acceptance unknown. |
