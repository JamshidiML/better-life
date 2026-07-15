# MVP acceptance criteria

Status: Cycle 1 Draft - gates for future authorization, not current acceptance
Issue: #25
Branch: `codex/25-mvp-product-shape`

## Universal release gate

- **Verified:** Independent accepted score is at least 95/100 under `docs/execution/QUALITY_SCORING_AND_IMPROVEMENT_LOOP.md`.
- **Verified:** Zero unresolved Critical or High defects; every universal and applicable specialist gate passes.
- **Verified:** Founder approval cannot override a failed safety, privacy, consent, clinical-claim, legal, security, or accessibility gate.

## Evidence and product gates

| ID | Classification | Criterion | Verification | Failure action |
| --- | --- | --- | --- | --- |
| E01 | Open question | Phase 0 shows a repeated user problem and manual-plan/Spiral value, not founder assumption alone. | Approved interviews/synthesis with no raw notes in repo/AI. | Stop/reframe. |
| E02 | Verified | Every participant/public claim has approved Thread 02 register status and current source. | Clinical/evidence review. | Remove claim/content. |
| E03 | Hypothesis | Users can accurately distinguish self-help from diagnosis, treatment, emergency response, and full-device protection. | Predefined comprehension test across target groups/languages. | Redesign; no launch. |
| E04 | Hypothesis | Plan/Spiral provides incremental usefulness/agency without unacceptable shame, burden, or compulsive checking. | Frozen outcomes and adverse-effect thresholds before pilot. | Remove/redesign mechanism. |

## Privacy, consent, and security gates

| ID | Classification | Criterion | Verification | Failure action |
| --- | --- | --- | --- | --- |
| P01 | Verified | Accountless core sends zero intimate data externally. | Network/system test over every flow and error path. | Block release. |
| P02 | Verified | Inventory matches control UI; no URL, screenshot, goal, value, message, or free text enters logs/analytics. | Schema, dynamic and dependency tests. | Block release. |
| P03 | Verified | Save, no-save, edit, reset, export, delete, uninstall, backup, and shared-device behavior are documented/tested. | Thread 07 platform/security review. | Disable persistence/export or block release. |
| P04 | Verified | Optional consent is specific and refusal/withdrawal does not reduce core or rights. | UI/system and coercion tests. | Redesign. |
| P05 | Open question | EU/German legal scope, DPIA need, basis/Article 9, consumer obligations, terms, vendors and incident duties are approved. | Qualified counsel/DPO record. | No personal-data production processing. |
| P06 | Verified | Security threat model, dependency/supply-chain controls, incident plan and penetration test appropriate to architecture pass. | Independent security review. | Block release. |

## Safety, UX, and accessibility gates

| ID | Classification | Criterion | Verification | Failure action |
| --- | --- | --- | --- | --- |
| S01 | Verified | No diagnosis, therapy/cure, guaranteed prevention, anonymous, impossible-bypass, partner-control, or emergency-monitoring implication. | Copy and journey review. | Critical stop. |
| S02 | Verified | Every high-risk state has one-action exit and no automatic send/restriction escalation. | State/property/scenario tests. | Critical stop. |
| S03 | Verified | No raw explicit content or required explicit narrative. | Field/input/log/support review. | Critical stop. |
| S04 | Verified | Professional/emergency routes are directly accessible, current by geography, and precisely scoped. | Clinical/legal maintenance review. | Remove inaccurate route / block affected geography. |
| U01 | Hypothesis | First journey can be completed calmly in a few minutes with optional fields skipped. | Timed usability plus qualitative load review; threshold frozen before test. | Simplify. |
| U02 | Verified | Keyboard, screen reader, 200%+ zoom/reflow, contrast, reduced motion, focus/error, and no-time-pressure paths pass. | Automated + specialist + user testing. | Block release. |
| U03 | Verified | Text remains meaningful, non-shaming, and unambiguous in every released language. | Human clinical/privacy translation review and user comprehension. | Do not release language. |

## Technical and operational gates

| ID | Classification | Criterion | Verification | Failure action |
| --- | --- | --- | --- | --- |
| T01 | Verified | Core works without account, AI, network, ally, peer, payment, or extension. | Offline/system tests. | Block release or narrow claim. |
| T02 | Platform limitation | Storage/backup/notification behavior is verified for each supported browser/OS/version. | Device matrix; visible support policy. | Exclude platform/version. |
| T03 | Verified | Corrupt/cleared storage and update/migration fail without exposing data or trapping user. | Failure-injection tests. | Block release. |
| T04 | Verified | Support, vulnerability, content, source and resource-update owners and response expectations exist. | Operational readiness review. | No distribution. |
| T05 | Hypothesis | Full-cost funding/maintenance horizon covers the released scope without unsafe monetization. | Thread 09 quotes and conservative runway. | Keep as research prototype. |

## Extension gate, only after core acceptance

| ID | Classification | Criterion |
| --- | --- | --- |
| X01 | Platform limitation | Current Chromium API/store-policy review and synthetic domain tests pass with exact permissions and incognito/bypass limits. |
| X02 | Platform limitation | False blocks, legitimate-use recovery, disabled/uninstalled/alternate-browser paths, and performance meet pre-approved thresholds. |
| X03 | Verified | Raw browsing history/content never leaves device or enters logs; local rule list is visible/exportable/deletable. |
| X04 | Hypothesis | User research shows incremental benefit over manual core sufficient to justify permission and failure risk. |

## Explicit non-acceptance in Cycle 1

- **Verified:** No gate requiring independent review, legal/privacy/security approval, Phase 0 evidence, clinical content review, user testing, accessibility testing, or implementation proof has passed.
- **Verified:** The MVP is therefore **not accepted and not authorized for production implementation**.
