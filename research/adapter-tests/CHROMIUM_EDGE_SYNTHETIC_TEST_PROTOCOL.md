# Chromium and Edge Synthetic Test Protocol

- Protocol ID: `BL-ADAPTER-CHR-EDGE-01`
- Version: `0.1-draft`
- Status: Not executable; extension fixture, exact versions, permissions, and review are unfrozen
- Common contract: `COMMON_ADAPTER_SECURITY_AND_TEARDOWN_TESTS.md`

## Exact Research Question

For exact frozen desktop Chrome and Microsoft Edge builds on an isolated Windows environment, can one synthetic Manifest V3 adapter enforce only its declared `.example` request rules, disclose profile/browser limits, recover legitimate use, and fully remove extension-owned artifacts without false protection or sensitive logging?

This does not test all Chromium browsers, mobile browsers, in-app browsers, store acceptance, real content, or participant benefit.

## Exact Environment to Freeze

| Environment ID | Required value before run | Current state |
| --- | --- | --- |
| `E-CHR-WIN-01` | Clean Windows 11 x64 edition + exact version/build/patch on named VM/hardware; Chrome Stable exact version/build/channel; standard local OS user; fresh browser profile with sync off | `UNFROZEN - blocks execution` |
| `E-EDGE-WIN-01` | Same baseline class; Edge Stable exact version/build/channel; separate standard OS user/profile with sync off | `UNFROZEN - blocks execution` |
| Adapter | Exact extension package/build hash, manifest, ruleset hash, signing/developer mode/store channel, dependency lock/SBOM | `NOT IMPLEMENTED` |

Run Chrome and Edge as separate matrix rows. Do not infer parity. Any store-policy test requires a separate authorized store account and connectivity window.

## Accounts and Permissions

- Standard nonadministrator Windows test user; separate administrator only for lab restoration, never routine adapter operation.
- Browser test profiles: primary, alternate, guest/private where supported, and second OS account.
- Browser sync off unless a separately approved sync-residual case is added.
- Freeze exact extension permissions/host permissions/incognito setting. Candidate DNR/host permissions remain unapproved.
- Denial, optional host grant, revocation, and permission-change/update cases are mandatory.
- Unexpected enterprise policy, native host, service, scheduled task, certificate, proxy, DNS, or admin requirement is a Stop.

## Synthetic Domains and Expected Behavior

- `blocked.example` and `sub.blocked.example`: exact declared block or neutral local redirect, separately specified.
- `allowed.example`, `false-positive.example`, `recovery.example`: allowed without mutation.
- Test HTTP/HTTPS, top-level navigation, subresource/fetch, redirect chain, cached response, and WebSocket only where declared; unsupported types remain visible.
- Fixture uses isolated local DNS/server and synthetic certificates under the reviewed lab procedure.

## Platform-Specific Test Matrix

| Topic | Required case / expected result |
| --- | --- |
| Declared behavior | Run C03-C05 independently in Chrome and Edge; observed request types match exact rules and health UI. |
| Bypass | C07 covers disabled extension, developer tools only if relevant, alternate Chromium/non-Chromium browser, in-app/WebView outside scope, direct IP, proxy/VPN, DoH, cache/service worker, private/guest mode, alternate profile. Every gap is disclosed. |
| Alternate profile/account | C08: fresh browser profile, signed-out/signed-in if approved, second Windows user. No silent all-profile claim. |
| False positive | C06 exact/near-match, subdomain, path, query, port, scheme, Internationalized Domain Name synthetic equivalent only if safely defined. |
| Legitimate recovery | C09 immediate allow/revoke/disable path under Supportive synthetic policy; no password trick, third party, or intimate reason. |
| Offline | C10 cached pages, service worker, browser restart offline, reconnect, pending state. |
| Clock/timezone | C11 extension timers/expiry only if fixture declares them; otherwise verify no hidden time behavior and mark not applicable with rationale. |
| Degraded/orphan | C12/C17 permission revoked, extension crashed/disabled, ruleset load failure, API/version mismatch; UI must not claim browser-wide protection. |
| Uninstall/reinstall | C13-C14 extension data, rules, permissions, background state, sync residue, managed-policy residue separately inspected. |
| Reset/replacement | C15 browser reset/profile deletion and C16 new profile/new VM; no automatic policy/consent transfer. |
| Teardown | C18 extension/rules/storage/permissions/sync/policy residual diff, reboot, allow/block baseline. |
| Privacy | C19 no URL/path/query/payload/history retention beyond synthetic IDs; inspect extension storage/logs/network destinations. |
| Performance | C20 page/navigation/subresource latency, CPU/memory/crash under controlled synthetic load. |
| Battery/energy | C21 on laptop only; otherwise reviewer-approved `Not applicable`. |
| Update/supply chain | C22 manifest/API change, signed update/hash mismatch, permission widening, store removal/emergency disable. |

## Pass, Fail, and Stop

Pass separately per browser/build only when all applicable common/platform cases pass and teardown has no unexplained residual. Fail on false allow/block, permission overreach, incorrect profile claim, false health, recovery failure, material regression, or residual. Stop on real traffic/history capture, admin/native persistence, unexpected certificate/proxy/DNS change, lockout, untrusted package, or high-privilege orphan.

## Evidence Capture

Record exact `chrome://version`/`edge://version` equivalents, policy/extension/permission/ruleset state, synthetic request result IDs, neutral screenshots, extension storage/network destinations, performance method, uninstall/reinstall/reset diffs, and teardown verification. Redact machine/user/profile identifiers. No raw browser history.

## Current Decision

`Protocol prepared; execution blocked.` Security/platform review, exact run manifests, fixture implementation/review, and teardown approval are required.
