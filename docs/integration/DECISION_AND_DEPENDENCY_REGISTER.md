# Decision and Dependency Register

- Phase: Integration and Evidence Readiness, Phase 4.1 amendment
- Status: Open for ChatGPT and founder review; specialist outreach not authorized

## Status Vocabulary

- `Adopted boundary`: active repository constraint, not external evidence.
- `Proposed`: author recommendation awaiting decision.
- `Founder confirmation`: founder must confirm, revise, or reject.
- `Specialist gated`: qualified review is mandatory.
- `User-research gated`: approved participant evidence is mandatory.
- `Deferred`: intentionally outside the current phase.
- `Rejected`: must not be reintroduced under another label.
- `Open question`: no responsible decision yet.
- `Blocked`: a mandatory prerequisite, owner, approval, or evidence item is absent; no affected activity may proceed.

## Decisions

| ID | Decision | Status | Owner | Dependencies / evidence | Revisit trigger |
| --- | --- | --- | --- | --- | --- |
| P4-D01 | Use the five canonical interfaces and owner split in the index. | Proposed; founder confirmation | Founder + architecture lead | ChatGPT cross-branch consistency review | Owner conflict or interface change |
| P4-D02 | First MVE remains low fidelity, Supportive-only, local/no-save, accountless where practical, nonclinical, with no enforcement, AI personalization, peer, rewards, Twelve-Step delivery, sync, payment, or monitoring. | Adopted boundary; founder confirmation | Founder | Specialist protocol review before any study | Founder revision or safety finding |
| P4-D03 | Five decisions, wireframes, and thresholds are draft research instruments, not frozen product requirements. | Adopted independent-review correction | Methods/ethics owner | PR #40 Cycle 3 review | Approved protocol version |
| P4-D04 | Exact mode copy remains the Cycle 3 wording. | Founder confirmation; specialist/user-research gated | Founder + T05 owner | Clinical, coercion, accessibility, language, user review | Material misunderstanding/harm |
| P4-D05 | Calmness is never inferred; Strict setup uses observable user-controlled events only. | Adopted boundary | Safety/privacy owners | Clinical/ethics/coercion review | Any proposal to infer state/capacity |
| P4-D06 | No cooling default is selected. | Adopted boundary; future user-research gate | T05 owner | Approved Friction research, specialist review | Incremental benefit/safety evidence |
| P4-D07 | Ally Levels 3-4/co-approval/recovery-share custody remain prohibited, regardless of label. | Rejected capability | Safety/security owners | Coercive-control and security review may strengthen, not silently waive | Explicit founder plus qualified multi-specialist reconsideration |
| P4-D08 | No user-facing name for the plan/pathway is approved. | User-research gated | Product/method owners | Naming study and clinical/plain-language review | Reviewed naming evidence |
| P4-D09 | Use paper/no-tool as a candidate comparator, not an approved design. | Open question; specialist gated | Methods reviewer | Comparator ethics, order/carryover, construct validity | Methods decision |
| P4-D10 | Preserve v0.1 thresholds as superseded history; use Category A case-based individual failures, Category B formative usability signals, and Category C descriptive outcomes. No B/C percentage or result validates the study or authorizes progression. | Adopted Phase 4.1 correction; specialist gated | Methods/ethics/safety owners | Measurement validity, case adjudication, sample, adverse events, interpretation | Reviewer output or protocol amendment |
| P4-D11 | Do not recruit or contact participants in Phase 4. | Adopted boundary | Founder/research owner | Approved protocol, ethics, safety, privacy, recruitment readiness | Written authorization after gates |
| P4-D12 | Do not execute adapter tests in Phase 4. | Adopted boundary | Founder/platform owner | Approved protocols, frozen environments, security/teardown review | Written test authorization |
| P4-D13 | Every adapter run uses an approved immutable run manifest; any mandatory blank, inferred, `latest`, inconsistent, expired, or changed field blocks the run. | Adopted Phase 4.1 preparation rule; platform review | Security/platform owner | Exact environment, artifacts, fixture, approvals and hashes | Platform reviewer decision or environment change |
| P4-D14 | Prepare the dedicated iOS official-controls synthetic feasibility protocol before the first adapter execution wave; do not execute it in Phase 4.1. Safari testing never substitutes for iPhone-wide control evidence. | Founder working decision recorded; execution blocked | Founder + security/platform owner | Official-source refresh, entitlement/store/account/device scope, security/privacy review and separate authorization | Founder revision, official-platform change, or pre-wave review |
| P4-D15 | Use only IANA-reserved synthetic names, isolated fixtures, and test accounts. | Proposed safety boundary | Security/platform owners | Platform/security review | Protocol amendment |
| P4-D16 | EUR1 remains an accessibility principle/testable anchor, not a price or constraint. | Founder confirmation | Founder + T09 owner | WTP, full cost, tax/entity/payment review | Validated pricing evidence |
| P4-D17 | No Track A fellowship content and no Track B pathway enters MVE-01. | Adopted boundary | Rights/product owners | Item-level IP/community, similarity, clinical, safety review | Later approved pathway protocol |
| P4-D18 | No specialist is represented as contacted, retained, approving, or affiliated until a documented engagement occurs. | Adopted boundary | Review coordinator | COI and output record | Actual engagement |
| P4-D19 | Existing PRs #30-#40 remain Draft and unmerged. | Adopted boundary | Founder/repository owner | Current independent review and 95/zero-High policy | Deliberate later merge decision |
| P4-D20 | Phase 4 self-score cannot close external High gates. | Adopted quality rule | Author/reviewer | Quality Loop | Independent review and evidence |
| P4-D21 | Every specialist pack is delivered through `BL-RBM-01` with exact source IDs, immutable commits/paths/permalinks, integrity, access, rights and refresh controls. | Adopted Phase 4.1 preparation rule; outreach blocked | Review coordinator (`Unassigned`) | ChatGPT/founder acceptance; source-access validation; no restricted/copyrighted copying | Source/version/access/rights/reviewer-scope change |
| P4-D22 | Specialist responses use `BL-SRR-01`; disagreements use `BL-SCEP-01`, preserve both opinions and never average or waive non-waivable gates. | Adopted Phase 4.1 governance rule | Review coordinator (`Unassigned`) + applicable decision owner | Qualified scoped responses and conflict records | Review, conflict, law, evidence or expiry change |
| P4-D23 | All MVE governance roles are mandatory and currently `Unassigned`; no participant activity is possible until applicable roles, backups, competence, conflicts, approvals and expiry are complete. | Adopted Phase 4.1 authorization boundary; blocked | Sponsor/final authorization owner (`Unassigned`) | `MVE_01_GOVERNANCE_AND_AUTHORIZATION_MATRIX.md` and every external gate | Valid complete written authorization or role status change |
| P4-D24 | Adapter execution requires approved run, result/evidence and synthetic-fixture records; raw captures remain outside GitHub. | Adopted Phase 4.1 preparation rule; execution blocked | Security/platform/evidence owners (`Unassigned`) | Approved fixture, evidence system, exact manifests, teardown and separate authorization | Protocol/template/environment/evidence-system change |

## Dependency Register

| Dependency | Blocks | Required output | Current state |
| --- | --- | --- | --- |
| Review coordination and bundle access | Any specialist outreach | Assigned coordinator; ChatGPT/founder acceptance; exact bundle/access/right validation | Manifest/templates prepared; coordinator `Unassigned`; outreach blocked |
| Clinical and CSBD review | MVE copy, measures, adverse-event plan, care boundaries | Scoped `BL-SRR-01` decision with claim/copy amendments | Pack versioned; not requested from a reviewer yet |
| Research method and ethics | MVE design, sample, comparator, decision categories, analysis | Scoped `BL-SRR-01` decision with rationale | Pack versioned; not requested from a reviewer yet |
| Fellowship/IP/community | Any Track A/B participant content or public rights claim | Item-level rights/affiliation/similarity disposition | No permission or legal opinion |
| EU/German privacy/DPIA | Research data, local storage claims, future analytics/safety flows | Legal-basis/DPIA/rights/retention decisions | Open |
| Security/platform | Adapter execution and any capability claim beyond docs | Protocol/fixture/environment/evidence approval and later test evidence | Templates/iOS protocol prepared; no review or test executed |
| Coercive-control/safety | Modes, recovery, ally concepts, recruitment safety | Abuse-case and stop-rule decision | Open |
| Accessibility/inclusion | MVE instruments, accommodations, subgroup progression | Critical-task and inclusion review | Open |
| Public health/impact | Burden, outcomes, impact and savings language | Method/claim-ceiling review | Open |
| MVE institutional governance | Recruitment, contact and every participant operation | Qualified assigned roles, backups, approvals, expiry and final written authorization | All roles `Unassigned`; participant activity blocked |
| Founder | Canonical ownership, MVE boundary, copy, EUR1, iOS protocol decision, sequence and Phase 4.1 amendment | Confirm/revise/reject each named decision | iOS working decision recorded; remaining decisions open |
| ChatGPT | Cross-artifact consistency and Quality Loop review | Phase 4 independent score plus Phase 4.1 disposition | Phase 4 scored 87/100; Phase 4.1 review requested |

## Assumption Log

| ID | Assumption | Classification | Risk if false | Validation / owner |
| --- | --- | --- | --- | --- |
| P4-A01 | Stable interface IDs can reduce drift before source branches are merged. | Hypothesis | IDs mask unresolved semantic conflict. | ChatGPT/founder cross-document review |
| P4-A02 | A five-decision low-fidelity flow is small enough for formative review. | Hypothesis | Excess burden or false simplicity. | Methods/accessibility/user research |
| P4-A03 | Broad/synthetic labels can avoid collecting explicit intimate detail while preserving task meaning. | Hypothesis | Research lacks relevance or still elicits disclosure. | Clinical/ethics/privacy review |
| P4-A04 | Paper/no-tool can be a useful comparison. | Hypothesis | Comparator is unfair, unsafe, or confounded. | Methods/ethics review |
| P4-A05 | Reserved synthetic domains and isolated fixtures can test adapter mechanics. | Hypothesis | Platform behavior differs from real domains/apps. | Platform/security review and later test limits |
| P4-A06 | Freezing exact versions immediately before execution balances reproducibility and platform churn. | Hypothesis | Review becomes stale or builds disappear. | Platform reviewer |
| P4-A07 | Review packs are sufficiently bounded for independent specialists. | Hypothesis | Reviewer scope overload or cross-domain gaps. | Reviewer feedback |
| P4-A08 | No participant or adapter execution is necessary to complete readiness documentation. | Repository decision | Readiness could be mistaken for evidence. | Explicit labels and independent review |
| P4-A09 | The manifest and immutable source links make each pack practically reviewable for an authorized reviewer. | Hypothesis | Access, scope or document volume still blocks useful review. | Coordinator access test and first scoped reviewer feedback |
| P4-A10 | The 19-role governance matrix is sufficient to expose institutional responsibility before MVE authorization. | Hypothesis | A jurisdiction/institution requires additional or differently separated authority. | Ethics, sponsor, counsel and methods review |

## Risk Log

| ID | Severity | Risk | Current control | Unresolved owner / exit |
| --- | --- | --- | --- | --- |
| P4-R01 | High | Integration language is mistaken for merge/product approval. | Draft/unmerged/no-authorization labels. | Founder/ChatGPT; stop integration if ambiguity remains. |
| P4-R02 | High | Draft MVE instruments are treated as validated or participant-ready. | Independent correction repeated in index/protocol. | Methods/ethics; no recruitment until approval. |
| P4-R03 | High | Sensitive disclosure occurs during future research. | Broad labels, optional skip, facilitator interruption, no explicit-detail questions. | Clinical/ethics/privacy; stop and amend protocol. |
| P4-R04 | High | Coercive partner or unsafe household compromises consent/privacy. | Private eligibility and withdrawal planning; no ally/contact. | Coercive-control specialist; block unsafe recruitment context. |
| P4-R05 | High | Adapter protocol creates lockout, orphaned controls, or real traffic exposure. | Synthetic isolated environments, teardown-first approval, stop rules. | Security/platform; do not execute until approved. |
| P4-R06 | High | Fellowship content is copied or affiliation implied. | No pathway in MVE; Track A/B gates. | IP/community; remove/hold unresolved material. |
| P4-R07 | High | `local` or `no-save` overstates privacy/deletion. | Variant separation and implementation-specific proof requirement. | Privacy/DPIA; revise copy before research. |
| P4-R08 | High | Specialist review is fragmented and contradictory. | `BL-SRR-01` plus `BL-SCEP-01`; preserve opinions, classify conflict and block non-waivable disagreement. | Review coordinator (`Unassigned`) and applicable authority; do not blend disagreements. |
| P4-R09 | Medium | Protocol volume creates false completeness. | Score deductions for absent evidence and explicit next actions. | ChatGPT/founder; retire redundant artifacts. |
| P4-R10 | Medium | Platform versions or policies change before tests. | Run-manifest freeze, source refresh, expiry triggers. | T01/platform reviewer; re-review or stop. |
| P4-R11 | Medium | MVE thresholds create false precision in a small formative study. | A/B/C separation; v0.1 values preserved only as superseded history; no B/C pass. | Methods/ethics reviewer; validate categories and interpretation. |
| P4-R12 | Medium | Source-branch history is lost during later integration. | Immutable locators and historical disposition. | Repository owner; stop destructive reconciliation. |
| P4-R13 | High | A reviewer cannot access an unmerged source, receives stale material, or is sent restricted/copyrighted content. | `BL-RBM-01` exact commits, hashes, access/rights fields, bounded tables and pre-outreach validation. | Review coordinator (`Unassigned`); block pack until access/rights validation. |
| P4-R14 | High | An unassigned or conflicted role is treated as implicit MVE authorization. | All governance rows explicitly `Unassigned`; final authorization fails on absence/inconsistency/expiry. | Sponsor/ethics/final authorization owners; no participant activity. |

## Decision Rule

An unresolved dependency remains visible. Founder confirmation cannot waive specialist safety, privacy, legal, clinical, security, accessibility, coercion, or ethics gates. A specialist decision applies only to the scope and competence recorded in that reviewer's output.
