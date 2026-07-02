# Startup Execution Plan

Date: 2026-07-03

This plan turns the product brief into an operating startup. It assumes we will use GitHub as the source of truth for code, product decisions, research artifacts, issues, milestones, pull requests, and release discipline.

## Company Thesis

Build the first consent-based recovery operating layer for adults who want to reduce unwanted compulsive pornography use and related digital sexual behavior.

The product should not be a simple blocker. It should become a trusted recovery infrastructure that:

- Detects relapse sequences early.
- Adds friction during vulnerable moments.
- Protects privacy by default.
- Involves humans only with informed consent.
- Helps the user become less dependent on external controls over time.

## Founding Principles

1. Consent before control.
2. Privacy before analytics.
3. Safety before growth.
4. Evidence before product certainty.
5. Platform honesty before marketing.
6. Repair before shame.
7. Autonomy before lock-in.
8. Build small, validate deeply, then expand.

## GitHub Operating Model

### Repository Setup

Recommended initial repository:

- Name: `p-vermeiden` or `digital-recovery-platform`
- Visibility: private during Phase 0 and early MVP
- Default branch: `main`
- Branch prefix for work: `codex/`
- First protected branch: `main`

The repo should become the company memory:

- Product strategy lives in markdown.
- Research protocols and synthesis live in `/phase0`.
- Product requirements live in `/product`.
- Architecture lives in `/architecture`.
- App code should come later under `/apps`.
- Security and privacy reviews should be required for sensitive features.

### Suggested Repository Structure

```text
/
  README.md
  STARTUP_EXECUTION_PLAN.md
  PRODUCT_INNOVATION_BRIEF.md
  PRODUCT_INNOVATION_BRIEF_FA.md
  phase0/
  product/
  architecture/
  research/
  security/
  legal/
  apps/
    web/
    mobile/
    browser-extension/
    desktop-agent/
  packages/
  .github/
```

Only create folders when they have real content. Empty structure looks professional for one day and then becomes clutter.

### GitHub Labels

Create these labels first:

- `phase-0`
- `research`
- `safety`
- `privacy`
- `product`
- `clinical-review`
- `technical-feasibility`
- `platform-ios`
- `platform-android`
- `platform-desktop`
- `platform-browser`
- `mvp`
- `blocked`
- `decision-needed`
- `do-not-build-yet`

### Milestones

1. `M0: Foundation`
   - Product brief complete.
   - Persian brief complete.
   - Phase 0 research kit complete.
   - GitHub repo created.

2. `M1: Phase 0 Evidence`
   - 8-12 user interviews.
   - 5-8 therapist/coach interviews.
   - 5-8 ally/partner interviews.
   - First synthesis batch.
   - Updated risk register.

3. `M2: MVP Definition`
   - Phase 1 MVP scope.
   - Feature red lines.
   - Data model boundaries.
   - Platform feasibility decision.
   - Prototype copy approved.

4. `M3: Trust-First Prototype`
   - Web command center prototype.
   - Browser extension concept.
   - Device Constitution flow.
   - Urge Delay Exchange prototype.
   - Relapse debrief prototype.

5. `M4: Private Alpha`
   - Local-first event log.
   - Minimal ally signal.
   - Manual debrief.
   - Privacy review.
   - Small alpha cohort.

## First GitHub Issues

Create these as the initial issue backlog:

1. `Create private GitHub repository and push foundation docs`
2. `Create labels and milestones`
3. `Review Phase 0 safety and consent guardrails`
4. `Recruit first 5 user interview participants`
5. `Recruit first 3 therapist or coach participants`
6. `Run first user interview and save notes with template`
7. `Synthesize first 5 user interviews`
8. `Revise Device Constitution draft from interview evidence`
9. `Revise ally signal copy from supporter interviews`
10. `Define Phase 1 MVP safety gates`
11. `Decide first technical platform target`
12. `Draft product requirements for Trust-First MVP`

## 90-Day Execution Plan

### Days 1-7: Foundation

- Create GitHub repo.
- Commit product brief, Persian brief, Phase 0 kit, and startup plan.
- Create labels, milestones, issue templates, and PR template.
- Decide whether the repo stays private.
- Write one-page public-safe description that avoids medical claims.
- Prepare participant recruitment message.

### Days 8-21: Discovery Interviews

- Interview 5 users.
- Interview 2-3 therapists/coaches.
- Interview 2 allies/partners.
- Update risk register after every batch.
- Do not build product features yet.

### Days 22-35: Synthesis And Narrowing

- Produce first synthesis document.
- Identify top 3 relapse sequence archetypes.
- Identify top 3 safe interventions.
- Identify top 3 privacy red lines.
- Decide the first target platform for prototype.

### Days 36-50: Prototype Requirements

- Write Phase 1 PRD.
- Define data model boundaries.
- Define Device Constitution flow.
- Define relapse debrief flow.
- Define ally signal flow.
- Define what must stay local.

### Days 51-75: Build Trust-First Prototype

- Build a simple web command center prototype.
- Build Device Constitution creation flow.
- Build manual relapse debrief.
- Build minimal ally signal mock flow.
- Avoid invasive monitoring.
- Test copy and flow with interview participants.

### Days 76-90: Alpha Readiness

- Run a small usability study.
- Update safety guardrails.
- Decide whether to add browser extension prototype.
- Prepare private alpha plan.
- Decide what legal, clinical, and security reviews are required before launch.

## Product Roadmap

### Phase 0: Discovery And Clinical Safety

Outcome: evidence-backed MVP scope and safety boundaries.

Artifacts:

- Research notes.
- Interview synthesis.
- Updated risk register.
- Safety language.
- Consent model.
- Phase 1 PRD.

### Phase 1: Trust-First MVP

Outcome: users can define their recovery rules, debrief lapses without shame, and optionally involve an ally with minimal disclosure.

Possible features:

- Device Constitution.
- Urge Delay Exchange.
- Manual relapse debrief.
- Device inventory.
- Minimal ally signal.
- Local-first event log.
- Setup guides for existing OS controls.

Avoid:

- Screenshots.
- Raw browser history collection.
- AI diagnosis.
- Hidden monitoring.
- Partner surveillance.

### Phase 2: Cross-Device Hardening

Outcome: add platform-specific friction where technically and ethically safe.

Possible features:

- Browser extension.
- Android companion with explicit permissions.
- Desktop helper.
- Router/DNS guidance.
- Tamper cooling period.
- Travel mode.

### Phase 3: Predictive Intelligence

Outcome: intervene earlier using privacy-preserving signals.

Possible features:

- Local risk model.
- Sequence-level detection.
- Personalized friction ladder.
- AI-assisted debrief.
- Privacy-preserving aggregate insights.

## First Product To Build

The safest first product is not the blocker. It is the recovery command center:

1. User writes a Device Constitution.
2. User maps high-risk windows and devices.
3. User chooses friction rules.
4. User chooses what an ally may see.
5. User completes a non-shaming debrief after lapses.
6. User learns which patterns repeat.

This creates trust and evidence before asking for deeper device permissions.

## Decision Gates

Do not move to Phase 1 until:

- At least 8 user interviews are complete.
- At least 3 expert interviews are complete.
- Safety language has been revised from evidence.
- Consent model has been reviewed.
- First target platform is chosen.
- Phase 1 feature list avoids invasive monitoring.

Do not add AI prediction until:

- We know which signals are useful.
- We can keep sensitive data local by default.
- Users understand what the model infers.
- False positives have a review path.

Do not add ally reporting until:

- Users can see exactly what is shared.
- Allies understand how to respond.
- Coercion checks exist.
- Default reports avoid raw content.

## How We Work Together

You act as founder and product owner:

- Decide mission, market, user priorities, and risk tolerance.
- Recruit interview participants.
- Review product copy and safety choices.
- Decide when to create the GitHub remote.
- Decide company name and public positioning.

I act as product/engineering/research partner:

- Maintain repo structure.
- Turn ideas into specs, issues, and prototypes.
- Draft research artifacts and syntheses.
- Build MVP code when Phase 1 starts.
- Keep safety, privacy, and platform realism visible.
- Prepare commits, PRs, and release notes when you want them.

## Immediate Next Actions

1. Choose repository name.
2. Create GitHub remote.
3. Commit the current foundation docs.
4. Create initial labels and milestones.
5. Recruit the first 5 user interview candidates.
6. Run the first interview using `phase0/INTERVIEW_GUIDES.md`.
7. Save notes using `phase0/INTERVIEW_NOTE_TEMPLATE.md`.

## Public Positioning Draft

P-Vermeiden helps adults build healthier digital boundaries through consent-based recovery tools, privacy-preserving self-reflection, and support systems designed to reduce shame and increase autonomy.

Avoid public claims like:

- "Cures porn addiction."
- "Impossible to bypass."
- "Clinically proven."
- "AI therapist."
- "Guaranteed recovery."

Until validated, use:

- "Supports voluntary behavior change."
- "Helps users understand and interrupt high-risk patterns."
- "Designed around privacy, consent, and long-term autonomy."
