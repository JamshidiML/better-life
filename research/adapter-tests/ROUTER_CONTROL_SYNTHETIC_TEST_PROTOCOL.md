# Router Control Synthetic Test Protocol

- Protocol ID: `BL-ADAPTER-ROUTER-01`
- Version: `0.1-draft`
- Status: Not executable; router/firmware/topology/control method, permissions, and review are unfrozen
- Common contract: `COMMON_ADAPTER_SECURITY_AND_TEARDOWN_TESTS.md`

## Exact Research Question

On one disposable isolated lab router with exact frozen model/firmware/configuration and synthetic clients, can a transparent user-approved control apply only declared `.example` DNS/network rules, show device/network/bypass limits, preserve legitimate access, and restore the router and every client without household impact or orphaned configuration?

Guidance-only setup, direct official API configuration, and unsupported control are separate possible outcomes. No silent router change is allowed.

## Exact Environment to Freeze

| Environment ID | Required value | Current state |
| --- | --- | --- |
| `E-ROUTER-LAB-01` | Named physical router vendor/model/hardware revision; exact official firmware/build; isolated WAN simulator and dedicated SSID/VLAN; baseline config export/hash; no household/production uplink | `UNFROZEN - blocks execution` |
| Client rows | Named synthetic laptop/mobile devices with exact OS/browser/MAC-randomization state | `UNFROZEN` |
| Control method | Exact official UI/API/guidance workflow, account/role, rule schema, DNS/firewall capability, automation artifact hash if any | `NOT SELECTED` |

Open-source/custom firmware is a separate protocol row and cannot be generalized to vendor firmware.

## Accounts and Permissions

- Dedicated test-router administrator account and read-only role if available; unique synthetic credentials stored outside evidence.
- Standard client users; test SSID only.
- Freeze remote administration, cloud/vendor account, automatic update, UPnP, guest network, VLAN, DHCP/DNS, firewall, IPv4/IPv6, DoH/DoT/VPN, MAC randomization, and backup/restore state.
- No hidden script/service, credential retention, undocumented API, production account, ISP router, or management of another person's network.

## Synthetic Domains/Clients and Expected Behavior

- Common local `.example` server/resolver behind the lab topology.
- Declared router rule blocks only `blocked.example` path available to the router capability (often DNS/IP, never URL/content unless officially supported and tested).
- Allowed/false-positive/recovery names and essential lab-management endpoint remain reachable.
- Each client/VLAN/SSID/device group and unclassified/new MAC is tested separately.

## Required Coverage

| Topic | Required case / expected result |
| --- | --- |
| Expected behavior | C03-C05 exact DNS/firewall/device-group scope; no content/app claim beyond observed capability. |
| Bypass | C07 guest SSID/VLAN, Ethernet, mobile hotspot/data, alternate router/network, VPN/proxy, DoH/DoT/Private DNS, direct IP, IPv6, MAC randomization/spoof, new device, cached answer. |
| Alternate browser/profile/account | C08 browsers/profiles generally share network path but app-layer bypass is tested; second client/OS user/router admin role separately. |
| False positive | C06 allowed/near domain, unrelated device/VLAN, management endpoint, recovery endpoint. |
| Legitimate recovery | C09 local physical/admin recovery restores exact client/endpoint without deleting unrelated policy; no third-party veto. |
| Offline | C10 WAN/resolver/vendor-cloud outage, router reboot, client roam/reconnect, config persistence; local management remains safely accessible. |
| Clock/timezone | C11 scheduled rules/NTP/timezone/DST/reboot; no secret extension/early expiry. |
| Degraded/orphan | C12/C17 API/cloud unavailable, partial rule write, firmware mismatch, client classification drift, stale MAC, unreachable router, orphan DNS/firewall rule. |
| Uninstall/reinstall | C13-C14 remove any companion/guidance tool/account token; router settings remain explicitly inventoried until teardown; reinstall does not assume ownership. |
| Reset/replacement | C15 official router factory reset only on disposable lab device after residual evidence; C16 replacement router starts baseline/off and clients re-enroll explicitly. |
| Teardown | C18 export inventory, quiesce, remove rules/tokens/cloud links, restore DNS/DHCP/firewall/SSID/VLAN/admin state, reboot, client renew, baseline diff. |
| Privacy | C19 no household/production traffic; inspect router/cloud logs, device IDs, DNS, telemetry, admin access; synthetic clients/names only. |
| Performance | C20 latency/throughput/loss/reboot/reconnect/CPU/memory if exposed under synthetic load. |
| Battery | C21 client battery only if a companion agent materially affects it; otherwise reviewed not applicable. |
| Update/supply chain | C22 firmware/auto-update/vendor-cloud/API/account changes, config migration, compromised package, emergency disable and manual teardown. |

## Pass, Fail, and Stop

Pass only for the exact router/firmware/topology/control row with truthful limits, no management lockout, correct false-positive behavior, privacy/performance, recovery, and complete teardown. Fail on scope mismatch, client/VLAN overreach, false protection, stale/orphan rule, cloud/account ambiguity, or residual. Stop on household/production traffic, WAN escape, admin credential/token disclosure, management lockout, hidden/undocumented component, firmware integrity issue, unsafe reset, or high-privilege orphan.

## Evidence Capture

Capture exact hardware/firmware/topology/control versions, baseline/final config hashes and human-readable diffs, rule/device/VLAN state using synthetic aliases, synthetic request/query IDs, neutral screenshots, cloud/telemetry destinations, performance method, reboot/reset/replacement observations, and teardown. Never commit credentials, serial/MAC/public IP, household topology, real traffic, or raw captures.

## Current Decision

`Protocol prepared; execution blocked` pending router/control selection, exact manifests, isolation proof, security/privacy/platform review, and teardown authorization.
