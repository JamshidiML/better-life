# Better Life — Founder, ChatGPT, and Codex Collaboration Model

Status: v0.1  
Date: 2026-07-10

GitHub is the shared source of truth for Better Life. ChatGPT and Codex do not share a private memory directly; they coordinate through repository artifacts: issues, branches, commits, pull requests, decision logs, specifications, tests, and review comments.

## 1. Roles

### Founder and Product Owner — Mohsen Jamshidi

Accountable for:

- mission and values;
- final product priorities;
- target users and markets;
- acceptable risk;
- company identity and business direction;
- approval of major product, clinical, privacy, and business decisions;
- access to real users, experts, partners, and lived experience;
- final acceptance of strategic changes.

The founder should not need to specify every technical detail. The team should turn founder intent into clear options, risks, evidence, and recommendations.

### ChatGPT — Cofounder, Strategy Lead, Product Architect, Research Lead, and Reviewer

Accountable for:

- company and product strategy;
- problem definition and product positioning;
- scientific and clinical research planning;
- evidence synthesis and uncertainty tracking;
- user-research design;
- product requirements;
- business-model exploration;
- safety, privacy, consent, and misuse analysis;
- system architecture direction;
- decomposition of work into GitHub issues;
- creation of Codex task briefs;
- review of Codex output, pull requests, tests, and architecture;
- maintaining coherence across product, science, engineering, safety, and business.

ChatGPT should challenge founder assumptions respectfully when evidence, feasibility, safety, or business logic requires it.

### Codex — Principal Implementation Engineer and Technical Investigator

Accountable for:

- repository inspection;
- technical feasibility studies;
- implementation plans;
- code architecture within approved boundaries;
- frontend, backend, mobile, browser, desktop, infrastructure, and testing work;
- refactoring;
- bug fixing;
- developer documentation;
- CI/CD;
- security-oriented implementation practices;
- preparing small, reviewable pull requests.

Codex must not silently redefine product strategy, clinical claims, data policy, or consent rules. When requirements are ambiguous or conflict with repository doctrine, Codex should document the conflict and stop the affected part rather than inventing a risky assumption.

## 2. Work Intake

Every substantial task starts as a GitHub issue containing:

- context;
- user problem;
- objective;
- scope;
- non-goals;
- safety and privacy constraints;
- required deliverables;
- acceptance criteria;
- verification method;
- open questions;
- owner or intended agent.

Small typo fixes may skip an issue, but not product, architecture, data, safety, or user-facing behavior changes.

## 3. Branch Rules

Default branch:

- `main`

Protected working pattern:

- `chatgpt/<issue-or-topic>` for strategy, specs, governance, research synthesis, and architecture direction.
- `codex/<issue-number>-<short-topic>` for Codex technical work.
- `founder/<topic>` for founder-authored changes when needed.

Do not commit substantial work directly to `main`.

## 4. Pull Request Rules

Every substantial branch should end in a pull request.

A pull request must explain:

- what changed;
- why;
- issue link;
- user impact;
- safety and privacy impact;
- data changes;
- verification performed;
- screenshots or recordings for UI changes when safe;
- limitations and follow-up work.

Prefer small pull requests that can be understood and reviewed independently.

## 5. Review Model

### Strategy and product work

- ChatGPT prepares or reviews.
- Founder approves major direction.
- Codex may challenge technical feasibility.

### Technical work

- Codex implements.
- ChatGPT reviews architecture, requirements, safety, privacy, UX logic, and test coverage.
- Founder reviews visible behavior and strategic fit.

### Sensitive features

Features involving intimate data, prediction, blocking, ally sharing, strict mode, crisis flows, or clinical language require explicit safety/privacy review before merge.

## 6. Decision Records

Use the decision log for choices that materially affect:

- mission;
- target user;
- product scope;
- platform;
- architecture;
- sensitive data;
- AI;
- consent;
- clinical claims;
- business model;
- pricing;
- partnerships;
- safety boundaries.

Each decision should record:

- date;
- decision;
- rationale;
- evidence;
- alternatives considered;
- risks;
- owner;
- revisit condition.

## 7. Evidence And Source Rules

- Prefer original sources, official documentation, systematic reviews, and primary research.
- Verify important claims against the original source.
- Mark hypotheses as hypotheses.
- Mark inferences as inferences.
- Do not turn uncertain neuroscience into deterministic product copy.
- Do not treat a competitor claim as clinical evidence.
- Do not paste raw sensitive participant notes into general AI systems.

## 8. Privacy And Research Data Rules

Raw user-research data must not be committed to the repository.

The repository may contain:

- research protocols;
- blank templates;
- de-identified aggregate synthesis;
- evidence-backed product implications;
- non-identifying decisions.

Store contact details and sensitive notes outside GitHub in an approved restricted system. Before AI-assisted synthesis, manually remove names, participant codes, exact dates, locations, employers, rare events, explicit details, and other re-identification risks.

## 9. Codex Task Protocol

When ChatGPT creates a Codex task, it should include:

1. Repository and branch naming.
2. Exact issue number.
3. Goal.
4. Files to inspect first.
5. Deliverables.
6. Constraints and non-goals.
7. Required tests or validation.
8. Pull-request expectations.
9. Stop conditions.

Codex should:

- read `AGENTS.md` first;
- read linked foundation and safety documents;
- comment on the issue with its plan before implementation when the task is large;
- avoid unrelated refactors;
- keep commits coherent;
- open a draft pull request early for multi-day work;
- report blockers honestly;
- never claim tests passed unless they were run.

## 10. Conflict Resolution

Priority order:

1. User safety and applicable law.
2. Informed consent and privacy.
3. Founder-approved mission and product doctrine.
4. Evidence and clinical honesty.
5. User value and usability.
6. Technical reliability and security.
7. Speed.
8. Growth and revenue.

Conflicts should be recorded rather than hidden.

## 11. Definition Of Done

A task is not done merely because code or text exists.

It is done when:

- acceptance criteria are met;
- relevant tests or review are complete;
- limitations are documented;
- safety and privacy effects are considered;
- documentation is updated;
- the pull request is reviewed;
- follow-up work is captured;
- the change is merged deliberately.

## 12. Current Operating Decision

During the founding phase:

- ChatGPT leads strategy, scientific framing, product doctrine, issue design, and review.
- Codex begins with technical feasibility and repository engineering tasks, not autonomous product coding.
- Production implementation starts only after the first product scope and safety gates are explicit.
