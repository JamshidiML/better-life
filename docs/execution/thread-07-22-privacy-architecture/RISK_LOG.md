# Risk Log - Thread 07

Issue: #22
Branch: `codex/22-privacy-architecture`
Date: 2026-07-15

| ID | Severity | Classification | Risk | Control | Residual status |
| --- | --- | --- | --- | --- | --- |
| R01 | Critical | Evidence-supported conclusion | Breach/exposure of intimate plan, behavior, content, or support data. | D3/D4 local default, DX prohibition, separated services, minimal access/logging. | Device and future optional service risk remains. |
| R02 | Critical | Evidence-supported conclusion | Coercive partner/other person controls, recovers, or observes account. | No admin/ally control, neutral surface, local re-auth, fast exit, no ally recovery. | Compromised shared device remains. |
| R03 | Critical | Evidence-supported conclusion | Raw explicit content, URLs, screenshots, or free text enters logs/AI/support. | DX class, schema allowlist, no session replay/training, test ingestion paths. | Supply-chain/debug risk requires testing. |
| R04 | High | Open question | Processing lacks valid legal basis/Article 9 condition or DPIA. | No compliance claim; legal gate before personal-data implementation. | Unmitigated until counsel. |
| R05 | High | Evidence-supported conclusion | Deletion misses backup, processor, offline device, cache, or derived data. | Inventory and end-to-end deletion tests; no launch if untestable. | Architecture not implemented/tested. |
| R06 | High | Evidence-supported conclusion | Export/recovery creates a new disclosure channel. | Re-auth, encrypted local export, no email, reject ally/provider recovery. | User destination risk remains. |
| R07 | High | Evidence-supported conclusion | Consent is bundled, coerced, stale, or used to justify unsafe design. | Unit/state model, re-consent, easy withdrawal, core local service remains. | Comprehension/legal review pending. |
| R08 | High | Evidence-supported conclusion | “Anonymous/private/GDPR compliant” overclaim misleads users. | Claims prohibited until verified and precisely qualified. | Marketing governance pending. |
| R09 | Medium | Platform limitation | OS backup/notification/shared account exposes local data. | Test platform behavior, neutral/off defaults, backup decision. | Platform residual remains. |
| R10 | Medium | Hypothesis | No-sync design causes unexpected data loss. | Clear explanation and tested user-managed export. | User acceptance unknown. |

## Cycle 2 Additions

| ID | Severity | Classification | Risk | Cycle 2 control | Residual status |
| --- | --- | --- | --- | --- | --- |
| R11 | Critical | Evidence-supported conclusion | Product-created rule/profile/token/role persists after withdrawal, downgrade, delete, or uninstall. | Artifact inventory, teardown state machine, verification and orphan release blocker. | No implementation proof. |
| R12 | Critical | Evidence-supported conclusion | Backup/restore/reinstall revives deleted D3 or expired Strict policy. | Backup decision, receipt/version/expiry reconciliation, tombstone/key tests. | Platform behavior unknown. |
| R13 | Critical | Evidence-supported conclusion | Ally/recovery factor enables coercive control or permanent lockout. | No sole ally authority, expiry/revocation/rotation, independent recovery. | External security/coercion gate open. |
| R14 | High | Platform limitation | External provider/admin owns residual state Better Life cannot delete. | Ownership disclosure, manual path, partial result, retire layer if disproportionate. | Inherent by adapter. |
| R15 | High | Evidence-supported conclusion | Shared device/account crosses D3 or policy between people. | OS-user binding, re-authentication, account/profile checks, keep core off if isolation fails. | Platform/user tests absent. |
| R16 | High | Open question | Processing has no valid legal basis/Article 9 condition or violates device/ePrivacy rules. | Purpose matrix, DPIA, counsel/DPO gate, rejected-alternative record. | Unmitigated until review. |

## Cycle 3 Additions

| ID | Severity | Classification | Risk | Cycle 3 control | Residual status |
| --- | --- | --- | --- | --- | --- |
| R17 | Critical | Evidence-supported conclusion | Consent or legal basis for one purpose is silently reused for personal adaptation, analytics, safety, research, model training, or public-health reporting. | Six separate purpose records, default off where optional, independent withdrawal/retention/access, and no implied transfer. | Open pending counsel/UX review. |
| R18 | Critical | Hypothesis | Local or global learning infers religion, sexuality, diagnosis, trauma, criminality, moral worth, incapacity, or vulnerability. | Explicit-choice inputs, prohibited proxy list, inspect/reset/delete, no global training default, human governance. | Open. |
| R19 | Critical | Platform limitation | Factory reset/replacement device or stale backup revives policy, loses recovery, or creates false current-state claims. | User-held inventory, fresh-device off state, receipt/version/expiry reconciliation, no automatic reactivation. | Open; platform tests absent. |
| R20 | High | Hypothesis | Differential privacy/federated language creates a false anonymity guarantee or hides weak parameters/central leakage. | Formal guarantee record, threat model, parameter/utility review, independent audit, precise claims, exit. | Open; no approach approved. |
| R21 | High | Hypothesis | Partner, employer, sponsor, NGO, public-health body, or model provider gains intimate data or influence through funding/integration. | Structural data separation, no partner event access, purpose contract, audit, withdrawal, no mode/reward eligibility influence. | Open. |
| R22 | High | Hypothesis | Cultural personalization becomes profiling, stereotyping, or hidden discrimination. | User-provided optional preferences, no inference, variant review, explain/change/reset/delete, subgroup harm audit. | Open. |
