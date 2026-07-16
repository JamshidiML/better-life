# Canonical Artifact Index

- Phase: Integration and Evidence Readiness
- Status: Proposed integration control; founder and specialist review required
- Source date: 2026-07-16
- Authorization: Documentation and protocol preparation only

## Boundary

This index names the source of truth for concepts duplicated across Draft PRs #30-#40. It does not merge those PRs, move their files, approve a product, or convert an untested design into evidence.

The source notation `commit:path` identifies the reviewed immutable branch snapshot. A canonical designation controls future reconciliation; it does not make the source branch merge-ready.

## Classification

- `Verified`: directly confirmed external fact with stated evidence.
- `Evidence-supported`: bounded conclusion supported by evidence, not Better Life efficacy.
- `Platform limitation`: externally imposed or technically unverified constraint.
- `Hypothesis`: testable proposition without sufficient Better Life evidence.
- `Open question`: unresolved decision or evidence gap.
- `Repository-state verified`: inspected repository, branch, file, or PR state.
- `Research procedure executed`: completed desk-research procedure with method and limits.
- `Executed test result`: actual test with frozen environment, input, expected and observed result, evidence, and disposition.

No adapter, participant, clinical, legal, privacy, security, accessibility, or market test is an executed result in this phase.

## Canonical Ownership

| Domain / ID | Owner | Immutable source | Scope owned | Status |
| --- | --- | --- | --- | --- |
| `BL-CAP-01` | Thread 01 / PR #30 | `a5a991e:architecture/CYCLE_3_ADAPTER_RESEARCH_READINESS.md` | Platform capability, adapter extensions, version applicability, limits, source IDs, conformance result references. | Proposed canonical interface; no adapter conformance result. |
| Evidence and living review | Thread 02 / PR #31 | `05c06ec:research/CYCLE_3_GLOBAL_BURDEN_AND_LIVING_EVIDENCE_ARCHITECTURE.md` | Claim certainty, transfer distance, harms, contradictions, burden comparability, update lifecycle. | Architecture ready; clinical/public-health/method review open. |
| Rights and pathway provenance | Thread 03 / PR #32 | `667b878:research/CYCLE_3_RIGHTS_AND_PATHWAY_RESEARCH_PROGRAM.md` | Source rights, Track A/Track B separation, provenance, non-affiliation, similarity and community review. | No permission, clearance, pathway, or affiliation approved. |
| Community and story safety | Thread 04 / PR #33 | `6983df1:security/CYCLE_3_LIVING_COMMUNITY_AND_STORY_GOVERNANCE.md` | Social authority, moderation, story lifecycle, abuse simulation, shutdown and teardown. | Live support and story collection prohibited. |
| `BL-MODE-01` | Thread 05 / PR #34 | `b7d14dd:product/CYCLE_3_PATHWAY_MODE_BOUNDARIES.md` | Mode meaning, exact copy, eligibility, transitions, cooling candidates, recovery invariants. | Supportive research only; Friction/Strict enforcement prohibited. |
| `BL-PC-01` | Thread 06 / PR #35 | `210e1ce:product/CYCLE_3_ADAPTIVE_PATHWAY_AND_REWARD_SAFETY.md` | User-owned plan/pathway, five-decision MVE, naming research, stage choice, conflict semantics. | Draft research instrument; no participant evidence. |
| `BL-PLC-01` | Thread 07 / PR #36 | `6740c0b:architecture/CYCLE_3_CANONICAL_PROTECTION_LAYER_AND_LEARNING_GOVERNANCE.md` | Data, purpose, consent, inventory, health, recovery, learning, retention, deletion, teardown. | Design baseline; no DPIA, compliance, security, or teardown proof. |
| Ecosystem sentinels | Thread 08 / PR #37 | `512de00:research/CYCLE_3_LIVING_RECOVERY_ECOSYSTEM_EXPANSION.md` | Candidate taxonomy, source class, relationship state, hands-on status, diligence gates. | Sentinel desk sample only. |
| Economics, impact, rewards, growth | Thread 09 / PR #38 | `5ea3017:business/CYCLE_3_IMPACT_REWARDS_AND_ETHICAL_GROWTH_MODEL.md` | Cost provenance, EUR1 status, reward/partner economics, impact and ethical-growth gates. | Illustrative hypotheses; no quote, price, impact, or partner proof. |
| `BL-UX-01` | Thread 10 / PR #39 | `4f6a4b0:product/CYCLE_3_LIVING_RECOVERY_PRODUCT_MAP.md` | User presentation, information architecture, MVE wireframes, research measures, stage gates. | Draft research instruments pending specialist/ethics review; no MVP accepted. |

The Cycle 3 coordination source is `d53e34d:docs/execution/CYCLE_3_COORDINATION_REPORT.md`. The independent correction is the Cycle 3 review comment on PR #40: the five-decision form, wireframes, and v0.1 thresholds are version-controlled drafts for review, not frozen product or scientifically approved requirements.

## Interface Contracts

### `BL-CAP-01`

Must expose: platform family/version, adapter version, capability class, official source IDs, permission/entitlement, store-policy state, declared and unsupported actions, maintenance state, known bypasses, and last conformance result ID.

Consumes `BL-PLC-01` for consent, data, inventory, recovery, and teardown. It must not claim cross-platform equivalence or infer behavior from documentation alone.

### `BL-MODE-01`

Owns these exact labels:

- Supportive: `Guide me`
- Friction: `Help me pause`
- Strict: `Protect the decision I made while calm`

`Calm` is never inferred. Cooling candidates are immediate where appropriate, 15 minutes, 1 hour, 12 hours, 24 hours, 72 hours, next morning, end of a user-selected difficult window, fixed term, and scheduled review. No default is approved. Safety, accessibility, care, essential access, recovery, and exit cannot be delayed by ordinary downgrade friction.

### `BL-PC-01`

Owns the five draft MVE decisions: current help/goal, broad context, one Supportive action, one fallback, and local/use-once/discard choice. It also owns later optional pathway stages and version-conflict semantics.

No user-facing plan name is approved. `Recovery Plan` and `Protection Constitution` remain comparison candidates, not defaults.

### `BL-PLC-01`

Owns the contract for every future layer: identity; capability; benefit/evidence; data flow; purpose/legal questions; consent/control; permissions/security; health; essential access; recovery; inventory; retention/rights; learning; teardown; verification; exit.

The six purposes remain separate: personal adaptation, product analytics, safety monitoring, scientific research, model training, and public-health reporting. One purpose never authorizes another.

### `BL-UX-01`

Presents upstream truth without redefining it. Its first MVE surface is low fidelity, accountless where practical, local/no-save, Supportive-only, nonclinical, and free of enforcement, AI personalization, peer/ally/community, rewards, Twelve-Step delivery, sync, payment, and monitoring.

The MVE instruments and thresholds are `Draft for specialist and ethics review`. After approval they may be version-locked for a study; they are not product requirements or evidence of benefit.

## Consumption Rules

1. Consumers cite the canonical ID and version; they do not copy field definitions into a competing schema.
2. A consumer may add presentation or platform-specific fields only in its owned namespace.
3. Missing upstream truth appears as `Unknown`, `Unsupported`, `Blocked`, or `Not reviewed`, never a helpful default.
4. Safety, privacy, rights, and legal decisions cannot be weakened downstream.
5. Founder intent is a decision input, not clinical, technical, legal, market, or user evidence.
6. Specialist decisions are recorded with scope, reviewer competence, conflicts, date, conditions, and refresh trigger.
7. Existing branch documents remain unchanged until a later approved integration operation.

## Retention Classes

- `Canonical active`: the Cycle 3 owner artifact after approved integration and any review amendments.
- `Supporting active`: source registers, extraction tables, threat models, and protocols that supply canonical decisions.
- `Historical`: superseded Cycle 1/Cycle 2 recommendations, responses, and scorecards retained for audit.
- `Unintegrated source`: current status of every PR #30-#40 artifact in this branch.

No file is reclassified or moved by this index alone.
