# Safari Feasibility Protocol

- Protocol ID: `BL-ADAPTER-SAFARI-01`
- Version: `0.1-draft`
- Status: Not executable; feasibility scope, signing, exact versions, permissions, and review are unfrozen
- Common contract: `COMMON_ADAPTER_SECURITY_AND_TEARDOWN_TESTS.md`

## Exact Research Question

On one exact frozen macOS/Safari environment using only officially documented and authorized extension mechanisms, is a synthetic Better Life browser-adapter concept feasible for declared `.example` request behavior, profile/private-window disclosure, recovery, update, uninstall, and teardown without claiming iOS parity, universal Safari control, or hidden system authority?

Feasibility may conclude `Unsupported`, `Entitlement/store blocked`, or `Guidance only`. Those are valid results.

## Exact Environment to Freeze

| Environment ID | Required value | Current state |
| --- | --- | --- |
| `E-SAF-MAC-01` | Named physical Mac model/architecture; exact macOS version/build/patch; exact Safari version/build; standard local user; fresh Safari profile/state; iCloud sync off | `UNFROZEN - blocks execution` |
| Tooling/signing | Exact Xcode/build tools, Safari App Extension/WebExtension mechanism, container app version, signing identity/team/test distribution, entitlements, package hash/SBOM | `NOT SELECTED/IMPLEMENTED` |

iOS/iPadOS Safari, third-party iOS browsers, Family Controls, and Network Extension are outside this protocol unless a separate approved environment/protocol is added. macOS results do not transfer.

## Accounts and Permissions

- Standard macOS test account; separate OS account/profile where Safari supports the frozen configuration.
- Test-only Apple developer/signing account if required; no assumption of entitlement, notarization, App Store approval, or adult self-use acceptance.
- Freeze exact Safari extension permissions, website access scope, private-browsing setting, container-app permissions, and any system prompt.
- Unexpected system extension, Network Extension, content filter, certificate, proxy, DNS, admin, login item, launch agent/daemon, configuration profile, or hidden service is an immediate Stop outside separately approved scope.

## Synthetic Domains and Expected Behavior

Use the common isolated `.example` fixture. The feasibility contract must state exact supported request/content types before testing. Allowed/blocked/false-positive/recovery behavior is evaluated only within that declaration. Unsupported behavior is shown as unsupported, never emulated through undisclosed system changes.

## Required Coverage

| Topic | Required case / expected result |
| --- | --- |
| Expected behavior | C03-C05 for exact Safari mechanism; feasibility may fail honestly. |
| Bypass | C07 disable extension, private window, alternate Safari profile if available, alternate macOS account, Chrome/Firefox, embedded web view/in-app browser, direct IP, proxy/VPN/Private Relay if present, cache/service worker. |
| Alternate browser/profile/account | C08 each separately; no all-Safari/all-device claim. |
| False positive | C06 exact/near host, subdomain, path/scheme/port within declared API. |
| Legitimate recovery | C09 visible extension/website permission disable and minimum access restoration. |
| Offline | C10 cached/offline pages, Safari/container restart, reconnect. |
| Clock/timezone | C11 if any timer/expiry; otherwise verify no time authority. |
| Degraded/orphan | C12/C17 extension disabled, container removed, signing invalid, permission revoked, API/store state unknown; truthful status. |
| Uninstall/reinstall | C13-C14 extension/container app/preferences/website permissions/iCloud or system residue separately. |
| Reset/replacement | C15 Safari website data/preferences reset and C16 new Mac/new user; no silent restore/authority. |
| Teardown | C18 remove extension/container, permissions, app data and any reviewed artifacts; verify after reboot. |
| Privacy | C19 extension/container storage/network/log audit; no page content/history/query capture. |
| Performance/battery/energy | C20/C21 page latency, CPU/memory, battery where observable, and energy impact under synthetic load; an unavailable battery measure requires reviewer-approved `Not applicable`. |
| Update/supply chain | C22 signing/notarization/store/API/permission changes and emergency withdrawal guidance. |

## Pass, Fail, and Stop

`Feasible-pass` requires declared synthetic behavior, truthful limits, recovery, privacy, performance, and teardown to pass on the exact macOS/Safari row. `Feasible-with-limit` requires a reviewer-approved narrowed capability with every limit visible. `Unsupported/blocked` is the correct outcome where official mechanisms, signing, entitlement, store policy, or safety do not support the concept.

Stop on hidden/system-level persistence, unexpected privileged component, real history/content capture, unapproved Apple account/data use, signing mismatch, lockout, or unexplained residual.

## Evidence Capture

Capture exact Mac/macOS/Safari/Xcode/signing/entitlement/package state; website access prompts; synthetic result IDs; extension/container storage/network behavior; private/profile/account observations; performance/energy method; uninstall/reset/reinstall diffs; and teardown. Do not capture Apple account identity, real browsing history, page content, or production signing secrets.

## Current Decision

`Protocol prepared; execution blocked.` Platform/security review must first decide the official mechanism and whether an executable feasibility run is justified.
