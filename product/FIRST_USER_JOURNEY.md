# First-user journey

Status: Cycle 1 Draft - low-fidelity research journey
Issue: #25
Branch: `codex/25-mvp-product-shape`

## Journey outcome

- **Hypothesis:** In a few calm minutes, the user can create one private plan and try one manual Spiral without account, diagnosis, explicit disclosure, payment, monitoring, AI, or another person.
- **Verified:** The journey must be useful even if the user refuses every optional field and leaves after reading scope/privacy.

| Step | Classification | Screen / decision | Data and consent | Success / exit |
| ---: | --- | --- | --- | --- |
| 0 | Verified | “For adults using this for themselves” plus not therapy/diagnosis/emergency/full-device guarantee. | No data. | Understand / leave to reviewed resources. |
| 1 | Verified | “Private by default” summary: local only, what is not collected, shared-device warning, delete/export limits. | No bundled external consent. | Continue / leave. |
| 2 | Hypothesis | “What would you like to make easier?” Choose/edit one neutral goal or skip to demo. | Local goal only if saved. | User wording; no addiction label. |
| 3 | Hypothesis | Optional “Why this matters to me” in one short line. | Local D3; skip/hide/delete. | No moral prompt or required confession. |
| 4 | Hypothesis | Choose one safe next action and one fallback from reviewed options or own wording. | Local plan. | Accessibility/context check; skip. |
| 5 | Verified | Plan preview: exact stored fields, no monitoring, no person notified, edit/delete controls. | Explicit save-to-device action. | Save / use without save / discard. |
| 6 | Hypothesis | Try manual “Pause”: one reason, one action, finish/exit. | Session-local; no success score. | Complete, skip, or exit in one action. |
| 7 | Hypothesis | Optional response: useful, not useful, uncomfortable; optional short reason in research protocol only. | Separate research consent; no raw note in repo/external AI. | Submit/skip/delete. |
| 8 | Verified | Home shows Plan, Pause, Learn, Privacy/Exit; no feed, streak, score, paywall, or notification prompt. | Local state summary. | Delete all / close. |

## Copy rules

| Classification | Use | Avoid |
| --- | --- | --- |
| Verified | “your goal,” “pause,” “next step,” “private plan,” “setback,” “what helps” | addicted, clean/dirty, failed, cured, relapse prevented, risky person |
| Hypothesis | “This may help you create a pause.” | “This will stop the urge.” |
| Verified | “The web app does not monitor other apps or devices.” | “You are protected.” |
| Verified | “Nothing is sent to another person in this version.” | Absolute “anonymous” or “no one can ever see this.” |

## Failure and edge journeys

| Scenario | Classification | Response |
| --- | --- | --- |
| Shared/coercive device | Verified | Explain risk, neutral/no-save use, fast delete/exit; no partner setup. |
| User wants diagnosis/treatment | Verified | Scope boundary and qualified-care route; no assessment score. |
| User wants strong blocking | Platform limitation | Explain current absence and exact future research; point to OS/user-controlled alternatives without superiority claim. |
| User is in immediate danger | Verified | Clear real-world emergency/crisis choices; no monitoring/rescue claim. |
| Storage unavailable/cleared | Platform limitation | Use session-only flow and explain plan may not persist. |
| Accessibility/language need | Open question | Core must be keyboard/screen-reader/zoom/reduced-motion ready; target languages require validated human review. |

## Journey research questions

1. **Open question:** Does a user understand that this is self-help research and not treatment/protection across devices?
2. **Open question:** Can they make a plan without disclosing explicit content or adopting a diagnosis label?
3. **Open question:** Is the manual Spiral useful enough to justify a digital product?
4. **Open question:** Does any step increase shame, coercion, fear, or compulsive checking?
5. **Open question:** What capability, if any, is truly missing after the manual core?
