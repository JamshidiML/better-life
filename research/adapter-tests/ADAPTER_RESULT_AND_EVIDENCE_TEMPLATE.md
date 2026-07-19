# Adapter Result and Evidence Template

- Template ID: `BL-ADAPTER-EVIDENCE-01`
- Version: `0.1-draft`
- Date: 2026-07-19
- Status: Template only; no adapter result exists
- Classification: `Verified` repository requirement - raw captures remain outside GitHub

## Test-Case Result

Create one record per test case and environment. Never reuse a result across platform, build, profile, account, permission, network, or fixture rows.

| Required field | Recorded value |
| --- | --- |
| Result record ID | `[unique ID]` |
| Run manifest ID | `[approved manifest ID/version/hash]` |
| Test-case ID | `[common/platform protocol case ID and version]` |
| Expected behavior | `[exact predeclared outcome and scope]` |
| Observed behavior | `[direct observation; no inference]` |
| Exact timestamp | `[ISO 8601 including timezone/offset]` |
| Evidence reference | `[approved evidence-system ID; no raw capture in GitHub]` |
| Evidence type | `[log/screenshot/video/trace/config/snapshot/measurement/other]` |
| Evidence integrity/hash | `[SHA-256 or approved integrity mechanism]` |
| Privacy/redaction status | `Pending / Approved / Rejected / Not publishable` plus reviewer/date |
| Result | `Pass / Fail / Blocked / Inconclusive / Not applicable / Stop` |
| Defect severity | `Critical / High / Medium / Low / None` |
| Recovery action | `[action taken and evidence]` |
| Residual state | `[exact remaining configuration/data/control/process/network state]` |
| Reviewer | `[qualified named/coded reviewer, scope and confirmation]` |
| Retest requirement | `Required / Not required / Blocked` plus trigger |
| Disposition | `[accept exact result / amend / defect / invalidate run / stop family / other]` |

`Pass` means only that the exact expected synthetic behavior was observed in the frozen environment. It does not establish user benefit, universal coverage, bypass resistance, store acceptance, entitlement availability, safety with participants, production readiness, or cross-platform parity.

## Deviation Record

| Field | Required value |
| --- | --- |
| Deviation ID | `[unique ID]` |
| Discovery timestamp | `[required]` |
| Manifest/protocol field affected | `[exact locator]` |
| Planned or unplanned | `[required]` |
| Description and cause | `[minimum necessary]` |
| Data/evidence/results affected | `[required]` |
| Safety/privacy/integrity impact | `[required]` |
| Immediate action | `[pause/stop/isolate/continue blocked]` |
| Authorized disposition | `[reject data/repeat/amend/other]` |
| Decision owner/reviewer | `[required]` |
| Closure evidence and timestamp | `[required]` |

Any unapproved material deviation makes affected results `Blocked` or `Inconclusive`; it is never corrected silently.

## Incident Record

| Field | Required value |
| --- | --- |
| Incident ID and timestamp | `[required]` |
| Domain | `Safety / Privacy / Security / Access / Recovery / Fixture / Evidence / Other` |
| Severity and stop authority | `[required]` |
| Minimum observed facts | `[no sensitive payload or unnecessary identity]` |
| Containment / emergency stop | `[required]` |
| Exposure and residual state | `[required]` |
| Notification/escalation IDs | `[required]` |
| Evidence reference/hash | `[outside GitHub]` |
| Restart/retest status | `Blocked` unless separately authorized |

## Performance Result

| Field | Required value |
| --- | --- |
| Metric and unit | `[latency/throughput/loss/CPU/memory/crash/other]` |
| Method/tool/version/config | `[required]` |
| Baseline and adapter condition | `[exact matching environment]` |
| Repetitions/duration/load | `[required]` |
| Observed distribution | `[raw evidence reference plus redacted summary]` |
| Confounders/deviation | `[required or None]` |
| Result and interpretation limit | `[Pass/Fail/Blocked/Inconclusive/NA; exact environment only]` |

## Battery and Resource Result

Complete where relevant; `Not applicable` requires protocol authority and reviewer rationale.

| Field | Required value |
| --- | --- |
| Device power state / battery health / thermal state | `[required]` |
| Measurement API/tool/version | `[required]` |
| Baseline, workload, duration and repetitions | `[required]` |
| Battery/energy/CPU/memory/network observation | `[required]` |
| Background/foreground/charging controls | `[required]` |
| Result, uncertainty and evidence reference | `[required]` |

## Teardown Residual Inventory

| Surface | Baseline | Final observed state | Diff / residual | Recovery action | Evidence reference/hash | Disposition |
| --- | --- | --- | --- | --- | --- | --- |
| Adapter app/extension/process/service | `[required]` | `[required]` | `[required]` | `[required]` | `[required]` | `[required]` |
| OS/browser/network policy and permissions | `[required]` | `[required]` | `[required]` | `[required]` | `[required]` | `[required]` |
| VPN/DNS/routes/certificates/profiles | `[required]` | `[required]` | `[required]` | `[required]` | `[required]` | `[required]` |
| Accounts/tokens/store/signing state | `[required]` | `[required]` | `[required]` | `[required]` | `[required]` | `[required]` |
| Files/storage/logs/caches/backups | `[required]` | `[required]` | `[required]` | `[required]` | `[required]` | `[required]` |
| Fixture/network/snapshot state | `[required]` | `[required]` | `[required]` | `[required]` | `[required]` | `[required]` |

Any unexplained control, trust, route, permission, process, account, credential, data, cache, profile, or policy residual prevents a final `Pass`.

## Final Per-Environment Disposition

| Field | Required value |
| --- | --- |
| Environment ID and manifest hash | `[required]` |
| Mandatory cases completed | `[exact IDs and counts; no percentage substitution]` |
| Pass / Fail / Blocked / Inconclusive / NA / Stop inventory | `[required]` |
| Open defects/deviations/incidents | `[required]` |
| Teardown verified | `Yes / No / Inconclusive` plus evidence |
| Residual risk and unsupported scope | `[required]` |
| Final disposition | `Pass exact environment / Fail / Blocked / Inconclusive / Stop` |
| Authorized reviewer and timestamp | `[required]` |
| Retest/refresh trigger | `[required]` |
