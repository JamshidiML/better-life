# Adapter Run Manifest Template

- Template ID: `BL-ADAPTER-RUN-01`
- Version: `0.1.1-draft`
- Date: 2026-07-19
- Status: Template only; no run authorized or performed
- Classification: `Repository decision` - all mandatory run-manifest and run-gate rules; execution remains separately authorization-gated

## Run Gate

A run is `Blocked` if any mandatory field is blank, inferred, recorded as `latest`, internally inconsistent, changed after approval, or unsupported by its evidence reference. `Not applicable` is valid only where the controlling protocol permits it and the manifest records the rationale and reviewer approval. This template never authorizes execution; a populated manifest also requires separate written test authorization.

## Identity and Authorization

| Mandatory field | Exact value | Evidence / immutable locator | Validation |
| --- | --- | --- | --- |
| Protocol ID and version | `[required]` | `[required]` | `Unverified` |
| Approved commit (full SHA) | `[required]` | `[required]` | `Unverified` |
| Run ID | `[required; unique]` | `[required]` | `Unverified` |
| Reviewer approval | `[response ID, scope, decision, conditions, expiry]` | `[restricted/immutable locator]` | `Unverified` |
| Date/time | `[ISO 8601]` | `[trusted clock source/method]` | `Unverified` |
| Timezone | `[IANA zone and UTC offset]` | `[required]` | `Unverified` |
| Manifest approval | `[authorized approver, confirmation, timestamp, expiry]` | `[restricted/immutable locator]` | `Unverified` |
| Deviation status | `None / Open / Approved / Blocks run` | `[deviation record ID or None]` | `Unverified` |

## Frozen Environment

| Mandatory field | Exact value | Evidence / hash | Validation |
| --- | --- | --- | --- |
| Hardware | `[manufacturer, model, architecture, lab asset ID; redact serial]` | `[inventory/snapshot reference]` | `Unverified` |
| OS | `[name, edition/channel]` | `[system evidence]` | `Unverified` |
| Browser/application | `[exact product/package/application ID]` | `[system/store evidence]` | `Unverified` |
| Exact build/version | `[numeric version and build]` | `[system evidence]` | `Unverified` |
| Patch level | `[exact patch/security level]` | `[system evidence]` | `Unverified` |
| Firmware | `[all relevant component versions]` | `[system evidence]` | `Unverified` |
| Adapter build/hash/signature | `[artifact ID, version, build, SHA-256, signer/signature state]` | `[artifact registry]` | `Unverified` |
| Dependency lock | `[lockfile commit and SHA-256]` | `[immutable locator]` | `Unverified` |
| SBOM | `[format, generator/version, artifact ID, SHA-256]` | `[restricted evidence locator]` | `Unverified` |
| Fixture version/hash | `[BL-ADAPTER-FIXTURE version, image/config/content hashes]` | `[artifact registry]` | `Unverified` |

## Accounts, Profiles, and Authority

| Mandatory field | Exact value | Evidence / redaction | Validation |
| --- | --- | --- | --- |
| Account type | `[local/store/developer/managed/test; synthetic only]` | `[coded account evidence]` | `Unverified` |
| Profiles | `[browser, OS, work, private, container, managed profiles in scope]` | `[profile-state evidence]` | `Unverified` |
| Privileges | `[standard/admin/root/device-owner/restoration roles]` | `[privilege evidence]` | `Unverified` |
| Permissions | `[requested, granted, denied, revoked; exact scope]` | `[permission-state evidence]` | `Unverified` |
| Entitlement/store state | `[requested/possessed/not possessed; signing; channel; review status; region]` | `[official account/store evidence]` | `Unverified` |

Do not record credentials, tokens, personal Apple/Google/Microsoft identities, production signing secrets, or personal account identifiers in this manifest.

## Network and Fixture

| Mandatory field | Exact value | Evidence / hash | Validation |
| --- | --- | --- | --- |
| Network topology | `[isolated diagram/version; devices, segments, gateways, controlled egress]` | `[restricted topology reference]` | `Unverified` |
| IPv4/IPv6 | `[enabled/disabled, fixture addresses, routing, NAT]` | `[configuration evidence]` | `Unverified` |
| DNS | `[authoritative/resolver products, builds, zones, config hashes, cache state]` | `[configuration evidence]` | `Unverified` |
| VPN | `[none or exact product/build/profile/routes/state]` | `[configuration evidence]` | `Unverified` |
| DoH/DoT | `[enabled/disabled/provider/policy/fallback state]` | `[configuration evidence]` | `Unverified` |
| Certificates | `[lab CA and leaf IDs/hashes, trust scope, expiry, revocation plan]` | `[certificate inventory]` | `Unverified` |
| Synthetic domains/apps | `[exact domain, application/package and expected-policy set]` | `[fixture manifest]` | `Unverified` |

## Evidence, Retention, and Recovery

| Mandatory field | Exact value | Evidence / approval | Validation |
| --- | --- | --- | --- |
| Evidence system | `[approved system/product/tenant/project and access roles]` | `[system approval]` | `Unverified` |
| Retention location | `[jurisdiction, storage class, encryption and exact path/project ID]` | `[retention approval]` | `Unverified` |
| Redaction rules | `[identifiers, traffic, payload, account, device, topology and secret rules]` | `[approved redaction procedure]` | `Unverified` |
| Baseline snapshot | `[snapshot/image/config IDs and hashes; restore verified]` | `[snapshot registry]` | `Unverified` |
| Teardown owner | `[authorized named/coded role and backup]` | `[authorization locator]` | `Unverified` |
| Emergency stop | `[named/coded authority, contact route, kill/isolation steps]` | `[approved run card]` | `Unverified` |

Raw captures remain outside GitHub. The repository may contain only approved redacted summaries, evidence IDs, hashes, and dispositions.

## Pre-Run Validation

| Check | Result | Reviewer / timestamp | Evidence |
| --- | --- | --- | --- |
| All mandatory fields complete and mutually consistent | `Blocked` | `[required]` | `[required]` |
| Values observed directly; none inferred or `latest` | `Blocked` | `[required]` | `[required]` |
| Artifact, fixture, dependency, SBOM and snapshot integrity verified | `Blocked` | `[required]` | `[required]` |
| Reviewer and manifest approvals current; conditions satisfied | `Blocked` | `[required]` | `[required]` |
| Isolation, emergency stop and restore/teardown route verified | `Blocked` | `[required]` | `[required]` |
| Final manifest disposition | `Blocked / Authorized for exact run` | `[authorized owner]` | `[separate written authorization]` |

The default and current Phase 4.1 disposition is `Blocked`.
