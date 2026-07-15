# Evidence quality rubric

Status: Cycle 1 Draft  
Issue: #17  
Branch: `codex/17-evidence-map`  
Research date: 2026-07-15  
Stage: research / clinical claim discipline

## Statement Classification Key

Every material statement below is classified as one of: Verified, Evidence-supported, Platform limitation, Hypothesis, or Open question.

## Purpose

Provide a rubric for future scientific sourcing and interpretation.

## Architecture / Product Pre-Check

| Required element | Classification | Cycle 1 answer | Evidence |
| --- | --- | --- | --- |
| User problem | Evidence-supported | Adults want voluntary support during high-risk moments without shame, spyware, or clinical overclaiming. | README.md; PRODUCT_DOCTRINE.md; phase0/README.md |
| Expected benefit | Hypothesis | Provide a rubric for future scientific sourcing and interpretation. | Issue #17 |
| Supporting evidence | Evidence-supported | Repository doctrine and initial source pass support the direction, but full review remains open. | Read-first docs and source list below |
| Required data | Hypothesis | Use only data needed for this artifact; default to local, user-visible, non-explicit data. | PRODUCT_DOCTRINE.md; SAFETY_AND_CONSENT.md |
| Consent requirements | Verified | Consent must be voluntary, specific, renewable/revocable where data sharing is involved, and include calm-state exit for strict controls. | phase0/SAFETY_AND_CONSENT.md |
| Safety risks | Verified | Shame, coercion, therapy replacement, privacy breach, and false confidence are standing risks. | phase0/RISK_REGISTER.md |
| Misuse risks | Verified | Hidden monitoring, partner spyware, public shame, and impossible-bypass promises are forbidden. | AGENTS.md; PRODUCT_DOCTRINE.md |
| Platform feasibility | Open question | Feasibility depends on this thread's topic and must not be generalized beyond evidence. | Thread deliverable scope |
| Success metric | Hypothesis | Artifact is useful when a reviewer can trace every recommendation to evidence, limitation, or explicit open question. | Quality loop docs |
| Exit strategy | Verified | If value cannot justify data or harm risk, the mechanism must be deferred, redesigned, or rejected. | QUALITY_SCORING_AND_IMPROVEMENT_LOOP.md |

## Cycle 1 Findings

| Classification | Finding | Evidence or source | Product implication |
| --- | --- | --- | --- |
| Verified | Better Life is not therapy, diagnosis, treatment, emergency response, or a cure. | README.md; PRODUCT_DOCTRINE.md; SAFETY_AND_CONSENT.md | Product copy must use behavior-change and self-regulation language. |
| Evidence-supported | ICD-11 is the authoritative international classification anchor for CSBD terminology, but product language should not diagnose users. | WHO ICD-11 pages | Use CSBD only as background, not as an onboarding label. |
| Hypothesis | CBT, ACT, mindfulness, motivational interviewing, relapse prevention, emotion regulation, and peer support may supply useful mechanisms for non-clinical product design. | Scientific strategy and preliminary source pass | Translate mechanisms into optional exercises, not treatment claims. |
| Open question | Evidence quality for problematic pornography use interventions needs full-text review and clinical interpretation before strong efficacy claims. | PubMed/source pass incomplete | Claims register should block effectiveness promises until reviewed. |

## Source Register

| Classification | Source | Cycle 1 use |
| --- | --- | --- |
| Evidence-supported | https://icd.who.int/browse/2026-01/mms/en | Opened or identified during Cycle 1; source details need reviewer verification before public claims. |
| Evidence-supported | https://www.who.int/standards/classifications/classification-of-diseases | Opened or identified during Cycle 1; source details need reviewer verification before public claims. |
| Evidence-supported | https://pubmed.ncbi.nlm.nih.gov/29316474/ | Opened or identified during Cycle 1; source details need reviewer verification before public claims. |
| Evidence-supported | https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/lawful-basis/special-category-data/what-is-special-category-data/ | Opened or identified during Cycle 1; source details need reviewer verification before public claims. |
| Evidence-supported | https://gdpr.eu/article-9-processing-special-categories-of-personal-data-prohibited/ | Opened or identified during Cycle 1; source details need reviewer verification before public claims. |
| Evidence-supported | https://www.fda.gov/medical-devices/digital-health-center-excellence/software-medical-device-samd | Opened or identified during Cycle 1; source details need reviewer verification before public claims. |

## Artifact-Specific Work To Complete

- Verified: The repository requires a Draft PR and independent review before this work can be accepted.
- Hypothesis: This artifact should become the canonical place for decisions about evidence quality rubric after ChatGPT/founder review.
- Open question: Full acceptance depends on reviewer deductions, deeper source review, and any specialist review identified in the thread scorecard.

## Known Weaknesses

- Evidence-supported: This Cycle 1 draft prioritizes issue structure, safety boundaries, source register, and first-pass reasoning.
- Open question: It has not yet received ChatGPT review, founder validation, or specialist review.
- Open question: Some external sources may require deeper primary-source reading before a recommendation can pass the 95 threshold.
