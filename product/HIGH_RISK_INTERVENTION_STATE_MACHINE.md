# High-risk intervention state machine

Status: Cycle 1 Draft - implementation-independent
Issue: #20
Branch: `codex/20-protective-spiral`

## State invariants

- **Verified:** `EXIT` is reachable from every user-facing state in one action.
- **Verified:** No state sends data to a human or external AI without a current explicit confirmation.
- **Verified:** No transition is conditioned on a diagnosis, inferred sexual content, moral score, or obedience history.
- **Verified:** Failure moves to a simpler state, never a harsher restriction.

## States and transitions

| State | Classification | Entry | Primary action | Guards | Next | Fallback |
| --- | --- | --- | --- | --- | --- | --- |
| `DORMANT` | Verified | Feature available, no session | Manual pause or approved local trigger | Current consent/config exists | `INVITATION` | Stay dormant |
| `INVITATION` | Verified | Entry event | Start | Neutral copy; no false certainty | `ORIENT` | `EXIT` |
| `ORIENT` | Hypothesis | User starts | Show user-authored reason/value | Content exists and is current | `ACTION` | `ACTION` without value text |
| `ACTION` | Hypothesis | Orientation complete | Perform one selected action | Action is safe/available; no forced timer | `RECHECK` | `FALLBACK_ACTION` or `EXIT` |
| `FALLBACK_ACTION` | Hypothesis | First action skipped/unavailable | Perform one alternate | Exactly one fallback configured | `RECHECK` | `SUPPORT_MENU` or `EXIT` |
| `RECHECK` | Hypothesis | Action complete/skip | Choose finish or one support route | No success assumption | `CLOSE` or `SUPPORT_MENU` | `EXIT` |
| `SUPPORT_MENU` | Hypothesis | User asks for more | Choose private plan, ally, or reviewed resource | Show one recommended user-configured path plus alternatives | Path-specific state | `CLOSE` |
| `ALLY_PREVIEW` | Verified | Chosen ally selected | Confirm exact recipient/message | Current consent; no secret setup | `ALLY_SEND` | `CLOSE` |
| `ALLY_SEND` | Platform limitation | Confirmed send | Wait only for delivery result | Provider available | `CLOSE` | `DELIVERY_FAILURE` |
| `RESOURCE_ROUTE` | Verified | Professional/resource selected | Open or display verified route | Geography/version known | `CLOSE` | `CLOSE` with limitation |
| `CLOSE` | Verified | User finishes | Optional usefulness/burden response | No streak or outcome claim | `DORMANT` | `DORMANT` |
| `REPAIR_OFFER` | Hypothesis | Later user initiation only | Start optional debrief | Never interrupt acute flow | `REPAIR` | `DORMANT` |
| `REPAIR` | Hypothesis | User accepts | Choose one plan adjustment | No explicit narrative required | `DORMANT` | `DORMANT` |
| `DELIVERY_FAILURE` | Verified | Ally/resource delivery fails | Acknowledge unconfirmed delivery | Never imply receipt | `SUPPORT_MENU` or `CLOSE` | `EXIT` |
| `EXIT` | Verified | Any user stop or safety failure | Close and restore control | Preserve only approved minimum event data | `DORMANT` | `DORMANT` |

## Event and guard model

| Event/guard | Classification | Rule |
| --- | --- | --- |
| `manual_start` | Verified | Always allowed when feature is enabled; no explanation required. |
| `configured_local_event` | Platform limitation | Allowed only for a user-selected event with current consent and an immediate false-positive recovery. |
| `timeout` | Verified | Closes or returns to a simpler choice; never sends or escalates. |
| `consent_changed` | Verified | Cancels pending sharing/automation and returns to `EXIT`. |
| `platform_unavailable` | Verified | Removes platform-dependent action and offers manual/static alternative. |
| `possible_crisis_text` | Open question | AI detection is not a reliable gate; if the user explicitly requests urgent help, show reviewed real-world routes and scope limits. |
| `ally_confirmed` | Verified | Must be a fresh confirmation after preview; preauthorization alone is insufficient. |

## Persistence model

| Item | Classification | Persistence |
| --- | --- | --- |
| Configuration and user-authored reason | Hypothesis | Local by default; editable/deletable. |
| Current state | Verified | Session-only unless needed for crash recovery; no sensitive lock-screen copy. |
| Event source and step outcome | Hypothesis | Off by default or minimal local history; never an opaque risk score. |
| Ally message/delivery | Verified | Store only what is required and disclosed; retention set by Thread 07. |
| Repair note | Hypothesis | Optional local user-authored record; no explicit detail required. |

## Safety assertions to test

1. **Verified:** Cancel before `ALLY_SEND` produces zero outbound messages.
2. **Verified:** Consent revocation invalidates every pending share and future trigger.
3. **Verified:** Every platform/AI/network failure still permits `EXIT`.
4. **Verified:** Repeated skip/bypass never changes the sequence to punishment.
5. **Verified:** Session restoration cannot expose sensitive content on lock screen or to another account.
6. **Verified:** No branch labels a session, action, or user as success/failure/addicted/recovered.
