# UX principles

Status: Cycle 1 Draft
Issue: #25
Branch: `codex/25-mvp-product-shape`

| Principle | Classification | Product behavior | Test |
| --- | --- | --- | --- |
| Self-use, not supervision | Design requirement | No partner/employer/parent admin or secret report. | Coercion scenarios cannot create/control another account. |
| Scope before setup | Design requirement | Explain non-clinical and platform limits before asking intimate input. | User can accurately paraphrase limits. |
| Private without absolutes | Design requirement | Say local/device risks and exact external flows. | No “anonymous,” “fully private,” or “zero knowledge” without proof. |
| One action under load | Hypothesis | One primary command, one alternative, visible exit. | Simulated high-load usability. |
| Calm-state authorship | Design requirement | Goals, friction, recipients, and rules are configured outside acute flow. | Acute flow cannot add restriction/share. |
| Exit is first-class | Design requirement | Pause, cancel, delete, disable, recover legitimate use. | One-action exit from every high-risk state. |
| Repair, not punishment | Hypothesis | Setback changes plan only if user chooses. | No loss message, forced confession, escalating lock. |
| User language, not diagnosis | Design requirement | Neutral editable goal and context. | No frequency-only/AI label. |
| Data is visible | Design requirement | Show local/remote fields, recipients, last send, retention and controls. | Control UI matches system inventory. |
| No automatic human disclosure | Design requirement | Exact recipient/message preview on each future send. | Cancel sends zero bytes/messages. |
| Static before AI | Design requirement | Reviewed content/rules solve first task. | Core works offline/without model. |
| Honest platform friction | Platform limitation | Name browser/device coverage, bypass and false-block recovery. | Synthetic capability matrix passes. |
| Accessible without time pressure | Design requirement | Keyboard, screen reader, reflow, contrast, reduced motion, no forced timer. | Accessibility test suite and specialist/user review. |
| Multilingual meaning, not word substitution | Open question | Human-reviewed clinical/privacy/safety meaning in each language. | Back-translation plus user comprehension; no language launched unreviewed. |
| No engagement extraction | Design requirement | No feed, streak pressure, notifications for return, variable reward, or vulnerability-targeted upsell. | Product metrics and UI audit. |
| Real-world care remains reachable | Design requirement | Professional/emergency routes directly available. | No module/payment/account prerequisite. |

## Content hierarchy

1. **Design requirement:** What can I do now?
2. **Design requirement:** What will happen and what data is used?
3. **Design requirement:** How do I stop/change/delete it?
4. **Design requirement:** What are the limits and alternatives?
5. **Hypothesis:** Optional explanation/evidence only after the immediate choice.

## Prohibited patterns

- **Design requirement:** countdown pressure, alarming red failure states, loss-framed streaks, hidden defaults, prechecked sharing, consent walls, forced account/payment, buried cancellation, fake scarcity, “commitment” shaming, and permission requests before explanation.
- **Design requirement:** sexualized/explicit imagery, moralizing copy, testimonials presented as outcomes, or visual comparison of “clean/dirty” states.
