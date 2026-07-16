# Duplication and Conflict Matrix

- Status: Proposed reconciliation map; no source file changed or deleted
- Review scope: Draft PRs #30-#40 and the independent Cycle 3 coordination review

Each entry records all required integration decisions. `Retain` and `Historical` are future dispositions, not actions in this phase.

## D01 - Capability and Layer Fields

- Canonical owner: `BL-CAP-01` / Thread 01 for platform truth; `BL-PLC-01` / Thread 07 for layer contract.
- Duplicate locations: T01 `CROSS_DEVICE_FEASIBILITY.md`, `CYCLE_2_PROTECTION_STACK_AND_ADAPTERS.md`, `CYCLE_3_ADAPTER_RESEARCH_READINESS.md`; T07 `CYCLE_2_PROTECTION_STACK_PRIVACY_AND_TEARDOWN.md`, `CYCLE_3_CANONICAL_PROTECTION_LAYER_AND_LEARNING_GOVERNANCE.md`; T10 `CYCLE_2_PRODUCT_SHAPE_AND_UX.md`, `CYCLE_3_LIVING_RECOVERY_PRODUCT_MAP.md`.
- Exact conflict: capability, owner, permission, health, bypass, recovery, and teardown fields are repeated; T01 and T07 could both appear to own the full layer schema.
- Proposed resolution: T01 owns adapter/platform extension fields; T07 owns the base contract; T10 presents both.
- Dependency: platform and privacy/security review.
- Merge order: T01 interface, then T07 base contract reconciliation, then T10 presentation.
- Eventually retained: T01 Cycle 3 readiness/source register; T07 Cycle 3 contract; T10 references.
- Eventually historical: overlapping Cycle 1/Cycle 2 field lists after a provenance-preserving migration.
- Founder decision: confirm split ownership and truth-before-presentation rule.
- Specialist decision: security/platform/DPIA reviewers approve completeness; none has.

## D02 - Mode Meaning and Copy

- Canonical owner: `BL-MODE-01` / Thread 05.
- Duplicate locations: T05 Cycle 1 state machine, Cycle 2 modes, Cycle 3 boundaries; T06 Cycle 2 Constitution and Cycle 3 pathway; T10 Cycle 2 UX and Cycle 3 map.
- Exact conflict: earlier Supportive/Friction wording overlaps; consumers can imply different capabilities or assigned severity.
- Proposed resolution: exact copy and behavior come only from `BL-MODE-01`; modes remain user-selected controls, not diagnoses or stages.
- Dependency: clinical, coercive-control, accessibility, plain-language, and user research.
- Merge order: T05 before T06 and T10.
- Eventually retained: T05 Cycle 3 definitions plus consumer references.
- Eventually historical: superseded mode wording in Cycle 1/Cycle 2 documents.
- Founder decision: confirm exact labels or return them to naming research.
- Specialist decision: approve participant-facing interpretation; open.

## D03 - Meaning of Calm-State Setup

- Canonical owner: `BL-MODE-01` / Thread 05.
- Duplicate locations: Issue #42; T05 Cycle 2/3; T06 Cycle 2/3; T10 Cycle 2/3.
- Exact conflict: `while calm` can be read as an inferred psychological state or capacity determination.
- Proposed resolution: observable user-chosen setup time, voluntary readiness, comprehension, and recovery rehearsal only; no AI, biometric, behavior, questionnaire, ally, or clinician certification.
- Dependency: clinical, ethics, coercive-control, accessibility, and legal review.
- Merge order: T05 rule before plan and UX copy.
- Eventually retained: operational rule and explicit no-inference boundary.
- Eventually historical: any unqualified `calm state` wording.
- Founder decision: confirm phrase remains acceptable with the no-inference explanation.
- Specialist decision: clinical/ethics reviewers decide whether wording itself is unsafe or misleading.

## D04 - Cooling Candidates and Safety Recovery

- Canonical owner: `BL-MODE-01` / Thread 05; `BL-PLC-01` owns recovery execution.
- Duplicate locations: Issue #42; T05 Cycle 2/3; T06 Constitution; T07 immediate safety recovery; T10 UX.
- Exact conflict: Cycle 2 listed an incomplete set; a cooling rule could delay safety, care, accessibility, work/legal, or account recovery.
- Proposed resolution: preserve ten unranked candidates with no default; immediate safety/essential-access recovery overrides ordinary friction.
- Dependency: user research, coercive-control, accessibility, platform, legal, and clinical review.
- Merge order: T05 candidate semantics, T07 recovery contract, T10 display.
- Eventually retained: Cycle 3 candidate set and immediate-recovery invariant.
- Eventually historical: incomplete candidate lists and generic recovery wording.
- Founder decision: select no default until evidence; later approve any context-specific candidate.
- Specialist decision: approve proportionality, exceptions, and stop criteria.

## D05 - Personal Plan, Constitution, and Pathway Schema

- Canonical owner: `BL-PC-01` / Thread 06; Thread 03 owns source/rights provenance.
- Duplicate locations: T06 `PERSONAL_RECOVERY_PLAN_SPEC.md`, Cycle 2 Constitution, Cycle 3 pathway; T03 Cycle 3 pathway schema; T05 pathway interface; T10 My Plan view.
- Exact conflict: the same stage/purpose/evidence/harm/choice/data/review fields appear in T03 and T06; names may imply diagnosis, legal force, or fellowship identity.
- Proposed resolution: T06 owns user/path semantics; T03 supplies immutable provenance/rights fields; T10 presents; naming remains a research question.
- Dependency: fellowship/IP, clinical, inclusion, accessibility, language, and user review.
- Merge order: T03 provenance, T06 schema, T05 mode boundary, T10 UX.
- Eventually retained: T03 provenance controls and T06 Cycle 3 schema.
- Eventually historical: duplicate stage schemas and any approved-sounding name.
- Founder decision: do not choose a public name before naming research.
- Specialist decision: IP/community and clinical/plain-language review.

## D06 - First MVE Scope and Five Decisions

- Canonical owner: `BL-PC-01` for decisions; `BL-UX-01` for flow/protocol.
- Duplicate locations: T06 Cycle 3 five decisions; T07 first-MVE flow; T10 Cycle 3 wireframes/protocol; Cycle 3 coordination.
- Exact conflict: `local`, `accountless`, and `no-save` can sound like one implementation; T10 previously called the decisions frozen.
- Proposed resolution: one Supportive-only low-fidelity research object with local/use-once/discard variants; no implementation is selected. Instruments are draft pending review.
- Dependency: method/ethics, clinical, privacy, accessibility, inclusion, and user review.
- Merge order: T06 semantic decisions, T07 data boundary, T10 protocol.
- Eventually retained: reviewed MVE protocol version and canonical decision definitions.
- Eventually historical: pre-review v0.1 instruments after amendment, but preserved in version history.
- Founder decision: confirm bounded MVE and approve only a reviewed protocol version.
- Specialist decision: approve design, measures, comparison, sample, consent, and safety.

## D07 - MVE Threshold Status

- Canonical owner: `BL-UX-01` / Thread 10 for protocol; methods/ethics reviewers govern approval.
- Duplicate locations: T10 Cycle 3 threshold table; Cycle 3 coordination called thresholds frozen; PR #40 independent Cycle 3 review corrected the status.
- Exact conflict: `frozen` can imply scientifically or founder-approved when it only meant version-controlled before participant work.
- Proposed resolution: label all thresholds `Draft for specialist and ethics review`; after approval, freeze the exact study version before enrollment.
- Dependency: method, clinical, ethics, privacy, accessibility, coercive-control, and lived-experience review.
- Merge order: independent correction before any protocol approval.
- Eventually retained: approved threshold version plus amendment history.
- Eventually historical: unqualified `frozen v0.1` wording.
- Founder decision: accept the correction and do not treat scores as approval.
- Specialist decision: approve or amend every threshold and escalation rule.

## D08 - Data Purposes and Consent

- Canonical owner: `BL-PLC-01` / Thread 07.
- Duplicate locations: T07 Cycle 1 consent/data docs and Cycle 2/3 architecture; T04 stories; T06 pathway; T09 rewards/impact; T10 privacy UX.
- Exact conflict: feature-specific documents enumerate consent differently and can imply that one consent authorizes research, analytics, safety, training, publication, or partners.
- Proposed resolution: use six canonical purpose IDs with separate basis/consent decisions and feature-specific receipts.
- Dependency: EU/German counsel/DPO, ethics, security, processor and retention decisions.
- Merge order: T07 before every data-consuming artifact.
- Eventually retained: T07 Cycle 3 purpose model and approved feature overlays.
- Eventually historical: duplicate general-purpose consent lists.
- Founder decision: bundled consent remains rejected.
- Specialist decision: purpose-specific legal basis, Article 9/ePrivacy, DPIA, rights, and withdrawal.

## D09 - Recovery, Uninstall, Teardown, and Residuals

- Canonical owner: `BL-PLC-01`; T01 supplies platform behavior; T04 owns social shutdown.
- Duplicate locations: T01 Cycle 2/3; T04 Cycle 2/3; T05 transitions; T07 Cycle 2/3; T10 recovery/teardown UX.
- Exact conflict: generic teardown language can imply uninstall removes external controls or that deletion is complete.
- Proposed resolution: one inventory-driven quiesce/revoke/remove/verify process with explicit partial/external residuals and platform-specific evidence.
- Dependency: synthetic adapter tests, security, platform, privacy/legal, and accessibility review.
- Merge order: T07 contract, T01 observations, T04 social overlay, T10 UX.
- Eventually retained: canonical teardown contract plus platform/social conformance records.
- Eventually historical: generic or absolute delete/uninstall claims.
- Founder decision: no false completion and no orphaned unknown restriction.
- Specialist decision: approve evidence and residual disclosure.

## D10 - Ally, Peer, Sponsor, and Professional Authority

- Canonical owner: Thread 04 authority matrix; T05 mode invariants consume it.
- Duplicate locations: T03 human/AI boundaries; T04 Cycle 2/3; T05 Cycle 2/3; T06 Constitution/pathway; T07 recovery; T10 Connect view.
- Exact conflict: Cycle 2 explored ally co-approval and split recovery; Cycle 3 prohibits Levels 3-4. Renamed roles could reintroduce the same capability.
- Proposed resolution: capability-based prohibition: no peer/ally/sponsor/moderator/professional controls protection, recovery, teardown, exit, or care. Notification/acknowledgement remain unvalidated and non-vetoing.
- Dependency: coercive-control, security/cryptography, safeguarding, privacy/legal, and user review.
- Merge order: T04 authority matrix before all role-consuming docs.
- Eventually retained: Cycle 3 authority matrix and prohibition.
- Eventually historical: Level 3/4 research options as rejected history, not active candidates.
- Founder decision: confirm prohibition cannot be renamed away.
- Specialist decision: decide whether even notification/acknowledgement is acceptable for future research.

## D11 - Fellowship Rights and Original Pathway

- Canonical owner: Thread 03.
- Duplicate locations: T03 Cycle 1/2 mechanism docs and Cycle 3 rights program; T04 sponsor/story boundaries; T06 pathway; T10 long-term map.
- Exact conflict: broad mechanisms can drift into copied protected expression, false affiliation, or sponsor imitation; a readable source may be mistaken for reusable content.
- Proposed resolution: strict Track A licensed/authorized versus Track B original separation, item-level rights registry, provenance ledger, similarity/community/legal review.
- Dependency: legal/IP, fellowship/community authorization, clinical, safety, accessibility, and cultural review.
- Merge order: T03 before T04/T06/T10 content work.
- Eventually retained: rights registry and two-track controls.
- Eventually historical: exploratory wording that lacks item-level rights state.
- Founder decision: no pathway release without the applicable track gates.
- Specialist decision: item-level license, trademark, affiliation, similarity, attribution, and withdrawal.

## D12 - Living Evidence and Evidence UX

- Canonical owner: Thread 02 for scientific status; `BL-UX-01` for presentation.
- Duplicate locations: T02 claims/evidence docs and Cycle 3 lifecycle; T07 evidence-update governance; T10 Evidence view.
- Exact conflict: source freshness can be mistaken for certainty or authority; a new paper could silently change user guidance.
- Proposed resolution: separate date, certainty, applicability, contradiction, transfer distance, rights, human approval, version, rollback, and change explanation.
- Dependency: method, clinical/public-health, rights, cultural/accessibility, privacy, and product review.
- Merge order: T02 record before T07 release governance and T10 display.
- Eventually retained: living-evidence lifecycle and presentation contract.
- Eventually historical: unversioned evidence summaries and automatic-update implications.
- Founder decision: no automated paper-to-guidance or silent plan change.
- Specialist decision: approve methods, cadence, certainty, and claim wording.

## D13 - Rewards, Impact, and Partner Benefits

- Canonical owner: Thread 09 economics/governance; Thread 06 owns pathway eligibility boundary; T07 data separation.
- Duplicate locations: T06 Cycle 3 reward boundary; T07 partner separation; T08 ecosystem; T09 Cycle 3 model; T10 reward UX.
- Exact conflict: rewards can be framed as learning support, economics, UX, or partnership and evade one gate; outputs can be mislabeled outcomes or savings.
- Proposed resolution: no first-MVE rewards; one reward record must satisfy behavior/evidence, motivation, equity, data, partner, legal, cost, fraud, adverse-effect, and stop gates.
- Dependency: method, clinical, behavioral-economics, legal/tax, privacy, accessibility/equity, partner, and user evidence.
- Merge order: T09 model, T06/T07 constraints, T08 diligence, T10 presentation.
- Eventually retained: unified reward safety/economics record after review.
- Eventually historical: duplicated candidate lists without full gates.
- Founder decision: preserve as future research, never essential-support or recovery status.
- Specialist decision: evidence, legality, tax, equity, fraud, and motivation effects.

## D14 - Community and Story Features

- Canonical owner: Thread 04; Thread 03 owns rights provenance.
- Duplicate locations: T03 mutual-aid/pathway docs; T04 peer/story docs; T08 ecosystem; T10 Connect/Learn views.
- Exact conflict: static stories, peer support, chosen support, and live community can be blurred into one feature despite different rights and operations.
- Proposed resolution: keep separate scopes and require purpose-specific benefit, rights, safety, moderation, staffing, privacy, withdrawal, and shutdown evidence.
- Dependency: safeguarding, community, legal/IP, privacy, staffing/cost, inclusion, and user research.
- Merge order: T03 rights, T04 safety, T08 alternatives, T10 later horizon.
- Eventually retained: rights/safety lifecycle and explicit no-live-first-MVE boundary.
- Eventually historical: generic `community` or `support network` recommendations.
- Founder decision: no proprietary live network in first MVE/MVP decision.
- Specialist decision: whether any later bounded experiment is justified.

## D15 - EUR1 and Free Access

- Canonical owner: Thread 09.
- Duplicate locations: T09 Cycle 1 EUR1/free core and Cycle 2/3 models; T10 payment exclusions; Cycle 3 coordination.
- Exact conflict: EUR1 can be read as a price promise or funding constraint despite unknown full cost and willingness to pay.
- Proposed resolution: accessibility principle and testable anchor only; first MVE collects no payment; essential safety/privacy rights remain free.
- Dependency: founder governance, user research, quotes, tax/entity, consumer/payment/store counsel, operations.
- Merge order: T09 decision before any product/pricing copy.
- Eventually retained: Cycle 3 interpretation and validated future evidence.
- Eventually historical: illustrative unit economics as dated assumptions, never forecasts.
- Founder decision: confirm accessibility principle, not binding price.
- Specialist decision: legal/tax/entity/payment and market-method review.

## D16 - Stage Sequence and MVP Meaning

- Canonical owner: `BL-UX-01` for stage gates; upstream owners control evidence.
- Duplicate locations: Issue #42; T01 recommendations; T05 research sequence; T10 Cycle 1/2/3; coordination reports.
- Exact conflict: earlier documents called a local web core an MVP; later work distinguishes MVE, adapter spikes, integrated prototype, and actual MVP decision.
- Proposed resolution: MVE preparation -> approved low-fidelity research -> separately approved synthetic adapter tests -> integrated research prototype gate -> actual MVP decision.
- Dependency: every upstream review and evidence gate.
- Merge order: canonical interfaces before T10 stage decision.
- Eventually retained: Cycle 3 staged map with independent review correction.
- Eventually historical: first-wedge/MVP recommendations from Cycle 1.
- Founder decision: no actual MVP selected.
- Specialist decision: each gate only within expertise; no reviewer approves the whole product alone.

## D17 - Verification Taxonomy

- Canonical owner: coordination/integration governance.
- Duplicate locations: all Cycle 1/2/3 artifacts and scorecards.
- Exact conflict: `Verified` and `Executed test result` were previously used for repository checks, source review, and proposed controls.
- Proposed resolution: use the classification in the Canonical Artifact Index; reserve executed tests for actual runs.
- Dependency: all future authors/reviewers.
- Merge order: taxonomy before reconciliation edits.
- Eventually retained: current active taxonomy plus score history.
- Eventually historical: prior labels preserved in historical files with a superseded note, not silently rewritten.
- Founder decision: accept conservative labels.
- Specialist decision: reviewers challenge classifications within their domain.

## D18 - Local Save, No-Save, and Accountless

- Canonical owner: `BL-PC-01` choice semantics; `BL-PLC-01` storage truth; `BL-UX-01` presentation.
- Duplicate locations: T06 five decisions; T07 first-MVE flow; T10 wireframes and protocol.
- Exact conflict: `local/no-save` is sometimes written as one mode; local browser storage can be synced, backed up, shared, or cleared and is not automatically private or durable.
- Proposed resolution: distinguish use-once/no-save, local save, and discard as separate research choices; explain tested storage behavior without promising anonymity or total deletion.
- Dependency: privacy/DPIA, low-fidelity comprehension, later named-browser implementation tests.
- Merge order: T06 choice, T07 data semantics, T10 copy.
- Eventually retained: reviewed choice model and tested implementation-specific disclosures.
- Eventually historical: slash-compressed language that obscures variants.
- Founder decision: keep accountless as first-MVE boundary, not cross-device continuity.
- Specialist decision: approve privacy wording and comprehension measures.

## Current Disposition

All 18 conflicts have a proposed owner and resolution. None is closed by this document. Founder decisions and specialist approvals remain explicit dependencies, and all source branch files remain unchanged.
