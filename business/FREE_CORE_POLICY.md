# Free core policy

Status: Cycle 1 Draft  
Issue: #24  
Branch: `codex/24-business-model`  
Research date: 2026-07-15  
Stage: business / sustainability

## Statement Classification Key

Every material statement below is classified as one of: Verified, Evidence-supported, Platform limitation, Hypothesis, or Open question.

## Purpose

Define what must remain free and what cannot be paywalled.

## Architecture / Product Pre-Check

| Required element | Classification | Cycle 1 answer | Evidence |
| --- | --- | --- | --- |
| User problem | Evidence-supported | Adults want voluntary support during high-risk moments without shame, spyware, or clinical overclaiming. | README.md; PRODUCT_DOCTRINE.md; phase0/README.md |
| Expected benefit | Hypothesis | Define what must remain free and what cannot be paywalled. | Issue #24 |
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
| Verified | Apple Developer Program membership is listed by Apple as USD 99/year; Apple Small Business Program states a reduced 15% commission for eligible developers. | Apple Developer Program; Apple Small Business Program | Fixed and percentage platform fees matter for EUR 1 pricing. |
| Verified | Google Play service fees vary by transaction type and market; its help page states many developers qualify for 15% or less, with changed EEA/UK/US fee structures from June 30, 2026. | Google Play service fee page | Unit economics must be region- and channel-specific. |
| Evidence-supported | Stripe card processing on a EUR 1 price can be dominated by fixed per-transaction fees in some regions. | Stripe pricing page opened for EEA context | Monthly micro-payments may need annual billing, app-store billing, sponsorship, or donation alternatives. |
| Open question | VAT, German/EU legal form, insurance, clinical review, moderation staffing, and crisis-resource obligations require professional advice. | Business source pass | Do not commit to EUR 1 until cost experiments are run. |

## Source Register

| Classification | Source | Cycle 1 use |
| --- | --- | --- |
| Evidence-supported | https://developer.apple.com/programs/ | Opened or identified during Cycle 1; source details need reviewer verification before public claims. |
| Evidence-supported | https://developer.apple.com/support/compare-memberships/ | Opened or identified during Cycle 1; source details need reviewer verification before public claims. |
| Evidence-supported | https://developer.apple.com/app-store/small-business-program/ | Opened or identified during Cycle 1; source details need reviewer verification before public claims. |
| Evidence-supported | https://support.google.com/googleplay/android-developer/answer/112622?hl=en | Opened or identified during Cycle 1; source details need reviewer verification before public claims. |
| Evidence-supported | https://stripe.com/pricing | Opened or identified during Cycle 1; source details need reviewer verification before public claims. |

## Artifact-Specific Work To Complete

- Verified: The repository requires a Draft PR and independent review before this work can be accepted.
- Hypothesis: This artifact should become the canonical place for decisions about free core policy after ChatGPT/founder review.
- Open question: Full acceptance depends on reviewer deductions, deeper source review, and any specialist review identified in the thread scorecard.

## Known Weaknesses

- Evidence-supported: This Cycle 1 draft prioritizes issue structure, safety boundaries, source register, and first-pass reasoning.
- Open question: It has not yet received ChatGPT review, founder validation, or specialist review.
- Open question: Some external sources may require deeper primary-source reading before a recommendation can pass the 95 threshold.
