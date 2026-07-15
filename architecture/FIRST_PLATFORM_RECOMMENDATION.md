# First platform recommendation

Status: Cycle 1 Draft  
Issue: #13  
Branch: `codex/13-cross-device-feasibility`  
Research date: 2026-07-15  
Stage: architecture / technical feasibility

## Statement Classification Key

Every material statement below is classified as one of: Verified, Evidence-supported, Platform limitation, Hypothesis, or Open question.

## Purpose

Recommend a first wedge that remains useful without promising full cross-device control.

## Architecture / Product Pre-Check

| Required element | Classification | Cycle 1 answer | Evidence |
| --- | --- | --- | --- |
| User problem | Evidence-supported | Adults want voluntary support during high-risk moments without shame, spyware, or clinical overclaiming. | README.md; PRODUCT_DOCTRINE.md; phase0/README.md |
| Expected benefit | Hypothesis | Recommend a first wedge that remains useful without promising full cross-device control. | Issue #13 |
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
| Verified | The repository doctrine forbids hidden monitoring, default screenshots, raw explicit-content storage, and impossible-bypass promises. | AGENTS.md; PRODUCT_DOCTRINE.md; phase0/SAFETY_AND_CONSENT.md | Architecture must describe honest capability tiers, not universal enforcement. |
| Evidence-supported | Browser extension and local network controls are plausible early wedges because they can offer visible user-controlled friction without requiring full mobile-device ownership. | Chrome DNR docs; MDN WebExtensions docs; Phase 0 doctrine | Favor browser/web command center plus guided existing controls for v0 exploration. |
| Platform limitation | Ordinary consumer apps cannot be assumed to control every app, alternate browser, private browsing session, VPN, device reset, unmanaged device, borrowed device, or encrypted content channel. | Official platform docs to be completed per mechanism | Every claim must be mechanism-specific and bypass-aware. |
| Open question | Apple FamilyControls / ManagedSettings / DeviceActivity production access and App Review suitability require deeper entitlement and policy verification. | Apple Developer docs opened; further entitlement review pending | Do not make iOS the first enforcement promise until entitlement path is verified. |

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

## Artifact-Specific Work To Complete

- Verified: The repository requires a Draft PR and independent review before this work can be accepted.
- Hypothesis: This artifact should become the canonical place for decisions about first platform recommendation after ChatGPT/founder review.
- Open question: Full acceptance depends on reviewer deductions, deeper source review, and any specialist review identified in the thread scorecard.

## Known Weaknesses

- Evidence-supported: This Cycle 1 draft prioritizes issue structure, safety boundaries, source register, and first-pass reasoning.
- Open question: It has not yet received ChatGPT review, founder validation, or specialist review.
- Open question: Some external sources may require deeper primary-source reading before a recommendation can pass the 95 threshold.
