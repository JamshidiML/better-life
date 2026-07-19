# Specialist Review Response Template

- Template ID: `BL-SRR-01`
- Version: `0.1-draft`
- Date: 2026-07-19
- Status: Required response structure for scoped review; not an approval record until completed and confirmed

## Reviewer and Scope

| Field | Required response |
| --- | --- |
| Review-pack ID and version | `[required]` |
| Reviewer name or coded identity | `[required; identity key location if coded]` |
| Professional role | `[required]` |
| Qualifications and relevant experience | `[required]` |
| Jurisdiction(s) considered | `[required; state not applicable where appropriate]` |
| Assigned scope reviewed | `[required; include explicit exclusions]` |
| Documents and versions reviewed | `[required; list source IDs, commit SHAs, and versions from REVIEW_BUNDLE_MANIFEST.md]` |
| Review date | `[YYYY-MM-DD]` |
| Conflict-of-interest declaration | `[none declared, or describe financial/professional/personal/advocacy/fellowship/founder relationship]` |
| Outside-expertise areas | `[required; do not imply review outside competence]` |

## Overall Scoped Decision

Choose one allowed decision and explain its boundary:

- `Approve within scope`
- `Approve with conditions`
- `Revise`
- `Block`
- `Outside expertise`
- `Insufficient information`

Decision: `[required]`

Scope and meaning: `[required]`

This decision applies only to the recorded competence, jurisdiction, documents, versions, and assigned scope. It is not approval of the entire Better Life system unless those fields genuinely establish complete coverage.

## Item Decisions

Use one row per requested decision, claim, risk, question, or amendment. Do not combine incompatible findings.

| Item ID / exact locator | Allowed decision | Finding severity | Exact required amendment | Supporting evidence or professional rationale | Residual risk | Conditions | Blocked activities | Permitted next activity | Owner | Expiry / refresh trigger |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `[required]` | `Approve within scope / Approve with conditions / Revise / Block / Outside expertise / Insufficient information` | `Critical / High / Medium / Low / None` | `[exact text, control, deletion, evidence, or decision required]` | `[citation, standard, experience basis, or reasoned judgment; classify uncertainty]` | `[required]` | `[required or None]` | `[required or None]` | `[required]` | `[required]` | `[date/condition]` |

## Findings by Severity

### Critical Findings

`[List exact item and blocked activity, or None identified within scope.]`

### High Findings

`[List exact item and blocked activity, or None identified within scope.]`

### Medium Findings

`[List exact item and amendment, or None identified within scope.]`

### Low Findings

`[List exact item and amendment, or None identified within scope.]`

Absence of a finding means only that none was identified within the recorded scope and materials. It is not proof of safety, legality, accessibility, validity, or feasibility.

## Conditions and Residual Risk

- Conditions before the stated next activity: `[required]`
- Unresolved risks and uncertainty classification: `[required]`
- Evidence still required: `[required]`
- Blocked activities: `[required]`
- Permitted next activity: `[required; narrowest justified activity]`
- Expiry date or validity period: `[required]`
- Refresh triggers: `[source, law, standard, population, jurisdiction, protocol, implementation, evidence, or incident change]`

## Confirmation

| Field | Required response |
| --- | --- |
| Signature or confirmation method | `[qualified e-signature, signed document, verified institutional email, or approved coded confirmation]` |
| Confirmation date/time and timezone | `[required]` |
| Record custodian and restricted location | `[required; do not place sensitive identity/COI data in GitHub]` |
| Response integrity/hash where practical | `[required or reason not practical]` |
