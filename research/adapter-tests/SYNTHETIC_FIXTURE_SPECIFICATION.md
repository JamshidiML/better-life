# Synthetic Fixture Specification

- Specification ID: `BL-ADAPTER-FIXTURE-01`
- Version: `0.1-draft`
- Date: 2026-07-19
- Status: Architecture only; fixture not implemented, approved, or executed
- Classification: `Hypothesis` - this fixture may support bounded adapter-mechanics tests after review and authorization

## Safety Boundary

The fixture is a disposable, isolated lab system. It must contain no real explicit or intimate content, brand/site copies, personal or production accounts, real browsing history, participant data, household network, production credentials, or production signing material. Generated content is neutral and uses only synthetic identifiers. Any prohibited data or uncontrolled egress is a `Stop` event.

## Reserved Names and Addresses

Use an isolated authoritative test zone under `.example`, which IETF/IANA documentation reserves for examples. Proposed deterministic records:

| Fixture ID | Name / address | Intended observation |
| --- | --- | --- |
| F-DOM-ALLOW | `allowed.example` | Declared allow path |
| F-DOM-BLOCK | `blocked.example` | Declared block path |
| F-DOM-SUB | `sub.blocked.example` | Subdomain-scope behavior |
| F-DOM-REDIRECT | `redirect.example` -> `target.example` | Same-scheme and cross-scheme redirect cases |
| F-DOM-FP | `false-positive.example`, `blocked-example.example`, `notblocked.example` | Near-match false-positive cases |
| F-DOM-UNKNOWN | `unknown.example` | Unlisted/default behavior and truthful unknown state |
| F-DOM-RECOVERY | `recovery.example` | Legitimate recovery/allow path that must remain reachable as declared |
| F-DOM-WS | `websocket.example` | Local WebSocket case where protocol claims relevance |
| F-DOM-QUIC | `quic.example` | Local HTTP/3/QUIC case where supported and relevant |
| F-IP-V4 | `192.0.2.10` | Direct IPv4 fixture without hostname |
| F-IP-V6 | `2001:db8::10` | Direct IPv6 fixture without hostname |

Source locators: [RFC 2606](https://www.rfc-editor.org/rfc/rfc2606), [RFC 5737](https://www.rfc-editor.org/rfc/rfc5737), and [RFC 3849](https://www.rfc-editor.org/rfc/rfc3849). Address and name selection remains subject to security/platform review and exact isolated routing.

## DNS and Network Isolation

- `Hypothesis`: a local authoritative DNS service and separate validating/caching resolver can deterministically exercise exact, subdomain, negative, cache, timeout, IPv4, and IPv6 cases.
- The lab topology must deny external egress by default at a separately controlled boundary, deny forwarding to production/household resolvers, and use only disposable synthetic clients.
- DNS configuration, zone, resolver build, cache state, DoH/DoT behavior, routes, firewall policy and topology receive versioned artifacts and hashes.
- Test one declared IPv4-only, IPv6-only, and dual-stack row separately. Do not infer parity.
- Direct-IP fixtures remain local and isolated; no public address is contacted.

## Local HTTP/HTTPS Fixtures

- Serve generated neutral pages, subresources, downloads, redirects, WebSocket messages and optional HTTP/3/QUIC responses from local fixture hosts only.
- Each response includes deterministic fixture ID, request-case ID, version and nonsecret nonce; no behavioral, intimate, clinical, brand, or user-like content.
- HTTP and HTTPS are separate cases. Redirect chains include allowed-to-blocked, blocked-to-allowed, loop, maximum approved depth, scheme and subdomain changes.
- Paths, queries, ports, navigation, subresource, fetch, service-worker/cache and app/API traffic are included only where the platform protocol declares them relevant.
- Offline cases remove fixture network/DNS availability under controlled conditions and verify truthful degraded behavior plus legitimate local/device recovery.

## Certificate and Trust Model

Use a dedicated, offline-rooted lab CA or another reviewer-approved synthetic trust method. Record CA/leaf subject aliases, serial aliases, validity, key algorithm, SHA-256 fingerprints, issuance inventory and revocation/teardown. Trust is installed only on disposable named clients/profiles, never a personal/household/production device. Baseline and final trust inventories must prove removal. Private keys remain in the approved secret system outside GitHub and evidence captures.

Include valid, expired, not-yet-valid, hostname-mismatch, untrusted and revoked/removed-trust cases only if the platform protocol and safety review approve them. Never instruct users or test operators to bypass a real certificate warning.

## Synthetic Applications

| Fixture ID | Proposed package identity | Expected role |
| --- | --- | --- |
| F-APP-ALLOW | `org.betterlife.synthetic.allowed` / platform equivalent | Generates declared allowed local requests |
| F-APP-BLOCK | `org.betterlife.synthetic.blocked` / platform equivalent | Generates declared blocked local requests |
| F-APP-ALT | `org.betterlife.synthetic.alternate` / platform equivalent | Tests alternate browser/app scope without real apps |
| F-APP-OFFLINE | `org.betterlife.synthetic.offline` / platform equivalent | Exercises offline/reconnect and stale-state behavior |

Apps must be minimal, reproducibly built, signed only with lab identities, SBOM-recorded, hash-pinned and incapable of collecting unrelated traffic or data. They are not production Better Life components.

## Expected Behavior Contract

Each adapter protocol must declare before execution:

- exact allow/block/redirect/default behavior by domain, subdomain, path, scheme, port, request type, app and IP family;
- supported and unsupported HTTP, HTTPS, WebSocket, QUIC, direct-IP and alternate-app behavior;
- false-positive expectation for every near-match fixture;
- behavior when DNS, fixture, adapter, permission, entitlement, account, certificate, network or device state is unavailable;
- legitimate access, disable, revoke, recovery and emergency-stop routes;
- evidence and teardown expectation.

Unexpected broad blocking, false protected state, inaccessible legitimate recovery, real-traffic contact, sensitive logging, or fixture escape is `Stop`.

## Deterministic Logging and Evidence

Fixture logs contain only run ID, test-case ID, synthetic client/app ID, fixture request ID, coarse protocol metadata required by the case, decision/result, exact timestamp and component version. Payload, full URL query, credentials, device/account identifiers, public IP, unrelated process/traffic, and real DNS/browser history are prohibited. Clock source, timezone and synchronization method are frozen in the run manifest.

Every source image, configuration, zone, generated-content set, application, certificate inventory and log schema receives a semantic version, immutable artifact ID, build method, dependency lock/SBOM where relevant, and SHA-256 hash. Raw captures remain in the approved evidence system outside GitHub.

## Controlled Connectivity Exception

External egress is prohibited except a separately approved, time-bounded store/update/signing connectivity window required for the exact platform row. The exception must specify destination allowlist, purpose, owner, start/end, account, expected artifacts, monitoring/redaction, rollback and evidence. Adapter behavior tests do not run during the window. Close egress, clear/record resulting state, refresh hashes/snapshots, and reapprove the run manifest before testing.

## Teardown

1. Stop fixture services and isolate clients.
2. Remove adapter/app packages, profiles, permissions, policies, routes, DNS/DoH/DoT/VPN state and lab trust.
3. Revoke/delete lab certificates, signing artifacts and synthetic credentials according to the approved secret procedure.
4. Restore approved baseline snapshots or rebuild disposable assets from verified images.
5. Compare baseline/final process, service, network, trust, profile, account, storage, cache and configuration inventories.
6. Destroy or retain evidence under the approved schedule; never place raw captures in GitHub.
7. Record every residual through `ADAPTER_RESULT_AND_EVIDENCE_TEMPLATE.md`; unexplained residual means `Fail` or `Stop`, never pass.

## Fixture Compromise Response

On hash mismatch, unauthorized change/egress, malware/suspicious process, secret exposure, real data/traffic, certificate misuse, logging overcollection or isolation failure: trigger emergency stop; disconnect affected assets; preserve minimum approved evidence; notify security/privacy/incident owners; revoke trust/credentials; invalidate affected runs/results; restore from independently verified media; and require root-cause, scope, residual-risk and restart authorization. No test continues while compromise status is unknown.

## Current Decision

`Open question`: exact fixture implementation, products, versions, lab hardware, evidence system, owner, approvers and hashes do not exist. Execution is `Blocked`.
