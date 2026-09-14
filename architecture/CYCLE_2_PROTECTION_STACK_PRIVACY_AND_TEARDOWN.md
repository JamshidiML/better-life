# Cycle 2 Protection Stack Privacy And Teardown

- Status: research architecture; not a compliance or security claim
- Issue: #22 and Founder Amendment Issue #42
- Review date: 2026-07-15

## Classification

This document uses: `Source-verified fact`, `Evidence-supported conclusion`, `Repository decision`, `Founder decision`, `Founder decision pending`, `Design requirement`, `Proposed control`, `Hypothesis`, `Platform limitation`, `Open question`, `Repository-state verified`, `Research procedure executed`, `Desk-review observation`, `Executed test result`, and `Arithmetic check`.

Cycle 3 clarification: repository/data-flow review is not an executed test. `Executed test result` requires environment/version, input, expected result, observed result, evidence location, and pass/fail.

No control, permission flow, deletion path, or adapter teardown described here has been implemented or tested.

## Architecture Pre-Check

| Required element | Classification | Cycle 2 answer |
| --- | --- | --- |
| User problem | Evidence-supported conclusion | Protection spanning multiple layers can create more sensitive state, permissions, and residual control than the user can see or remove. |
| Expected benefit | Hypothesis | A local-first inventory with exact consent and teardown may preserve agency while allowing narrowly justified adapters. |
| Supporting evidence | Source-verified fact | GDPR Article 5 includes data minimization and storage limitation, and Article 25 addresses data protection by design/default; exact application requires counsel. [GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj) |
| Required data | Design requirement | Policy/receipt metadata, adapter capability/health, minimum local configuration, permission references, and teardown evidence; no raw browsing history or explicit content. |
| Consent requirements | Source-verified fact | EDPB consent guidance addresses freely given, specific, informed, unambiguous consent and withdrawal; the correct legal basis still requires purpose-specific counsel. [EDPB Guidelines 05/2020](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-052020-consent-under-regulation-2016679_en) |
| Safety risks | Evidence-supported conclusion | Lockout, coercion, data exposure, orphaned controls, backup restoration, notification leakage, recovery abuse, and false protection. |
| Misuse risks | Evidence-supported conclusion | Partner/employer administration, hidden enrollment, ally surveillance, support/insider access, and vulnerability-based processing. |
| Platform feasibility | Platform limitation | Permissions, storage, enforcement, backups, uninstall, profiles, managed controls, and recovery differ across browsers, OSs, accounts, devices, and networks. |
| Success metric | Hypothesis | Inventory completeness, receipt comprehension, least permission, local-only rate, teardown correctness, orphan count, restore/reinstall behavior, and adverse events. |
| Exit strategy | Design requirement | Disable each adapter independently, preserve essential access, remove every owned artifact, report residuals/owners, and retire any layer that cannot be inventoried and torn down. |

## Protection Stack Inventory

| Layer | Adapter/artifact | Data observed or stored | Permission / external owner | Default and consent | Health truth | Teardown obligation |
| --- | --- | --- | --- | --- | --- | --- |
| Core | Local plan/Constitution and receipts | D2 receipt metadata; D3 user-authored plan | App sandbox, OS account, backup service | Accountless/local candidate; current local consent/control | Store and key availability | Delete local records, keys, notifications, caches, exports under user control disclosure. |
| Browser | Extension per browser/profile | Chosen rule list; local match event; permission state | Browser vendor/store/profile; host/DNR or equivalent permissions | Off; exact browser/profile/site scope preview | Installed/enabled/version/permission/rule count | Remove dynamic/session/static-managed rules owned by product, storage, alarms, native host/token, and revoke optional permissions. |
| OS/app | Content filter, VPN, accessibility/device API where officially approved | Chosen app/domain/category rule; adapter event | OS vendor entitlement/profile/VPN slot/device setting | Off; separate high-friction receipt and feasibility gate | Entitlement/profile/service/routing state | Stop service, remove configuration/profile/key, release VPN/filter slot, clear local state; disclose OS-owned residual. |
| Account | Official provider family/safety/management control | Account policy and provider metadata | External account provider; possibly organization/family administrator | Off; only voluntary adult self-management scope approved for research | Account, owner/admin, policy and sync status | Revoke Better Life token, remove product-created policy where API permits, and direct user to provider-owned residual controls. |
| Network | DNS/VPN/router rule | Domain/category rule, resolver events depending provider | ISP/DNS/VPN/router vendor and network administrator | Off; exact network/admin/data-flow receipt | Active network/resolver/profile/rule health | Remove product-created profile/rules/tokens; restore prior validated network config; disclose other-admin artifacts. |
| Sync/backup | OS backup, encrypted export, optional future E2EE sync | D2/D3 copies and key metadata | OS/cloud/storage provider; other devices | Sensitive backup disabled or separately designed; no approved sync | Backup eligibility, copy/device/key state | Delete active copy, propagate tombstone where approved, exclude routine restore, rotate/destroy key only under verified design. |
| Ally | Optional notification or acknowledgement only; co-approval/recovery-share prohibited in Cycle 3 | Exact event/message/role/term; no history by default | Messaging processor and ally account/device | Off; exact role/data/term; independent path mandatory | Delivery/role/expiry status | Cancel pending sends, revoke role/token, disclose recipient copy cannot be guaranteed deleted. |
| Operations | Security/health telemetry and incident evidence | D1/D2 allowlist; D5 only for incident purpose | Better Life roles/processors | Minimal; no ad tech/session replay/free text | Pipeline/schema/access/retention status | Stop collection, delete by schedule/right, revoke processor/access, preserve only documented legal/safety exception. |

## Inventory Record

Every active artifact requires one record:

| Field | Classification | Requirement |
| --- | --- | --- |
| `artifact_id`, type, version | Design requirement | Stable product reference without intimate meaning. |
| Policy/receipt link | Design requirement | Exact Constitution version and consent receipt that authorizes it. |
| Owner/controller/processor question | Design requirement | Better Life, user, OS/browser/provider, ally, organization, or shared ownership; unresolved legal role marked open. |
| Device/account/profile/network scope | Design requirement | Exact target; no inferred wider coverage. |
| Data classes and direction | Design requirement | Named D0-D5/DX class, source, destination, and prohibited fields. |
| Permission/token/key | Design requirement | Grant type, issuer, storage location, privileges, expiry/rotation/revocation. Never store secret value in inventory export. |
| Health evidence | Design requirement | Last check, observable state, unknowns, degraded rule. |
| Retention/backup/restore | Design requirement | Active store, copies, rotation, tombstone, restore suppression, legal exception. |
| Teardown procedure | Design requirement | Ordered removal, verification, rollback/safe state, external manual step, responsible owner. |
| Residual status | Design requirement | Removed, retained with reason/expiry, externally owned, failed/retry owner, or unknown/blocker. |

An artifact without a policy/receipt owner or teardown procedure is an orphan and blocks participant or production use.

## Consent Receipt By Adapter

| Receipt question | Browser | OS/app | Account | Network | Ally |
| --- | --- | --- | --- | --- | --- |
| Exact scope | Browser/profile/host/category | Device/user/profile/app/category | Provider account/policy | Network/resolver/router/rule | Person, role, event/message |
| Permission/control | Host/rule permission and store install | Entitlement, VPN/filter/profile/device API | OAuth/API/admin relationship | VPN/DNS/router credential/admin | Delivery channel only; no key share |
| Data leaving device | Vendor/store update/security data; product cloud only if separately enabled | OS/provider behavior and any processor | Provider policy/account metadata | Resolver/VPN/router data | Exact previewed payload/delivery metadata |
| Known limits | Alternate profile/browser/device | Alternate device/account, entitlement and OS behavior | Provider scope/admin ownership | Other network/VPN/encrypted DNS/admin | Recipient copy, compromise, availability |
| Revocation effect | Disable/revoke/remove rules | Stop/remove service/profile/token | Revoke token/remove supported rule | Remove profile/rule/token, restore prior config | Cancel future send and revoke role/token |
| Teardown residual | Store listing/history, managed policy beyond product | OS logs/backups/profile controlled elsewhere | Provider retention/admin rule | Provider/router logs and other admin state | Recipient-held message copy |

Material changes to scope, purpose, data class, recipient/processor, permission, retention, recovery, or teardown invalidate the affected receipt and keep the adapter off until fresh confirmation.

## Local, Cloud, And External Ownership

| State | Classification | Authority and access rule |
| --- | --- | --- |
| Local D3 plan/policy | Design requirement | User-controlled through app; no Better Life human access by default; OS/device/backup compromise remains. |
| Cloud D2 account/security | Open question | Only if justified; separated, least privilege, audited, short retention, no intimate payload. |
| Cloud D3 sync | Open question | Not approved; would require demonstrated need, E2EE/recovery design, metadata map, rights, teardown, and user evidence. |
| External adapter state | Platform limitation | External vendor/admin ultimately controls platform state; Better Life must identify what it can create/read/delete and what it cannot. |
| Ally-held data/material | Hypothesis | Exact minimum message for a finite notification/acknowledgement role; no key, recovery, approval, or protection authority; recipient/device copy may persist after revocation. |
| Research data | Repository decision | Pseudonymous coded research only under approved protocol; raw notes/intimate artifacts remain outside repo and external AI. |

## Threat Model Extensions

| Threat | Attack/failure path | Proposed control | Residual / stop rule |
| --- | --- | --- | --- |
| Coercive partner | Configures policy, observes notifications, controls recovery, or forces export. | Private owner confirmation, neutral surfaces, no hidden admin, independent recovery, safe exit. | Compromised device and real-world retaliation remain; specialist review required. |
| Shared device/account | Another user sees plan, changes adapter, or receives restored data. | OS-user binding, local re-authentication, no sensitive lock-screen state, session/device list. | If isolation cannot be established, keep intimate core off that device. |
| OS/cloud backup | Deleted or stale D3/policy returns after restore. | Explicit backup eligibility, restore-version/tombstone check, key rotation, deletion test. | Unknown backup behavior blocks sensitive storage or requires clear no-backup mode. |
| Reinstall | App/extension reinstall reconnects stale rules, token, or ally role. | Treat reinstall as untrusted; reconcile inventory/receipt/expiry before activation. | No automatic reactivation from stale receipt. |
| Offline device | Old policy/data persists and later syncs. | Device registry, receipt/version expiry, tombstone/revocation, bounded retry. | Unknown device is listed as residual; do not promise complete deletion. |
| Lost recovery factor | User cannot remove Strict policy or decrypt data. | Multiple independent user-controlled routes, finite recovery, essential-access safe state. | Ally/provider cannot be sole factor. |
| Compromised ally | Uses role to observe, coerce, or impersonate. | Minimal message, expiry, revocation, no content/history/key access. | Co-approval/recovery-share is prohibited; compromise still creates recipient-copy risk. |
| Insider/support | Browses D2-D5 or exports case data. | Local D3 default, JIT case access, purpose, audit, two-person export, anomaly alert. | Broad support access blocks launch. |
| Orphan adapter | Permission/rule/profile remains after policy deletion. | Reconciliation, teardown receipt, orphan scan, release-blocking synthetic tests. | Unremovable product-created control retires adapter. |
| Supply chain | Extension/app dependency/update exfiltrates data or changes permissions. | Minimal dependencies, signed/reviewed update, permission diff, SBOM and incident rollback plan. | Implementation evidence required before approval. |

## Teardown State Machine

| State | Classification | Required behavior |
| --- | --- | --- |
| `TEARDOWN_PREVIEW` | Design requirement | Show affected policy, adapter artifacts, data, external owners, essential-access effect, expected residuals, and re-authentication. |
| `QUIESCE` | Design requirement | Stop new processing/sends/rule creation; preserve recovery and essential access. |
| `REVOKE` | Design requirement | Revoke tokens, keys, roles, permissions where API permits; rotate shared material. |
| `REMOVE` | Design requirement | Delete product-created rules/profiles/stores/caches/queues/notifications and issue approved tombstones. |
| `VERIFY` | Design requirement | Re-enumerate stores, adapters, provider state, offline/device status, backups, and processors using synthetic identifiers where possible. |
| `PARTIAL` | Design requirement | Show each failed/external/retained artifact, why, risk, manual step, retry owner, and deadline; do not report success. |
| `COMPLETE` | Design requirement | Issue local/user-readable receipt listing removed and disclosed residuals; retain no intimate teardown payload. |
| `REINSTALL_CHECK` | Design requirement | On reinstall/restore, reconcile current policy version, expiry, revocations, and orphan markers before any activation. |

## Teardown Cases

| Trigger | Expected scope | Special rule |
| --- | --- | --- |
| Disable one adapter | Only that adapter and its adapter-specific state/receipt. | Local core and other layers remain unless dependency is explicit. |
| Downgrade mode | Remove controls no longer authorized and preserve pending-change history only by approved retention. | No stale Strict rule after downgrade due time. |
| Delete Constitution | All linked policy, receipts, adapter rules/tokens/roles, outcome state, notifications, and sync copies. | Incident/legal exceptions separately named; external residuals visible. |
| Withdraw optional consent | Stop future affected processing immediately and delete/retain under disclosed rule. | Withdrawal cannot be made harder than activation. |
| Uninstall | Best-effort pre-uninstall teardown where observable plus next-run/orphan detection. | OS/browser removal may occur without app callback; never claim guaranteed cleanup absent verification. |
| Account deletion | Sessions, cloud stores, processors, device links, ally roles, external adapter tokens, and linked policy. | Local/export/provider-owned copies handled and disclosed separately. |
| Incident shutdown | Quiesce risky layer while retaining block/report/delete/recovery needed for safety. | Incident data remains isolated and purpose-limited. |

## Orphan Detection And Acceptance Tests

| Test | Classification | Required result |
| --- | --- | --- |
| Fresh install enumeration | Design requirement | No active policy/control/role from stale local, browser, OS, provider, network, backup, or ally state. |
| Remove/reinstall/restore | Design requirement | No automatic reactivation; residuals identified before user confirmation. |
| Delete with offline second device | Design requirement | Revocation/tombstone blocks stale upload; offline residual is displayed until reconciled or expired. |
| Permission revoked externally | Design requirement | Adapter becomes degraded/off; no false protection or repeated coercive prompt. |
| Partial provider failure | Design requirement | Local UI says partial, retains retry receipt without intimate payload, and names manual path. |
| Backup rotation/restore | Design requirement | Deleted policy/data does not return to active state; exceptions and retention are measurable. |
| Ally removal/compromise | Design requirement | Future access stops, keys rotate, independent recovery works, recipient-copy limit disclosed. |
| Shared-account switch | Design requirement | No D3 or policy crosses OS/browser/account boundary. |
| Inventory reconciliation | Design requirement | Every observable artifact maps to one active receipt or is flagged orphan; every receipt maps to current artifact state. |

No quantitative pass threshold is approved. Any product-created high-privilege orphan, hidden D3/D4 copy, stale Strict enforcement, inaccessible recovery, or false `complete` teardown result is a Critical stop.

## Legal Basis And Governance Question Matrix

This matrix frames counsel decisions; it does not select a legal basis or Article 9 condition.

| Processing purpose | Data/class | Candidate GDPR questions, not conclusions | Consent/control need | Decision status |
| --- | --- | --- | --- | --- |
| Local plan/policy on user device | D3 | Is Better Life a controller for purely local processing; do app distribution/telemetry alter the analysis; Article 9 applicability? | Product control remains required even if GDPR scope differs. | Open question. |
| Account authentication/security | D2 | Article 6 contract or legitimate-interest analysis; minimization, fraud/security retention, rights. | Account optional first; separate from D3. | Open question. |
| Adapter rules/events | D3/D4 | Article 6 basis, Article 9 condition, ePrivacy/device-access rules, necessity/proportionality, joint-controller/processor roles. | Granular adapter receipt; avoid cloud events. | Open question; legal gate. |
| Sync/backup | D2/D3 | Necessity, Article 9 condition, transfers, processor access, E2EE metadata, recovery and erasure. | Off; cannot bundle with core. | Not approved. |
| Ally delivery/role | D2/D3 | Disclosure basis/condition, recipient status, processor, international transfer, rights and recipient copy. | Exact per-role and per-send receipt; independent recovery. | Hypothesis; legal/coercion gate. |
| Safety incident/moderation | D2/D3/D5 | Legitimate interest/legal obligation/vital-interest limits, Article 9 condition, DSA/illegal-content duties if applicable, rights restrictions and retention. | Safety notice and rights; consent may be unsuitable. | Counsel and safety decision required. |
| Research | D2/D3 | Research basis/Article 9 condition, ethics, consent, withdrawal, anonymization/pseudonymization, retention and publication. | Approved study consent and participant code. | Protocol-specific open question. |
| Product analytics | D1/D2 and risk of D3/D4 | Necessity, consent/ePrivacy, purpose limitation, re-identification, proxy optimization. | Off/minimal; no ad tech/session replay; separate choice if used. | Not justified for intimate events. |
| External AI | D3 | Basis/condition, processor/controller role, transfers, training/retention, automated-decision/profiling questions. | Off; exact selected input and static alternative. | Not approved. |

Required governance before personal-data implementation: DPIA screening/full DPIA decision, records of processing, controller/joint-controller/processor map, Article 6/9 analysis per purpose, ePrivacy/German device-access-law analysis, data-subject-rights process, transfer/vendor assessment, retention schedule, incident/breach plan, DPO/counsel sign-off path, and documented rejected alternatives.

## Decision

Repository decision: retain the accountless local core as the first digital architecture candidate. No external adapter, cloud sync, ally authority, telemetry, or managed control is approved until its inventory, receipt, threat model, legal questions, teardown, restore/reinstall behavior, accessibility, and user value have passed independent review.
