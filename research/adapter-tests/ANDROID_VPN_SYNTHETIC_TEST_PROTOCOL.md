# Android VPN Synthetic Test Protocol

- Protocol ID: `BL-ADAPTER-ANDROID-VPN-01`
- Version: `0.1-draft`
- Status: Not executable; app fixture, exact devices/builds, permissions, store scope, and review are unfrozen
- Common contract: `COMMON_ADAPTER_SECURITY_AND_TEARDOWN_TESTS.md`

## Exact Research Question

For exact frozen Android device/build rows, can a synthetic `VpnService` research adapter route and classify only declared test-app/`.example` traffic, disclose single-VPN and platform limits, preserve legitimate/offline access, avoid sensitive payload/history collection, remain within acceptable performance/battery bounds, and teardown without VPN/profile/routing or data residue?

## Exact Environment to Freeze

| Environment ID | Required value | Current state |
| --- | --- | --- |
| `E-AVPN-REF-01` | Named physical Android reference device/model/SoC; exact Android version/build/API/security patch; exact Google Play system/services if present; stock/nonrooted; battery health/state; test SIM absent/disabled unless approved | `UNFROZEN - blocks execution` |
| `E-AVPN-OEM-01` | Named second OEM/device/build to study battery/process variation, only if resourced | `DEFERRED/UNFROZEN` |
| App/fixture | Exact APK/application ID/version/build hash/signing cert/SDK/manifest/permissions/SBOM; local synthetic server/resolver; test app packages | `NOT IMPLEMENTED` |

Emulator results, if added, are separate and cannot substitute for physical battery/OEM observations.

## Accounts and Permissions

- Fresh standard device user with test-only Google account only if distribution requires it; backup/sync off.
- Exact `VpnService` consent flow, notifications, foreground-service permissions/type, battery optimization state, per-app configuration, always-on/lockdown status, Private DNS, and other VPN state must be frozen.
- Synthetic packages: `org.betterlife.synthetic.allowed` and `org.betterlife.synthetic.blocked`; fixture only, not implemented.
- No root, device-owner, work-profile management, accessibility service, certificate install, hidden admin, or managed-device claim in this protocol.
- Existing VPN conflict and consent revocation are mandatory cases; silently replacing another VPN is a Stop.

## Synthetic Domains/Apps and Expected Behavior

- Allowed app + `allowed.example`: exact successful local request.
- Blocked app and/or `blocked.example`: exact declared block/neutral response.
- Cross matrix app x domain distinguishes per-app and domain behavior.
- `false-positive.example` and allowed app remain available.
- No TLS interception or payload inspection unless separately proposed, reviewed, and authorized; current protocol expects metadata-minimized routing only.

## Required Coverage

| Topic | Required case / expected result |
| --- | --- |
| Expected behavior | C03-C05 app/domain/IPv4/IPv6/TCP/UDP/DNS matrix exactly declared. |
| Bypass | C07 alternate browser/app, direct IP, QUIC/HTTP3 if applicable, Private DNS/DoH, proxy, another VPN, tethering/hotspot, work profile/secondary user if supported, force-stop, battery kill, reboot, safe mode only if safe/reviewed. |
| Alternate browser/profile/account | C08 multiple synthetic browsers/apps, secondary Android user/work profile as separate approved rows, different test account. |
| False positive | C06 allowed app/domain/near match/protocol under load. |
| Legitimate recovery | C09 disconnect/allow exact app/domain, restore existing VPN choice, no intimate reason or third-party approval. |
| Offline | C10 airplane mode, Wi-Fi loss/reconnect, captive/no-internet synthetic state, reboot, stale tunnel. |
| Clock/timezone | C11 timers/expiry, automatic/manual time and timezone, reboot/suspend. |
| Degraded/orphan | C12/C17 service killed, permission revoked, other VPN starts, resolver unavailable, app update mismatch, notification denied; exact health state. |
| Uninstall/reinstall | C13-C14 VPN profile/consent/always-on/lockdown/notification/app data/routes/backup residue. |
| Reset/replacement | C15 app/network/VPN reset and factory reset in disposable device only if approved; C16 replacement device starts off. |
| Teardown | C18 stop service, revoke VPN/always-on/lockdown, clear routes/DNS/app data/permissions, reboot, baseline network verification. |
| Privacy | C19 inspect logs/storage/pcap; no payload, real domain, app history, device ID, account, or public traffic capture. |
| Performance | C20 throughput/latency/loss/CPU/memory/crash on synthetic traffic. |
| Battery/thermal | C21 controlled idle/active/background/reconnect runs with exact method, battery/thermal state and OEM caveat. |
| Update/supply chain | C22 APK signature/hash/SDK/API/permission/Play policy change and emergency stop/teardown. |

## Pass, Fail, and Stop

Pass only per exact device/build with declared traffic behavior, truthful degraded state, legitimate recovery, privacy, performance/battery, and complete teardown. Fail on leak/false block/allow, VPN conflict mishandling, stale tunnel, false health, unacceptable reviewer-set regression, or residual. Stop on real traffic/payload capture, lockout/no network recovery, existing VPN loss, undisclosed permission/admin/certificate, thermal/battery safety event, untrusted APK, or high-privilege orphan.

## Evidence Capture

Capture exact device/build/patch/APK/signature/manifest/permission/VPN/Private-DNS/battery-optimization state; synthetic app/domain result IDs; redacted route/DNS/pcap metadata; process/notification/health state; performance/battery method; reset/uninstall/reinstall/reboot diffs; and teardown. Exclude account/device identifiers, payloads, real app/domain history, and unrelated traffic.

## Current Decision

`Protocol prepared; execution blocked` pending exact devices, fixture, store/policy scope, security/privacy/platform review, and teardown authorization.
