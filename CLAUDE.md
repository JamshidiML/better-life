# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Repository Is

Better Life is a privacy-first behavioral technology startup building voluntary protection systems for
adults who want help staying aligned with their long-term values during high-risk, compulsive moments
(first focus: unwanted compulsive pornography use). The company is in **Phase 0 — Foundation, Discovery,
Clinical Safety, and Technical Feasibility**: this repository currently contains no application source
code, no package manifest, and no test/build/lint tooling. It is a structured corpus of strategy,
research, safety, architecture-research, and execution-process documents that will drive a future
implementation. Treat every task here as a documentation/research change unless a future task explicitly
introduces app code — there are no build, lint, or test commands to run today.

Because there is no code yet, "development workflow" in this repo means: read the governing docs, work
from an issue, write/update the correct markdown artifact under the correct path, and pass the mandatory
quality-scoring loop before merge.

## Required Reading Before Non-Trivial Work

Read these before changing product behavior/scope, architecture, sensitive data handling, AI usage,
blocking mechanisms, ally sharing, strict mode, or clinical language — in this order:

1. `README.md` — mission, product thesis, non-negotiable principle, repo map.
2. `AGENTS.md` — the authoritative agent operating rules (this file summarizes and defers to it).
3. `docs/foundation/PROJECT_CHARTER.md` — mission, scope, user promise, strategic boundaries.
4. `docs/foundation/PRODUCT_DOCTRINE.md` — product decision rules (see summary below).
5. `docs/foundation/SCIENTIFIC_AND_CLINICAL_STRATEGY.md` — evidence and expert-engagement strategy.
6. `AI_COLLABORATION.md` — founder / ChatGPT / Codex operating model.
7. `phase0/SAFETY_AND_CONSENT.md` and `phase0/RISK_REGISTER.md`.
8. `phase0/DECISION_LOG.md` — recorded decisions; check before re-deciding something already settled.
9. `docs/execution/QUALITY_SCORING_AND_IMPROVEMENT_LOOP.md` — the mandatory review/scoring process.
10. `docs/execution/EXECUTION_THREADS_01.md` — the current parallel workstream plan, if working within it.

`AGENTS.md` is the canonical instruction set for coding agents in this repo; if anything here conflicts
with it, `AGENTS.md` wins.

## Non-Negotiable Constraints

These apply to every change, in docs or (eventually) code:

- No hidden monitoring; no partner/employer/parent/school/religious-group/government spyware.
- No raw explicit-content collection by default; no default screenshot sharing.
- No secret third-party configuration.
- No diagnosis or treatment claims without approved evidence and review.
- No shame-based engagement or public-failure mechanics; no dark patterns.
- No sale or ad-targeting use of intimate behavioral data.
- No raw participant research notes committed to the repo or pasted into external AI systems — only
  research protocols, blank templates, de-identified aggregate synthesis, and non-identifying decisions
  belong in `phase0/` and `docs/`.
- Never claim protection is impossible to bypass; document bypasses honestly instead.
- Strong/"strict mode" controls must be user-authored, transparent, auditable, and paired with a safe
  calm-state modification and exit process (see Product Doctrine §2–4 below).

## Engineering / Contribution Rules

- Work from a GitHub issue for anything beyond a small typo fix. Product, architecture, data, safety, or
  user-facing behavior changes always need an issue.
- Branch naming: `codex/<issue-number>-<short-topic>` for agent technical work, `chatgpt/<issue-or-topic>`
  for strategy/spec/governance work, `founder/<topic>` for founder-authored changes. Do not commit
  substantial work directly to `main`.
- Keep PRs small, focused, and free of unrelated refactors.
- Never claim a test or check was run unless it was actually executed; record exact commands/verification
  performed. Record limitations and platform-specific constraints honestly rather than smoothing them over.
- Use the PR template (`.github/PULL_REQUEST_TEMPLATE.md`): summary, change type, a safety/privacy
  checklist (no hidden monitoring, no explicit-content collection, no raw browsing-history exposure,
  consent implications documented, any ally/supporter visibility minimal and user-approved), verification,
  open questions.
- Issue templates live in `.github/ISSUE_TEMPLATE/`: `phase0-research.md`, `product-spec.md`,
  `safety-review.md`, `technical-feasibility.md` — pick the one matching the work.
- Sensitive features (intimate data, prediction, blocking, ally sharing, strict mode, crisis flows,
  clinical language) require explicit safety/privacy review before merge, and later require qualified
  human expert review, not just agent review.
- If requirements are missing (problem, target user, mechanism, evidence/rationale, required data, consent
  model, safety/misuse risks, platform feasibility, success criteria, failure/exit behavior), comment on
  the issue and ask rather than inventing sensitive requirements. Stop and escalate (don't loop blindly)
  when requirements conflict with the charter/doctrine, consent is ambiguous, a clinical claim lacks
  approval, or two review cycles fail to materially improve the score.

## Mandatory Quality Scoring Loop

**Every substantial task — docs, research, architecture proposal, or future code — must go through the
loop defined in `docs/execution/QUALITY_SCORING_AND_IMPROVEMENT_LOOP.md`.** Summary:

- Work is scored 0–100: 70 points across shared dimensions (requirement coverage, factual accuracy,
  evidence/traceability, safety and harm prevention, privacy and consent, internal consistency, clarity,
  feasibility, testability), plus 30 points of thread-specific specialist criteria (see that doc for the
  ten execution threads' criteria).
- Mandatory gates (universal, research, technical, product/UX, business — see the doc) must pass
  regardless of numeric score; a Critical or High defect blocks merge unconditionally.
- Loop: Define → Build → Self-score (with evidence) → Independent review → Gap analysis → Revise →
  Re-verify → Re-score → Gate decision (Pass ≥95 / Conditional accept 90–94 with founder sign-off /
  Escalate / Stop) → Merge and learn. Score history must be preserved in the PR, never overwritten.
- The author never self-approves or merges their own substantial work; an independent reviewer scores it
  (ChatGPT reviews Codex/agent output; the founder approves strategic/mission fit; sensitive-topic work
  needs qualified human expert review later).
- Include the Quality Scorecard (template in that doc) in any substantial PR.

## Founder / ChatGPT / Codex Collaboration Model (`AI_COLLABORATION.md`)

GitHub is the shared source of truth — no private memory is shared between agents; coordination happens
through issues, branches, commits, PRs, the decision log, and specs.

- **Founder (Mohsen Jamshidi)** — mission, values, final priorities, acceptable risk, approves major
  product/clinical/privacy/business decisions.
- **ChatGPT** — strategy lead, product architect, research lead, and reviewer: problem definition,
  evidence synthesis, product requirements, safety/privacy/consent analysis, decomposes work into issues,
  reviews agent output.
- **Codex / coding agents (this role)** — repository inspection, technical feasibility studies,
  implementation plans, code/architecture within approved boundaries, refactoring, docs, CI/CD; must not
  silently redefine product strategy, clinical claims, data policy, or consent rules — document conflicts
  and stop instead of inventing risky assumptions.

Conflict-resolution priority order: user safety/law → informed consent/privacy → founder-approved
mission/doctrine → evidence and clinical honesty → user value/usability → technical reliability/security →
speed → growth/revenue.

## Product Doctrine Summary (`docs/foundation/PRODUCT_DOCTRINE.md`)

Referenced constantly when evaluating any proposed feature or flow:

- **Core principle:** use calm-state consent to protect the user during high-risk states. It is a
  capability system, not a punishment system — never humiliate, threaten, expose, moralize, or create
  public failure.
- **Precommitment contract:** the working product concept is a user-authored **"Protection Constitution"**
  (see `phase0/DEVICE_CONSTITUTION_DRAFT.md`) — defines protected times/places/apps, intervention
  intensity, delay periods, emergency-access rules, allowed data signals, ally involvement, and
  modification/exit rights.
- **Layered protection model (A–G):** user/life context → behavioral intervention (delay, urge surfing,
  grounding, replacement actions) → app/browser friction → device/OS controls → network protection →
  human support (minimum useful disclosure) → intelligence/risk detection (local-first, explainable, no
  hidden diagnosis). No single layer/blocker is treated as sufficient.
  See `architecture/PROTECTION_CAPABILITY_MATRIX.md`, `architecture/REFERENCE_ARCHITECTURE_OPTIONS.md`,
  and `architecture/PLATFORM_LIMITATIONS_AND_BYPASS.md` for the current technical feasibility research
  behind this model.
- **Every major flow addresses Before / During / After:** reduce exposure & prepare beforehand; pause,
  add friction, guide attention during a high-risk moment; avoid shame and repair/update the plan after.
- **Privacy doctrine:** minimum necessary data, on-device processing preferred for intimate signals,
  separate identity/contact/research/behavioral data, short retention, export/delete rights, never sell or
  ad-target on intimate data, no training general models on raw intimate data without dedicated
  governance.
- **Clinical honesty doctrine:** distinguish self-help / behavioral support / coaching / psychotherapy /
  diagnosis / medical treatment / emergency response — never blur these, never diagnose.
- **AI doctrine:** AI is a component, not the product identity; use only where it beats simpler methods;
  prefer local/privacy-preserving inference for intimate signals; never infer sexuality/trauma/religion/
  mental illness without explicit approved purpose and consent; never send raw intimate content/history to
  external models by default.
- **Platform honesty doctrine:** never market stronger control than a platform can reliably deliver —
  document detect/delay/block/redirect/notify/log distinctly per platform, and document bypasses.
- **Feature Decision Scorecard (§14):** ten questions every proposed feature must answer before it
  advances (repeated important problem? credible mechanism? evidence or justified experiment? consent
  meaningful? proportionate data? honest platform feasibility? coercion/shame/false-positive risk? can the
  user modify/leave it safely? etc.).

## Repository Map

- `README.md` — mission, thesis, principles, current stage, repo map, safety position.
- `AGENTS.md` — canonical agent operating rules (read first, takes precedence).
- `AI_COLLABORATION.md` — founder/ChatGPT/Codex roles and process.
- `PRODUCT_INNOVATION_BRIEF.md` / `PRODUCT_INNOVATION_BRIEF_FA.md` — product brief (English / Farsi).
- `STARTUP_EXECUTION_PLAN.md` — original execution roadmap (predates the Better Life identity; being
  superseded by `docs/execution/`).
- `docs/foundation/` — `PROJECT_CHARTER.md`, `PRODUCT_DOCTRINE.md`, `SCIENTIFIC_AND_CLINICAL_STRATEGY.md`.
- `docs/vision/` — `BETTER_LIFE_MASTER_VISION.md`, `VISION_TO_PRODUCT_MAP.md`.
- `docs/roadmap/` — `FOUNDING_SPRINT_01.md`.
- `docs/execution/` — the quality-scoring framework, the ten-thread execution plan
  (`EXECUTION_THREADS_01.md`), and per-thread working folders (e.g.
  `docs/execution/thread-01-13-cross-device-feasibility/` with its own README, assumption log, risk log,
  and cycle-by-cycle quality scorecards/review responses — this per-thread folder pattern is the template
  for threads 02–10 as they start).
- `architecture/` — technical feasibility research output from Thread 01: cross-device feasibility, the
  protection capability matrix, reference architecture options, platform limitations/bypass, and
  cycle-numbered protection-stack/adapter research documents plus a platform source register (CSV).
- `phase0/` — Phase-0 research and safety artifacts: safety/consent policy, risk register, decision log,
  interview guides/note templates, recruitment kit, device constitution draft, relapse debrief prototype,
  synthesis template, ally-signal copy, outreach brief. **Never commit raw participant data here** — only
  protocols, blank templates, and de-identified synthesis.
- `.github/ISSUE_TEMPLATE/` and `.github/PULL_REQUEST_TEMPLATE.md` — required forms for issues and PRs.

## Execution Threads (current active work structure)

Work is currently organized as ten mostly-independent discovery/architecture/product/safety/scientific/
business threads (`docs/execution/EXECUTION_THREADS_01.md`), each with its own GitHub issue, branch
(`codex/<issue>-<topic>`), and draft PR, producing docs-only deliverables (no production code in this
cycle). Threads must not silently redefine the charter, safety boundaries, or consent doctrine, and cross-
thread conflicts get documented in the thread issue rather than resolved by overwriting another thread's
work (e.g., Thread 10's product-shape work marks technical assumptions pending Thread 01; Thread 04's
anonymous-support design marks data assumptions pending Thread 07). Each thread follows the same protocol:
post a plan on the issue → branch from `main` → create doc skeletons → open an early draft PR → complete
deliverables → submit a Cycle 1 Quality Scorecard → independent review → revise/re-score until Pass,
Conditional acceptance, Escalate, or Stop. After all ten threads reach a terminal state, a founder-facing
final synthesis (`THREADS_01_FINAL_REPORT.md`, decision matrix, artifact index, quality summary, and
program-level scorecard) is produced under `docs/execution/`.
