# Protection Capability Matrix

- Status: Cycle 1 draft
- Issue: #13
- Research date: 2026-07-15

## Legend

- Classes: detect (D), delay (Y), block (B), redirect (R), notify (N), log (L).
- Strength: Low, Medium, High within the stated installation mode only.
- Every row is **Evidence-supported conclusion** unless marked otherwise. No row asserts bypass-proof protection.

| Platform / mechanism | Classes | Permission or configuration | Strength | Key bypass/failure | Privacy and performance | Policy risk | MVP fit |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Chrome/Chromium DNR extension | B/R/L | Install extension; host/DNR permissions | Medium | Disable/remove; alternate browser; incognito permission off; unsupported schemes; service-worker/cache edge cases | Can use declarative rules without reading bodies; low expected overhead, untested | Low-medium; store review and permission disclosure | High for spike |
| Chrome content script | D/Y/R/L | Host permissions | Medium | Restricted pages; app-internal content; disable/remove | Can read permitted page DOM, therefore higher sensitivity and CPU cost | Medium | Defer unless domain rules are insufficient |
| Firefox WebExtension | D/B/R/L | Install; host/private-window permission | Medium | Private access off; privileged pages; alternate browser | Request/page access depends on APIs used | Low-medium | Medium |
| Safari content blocker | B | Install containing app and enable extension | Medium | Safari only; user disables; in-app browser variation | Compiled rules; extension does not receive visited-page data in content-blocker model | Low | Medium |
| Safari WebExtension | D/B/R/L | App Store app; site permissions | Medium | Safari only; user permission/removal | DOM/request access can be sensitive | Medium | Medium after Chrome |
| iOS FamilyControls + ManagedSettings | D/B/N/L | User authorization plus approved distribution entitlement | Medium-high for selected apps/domains on enrolled device | Entitlement denial; authorization changes; reset/account/device changes; other devices | Privacy-preserving opaque tokens; battery/reliability must be tested | Medium-high until entitlement/App Review verified | Spike only |
| iOS DeviceActivity | D/N/L | Family Controls authorization and extension | Medium | Scheduling/report behavior, entitlement, OS behavior, device changes | Designed for privacy-preserving activity monitoring; no raw content need | Medium-high | Spike only |
| iOS content filter / URL filter | B/L | Network Extension configuration/entitlement | Medium-high within covered flows | VPN conflicts; deployment mode; nonparticipating apps; alternate devices | Network metadata may be sensitive; provider sandbox can limit export | High until deployment path verified | Not v1 promise |
| Android local VpnService | D/B/R/L | User VPN consent; foreground service | Medium | VPN disabled/replaced; uninstall; safe mode; secondary users; OEM behavior | Sees network metadata; encrypted payload remains opaque; battery/latency testing required | Medium | High for spike, not first UX |
| Android usage access | D/L | Special user grant | Low | Revocation; OEM variation; coarse data | App-usage metadata is sensitive | Medium | Supporting signal only |
| Android AccessibilityService | D/Y/B/L | Accessibility enablement and disclosure | Medium | Revocation; UI changes; policy rejection; safe mode | Very high sensitivity and maintenance burden | High | No until dedicated review |
| Android device owner/DPC | B/N/L | Fully managed provisioning on an unprovisioned/managed device | High | Factory reset, alternate device; incompatible with ordinary self-install | Broad control and high coercion risk | High for consumer positioning | Exclude from normal MVP |
| Windows WFP helper | D/B/R/L | Administrator install/service | High on network flows | Admin removal; VM; alternate account; remote/portable browser; local content | Network metadata and driver/service attack surface | Medium-high | Later desktop layer |
| macOS Network Extension filter | D/B/R/L | App/system extension approval; possibly MDM | High on covered flows | Approval/removal; other filters; VM; alternate account; local content | Sensitive flow metadata; sandboxed provider design helps | Medium-high | Later desktop layer |
| Local DNS proxy | D/B/R/L | DNS profile/router/device setup | Medium | DoH/DoT, IP, VPN, cellular/alternate network | Domain metadata only; low compute | Low-medium | Guided setup candidate |
| Router DNS | B/L | Router administrator access | Medium on that network | Cellular, alternate Wi-Fi, VPN, hard-coded DNS, local content | Household-wide logs can expose other people | Medium privacy/coercion risk | Guidance only |
| Ally notification | N/L | Separate specific consent and verified channel | Low as enforcement | Delivery failure, ally unavailable, coercion, alert fatigue | Must disclose only action requested and chosen signal | High safety sensitivity | Manual help request only |

## Capability Interpretation

- **Platform limitation:** "High" strength applies only to the enrolled surface and installation mode; it is not a cross-device guarantee.
- **Repository decision:** Managed-device capabilities must never be presented as normal consumer-app powers.
- **Design requirement:** Any log must record adapter health and declared action, not raw content or hidden browsing history.
- **Open question:** Battery, latency, false-positive, and maintenance scores require prototype measurements; qualitative estimates above must not become marketing claims.
