# Better Life — ChatGPT Cycle 2 Independent Review

Status: Independent review complete; internal revision and external escalation required  
Date: 2026-07-15  
Scope: Draft PRs #30–#40, Founder Amendment #42  
Authorization: Review and planning only; no merge or production implementation

## Executive Decision

Cycle 2 produced a real quality improvement. The project moved from broad concept documentation to a coherent staged architecture:

1. Minimum Viable Experiment (MVE);
2. bounded Protection Adapter Spikes;
3. integrated research prototype gate;
4. later Actual MVP decision.

The Protection Stack, three protection modes, central policy plus platform adapters, exact-change consent, degraded-state truth, independent recovery, uninstall/teardown, trusted-ally boundaries, and no-hidden-control doctrine are now substantially defined.

However, no thread passes the repository Quality Loop because every thread still has unresolved external High gates: user evidence, qualified specialist review, real-device/platform proof, security/privacy/legal validation, or operational evidence.

Decision: **Do not merge PRs #30–#40. Run one short internal consistency Cycle 3, then stop broad documentation expansion and move to controlled evidence generation.**

## Independent Scores

| Thread | PR | Cycle 1 ChatGPT | Cycle 2 Codex self | Cycle 2 ChatGPT | Decision |
| ---: | ---: | ---: | ---: | ---: | --- |
| 01 Cross-device feasibility | #30 | 76 | 88 | **85** | Revise + external gates |
| 02 Scientific evidence | #31 | 76 | 83 | **84** | Revise + clinical/method gates |
| 03 Mutual-aid translation | #32 | 76 | 84 | **83** | Revise + community/legal/user gates |
| 04 Support and ally safety | #33 | 77 | 85 | **85** | Revise + safeguarding/security gates |
| 05 Protective Spiral/modes | #34 | 81 | 88 | **87** | Revise; Strict unavailable |
| 06 Protection Constitution | #35 | 81 | 88 | **87** | Revise + user/specialist gates |
| 07 Privacy and teardown | #36 | 82 | 88 | **88** | Revise + legal/security/platform gates |
| 08 Ecosystem landscape | #37 | 69 | 78 | **79** | Substantial validation required |
| 09 Business model | #38 | 84 | 89 | **87** | Revise + quotes/tax/market gates |
| 10 Product shape and UX | #39 | 83 | 89 | **88** | Revise; no MVP accepted |

Cycle 1 independent mean: **78.5/100**  
Cycle 2 independent mean: **85.3/100**  
Improvement: **+6.8 points**

## Provisional Program Score

Using the repository program formula:

- 50% average thread score: 85.3
- 20% safety/privacy minimum across relevant threads: 85
- 15% scientific/evidence integrity: 84
- 15% cross-thread consistency/integration: 86

Provisional program score: **85.2/100**

This score is descriptive only. It cannot override unresolved High gates.

## Strongest Cycle 2 Improvements

### 1. Central policy plus platform adapters

The architecture no longer implies that Chrome is the product. A central user-authored policy coordinates separately evaluated browser, OS, account, DNS, VPN, router, and official-control adapters. Capability, permission, health, bypass, recovery, and teardown remain adapter-specific.

### 2. Three protection contracts

- Supportive: guidance without enforced blocking.
- Friction: a visible, finite, user-authored pause or detour.
- Precommitted Strict: a finite prior policy applied only as far as an approved adapter can, with disclosed limits, recovery, expiry, and teardown.

Strict remains unavailable until its incremental benefit, platform behavior, safety, privacy, accessibility, coercion, cost, and recovery gates pass.

### 3. Protection Stack truth

The project now requires every layer to expose owner, scope, permission, data, health, failure, bypass, disable, uninstall, recovery, and teardown state. Partial setup and degraded state may not be collapsed into a false global “protected” status.

### 4. Uninstall is not deletion

Cycle 2 correctly distinguishes app uninstall, local deletion, external OS/account/network settings, backup/restore, offline devices, reinstall, orphaned controls, and verified teardown.

### 5. Support and authority are separated

Anonymous peers receive no device-control, policy-change, recovery-key, approval, or enforcement authority. Trusted allies are optional, scoped, time-limited, visible, revocable, and cannot block independent recovery.

### 6. Evidence and business claims are more honest

Scientific work now records exact searches, attrition, null findings, missing adverse-effect reporting, and transfer limits. Business work separates free core, paid convenience, managed adapters, human services, supporter funding, and organization funding rather than assuming EUR1 funds the complete system.

## Cross-Cutting Defects To Fix Internally

### Defect A — MVE terminology

Founder Amendment #42 defined MVE as **Minimum Viable Experiment**.

Some Cycle 2 artifacts define it as **Minimum Viable Evidence**.

Required correction: use `Minimum Viable Experiment` everywhere. If “minimum viable evidence” is retained as a concept, assign a different term/acronym.

Severity: Medium, cross-thread consistency blocker.

### Defect B — Misuse of `Executed test result`

The new taxonomy is better, but `Executed test result` is sometimes used for:

- reading official pages;
- pushing commits;
- confirming files or PR state.

These are not product or system test results.

Add:

- `Repository-state verified`
- `Research procedure executed`
- optionally `Desk-review observation`

Reserve `Executed test result` for an actual executed test with environment, inputs, expected result, observed result, and evidence.

Severity: Medium, traceability blocker.

### Defect C — Canonical artifact ownership

Several threads repeat the same fields and states. Establish canonical ownership:

| Domain | Canonical owner |
| --- | --- |
| Platform capability and adapter matrix | Thread 01 |
| Protection modes and lifecycle transitions | Thread 05 |
| Protection Constitution schema | Thread 06 |
| Protection Layer Contract, data, consent, inventory, teardown | Thread 07 |
| User-facing information architecture and stage gates | Thread 10 |

Other threads reference the canonical artifact instead of redefining it.

Severity: Medium, future schema-drift risk.

### Defect D — Cooling-off inconsistency

Founder Amendment #42 requested research across 15 min, 1 h, 12 h, 24 h, 72 h, next-day/end-of-window, and fixed-term options. Thread 05 currently lists immediate, 10 min, 1 h, and 24 h.

Required action: restore the full research candidate set or document a reasoned narrowing and founder decision. No default is approved.

Severity: Medium.

### Defect E — Mode copy inconsistency

Recommended common user-facing copy:

- Supportive: `Guide me`
- Friction: `Help me pause`
- Strict: `Protect the decision I made while calm`

The current Supportive/Friction wording overlaps in some artifacts.

Severity: Low/Medium, user-comprehension risk.

### Defect F — “Calm state” must not be inferred

The system must not diagnose or detect whether a person is rational, calm, impaired, or incapable. Operationalize calm-state setup as:

- a user-chosen setup/review time;
- explicit voluntary confirmation;
- comprehension of scope, limits, recovery, expiry, and teardown;
- successful independent recovery rehearsal for Strict.

Severity: High if implemented incorrectly; currently a design clarification.

## Thread-Specific Terminal Direction

### Thread 01

Internally resolve terminology, taxonomy, source IDs, canonical layer contract references, factory-reset/device-replacement scenarios, and platform-maintenance/supply-chain matrix. Then mark `Ready for synthetic adapter protocol and external platform/security review`.

### Thread 02

Add a bounded adjacent-literature map for commitment devices, self-binding, implementation intentions, digital friction, and cooling-off. Preserve transfer limits. Then mark `Ready for clinical/method review and MVE outcome protocol`.

### Thread 03

Add IP/affiliation register and mechanism-by-user-need alternatives. Then mark `Ready for community/legal/lived-experience review`; no proprietary network work.

### Thread 04

Keep ally Levels 3–4 prohibited from participant testing until independent security/cryptography and coercive-control review. Add formal authority matrix and abuse simulations. Then mark `External safeguarding/security review required`.

### Thread 05

Resolve cooling-off, mode copy, calm-state definition, offline due-time behavior, and Strict eligibility checklist. Then mark `Ready for low-fidelity mode-comprehension research`; Strict remains unavailable.

### Thread 06

Create a first MVE form with no more than five required user decisions, separate from the full architectural schema. Add naming tests and cross-device version-conflict rules. Then mark `Ready for low-fidelity user/language/accessibility review`.

### Thread 07

Own the canonical Protection Layer Contract. Add data-flow diagrams, printable/user-held recovery inventory, factory-reset/replacement-device cases, and an immediate safety-recovery exception to ordinary downgrade friction. Then mark `Ready for DPIA/security/platform teardown review`.

### Thread 08

Create a machine-readable candidate inventory and explicitly define the sample as a sentinel sample or expand it systematically. Replace desk-review actions misclassified as tests. Then mark `Hands-on and independent evidence required`.

### Thread 09

Add low/base/high sensitivity analysis, itemize the research budget, and enrich input provenance/confidence. Founder decision: EUR1 should be treated as an accessibility principle/testable anchor, not a binding product constraint. Then mark `Quotes, tax/entity, willingness-to-pay, and governance review required`.

### Thread 10

Correct MVE terminology, standardize mode copy, reference canonical schemas, and create low-fidelity MVE wireframes only. Freeze MVE acceptance/stop thresholds before participant work. Then mark `Ready for MVE protocol review`; no MVP accepted.

## Recommended Next Sequence

### Internal Cycle 3 — short consistency pass

Purpose: resolve only the six cross-cutting internal defects and the narrow thread-specific items above.

Do not expand broad research documents.

Do not attempt to reach 95 by writing more.

### Evidence Cycle A — MVE preparation

Create:

- research questions;
- low-fidelity wireframes;
- five-field minimal plan/Constitution;
- manual Protective Spiral;
- Supportive-mode flow;
- participant profile and exclusions;
- consent and withdrawal;
- privacy/data plan;
- adverse-effect plan;
- comprehension, agency, usefulness, burden, shame/reactance, privacy-trust, exit-success, and stop thresholds;
- specialist review pack.

No enforcement adapter is used with participants.

### Evidence Cycle B — synthetic adapter spikes

Prepare separate disposable technical protocols for:

- Chromium/Edge;
- Firefox;
- Safari feasibility;
- Android VPN;
- iOS Family Controls/Network Extension feasibility;
- official-control setup assistant;
- DNS/router setup assistant.

Use synthetic domains and test accounts only. Measure permissions, declared behavior, bypass, false block, performance, health, recovery, uninstall, teardown, orphan state, and store/entitlement outcomes.

### External review packs

Prepare separate bounded review packages for:

- clinical/sexual-health;
- research method/ethics;
- EU/German privacy/legal/DPIA;
- security/platform/cryptography;
- coercive control;
- accessibility/plain language/localization;
- diverse lived experience;
- business/tax/entity/governance.

## Founder Decisions Recommended

| Decision | Recommendation |
| --- | --- |
| MVE meaning | Adopt `Minimum Viable Experiment` |
| First MVE mode | Supportive only |
| Friction | Research after Supportive value and bounded adapter proof |
| Strict | Unavailable until all incremental gates pass |
| EUR1 | Accessibility principle and testable anchor; not binding constraint |
| Anonymous peers | Support-only; no enforcement/recovery authority |
| Trusted ally | Optional; Levels 0–2 may be researched first; Levels 3–4 expert-gated |
| Hidden persistence | Rejected |
| Impossible-to-bypass claim | Rejected |
| Next work | Short internal consistency pass, then evidence generation |

## Final Review Decision

- Cycle 2 independent thread mean: **85.3/100**.
- Provisional program score: **85.2/100**.
- Critical defects introduced in research scope: **0 identified**.
- Unresolved High gates: present in every thread.
- Merge status: **No PR is merge-ready**.
- Implementation status: **Not authorized**.
- Recommended status: **Internal Cycle 3, then MVE and synthetic-spike preparation with external escalation.**
