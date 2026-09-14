# Common Adapter Security and Teardown Tests

- Protocol ID: `BL-ADAPTER-COMMON-01`
- Version: `0.1-draft`
- Status: Draft for security/platform/privacy review; do not execute
- Authorization: Synthetic disposable research only; no production or participant traffic

## Exact Research Question

For one explicitly frozen adapter, platform, version, permission set, account/profile, and synthetic fixture matrix, does observed behavior match its declared `BL-CAP-01` capability and `BL-PLC-01` security/recovery/teardown contract without sensitive data collection, false protection, unrecoverable access loss, or orphaned control?

No result may generalize beyond the exact run matrix.

## Mandatory Environment Lock

Every platform protocol must include one immutable run manifest. A run is blocked while any field is blank, `latest`, inferred, or changed after review:

- run/protocol ID and approved commit;
- date/time, locale, local timezone, clock source;
- physical/virtual environment and isolation boundary;
- hardware vendor/model/CPU/architecture/RAM/storage/battery state where relevant;
- OS edition, exact version/build/kernel/security-patch level;
- browser/app/resolver/router name and exact version/build/firmware;
- adapter/fixture package version, manifest, signing identity, artifact hash, dependency lock/SBOM;
- store/distribution channel and policy/entitlement state;
- network topology, resolver/gateway, IPv4/IPv6, VPN/DoH/DoT/private-DNS state;
- account type, privilege, profile/container, sync/backup state;
- exact permissions requested/granted/denied/revoked;
- test domains/apps and expected certificate/DNS behavior;
- baseline resource use and evidence-capture configuration;
- cleanup owner, snapshot/restore point, emergency stop, and retention location.

Exact numeric versions are intentionally not invented in Phase 4. Each platform protocol is `Not executable - environment unfrozen` until a reviewer approves a populated manifest within the protocol's refresh window.

## Common Accounts and Permissions

Use synthetic test accounts only, with the least privilege needed for the exact case. Separate administrator/restoration roles from routine adapter users. Freeze account type, OS/browser/app profile, sync/backup state, requested/granted/denied/revoked permissions, credentials/tokens, and ownership before execution. A real personal, household, employer, school, fellowship, clinical, or production account is prohibited.

Permission denial or cancellation must leave baseline state unchanged. Undeclared privilege, silent account/profile expansion, hidden administrator use, or persistence outside the frozen contract is a Stop.

## Synthetic Fixture Boundary

- Use only reserved `.example` names mapped inside an isolated lab resolver to a local synthetic HTTP/HTTPS fixture: `allowed.example`, `blocked.example`, `sub.blocked.example`, `false-positive.example`, `recovery.example`, and `unknown.example`.
- `.example` is reserved for documentation/testing by RFC 2606: https://www.rfc-editor.org/rfc/rfc2606
- Use synthetic test apps/packages only: `BL-SYN-ALLOW`, `BL-SYN-BLOCK`, and platform-specific IDs stated in each protocol.
- No real explicit site, content, app, browsing history, contact, account, household network, participant, or production credential.
- The fixture contains neutral strings and generated files only. No copied brand/site content.
- External egress is denied by default. A reviewer must approve any store/update connectivity window, capture it separately, and ensure no test-policy traffic reaches real domains.

## Common Test Cases

| ID | Test | Expected behavior | Failure / stop |
| --- | --- | --- | --- |
| C01 | Preflight and baseline | Manifest matches environment; snapshots/kill path/evidence capture work; no active residual policy | Mismatch, unknown state, or unsafe rollback blocks run |
| C02 | Install and permissions | Exact declared package/signature and least permissions; denial/cancel leaves system unchanged | Undeclared/broader privilege, silent setup, or hidden persistence stops |
| C03 | Allowed target | `allowed.example`/allow app works with no unexpected interception or modification | False block, content mutation, or sensitive logging fails |
| C04 | Blocked target | Exact declared request/app is blocked/redirected only as specified; UI/health truth matches | Silent allow, overclaim, or misleading global status fails |
| C05 | Scope/subdomain/protocol | Exact host/subdomain/scheme/port/path/IP behavior is observed and reported separately | Scope expansion or undocumented gap fails contract |
| C06 | False positive matrix | `false-positive.example` and near-match labels remain allowed; recovery is immediate and visible | Legitimate target blocked without recovery stops |
| C07 | Bypass matrix | Direct IP, alternate protocol, cache, private mode, in-app browser, alternate browser, DoH/DoT/VPN/proxy where relevant are tested or `Not applicable` with reviewer rationale | Hidden bypass or impossible-to-bypass wording fails |
| C08 | Alternate context | Separate browser/profile/account/OS user/work profile/device/network tested independently | One-context result generalized or secret cross-context control fails |
| C09 | Legitimate recovery | User restores minimum necessary access without intimate reason, third-party veto, or policy deletion unless chosen | Inaccessible, unsafe, or misleading recovery is Critical |
| C10 | Offline | Disconnect/reconnect during active, pending, expiry, and teardown states; no stale hidden authority | Stale enforcement, false health, or blocked recovery stops |
| C11 | Clock/timezone | Forward/back clock, timezone/DST change, reboot, suspend/resume; exact authority and timestamps shown | Early/late/secret extension or ambiguous due state stops |
| C12 | Degraded/unknown | Revoke permission, stop dependency, corrupt/disable fixture, provider outage, version mismatch | System must show exact degraded/unknown state and safe behavior; false protected state stops |
| C13 | Disable/revoke/uninstall | Each operation's exact effect/residual is observed; uninstall is not called teardown | Hidden residual or false completion fails |
| C14 | Reinstall | Clean and residual reinstall paths do not infer consent or silently reactivate | Stale policy/permission/data activation stops |
| C15 | Reset | Browser/app/OS/network/router reset behavior is observed separately | Reset treated as teardown proof or hidden restore stops |
| C16 | Replacement | New browser/device/resolver/router starts untrusted/off; inventory is inspection only | Automatic authority transfer or false current status stops |
| C17 | Orphan detection | Every rule/profile/token/cert/VPN/DNS/router setting maps to inventory/receipt or is flagged unknown | High-privilege orphan is Critical |
| C18 | Full teardown | Quiesce -> revoke -> remove -> verify -> disclose external/partial residuals; baseline diff reviewed | Any unexplained high-privilege residual or false complete result stops |
| C19 | Privacy/logging | Capture contains only synthetic IDs/minimum diagnostics; no content/history/token/PII leakage | Sensitive/credential collection is Critical |
| C20 | Performance | Baseline vs active latency/CPU/memory/network/crash with method and uncertainty | Material regression beyond reviewer threshold or invalid method fails |
| C21 | Battery/energy | Relevant mobile/laptop protocols measure controlled baseline/active energy | Material unexplained drain or thermal issue fails; `Not applicable` needs rationale |
| C22 | Update/supply chain/shutdown | Signature/hash/version mismatch, revoked build, API/store/policy change, emergency disable/teardown guidance | Untrusted update, silent permission widening, or no shutdown path stops |
| C23 | Negative/unsupported | Unsupported combination remains visibly unsupported and inactive | Silent fallback or widened claim fails |

## Privacy and Evidence Capture

Capture only:

- immutable manifest and hashes;
- neutral screenshots/video of synthetic UI where needed;
- synthetic request IDs, timestamps, decision/result codes, redacted network traces;
- permission/state/inventory diffs;
- baseline/active performance observations;
- teardown residual scan and reviewer disposition.

Do not capture payload content beyond fixture IDs, real browsing/DNS history, public IP unless technically unavoidable and approved/redacted, device advertising IDs, personal account names, tokens/secrets, unrelated processes/traffic, household topology, or participant data.

Evidence access, encryption, retention, deletion, redaction, and publication require a reviewed plan before execution. Raw test captures do not enter GitHub.

## Result Vocabulary

- `Pass`: every applicable expected result observed in the exact matrix; no Critical/High residual; evidence complete.
- `Fail`: declared behavior, privacy, recovery, performance, or teardown requirement not met.
- `Blocked`: environment/permission/fixture/reviewer prerequisite absent; no behavior conclusion.
- `Not applicable`: reviewer-approved rationale tied to platform contract.
- `Inconclusive`: run/evidence invalid; cannot count as pass or fail.
- `Stop`: Critical safety, privacy, privilege, real-traffic, lockout, supply-chain, or teardown event; preserve minimum evidence and restore baseline.

An adapter protocol passes only if all mandatory/common and platform-specific cases pass. A passing synthetic result does not prove user benefit, clinical safety, store acceptance, universal coverage, or resistance to a motivated bypass.

## Teardown Evidence Checklist

- Stop adapter/process and new policy actions.
- Revoke permission/entitlement/token/certificate/profile/VPN/DNS/router authority.
- Remove package/rules/configuration and pending changes in documented order.
- Compare filesystem/preferences/browser policies/network routes/DNS/VPN/profiles/router settings to baseline within approved scope.
- Reboot/reconnect and repeat synthetic allow/block checks.
- Reinstall/rescan without consent and confirm no silent reactivation.
- Record every external/manual residual, owner, severity, deadline, retry, and verification.
- Restore snapshot/factory baseline only after residual evidence is captured; a restored snapshot is not itself teardown proof.

## Stop Authority

Any tester may stop. Restart requires security/platform owner approval and, for privacy/lockout/orphan/supply-chain events, the applicable independent reviewer. Schedule, sunk cost, founder preference, or prior passes cannot override a stop.
