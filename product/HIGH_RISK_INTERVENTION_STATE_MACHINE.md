# High-risk intervention state machine

Status: Cycle 1 Draft  
Issue: #20  
Branch: `codex/20-protective-spiral`  
Research date: 2026-07-15  
Stage: product / intervention design

## Statement Classification Key

Every material statement below is classified as one of: Verified, Evidence-supported, Platform limitation, Hypothesis, or Open question.

## Purpose

Specify states, transitions, guards, fallbacks, and stop conditions.

## Architecture / Product Pre-Check

| Required element | Classification | Cycle 1 answer | Evidence |
| --- | --- | --- | --- |
| User problem | Evidence-supported | Adults want voluntary support during high-risk moments without shame, spyware, or clinical overclaiming. | README.md; PRODUCT_DOCTRINE.md; phase0/README.md |
| Expected benefit | Hypothesis | Specify states, transitions, guards, fallbacks, and stop conditions. | Issue #20 |
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
| Verified | Phase 0 requires calm, repair-oriented language and no punitive dark patterns. | phase0/RELAPSE_DEBRIEF_PROTOTYPE.md; SAFETY_AND_CONSENT.md | The spiral must reduce cognitive load and shame. |
| Evidence-supported | A high-risk intervention should present one clear primary action rather than a menu of escalating demands. | Issue #20; product doctrine | State machine should prioritize a single next action. |
| Hypothesis | A sequence of pause, grounding, values reminder, environment change, and optional support can help interrupt a lapse sequence. | Evidence map dependency not complete | Treat as product hypothesis pending Thread 02 and interviews. |
| Open question | Which intervention wording and order users find supportive requires Phase 0 interviews. | Phase 0 success criteria | Mark UX copy as prototype-only. |

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
- Hypothesis: This artifact should become the canonical place for decisions about high-risk intervention state machine after ChatGPT/founder review.
- Open question: Full acceptance depends on reviewer deductions, deeper source review, and any specialist review identified in the thread scorecard.

## Known Weaknesses

- Evidence-supported: This Cycle 1 draft prioritizes issue structure, safety boundaries, source register, and first-pass reasoning.
- Open question: It has not yet received ChatGPT review, founder validation, or specialist review.
- Open question: Some external sources may require deeper primary-source reading before a recommendation can pass the 95 threshold.
