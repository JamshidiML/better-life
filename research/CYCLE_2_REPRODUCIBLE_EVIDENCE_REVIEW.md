# Cycle 2 Reproducible Evidence Review

- Status: focused evidence update, not a systematic review
- Issue: #17
- Search date: 2026-07-15
- Reviewer: Codex, single reviewer
- Scope: load-bearing scientific claims, adverse/non-benefit evidence, and product language

## Classification

This document uses: `Source-verified fact`, `Evidence-supported conclusion`, `Repository decision`, `Founder decision`, `Founder decision pending`, `Design requirement`, `Proposed control`, `Hypothesis`, `Platform limitation`, `Open question`, `Repository-state verified`, `Research procedure executed`, `Desk-review observation`, `Executed test result`, and `Arithmetic check`.

Cycle 3 clarification: `Executed test result` is reserved for a real test with environment/version, input, expected result, observed result, evidence location, and pass/fail outcome. Repository inspections use `Repository-state verified`; documented searches use `Research procedure executed`; review observations use `Desk-review observation`.

## Reproducible Search Protocol

### Sources

- PubMed via NCBI E-utilities `esearch.fcgi`, database `pubmed`, JSON result, searched 2026-07-15.
- PubMed and PubMed Central records for abstracts/full text.
- WHO ICD-11 Clinical Descriptions and Diagnostic Requirements (CDDR), 2024 publication, re-checked 2026-07-15.
- Backward citation checking limited to the Cycle 1 load-bearing systematic reviews.

### Exact PubMed queries

`Q1 treatment`:

```text
("compulsive sexual behavior disorder"[Title/Abstract] OR "problematic pornography use"[Title/Abstract])
AND (treatment[Title/Abstract] OR psychotherapy[Title/Abstract] OR intervention[Title/Abstract])
```

`Q2 harms/non-benefit`:

```text
("problematic pornography use"[Title/Abstract] OR "compulsive sexual behavior"[Title/Abstract])
AND (adverse[Title/Abstract] OR harm[Title/Abstract] OR shame[Title/Abstract]
OR dropout[Title/Abstract] OR attrition[Title/Abstract] OR reactance[Title/Abstract])
```

`Q3 digital self-help trials`:

```text
"problematic pornography use"[Title/Abstract]
AND (web-based[Title/Abstract] OR online[Title/Abstract] OR self-help[Title/Abstract])
AND (randomized[Title/Abstract] OR trial[Title/Abstract])
```

### Research Procedure Executed: Search Results

| Query | ESearch count | Cycle 2 handling |
| --- | ---: | --- |
| Q1 | 139 | Candidate set recorded; no claim of complete dual screening. |
| Q2 | 53 | Candidate set recorded; focused review of harm-reporting and attrition sources. |
| Q3 | 6 | Digital self-help candidates reviewed against known Cycle 1 records. |

These counts are not deduplicated. Cycle 2 did not screen all 198 query hits. That is an unresolved methods defect, not hidden work.

### Eligibility rules

Include: adults; CSBD, PPU, or clearly defined related construct; intervention, guideline, systematic review, trial, instrument, moral-incongruence, adverse-effect, adherence, or digital self-help relevance; English abstract/full text available.

Exclude from product-effect inference: minors; frequency-only samples without a relevant construct; offense-specific/forensic populations unless used only to define a safety boundary; unrelated compulsive behavior; opinion without method; marketing; studies where the product mechanism cannot be separated.

### Screening and extraction

Single reviewer, title/abstract plus available full text for the selected load-bearing records. Extract population, design, comparator, intervention, outcome, follow-up, attrition/adherence, adverse reporting, bias/applicability, and Better Life transfer distance. No dual screening, protocol registration, independent risk-of-bias rating, or meta-analysis was performed.

## Source Flow

| Step | Count/status |
| --- | --- |
| Raw ESearch candidates | 139 + 53 + 6; overlap not removed |
| Full candidate screening | Not completed |
| Load-bearing records appraised in Cycle 2 | 5 records below plus WHO CDDR |
| Excluded at full text | Not enumerated; this prevents systematic-review claims |

## Study-Level Appraisal

| Record | Population/design | Comparator/outcome/follow-up | Attrition, harm, bias | Better Life implication |
| --- | --- | --- | --- |
| Bothe et al., Hands-off feasibility, PMID 34727088 | 264 randomized adults seeking help; automated six-week web self-help | Waitlist; PPU and secondary self-report outcomes; six-week follow-up | Only 11% of intervention participants versus 55% of controls completed six-week follow-up; differential attrition is severe. | Evidence-supported conclusion: digital delivery is feasible to study; benefit transfer is not justified and adherence is a major design risk. |
| Moritz et al., imaginal retraining, PMID 38669086 | 274 people seeking to reduce self-reported pornography use; online two-arm RCT | Waitlist; PPU at six weeks | Per-protocol result favored intervention, while the intention-to-treat analysis did not corroborate it; clinical-group applicability is limited. | Evidence-supported conclusion: a component may merit research, not a product efficacy claim. |
| Scanavino et al., psychotherapy/medication, PMID 36897612 | 135 men; randomized clinical treatment groups | Psychotherapy, medication, combined; 25 and 34 weeks | 42.2% dropped by week 25, 50.4% by week 34; 69.6% did not meet adherence definition; authors state limitations preclude efficacy conclusions. | Source-verified fact: clinician-led treatment evidence cannot be transferred to a self-help mode; adherence/non-benefit must be visible. |
| Roza et al., systematic review, PMID 37880509 | 28 studies, total n=500; 4 RCTs, many case reports/quasi-experiments | Psychological and pharmacological approaches | Overall evidence low/very low by GRADE; significant bias; most studies did not report side effects; online/self-help adherence problems. | Evidence-supported conclusion: claims must stay below clinical efficacy and explicitly note missing harm evidence. |
| Grubbs et al., moral incongruence meta-analysis, PMID 30076491 | Systematic review/meta-analytic model | Associations between moral incongruence and self-perceived problems | Does not explain every case and is not an intervention study. | Evidence-supported conclusion: avoid frequency/morality-based diagnosis and avoid dismissing genuine impairment. |

## Adverse, Non-Benefit, And Contradictory Evidence

| Area | Classification | Finding | Product rule |
| --- | --- | --- | --- |
| Side effects | Evidence-supported conclusion | The 2024 systematic review reports that most included studies did not report side effects. Absence of reports is not evidence of safety. | Prespecify shame, distress, rumination, reactance, care displacement, and functional burden. |
| Attrition | Source-verified fact | Hands-off showed very high and differential attrition; the clinical RCT also had high dropout/non-adherence. | Completion is not benefit; report denominator and reasons where available. |
| Null/non-robust effect | Source-verified fact | Imaginal retraining's ITT result did not corroborate the per-protocol result reported in the paper. | Preserve null analyses; no selective positive wording. |
| Moralization | Evidence-supported conclusion | Moral incongruence can contribute to self-perceived problems; it cannot be used to deny experienced impairment. | Test language across religious, non-religious, LGBTQ+, cultural, and help-seeking contexts. |
| Compulsive self-monitoring | Open question | The focused search did not establish direct PPU evidence for harm from repeated product tracking. | Treat as a prespecified adverse-effect hypothesis and offer no-history use. |
| Treatment displacement | Open question | Direct Better Life evidence is absent. | Product states non-replacement boundaries and tests whether copy delays help-seeking. |

## Protection-Language Appraisal

| Phrase | Risk classification | Cycle 2 rule | Preferred user-facing alternative |
| --- | --- | --- | --- |
| `self-control` | Potentially moralizing/pathologizing | Use only when quoting research or when the user chooses it. Do not imply character deficit. | `the change you chose` or `your plan` |
| `impulse` | Context-dependent | Acceptable in technical discussion; do not infer incapacity or diagnosis. | `a fast-changing urge` or `a difficult moment` |
| `high-risk moment` | Potentially clinical/alarming | Use in research protocol only with explanation; user language needs testing. | `a moment when your plan is harder to follow` |
| `precommitment` | Neutral but technical | Acceptable architecture term; not a clinical treatment. | `protect the decision I made while calm` |
| `friction` | Neutral product term with punishment risk | Must be finite, user-authored, proportionate, and reversible. | `Help me pause` |
| `cooling-off` | Generally neutral if chosen | Must show duration, pending state, cancel option, recovery, and expiry. | `the waiting period you chose` |
| `strict protection` | Potentially punitive/control-heavy | Never imply permanent control or a higher clinical severity. | `Protect my calm-state decision` |
| `recovery plan` | Potentially diagnostic/ideological | Keep as a research candidate, not default product label. | `Personal Protection Plan` pending user review |

## Claims Ceiling For The Three Modes

- Repository decision: no mode diagnoses, treats, cures, or prevents CSBD or PPU.
- Founder decision: the modes describe user-selected levels of product assistance.
- Hypothesis: Supportive Mode may aid reflection; Friction Mode may create time; Strict Mode may protect a prior decision.
- Open question: usefulness, harm, burden, shame, reactance, legitimate-use impact, and bypass behavior require user and technical evidence.

## Required External Review

Escalation required: CSBD clinical review, sexual-health/sex-therapy expertise, research-method review, diverse lived-experience review, accessibility review, user interviews, usability testing, and adverse-effect testing.

Decision: the focused update improves traceability but does not meet systematic-review standards and does not authorize participant-facing clinical claims.
