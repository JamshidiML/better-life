# Specialist Conflict and Escalation Protocol

- Protocol ID: `BL-SCEP-01`
- Version: `0.1-draft`
- Date: 2026-07-19
- Owner: Review coordinator role, currently `Unassigned`
- Status: Governance protocol; no specialist findings have been received

## Governing Rules

1. Preserve each signed/scoped opinion, its source set, competence, jurisdiction, conditions, and expiry as a separate immutable record.
2. Never average legal, ethics, safety, privacy, accessibility, coercive-control, or clinical decisions. Vote counts and quality scores do not resolve a non-waivable gate.
3. Never silently merge incompatible recommendations. A synthesis must link both originals and state what was retained, rejected, or left unresolved and why.
4. A specialist decision governs only its assigned scope. `Outside expertise` and `Insufficient information` create no approval.
5. Until conflict is resolved, apply the safest temporary state: preserve ordinary legitimate access and withdrawal/recovery, suspend the disputed activity, and make no stronger claim.

## Conflict Record

Open one record for every material disagreement.

| Required field | Record |
| --- | --- |
| Conflict ID | `BL-SC-[sequence]` |
| Source response IDs and immutable locators | `[required]` |
| Exact incompatible findings | `[required; preserve wording without flattening]` |
| Classification | `Fact / Value / Risk tolerance / Jurisdiction / Population / Interpretation / Implementation / Multiple` |
| Scope and affected versions | `[required]` |
| Decision owner | `[named authorized role or Unassigned]` |
| Non-waivable gates | `[required]` |
| Temporary safest state | `[required]` |
| Blocked activities | `[required]` |
| Clarification requested | `[question, recipient, due date, or not appropriate]` |
| Additional independent review | `[required/not required, competence, independence, jurisdiction, due date]` |
| Founder decision record | `[separate locator; never overwrite specialist records]` |
| Residual dissent | `[required, including dissenting specialist's requested wording]` |
| Final disposition and rationale | `[required; may remain Blocked]` |
| Expiry and reopening conditions | `[required]` |

## Triage and Resolution

1. **Freeze:** mark affected activity `Blocked`; prevent outreach, participant work, test execution, implementation, publication, or claims implicated by the conflict.
2. **Classify:** identify whether disagreement concerns facts, values, risk tolerance, jurisdiction, population, interpretation, implementation, or more than one. Do not mislabel a legal prohibition as product preference.
3. **Check source parity:** compare exact documents, versions, assumptions, jurisdictions, and populations reviewed. A version mismatch requires refresh, not reconciliation by inference.
4. **Clarify:** ask each reviewer a bounded question where ambiguity, terminology, or missing rationale could resolve the difference. Preserve the original response.
5. **Escalate:** obtain an additional independent review when competence overlaps, evidence conflicts materially, a Critical/High issue remains, or the decision owner lacks a justified basis. Independence and COI must be recorded.
6. **Decide within authority:** the authorized decision owner records the narrowest permissible disposition. Unresolved material conflict remains `Blocked`.
7. **Record separately:** founder preference, specialist findings, decision-owner disposition, conditions, and dissent receive distinct records and locators.
8. **Reopen:** reopen on expiry, source/law/standard/platform/protocol/population/jurisdiction change, new evidence, incident, implementation deviation, or a reviewer's material correction.

## Non-Waivable Gates

Founder preference, schedule, cost, demand, score, or majority opinion cannot override:

- legal prohibition;
- ethics rejection;
- a Critical safety issue;
- inaccessible recovery, withdrawal, stop, or other critical route;
- privacy illegality;
- unlicensed content use;
- unresolved coercive-control risk;
- unsupported clinical claim.

The relevant activity stays `Blocked` until the competent authority records lawful and ethically acceptable closure. If closure is unavailable, the feature, study, test, content, or claim is removed or retired.

## Founder Decision Boundary

The founder may choose among options that remain after all applicable non-waivable gates and assigned specialist conditions. The founder cannot recast a prohibition as accepted residual risk, approve outside their competence, or authorize activity while a mandatory owner is `Unassigned` or unapproved. Founder disagreement is preserved as a separate decision input, not substituted for specialist evidence.

## Expiry

Each conflict disposition inherits the earliest expiry among its source reviews and imposed conditions. A disposition without an expiry or refresh trigger is invalid. Reopening returns the affected activity to the safest temporary state until a new scoped disposition is confirmed.
