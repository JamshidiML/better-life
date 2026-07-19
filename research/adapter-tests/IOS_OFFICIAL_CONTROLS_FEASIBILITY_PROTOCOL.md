# iOS Official Controls Synthetic Feasibility Protocol

- Protocol ID: `BL-ADAPTER-IOS-OFFICIAL-01`
- Version: `0.1.1-draft`
- Date: 2026-07-19
- Official-source review cutoff: 2026-07-19
- Status: Prepared for security/platform/privacy review; do not execute during Phase 4.1
- Common contract: `COMMON_ADAPTER_SECURITY_AND_TEARDOWN_TESTS.md`

## Founder Working Decision

`Founder decision`: **Prepare a dedicated iOS official-controls synthetic feasibility protocol before the first adapter execution wave. Do not execute it during Phase 4.1.**

This protocol does not claim that Better Life has, will receive, or qualifies for any Apple entitlement, capability, signing permission, store approval, device-management authority, or distribution route.

## Exact Research Question

For separately frozen iPhone/iOS/device/account rows, which officially documented consumer or gated control families can perform a narrowly declared synthetic allow/block/recovery behavior with voluntary authorization, truthful scope, legitimate access, privacy, acceptable performance/battery behavior where relevant, and complete teardown? An unsupported or blocked result is valid.

## Capability Families to Examine Separately

| Family ID | Exact capability under investigation | Current classification | Ordinary consumer vs gated dependency | Required official-source refresh |
| --- | --- | --- | --- | --- |
| IOS-C01 | User-configured Screen Time/content restrictions relevant to synthetic web/app targets | `Platform limitation`: manual consumer control is not assumed to expose a Better Life API | Ordinary consumer setting; exact third-party integration is `Unsupported` unless official evidence proves otherwise | Current iPhone Screen Time guide and exact iOS build |
| IOS-C02 | Family Controls authorization plus Managed Settings/Device Activity selection, shielding and lifecycle for a self-authorized individual | `Platform limitation`: Apple documents individual authorization and a Family Controls entitlement; Better Life entitlement/store approval is `Open question` | App capability, entitlement permission, signing/store state and user authorization required; never infer availability | Family Controls, ManagedSettings, DeviceActivity, entitlement request and App Review sources |
| IOS-C03 | Network Extension content-filter, URL-filter, DNS/proxy or packet-tunnel family only where officially applicable to exact iOS row | `Platform limitation`: APIs and entitlement values exist; deployment, approval and Better Life fit are `Open question` | Gated app extension/capability/entitlement/distribution and possibly server dependency; exact family tested independently | Network Extension entitlement, provider deployment and selected API docs |
| IOS-C04 | Safari web extension/content blocker declarative behavior on synthetic Safari requests | `Verified` official capability in Safari Services; exact version/permission behavior still requires test | App/extension signing, distribution and user website permissions; browser-scoped | Safari Services, content-blocking and permissions docs |

Official source locators:

- [Family Controls](https://developer.apple.com/documentation/familycontrols)
- [AuthorizationCenter requestAuthorization](https://developer.apple.com/documentation/familycontrols/authorizationcenter/requestauthorization%28for%3A%29)
- [Content filter providers](https://developer.apple.com/documentation/networkextension/content-filter-providers)
- [Network Extensions entitlement](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.networking.networkextension)
- [Network Extension provider deployment](https://developer.apple.com/documentation/technotes/tn3134-network-extension-provider-deployment)
- [Safari Services](https://developer.apple.com/documentation/safariservices/)
- [Blocking content with a Safari web extension](https://developer.apple.com/documentation/safariservices/blocking-content-with-your-safari-web-extension)
- [Managing Safari web extension permissions](https://developer.apple.com/documentation/safariservices/managing-safari-web-extension-permissions)

Official documentation can change. Refresh every source immediately before protocol approval and again before any authorized run. Safari extension behavior is Safari-scoped evidence and must never be described as iPhone-wide, other-browser, other-app, DNS, VPN, or device-wide control.

## Exact Environment and Authorization to Freeze

Create an independent `ADAPTER_RUN_MANIFEST_TEMPLATE.md` instance for every family/device/OS/account/authorization row. Mandatory values include exact iPhone model/architecture, iOS version/build/patch/firmware, locale/region/timezone, supervised/managed state, Screen Time/Family Sharing/iCloud state where relevant, account type, app/extension bundle/build/hash/signature/SBOM, Xcode/SDK/dependency versions, requested and possessed entitlements/capabilities, provisioning profile, store/TestFlight/development channel, reviewer approval, network/DNS/VPN/Private Relay state where applicable, synthetic fixture hash, evidence system, baseline snapshot and teardown owner.

`Blocked` is mandatory when an entitlement/capability/permission/store status is absent, pending, inferred, `latest`, inconsistent, expired, or outside the reviewer-approved route. Development provisioning does not establish distribution approval.

## Test Device and Account Requirements

- Disposable dedicated test device; no personal/household/participant device, SIM-dependent personal identity, Health data, Screen Time history, real browsing, or production account.
- Synthetic Apple/developer/test accounts authorized for the exact channel; identities and credentials remain outside GitHub and evidence captures.
- Separate rows for self-authorized individual capability and any other officially permitted account model. Child/guardian control is outside Better Life's current voluntary self-control boundary and may be examined only as a separately approved misuse/limitation case, never as a product recommendation.
- Baseline backup/snapshot or documented wipe/reprovision route must be tested before control installation.

## Synthetic Targets and Declared Scope

Use only the approved `BL-ADAPTER-FIXTURE-01` domains and synthetic application identities. Before each run declare:

- exact selected domain/app/category token or rule and whether selection is privacy-preserving/opaque;
- expected allow, block/shield, redirect if supported, unknown and false-positive behavior;
- exact Safari, WebKit/URLSession, alternate browser, alternate synthetic app, direct-IP, IPv4/IPv6, WebSocket/QUIC and offline coverage;
- unsupported traffic, app, protocol, profile, account and device scope;
- whether behavior is device-wide, API-family-wide, browser-only or selected-target-only based solely on official evidence and observation.

No real app, brand, domain, explicit content, account, browsing history or production credential may be selected.

## Permissions, Authorization, and Store Tests

For each family record request, denial, grant, current status, partial grant, revocation and re-request behavior. Capture system-presented meaning through neutral redacted evidence and compare it with Better Life's proposed disclosure. Verify least privilege, authentication requirement, app/extension enablement, website access, selected-target opacity, background authority, store/development channel and what the app can actually observe.

Entitlement request or possession is an observed run-manifest fact only. No result may imply future entitlement, App Review, store, vendor, or production availability.

## Coverage Matrix

| Area | Required observation for every applicable family |
| --- | --- |
| Supported/unsupported scope | Exact target/request/app/browser/protocol/device/account rows; unsupported shown explicitly |
| Alternate browsers/apps/devices | Safari vs every installed synthetic alternate browser/app; second device is a separate manifest; no parity inference |
| Disable/revoke | User-visible disable and API/system revocation; immediate legitimate access; honest stale/degraded state |
| Uninstall/reinstall | Control behavior, authorization, rules, logs, extensions and settings before/after removal and same-build reinstall |
| Reset | App data reset where possible, browser settings reset, Screen Time/control reset, network reset and full device erase only under approved disposable-device procedure |
| Replacement device | Fresh synthetic replacement and approved backup/restore migration; no transfer assumption |
| Degraded state | Permission/entitlement/account/network/fixture/provider/server/background failure, OS update and unavailable dependency |
| Orphan state | App missing/crashed/expired while system rule/profile/extension remains; inventory and independent recovery |
| Legitimate access | Emergency stop, ordinary disable, recovery target, Settings route and unrelated synthetic allowed content remain available |
| Privacy | Data visible to app/provider, opaque selections, logs, traffic, telemetry, identifiers, store/account data, retention and destinations |
| Performance/battery | Launch/request latency, CPU/memory/network, background activity, battery/energy and thermal observations where reviewer-approved method exists |
| Teardown | Remove app/extensions/rules/shields/profiles/VPN/DNS/certificates/permissions/authorization/account links/logs/cache; verify baseline diff after reboot |

## Pass, Fail, Blocked, and Stop Rules

- `Pass exact row`: every declared supported synthetic case, truthful limit, permission/authorization state, legitimate recovery, privacy check, applicable performance/battery measure and teardown passes on the frozen row.
- `Fail`: observed behavior contradicts the declared expectation, overblocks, underblocks, obscures scope, leaves a remediable residual, or exceeds an approved bound.
- `Blocked`: entitlement/store/capability/permission/device/account/fixture/reviewer/evidence/teardown prerequisite is absent or cannot be established. No feasibility conclusion follows.
- `Inconclusive`: evidence is valid but insufficient or ambiguous; do not convert to pass/fail.
- `Unsupported`: official mechanism does not expose the declared capability on the exact row. This is a valid platform result, not an implementation defect.
- `Stop`: real/sensitive traffic or data is touched; unauthorized entitlement/signing/account use occurs; legitimate access or independent recovery is lost; false device-wide protection is displayed; uncontrolled privacy/security exposure occurs; or teardown cannot remove a high-privilege/orphaned control.

Safari C04 can pass only as Safari evidence. It cannot satisfy or substitute for C01-C03 or any iPhone-wide claim.

## Evidence Requirements

Use `ADAPTER_RESULT_AND_EVIDENCE_TEMPLATE.md`. Capture exact device/iOS/build, capability/entitlement/provisioning/store/account class, app/extension/hash/signature, user permission/authorization state, selected synthetic token IDs, neutral screenshots, synthetic request/result IDs, redacted logs/traces, provider/app storage and destinations, performance/battery method, lifecycle diffs, reboot state and teardown inventory. Preserve raw captures in the approved restricted evidence system outside GitHub. Redact Apple account, device, serial, advertising, IP, credential, token, signing and unrelated app/traffic identifiers.

## Teardown and Final Disposition

Revoke authorization/permissions where officially supported; disable controls/extensions; remove app and extensions; remove profiles/VPN/DNS/certificates/rules; clear approved test data and credentials; reboot; inspect Settings, providers, extensions, routes, storage, logs and account state; then restore/wipe the disposable device under the approved plan. Any unexplained residual, unavailable recovery route, or uncertain account/device effect is `Stop` or `Inconclusive`, not pass.

Report a separate final disposition for every capability-family/environment row. Do not combine results into `iOS supported`.

## Current Decision

`Repository-state verified`: this protocol exists and the repository contains no populated run manifest, result record, or executed-test evidence for it. `Open question`: device, account, entitlement, app, fixture, reviewer approval, and evidence-system readiness have not been established. `Repository decision`: execution remains `Blocked` without separate exact authorization.
