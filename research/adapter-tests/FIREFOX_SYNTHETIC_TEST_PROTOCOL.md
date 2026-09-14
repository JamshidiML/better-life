# Firefox Synthetic Test Protocol

- Protocol ID: `BL-ADAPTER-FIREFOX-01`
- Version: `0.1-draft`
- Status: Not executable; add-on fixture, exact versions, permissions, and review are unfrozen
- Common contract: `COMMON_ADAPTER_SECURITY_AND_TEARDOWN_TESTS.md`

## Exact Research Question

For one exact frozen desktop Firefox build on an isolated Windows environment, can a synthetic WebExtension apply only its declared `.example` request behavior, remain truthful across containers/private windows/profiles, support legitimate recovery, and teardown without residual rules, data, or false cross-browser claims?

## Exact Environment to Freeze

| Environment ID | Required value | Current state |
| --- | --- | --- |
| `E-FF-WIN-01` | Clean Windows 11 x64 exact edition/build/patch on named VM/hardware; Firefox Stable exact version/build/channel; standard local user; fresh profile; sync off | `UNFROZEN - blocks execution` |
| Add-on | Exact package/build hash, manifest, signing/temporary-install/AMO channel, permissions, dependency lock/SBOM | `NOT IMPLEMENTED` |

Optional macOS/Linux rows require separate exact manifests and cannot inherit Windows results.

## Accounts and Permissions

- Standard local OS user; separate Firefox primary and alternate profiles; Multi-Account Containers only if exact extension/version is part of frozen environment.
- Private-browsing access denied and granted are separate cases.
- Firefox account/sync remains off unless an approved residual case explicitly enables it with a test-only account.
- Freeze exact `webRequest`/blocking/host/storage permissions or replacement API. Broader permission than reviewed is a Stop.
- No native messaging, proxy, certificate, DNS, service, admin, enterprise policy, or hidden persistence unless separately scoped and reviewed.

## Synthetic Domains and Expected Behavior

Use common isolated `.example` fixtures. `blocked.example` is blocked/redirected exactly as declared; allowed/false-positive/recovery names pass. Test navigation, subresource, fetch, redirect, cache/service worker, WebSocket, and DNS/proxy behavior only where the add-on contract declares coverage. Unknown request types remain visible.

## Required Coverage

| Topic | Required case / expected result |
| --- | --- |
| Expected behavior | C03-C05 on exact Firefox build; no Chrome/Edge equivalence assumption. |
| Bypass | C07 disabled add-on, troubleshooting/safe mode if appropriate, private window, container, alternate profile/browser, direct IP, proxy/VPN, DoH, cache/service worker, unsupported in-app/WebView. |
| Alternate browser/profile/account | C08 separate Firefox profile/container/private setting, second OS user, and Chrome/Edge as explicitly out-of-adapter paths. |
| False positive | C06 host/subdomain/path/scheme/port/near-match matrix. |
| Legitimate recovery | C09 immediate visible allow/disable/revoke without social approval or intimate reason. |
| Offline | C10 cached/offline content, restart, reconnect, stale extension state. |
| Clock/timezone | C11 any timer/expiry; if none, verify none exists and record not applicable. |
| Degraded/orphan | C12/C17 add-on crash/disable, permission revoke, API mismatch, corrupted rules/storage; exact unknown state. |
| Uninstall/reinstall | C13-C14 add-on storage/preferences/permissions/sync/enterprise residue. |
| Reset/replacement | C15 profile refresh/deletion and C16 clean profile/new VM. |
| Teardown | C18 package/rule/storage/permission/policy residual comparison and reboot. |
| Privacy | C19 add-on storage/log/network audit; no URL/history/payload retention. |
| Performance | C20 page/request latency, CPU/memory/crash under synthetic load. |
| Battery | C21 laptop row or reviewer-approved not applicable. |
| Update/supply chain | C22 signing/channel/API/permission changes, emergency disable and teardown guidance. |

## Pass, Fail, Stop, and Evidence

Pass only for the exact Firefox row when all applicable cases and teardown pass. Fail on behavior mismatch, false block/allow, container/private/profile overclaim, recovery/degraded-state defect, privacy leak, regression, or residual. Stop on real traffic/history, privilege/persistence expansion, untrusted signing/build, lockout, or high-privilege orphan.

Capture exact Firefox/support information, add-on/signing/permission/config state, synthetic result IDs, neutral screenshots, storage/network audit, performance method, profile/reset/uninstall diffs, and teardown evidence. Redact all user/device identifiers; no browser history.

## Current Decision

`Protocol prepared; execution blocked` pending exact environment, fixture, security/platform review, and approved teardown.
