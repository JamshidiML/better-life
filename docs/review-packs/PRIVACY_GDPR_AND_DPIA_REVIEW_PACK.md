# Privacy, GDPR, and DPIA Review Pack

- Pack ID: `P4-RP-PRIV-01`
- Status: Prepared; no DPO, counsel, authority, or reviewer contacted; no compliance claim

## Purpose

Obtain EU/German privacy, data-protection, research-data, and DPIA decisions for MVE-01 preparation and the canonical layer architecture.

## Product Boundary

MVE-01 is low fidelity and no product implementation exists. The candidate product interaction is local/use-once/discard with no account, sync, analytics, AI, peer, reward, payment, or monitoring. Research operations may still process personal or sensitive data and require a separate lawful design.

## Documents to Read

1. `docs/integration/CANONICAL_ARTIFACT_INDEX.md`, `BL-PLC-01`
2. `docs/integration/DECISION_AND_DEPENDENCY_REGISTER.md`
3. `research/mve/MVE_01_RESEARCH_PROTOCOL.md`
4. `research/mve/MVE_01_DATA_MINIMIZATION_PLAN.md`
5. `research/mve/MVE_01_PARTICIPANT_JOURNEY.md`
6. Source locator `6740c0b:architecture/CYCLE_3_CANONICAL_PROTECTION_LAYER_AND_LEARNING_GOVERNANCE.md`
7. Source locator `6740c0b:security/DATA_CLASSIFICATION.md`
8. Source locator `6740c0b:security/RETENTION_DELETION_AND_EXPORT.md`

## Decisions Requested

- Determine controller/joint-controller/processor roles and German/EU research context.
- Determine candidate Article 6/9 bases, consent requirements, withdrawal consequences, and whether MVE-01 should proceed at all.
- Decide DPIA necessity/scope, ePrivacy applicability, transfer/processor constraints, and records/notices.
- Approve or amend data fields, recording/notes/quotes, coding, storage, access, retention, deletion, rights, incident, and publication controls.
- Review local/no-save claims and shared-device/browser/backup risks separately from research records.

## Claims Requiring Review

| Claim | Classification | Review need |
| --- | --- | --- |
| Research consent and product/local-use choice are separate. | Proposed control | Legal/ethical adequacy |
| Broad labels and synthetic fixtures reduce data risk. | Hypothesis | Residual sensitivity and identifiability |
| Contact details should remain separate from research data. | Proposed control | System and retention requirements |
| No raw notes go to GitHub or external AI. | Repository boundary | Operational sufficiency |
| Local/no-save does not automatically mean private, encrypted, durable, or fully deleted. | Platform/privacy limitation | Required disclosure |

## Known Risks

- Sexual/health inference, special-category data, third-party data, and re-identification.
- Coerced consent, shared devices/accounts, unsafe household discovery, or recording exposure.
- Overpromised deletion where backups, recipients, legal obligations, or research integrity limit removal.
- Research/product purposes bundled or data reused for analytics/training.
- Small-cell reporting and rare narratives expose identity.
- Cloud transcription, video platforms, scheduling, or compensation vendors create processors/transfers.

## Specific Questions

1. What legal/ethical basis and Article 9 condition, if any, could support each research operation?
2. Is a DPIA required before recruitment, and what threat/data-flow scope is necessary?
3. Which data fields, recordings, quotes, follow-up, or contact methods should be prohibited?
4. What withdrawal/deletion language is accurate at each stage?
5. What retention periods and access controls are proportionate?
6. How should compensation, scheduling, consent evidence, and adverse-event records be separated?
7. What local/no-save claims are permitted before implementation tests?
8. What participant-rights and incident channels are required in Germany/EU?

## Prohibited Assumptions

- Consent is automatically the correct or sufficient legal basis.
- Local, accountless, pseudonymous, coded, encrypted, or no-save means anonymous or outside GDPR.
- De-identification is irreversible.
- Product consent authorizes research, safety, analytics, training, or reporting.
- DPIA completion proves compliance or safety.

## Expected Reviewer Output

Provide jurisdiction/role; processing inventory; controller/processor decision; candidate legal basis/Article 9/ePrivacy analysis; DPIA decision; data-field disposition; notice/consent/withdrawal language; retention/rights/deletion/incident requirements; transfer/vendor restrictions; Critical/High gaps; and expiry. Separate legal advice from open factual assumptions.

## Conflict-of-Interest Declaration

Disclose representation, DPO role, vendor interests, relationship to Better Life/founder, prior advice on cited architecture, research affiliations, and limits on jurisdiction or independence.

## Expiry and Refresh

Refresh before ethics/recruitment, on any data/vendor/country/population/purpose/retention/recording change, or legal/guidance change. Proposed maximum: 60 days; reviewer may require shorter or event-only validity.
