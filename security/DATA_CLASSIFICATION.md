# Data classification

Status: Cycle 1 Draft  
Issue: #22  
Branch: `codex/22-privacy-architecture`  
Research date: 2026-07-15  
Stage: architecture / privacy / security

## Statement Classification Key

Every material statement below is classified as one of: Verified, Evidence-supported, Platform limitation, Hypothesis, or Open question.

## Purpose

Classify identity, device, behavior, content-adjacent, inferred, ally, peer, clinical, and operational data.

## Architecture / Product Pre-Check

| Required element | Classification | Cycle 1 answer | Evidence |
| --- | --- | --- | --- |
| User problem | Evidence-supported | Adults want voluntary support during high-risk moments without shame, spyware, or clinical overclaiming. | README.md; PRODUCT_DOCTRINE.md; phase0/README.md |
| Expected benefit | Hypothesis | Classify identity, device, behavior, content-adjacent, inferred, ally, peer, clinical, and operational data. | Issue #22 |
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
| Verified | Sex life, sexual orientation, health, religion, biometrics, and inferred special-category data are high-risk privacy domains under UK/GDPR-style guidance. | ICO special category data guidance; GDPR Article 9 | Better Life must minimize and localize sensitive signals. |
| Verified | Phase 0 prohibits raw explicit-content storage and raw participant notes in external AI. | SAFETY_AND_CONSENT.md; RISK_REGISTER.md | Architecture must exclude raw explicit content by default. |
| Evidence-supported | Local-first processing is the default candidate for intimate signals, with cloud sync limited to user-visible policy state and non-explicit summaries. | Product doctrine; ICO minimization principles | Use cloud only when value justifies risk. |
| Open question | Jurisdiction-specific legal basis, DPIA, and data-transfer requirements need qualified review. | Privacy source pass | Do not claim legal compliance yet. |

## Source Register

| Classification | Source | Cycle 1 use |
| --- | --- | --- |
| Evidence-supported | https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/lawful-basis/special-category-data/what-is-special-category-data/ | Opened or identified during Cycle 1; source details need reviewer verification before public claims. |
| Evidence-supported | https://gdpr.eu/article-9-processing-special-categories-of-personal-data-prohibited/ | Opened or identified during Cycle 1; source details need reviewer verification before public claims. |
| Evidence-supported | https://www.fda.gov/medical-devices/digital-health-center-excellence/software-medical-device-samd | Opened or identified during Cycle 1; source details need reviewer verification before public claims. |

## Artifact-Specific Work To Complete

- Verified: The repository requires a Draft PR and independent review before this work can be accepted.
- Hypothesis: This artifact should become the canonical place for decisions about data classification after ChatGPT/founder review.
- Open question: Full acceptance depends on reviewer deductions, deeper source review, and any specialist review identified in the thread scorecard.

## Known Weaknesses

- Evidence-supported: This Cycle 1 draft prioritizes issue structure, safety boundaries, source register, and first-pass reasoning.
- Open question: It has not yet received ChatGPT review, founder validation, or specialist review.
- Open question: Some external sources may require deeper primary-source reading before a recommendation can pass the 95 threshold.
