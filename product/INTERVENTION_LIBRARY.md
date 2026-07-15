# Protective Spiral intervention library

Status: Cycle 1 Draft - candidate mechanisms only
Issue: #20
Branch: `codex/20-protective-spiral`

**Repository decision:** Thread 02 permits these only as hypotheses for non-clinical product research. None is approved as treatment or guaranteed urge reduction.

| ID | Candidate | Evidence class | Benefit hypothesis | Data / consent | Main safety risk | Metric / exit | Decision |
| --- | --- | --- | --- | --- | --- | --- | --- |
| I01 | Close or leave the chosen context | Hypothesis, CBT/relapse-planning transfer | Change immediate cues with minimal cognition. | No data; user selects while calm. | Unsafe/impractical movement, overblocking legitimate use. | Feasibility/helpfulness; remove if frequently impossible. | First prototype candidate. |
| I02 | One slow-breath or sensory grounding prompt | Hypothesis, mindfulness/emotion-regulation transfer | Create a brief pause. | No response required. | Panic, frustration, medicalized promise. | Distress and burden; always skip. | Clinical wording review. |
| I03 | User-authored value/reason | Hypothesis, ACT-related transfer | Reconnect to chosen intention. | Local sensitive text; explicit display consent. | Moral shame, coercive partner-written text. | Autonomy/shame; hide/delete/edit. | Prototype candidate with coercion test. |
| I04 | Short user-chosen delay | Hypothesis | Make the next choice less automatic. | Optional local timer. | Countdown fixation, punishment, false control. | Completion/burden; no forced wait. | Test only as optional. |
| I05 | Replacement action | Hypothesis | Substitute a concrete incompatible or valued action. | Local action label. | Generic/unsafe/inaccessible advice. | Action fit and completion; user authors list. | Prototype candidate. |
| I06 | Open private plan | Hypothesis, relapse-planning transfer | Reduce memory load using a calm-state plan. | Local plan; no explicit narrative needed. | Rumination or stale advice. | Usefulness; one-tap archive/edit. | Prototype candidate. |
| I07 | Static supportive script | Hypothesis | Provide non-shaming orientation without external AI. | No external data. | Clinical implication, repetitive irritation. | Comprehension/burden; remove bad copy. | Preferred before AI. |
| I08 | AI reflection | Open question | Rephrase user-selected thought or plan. | External/provider consent and strict minimization required. | Therapy impersonation, hallucination, privacy, rumination. | Incremental value over static; hard time/turn limit. | Defer. |
| I09 | Chosen ally message | Hypothesis | Request a predefined bounded kind of support. | Recipient and exact message confirmed each time. | Coercion, disclosure, dependency, failed delivery. | Regret/helpfulness/delivery; disable instantly. | Defer until consent test. |
| I10 | Pseudonymous peer | Open question | Brief human encouragement. | High-risk social data and moderation. | Thread 04 critical risks. | Must beat safer alternatives. | Excluded from MVP. |
| I11 | Professional support route | Evidence-supported conclusion | Help user find appropriate real-world assessment/support. | Geography/language preference only if needed. | Stale or implied endorsement, care delay. | Link validity and comprehension; maintain or remove. | Required as boundary, not intervention claim. |
| I12 | Emergency/crisis route | Design requirement | Direct explicit urgent-help requests toward real services. | Avoid collecting details; show local options. | False detection or guaranteed rescue implication. | Route accuracy; no monitoring claim. | Required reviewed route. |
| I13 | Temporary local friction | Platform limitation / hypothesis | Add a user-selected barrier near a chosen context. | Local list and consent. | Bypass, lockout, coercion, legitimate-use harm. | False block/bypass/recovery; kill switch. | Defer to Thread 01 spike. |
| I14 | Later repair debrief | Hypothesis, CBT/relapse-planning transfer | Learn one adjustment without all-or-nothing shame. | Optional non-explicit note. | Rumination, compulsory confession. | Agency/shame/burden; skip/delete. | Prototype after acute flow. |

## Selection rules

1. **Design requirement:** Prefer the least-data, lowest-risk action that addresses the user's stated need.
2. **Design requirement:** Show one action, not a scored ranking or expanding punishment ladder.
3. **Design requirement:** Accessibility, physical safety, and context constraints override a configured action.
4. **Design requirement:** Social and AI options never become mandatory fallbacks.
5. **Design requirement:** Review or expire content after evidence, platform, or resource changes.
