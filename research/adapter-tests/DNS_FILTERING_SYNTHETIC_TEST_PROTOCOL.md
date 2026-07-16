# DNS Filtering Synthetic Test Protocol

- Protocol ID: `BL-ADAPTER-DNS-01`
- Version: `0.1-draft`
- Status: Not executable; resolver implementation, exact versions, topology, permissions, and review are unfrozen
- Common contract: `COMMON_ADAPTER_SECURITY_AND_TEARDOWN_TESTS.md`

## Exact Research Question

In one isolated lab network with an exact frozen resolver/filter build and client matrix, can a synthetic DNS policy block only declared `.example` names, disclose application-layer/DoH/VPN/cache limits, permit legitimate recovery, protect query privacy, and fully restore client/network DNS state without orphaned configuration?

This does not establish URL/path/content filtering, app control, household safety, or universal browser coverage.

## Exact Environment to Freeze

| Environment ID | Required value | Current state |
| --- | --- | --- |
| `E-DNS-LAB-01` | Isolated VLAN/virtual network; named gateway/switch; exact local authoritative fixture DNS and filtering resolver product/version/build/config hash/OS image; no route to production DNS except approved update window | `UNFROZEN - blocks execution` |
| Client rows | Exact Windows/macOS/Android client device/OS/browser versions for each approved row; fresh test profiles/accounts | `UNFROZEN` |
| Policy | Exact zone/rules/list/version/hash, TTLs, response type (NXDOMAIN/refused/sinkhole), logging schema/retention | `NOT SELECTED` |

## Accounts and Permissions

- Test resolver administrator account with least privilege and separate read-only observer if supported.
- Standard client accounts; no household/organization account or real provider.
- Freeze DHCP/manual DNS, IPv4/IPv6, system resolver, browser secure-DNS/DoH, Android Private DNS, VPN/proxy, DNSSEC, cache, and fallback states.
- No certificate/TLS interception, endpoint agent, router control, or hidden settings outside the frozen scope.

## Synthetic Domains and Expected Behavior

- Authoritative local `.example` zone provides neutral A/AAAA/CNAME/TXT and controlled TTLs.
- `blocked.example`/`sub.blocked.example` return the exact configured block response.
- `allowed.example`, `false-positive.example`, and `recovery.example` resolve normally.
- Exact-name, subdomain, CNAME chain, case/trailing dot, IPv4/IPv6, cached answer, and fail-open/fail-closed behavior are separately declared.
- No real domain list or query history.

## Required Coverage

| Topic | Required case / expected result |
| --- | --- |
| Expected behavior | C03-C05 per client/resolver/protocol; DNS result only, no URL/content claim. |
| Bypass | C07 manual alternate resolver, browser DoH, OS DoT/Private DNS, VPN/proxy, direct IP, cached answer, hosts file if safe, IPv6/fallback, application-embedded resolver. |
| Alternate browser/profile/account | C08 multiple browsers/profiles/OS users/clients; DNS effect and app-layer bypass separately. |
| False positive | C06 near name/subdomain/CNAME/allow override and legitimate internal name. |
| Legitimate recovery | C09 temporary exact allow/restore baseline resolver; no global policy deletion or intimate justification. |
| Offline | C10 resolver outage, authoritative outage, network partition, reconnect, cache expiry; fail behavior visible. |
| Clock/timezone | C11 policy schedules if any and certificate/log timestamps; otherwise no hidden time rule. |
| Degraded/orphan | C12/C17 resolver unavailable, stale list/config mismatch, DHCP/manual divergence, client fallback, orphaned DNS address/search domain. |
| Uninstall/reinstall | C13-C14 resolver service/container/package plus client configuration; reinstall must not restore consent/policy silently. |
| Reset/replacement | C15 network/DNS/client reset and C16 replacement resolver/client; baseline/off until confirmed. |
| Teardown | C18 disable policy, restore DHCP/manual DNS/search domains/caches, remove service/config/tokens, reboot/reconnect, baseline queries. |
| Privacy | C19 query logs off/minimized; inspect resolver/upstream traffic, identifiers, retention, admin access; synthetic names only. |
| Performance | C20 query latency, cache hit/miss, timeout/failure, CPU/memory/network under synthetic load. |
| Battery | C21 client battery only if mobile local agent/resolver is involved; otherwise reviewed not applicable. |
| Update/supply chain | C22 list/config/package/signature/update failure, malicious/widened list, emergency disable/rollback. |

## Pass, Fail, and Stop

Pass only per exact resolver/client matrix with correct synthetic responses, explicit bypass/degraded truth, recovery, privacy, performance, and teardown. Fail on false DNS response, hidden fallback, broad claim, excessive logging, stale config, or residual. Stop on real DNS/traffic capture, production/household network impact, unapproved upstream, admin/credential leak, client lockout, malicious list/package, or high-privilege orphan.

## Evidence Capture

Capture exact topology and versions, configuration/rule hashes, client resolver/DoH/VPN state, synthetic query/result IDs, redacted packet/query metadata, cache/timing/resource observations, account/permission state, reset/reinstall/teardown diffs. Exclude real queries, public client identifiers, credentials, and unrelated traffic.

## Current Decision

`Protocol prepared; execution blocked` pending resolver selection, exact topology/client manifests, privacy/security/platform review, and teardown approval.
