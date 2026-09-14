# MVP scope recommendation

Status: Cycle 1 Draft - recommendation pending review and Phase 0 evidence
Issue: #25
Branch: `codex/25-mvp-product-shape`

## Recommendation

**Hypothesis:** After Phase 0 and all acceptance gates, the first MVP candidate is an **accountless local web core** that provides:

1. one editable private personal plan;
2. one manual Protective Spiral with static reviewed steps;
3. short optional education modules;
4. a visible data/consent/exit surface;
5. local export/delete appropriate to the prototype.

**Repository decision:** Current phase remains research, architecture, validation, product definition, and documentation. This recommendation does not authorize production code.

## In scope

| Item | Classification | User problem / benefit | Data and consent | Metric / exit |
| --- | --- | --- | --- | --- |
| Scope/privacy first-run | Design requirement | Prevent false clinical/protection/privacy understanding. | No external data. | Comprehension; leave freely. |
| One-page personal plan | Hypothesis | Turn intention into a calm-state plan. | Local D3; explicit save, edit/delete. | Ownership, usefulness, burden. |
| Manual Protective Spiral | Hypothesis | Make one chosen action easy in a difficult moment. | Session/local minimal. | Agency/usefulness/shame; one-tap exit. |
| Static education | Evidence-supported conclusion | Mechanism transfer is a product hypothesis; explain neutral distinctions, consent, actions, limits, and care routes. | No completion needed. | Comprehension/adverse interpretation; hide. |
| Local control view | Design requirement | Show exactly what exists and how to stop/delete. | Local inventory. | 100% task completion in system tests. |

## Separate gated experiment, not MVP baseline

| Item | Classification | Gate |
| --- | --- | --- |
| Chromium extension with synthetic/user-selected test rules | Platform limitation | Thread 01 technical spike, Thread 07 permissions/data, false-block/recovery UX, incremental user value. |

## Explicitly out of scope

- **Repository decision:** accounts, cloud sync, external AI, ally messaging, anonymous/pseudonymous peer support, free chat, monitoring reports, screenshots, content classification, diagnosis/screening, clinical treatment, payments, ads, and organization/admin dashboards.
- **Repository decision:** iOS/Android/desktop/router enforcement, universal blocking, automatic risk detection, streaks/leaderboards, partner controls, and emergency monitoring.
- **Platform limitation:** Future adapter work cannot exceed Thread 01's documented capability and bypass statements.

## Dependency gates

| Dependency | Classification | Required result |
| --- | --- | --- |
| Phase 0 interviews | Open question | Repeated user problem and value; coercion/shame/language findings; no unresolved critical safety defect. |
| Thread 02 evidence | Design requirement | Claims/content stay within approved register; clinical reviewer signs off participant copy. |
| Thread 05/06 product | Open question | Plan/Spiral/curriculum/outcomes pass comprehension and adverse-effect testing. |
| Thread 07 privacy | Design requirement | Local storage, backup, notification, export/delete, DPIA/legal scope, and consent controls pass. |
| Accessibility | Design requirement | Keyboard, screen reader, zoom/reflow, contrast, motion, cognitive load, and target-language tests pass. |
| Quality loop | Repository decision | Independent score >=95 with every universal gate and no unresolved Critical/High defect. |

## Success and failure

| Classification | Decision rule |
| --- | --- |
| Hypothesis | Success means users understand, own, and can safely use/leave the local plan/Spiral, with useful agency and no unacceptable shame, burden, or disclosure. |
| Design requirement | Session count, time in app, streak length, or subscription conversion cannot define MVP success. |
| Design requirement | If manual core lacks value, stop or reframe; do not add monitoring/AI/social complexity to manufacture engagement. |
| Design requirement | If local privacy/control cannot be explained and tested, stop before production. |

## Post-MVP order if evidence supports continuation

1. **Platform limitation:** Chromium adapter with synthetic tests and explicit limitations.
2. **Platform limitation:** Android VPN spike and iOS entitlement/API validation in parallel.
3. **Open question:** Optional sync/account only after demonstrated multi-device need and privacy proof.
4. **Open question:** Chosen ally only after coercion and exact-message consent tests.
5. **Repository decision:** Peer network and AI coach remain separate future decisions, not inevitable roadmap items.
