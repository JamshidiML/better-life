# First-user journey

Status: Cycle 1 Draft  
Issue: #25  
Branch: `codex/25-mvp-product-shape`  
Research date: 2026-07-15  
Stage: product / MVP definition

## Statement Classification Key

Every material statement below is classified as one of: Verified, Evidence-supported, Platform limitation, Hypothesis, or Open question.

## Purpose

Define a minutes-scale onboarding journey with consent, protection constitution, first rule, and exit visibility.

## Architecture / Product Pre-Check

| Required element | Classification | Cycle 1 answer | Evidence |
| --- | --- | --- | --- |
| User problem | Evidence-supported | Adults want voluntary support during high-risk moments without shame, spyware, or clinical overclaiming. | README.md; PRODUCT_DOCTRINE.md; phase0/README.md |
| Expected benefit | Hypothesis | Define a minutes-scale onboarding journey with consent, protection constitution, first rule, and exit visibility. | Issue #25 |
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
| Verified | The long-term vision includes a broad layered ecosystem, but the current phase forbids production features and requires first-wedge discipline. | VISION_TO_PRODUCT_MAP.md; EXECUTION_THREADS_01.md | MVP must be small and honest. |
| Evidence-supported | A web command center plus optional browser-extension path is the lowest-regret first candidate because it can express consent, education, reflection, and limited visible friction without overpromising full device control. | Thread 01 preliminary source pass; product doctrine | Recommend as provisional pending Thread 01 review. |
| Hypothesis | First user value is highest when onboarding ends with one user-authored protection rule, one repair plan, and one transparent exit path. | Phase 0 artifacts; Product Doctrine | Journey should finish in minutes. |
| Open question | Real users must validate whether the first wedge feels strong enough without mobile enforcement. | Phase 0 interview dependency | Founder should not approve MVP until user interviews test this. |

## Source Register

| Classification | Source | Cycle 1 use |
| --- | --- | --- |
| Evidence-supported | https://developer.apple.com/documentation/familycontrols | Opened or identified during Cycle 1; source details need reviewer verification before public claims. |
| Evidence-supported | https://developer.apple.com/documentation/managedsettings | Opened or identified during Cycle 1; source details need reviewer verification before public claims. |
| Evidence-supported | https://developer.apple.com/documentation/deviceactivity | Opened or identified during Cycle 1; source details need reviewer verification before public claims. |
| Evidence-supported | https://developer.apple.com/documentation/networkextension | Opened or identified during Cycle 1; source details need reviewer verification before public claims. |
| Evidence-supported | https://developer.android.com/reference/android/net/VpnService | Opened or identified during Cycle 1; source details need reviewer verification before public claims. |
| Evidence-supported | https://developer.android.com/reference/android/app/admin/DevicePolicyManager | Opened or identified during Cycle 1; source details need reviewer verification before public claims. |
| Evidence-supported | https://developer.android.com/reference/android/app/usage/UsageStatsManager | Opened or identified during Cycle 1; source details need reviewer verification before public claims. |
| Evidence-supported | https://developer.android.com/reference/android/accessibilityservice/AccessibilityService | Opened or identified during Cycle 1; source details need reviewer verification before public claims. |
| Evidence-supported | https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest | Opened or identified during Cycle 1; source details need reviewer verification before public claims. |
| Evidence-supported | https://developer.chrome.com/docs/extensions/reference/api/extension | Opened or identified during Cycle 1; source details need reviewer verification before public claims. |
| Evidence-supported | https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest | Opened or identified during Cycle 1; source details need reviewer verification before public claims. |
| Evidence-supported | https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/incognito | Opened or identified during Cycle 1; source details need reviewer verification before public claims. |
| Evidence-supported | https://developer.apple.com/documentation/safariservices/creating-a-content-blocker | Opened or identified during Cycle 1; source details need reviewer verification before public claims. |
| Evidence-supported | https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/lawful-basis/special-category-data/what-is-special-category-data/ | Opened or identified during Cycle 1; source details need reviewer verification before public claims. |
| Evidence-supported | https://gdpr.eu/article-9-processing-special-categories-of-personal-data-prohibited/ | Opened or identified during Cycle 1; source details need reviewer verification before public claims. |
| Evidence-supported | https://www.fda.gov/medical-devices/digital-health-center-excellence/software-medical-device-samd | Opened or identified during Cycle 1; source details need reviewer verification before public claims. |
| Evidence-supported | https://icd.who.int/browse/2026-01/mms/en | Opened or identified during Cycle 1; source details need reviewer verification before public claims. |
| Evidence-supported | https://www.who.int/standards/classifications/classification-of-diseases | Opened or identified during Cycle 1; source details need reviewer verification before public claims. |
| Evidence-supported | https://pubmed.ncbi.nlm.nih.gov/29316474/ | Opened or identified during Cycle 1; source details need reviewer verification before public claims. |

## Artifact-Specific Work To Complete

- Verified: The repository requires a Draft PR and independent review before this work can be accepted.
- Hypothesis: This artifact should become the canonical place for decisions about first-user journey after ChatGPT/founder review.
- Open question: Full acceptance depends on reviewer deductions, deeper source review, and any specialist review identified in the thread scorecard.

## Known Weaknesses

- Evidence-supported: This Cycle 1 draft prioritizes issue structure, safety boundaries, source register, and first-pass reasoning.
- Open question: It has not yet received ChatGPT review, founder validation, or specialist review.
- Open question: Some external sources may require deeper primary-source reading before a recommendation can pass the 95 threshold.
