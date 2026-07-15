# Protective Spiral specification

Status: Cycle 1 Draft - product hypothesis, not a clinical protocol
Issue: #20
Branch: `codex/20-protective-spiral`
Research cutoff: 2026-07-15

## Product proposition

- **Hypothesis:** In a self-identified high-risk moment, a short sequence of user-chosen pause, environment change, coping action, and optional human support may help the user make a deliberate next choice.
- **Evidence-supported conclusion:** Better Life has no evidence that the sequence treats CSBD/PPU, prevents a setback, or works for a particular person.
- **Design requirement:** The Spiral is user-initiated or triggered by an explicitly configured local event; it does not secretly infer sexual behavior or psychological state.

## Architecture and product pre-check

| Required element | Classification | Cycle 1 answer |
| --- | --- | --- |
| User problem | Evidence-supported conclusion | Interviews and repository research concern adults who describe moments where intention and immediate action diverge; exact target fit remains to be validated. |
| Expected benefit | Hypothesis | Reduce cognitive load and make one self-chosen alternative action easier without shame or certainty claims. |
| Supporting evidence | Evidence-supported conclusion | Thread 02 supports cautious research into CBT/ACT/mindfulness/relapse-planning mechanisms while explicitly withholding Better Life efficacy claims. |
| Required data | Hypothesis | Local configuration, entry source, chosen step, completion/skip, optional usefulness/burden, and no explicit content. |
| Consent requirements | Design requirement | Each trigger source, restriction, notification, ally signal, and data-sharing path is separately opt-in, previewable, revocable, and editable in a calm state. |
| Safety risks | Evidence-supported conclusion | Cognitive overload, panic, shame, rumination, compulsive logging, blocked legitimate activity, care displacement, and coercion. |
| Misuse risks | Evidence-supported conclusion | Partner-controlled rules, secret notification, punitive lockout, forced disclosure, fake emergency detection, and impossible-bypass claims are prohibited. |
| Platform feasibility | Platform limitation | Detection/enforcement varies by platform and can be bypassed; Thread 01 recommends testing a web/Chromium wedge and Android network spike. |
| Success metric | Hypothesis | Intent-to-action completion, time-to-chosen-action, usefulness, burden, shame effect, unwanted triggering, exit success, and platform failure rate. |
| Exit strategy | Design requirement | A visible safe exit always returns control; remove or simplify any step that adds harm/burden without incremental benefit. |

## Design invariants

1. **Design requirement:** One primary action is shown per state, with one visible alternative and a visible exit.
2. **Design requirement:** No countdown, red alarm, loss message, streak threat, moral judgment, or escalating punishment.
3. **Design requirement:** The user writes or selects their plan while calm; the high-risk flow cannot silently add restrictions or recipients.
4. **Design requirement:** Ally/peer contact is never automatic and always previews the exact recipient and message.
5. **Design requirement:** Skipping, leaving, disabling, or experiencing a setback does not create a penalty or public event.
6. **Design requirement:** “Urgent” means the user's chosen support mode, not a clinical or emergency assessment.
7. **Design requirement:** The flow works without AI; AI is optional and cannot send messages or make clinical decisions.

## Configuration model

| Setting | Classification | Safe default | Constraint |
| --- | --- | --- | --- |
| Entry method | Design requirement | Manual “Pause” action | Automatic signals off until separately configured and platform-limited. |
| First action | Hypothesis | User-selected environment or grounding action | Must be brief, safe, and physically feasible. |
| Duration | Hypothesis | No forced countdown; optional short timer | User can end at any time. |
| Alternative action | Hypothesis | One user-selected fallback | Do not expose a large decision menu. |
| Friction | Hypothesis | Off | Any delay/block is separately explained, reversible, and platform-qualified. |
| Human support | Design requirement | Off | Explicit recipient/message confirmation on every send. |
| Reflection | Hypothesis | Optional after close, never during acute flow by default | No explicit narrative required. |
| Local history | Design requirement | Minimal or off | User can view/delete; no hidden risk score. |

## Entry modes

| Mode | Classification | Benefit hypothesis | Required guard |
| --- | --- | --- | --- |
| Manual pause | Hypothesis | Highest intent clarity and lowest monitoring need. | Always available, fast, and private. |
| User-set scheduled check | Hypothesis | Supports known routines without behavior inference. | Neutral notification and easy snooze/disable. |
| Local domain/app event | Platform limitation | May place friction near a chosen context. | Explicit allow/block list, local processing, failure disclosure, safe bypass for legitimate need. |
| User-selected ally prompt | Hypothesis | Human support may help some users. | Never secret or automatic; coercion check and exact preview. |
| AI-detected risk | Repository decision | Not approved. | Reject because data, inference validity, and safety are unresolved. |

## Spiral sequence

| Stage | Classification | Primary question/action | Data | Exit |
| --- | --- | --- | --- | --- |
| 1. Arrive | Design requirement | “Pause for a moment?” Start / Not now | Entry source only if user allowed history | Not now closes immediately. |
| 2. Orient | Hypothesis | Show the user's own short reason or chosen value | Local user-authored text | Hide/edit later; no moral copy. |
| 3. Act | Hypothesis | One selected action: move, breathe, close, delay, or replace | Step ID and optional completion | Skip goes to fallback or close. |
| 4. Support | Hypothesis | Optional private plan, chosen ally, or reviewed resource | Only confirmed path data | Cancel sends nothing. |
| 5. Recheck | Hypothesis | “What would help next?” Continue plan / Finish | Optional user selection | Finish closes; no forced success claim. |
| 6. Close | Design requirement | Acknowledge the choice without praise/shame scoring | Optional usefulness/burden | Delete event / turn off feature. |
| 7. Repair | Hypothesis | Later, optional setback debrief focused on next adjustment | User-authored non-explicit note | Skip permanently or for now. |

## Failure and degradation

| Failure | Classification | Required behavior |
| --- | --- | --- |
| Platform detection misses or over-blocks | Platform limitation | Explain limitation, offer manual entry and immediate legitimate-use recovery; record no blame. |
| Notification reveals sensitive context | Design requirement | Neutral copy by default, preview control, and notification-free mode. |
| AI/provider unavailable | Design requirement | Use static reviewed flow; do not block exit or support information. |
| Ally delivery fails | Design requirement | Say delivery is unconfirmed; offer private alternative, never imply the ally saw it. |
| User appears more distressed | Design requirement | Offer stop and professional/emergency resources without claiming assessment or rescue. |
| User repeatedly bypasses | Design requirement | Do not escalate punishment; invite calm-state review of fit and platform limits. |

## Evaluation ladder

1. **Design requirement:** Clinical/safety review of every intervention and phrase.
2. **Design requirement:** Cognitive walkthroughs with synthetic scenarios, including coercion and accessibility.
3. **Hypothesis:** Low-fidelity manual-entry prototype with no monitoring, AI, or sharing.
4. **Hypothesis:** Compare one-action variants for comprehension, autonomy, burden, and adverse reactions.
5. **Open question:** Add local platform-triggered friction only after Thread 01 and Thread 07 gates.
6. **Open question:** Add human contact only after consent, delivery, and abuse cases pass; anonymous matching remains excluded.

## Cycle 1 recommendation

- **Hypothesis:** First product test is a manual, local, one-action Spiral configured by the user while calm.
- **Repository decision:** No production code, clinical claim, AI risk detection, peer network, or cross-device guarantee is approved.
- **Design requirement:** If the manual flow does not improve agency/usefulness without increased shame or burden, stop before adding enforcement.
