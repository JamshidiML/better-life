# Cross-Device Feasibility Report

- Status: Cycle 1 draft
- Issue: #13
- Branch: `codex/13-cross-device-feasibility`
- Research and source-access date: 2026-07-15

## Classification

Material statements use one of: **Verified**, **Evidence-supported**, **Platform limitation**, **Hypothesis**, or **Open question**. "Verified" means verified against repository doctrine or an authoritative source; it does not mean the capability was tested on hardware.

## Decision Summary

- **Verified:** No ordinary consumer application can guarantee universal protection across personally controlled phones, desktops, browsers, networks, borrowed devices, and offline content.
- **Evidence-supported:** A Chromium extension can block or redirect matching network requests through declarative rules without reading response bodies. It remains user-disableable in an ordinary installation.
- **Evidence-supported:** Apple Screen Time frameworks expose privacy-preserving app and web-domain controls, but distribution requires Apple approval for the Family Controls entitlement.
- **Evidence-supported:** Android `VpnService` can create a user-authorized local network tunnel; always-on enforcement is stronger when set by a device/profile owner than in ordinary consumer mode.
- **Platform limitation:** DNS, VPN, browser, and device-level controls operate at different layers. None sees every app-internal feed, encrypted message, local file, alternate device, or AI-generated content.
- **Hypothesis:** The lowest-risk first technical wedge is a local-first web command center paired with a Chromium desktop extension, while mobile spikes verify iOS entitlement access and Android VPN behavior.

## Architecture Pre-Check

| Required element | Classification | Cycle 1 answer |
| --- | --- | --- |
| User problem | Evidence-supported | A consenting adult needs useful friction during a high-risk moment without surveillance, shame, or a promise of perfect prevention. |
| Expected benefit | Hypothesis | Earlier interruption and a user-authored redirect may create enough time for a values-aligned action. Benefit is not yet validated with users. |
| Supporting evidence | Evidence-supported | Official platform documentation establishes available mechanisms. Behavioral benefit remains dependent on Thread 02 and Phase 0 research. |
| Required data | Hypothesis | Policy IDs, selected domains/apps, schedules, local intervention events, consent version, and coarse success/failure outcomes. Raw page content is not required for the first spike. |
| Consent | Verified | Explicit adult self-authorization, permission-by-permission explanation, local/cloud choice, visible audit, and calm-state exit are mandatory. |
| Safety risks | Verified | False confidence, lockout, shame, overblocking, crisis substitution, and loss of essential access. |
| Misuse risks | Verified | Partner spyware, employer/parent deployment, secret policy changes, and identity or browsing-history disclosure. |
| Platform feasibility | Platform limitation | Consumer strength varies by platform and installation mode; managed-device powers are not an acceptable default consumer assumption. |
| Success metric | Hypothesis | The spike correctly blocks/redirects selected test domains, exposes bypasses, preserves local-only event data, and adds less than 100 ms median navigation overhead in the test harness. |
| Exit strategy | Verified | Disable the spike, export/delete local policy and events, revoke permissions, and reject the mechanism if value does not justify data or lockout risk. |

## Platform Findings

| Surface | Classification | Consumer capability | Stronger mode | Principal limitation |
| --- | --- | --- | --- | --- |
| iOS/iPadOS Screen Time APIs | Evidence-supported | User-authorized app/category/web-domain shielding and scheduled activity callbacks are possible through FamilyControls, ManagedSettings, and DeviceActivity. | Family Sharing and supervised/managed deployments can support different control relationships. | Distribution entitlement approval is required; tokens intentionally hide selected app/domain identity from the app; alternate devices and account/reset paths remain. |
| iOS Network Extension | Evidence-supported | Provider types exist for VPN and filtering, with deployment conditions varying by provider. | Managed deployment can configure stronger persistent controls. | Entitlements, provider deployment rules, VPN conflicts, WebKit/URLSession coverage, and App Review must be verified per design. |
| Android consumer app | Evidence-supported | User-approved VPN, usage access, notifications, and ordinary app UI can provide filtering and friction. | Device/profile owner can enforce always-on VPN and broader policy. | User can revoke permissions, uninstall, use safe mode/secondary users/OEM paths, or switch device/network. |
| Android accessibility | Platform limitation | Technically observes UI events when enabled. | None appropriate for Better Life consumer enforcement. | Google Play requires declaration, prominent disclosure, consent, and policy-compliant core use; using it as covert monitoring is prohibited. |
| Chrome/Chromium extension | Evidence-supported | DNR rules can block, redirect, allow, or modify supported requests; content scripts can alter permitted pages. | Enterprise policy can force-install and restrict removal. | Ordinary users can disable/remove the extension; host permissions and incognito access are user controlled; browser-internal and alternate-browser surfaces remain. |
| Firefox extension | Evidence-supported | WebRequest/content scripts can act on permitted web traffic and pages. | Enterprise policy can constrain extension settings. | Private-window access is user controlled; privileged browser pages and other browsers remain outside coverage. |
| Safari extension/content blocker | Evidence-supported | Safari Web Extensions and compiled content blockers can block supported Safari loads. | Managed configuration may improve deployment consistency. | Safari-only coverage; user controls installation/permissions; app-internal content is outside Safari. |
| Windows desktop helper | Evidence-supported | An administrator-installed service can use Windows Filtering Platform for connection-level policy. | Enterprise policy can make persistence stronger. | Administrator rights, driver/service security, uninstall, alternate users, VMs, remote sessions, portable apps, and non-network content. |
| macOS desktop helper | Evidence-supported | Network Extension content filters exist and can allow/deny flows. | System-extension/MDM deployment can reduce setup friction. | Approval/deployment requirements, competing network filters, admin removal, alternate users, VMs, and local content. |
| DNS/router | Evidence-supported | Domain-level allow/deny decisions can cover multiple devices on one configured network. | Managed router/profile can make configuration more persistent. | DoH/DoT, VPN, cellular, alternate Wi-Fi, IP access, shared CDNs, app-internal/local content, and borrowed devices. |

## Cross-Device Reality

- **Platform limitation:** Shared policy synchronization can coordinate rules, but it cannot create capabilities that a local platform adapter does not possess.
- **Platform limitation:** Work, school, borrowed, and shared devices may be legally or technically outside the user's control; Better Life should offer guidance rather than install agents without owner authorization.
- **Platform limitation:** Factory reset, account recovery, device replacement, old devices, virtual machines, remote desktop, consoles, smart TVs, external storage, and offline files remain bypass paths.
- **Open question:** Whether users value honest partial coverage enough to adopt a browser-first wedge must be tested in Phase 0 interviews.
- **Open question:** Whether mobile-store policy permits each intended use must be resolved with a minimal app submission or written platform guidance, not inferred from API existence.

## Prototype Plan

**Hypothesis:** A two-week, synthetic-data-only spike can test the hardest first-wedge assumptions without production code.

1. Build a disposable Chromium extension prototype with a local policy file and three synthetic test domains.
2. Exercise block, redirect, scheduled activation, permission revocation, incognito-disabled, extension-disabled, alternate-browser, offline, and network-failure scenarios.
3. Keep all event records local and content-free: policy ID, timestamp bucket, action, adapter status, and user-dismissal result.
4. Measure rule correctness, false blocking on an allowlist corpus, navigation overhead, recovery after browser restart, and audit-log completeness.
5. In parallel, request/verify Apple Family Controls distribution eligibility and run an Android emulator/device `VpnService` spike with no real browsing history.

Pass criteria:

- **Hypothesis:** 100% of the small deterministic block/allow fixture behaves as declared; zero raw URL paths or page content enter telemetry; every permission loss produces a visible degraded-state message.
- **Hypothesis:** Median added navigation time is below 100 ms on the fixture and no essential allowlisted destination is blocked.

Failure criteria:

- **Verified:** Stop if the spike requires hidden monitoring, raw content collection, an unsupported store-policy interpretation, or a claim stronger than observed behavior.
- **Hypothesis:** Reject browser-first as the initial wedge if representative users find partial coverage misleading or setup burden unacceptable.

## Official Sources

Accessed 2026-07-15:

- Apple: [Screen Time frameworks](https://developer.apple.com/documentation/ScreenTimeAPIDocumentation), [Family Controls entitlement](https://developer.apple.com/documentation/FamilyControls/requesting-the-family-controls-entitlement), [Managed Settings](https://developer.apple.com/documentation/ManagedSettings), [Device Activity](https://developer.apple.com/documentation/DeviceActivity), [Network Extension deployment](https://developer.apple.com/documentation/technotes/tn3134-network-extension-provider-deployment), [Safari extensions](https://developer.apple.com/safari/extensions/).
- Android: [VpnService](https://developer.android.com/reference/android/net/VpnService), [DevicePolicyManager](https://developer.android.com/reference/android/app/admin/DevicePolicyManager), [device control](https://developer.android.com/work/dpc/device-management), [AccessibilityService policy](https://support.google.com/googleplay/android-developer/answer/10964491).
- Browsers: [Chrome declarativeNetRequest](https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest), [Chrome incognito](https://developer.chrome.com/docs/extensions/reference/manifest/incognito), [Firefox private browsing](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/incognito).
- Desktop: [Windows Filtering Platform](https://learn.microsoft.com/en-us/windows/win32/fwp/about-windows-filtering-platform), [Apple content-filter providers](https://developer.apple.com/documentation/networkextension/content-filter-providers).

## Open Evidence Gaps

- Apple entitlement approval and App Review outcome for Better Life's adult self-use framing.
- Current Google Play review interpretation for the exact accessibility or VPN behavior proposed.
- Real-device battery, latency, reliability, OEM variation, and VPN coexistence.
- User willingness to accept browser-first partial coverage.
- Legal review for managed-device and work-device guidance.
