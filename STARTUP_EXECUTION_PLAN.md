# Better Life — Startup Execution Plan

Version: 2.0  
Date: 2026-07-10  
Status: Active

> This plan supersedes the original P-Vermeiden execution plan. The original remains available in Git history. Detailed current work is tracked in `docs/roadmap/FOUNDING_SPRINT_01.md` and GitHub issues.

## Company Thesis

Build a privacy-first, voluntary protection system that helps adults stay aligned with their long-term values during high-risk, emotionally dysregulated, or compulsive moments.

The first focus is unwanted compulsive pornography use and related digital sexual behavior. The long-term mission may expand to other self-control domains only after the first product is validated.

## Founding Principles

1. Consent before control.
2. Privacy before prediction.
3. Safety before growth.
4. Evidence before certainty.
5. Platform honesty before marketing.
6. Repair before shame.
7. User ownership before third-party power.
8. Simplicity outside, sophistication inside.
9. Build small, validate deeply, then expand.
10. Long-term autonomy before permanent product dependence.

## Strategic Sequence

### Stage 0 — Foundation And Evidence

Outcome:

- clear mission;
- product doctrine;
- scientific and clinical strategy;
- collaboration model;
- evidence map;
- user and expert discovery plan;
- technical feasibility report;
- privacy and safety governance.

Current artifacts:

- `README.md`
- `docs/foundation/PROJECT_CHARTER.md`
- `docs/foundation/PRODUCT_DOCTRINE.md`
- `docs/foundation/SCIENTIFIC_AND_CLINICAL_STRATEGY.md`
- `AI_COLLABORATION.md`
- `AGENTS.md`
- `docs/roadmap/FOUNDING_SPRINT_01.md`
- `phase0/`

### Stage 1 — Discovery And Product Selection

Outcome:

- validated first-user segment;
- ranked user problems;
- validated desired protection strength;
- evidence-backed intervention hypotheses;
- expert and lived-experience feedback;
- platform capability matrix;
- first product wedge;
- first product requirements document;
- explicit safety gates.

Work:

- user interviews;
- clinician/researcher/coach interviews;
- NGO and association landscape;
- competitor and substitute analysis;
- technical feasibility;
- concept testing;
- pricing and trust research;
- secure research-data process.

### Stage 2 — Trust-First Prototype

Outcome:

A small, usable prototype that tests the core value proposition without invasive monitoring.

Candidate elements:

- Protection Constitution / calm-state plan;
- high-risk windows and device inventory;
- chosen friction rules;
- one high-risk intervention flow;
- non-shaming lapse review;
- transparent data and consent controls;
- guided setup for existing platform protections;
- one platform-specific protection component if feasibility supports it.

The exact form—web, mobile, browser extension, desktop helper, or a layered combination—will be selected after the technical feasibility report and user evidence.

### Stage 3 — Private Alpha

Outcome:

A secure, instrumented, privacy-reviewed product used by a small adult cohort.

Requirements:

- threat model;
- data classification;
- secure identity and account recovery;
- user-visible audit trail;
- deletion and exit paths;
- adverse-event and support process;
- privacy review;
- security review;
- usability testing;
- clear limitations;
- no unsupported clinical claims.

### Stage 4 — Free Public Beta

Outcome:

A simple, trustworthy free product with measurable user value and safe operations.

Requirements:

- stable onboarding;
- reliable core protection and intervention flow;
- localized support and referral information;
- accessibility;
- privacy documentation;
- incident response;
- product analytics that avoid intimate-content collection;
- transparent limitations;
- user support.

### Stage 5 — Sustainable Product

Outcome:

An accessible, mission-aligned product with a sustainable operating model.

Working business hypotheses:

- free core access;
- later very-low-cost membership, initially envisioned around EUR 1/month;
- optional supporter membership;
- grants;
- research partnerships;
- NGO or public-interest partnerships;
- paid advanced infrastructure or professional services only where they create real value and do not remove essential safety from the free core.

The EUR 1/month idea is a hypothesis, not a committed price. It must be tested against app-store fees, taxes, payment costs, infrastructure, support, security, legal, clinical, and operational expenses.

## Product Architecture Direction

The likely long-term system is layered:

1. Shared account and user-authored protection policy.
2. Web command center for setup, review, and transparency.
3. Native mobile components for platform-specific protection and intervention.
4. Browser extensions for high-resolution web intervention.
5. Desktop helpers where justified.
6. Optional DNS/router/network support.
7. Local policy and risk processing where feasible.
8. Minimal cloud synchronization.
9. Optional minimal-disclosure human support.
10. Consent, policy versioning, audit, export, deletion, and exit.

This is a hypothesis. Codex Issue #13 must test it against current platform capabilities and limitations before architectural commitment.

## Decision Gates

### Before production implementation

- project charter approved;
- product doctrine approved;
- first-user hypothesis defined;
- technical feasibility report reviewed;
- initial evidence map complete;
- sensitive-data boundaries defined;
- first product wedge selected;
- PRD written;
- safety and privacy review complete.

### Before predictive AI

- useful signals are supported by evidence or a justified experiment;
- data necessity is documented;
- local-first processing is evaluated;
- users understand what is inferred;
- false positives and false negatives have review paths;
- no diagnosis is inferred or implied;
- model performance and subgroup risks are evaluated;
- an off switch and deletion path exist.

### Before strong restriction mode

- informed adult opt-in;
- clear preview of consequences;
- explicit duration and scope;
- transparent platform limitations;
- pre-agreed calm-state change and exit process;
- coercion and account-recovery threat model;
- no secret third-party control;
- usability and adverse-effect testing.

### Before ally or partner features

- minimal disclosure by default;
- user sees exactly what is shared;
- consent is specific and renewable;
- coercion checks exist;
- ally boundaries and response guidance exist;
- no raw history or screenshots by default;
- removal and change paths are safe.

### Before clinical claims

- claim-specific evidence;
- qualified clinical review;
- regulatory assessment;
- validated outcomes;
- appropriate study design;
- adverse-event process;
- wording approved for the target jurisdiction.

## GitHub Operating Model

GitHub is the company memory for approved, non-sensitive work.

- `main` is the stable branch.
- Strategy and governance work uses `chatgpt/<topic>` branches.
- Technical work uses `codex/<issue-number>-<topic>` branches.
- Substantial changes require issues and pull requests.
- Sensitive raw research data never enters GitHub.
- Decisions are recorded in a decision log.
- Architecture, product, safety, and data changes receive explicit review.

See `AI_COLLABORATION.md` and `AGENTS.md`.

## Immediate Priorities

1. Merge the Better Life foundation pull request after founder review.
2. Rename the GitHub repository to `better-life` or an approved available variant.
3. Complete Codex Issue #13: cross-device feasibility and reference architecture.
4. Build the evidence-map structure and claims register.
5. Map clinicians, researchers, associations, NGOs, digital-rights experts, and lived-experience groups.
6. Create the assumption register.
7. Review and improve Phase 0 interview materials.
8. Define secure research-data storage and de-identification.
9. Recruit first participants only after the research process is approved.
10. Select the first product wedge from evidence, not preference.

## Public-Safe Positioning Draft

> Better Life helps adults create healthier digital boundaries through voluntary protection tools, privacy-first self-reflection, and support designed to strengthen long-term autonomy.

Avoid until supported and approved:

- “Cures porn addiction.”
- “Impossible to bypass.”
- “Clinically proven.”
- “AI therapist.”
- “Guaranteed recovery.”
- “Rewires your brain.”

Use carefully:

- “Supports voluntary behavior change.”
- “Helps users understand and interrupt personally unwanted high-risk patterns.”
- “Designed around privacy, consent, transparency, and long-term autonomy.”

## Current Sprint

See `docs/roadmap/FOUNDING_SPRINT_01.md`.
