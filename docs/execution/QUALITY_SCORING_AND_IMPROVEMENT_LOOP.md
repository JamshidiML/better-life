# Better Life — Quality Scoring And Improvement Loop

Status: Active v1.0  
Applies to: ChatGPT, Codex, founder-approved contributors, every issue, document, architecture proposal, research output, design, and future code change.

## Purpose

Every Better Life task must be evaluated, scored, improved, and re-reviewed. Work is not considered complete merely because a document, analysis, design, or code change exists.

The objective is not to manufacture a perfect-looking score. The objective is to create an auditable loop that exposes weaknesses, forces revision, and prevents low-quality work from being merged.

## Core Rule

> No substantial task is complete until it passes all mandatory gates, reaches the required weighted score, contains no unresolved critical defect, and records the evidence used to justify its score.

## Score Model

Every task receives a weighted score from 0 to 100.

### Shared dimensions — 70 points

| Dimension | Weight | Question |
| --- | ---: | --- |
| Requirement coverage | 10 | Were all issue deliverables and acceptance criteria addressed? |
| Factual accuracy | 10 | Are material claims correct, current, and supported? |
| Evidence and traceability | 10 | Can important conclusions be traced to authoritative sources, tests, or explicit reasoning? |
| Safety and harm prevention | 10 | Were foreseeable harms, misuse, coercion, crisis, and adverse effects addressed? |
| Privacy and consent | 10 | Is data collection proportionate, transparent, user-controlled, and minimized? |
| Internal consistency | 5 | Does the output agree with the charter, doctrine, other artifacts, and itself? |
| Clarity and usability | 5 | Can the intended reader understand and use the result without unnecessary complexity? |
| Feasibility and realism | 5 | Are platform, legal, operational, cost, and implementation limits represented honestly? |
| Testability and verification | 5 | Are decisions expressed as verifiable criteria, scenarios, or tests? |

### Thread-specific dimensions — 30 points

Each execution thread defines three specialist criteria worth 10 points each.

#### Thread 01 — Cross-device technical feasibility

- Platform-documentation correctness.
- Bypass and failure-mode completeness.
- Architecture and prototype decision quality.

#### Thread 02 — Scientific evidence

- Evidence hierarchy and study-quality appraisal.
- Clinical terminology and claim discipline.
- Translation from evidence to product implications.

#### Thread 03 — Mutual-aid model

- Mechanism extraction without imitation or false affiliation.
- Human-versus-AI boundary quality.
- Digital translation usefulness and safety.

#### Thread 04 — Anonymous peer support

- Threat-model and abuse-case completeness.
- Anonymity, moderation, and trust-boundary strength.
- Escalation and incident-response quality.

#### Thread 05 — Protective Spiral

- Intervention-sequence coherence.
- High-risk usability and cognitive-load quality.
- State-machine, failure, and test-scenario completeness.

#### Thread 06 — Personal recovery plan

- Personalization logic without diagnosis.
- Educational pathway and outcome quality.
- User control, adaptation, and professional-care boundaries.

#### Thread 07 — Privacy and consent

- Data-flow and classification completeness.
- Consent, retention, deletion, export, and recovery quality.
- Local-first and minimum-data architecture quality.

#### Thread 08 — Ecosystem landscape

- Market and competitor coverage.
- NGO, association, advisor, and partnership relevance.
- Source freshness, prioritization, and positioning insight.

#### Thread 09 — Business model

- Assumption transparency and unit-economics logic.
- Sustainability scenario quality.
- Mission alignment and ethical monetization discipline.

#### Thread 10 — Product shape and MVP

- First-user journey and simplicity.
- Scope discipline and dependency handling.
- MVP decision, acceptance criteria, and validation quality.

## Scoring Scale

| Score | Meaning | Action |
| ---: | --- | --- |
| 95–100 | Release-quality for the current stage | May pass after all mandatory gates pass |
| 90–94 | Strong but still has meaningful improvements | Revise before merge unless founder explicitly accepts a documented limitation |
| 80–89 | Incomplete or materially weak | Revision required |
| 70–79 | Major weaknesses | Substantial rework required |
| Below 70 | Unacceptable | Reframe or restart the task |

## What “Full Score” Means

A score of 100 does not mean universal truth, perfect prediction, or zero future uncertainty. It means:

- every applicable rubric item is fully satisfied for the current project stage;
- evidence and tests support the claims made;
- no known critical issue is hidden;
- limitations and unresolved external unknowns are explicitly documented;
- all mandatory gates pass;
- the reviewer can point to concrete evidence for every awarded point.

A task cannot receive 100 merely because the author says it is complete.

## Mandatory Gates

Regardless of numeric score, a task fails if any applicable gate fails.

### Universal gates

- No unsupported medical, clinical, safety, privacy, or platform claim.
- No hidden monitoring or coercive-control mechanism.
- No raw participant or explicit-content data in GitHub.
- No contradiction with the approved project charter or product doctrine.
- All required deliverables exist.
- Important limitations and uncertainties are disclosed.
- Sources, tests, calculations, or reasoning are reproducible enough for review.

### Research gates

- Primary or authoritative sources are used for load-bearing claims.
- Publication/source dates are recorded.
- Evidence quality and limitations are stated.
- Correlation, hypothesis, mechanism, and proven effect are not conflated.

### Technical gates

- Official platform documentation supports material capability claims.
- Detect, delay, block, redirect, notify, and log capabilities are distinguished.
- Bypass and failure behavior are documented.
- Tests actually run are listed; unrun tests are never described as passed.

### Product and UX gates

- The user understands what the system does and cannot do.
- Consent and exit behavior are explicit.
- High-risk flows avoid unnecessary cognitive burden.
- No shame, deceptive friction, or manipulative dark pattern is introduced.

### Business gates

- Costs and market claims use dated sources or explicit assumptions.
- Sensitivity ranges are provided where certainty is not justified.
- Revenue does not depend on intimate-data exploitation or prolonged suffering.

## Review Roles

### Author self-score

The author—ChatGPT or Codex—must submit:

- score by dimension;
- evidence for each score;
- known weaknesses;
- confidence level;
- proposed next revision.

Self-scoring never approves a task.

### Independent reviewer score

The non-authoring agent reviews the work:

- ChatGPT reviews Codex output.
- Codex may technically challenge ChatGPT specifications and architecture assumptions.
- Founder validates mission, intended user value, visible behavior, and strategic acceptance.
- Sensitive clinical, legal, privacy, security, and peer-safety work later requires qualified human expert review.

### Final accepted score

The accepted score is not the arithmetic average of generous reviews. It is the conservative, evidence-supported score after disagreements are resolved.

For high-risk dimensions, use the lower justified score until the concern is resolved.

## Improvement Loop

Every task follows this loop:

1. **Define** — Issue, scope, rubric, deliverables, sources, tests, and stop conditions.
2. **Build** — Produce the smallest complete reviewable output.
3. **Self-score** — Author fills the scorecard with evidence.
4. **Independent review** — Reviewer identifies defects, omissions, contradictions, and risks.
5. **Gap analysis** — Convert every lost point into a concrete revision item.
6. **Revise** — Author fixes the work in the same branch and PR.
7. **Re-verify** — Re-run source checks, tests, calculations, scenarios, and consistency checks.
8. **Re-score** — Update scores and preserve score history.
9. **Gate decision** — Pass, revise again, escalate, defer, or stop.
10. **Merge and learn** — After approval, record the final score, remaining limitations, and reusable lessons.

## Loop Stop Rules

The loop continues until one of these outcomes occurs:

### Pass

- weighted score is at least 95;
- every applicable mandatory gate passes;
- no unresolved Critical or High defect remains;
- acceptance criteria are met;
- required reviewers approve.

### Conditional acceptance

Allowed only for non-safety-critical work when:

- score is 90–94;
- the founder explicitly accepts a documented limitation;
- a follow-up issue and revisit date/condition are created;
- no mandatory gate or Critical/High issue fails.

### Escalation

Escalate instead of looping blindly when:

- external expert judgment is required;
- official sources conflict;
- platform access or entitlement cannot be verified;
- a legal, clinical, privacy, security, or ethical question cannot be resolved internally;
- new evidence would require real user research;
- improvement has plateaued for two review cycles.

### Stop or reject

Stop the task when:

- the mechanism is unsafe or coercive;
- the feature conflicts with project doctrine;
- the value cannot justify the data or harm risk;
- feasibility is materially weaker than the product promise;
- evidence consistently fails to support the intended claim.

## Defect Severity

| Severity | Definition | Merge rule |
| --- | --- | --- |
| Critical | Could cause severe harm, covert surveillance, major data exposure, false emergency assurance, unlawful conduct, or fundamental architectural failure | Must be resolved; no exception |
| High | Material safety, privacy, scientific, product, or feasibility defect | Must be resolved before merge |
| Medium | Important quality weakness that reduces reliability or usability | Resolve or create explicit approved follow-up |
| Low | Minor clarity, structure, formatting, or non-material completeness issue | May defer with rationale |

## Scorecard Template

Every substantial PR must include or link to this scorecard:

```markdown
## Quality Scorecard — Cycle N

### Context
- Issue:
- PR:
- Author:
- Reviewer:
- Date:
- Stage:

### Mandatory gates
- [ ] Universal gates pass
- [ ] Research gates pass / N/A
- [ ] Technical gates pass / N/A
- [ ] Product and UX gates pass / N/A
- [ ] Business gates pass / N/A

### Shared score
| Dimension | Weight | Score | Evidence | Gap |
| --- | ---: | ---: | --- | --- |
| Requirement coverage | 10 |  |  |  |
| Factual accuracy | 10 |  |  |  |
| Evidence and traceability | 10 |  |  |  |
| Safety and harm prevention | 10 |  |  |  |
| Privacy and consent | 10 |  |  |  |
| Internal consistency | 5 |  |  |  |
| Clarity and usability | 5 |  |  |  |
| Feasibility and realism | 5 |  |  |  |
| Testability and verification | 5 |  |  |  |

### Specialist score
| Criterion | Weight | Score | Evidence | Gap |
| --- | ---: | ---: | --- | --- |
| Specialist criterion 1 | 10 |  |  |  |
| Specialist criterion 2 | 10 |  |  |  |
| Specialist criterion 3 | 10 |  |  |  |

### Result
- Total: /100
- Critical defects:
- High defects:
- Medium defects:
- Confidence: Low / Medium / High
- Decision: Revise / Escalate / Conditional accept / Pass
- Next cycle actions:
```

## Score History

Do not overwrite previous cycle results. Preserve a compact history in the PR:

| Cycle | Author score | Reviewer score | Accepted score | Critical | High | Decision |
| ---: | ---: | ---: | ---: | ---: | ---: | --- |
| 1 |  |  |  |  |  |  |

This prevents score inflation and shows whether revision actually improved quality.

## Anti-Gaming Rules

- A longer document does not automatically score higher.
- More citations do not compensate for irrelevant or weak evidence.
- Missing information cannot be hidden under “future work” when it is part of acceptance criteria.
- A task cannot award itself full points without evidence.
- Rephrasing without resolving the underlying defect does not earn restored points.
- Reviewer disagreement must be documented.
- Unknowns should lower confidence, not be converted into confident assumptions.
- A perfect score is prohibited when an applicable Critical or High uncertainty remains unresolved.

## Application To ChatGPT Work

ChatGPT strategy, specifications, research syntheses, reviews, and issue definitions are subject to the same rubric.

For ChatGPT-authored work:

1. ChatGPT records a self-score in the PR or issue.
2. Codex checks technical completeness where relevant.
3. The founder accepts or rejects strategic fit.
4. Expert review is required later for regulated or high-risk claims.
5. Revisions remain visible in Git history and score history.

## Application To Codex Work

For every Codex thread:

1. Codex adds an initial rubric interpretation to the issue.
2. Codex completes deliverables and self-scores.
3. ChatGPT reviews the full diff and sources.
4. ChatGPT posts a reviewer score and defect list.
5. Codex revises until the gate result is Pass, Escalate, Stop, or founder-approved Conditional acceptance.
6. Codex may not merge its own substantial work.

## Final Multi-Thread Quality Report

After all ten execution threads reach a terminal review state, create:

- `docs/execution/THREAD_QUALITY_SUMMARY.md`
- `docs/execution/FINAL_SYNTHESIS_SCORECARD.md`

The summary must contain:

- initial and final score per thread;
- number of improvement cycles;
- defects discovered and resolved;
- unresolved limitations;
- cross-thread contradictions;
- source and evidence quality;
- founder decisions required;
- which artifacts are ready for integration;
- which work must be escalated to specialists;
- overall program score, calculated transparently.

## Program-Level Score

The program score is not a simple average if high-risk work is weak.

Calculate:

- 50% average thread score;
- 20% safety/privacy minimum score across relevant threads;
- 15% scientific/evidence integrity score;
- 15% cross-thread consistency and integration score.

A program cannot pass when:

- any thread has an unresolved Critical defect;
- any safety/privacy-sensitive thread scores below 90;
- cross-thread contradictions remain undocumented;
- the final MVP recommendation relies on an unverified technical or clinical assumption.

## Current Adoption Decision

This framework applies immediately to Execution Threads 01–10 and all future substantial Better Life tasks.
