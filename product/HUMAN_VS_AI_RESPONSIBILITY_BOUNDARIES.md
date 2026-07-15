# Human versus AI responsibility boundaries

Status: Cycle 1 Draft
Issue: #18
Branch: `codex/18-mutual-aid-model`

## Responsibility rule

- **Verified:** AI may assist with bounded information, preparation, reflection, and routing; it may not be the accountable owner of diagnosis, treatment, moderation, safeguarding, or emergency response.
- **Verified:** A peer may share lived experience and encouragement; peer status does not create clinical authority or emergency responsibility.
- **Verified:** Better Life remains responsible for product safeguards even when community members or third parties provide support.

## Role matrix

| Activity | User | AI/tool | Peer or chosen ally | Human moderator | Qualified professional / emergency service |
| --- | --- | --- | --- | --- | --- |
| Choose personal goal | **Verified:** decides | **Hypothesis:** offers neutral prompts | **Verified:** may support without veto | Not responsible | **Evidence-supported:** may help clinically when appropriate |
| Record private reflection | **Verified:** controls content | **Hypothesis:** structures user-authored text locally | **Verified:** sees only explicitly shared content | Sees only reported content under policy | Not automatically involved |
| Explain product features | May ask/verify | **Verified:** may provide source-linked product information | May share experience | Resolves policy disputes | Not responsible |
| Share lived experience | May share | **Verified:** must not fabricate lived experience | **Verified:** may share bounded, non-explicit experience | Enforces content rules | May provide professional education in a formal context |
| Diagnose or assess CSBD | Cannot self-confirm through app | **Verified:** prohibited | **Verified:** prohibited | Prohibited | **Verified:** qualified clinician only |
| Recommend treatment/medication | Chooses whether to seek care | **Verified:** prohibited beyond neutral routing | **Verified:** prohibited | Prohibited | **Verified:** qualified professional only |
| Moderate live interaction | May report/block | **Verified:** may triage, never own final high-risk action | Cannot moderate own conflict | **Verified:** accountable human role | Consulted under protocol when needed |
| Respond to imminent danger | Uses local emergency/crisis routes | **Verified:** shows clear route; no reliability promise | Encourages real-world help; no solo rescue duty | Follows escalation protocol | **Verified:** emergency/crisis professionals own response |
| Decide appeal or ban | May appeal | **Verified:** may summarize evidence | May report | **Verified:** human decides with separation of duties | Not normally involved |
| Change consent or leave | **Verified:** decides | **Verified:** executes and confirms | Cannot veto | Supports abuse-safe exit | Not responsible |

## AI allowed zone

| Classification | Allowed only when |
| --- | --- |
| Hypothesis | Summarizing the user's own selected notes improves clarity and no external model receives content without separate consent. |
| Hypothesis | Offering a menu of coping-plan prompts uses reviewed, non-clinical wording and makes uncertainty visible. |
| Verified | Explaining data visibility, consent, deletion, and product limits is grounded in current system facts. |
| Hypothesis | Routing to a user-chosen ally or public resource uses an explicit confirmation and reveals exactly what is sent. |

## AI and peer prohibited zone

- **Verified:** diagnosis, treatment plans, medication advice, clinical scoring, or claims that the person has a disorder.
- **Verified:** pretending to be a sponsor, therapist, recovered person, friend, or emergency responder.
- **Verified:** asking for explicit sexual content when the product can function without it.
- **Verified:** moral judgment, manipulation, threats, punishment, or disclosure used to force adherence.
- **Verified:** secret ally/partner reports, autonomous emergency contact, or implied continuous monitoring.
- **Verified:** deciding high-risk moderation cases without accountable human review.

## Scenario routing

| Scenario | Classification | Product response | Stop condition |
| --- | --- | --- | --- |
| User asks for a brief pause exercise | Hypothesis | Offer a reviewed optional exercise and a dismiss path. | Stop if distress rises or the user asks to end. |
| User asks “Do I have an addiction?” | Verified | State non-diagnostic scope, provide neutral distinctions, and offer professional assessment resources. | Do not administer an app diagnosis. |
| Peer offers treatment or medication instruction | Verified | Interrupt/remove under policy; notify and review repeat behavior. | Suspend contact for severe/repeated violations. |
| User reports harassment or coercion | Verified | Immediate block, preserve minimum report evidence, human review, safe exit. | Pause matching if response target cannot be met. |
| Message suggests imminent danger | Verified | Present local emergency/crisis options and encourage immediate real-world contact; route a report only under disclosed policy. | Disable any claim of guaranteed detection or rescue. |
| AI is uncertain | Verified | Say what is unknown and route to a human or source. | Do not invent an answer. |

## Required operational proof before live support

1. **Open question:** named accountable safety owner and staffed coverage model.
2. **Open question:** clinically and legally reviewed crisis language by launch country.
3. **Open question:** measured triage error rates, appeal outcomes, and moderator response time.
4. **Open question:** privacy review of model/provider access, report evidence, and retention.
5. **Open question:** incident stop thresholds and a tested network kill switch.

## Exit strategy

- **Verified:** If accountable human moderation cannot be staffed, no live peer network launches.
- **Verified:** If AI cannot stay within bounded, auditable tasks, replace it with static reviewed content or remove it.
- **Verified:** If professional or emergency routing is inaccurate for a geography, disclose the limitation and do not claim coverage there.
