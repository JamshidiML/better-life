# Cycle 3 Adapter Research Readiness

- Issue: #13; Founder Vision Issue #44
- Status: Internal consistency complete; external evidence required
- Terminal status: `Ready for synthetic adapter protocol and external platform/security review`
- Authorization: Research architecture only; no production adapter or participant enforcement

## Vocabulary And Boundary

- `MVE` means **Minimum Viable Experiment**.
- `Repository-state verified` records repository or GitHub state.
- `Research procedure executed` records a completed desk-research procedure.
- `Desk-review observation` records what a reviewed source or artifact appears to say.
- `Executed test result` requires environment, version, input, expected result, observed result, evidence, and pass/fail. No such adapter result exists yet.
- `Calm-state setup` means a user-chosen setup or review time with voluntary confirmation and demonstrated comprehension. Better Life must not infer calmness, rationality, impairment, or capacity.

## Canonical Ownership

| Domain | Owner | Canonical identifier | Thread 01 rule |
| --- | --- | --- | --- |
| Platform capability and adapter matrices | Thread 01 | `BL-CAP-01` | Own and version here. |
| Protection modes and transitions | Thread 05 | `BL-MODE-01` | Consume named mode/state IDs; do not redefine transitions. |
| Protection Constitution | Thread 06 | `BL-PC-01` | Consume policy scope; do not redefine user pathway fields. |
| Protection Layer Contract, data, consent, inventory, recovery, teardown | Thread 07 | `BL-PLC-01` | Record platform-specific capability extensions only. |
| User-facing UX and stage gates | Thread 10 | `BL-UX-01` | Supply adapter truth; do not own presentation structure. |

These identifiers avoid links to files that exist only on another unmerged branch. Integration may add repository links only after the canonical artifacts share a branch.

## Adapter Extension To `BL-PLC-01`

Thread 01 owns only these platform fields: `platform_family`, `platform_version`, `adapter_version`, `capability_class`, `official_source_ids`, `permission_or_entitlement`, `store_policy_state`, `declared_actions`, `unsupported_actions`, `maintenance_state`, and `last_conformance_result_id`.

All identity, consent, data, retention, recovery, and teardown base fields belong to Thread 07. This document does not create a competing layer schema.

## Platform Maintenance And Shutdown Matrix

| Event | Detection hypothesis | Required response | Emergency stop |
| --- | --- | --- | --- |
| Browser manifest/API migration | Scheduled source refresh and conformance failure | Mark affected adapter `unknown`; re-run fixtures before support | Disable distribution if declared behavior cannot be proven |
| Store removal or policy change | Store status check and release alert | Stop new setup; explain installed-state uncertainty | Publish signed shutdown/teardown guidance |
| Permission-model change | Versioned permission snapshot differs | Re-consent exact scope; no silent widening | Adapter unavailable until reviewed |
| Supply-chain compromise | Dependency/signing incident process | Revoke release, preserve evidence, notify without intimate history | Disable update channel and guide removal |
| OS/VPN conflict | Health state or user-visible system conflict | Mark degraded; preserve essential access | Stop adapter when recovery is unreliable |
| Documentation/source drift | Source hash/date/version changes | Human review before claim update | Retain last-supported boundary or withdraw claim |

## Separate Protocol Scenarios

| Scenario | Required observation | No-assumption rule |
| --- | --- | --- |
| Factory reset | Which app, policy, external, account, DNS, router, and backup states remain | Reset is not teardown proof. |
| Replacement device | What is restored manually, from account state, or from backup | No hidden device continuity. |
| Alternate OS account | Adapter and policy visibility per user/profile | One account never proves system-wide coverage. |
| Alternate browser profile | Extension/rule/permission state per profile | Browser installation never proves all-profile coverage. |
| Clock or timezone change | Pending term and due-time authority | No secret extension or early expiry. |
| Offline stale device | Expiry and reconciliation on reconnect | Stale enforcement is a stop defect. |
| App reinstall | Inventory import/rescan and ownership confirmation | Reinstall may not infer sensitive prior state. |

## Synthetic Protocol Readiness

A future protocol must name device, OS/browser version, adapter build, synthetic domains/accounts, fixture inputs, expected actions, observed actions, evidence capture, pass/fail, cleanup, and residual state. It must cover install, permissions, allow/block/redirect, bypass, false block, health, revoke, uninstall, teardown, orphan detection, performance, battery where relevant, and emergency shutdown.

The protocol must use synthetic domains and test accounts. No participant browsing, intimate content, hidden persistence, or real enforcement is authorized.

## Readiness Decision

- Repository-state verified: source-register CSV and separate maintenance/reset scenarios exist on this branch.
- Research procedure executed: Cycle 2 review defects and Issue #44 boundaries were mapped to this artifact.
- Open question: no real-device, entitlement, store, router, recovery, performance, security, accessibility, or teardown test exists.
- Decision: internal platform corrections are complete; external review and protocol approval are next.
