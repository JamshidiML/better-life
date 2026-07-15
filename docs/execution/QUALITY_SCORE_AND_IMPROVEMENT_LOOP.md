# Better Life — Quality Score and Improvement Loop

Status: Active
Date: 2026-07-15

## Purpose

Every substantial task completed by ChatGPT, Codex, or a future contributor must be evaluated against explicit quality criteria. Work is improved through a documented loop until it reaches the acceptance threshold or a justified stop condition.

This system is designed to prevent weak outputs, hidden assumptions, unsupported claims, unsafe design, and premature merging. It is not intended to create endless perfectionism or falsely claim that uncertain work is objectively perfect.

## Core Loop

1. **Define** — Write the goal, scope, deliverables, constraints, evidence requirements, and acceptance criteria.
2. **Execute** — Produce the work on the assigned branch.
3. **Self-score** — The creator scores the output and lists weaknesses.
4. **Independent review** — ChatGPT or another assigned reviewer scores it separately.
5. **Gap analysis** — Compare the result against the rubric and identify the highest-impact gaps.
6. **Revise** — Correct the output in priority order.
7. **Re-score** — Record the new score and remaining uncertainty.
8. **Decision** — Accept, revise again, block, split, defer, or stop with documented reasons.

## Score Scale

Each task receives a score from 0 to 100.

- **0–49 — Reject:** materially incomplete, unsafe, unreliable, or unusable.
- **50–69 — Major revision:** useful foundation but significant gaps remain.
- **70–84 — Minor-to-moderate revision:** generally sound but not ready for acceptance.
- **85–94 — Acceptable:** strong enough for the current project stage; limitations are documented.
- **95–99 — Excellent:** unusually complete, well-supported, safe, clear, and actionable.
- **100 — Complete against the current rubric:** every rubric item is fully satisfied and no known critical or high-severity gap remains.

A score of 100 does **not** mean universal truth, permanent correctness, clinical proof, zero risk, or immunity from future revision. It means complete against the current scope, evidence, review standard, and project stage.

## Universal 100-Point Rubric

The default rubric applies to every substantial task. Thread-specific criteria may redistribute up to 20 points, but the total remains 100.

| Criterion | Points | What full credit requires |
| --- | ---: | --- |
| Goal and scope alignment | 10 | Solves the stated problem, covers all deliverables, avoids unrelated work |
| Completeness and traceability | 10 | Acceptance criteria are mapped to concrete outputs; nothing material is silently omitted |
| Evidence and factual integrity | 15 | Claims use appropriate current sources; uncertainty and inference are explicit |
| Safety and harm prevention | 15 | Relevant harms, misuse, coercion, crisis, shame, and failure modes are handled |
| Privacy and data minimization | 10 | Data needs are proportionate; local-first and deletion/consent boundaries are addressed |
| Technical or operational feasibility | 10 | Recommendations are realistic, constraints and bypasses are explicit |
| Product and user value | 10 | Output addresses a meaningful user need and remains understandable and usable |
| Clarity and structure | 5 | Concise, navigable, unambiguous, and internally consistent |
| Verification and testability | 10 | Includes validation method, tests, scenarios, falsification or stop criteria |
| Maintainability and integration | 5 | Fits repository doctrine, names dependencies, avoids conflicts, supports future updates |
| **Total** | **100** | |

## Critical Gates

Regardless of numeric score, an output cannot be accepted when any relevant critical gate fails:

- enables hidden monitoring or coercive control;
- stores or exposes unnecessary intimate content;
- makes unsupported diagnosis, treatment, cure, or guaranteed-prevention claims;
- presents technically impossible control as reliable;
- lacks a safe consent, modification, deletion, or exit model where required;
- introduces a critical security or privacy risk without mitigation;
- uses fabricated citations, unverified test results, or invented facts;
- conflicts with the approved Project Charter or Product Doctrine;
- hides a material limitation or unresolved high-severity risk.

A failed critical gate forces status **Blocked** or **Revision Required**, even if the calculated score is high.

## Two-Score Requirement

Every substantial deliverable receives two scores:

### Creator Self-Score

The author records:

- total score;
- points by criterion;
- strongest elements;
- known weaknesses;
- evidence not yet verified;
- tests or checks actually performed;
- recommended next revision.

### Reviewer Score

The reviewer independently records the same fields and may not copy the creator score.

The official score is the **reviewer score**, not the average. The difference between creator and reviewer scores is also tracked:

- 0–5 points: good calibration;
- 6–12 points: calibration review recommended;
- more than 12 points: creator must explain the mismatch and improve self-review.

## Acceptance Thresholds

### Research and strategy documents

- minimum reviewer score: **90**;
- no failed critical gate;
- all important claims sourced or marked as hypotheses;
- limitations and next evidence needs documented.

### Architecture, privacy, safety, and sensitive features

- minimum reviewer score: **95**;
- safety, privacy, consent, feasibility, threat model, and exit criteria must each score at least 80% of their available points;
- no unresolved critical or high-severity issue may be hidden.

### Prototype and production code

- minimum reviewer score: **90**;
- required automated and manual checks passed;
- no critical security, privacy, safety, or data-loss issue;
- documentation and rollback path present.

### Founder-facing summaries

- minimum reviewer score: **90**;
- accurately reflects all threads, disagreements, unknowns, and decisions required.

## Improvement Loop Rules

### Revision cycle

Each cycle must include:

1. previous score;
2. exact deductions;
3. prioritized correction list;
4. changes made;
5. tests or evidence added;
6. new score;
7. residual risks.

### Priority order

Corrections are performed in this order:

1. critical safety, legal, privacy, and factual errors;
2. missing acceptance criteria;
3. unsupported or overstated claims;
4. technical infeasibility and unhandled failure modes;
5. user-value and usability gaps;
6. unclear structure or wording;
7. optional polish.

### Maximum ordinary cycles

The normal limit is **three review cycles per task**.

After three cycles, one of these decisions is required:

- accept because the threshold is reached;
- split the task into smaller tasks;
- block pending expert, evidence, platform, legal, or founder input;
- revise the rubric because the scope was poorly defined;
- explicitly defer the unresolved part.

Additional cycles require a documented reason. This prevents an infinite loop caused by impossible certainty or moving criteria.

## Full-Score Rule

A task may receive 100 only when:

- every rubric item has explicit evidence;
- all acceptance criteria are satisfied;
- no critical gate fails;
- all known high-severity gaps are resolved or removed from scope with founder approval;
- factual claims have been verified at the appropriate source level;
- required tests were actually run;
- dependencies and limitations are documented;
- the reviewer can identify no concrete improvement within the approved scope.

If external evidence, expert review, real-user testing, legal review, platform entitlement, or production validation is still required, the task must state that dependency and usually cannot receive 100 for final validity. It may still receive 100 for a narrower deliverable such as “complete research plan” or “complete prototype specification.”

## Required Pull Request Section

Every substantial Pull Request must contain:

```markdown
## Quality Score

### Creator self-score
- Total: __/100
- Goal and scope: __/10
- Completeness: __/10
- Evidence: __/15
- Safety: __/15
- Privacy: __/10
- Feasibility: __/10
- User value: __/10
- Clarity: __/5
- Verification: __/10
- Maintainability: __/5

### Known weaknesses
- ...

### Checks actually performed
- ...

### Requested reviewer focus
- ...
```

The reviewer posts a separate score using `docs/execution/QUALITY_REVIEW_TEMPLATE.md`.

## Thread-Level Summary

For each Execution Thread, track:

- initial creator score;
- initial reviewer score;
- score after each revision;
- number of cycles;
- critical-gate status;
- acceptance or block decision;
- major findings;
- residual risks;
- dependencies;
- final artifacts.

## Program-Level Score

The ten-thread execution cycle receives an overall score only after all thread reviews.

The program score is not a simple average. It is calculated as:

- 20% scientific integrity;
- 20% safety/privacy/consent;
- 15% technical feasibility;
- 15% product/user value;
- 10% anonymous-network safety;
- 10% business sustainability;
- 5% execution quality and traceability;
- 5% cross-thread consistency.

A program cannot pass if Thread 01, 02, 04, or 07 fails its critical gates, regardless of the average score.

## Roles

### Codex

- executes assigned technical/research documentation tasks;
- performs creator self-score;
- revises against concrete review deductions;
- never self-approves or merges.

### ChatGPT

- defines or refines rubrics;
- independently reviews every substantial output;
- identifies cross-thread conflicts;
- issues revision instructions;
- produces final thread and program reports;
- does not award a perfect score merely to end the process.

### Founder

- approves major trade-offs and scope changes;
- may reject an output despite passing score when it conflicts with mission or risk tolerance;
- may request an additional review cycle with a concrete reason.

## Final Principle

**Quality is not repeated rewriting. Quality is the measured removal of important uncertainty, error, harm, and unusability.**
