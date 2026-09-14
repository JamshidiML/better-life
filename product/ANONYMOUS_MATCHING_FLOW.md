# Pseudonymous matching flow

Status: Cycle 1 Draft - research specification only
Issue: #19
Branch: `codex/19-anonymous-support`

## Recommended sequence

| Step | Classification | User-visible action | System invariant / failure path |
| ---: | --- | --- | --- |
| 0 | Design requirement | Private tools remain usable without social participation. | No social consent is bundled with account or protection features. |
| 1 | Design requirement | User opens “human support research” and sees purpose, limits, data, moderation, confidentiality limits, and emergency boundary. | Decline exits cleanly; no repeated pressure. |
| 2 | Design requirement | Adult user separately attests voluntary self-use and chooses whether to be available now. | Coercion concern or ineligible state disables matching and offers safe exit. |
| 3 | Hypothesis | User selects one bounded need: encouragement, listen briefly, plan next action, or resource navigation. | No explicit story, diagnosis, exact location, or demographic targeting. |
| 4 | Design requirement | User selects a short availability window and notification privacy. | Availability expires; neutral notification default. |
| 5 | Hypothesis | Match service checks eligibility, block graph, cooldown, prior incidents, language, and bounded need. | No engagement/vulnerability optimization; no stable public profile. |
| 6 | Design requirement | Both users receive pairwise pseudonyms, rules, allowed message format, and accept/decline. | Match opens only after dual acceptance; decline is invisible. |
| 7 | Hypothesis | One user chooses a reviewed structured message; the other may respond from a reviewed set or end. | No links/media/handles/free biography; rate and turn limits apply. |
| 8 | Design requirement | Block, report, and end remain visible throughout. | Block is immediate; report can preserve minimum case evidence; no final peer message. |
| 9 | Hypothesis | Each user optionally rates helpfulness, safety, and unwanted disclosure. | Feedback is not a public reputation score. |
| 10 | Design requirement | Match capability and pairwise pseudonym expire. | No direct rematch or contact graph; retention follows approved policy. |

## Matching constraints

- **Design requirement:** Exclude exact location, explicit behavior, diagnosis, religion, sexuality, and vulnerability scoring from initial matching.
- **Hypothesis:** Language, broad time zone, support-mode preference, and mutual block/eligibility state may be sufficient; user research must validate.
- **Design requirement:** Do not match on “most at risk,” likelihood to engage, spending, or shame signals.
- **Design requirement:** Do not expose queue size, rejection reason, safety score, or another user's history.

## Empty, unsafe, and degraded states

| Condition | Classification | Response |
| --- | --- | --- |
| No match | Design requirement | Say none is available; offer private plan, chosen ally, or external resource without urgency manipulation. |
| User changes mind | Design requirement | Cancel immediately; remove availability and pending capability. |
| Unsafe message blocked before send | Design requirement | Explain the boundary without exposing evasion details; offer safe structured wording. |
| Report during match | Design requirement | End/block, confirm report state, show immediate safety options, route human review. |
| Service/moderation degraded | Design requirement | Stop new matches; preserve report, block, delete, and static support routes. |
| Possible crisis | Design requirement | Show country-appropriate professional/emergency choices; never promise peer or AI rescue. |

## Evaluation plan

| Metric | Classification | Decision use |
| --- | --- | --- |
| Incremental helpfulness versus private/ally alternative | Hypothesis | Social feature needs positive value beyond safer options. |
| Unwanted-contact and privacy-regret rate | Hypothesis | Predefined threshold; any severe identity harm triggers pause. |
| P0/P1 incident and moderator-response distribution | Design requirement | Safety gate, reported with denominator and uncertainty. |
| Block/report false-positive and appeal outcomes | Design requirement | Detect biased or retaliatory enforcement. |
| Match decline, exit, and deletion completion | Design requirement | Verify autonomy; failure is a launch blocker. |
| Moderator burden and cost per active participant | Design requirement | Thread 09 sustainability gate. |

## Cycle 1 exit decision

- **Repository decision:** Do not build production matching.
- **Hypothesis:** First validate needs with interviews, then test static/private concepts and safety tabletop exercises using synthetic data.
- **Design requirement:** If live support cannot beat the chosen-ally/private alternative on value while meeting safety, privacy, and cost gates, remove it from scope.
