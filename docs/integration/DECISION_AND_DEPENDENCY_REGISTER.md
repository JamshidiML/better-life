# Decision and Dependency Register

- Phase: Integration and Evidence Readiness, Phase 4.1 amendment
- Version: `0.3`
- Status: Founder working decisions recorded; Specialist Review Wave 1A preparation and bounded outreach founder-authorized; pack delivery remains blocked until required operational controls are complete

## Status Vocabulary

- `Adopted boundary`: active repository constraint, not external evidence.
- `Founder decision`: a founder working decision for the stated research-stage scope; not specialist evidence or authorization outside that scope.
- `Repository decision`: a mandatory repository workflow or documentation rule; not external evidence.
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
| P4-D01 | Use the five canonical interfaces, artifact owners, and proposed integration sequence for the current research stage. | Founder decision; accepted for current research stage | Canonical artifact owners | Founder confirmation dated 2026-07-19; independent cross-artifact review | Owner conflict, interface change, or later integration decision |
| P4-D02 | MVE-01 remains low fidelity, Supportive-only, accountless where practical, and nonclinical, with no enforcement, AI personalization, peer networking, rewards, Twelve-Step delivery, sync, payment, or monitoring. | Founder decision; adopted research-stage boundary | Founder decision record; applicable MVE owners remain `Unassigned` | Specialist protocol review before any study | Founder revision or safety finding |
| P4-D03 | Five decisions, wireframes, and thresholds are draft research instruments, not frozen product requirements. | Adopted independent-review correction | Methods/ethics owner | PR #40 Cycle 3 review | Approved protocol version |
| P4-D04 | Current Mode labels remain research copy and are not final product language. | Founder decision; specialist/user-research gated | T05 owner | Clinical, coercion, accessibility, language, and later user review | Material misunderstanding, harm, or naming evidence |
| P4-D05 | Better Life never infers that a user is calm, rational, irrational, impaired, incapable, or out of control; setup uses observable user-controlled events only. | Founder decision; adopted safety boundary | Safety/privacy owners (`Unassigned`) | Clinical/ethics/coercion review | Any proposal to infer state, capacity, impairment, or control |
| P4-D06 | No default cooling-off duration is approved. | Founder decision; future user-research gate | T05 owner | Approved Friction research and specialist review | Incremental benefit/safety evidence |
| P4-D07 | Trusted-ally Levels 3 and 4, including co-approval and recovery-key custody, remain prohibited regardless of label. | Founder decision; rejected capability | Safety/security owners (`Unassigned`) | Coercive-control and security review may strengthen, not silently waive | Explicit founder plus qualified multi-specialist reconsideration |
| P4-D08 | No final public name for the personal plan or pathway is approved. | Founder decision; user-research gated | Product/method owners | Naming study and clinical/plain-language review | Reviewed naming evidence |
| P4-D09 | Use paper/no-tool as a candidate comparator, not an approved design. | Open question; specialist gated | Methods reviewer | Comparator ethics, order/carryover, construct validity | Methods decision |
| P4-D10 | Preserve v0.1 thresholds as superseded history; use Category A case-based individual failures, Category B formative usability signals, and Category C descriptive outcomes. No B/C percentage or result validates the study or authorizes progression. | Adopted Phase 4.1 correction; specialist gated | Methods/ethics/safety owners | Measurement validity, case adjudication, sample, adverse events, interpretation | Reviewer output or protocol amendment |
| P4-D11 | Do not recruit or contact participants in Phase 4. | Adopted boundary | Research/final authorization owners (`Unassigned`) | Approved protocol, ethics, safety, privacy, recruitment readiness | Written authorization after gates |
| P4-D12 | Do not execute adapter tests in Phase 4. | Adopted boundary | Test authorization/security/platform owners (`Unassigned`) | Approved protocols, frozen environments, security/teardown review | Written test authorization |
| P4-D13 | Every adapter run uses an approved immutable run manifest; any mandatory blank, inferred, `latest`, inconsistent, expired, or changed field blocks the run. | Repository decision; platform review and execution authorization still required | Security/platform owner (`Unassigned`) | Exact environment, artifacts, fixture, approvals and hashes | Platform reviewer decision or environment change |
| P4-D14 | Retain the dedicated iOS official-controls feasibility protocol for future review; do not assume Apple entitlement, App Store approval, or technical feasibility, and do not execute it under this authorization. Safari testing never substitutes for iPhone-wide control evidence. | Founder decision; future review accepted; execution blocked | Security/platform owner (`Unassigned`) | Official-source refresh, entitlement/store/account/device scope, security/privacy review and separate authorization | Founder revision, official-platform change, or pre-wave review |
| P4-D15 | Use only IANA-reserved synthetic names, isolated fixtures, and test accounts. | Proposed safety boundary | Security/platform owners | Platform/security review | Protocol amendment |
| P4-D16 | EUR1 remains an accessibility principle and research price anchor, not a promised product price. | Founder decision; adopted research-stage boundary | T09 owner | WTP, full cost, tax/entity/payment review | Validated pricing evidence |
| P4-D17 | No Track A fellowship content and no Track B pathway enters MVE-01. | Adopted boundary | Rights/product owners | Item-level IP/community, similarity, clinical, safety review | Later approved pathway protocol |
| P4-D18 | No specialist is represented as contacted, retained, approving, or affiliated until a documented engagement occurs. | Adopted boundary | Founder as Administrative Review Coordinator | COI and output record | Actual engagement |
| P4-D19 | Existing PRs #30-#40 and PR #45 remain Draft and unmerged. | Founder decision; adopted boundary | Repository merge owner (`Unassigned`) | Current independent review and 95/zero-High policy | Deliberate later merge decision by a validly assigned owner |
| P4-D20 | Phase 4 self-score cannot close external High gates. | Adopted quality rule | Author/reviewer | Quality Loop | Independent review and evidence |
| P4-D21 | Every specialist pack is delivered through `BL-RBM-01` with exact source IDs, immutable commits/paths/permalinks, integrity, access, rights and refresh controls. | Repository decision; Wave 1A founder-authorized; delivery preflight blocked | Founder as Administrative Review Coordinator; restricted record custodian `Unassigned` | Source-access/right/refresh validation; assigned restricted custodian; no restricted/copyrighted copying | Source/version/access/rights/reviewer-scope change |
| P4-D22 | Specialist responses use `BL-SRR-01`; disagreements use `BL-SCEP-01`, preserve both opinions and never average or waive non-waivable gates. | Repository decision | Founder as Administrative Review Coordinator + applicable decision owner (`Unassigned` until validly assigned) | Qualified scoped responses and conflict records | Review, conflict, law, evidence or expiry change |
| P4-D23 | All MVE governance roles are mandatory and currently `Unassigned`; no participant activity is possible until applicable roles, backups, competence, conflicts, approvals and expiry are complete. | Adopted Phase 4.1 authorization boundary; blocked | Sponsor/final authorization owner (`Unassigned`) | `MVE_01_GOVERNANCE_AND_AUTHORIZATION_MATRIX.md` and every external gate | Valid complete written authorization or role status change |
| P4-D24 | Adapter execution requires approved run, result/evidence and synthetic-fixture records; raw captures remain outside GitHub. | Repository decision; execution blocked | Security/platform/evidence owners (`Unassigned`) | Approved fixture, evidence system, exact manifests, teardown and separate authorization | Protocol/template/environment/evidence-system change |
| P4-D25 | The founder acts only as Administrative Review Coordinator unless another role is explicitly and validly assigned. This assignment confers no specialist, MVE, custody, safety, ethics, evidence, test, or final-authorization authority. | Founder decision; administrative assignment | Founder | Separate written assignment plus competence, conflict, approval, backup, and expiry controls for any additional role | Valid role-assignment record |
| P4-D26 | Specialist Review Wave 1A preparation and bounded outreach are founder-authorized. This does not authorize participant recruitment/research, adapter or fixture execution, production implementation, clinical activity, sensitive-data collection, or merging PR #45 or PRs #30-#40. | Founder decision; bounded authorization | Founder as Administrative Review Coordinator | Exact Wave 1A pack IDs/scopes, successful pack preflight, restricted record-custodian assignment, and reviewer-specific access before delivery | Authorization change, failed preflight, or scope expansion |
| P4-D27 | Which review-pack IDs and reviewer scopes constitute Specialist Review Wave 1A? | Open question; blocks pack delivery | Founder as Administrative Review Coordinator | Bounded written Wave 1A roster using existing pack IDs; no expansion beyond founder authorization | Roster approval or scope change |

## Dependency Register

| Dependency | Blocks | Required output | Current state |
| --- | --- | --- | --- |
| Wave 1A roster, review coordination, restricted record custody, and bundle access | Specialist pack delivery and response receipt | Exact Wave 1A pack IDs/scopes; assigned coordinator and restricted custodian; exact bundle/access/right/refresh validation | Founder assigned only as Administrative Review Coordinator; Wave 1A composition not recorded; custodian `Unassigned`; pack delivery blocked pending roster and preflight |
| Clinical and CSBD review | MVE copy, measures, adverse-event plan, care boundaries | Scoped `BL-SRR-01` decision with claim/copy amendments | Pack versioned; not requested from a reviewer yet |
| Research method and ethics | MVE design, sample, comparator, decision categories, analysis | Scoped `BL-SRR-01` decision with rationale | Pack versioned; not requested from a reviewer yet |
| Fellowship/IP/community | Any Track A/B participant content or public rights claim | Item-level rights/affiliation/similarity disposition | No permission or legal opinion |
| EU/German privacy/DPIA | Research data, local storage claims, future analytics/safety flows | Legal-basis/DPIA/rights/retention decisions | Open |
| Security/platform | Adapter execution and any capability claim beyond docs | Protocol/fixture/environment/evidence approval and later test evidence | Templates/iOS protocol prepared; no review or test executed |
| Coercive-control/safety | Modes, recovery, ally concepts, recruitment safety | Abuse-case and stop-rule decision | Open |
| Accessibility/inclusion | MVE instruments, accommodations, subgroup progression | Critical-task and inclusion review | Open |
| Public health/impact | Burden, outcomes, impact and savings language | Method/claim-ceiling review | Open |
| MVE institutional governance | Recruitment, contact and every participant operation | Qualified assigned roles, backups, approvals, expiry and final written authorization | All roles `Unassigned`; participant activity blocked |
| Founder | Canonical ownership/sequence, MVE boundary, Mode-copy status, prohibited inference, cooling, ally limits, naming, EUR1, iOS protocol, role boundary, and Wave 1A scope | Confirm/revise/reject each named decision | Founder decisions recorded 2026-07-19; founder assigned only as Administrative Review Coordinator |
| ChatGPT | Cross-artifact consistency and Quality Loop review | Phase 4 independent score plus Phase 4.1 disposition | Phase 4 scored 87/100; Phase 4.1 scored 90/100 and accepted internal readiness |

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
| P4-R08 | High | Specialist review is fragmented and contradictory. | `BL-SRR-01` plus `BL-SCEP-01`; preserve opinions, classify conflict and block non-waivable disagreement. | Founder as Administrative Review Coordinator plus applicable authority (`Unassigned` until validly assigned); do not blend disagreements. |
| P4-R09 | Medium | Protocol volume creates false completeness. | Score deductions for absent evidence and explicit next actions. | ChatGPT/founder; retire redundant artifacts. |
| P4-R10 | Medium | Platform versions or policies change before tests. | Run-manifest freeze, source refresh, expiry triggers. | T01/platform reviewer; re-review or stop. |
| P4-R11 | Medium | MVE thresholds create false precision in a small formative study. | A/B/C separation; v0.1 values preserved only as superseded history; no B/C pass. | Methods/ethics reviewer; validate categories and interpretation. |
| P4-R12 | Medium | Source-branch history is lost during later integration. | Immutable locators and historical disposition. | Repository owner; stop destructive reconciliation. |
| P4-R13 | High | A reviewer cannot access an unmerged source, receives stale material, or is sent restricted/copyrighted content. | `BL-RBM-01` exact commits, hashes, access/rights fields, bounded tables and pre-outreach validation. | Founder as Administrative Review Coordinator; restricted custodian `Unassigned`; block pack until custody and access/rights validation. |
| P4-R14 | High | An unassigned or conflicted role is treated as implicit MVE authorization. | All governance rows explicitly `Unassigned`; final authorization fails on absence/inconsistency/expiry. | Sponsor/ethics/final authorization owners; no participant activity. |

## Decision Rule

An unresolved dependency remains visible. Founder confirmation cannot waive specialist safety, privacy, legal, clinical, security, accessibility, coercion, or ethics gates. Administrative Review Coordinator assignment does not assign any MVE, specialist, custody, safety, ethics, evidence, test, or final-authorization role. A specialist decision applies only to the scope and competence recorded in that reviewer's output.
