# Better Life — ChatGPT Cycle 1 Independent Review

Status: Draft independent review  
Date: 2026-07-15  
Scope: Draft PRs #30–#40  
Reviewer: ChatGPT  
Decision: All ten execution threads require revision; no merge or production authorization.

## Executive assessment

Codex followed the execution protocol correctly:

- ten independent thread branches;
- ten independent Draft PRs;
- one separate coordination Draft PR;
- no production code;
- no participant data;
- creator self-scores, assumptions, risks, weaknesses, and verification records;
- all creator decisions remain `Revise`.

The Cycle 1 output is a strong structured discovery package, not an accepted product foundation yet.

## Independent reviewer scores

| Thread | PR | Focus | Creator score | ChatGPT score | Decision |
| ---: | ---: | --- | ---: | ---: | --- |
| 01 | #30 | Cross-device feasibility | 85 | 76 | Revise |
| 02 | #31 | Scientific evidence and claims | 85 | 76 | Revise |
| 03 | #32 | Mutual-aid translation | 84 | 76 | Revise |
| 04 | #33 | Pseudonymous peer safety | 88 | 77 | Revise |
| 05 | #34 | Protective Spiral | 90 | 81 | Revise |
| 06 | #35 | Personal plan and education | 90 | 81 | Revise |
| 07 | #36 | Privacy and sensitive-data architecture | 93 | 82 | Revise |
| 08 | #37 | Ecosystem landscape | 84 | 69 | Substantial revision |
| 09 | #38 | Business model and EUR1 | 91 | 84 | Revise |
| 10 | #39 | Product shape and MVP | 92 | 83 | Revise |

Creator mean: 88.2/100.  
ChatGPT reviewer mean: 78.5/100.  

These means are descriptive only. They cannot override mandatory gates, Critical/High defects, or external expert requirements.

## Strongest Cycle 1 results

1. Safety, consent, privacy, and non-diagnostic boundaries are consistently visible.
2. Codex did not overclaim perfect prevention, clinical efficacy, anonymity, or universal cross-device control.
3. The long-term vision was not forced into the first product.
4. Live peer matching, cloud sync, external AI, automatic ally contact, payment, and production code were deferred.
5. The local/accountless direction is a useful data-minimization hypothesis.
6. Protective Spiral and personal-plan work emphasize user authorship, low cognitive load, repair rather than shame, and transparent exit.
7. EUR1 is treated as a hypothesis with fee drag and responsible operating costs acknowledged.

## Cross-cutting High defects

### 1. Classification taxonomy is overloaded

`Verified` is repeatedly used for several different things:

- source-verified facts;
- repository policies;
- founder decisions;
- design requirements;
- proposed controls;
- identified risks;
- arithmetic checks;
- unexecuted acceptance criteria.

This weakens traceability and can create false confidence.

Cycle 2 should use a more precise vocabulary:

- `Source-verified fact`
- `Evidence-supported conclusion`
- `Repository decision`
- `Founder decision pending`
- `Design requirement`
- `Proposed control`
- `Hypothesis`
- `Platform limitation`
- `Open question`
- `Executed test result`
- `Arithmetic check`

### 2. Process traceability contains inaccurate legacy-file claims

Thread README files claim that old/nonexistent quality files were included in the read-first set. The actual active source is:

`docs/execution/QUALITY_SCORING_AND_IMPROVEMENT_LOOP.md`

Cycle 2 must remove inaccurate read claims and record the actual base commit and actual files read.

### 3. Evidence and source methods are not yet reproducible enough

Required improvements include:

- exact search protocols for research work;
- exact official document/API/section/version for platform claims;
- study-level evidence appraisal for load-bearing scientific claims;
- adverse-effect and contradictory evidence searches;
- explicit sampling frames for competitor/NGO/advisor research;
- dated inputs and sensitivity ranges for business work.

### 4. Design requirements are not tests

Many strong safety controls are well designed but not implemented or tested. They must not be described as verified behavior.

Examples:

- block persistence;
- moderator audit behavior;
- safe deletion;
- immediate exit;
- local-only storage behavior;
- consent comprehension;
- extension reliability;
- notification privacy;
- kill-switch operation.

### 5. External expert and user evidence remain mandatory gates

The work cannot reach a genuine release-quality score without appropriate external review and evidence, including:

- CSBD/sexual-health clinical review;
- research-method review;
- EU/German privacy/legal review;
- security and threat-model review;
- coercive-control review;
- accessibility review;
- diverse lived-experience review;
- real user discovery and usability/adverse-effect testing;
- platform entitlement and real-device tests.

The correct outcome is escalation, not artificial score inflation.

## Strategic product correction

The current accountless local web core should not yet be called the Better Life MVP.

It is better classified as:

## Stage A — Minimum Viable Experiment (MVE)

Purpose:

- test whether a personal plan and manual Protective Spiral provide value;
- test language, comprehension, agency, burden, shame/adverse effects, privacy trust, and safe exit;
- use no monitoring, account, AI, payment, or human sharing.

The web is a low-cost prototype surface, not yet a final platform decision.

## Stage B — Enforcement Spike

Purpose:

- test one bounded technical protection mechanism;
- likely candidate: Chromium extension with synthetic/user-selected rules;
- separately evaluate Android `VpnService` and iOS entitlement/API feasibility;
- measure bypass, false block, permissions, performance, privacy, disable/removal, recovery, and false confidence.

## Stage C — Actual MVP decision

Only after Stage A and Stage B produce acceptable evidence should Better Life define an MVP that combines:

- a validated user-authored plan;
- a validated high-risk intervention flow;
- one validated bounded protection adapter;
- transparent limitations;
- privacy, consent, deletion, and safe-exit behavior.

## Founder decision required: protection modes

Cycle 1 exposes an unresolved strategic tension:

- immediate exit maximizes autonomy and anti-coercion safety;
- calm-state precommitment may require stronger temporary friction during a high-risk state.

Cycle 2 should compare three explicit product modes:

1. **Supportive mode** — guidance and voluntary actions; immediate exit.
2. **Friction mode** — user-selected delay/redirect with clear legitimate-use recovery.
3. **Precommitted strict mode** — stronger calm-state rules, cooling-off changes, transparent duration, safe exceptions, coercion safeguards, and no secret third-party control.

No mode should be chosen silently by architecture or UX.

## Thread-specific Cycle 2 priorities

### Thread 01

- exact platform source/version matrix;
- reclassify claims;
- separate MVE from enforcement spike;
- resolve accountless versus cross-device continuity;
- add extension permission/supply-chain/store risks.

### Thread 02

- reproducible search method;
- study-level evidence appraisal;
- adverse-effects and contradictory evidence;
- stronger claims register.

### Thread 03

- generic mutual-aid versus 12-step-specific mechanisms;
- broader model comparison;
- harm/exclusion/inclusion evidence;
- stronger human-versus-AI boundaries.

### Thread 04

- operational moderation and incident model;
- age/jurisdiction/legal escalation;
- report and moderation-data lifecycle;
- untested controls relabeled;
- safer alternative experiment.

### Thread 05

- supportive/friction/strict-mode comparison;
- clinically reviewable intervention protocol;
- adverse-effect/accessibility scenarios;
- non-assessment professional/emergency routes.

### Thread 06

- neutral plan naming;
- minimal versus extended schema;
- validated/nonvalidated outcome inventory;
- care-boundary flows;
- inclusion/accessibility review.

### Thread 07

- legal-basis escalation matrix;
- concrete local-web threat model;
- layer-by-layer deletion/export/retention;
- consent withdrawal and strict-mode exit;
- backup/notification/recovery tests.

### Thread 08

- reproducible and broader landscape;
- hands-on priority competitor analysis;
- separate competitor/substitute/organization/advisor maps;
- missing perspectives;
- evidence-based gap and positioning matrix.

### Thread 09

- sourced facts versus assumptions versus policy;
- full sensitivity model;
- full-cost inventory;
- comparable funding/pricing scenarios;
- explicit uncertainty and runway.

### Thread 10

- rename current proposal MVE;
- define MVE → Enforcement Spike → MVP pathway;
- keep platform decision open pending evidence;
- define first-user hypothesis and frozen validation/stop thresholds;
- integrate three protection modes.

## Cycle 2 protocol

Codex should revise the same branches and PRs.

For every PR:

1. Respond to each ChatGPT review item.
2. Create a concrete revision checklist.
3. Fix the same branch; do not create replacement threads.
4. Preserve the Cycle 1 creator and reviewer scores.
5. Add Cycle 2 self-score with evidence for every restored point.
6. List unresolved Critical, High, Medium, and Low defects.
7. Record external dependencies as escalation rather than pretending they are complete.
8. Re-run consistency, source, arithmetic, and Markdown checks.
9. Keep every PR Draft.
10. Do not merge.

## Current program decision

- No PR is accepted.
- No PR is merge-ready.
- No production implementation is authorized.
- Cycle 2 revision is authorized.
- External expert and user-research gates remain mandatory.
