# MVE-01 Data Minimization Plan

- Version: `0.2-draft`
- Status: Draft for privacy/GDPR/DPIA, ethics, security, coercive-control, and methods review
- Execution: Prohibited until systems, roles, lawful basis, notice, retention, and DPIA decisions are approved

## Principles

- Collect only data necessary for a prespecified research decision.
- Prefer synthetic fixtures, broad categories, task outcomes, ratings, and short paraphrases over intimate narrative.
- Separate product/prototype state from research records and operational records.
- One purpose never authorizes another.
- No raw participant data, notes, recordings, contact details, or explicit content in GitHub or external AI systems.
- `Local`, `coded`, `pseudonymous`, `encrypted`, and `no-save` are not synonyms for anonymous or outside data-protection law.

## Proposed Data Domains

| Domain | Minimum candidate fields | Separate purpose/store | Default | Prohibited content |
| --- | --- | --- | --- | --- |
| Contact/scheduling | Preferred neutral contact, approved time, reminder choice | Restricted operations system | Off until recruitment approved | Goal, diagnosis, behavior detail, research answers |
| Eligibility/readiness | Adult confirmation, voluntary/private-context outcome, language/accommodation feasibility | Restricted screening record | Minimum pass/stop outcome | Explicit behavior, diagnosis, partner identity, danger narrative |
| Consent | Participant code, document version, choices, timestamp, withdrawal limits | Approved consent record | Required fields only | Study answers or intimate content |
| Prototype state | Five choice IDs and temporary static display state | Local/session-only fixture | Use-once/discard preferred for research | Free text, browser history, account, telemetry |
| Task data | Version, order, outcome, time, assistance, skip/stop, critical errors | Research dataset | Coded | Screen/session replay, raw keystrokes |
| Measures | Approved item responses, missing/prefer-not-to-answer | Research dataset | Coded | Diagnostic score unless separately approved |
| Interview | Structured codes and minimal paraphrase | Research dataset | Recording off | Explicit narrative, exact URL/app, third-party details |
| Recording | Audio/video only if necessary and separately approved/consented | Restricted raw-data store | Off | Screen/device capture beyond approved frame |
| Quote | Exact excerpt, context, approval/attribution choice | Separate publication record | Off | Identifying/explicit/third-party content |
| Accessibility | Needed format/accommodation and task effect | Research dataset or operational separation | Broad code | Diagnosis/protected-trait detail unless necessary/approved |
| Adverse event | Minimal fields from stop plan | Restricted incident store | Event-triggered | Unnecessary clinical or explicit narrative |
| Compensation | Minimum payment/legal fields | Finance/payment system | Separate | Research answers, outcome, recovery label |
| Follow-up | Approved contact purpose/time/expiry | Restricted operations system | Off | Default sensitive reminder |

## Explicitly Prohibited by MVE-01

- Raw explicit content, screenshots, browsing/search history, domain/app-use logs, device monitoring, location, contacts, messages, or sexual history.
- Diagnosis, relapse/risk/calmness/capacity inference, biometric/behavioral profiling, or hidden categories.
- Partner/employer/fellowship/ally reports or third-party enrollment.
- Product analytics, session replay, ad tech, fingerprinting, external AI transcription/synthesis, or model training.
- Raw notes/recordings in repository, issue, PR, ordinary email/chat, or unapproved cloud drive.
- Reuse for product analytics, safety monitoring, model training, public-health reporting, marketing, or partnership without a new purpose-specific decision.

## Prototype Versus Research Records

`Use once` or `discard` describes the low-fidelity prototype state only. It does not erase consent, compensation, incident, or already collected research records. Participant information must explain each record type, purpose, controller/access, retention trigger, withdrawal/deletion rights and limits before consent.

No production browser storage exists in this phase. Future `save locally` wording requires named-browser/shared-device/backup/private-mode/deletion tests and privacy review before use.

## Proposed Data Flow

```text
Contact system --participant code only--> consent/scheduling map
Static fixture --approved coded outcomes--> research dataset
Optional recording --if approved--> restricted raw store --approved extract--> coded dataset
Incident trigger --> restricted incident record
Compensation system <--minimum payment fields-- participant
Research dataset --> approved aggregate/qualitative synthesis
```

No flow to GitHub, product analytics, advertising, partner, fellowship, employer, external model, model training, or public-health reporting.

## Access and Separation

Roles must be named before recruitment. Apply least privilege:

- Recruiter/contact operator cannot see research answers by default.
- Facilitator sees only what is required for session/safety.
- Analyst receives coded minimized data without contact map.
- Compensation operator receives no study outcome.
- Safety/privacy reviewer receives minimum incident evidence.
- Founder/product team receives reviewed aggregate synthesis, not raw notes.

Access logging, authentication, approved devices, storage location, encryption, backup, export, and incident handling are open decisions for privacy/security review.

## Recording and Notes

Recording default is `Off`. If methods reviewers show necessity, recording requires separate consent, purpose, access, transcription method, redaction, retention, withdrawal stage, and deletion verification. External automated transcription/AI is prohibited unless a later independent privacy/legal/ethics decision authorizes an exact system and data flow.

Facilitator notes use structured fields and short paraphrases. The facilitator interrupts unnecessary explicit/identifying detail and does not write it down.

## Retention and Deletion

No duration is invented in this draft. Qualified privacy/legal/ethics/method reviewers must set purpose-specific retention triggers for contact maps, screening, consent, coded data, recordings, quotes, incidents, compensation, and published aggregates.

Participant materials must distinguish:

- stop future collection;
- withdraw from future contact;
- delete prototype/session state;
- request deletion/restriction of identifiable research records where applicable;
- records that must be retained and why;
- data already irreversibly aggregated/published or lawfully retained;
- recipients/copies outside controller control.

Never promise immediate total deletion.

## Publication and Small-Group Protection

Publish only approved aggregate counts/ranges and de-identified themes. Suppress or generalize rare combinations, exact quotes, locations, dates, occupations, identities, and small subgroup cells. No participant story or testimonial is collected under this protocol.

## Withdrawal, Breach, and Exit

- Withdrawal does not require a reason and does not affect compensation under the approved plan.
- On a data incident, stop collection, contain access, preserve minimum evidence, follow approved notification/legal process, and pause the study under the adverse-event plan.
- At study shutdown, revoke access, delete/retain by approved schedule, document residuals, and prevent silent reuse.

## Approval Gates

Before execution: processing inventory, controller/processor roles, legal basis/Article 9, DPIA, notice/consent, storage/vendors/transfers, access, retention, rights, incident, recording, compensation, safe contact, and publication plan must receive documented decisions.
