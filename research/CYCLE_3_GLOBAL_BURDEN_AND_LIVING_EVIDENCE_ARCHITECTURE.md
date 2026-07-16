# Cycle 3 Global Burden and Living Evidence Architecture

- Issue: #17
- Branch: `codex/17-evidence-map`
- Date: 2026-07-16
- Status: research architecture; not a systematic review, clinical conclusion, product claim, or implementation authorization
- Canonical owner: Thread 02

## Decision Frame

| Required question | Cycle 3 answer |
| --- | --- |
| User problem | Evidence relevant to recovery products changes, conflicts, and often does not transfer directly to a non-clinical product. |
| Expected benefit | A governed registry can expose certainty, applicability, harms, conflicts, and staleness before decisions are made. |
| Supporting evidence | Evidence-supported conclusion: living-review methods support planned continual surveillance and updating; GRADE supplies a structured certainty vocabulary. Neither establishes that this architecture works for Better Life. |
| Required data | Bibliographic records, reproducible queries, populations, interventions/exposures, comparators, outcomes, harms, certainty, source version, geography, denominator, and claim-decision links. |
| Consent requirements | Repository decision: public or lawfully licensed aggregate evidence only in the desk-research registry. Participant or user data requires a separate approved protocol and Thread 07 purpose-specific consent. |
| Safety risks | Clinical overclaiming, moralization, hidden adverse evidence, false comparability, treatment displacement, and stale guidance. |
| Misuse risks | Using population burden to label an individual, treating correlation as causation, or using a freshness indicator as an authority badge. |
| Platform feasibility | Platform limitation: APIs, classifications, licensing terms, and publication access change. A manual registry is feasible; automation remains an unvalidated future option. |
| Success metric | At least 95% of decision-bearing claims have an owner, source, certainty, transfer distance, next-review date, and contradiction status; zero claims are promoted automatically. |
| Exit strategy | Freeze a domain or retire a claim when it has no decision use, cannot be maintained lawfully, remains definitionally unstable, or repeatedly fails independent review. Preserve a versioned retirement reason. |

No product feature is proposed by this document. It defines the research system required before evidence can support a feature proposal.

## Bounded Research Questions

1. Evidence-supported conclusion: what intervention mechanisms, harms, and non-benefit findings are sufficiently supported to inform low-risk experiments without implying efficacy?
2. Open question: which population-level burden estimates are comparable enough to guide prioritization, and which must remain separate?
3. Open question: which evidence changes should alter a claim, experiment, safeguard, or exit decision?
4. Hypothesis: exposing contradiction and transfer distance will reduce unjustified product inference.

## Global Burden Registry

### Domain entry gate

A domain enters the registry only when every field below is present. Missing fields produce `Hold`, not extrapolation.

| Gate | Required record |
| --- | --- |
| Decision use | The prioritization, safeguard, research question, or exit decision the estimate may inform. |
| Definition | Named construct/classification and version; no informal synonym substitution. |
| Measure | Prevalence, mortality, morbidity, disability, treatment gap, economic harm, or another explicitly defined outcome. |
| Denominator | Population, age range, sex/gender reporting, geography, study year, and unit. |
| Source quality | Primary public-health source or traceable study; method and limitations recorded. |
| Comparability | `Comparable`, `Partially comparable`, `Not comparable`, or `Unreviewed`, with rationale. |
| Equity | Missing populations, cultural validity, criminalization/reporting effects, and access limitations. |
| Product boundary | Population burden does not establish individual diagnosis, need, causation, or Better Life effectiveness. |
| Review | Owner, reviewer, retrieval date, next review, conflict state, and retirement trigger. |

### Initial source families

| Source family | Classification | Intended use | Known limit |
| --- | --- | --- | --- |
| WHO alcohol fact sheet and Global Health Observatory | Source-verified fact | Alcohol mortality, morbidity, and policy context. | Estimates depend on model, year, geography, and alcohol-attributable fraction; do not combine casually with survey prevalence. |
| WHO tobacco fact sheet | Source-verified fact | Tobacco mortality and exposure context. | Product type and regional context vary; it is not an estimate of recovery demand. |
| UNODC World Drug Report methodology | Source-verified fact | Drug-use and disorder methods, uncertainty, and source provenance. | Illicit-market and reporting conditions affect comparability. |
| OECD Health at a Glance alcohol methods | Source-verified fact | Cross-country comparability cautions for recorded consumption. | Unrecorded consumption and survey/administrative differences remain. |
| WHO gaming-disorder FAQ | Source-verified fact | Classification boundary and public-health rationale for gaming disorder. | It does not establish a general category of all technology-related distress. |

Primary references:

- WHO, `Alcohol`: https://www.who.int/news-room/fact-sheets/detail/alcohol
- WHO, `Tobacco`: https://www.who.int/news-room/fact-sheets/detail/tobacco
- WHO Global Health Observatory, alcohol harms: https://www.who.int/data/gho/data/themes/topics/topic-details/GHO/harms-and-consequences
- UNODC, `World Drug Report 2025 Methodological Annex`: https://www.unodc.org/documents/data-and-analysis/WDR_2025/Annex/WDR2025_Methodological_Annex.pdf
- OECD, `Alcohol consumption`: https://www.oecd.org/en/publications/2023/11/health-at-a-glance-2023_e04f8239/full-report/alcohol-consumption_b2eb135e.html
- WHO, `Gaming disorder`: https://www.who.int/standards/classifications/frequently-asked-questions/gaming-disorder

Research procedure executed: these official source pages were opened on 2026-07-16 and reviewed for scope, provenance, and comparability cautions. This was a targeted desk review, not comprehensive burden extraction.

### Comparability prohibition

Repository decision: no global total may combine domains, sources, or years unless an independent public-health reviewer approves the construct, denominator, adjustment method, uncertainty, and decision use. `Not comparable` is a valid and preferred outcome when those conditions fail.

## Living Evidence Lifecycle

```text
Question -> Protocol -> Search -> Screen -> Extract -> Appraise -> Synthesize
        -> Independent review -> Claim decision -> Product/research link
        -> Surveillance -> Change assessment -> Version or retire
```

| Stage | Required evidence object | Release gate |
| --- | --- | --- |
| Question | Population, concept/intervention, comparator, outcomes, harms, decision use. | Scientific owner approves scope. |
| Protocol | Sources, exact queries, eligibility, deduplication, extraction, appraisal, conflicts. | Timestamped before the update search. |
| Search | Query, source, date, export/count, API/version, failure state. | Reproducible or explicitly marked non-reproducible. |
| Screen | Inclusion/exclusion reason and reviewer identity. | Dual review for decision-bearing systematic claims; otherwise label single-reviewer limitation. |
| Extract | Study/source characteristics, outcomes, harms, attrition, bias, applicability. | Source-linked and second-checked for pivotal records. |
| Appraise | Design-specific bias assessment plus body-of-evidence certainty. | Tool/version and reviewer recorded. |
| Synthesize | Effect/association, inconsistency, indirectness, imprecision, publication concerns. | No synthesis beyond data compatibility. |
| Decide | Keep, strengthen, weaken, split, suspend, or retire claim. | Human scientific and safety approval; founder approval where product doctrine changes. |
| Monitor | Saved searches, guideline/classification changes, retractions, major contradictory evidence. | Alert does not alter a claim automatically. |

Evidence-supported conclusion: Cochrane describes living systematic reviews as continually updated reviews supported by active surveillance. Source-verified fact: GRADE provides a framework for rating certainty in a body of evidence. Hypothesis: the combined lifecycle above is appropriate for Better Life; it requires independent methods review.

Primary references:

- Cochrane, `Conducting living systematic reviews`: https://www.cochrane.org/learn/courses-and-resources/interactive-learning/module-14-conducting-living-systematic-reviews
- GRADE Working Group: https://www.gradeworkinggroup.org/

## Claim Record

Every decision-bearing claim must include:

| Field | Allowed values or requirement |
| --- | --- |
| Claim ID and exact wording | Immutable ID; changes create a version. |
| Classification | Verified, Evidence-supported, Platform limitation, Hypothesis, or Open question, with the narrower active taxonomy where relevant. |
| Evidence body | Source IDs and last search date. |
| Certainty | High, moderate, low, very low, not assessed, or not applicable, with rationale. |
| Transfer distance | Direct, one-step indirect, multi-step indirect, or unsupported for Better Life. |
| Harms/non-benefit | Present, absent, not measured, or unknown; absence of reporting is not safety evidence. |
| Applicability | Population, language, culture, geography, setting, access, and excluded groups. |
| Contradiction state | None found, unresolved, reconciled, or search incomplete. |
| Decision link | Safeguard, experiment, metric, copy, prioritization, or no current use. |
| Governance | Owner, independent reviewer, next review, expiry, and retirement trigger. |

## Update Triggers and Cadence

- Immediate review: retraction, authoritative safety warning, classification/guideline change, strong contradictory pivotal evidence, or discovered rights/provenance defect.
- Quarterly surveillance candidate: active MVE claims and safety-critical mechanisms.
- Annual review candidate: burden domains and low-change contextual evidence.
- Event-driven only: domains with no active decision use.

Open question: these cadences have not been tested for workload or decision value. The scientific owner may lengthen, shorten, or stop them after two measured update cycles.

## Governance and Conflict Handling

- Repository decision: no model, alert, or crawler may promote a claim, product rule, or clinical statement without human review.
- Repository decision: funding source, reviewer conflict, source correction/retraction, and founder preference are visible fields.
- Proposed control: unresolved disagreement creates parallel interpretations and an escalation owner; it does not disappear into a blended conclusion.
- Proposed control: a public-health reviewer approves burden comparability; a methods reviewer approves synthesis; a qualified clinical reviewer approves clinical interpretation; lived-experience review challenges burden and harm assumptions.
- Platform limitation: lawful access and preservation depend on source terms. Store metadata and permitted extracts, not unauthorized full text.

## Cycle 3 MVE Boundary

`MVE` means `Minimum Viable Experiment`.

The first MVE remains small, local, accountless, practical, Supportive-only, and non-clinical. It has no enforcement, rewards, peer layer, model learning, burden personalization, diagnosis, or treatment claim. This evidence architecture may help define its protocol and stopping rules; it does not expand its scope.

## Verification and Terminal Status

- Repository-state verified: this branch contains research and documentation artifacts only.
- Research procedure executed: targeted official-source review was completed on 2026-07-16; source URLs and limits are recorded above.
- Desk-review observation: the architecture separates population burden, evidence certainty, transfer distance, product decisions, and automation authority.
- Not performed: systematic search, burden extraction, deduplication, dual screening, GRADE assessment, external methods review, clinical review, or lived-experience review.

Terminal status: **Ready for clinical, public-health, method, lived-experience, and MVE outcome review. Draft only; no clinical, product, or implementation authorization.**
