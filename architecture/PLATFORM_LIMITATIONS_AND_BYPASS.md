# Platform Limitations and Bypass Register

- Status: Cycle 1 draft
- Issue: #13
- Research date: 2026-07-15

## Interpretation

Bypass analysis is defensive and user-facing. It is not a promise to defeat a determined device owner and must not be used to design covert monitoring.

| ID | Surface | Classification | Bypass or failure | Consequence | Required response |
| --- | --- | --- | --- | --- | --- |
| P01 | All | Platform limitation | Use an unmanaged, borrowed, work, old, or newly purchased device | Policy has no local adapter | Show enrolled-device scope; never say "all devices protected" |
| P02 | All | Platform limitation | Factory reset, account recovery, reinstall, alternate OS/user, VM, remote desktop | Local protection disappears or is isolated | Visible adapter health; calm re-enrollment; no secret recovery controls |
| P03 | Browser | Platform limitation | Disable/remove extension; use alternate/private browser | Web requests bypass extension | Detect only where browser exposes status; show degraded state; no hidden reinstall |
| P04 | Browser | Platform limitation | Privileged/internal pages, cached/service-worker content, downloads/offline files | Rules do not see or cannot alter content | Declare coverage precisely; avoid content-wide claims |
| P05 | iOS | Platform limitation | Entitlement unavailable, authorization revoked, device/account changes | Shield/activity behavior unavailable | Do not launch enforcement claim before approved entitlement and real-device tests |
| P06 | Android | Platform limitation | VPN disabled/replaced, safe mode, secondary user, OEM task killing, uninstall | Filtering stops | Foreground health indicator; conflict handling; test OEM matrix |
| P07 | Network | Platform limitation | DoH/DoT, full VPN, cellular, tethering, alternate Wi-Fi, IP access | DNS/router policy bypassed | Treat network layer as optional defense, not authority |
| P08 | Encrypted apps | Platform limitation | In-app feeds, encrypted messages, proprietary protocols | Domain/connection data cannot classify individual content | No claim to inspect message/content semantics |
| P09 | Local content | Platform limitation | Cached media, external storage, cloud-sync local copy, generated content | No network request to block | Scope exclusion and non-digital intervention only |
| P10 | Shared device | Verified risk | Policy or logs affect another household member | Non-user privacy violation | Per-user setup where available; no household logging by default |
| P11 | Strict mode | Verified risk | Emergency or essential site is blocked | Safety/access harm | Always-available safety exception and allowlist; incident review |
| P12 | Strict mode | Verified risk | Partner/employer secretly configures or controls exit | Coercive control | Adult self-authorization, anti-coercion checks, no secret admin |
| P13 | Cloud | Verified risk | Sync outage or account takeover | Policy inconsistency or exposure | Local operation, secure recovery, minimal server data, transparent conflict state |
| P14 | Classification | Verified risk | Domain/page classifier false positive or false negative | Lockout or false confidence | Deterministic fixture, appeal, uncertainty, no clinical/enforcement guarantee |

## Failure Communication Contract

- **Verified:** State the adapter, declared action, result, and limitation in plain language.
- **Verified:** Never hide a permission loss or present a local failure as user misconduct.
- **Verified:** A failure event must not automatically disclose browsing intent to an ally.
- **Hypothesis:** A single neutral message such as "Protection is reduced on Chrome because the extension is off" is preferable to repeated alarms; validate in user research.

## Stop Conditions

- **Verified:** Reject any proposed mechanism that depends on covert installation, raw screenshot upload, breaking encryption, or unreviewed third-party control.
- **Verified:** Escalate entitlement, app-store policy, managed-device, work-device, and legal uncertainty rather than converting it into a capability claim.
