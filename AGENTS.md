# AGENTS.md — Better Life Repository Instructions

These instructions apply to Codex and any other coding agent working in this repository.

## Mission

Better Life builds privacy-first, voluntary protection systems for adults who want help staying aligned with their long-term values during high-risk or compulsive moments. The first focus is unwanted compulsive pornography use and related digital sexual behavior.

## Read Before Work

Read these files before changing product behavior, architecture, sensitive data, AI, blocking, ally sharing, strict mode, or clinical language:

1. `README.md`
2. `docs/foundation/PROJECT_CHARTER.md`
3. `docs/foundation/PRODUCT_DOCTRINE.md`
4. `docs/foundation/SCIENTIFIC_AND_CLINICAL_STRATEGY.md`
5. `AI_COLLABORATION.md`
6. `phase0/SAFETY_AND_CONSENT.md`
7. `phase0/RISK_REGISTER.md`
8. `phase0/DECISION_LOG.md`
9. `docs/execution/QUALITY_SCORING_AND_IMPROVEMENT_LOOP.md`
10. `docs/execution/EXECUTION_THREADS_01.md`

## Non-Negotiable Constraints

- No hidden monitoring.
- No partner, employer, parent, school, religious-group, or government spyware.
- No raw explicit-content collection by default.
- No default screenshot sharing.
- No secret third-party configuration.
- No diagnosis or treatment claims without approved evidence and review.
- No shame-based engagement or public failure mechanics.
- No sale of intimate behavioral data.
- No intimate-data advertising.
- No raw participant notes in the repository or external AI systems.
- Do not promise that protection is impossible to bypass.
- Strong controls must be user-authored, transparent, auditable, and paired with a safe calm-state modification and exit process.

## Engineering Rules

- Work from a GitHub issue.
- Use a branch named `codex/<issue-number>-<short-topic>`.
- Do not commit substantial changes directly to `main`.
- Keep pull requests small and focused.
- Avoid unrelated refactors.
- Add or update tests for behavior changes.
- Document commands actually run.
- Never claim a test passed unless it was executed.
- Record limitations and platform-specific constraints honestly.
- Prefer local-first processing and data minimization for intimate signals.
- Treat inferred health, sexual, emotional, religious, relationship, and behavioral data as highly sensitive.

## Mandatory Quality Loop

Every substantial task must follow `docs/execution/QUALITY_SCORING_AND_IMPROVEMENT_LOOP.md`.

The creator must:

- include a complete self-score out of 100 in the Pull Request;
- score each rubric category separately;
- provide evidence for every awarded point;
- list known weaknesses, missing evidence, and checks actually performed;
- never self-approve or merge;
- revise against reviewer deductions;
- preserve score history;
- re-score after every revision cycle.

The reviewer must independently score the work using the same framework.

A task cannot be accepted only because its numeric score is high. All applicable mandatory gates must pass, and no unresolved Critical or High defect may remain.

A score of 100 means complete against the approved current scope and rubric. It does not mean permanent truth, clinical proof, zero risk, or freedom from future revision.

The loop continues until the result is Pass, Conditional acceptance, Escalate, or Stop according to the documented rules. Blind repetition is not allowed when expert review, real user research, or unavailable platform evidence is required.

## Product And Architecture Rules

Before implementing a feature, identify:

- user problem;
- target user;
- mechanism;
- evidence or experimental rationale;
- required data;
- consent model;
- safety and misuse risks;
- platform feasibility;
- success criteria;
- failure and exit behavior.

If these are missing, comment on the issue and request clarification instead of inventing sensitive requirements.

## AI Rules

- Use AI only where it adds measurable value over simpler methods.
- Prefer on-device or privacy-preserving inference for intimate signals.
- Do not infer diagnosis, sexuality, trauma, religion, or mental illness without explicit approved purpose, consent, and review.
- Do not send raw intimate histories or content to external models by default.
- Explain automated restrictions and provide user-visible review paths.

## Stop And Escalate

Stop the affected work and raise a blocker when:

- requirements conflict with the project charter or product doctrine;
- a feature enables covert surveillance or coercive control;
- consent is ambiguous;
- sensitive-data handling is undefined;
- a clinical claim lacks approval;
- the requested platform capability is impossible or materially weaker than promised;
- tests cannot be run or results are uncertain;
- the change could create serious safety, privacy, or legal risk;
- two quality-review cycles fail to improve the accepted score materially;
- a full score would require evidence or expertise not currently available.

## Pull Request Checklist

Include:

- linked issue;
- summary and rationale;
- files changed;
- user impact;
- safety/privacy impact;
- data changes;
- verification and exact commands;
- screenshots for UI changes when safe;
- known limitations;
- follow-up issues;
- creator quality self-score;
- rubric breakdown and evidence;
- defect list and severity;
- score history;
- checks actually performed;
- requested reviewer focus.
