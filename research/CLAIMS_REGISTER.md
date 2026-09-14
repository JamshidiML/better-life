# Claims register

Status: Cycle 1 Draft
Issue: #17
Branch: `codex/17-evidence-map`
Owner: scientific/clinical claim review

## Claim statuses

| Status | Meaning |
| --- | --- |
| Allowed | **Repository decision:** consistent with repository policy and does not imply unestablished efficacy. |
| Review required | **Open question:** may be usable only after evidence, clinical, legal, and product-context review. |
| Rejected | **Repository decision:** conflicts with evidence, scope, safety, consent, or anti-coercion policy. |

## Allowed claims for research artifacts

| ID | Classification | Candidate wording | Evidence and conditions |
| --- | --- | --- | --- |
| C-A01 | Repository decision | “Better Life is being researched as a voluntary self-help and behavior-change tool for adults.” | Accurate current phase; must not imply availability or efficacy. |
| C-A02 | Repository decision | “You choose your goal, what to record, and whether to involve another person.” | Only allowed if the actual flow preserves separate, revocable choices. |
| C-A03 | Evidence-supported conclusion | “The product explores reflection, planning, voluntary friction, and recovery after setbacks.” | Describes candidate functions, not proven outcomes. |
| C-A04 | Repository decision | “Better Life does not diagnose, provide therapy, or replace professional or emergency care.” | Required boundary, paired with usable care/crisis routes where relevant. |
| C-A05 | Evidence-supported conclusion | “Research distinguishes impaired control and functional impact from frequency or moral disapproval alone.” | Supported by WHO diagnostic requirements and moral-incongruence research; no individual conclusion may follow. |
| C-A06 | Hypothesis | “This exercise may help you pause and choose your next step.” | Acceptable only as clearly tentative, optional copy after user and clinical review. |

## Claims requiring review before any public use

| ID | Classification | Candidate claim | Required evidence or change |
| --- | --- | --- | --- |
| C-R01 | Hypothesis | “Better Life reduces problematic pornography use.” | Prospective evaluation of a defined intervention, population, comparator, outcome, harms, and analysis; legal/clinical review. |
| C-R02 | Hypothesis | “This technique is evidence-based.” | Name the technique, target, evidence tier, population fit, and product-transfer limits; avoid umbrella wording. |
| C-R03 | Hypothesis | “Personalized support when you need it.” | Define personalization data and logic, demonstrate privacy/safety, and prevent clinical or surveillance implication. |
| C-R04 | Hypothesis | “Private” or “anonymous.” | Threat model, retention map, processor list, re-identification analysis, and precise qualifiers are required. |
| C-R05 | Hypothesis | “Works across all your devices.” | Thread 01 capability verification and explicit bypass/platform limitations are required. |
| C-R06 | Hypothesis | “Community support improves recovery.” | Direct evidence, moderation model, incident thresholds, and clear non-emergency boundary are required. |
| C-R07 | Hypothesis | “Clinically informed.” | Name reviewer role, scope, date, conflicts, and exactly what was reviewed; do not imply endorsement. |
| C-R08 | Hypothesis | “Affordable at EUR1 per month.” | Thread 09 must establish what is included, fees/taxes, subsidy, and sustainability assumptions. |

## Rejected claims

| ID | Classification | Rejected wording or implication | Reason |
| --- | --- | --- | --- |
| C-X01 | Repository decision | “Diagnoses porn addiction/CSBD.” | A consumer product and screening score cannot make the diagnosis; “porn addiction” is not the adopted WHO label. |
| C-X02 | Repository decision | “Treats,” “cures,” or “prevents relapse.” | No Better Life clinical efficacy evidence; current scope is not treatment. |
| C-X03 | Repository decision | “Guaranteed protection,” “impossible to bypass,” or “blocks everything.” | Platform and motivated-bypass limitations make the promise false and unsafe. |
| C-X04 | Repository decision | “Your partner can make sure you behave.” | Coercive surveillance and partner-control framing violate doctrine. |
| C-X05 | Repository decision | “AI therapist,” “24/7 crisis support,” or equivalent emergency implication. | Therapy impersonation and emergency reliability are outside scope. |
| C-X06 | Repository decision | “Anonymous” when identifiers, linkable metadata, contact details, or moderation records exist. | Absolute anonymity would be misleading. |
| C-X07 | Repository decision | “A high score means you have CSBD.” | CSBD-19 and CSBD-DI are screening instruments, not standalone diagnoses. |
| C-X08 | Repository decision | “Frequent pornography use means addiction.” | Frequency alone does not establish impaired control or marked distress/impairment. |
| C-X09 | Repository decision | “Religious or moral concern is merely shame.” | Moral incongruence is relevant but cannot be used to dismiss a person's lived impairment or values. |
| C-X10 | Repository decision | “Scientifically proven” or “clinically proven.” | The reviewed evidence does not establish Better Life's efficacy. |

## Claim approval workflow

1. **Repository decision:** Assign a claim ID and copy the exact wording plus placement context into this register.
2. **Repository decision:** Link the claim to the user problem, evidence, required data, consent, safety/misuse analysis, feasibility, metric, and exit strategy.
3. **Repository decision:** Scientific review checks population, intervention, comparator, outcome, study quality, harms, and transfer distance.
4. **Repository decision:** Privacy/legal review checks data and regulatory implications; clinical review checks diagnostic and treatment implications.
5. **Repository decision:** User research tests comprehension, shame, coercion, and overclaim interpretation.
6. **Repository decision:** Approval records reviewer, date, version, conditions, and expiry/review trigger.
7. **Repository decision:** Any product, evidence, platform, or regulatory change reopens the claim.

## Current decision

- **Repository decision:** Only C-A01 through C-A05 are approved for Cycle 1 research documentation.
- **Open question:** C-A06 requires wording review before participant-facing use.
- **Repository decision:** No outcome, clinical efficacy, anonymity, universal protection, or peer-support benefit claim is approved.

## Cycle 2 Mode And Precommitment Claims

| ID | Classification | Allowed wording | Prohibited interpretation | Evidence ceiling | Reviewer and review trigger |
| --- | --- | --- | --- | --- | --- |
| C2-A01 | Founder decision | "Guide me" describes Supportive Mode. | The user lacks willpower or needs treatment. | Product description only. | UX, clinical, lived-experience; every material copy change. |
| C2-A02 | Founder decision | "Help me pause" describes Friction Mode. | Delay treats CSBD/PPU or prevents relapse. | Hypothesis until user and adapter tests. | Clinical, research methods, accessibility; annual or mechanism change. |
| C2-A03 | Founder decision | "Protect the decision I made while calm" describes Precommitted Strict Mode. | The user is irrational, incapacitated, or cannot withdraw consent. | Product philosophy only. | Coercive-control, clinical, legal, security; every recovery change. |
| C2-A04 | Design requirement | "You choose a finite waiting period before a requested change takes effect." | Cooling-off is clinically effective or impossible to bypass. | Proposed control until tested. | UX, accessibility, safety; after test evidence. |
| C2-X01 | Repository decision | Do not say a mode "treats CSBD", "treats PPU", or is clinically indicated. | Any mode-to-diagnosis mapping. | Prohibited without a separate regulated clinical evidence pathway. | Clinical and legal review required to reopen. |
| C2-X02 | Repository decision | Do not say `strict` means permanent, non-removable, or ally-owned. | Past consent authorizes indefinite or hidden control. | Prohibited. | Founder, coercive-control, security review required to reopen. |

Cycle 2 claim records must also store: exact placement, source/version, population, evidence ceiling, owner, approval state, expiry date, and the event that reopens review.
