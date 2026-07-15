# Evidence quality rubric

Status: Cycle 1 Draft
Issue: #17
Branch: `codex/17-evidence-map`
Purpose: prevent citation count from being mistaken for evidence strength

## Source hierarchy

| Tier | Classification | Typical source | Permitted use | Main caution |
| ---: | --- | --- | --- | --- |
| 5 | Verified | Current authoritative diagnostic, regulatory, or platform source | Establish the source owner's rule or definition | Authority in one domain does not prove product efficacy. |
| 4 | Evidence-supported | High-quality systematic review/meta-analysis or evidence-based guideline with transparent method | Support bounded synthesis claims | Heterogeneity, publication bias, source-study weakness, and population transfer remain. |
| 3 | Evidence-supported | Well-designed randomized or strong prospective comparative study | Support study-specific causal claims | Replication, attrition, comparator, outcome validity, and generalizability matter. |
| 2 | Evidence-supported | Observational, validation, qualitative, or uncontrolled intervention study | Support association, usability, measurement, or lived-experience claims | Does not by itself establish intervention effectiveness. |
| 1 | Hypothesis | Expert opinion, narrative review, professional practice description, or competitor report | Generate mechanisms and questions | Authority and plausibility are not proof. |
| 0 | Open question | Marketing copy, testimonial, unsourced web content, or internal belief | Discovery only | Must not support public scientific claims. |

## Study appraisal

Score each dimension 0-2. **Verified:** A high total does not override a critical ethical, safety, or applicability defect.

| Dimension | 0 | 1 | 2 |
| --- | --- | --- | --- |
| Construct clarity | Undefined/self-label only | Partial operational definition | Diagnostic or validated construct with exclusions stated |
| Population fit | Unclear or materially different | Some overlap | Target-relevant and diversity reported |
| Design | Anecdote/cross-sectional for causal claim | Uncontrolled or weak comparator | Appropriate controlled/prospective design |
| Bias control | Major unaddressed bias | Some safeguards | Transparent robust safeguards and sensitivity work |
| Outcome validity | Surrogate/author-created without support | Partially validated | Validated and user/clinical relevance justified |
| Harms and burden | Not measured | Mentioned incompletely | Prespecified and transparently reported |
| Attrition/missingness | Unreported or threatening | Reported with limited handling | Appropriate analysis and sensitivity checks |
| Precision | No uncertainty | Partial uncertainty | Effect estimates with intervals and multiplicity handled |
| Transparency | No protocol/data trail | Partial methods | Protocol/registration, reproducible methods, conflicts disclosed |
| Transfer distance | Different mechanism/context | Similar mechanism | Same mechanism, delivery, population, and setting |

### Interpretation

| Total | Classification | Decision |
| ---: | --- | --- |
| 17-20 | Evidence-supported | May support a bounded claim after specialist review; still not automatically transferable to Better Life. |
| 12-16 | Evidence-supported | Use with explicit limitations and corroboration. |
| 7-11 | Hypothesis | Mechanism generation or research design only. |
| 0-6 | Open question | Do not use for product or efficacy claims. |

## Review-level appraisal

| Check | Classification | Pass condition |
| --- | --- | --- |
| Search method | Verified | Databases, dates, terms, inclusion/exclusion, and screening process are reported. |
| Included-study quality | Verified | Risk of bias is assessed with a suitable method and affects conclusions. |
| Heterogeneity | Verified | Population, construct, intervention, comparator, and outcome differences are analyzed. |
| Synthesis | Verified | Pooling is justified; uncertainty and publication bias are addressed where possible. |
| Harms | Verified | Adverse effects, shame, treatment displacement, and reporting gaps are considered. |
| Applicability | Verified | Product transfer is separated from clinical or researcher-delivered intervention evidence. |

## Claim-strength ceiling

| Best available evidence | Maximum classification for Better Life claim |
| --- | --- |
| Better Life-specific replicated trials with acceptable harms and fit | **Evidence-supported**, not “guaranteed” or “proven for everyone.” |
| External intervention trials or synthesis | **Hypothesis** for the Better Life implementation until transfer is tested. |
| Observational/qualitative evidence | **Evidence-supported** for association/experience; **Hypothesis** for causality or efficacy. |
| Expert opinion or competitor practice | **Hypothesis** only. |
| Marketing/testimonial | **Open question** only. |

## Evidence record template

| Field | Requirement |
| --- | --- |
| Citation and stable link | **Verified:** full citation, DOI/PMID or authoritative URL, access/review date. |
| Claim supported | **Verified:** exact bounded claim, not a broad topic label. |
| Design and population | **Verified:** sample, setting, inclusion/exclusion, comparator, follow-up. |
| Construct and outcome | **Verified:** definition, instrument, timing, clinical/user relevance. |
| Result | **Verified:** direction, magnitude, uncertainty, and null/adverse findings. |
| Bias and limits | **Verified:** confounding, attrition, selective reporting, conflicts, transfer distance. |
| Product implication | **Hypothesis:** candidate mechanism plus the validation needed for Better Life. |
| Review state | **Verified:** researcher review, clinical review, user validation, expiry trigger. |

## Update and disagreement protocol

1. **Verified:** Preserve conflicting credible findings rather than averaging them into false certainty.
2. **Verified:** Record search cutoff and superseding sources; do not silently replace prior interpretations.
3. **Verified:** Downgrade the claim when applicability or harm reporting is weak, even if efficacy estimates are positive.
4. **Verified:** Require a second reviewer for claims that could imply diagnosis, treatment, crisis support, anonymity, or universal protection.
5. **Verified:** Reopen a claim when a key source is retracted, a guideline changes, the product mechanism changes, or new harm evidence appears.

## Cycle 1 rubric result

- **Evidence-supported:** WHO diagnostic terminology is the strongest anchor in the current map.
- **Evidence-supported:** Psychotherapy mechanisms have enough signal for cautious research hypotheses, not Better Life efficacy claims.
- **Open question:** Individual intervention studies have not yet been scored with this rubric.
- **Open question:** Independent clinical and methodological review remains required.
