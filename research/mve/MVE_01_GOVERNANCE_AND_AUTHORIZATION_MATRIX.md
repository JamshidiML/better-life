# MVE-01 Governance and Authorization Matrix

- Matrix ID: `BL-MVE-01-GOV-01`
- Version: `0.1-draft`
- Date: 2026-07-19
- Status: `Blocked - mandatory roles unassigned and unapproved`
- Scope: Proposed MVE-01 formative research only

## Authorization Boundary

This matrix does not appoint a person, establish an institution, create legal authority, or approve participant activity. `Unassigned` means no qualified owner has been identified and accepted the role. Every role below is mandatory for the activity it governs; role consolidation requires documented competence, capacity, independence, conflict review, and approval.

No recruitment, advertisement, participant contact, screening, consent, pilot, session, data collection, follow-up, compensation processing, or analysis of participant data is possible while any applicable mandatory role is `Unassigned`, unapproved, expired, conflicted without mitigation, or lacks a required backup.

## Status Vocabulary

- `Unassigned`: no accepted role holder; activity is blocked.
- `Assigned - approval pending`: candidate recorded but authority is not active.
- `Approved`: competence, authority, conflict, dependencies, backup, approval, and expiry are documented.
- `Suspended`: authority temporarily withdrawn; affected activity is blocked.
- `Expired`: review or appointment is stale; affected activity is blocked.

## Role Responsibilities and Authority

| Role ID / required role | Responsibility | Required competence | Authority | Prohibited authority | Dependencies |
| --- | --- | --- | --- | --- | --- |
| G01 Research sponsor or responsible institution | Accept legal/ethical institutional responsibility, resource oversight, insurance/indemnity and governance route as applicable | Institution legally and operationally able to sponsor the exact study and jurisdiction | Establish institutional governance; appoint accountable roles; suspend or terminate study | Cannot waive law, ethics rejection, participant rights, or specialist gates | Legal entity; jurisdiction; insurance; ethics route; contracts; resources |
| G02 Principal investigator or research lead | Own protocol conduct, deviations, training, records, reporting and authorized amendments | Relevant human-subject/product research leadership; protocol and population competence | Direct only approved research; submit amendments; pause procedures | Cannot self-approve ethics, clinical, legal/privacy, or safety matters outside competence | G01; G03-G19 approvals; approved protocol and systems |
| G03 Methods owner | Own design, sampling, comparator, instruments, analysis logic and interpretation ceiling | Formative/qualitative/mixed-method design and small-sample interpretation | Approve methods within ethics/safety constraints; require revision | Cannot authorize participant activity or convert descriptive results into efficacy/validation | G02; G04; G15; reviewed instruments |
| G04 Ethics owner | Determine ethics pathway, consent adequacy, proportionality, amendments and reporting | Independent research ethics competence for population, topic and jurisdiction | Approve/reject ethics submission where formally empowered; require pause | Cannot waive legal prohibition, serious safety issue, privacy illegality, or inaccessible consent/withdrawal | G01; G02; all safety/privacy/inclusion plans; ethics body where required |
| G05 Clinical safety owner | Own nonclinical boundary, harm definitions, care displacement, resource routing and clinical-role limits | Qualified clinical/sexual-health expertise appropriate to study and jurisdiction | Block unsafe language/procedure; classify/adjudicate within approved role | Cannot diagnose/treat participants through the study or approve methods/privacy outside competence | G02; G04; G10-G11; current local support routes |
| G06 Privacy/data-controller owner | Determine controller accountability, purposes, data inventory, rights, retention and processor controls | Authorized controller representative with data-governance competence | Approve or block data operations within law and institutional policy | Cannot invent a lawful basis or waive data-subject rights/DPO advice | G01; G07-G10; approved systems, notices, agreements and DPIA decision |
| G07 DPO or privacy counsel | Provide independent GDPR/German/EU and applicable jurisdiction advice, DPIA/legal-basis/rights assessment | Qualified DPO/counsel competence and jurisdictional standing | Issue scoped legal/privacy conditions or prohibition; escalate to authority as required | Cannot approve study benefit, clinical safety, or methods outside competence | G01; G06; complete data flows, vendors, locations and purposes |
| G08 Data custodian | Operate approved storage, access, retention, deletion, export, backup and audit controls | Secure research-data operations and approved-system competence | Grant/revoke least-privilege access; execute verified retention/deletion/export | Cannot reuse data, alter purposes, or retain outside approved schedule | G06-G07; G09-G10; approved data plan and system |
| G09 Security owner | Own threat model, access controls, secure configuration, incident prevention and verification | Security engineering/risk competence for research systems and topic sensitivity | Block insecure systems; approve technical controls within assigned scope | Cannot approve legality, ethics, or participant risk alone | G06-G08; G10; system inventory; incident plan |
| G10 Incident-response owner | Coordinate privacy, security, safety and research incident intake, containment, notification and evidence | Incident management plus applicable reporting-route competence | Activate approved response; preserve minimum evidence; suspend affected operations | Cannot conceal, overcollect, retaliate, or make clinical/legal determinations outside role | G01-G09; G11; notification duties; current contacts |
| G11 Coercive-control/safe-contact owner | Own safe contact, private-context, shared-device, retaliation, third-party and discreet-exit controls | Specialist coercive-control/safeguarding competence relevant to population | Block unsafe channels/context; require safe-contact amendments; pause activity | Cannot conduct covert assessment, contact third parties automatically, or restrict independent exit | G02; G04-G06; G10; G13; G17 |
| G12 Accessibility and inclusion owner | Own accessible consent/tasks/routes, accommodations, language, cultural inclusion and critical-route equivalence | Accessibility, inclusive research and relevant communication/localization competence | Block inaccessible modality; require alternate format/accommodation | Cannot treat one participant as group validation or waive critical access failure | G02-G05; G11; G13-G14; approved materials/formats |
| G13 Recruitment owner | Own approved channels, neutral copy, eligibility workflow, inclusion tracking and channel shutdown | Ethical recruitment and sensitive-population competence | Use only approved channels/materials; stop unsafe or biased channel | Cannot diagnose, pressure, overpromise, recruit through prohibited authority, or start without authorization | G02-G07; G11-G12; G16-G18; approved plan |
| G14 Facilitator supervisor | Train, observe and supervise facilitators; enforce role, stop, escalation and fidelity rules | Research supervision plus protocol/safety competence; independent enough to address breaches | Certify/revoke facilitator authorization; stop session/procedure | Cannot provide clinical care through facilitator role or suppress deviations/adverse events | G02-G05; G10-G12; approved scripts/training |
| G15 Analysis owner | Own codebook, version-separated analysis, missingness, negative cases, disclosure controls and claim ceiling | Qualitative/quantitative formative analysis and privacy-aware reporting competence | Approve analysis outputs within protocol; reject unsupported claims | Cannot exclude adverse/withdrawal cases to improve results or authorize progression alone | G03-G08; approved plan; frozen versions; disclosure review |
| G16 Compensation owner | Separate fair compensation from completion, sensitive disclosure and product behavior | Research compensation, finance/privacy and jurisdictional policy competence | Process approved compensation independently; resolve payment failures safely | Cannot condition payment on completion, answers, continued consent, referral or product use | G01-G07; G11; G13; approved amount/method/tax/privacy process |
| G17 Participant-contact owner | Control scheduling, reminders, follow-up, withdrawal and support-route communications | Safe-contact, privacy, consent and accessible communication competence | Send only approved, consented, discreet communications; stop contact immediately | Cannot contact third parties, use undisclosed channels, pursue nonresponse, or infer safety | G04-G07; G10-G13; approved channel/scripts/preferences |
| G18 Final written authorization owner | Verify every mandatory gate, role, version, system and condition before issuing narrow written authorization | Institutionally delegated authority plus ability to audit the complete authorization record | Authorize only exact protocol/version/date/site/activity; withhold/revoke authorization | Cannot waive an unassigned/expired role, law, ethics rejection, Critical safety, privacy, rights, coercion or accessibility gate | G01-G17 and G19; signed approvals; version lock; readiness audit |
| G19 Study-stop authority | Maintain continuously reachable independent authority to pause/stop participant activity and prevent restart | Safety/ethics authority and competence to act on credible individual events | Immediately pause/stop relevant procedure or whole study; require adjudication and restart authorization | Cannot delay stop for score, sample, schedule, founder preference or aggregate evidence | G01-G18; current escalation route; incident and restart procedure |

## Assignment and Approval Controls

| Role ID | Current assignee | Status | Conflict rules | Backup | Approval required | Expiry |
| --- | --- | --- | --- | --- | --- | --- |
| G01 | `Unassigned` | Blocked | Must disclose ownership, funding, liability and product/founder interests; sponsor cannot be its sole ethics reviewer | `Unassigned` | Legal/institutional acceptance in writing | Not set; invalid until approved |
| G02 | `Unassigned` | Blocked | Founder/product/financial and dual clinical-research roles disclosed; no sole adjudication of own breach | `Unassigned` | G01 plus G04 written acceptance | Not set; invalid until approved |
| G03 | `Unassigned` | Blocked | Independence from favorable product outcome recorded; no sole approval of own instrument | `Unassigned` | G02 and G04 written acceptance | Not set; invalid until approved |
| G04 | `Unassigned` | Blocked | Must be independent of sponsor/product pressure to the extent required; recuse on material conflict | `Unassigned` | G01/formal ethics body as applicable | Not set; invalid until approved |
| G05 | `Unassigned` | Blocked | Clinical, advocacy, fellowship and financial interests disclosed; no participant care dual role without separate approval | `Unassigned` | G01, G02 and G04 written acceptance | Not set; invalid until approved |
| G06 | `Unassigned` | Blocked | Controller/product/vendor interests disclosed; cannot act as independent DPO where prohibited | `Unassigned` | G01 plus G07 advice/approval route | Not set; invalid until approved |
| G07 | `Unassigned` | Blocked | Independence and client/institution relationship recorded; legal advice scope/jurisdiction explicit | `Unassigned` | G01 confirms qualified appointment/engagement | Not set; invalid until approved |
| G08 | `Unassigned` | Blocked | No analysis/product reuse authority; privileged access reviewed and logged | `Unassigned` | G06, G07 and G09 written approval | Not set; invalid until approved |
| G09 | `Unassigned` | Blocked | Vendor/system ownership and prior implementation interests disclosed; independent verification required for own controls | `Unassigned` | G01, G06 and G07 as applicable | Not set; invalid until approved |
| G10 | `Unassigned` | Blocked | Incident owner cannot suppress report about own team/control; escalation outside line management required | `Unassigned` | G01, G04, G06 and G09 written approval | Not set; invalid until approved |
| G11 | `Unassigned` | Blocked | Advocacy/service relationships disclosed; participant safety overrides channel/product preference | `Unassigned` | G04-G06 written acceptance | Not set; invalid until approved |
| G12 | `Unassigned` | Blocked | Accommodation provider/vendor and representation claims disclosed; lived experience never presumed representative | `Unassigned` | G02-G04 and G11 written acceptance | Not set; invalid until approved |
| G13 | `Unassigned` | Blocked | Recruitment-channel incentives and gatekeeper authority disclosed; no facilitator-only eligibility approval | `Unassigned` | G02, G04, G11 and G12 approve plan | Not set; invalid until approved |
| G14 | `Unassigned` | Blocked | Cannot adjudicate own facilitation breach; supervision load and dual roles disclosed | `Unassigned` | G02, G04 and G05 written acceptance | Not set; invalid until approved |
| G15 | `Unassigned` | Blocked | Product/founder expectations and facilitator overlap disclosed; independent challenge required | `Unassigned` | G02-G04 and G06 approve plan/access | Not set; invalid until approved |
| G16 | `Unassigned` | Blocked | Payment/vendor/recruiter incentives disclosed; independent from completion and analysis decisions | `Unassigned` | G01, G04, G06 and G13 approve process | Not set; invalid until approved |
| G17 | `Unassigned` | Blocked | Recruiter/facilitator overlap disclosed; no personal-channel improvisation | `Unassigned` | G04, G06, G11 and G13 approve channel | Not set; invalid until approved |
| G18 | `Unassigned` | Blocked | Cannot be sole author/reviewer of every gate; founder role disclosed separately | `Unassigned` | G01 delegation and complete G02-G19 approvals | Not set; invalid until approved |
| G19 | `Unassigned` | Blocked | Must be able to stop despite sponsor/founder pressure; cannot adjudicate own implicated incident alone | `Unassigned` | G01 and G04 written delegation, acknowledged by G18 | Not set; invalid until approved |

## Authorization Checklist

Final written authorization is invalid unless it records the exact protocol/material/measure versions and commit; approved activity/site/date window; every applicable role and backup; competence and conflicts; ethics/privacy/security/safety/accessibility decisions; current support and incident routes; approved systems; recruitment/contact/compensation controls; expiry; and study-stop contact. Absence, inconsistency, inference, or expiry in any mandatory field keeps participant activity `Blocked`.

## Current Disposition

All 19 roles and all backups are `Unassigned`. MVE-01 is ready only for internal and scoped specialist review of draft materials. No participant-facing activity is authorized.
