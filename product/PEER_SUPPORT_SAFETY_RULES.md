# Peer-support safety rules

Status: Cycle 1 Draft - not participant-approved
Issue: #19
Branch: `codex/19-anonymous-support`

## Scope

- **Design requirement:** Peers share brief encouragement or lived experience; they are not therapists, sponsors, monitors, moderators, or emergency responders.
- **Design requirement:** Better Life remains accountable for platform rules and human moderation.
- **Hypothesis:** A first test, if approved, uses asynchronous structured messages rather than free chat.

## Participant rules

| Rule | Classification | Enforcement response |
| --- | --- | --- |
| Participate only for yourself as an adult and by your own choice. | Design requirement | End session and review eligibility/coercion concerns. |
| Do not request or share names, handles, contact details, location, workplace, images, files, or links. | Design requirement | Block message; repeated/severe attempts trigger human review. |
| Do not send explicit sexual descriptions or content. | Design requirement | Block/quarantine; report illegal content under reviewed protocol. |
| Do not flirt, solicit sexual contact, groom, threaten, shame, blackmail, or discriminate. | Design requirement | Immediate block and priority human review; suspend for credible severe behavior. |
| Speak from personal experience; do not diagnose, prescribe, or promise recovery. | Design requirement | Interrupt content; educate or enforce on repetition/severity. |
| Do not present yourself as therapist, sponsor, clergy, moderator, or emergency service. | Design requirement | Remove role claim and review intent. |
| Do not pressure someone to disclose, reply, abstain, follow a belief, or remain matched. | Design requirement | Terminate match for coercive behavior. |
| Treat a block or ended match as final; do not attempt re-contact. | Design requirement | Technical suppression plus ban-evasion review. |
| Use report for safety, not retaliation or disagreement. | Design requirement | Human review; report abuse can lead to limits with appeal. |

## Consent and exit rules

1. **Design requirement:** Availability is off by default and expires automatically.
2. **Design requirement:** Each participant sees the permitted interaction, limits, retention, and report process before accepting.
3. **Design requirement:** Decline, timeout, block, and leave carry no penalty or peer-visible reason.
4. **Design requirement:** The user previews every outgoing message; no AI autonomously sends to a peer.
5. **Design requirement:** Ending a match invalidates both delivery capabilities; queued non-safety messages are discarded.
6. **Design requirement:** Account deletion clearly separates immediate social exit from any legally justified incident-evidence retention.

## Incident levels

| Level | Classification | Examples | Required response |
| --- | --- | --- | --- |
| P0 critical | Design requirement | credible exploitation/grooming, extortion, severe threat, child-safety concern, systemic identity exposure | Immediate containment, on-call human, preserve minimum evidence, legal/safety protocol, matching pause if systemic. |
| P1 high | Design requirement | harassment, coercion, repeated off-platform contact attempt, clinical impersonation | Block/contain, prompt human review, user safety update, account action and appeal. |
| P2 standard | Design requirement | boundary violation, prohibited advice, spam, report abuse | Queue review, education/rate limit/action by policy. |
| P3 quality | Design requirement | unhelpful or mismatched but non-abusive interaction | End/avoid rematch; aggregate for product research without punishing preference. |

**Open question:** Response-time targets cannot be promised until staffing and country coverage are funded and tested.

## Moderation governance

- **Design requirement:** High-severity decisions require trained human review, documented rationale, proportionate action, and appeal where safe.
- **Design requirement:** Moderators receive least-privilege case access, training, supervision, wellbeing support, and quality audits.
- **Design requirement:** AI may prioritize or summarize but cannot make the final P0/P1 decision.
- **Design requirement:** Law-enforcement or emergency disclosure requires a published, legally reviewed policy; no informal peer escalation.
- **Design requirement:** Aggregate transparency should report volume, action, response performance, appeals, and known limitations without exposing users.

## Launch blockers

- **Open question:** adult eligibility and ban-evasion approach reconciles safety with data minimization.
- **Open question:** rules are comprehensible and non-shaming across target languages and cultures.
- **Open question:** moderator coverage, training, escalation partners, and budget pass simulations.
- **Open question:** Thread 07 approves legal basis, DPIA, processors, retention, deletion, and data-subject rights.
- **Open question:** Thread 09 shows safety operations remain sustainable without engagement incentives.
