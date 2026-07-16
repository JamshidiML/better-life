# Cycle 2 Protection Stack And Adapter Architecture

- Status: Cycle 2 research and architecture revision
- Issue: #13 and Founder Amendment Issue #42
- Branch: `codex/13-cross-device-feasibility`
- Source re-check date: 2026-07-15
- Authorization: documentation and bounded spike design only; no production implementation

## Classification Vocabulary

This document uses: `Source-verified fact`, `Evidence-supported conclusion`, `Repository decision`, `Founder decision`, `Founder decision pending`, `Design requirement`, `Proposed control`, `Hypothesis`, `Platform limitation`, `Open question`, `Repository-state verified`, `Research procedure executed`, `Desk-review observation`, `Executed test result`, and `Arithmetic check`.

A founder decision is not platform proof. A design requirement is not an executed test. Repository/source review is not a product test. No capability below has been tested by Better Life on a real device.

## Product Pre-Check

| Required question | Classification | Cycle 2 answer |
| --- | --- | --- |
| User problem | Founder decision | A consenting adult wants a calm-state plan that makes impulsive weakening slower without covert control. |
| Expected benefit | Hypothesis | Several independent visible layers may buy reflection time and reduce one-tap collapse. |
| Supporting evidence | Evidence-supported conclusion | Official APIs establish bounded mechanisms; no source proves Better Life efficacy or practical bypass resistance. |
| Required data | Design requirement | Policy scope, adapter status, permission state, consent receipt, coarse verification result, and inventory ownership; no raw content by default. |
| Consent | Design requirement | Layer-specific, exact-change preview, duration, owner, data, disable, uninstall, recovery, and withdrawal. |
| Safety risks | Design requirement | Prevent lockout, coercion, hidden control, false confidence, unsafe exceptional denial, and orphaned restrictions. |
| Misuse risks | Design requirement | Reject secret partner, employer, religious-group, school, or anonymous-peer administration. |
| Platform feasibility | Platform limitation | Capability differs by browser, OS, entitlement, store, account, and managed-device state. |
| Success metric | Hypothesis | Each spike must demonstrate declared behavior, visible failure, bounded overhead, recovery, and teardown on its stated matrix. |
| Exit strategy | Design requirement | Stop the spike, revoke permissions, export inventory, remove app-owned layers, guide external-layer cleanup, and disclose residual state. |

## Central Protection Policy

The central policy is a versioned local data model, not a universal enforcement engine.

| Field group | Minimum contents | Rule |
| --- | --- | --- |
| Identity | local policy ID; optional device label | No diagnosis or intimate identity is required. |
| Scope | selected domains, apps, categories, devices, browsers, time windows | Exact user selection; no inferred targets. |
| Mode | Supportive, Friction, or Precommitted Strict | Explicit user choice; never silently upgraded. |
| Timing | start, duration, review, expiry, cooling-off | Finite and visible. |
| Action | reminder, Spiral, delay, block, redirect, or guidance | Only actions supported by the selected adapter. |
| Support | Level 0-5 ally preference and exact disclosed event | Anonymous peers never receive authority. |
| Recovery | legitimate-use route, exceptional access, independent recovery | Must not depend on forgetting a password. |
| Teardown | layer owner, removal method, residual state | Required before activation. |

- Repository decision: Stage A policy is local and accountless.
- Platform limitation: local policy portability means a user can export/import a human-readable policy package; it does not mean live cross-device synchronization.
- Founder decision pending: any cloud synchronization requires separate privacy architecture, threat model, consent, recovery, and user-value evidence.

## Visible Protection Stack Inventory

Every layer record must expose:

`layer_id`, status, active/inactive state, purpose, user-selected scope, owner, permission, data used, activation date, duration, platform limitation, failure state, bypass limitation, disable rule, cooling-off rule, uninstall behavior, recovery method, teardown state, and last verification result.

The default layer sequence is:

1. Personal Protection Plan / Protection Constitution.
2. Protective Spiral.
3. Browser adapters.
4. OS-native protections.
5. App and domain rules.
6. DNS and network filtering.
7. Router and Wi-Fi protections.
8. Cooling-off policy.
9. Optional bounded trusted-ally support.
10. Audit, health, recovery, uninstall, and teardown controls.

## Browser And Platform Coverage Matrix

`Direct` means an ordinary app or extension may act after explicit user permission. `Guide` means Better Life only explains manual official steps. `Managed` means organizational/device-management power and is not an ordinary consumer promise.

| Surface | Official/ordinary consumer capability | Stronger or gated capability | Better Life route | Key limitation and teardown |
| --- | --- | --- | --- | --- |
| Chrome desktop | DNR extension can block/redirect declared requests after permissions. | Policy-installed extension is managed capability. | Direct adapter spike. | User can disable/remove; incognito is separately enabled; uninstall removes extension rules. |
| Chromium variants | Many Chrome APIs may be compatible, but parity and stores differ. | Browser-specific enterprise policy may exist. | Separate conformance row for Brave, Opera, Vivaldi. | Never infer compatibility from Chromium alone; removal and alternate profiles remain. |
| Microsoft Edge | Chromium extensions are often portable; Edge has its own store and policies. | Enterprise extension management. | Shared code candidate, separately packaged/tested. | API/store differences and user removal; do not call it tested Chrome parity. |
| Firefox | WebExtensions `webRequest` and DNR families exist with host/API permissions. | Enterprise policies can manage extensions. | Firefox-specific adapter spike. | Different Manifest behavior; private windows and privileged pages require separate tests. |
| Safari macOS | Safari app/web extensions can access approved sites and ship with an app. | Network Extension or managed configuration is separate. | Safari adapter spike. | User grants site access and can disable; Safari-only; app removal may not remove external settings. |
| Safari iOS/iPadOS | Safari Web Extension capability exists through an iOS app. | Family Controls and Network Extension require capabilities/entitlements and review. | Separate extension and native-control spikes. | WebKit/browser restrictions, entitlement, App Review, alternate apps, and reset paths. |
| Third-party iOS browsers | Browser engines and extension support are platform/version dependent. | OS/network controls may cover some flows. | Guidance or OS adapter only until tested. | No uniform browser-extension promise; each browser/version needs evidence. |
| Android browsers | An ordinary local `VpnService` may filter network flows after system consent. | Always-on/lockdown is stronger; device-owner policy is managed. | Browser-specific tests plus Android VPN spike. | User may revoke/replace VPN; OEM, DoH, app traffic, battery, and uninstall behavior vary. |
| Windows | Browser adapters and user-configured DNS/firewall guidance are ordinary paths. | WFP service, Family Safety, and device policy have different admin/role models. | Guide first; desktop service is later security spike. | Admin/helper attack surface, alternate users/VMs; uninstall must be tested. |
| macOS | Safari/browser adapters and manual Screen Time/DNS settings. | Network Extension/system extension and MDM are gated/managed paths. | Guide first; signed extension spike later. | Approval, competing filters, admin removal, VMs, and residual external settings. |
| ChromeOS | Browser extensions work within supported profiles; Family Link/admin policies are role-bound. | Managed Chrome policies are organizational/supervised. | Consumer extension only; guidance for official controls. | Guest mode, alternate account, Android/Linux environments, and powerwash. |
| Smart-TV/console browsers | Vendor controls vary and ordinary third-party adapter APIs are generally absent. | Router/DNS or vendor parental controls may cover domains. | Guidance-only where an official control is documented. | Unsupported until a named model/OS is tested; alternate networks and apps remain. |
| Embedded/in-app browsers | Extension APIs usually do not apply. | OS/network layer may see domains, not page meaning. | Declare unsupported or network-partial. | No semantic coverage; false-confidence risk. |
| Remote browser/VM/borrowed device | Outside enrolled adapter. | Managed environment may control it, but not Better Life consumer mode. | Guidance and scope disclosure. | Explicitly out of scope. |

## Official-Control Orchestration Matrix

| Control | Source-verified capability | Ordinary app action | User/manual action | Managed or gated dependency | Persistence after Better Life uninstall |
| --- | --- | --- | --- | --- | --- |
| Apple Screen Time | User can set app, website, schedule, and content restrictions. | Better Life cannot assume direct control of generic Screen Time settings. | Guide user through exact setting. | Family Controls app APIs require capability/entitlement and authorization. | Manual Screen Time settings may remain until user changes them. |
| Apple Family Controls / ManagedSettings | Authorized apps can represent selected apps/domains and apply shields. | Direct only after approved entitlement and user authorization. | User selects and authorizes. | Entitlement and App Review dependency. | App-owned shields require teardown testing; external Screen Time settings are separate. |
| Apple Network Extension | Provider types can filter or route supported traffic. | Direct only with the correct entitlement/configuration and user approval. | System approval/settings may be required. | Entitlement, store/deployment, VPN coexistence. | Configuration removal semantics must be tested per provider. |
| Android Digital Wellbeing | User can configure app timers/focus features on supported devices. | No public ordinary-app API is assumed for silent configuration. | Guidance-only unless an official API is identified. | OEM/version variation. | User-owned settings may remain. |
| Android `VpnService` | One user-approved VPN app can create a virtual interface; user can revoke it. | Direct after system consent; foreground operation requirements apply. | System consent and optional always-on selection. | Device-owner/profile-owner can impose stronger settings; not consumer default. | App removal ends app-owned VPN, but external DNS/router settings may remain. |
| Microsoft Family Safety | Web filters currently depend on Edge and family roles. | Better Life does not assume programmatic consumer configuration. | Guidance with role/privacy warning. | Organizer/member relationship; not appropriate as hidden partner control. | Microsoft account settings remain until changed. |
| Browser extension settings | Extension permissions allow declared browser actions. | Direct after store install and permissions. | Install, host permission, private/incognito choice. | Store review and enterprise policy are separate. | Extension rules normally disappear with removal; external settings do not. |
| Google SafeSearch | Account/device/network administrators can enforce it; personal users can set it. | Guidance; no silent account/network reconfiguration. | User or network admin confirms exact change. | Managed account/device/network can lock it. | Account/network setting remains until restored. |
| DNS resolver | Device/router can point to a filtering resolver. | Direct only through documented OS/provider path and explicit approval; otherwise guide. | User/admin credentials and exact resolver change. | MDM/router admin may be required. | Usually remains after Better Life uninstall. |
| Router/Wi-Fi filter | Router owner may set DNS/category/access rules. | Guidance-only unless a named vendor API is separately authorized. | Router login and confirmation. | Household owner/admin role. | Remains in router until restored. |
| Desktop firewall | OS firewall APIs/configuration can filter traffic. | No consumer direct-control promise in Cycle 2. | Guidance or later signed/admin spike. | Admin privilege, security review, distribution policy. | Rules may persist; inventory and exact rollback are mandatory. |

## Exact-Change Activation Contract

Before any external setting, show the exact setting, expected effect, known gaps, permission, data impact, owner, disable behavior, uninstall behavior, recovery behavior, and whether Better Life can verify completion. The user confirms the named change. Partial setup is displayed per layer, never collapsed into a green global status.

## Ownership, Persistence, And Teardown

| Ownership model | Example | Automatic cleanup | Required teardown behavior |
| --- | --- | --- | --- |
| App-owned | Browser extension rules, app-local policy | Remove where the platform permits. | Verify absence; disclose browser/store residue or unavailable verification. |
| User-owned external | Screen Time, DNS account, router rule | Usually cannot be removed after app deletion. | Export inventory and restore instructions before uninstall; user confirms each restoration. |
| Managed-device | MDM/device-owner policy | Depends on management system. | Specialist-reviewed unenrollment; never use as ordinary consumer default. |

| Failure path | Detection | Recovery and disclosure |
| --- | --- | --- |
| App uninstalled before preparation | App cannot run cleanup. | Previously exported local inventory or user-held printable recovery sheet guides cleanup; no secret service remains. |
| Reinstall | App has no right to infer prior state from hidden persistence. | User imports a signed/plain-language inventory or explicitly asks to rescan documented settings; ownership is re-confirmed. |
| DNS/router remains | Health check may observe configured resolver only with permission; router state may be opaque. | Mark `external state unknown` until user or vendor API confirms restoration. |
| Partial teardown | One or more layers fail removal/verification. | Show exact residual layer, owner, consequence, next official step, and escalation path. Never report complete teardown. |
| Device lost/replaced/reset | Local inventory may be gone. | Recovery copy is optional and user-held by default; a cloud copy requires separate consent and threat model. |
| Permission revoked | Adapter reports unavailable where official API exposes state. | Mark degraded immediately; do not notify an ally unless that exact event was separately selected. |

## Bounded Stage B Spikes

Every spike uses synthetic/user-selected non-sensitive fixtures. No production deployment or real participant browsing history is authorized.

| Spike | Pass criteria | Fail criteria | Stop criteria |
| --- | --- | --- | --- |
| Chromium/Edge | Declared fixtures block/allow/redirect correctly; permission loss, incognito exclusion, disable, removal, and store-package differences are visible; teardown leaves no app rules. | Undisclosed host access, material false blocks, silent degraded state, or incompatible Edge behavior. | Hidden persistence, raw-content collection, or misleading all-browser claim. |
| Firefox | Same fixture plus Manifest/API compatibility and private-window behavior documented. | Behavior cannot be made understandable or parity assumptions fail materially. | Any attempt to bypass user extension controls. |
| Safari | Site permissions, enable/disable, app removal, private browsing, and supported rule behavior measured on named OS versions. | Store/permission UX makes intended bounded action unreliable. | Entitlement/store requirement is guessed instead of verified. |
| Android VPN | System consent, VPN conflicts, revoke, always-on user choice, battery, latency, OEM restart, removal, and DNS behavior measured on named devices. | Essential traffic breaks, overhead is unacceptable, or recovery is unreliable. | Device-owner powers are represented as ordinary consumer behavior. |
| iOS Family Controls / Network Extension | Entitlement/deployment status recorded; authorization, shield/filter scope, revoke, removal, reset, and alternate-device behavior measured. | Entitlement denied or behavior cannot meet transparent recovery requirements. | No entitlement or real-device evidence but product capability is claimed. |
| OS setup assistant | User completes official setting with exact preview; partial completion and rollback are visible. | Better Life cannot detect or clearly communicate completion. | Silent automation or undocumented system change. |
| DNS/router assistant | Named resolver/router setup and restoration succeed on a bounded matrix; household impact is understood. | Shared-household harm, unresolved admin ownership, or incomplete teardown. | Credentials stored without necessity or external rule is orphaned. |

Shared stop criteria: lockout without independent recovery, coercive third-party ownership, inaccessible safety exception, material privacy leakage, store/policy rejection, or user comprehension below the frozen Stage B threshold.

## Source Traceability Register

All sources were re-opened on 2026-07-15. Versions are the documentation applicability stated by the publisher, not Better Life test results.

| Claim area | Official document and exact section/API | Applicability | Known ambiguity |
| --- | --- | --- | --- |
| Chrome blocking | [chrome.declarativeNetRequest - Description, Permissions, Availability, Rulesets](https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest) | Chrome 84+; current page re-checked 2026-07-15 | Cross-Chromium parity and store behavior require separate tests. |
| Chrome permissions | [Declare permissions - Host permissions and incognito access](https://developer.chrome.com/docs/extensions/develop/concepts/declare-permissions) | Manifest V3 guidance; page last-updated date recorded by publisher | User comprehension and actual warning text vary. |
| Edge extensions | [Overview of Microsoft Edge extensions - compatibility and publishing](https://learn.microsoft.com/en-us/microsoft-edge/extensions/) | Chromium-based Edge current documentation | Less-common API parity is not guaranteed. |
| Firefox blocking | [MDN WebExtensions webRequest - permissions and modifying requests](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest) | Firefox WebExtensions; current page | Manifest/version differences need a fixture. |
| Safari | [Safari app extensions - overview and distribution](https://developer.apple.com/documentation/safariservices/safari-app-extensions) and [website access permissions](https://developer.apple.com/documentation/safariservices/adjusting-website-access-permissions) | Safari/macOS, with Safari 17 permission note | iOS and web-extension feature parity must be separately verified. |
| Apple Family Controls | [AuthorizationCenter - requestAuthorization and capability requirement](https://developer.apple.com/documentation/FamilyControls/AuthorizationCenter) | Compatible iPhone/iPad app; entitlement required | Distribution approval and adult self-use suitability are open. |
| Apple filtering | [Content filter providers - Overview](https://developer.apple.com/documentation/networkextension/content-filter-providers) and [Network Extensions Entitlement](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.networking.networkextension) | Provider/entitlement-specific | Deployment and App Review outcome remain open. |
| Android VPN | [VpnService - prepare, onRevoke, always-on metadata](https://developer.android.com/reference/android/net/VpnService) | API 14+; always-on details vary by API level | OEM, battery, VPN conflict, and store policy require tests. |
| Android managed mode | [Android Management API - enroll and provision a device](https://developers.google.com/android/management/provision-device) | Enterprise/work-profile/fully-managed lifecycle | Not ordinary self-installed consumer control. |
| Microsoft Family Safety | [Filter websites and searches](https://support.microsoft.com/en-us/family-safety/filter-websites-and-searches-using-microsoft-family-safety) | Current support page; Edge requirement | Adult voluntary self-use and role suitability are untested. |
| Apple Screen Time | [Get started with Screen Time on iPhone](https://support.apple.com/guide/iphone/get-started-with-screen-time-iphbfa595995/ios) | Current iOS guide | Manual settings are not a third-party configuration API. |
| SafeSearch | [Lock SafeSearch for accounts, devices and networks you manage](https://support.google.com/websearch/answer/186669) | Google Search only | It does not filter other sites/search engines. |

## Remaining Gaps And Escalation

Escalation required: Apple entitlement and App Review, Play Store review, browser-store approval, real-device/browser/router testing, security review, coercive-control review, accessibility review, EU/German legal and privacy review, and user comprehension/adverse-effect testing.

No uniform capability, practical-resistance, efficacy, store approval, safe teardown, or user-value claim is accepted until the relevant external evidence exists.
