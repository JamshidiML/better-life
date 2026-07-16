# Security and Platform Review Pack

- Pack ID: `P4-RP-SECPLAT-01`
- Status: Prepared; no reviewer/vendor/store contacted; no adapter test or approval claimed

## Purpose

Review the synthetic adapter protocols, environment-freeze method, threat boundaries, teardown evidence, and platform claim discipline before any test execution.

## Product Boundary

The protocols describe disposable synthetic research only. They use reserved domains, test accounts/profiles, isolated devices/networks, and no real explicit content, browsing history, household controls, participant data, or production component. Execution remains prohibited.

## Documents to Read

1. `docs/integration/CANONICAL_ARTIFACT_INDEX.md`, `BL-CAP-01` and `BL-PLC-01`
2. `docs/integration/DUPLICATION_AND_CONFLICT_MATRIX.md`, D01, D04, D09, D17-D18
3. All files in `research/adapter-tests/`
4. Source locator `a5a991e:architecture/CYCLE_3_ADAPTER_RESEARCH_READINESS.md`
5. Source locator `a5a991e:architecture/CYCLE_3_PLATFORM_SOURCE_REGISTER.csv`
6. Source locator `6740c0b:architecture/CYCLE_3_CANONICAL_PROTECTION_LAYER_AND_LEARNING_GOVERNANCE.md`

## Decisions Requested

- Approve/revise/block each protocol for safe execution preparation.
- Approve the exact-version run-manifest freeze and evidence-capture method.
- Identify missing bypass, privilege, store/entitlement, update/supply-chain, performance, privacy, recovery, and teardown cases.
- Decide lab isolation, fixture, account, network, cleanup, retention, and emergency shutdown requirements.
- Define which results can and cannot generalize beyond a tested matrix row.

## Claims Requiring Review

| Claim | Classification | Review need |
| --- | --- | --- |
| Official documentation supports preparing bounded platform tests. | Evidence-supported/platform-specific | Source/version completeness |
| Reserved domains and synthetic apps can test declared behavior safely. | Hypothesis | Coverage and leakage risk |
| Exact versions should be frozen near execution. | Proposed control | Reproducibility and supply-chain risk |
| Uninstall is distinct from teardown and residual verification. | Architecture boundary | Platform-specific test adequacy |
| No adapter result transfers automatically to another browser/profile/account/device. | Platform limitation | Matrix granularity |

## Known Risks

- Real traffic/DNS leakage, lockout, VPN conflict, router/household impact, or orphaned configuration.
- Privilege/permission widening, malicious update/dependency, signing/store-policy change.
- False block/allow, alternate profile/account/browser bypass, clock/timezone or offline stale state.
- Evidence capture includes tokens, IPs, device identifiers, or browsing data.
- Performance/battery observations are generalized from unsuitable hardware.
- Teardown appears complete while external/provider state persists.

## Specific Questions

1. Is the common test suite complete enough for each platform family?
2. What exact lab segmentation, snapshots, backup, restore, and kill controls are mandatory?
3. How should versions, installers, hashes, policies, entitlements, and account state be frozen and preserved?
4. Are reserved domains sufficient; when is a local authoritative test zone needed?
5. Which browser/profile/account/device/network bypasses are missing?
6. What evidence proves teardown without collecting sensitive data?
7. What battery, latency, DNS, privacy, and crash measurements are relevant per adapter?
8. Should any protocol be blocked until store/vendor/entitlement clarification?

## Prohibited Assumptions

- Documentation proves runtime behavior.
- Chromium behavior proves Edge, Firefox, Safari, in-app browser, or mobile behavior.
- One profile/account/device proves broader coverage.
- Uninstall, reset, reinstall, replacement, and teardown are equivalent.
- Synthetic success proves participant benefit, safety, or impossible bypass.

## Expected Reviewer Output

Return per-protocol disposition; required environment; missing threat/test cases; privilege/data/evidence constraints; pass/fail/stop amendments; generalization ceiling; teardown proof requirements; residual risks; reviewer scope; and expiry. Do not execute tests as part of review.

## Conflict-of-Interest Declaration

Disclose browser/OS/store/vendor employment or contracts, security-tool interests, vulnerability work, relationship to Better Life/founder, and any restriction on independent publication or platform judgment.

## Expiry and Refresh

Refresh after any browser/OS/API/store/policy/entitlement/protocol/fixture change and immediately before an authorized run. Proposed review maximum: 30 days for platform-specific execution readiness.
