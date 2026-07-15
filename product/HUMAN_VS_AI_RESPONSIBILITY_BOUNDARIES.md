# Human versus AI responsibility boundaries

Status: Cycle 1 Draft  
Issue: #18  
Branch: `codex/18-mutual-aid-model`  
Research date: 2026-07-15  
Stage: research / product principles

## Statement Classification Key

Every material statement below is classified as one of: Verified, Evidence-supported, Platform limitation, Hypothesis, or Open question.

## Purpose

Define where AI may support, where peers help, and where professionals or emergency services are required.

## Architecture / Product Pre-Check

| Required element | Classification | Cycle 1 answer | Evidence |
| --- | --- | --- | --- |
| User problem | Evidence-supported | Adults want voluntary support during high-risk moments without shame, spyware, or clinical overclaiming. | README.md; PRODUCT_DOCTRINE.md; phase0/README.md |
| Expected benefit | Hypothesis | Define where AI may support, where peers help, and where professionals or emergency services are required. | Issue #18 |
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
| Verified | Established fellowships protect autonomy, anonymity, non-professional identity, and non-affiliation with outside enterprises in their traditions. | AA Twelve Traditions; NA and SAA public resources | Better Life must not imply endorsement or copy fellowship identity. |
| Evidence-supported | General mechanisms worth learning from include shared experience, repeated meetings, availability, service, identity-safe participation, and hope through seeing others recover. | Mutual-aid source pass | Design principles can generalize mechanisms while avoiding imitation. |
| Hypothesis | A digital support layer can provide meeting discovery, preparation, reflection, and ally/peer scripts without replacing fellowship participation. | Product doctrine and Phase 0 support goals | Build augmentation, not a proprietary substitute for community. |
| Open question | Whether anonymous real-time peer matching is MVP-safe depends on Thread 04 threat modeling. | Issue #19 dependency | Do not recommend live anonymous matching until Thread 04 reaches review. |

## Source Register

| Classification | Source | Cycle 1 use |
| --- | --- | --- |
| Evidence-supported | https://www.aa.org/the-twelve-traditions | Opened or identified during Cycle 1; source details need reviewer verification before public claims. |
| Evidence-supported | https://www.aa.org/information-about-aa | Opened or identified during Cycle 1; source details need reviewer verification before public claims. |
| Evidence-supported | https://na.org/meetingsearch/ | Opened or identified during Cycle 1; source details need reviewer verification before public claims. |
| Evidence-supported | https://www.saa-recovery.org/our-program/twelve-traditions/ | Opened or identified during Cycle 1; source details need reviewer verification before public claims. |

## Artifact-Specific Work To Complete

- Verified: The repository requires a Draft PR and independent review before this work can be accepted.
- Hypothesis: This artifact should become the canonical place for decisions about human versus ai responsibility boundaries after ChatGPT/founder review.
- Open question: Full acceptance depends on reviewer deductions, deeper source review, and any specialist review identified in the thread scorecard.

## Known Weaknesses

- Evidence-supported: This Cycle 1 draft prioritizes issue structure, safety boundaries, source register, and first-pass reasoning.
- Open question: It has not yet received ChatGPT review, founder validation, or specialist review.
- Open question: Some external sources may require deeper primary-source reading before a recommendation can pass the 95 threshold.
