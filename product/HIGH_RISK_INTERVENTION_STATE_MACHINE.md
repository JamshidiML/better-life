# High-risk intervention state machine

Status: Cycle 1 Draft - implementation-independent
Issue: #20
Branch: `codex/20-protective-spiral`

## State invariants

- **Design requirement:** `EXIT` is reachable from every user-facing state in one action.
- **Design requirement:** No state sends data to a human or external AI without a current explicit confirmation.
- **Design requirement:** No transition is conditioned on a diagnosis, inferred sexual content, moral score, or obedience history.
- **Design requirement:** Failure moves to a simpler state, never a harsher restriction.

## States and transitions

| State | Classification | Entry | Primary action | Guards | Next | Fallback |
| --- | --- | --- | --- | --- | --- | --- |
| `DORMANT` | Design requirement | Feature available, no session | Manual pause or approved local trigger | Current consent/config exists | `INVITATION` | Stay dormant |
| `INVITATION` | Design requirement | Entry event | Start | Neutral copy; no false certainty | `ORIENT` | `EXIT` |
| `ORIENT` | Hypothesis | User starts | Show user-authored reason/value | Content exists and is current | `ACTION` | `ACTION` without value text |
| `ACTION` | Hypothesis | Orientation complete | Perform one selected action | Action is safe/available; no forced timer | `RECHECK` | `FALLBACK_ACTION` or `EXIT` |
| `FALLBACK_ACTION` | Hypothesis | First action skipped/unavailable | Perform one alternate | Exactly one fallback configured | `RECHECK` | `SUPPORT_MENU` or `EXIT` |
| `RECHECK` | Hypothesis | Action complete/skip | Choose finish or one support route | No success assumption | `CLOSE` or `SUPPORT_MENU` | `EXIT` |
| `SUPPORT_MENU` | Hypothesis | User asks for more | Choose private plan, ally, or reviewed resource | Show one recommended user-configured path plus alternatives | Path-specific state | `CLOSE` |
| `ALLY_PREVIEW` | Design requirement | Chosen ally selected | Confirm exact recipient/message | Current consent; no secret setup | `ALLY_SEND` | `CLOSE` |
| `ALLY_SEND` | Platform limitation | Confirmed send | Wait only for delivery result | Provider available | `CLOSE` | `DELIVERY_FAILURE` |
| `RESOURCE_ROUTE` | Design requirement | Professional/resource selected | Open or display verified route | Geography/version known | `CLOSE` | `CLOSE` with limitation |
| `CLOSE` | Design requirement | User finishes | Optional usefulness/burden response | No streak or outcome claim | `DORMANT` | `DORMANT` |
| `REPAIR_OFFER` | Hypothesis | Later user initiation only | Start optional debrief | Never interrupt acute flow | `REPAIR` | `DORMANT` |
| `REPAIR` | Hypothesis | User accepts | Choose one plan adjustment | No explicit narrative required | `DORMANT` | `DORMANT` |
| `DELIVERY_FAILURE` | Design requirement | Ally/resource delivery fails | Acknowledge unconfirmed delivery | Never imply receipt | `SUPPORT_MENU` or `CLOSE` | `EXIT` |
| `EXIT` | Design requirement | Any user stop or safety failure | Close and restore control | Preserve only approved minimum event data | `DORMANT` | `DORMANT` |

## Event and guard model

| Event/guard | Classification | Rule |
| --- | --- | --- |
| `manual_start` | Design requirement | Always allowed when feature is enabled; no explanation required. |
| `configured_local_event` | Platform limitation | Allowed only for a user-selected event with current consent and an immediate false-positive recovery. |
| `timeout` | Design requirement | Closes or returns to a simpler choice; never sends or escalates. |
| `consent_changed` | Design requirement | Cancels pending sharing/automation and returns to `EXIT`. |
| `platform_unavailable` | Design requirement | Removes platform-dependent action and offers manual/static alternative. |
| `possible_crisis_text` | Open question | AI detection is not a reliable gate; if the user explicitly requests urgent help, show reviewed real-world routes and scope limits. |
| `ally_confirmed` | Design requirement | Must be a fresh confirmation after preview; preauthorization alone is insufficient. |

## Persistence model

| Item | Classification | Persistence |
| --- | --- | --- |
| Configuration and user-authored reason | Hypothesis | Local by default; editable/deletable. |
| Current state | Design requirement | Session-only unless needed for crash recovery; no sensitive lock-screen copy. |
| Event source and step outcome | Hypothesis | Off by default or minimal local history; never an opaque risk score. |
| Ally message/delivery | Design requirement | Store only what is required and disclosed; retention set by Thread 07. |
| Repair note | Hypothesis | Optional local user-authored record; no explicit detail required. |

## Safety assertions to test

1. **Design requirement:** Cancel before `ALLY_SEND` produces zero outbound messages.
2. **Design requirement:** Consent revocation invalidates every pending share and future trigger.
3. **Design requirement:** Every platform/AI/network failure still permits `EXIT`.
4. **Design requirement:** Repeated skip/bypass never changes the sequence to punishment.
5. **Design requirement:** Session restoration cannot expose sensitive content on lock screen or to another account.
6. **Design requirement:** No branch labels a session, action, or user as success/failure/addicted/recovered.
