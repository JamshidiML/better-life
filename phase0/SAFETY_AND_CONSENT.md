# Safety And Consent Guardrails

This product area touches health, sexuality, relationships, shame, privacy, coercion, and mental health. Phase 0 should use a conservative safety posture.

## Product Safety Position

The product is not a therapist, clinician, emergency service, or diagnostic tool. It can support behavior change, self-reflection, device friction, and voluntary accountability. It should escalate to human support when the situation exceeds software.

## Phase 0 Safety Review Summary

The first safety review approves Phase 0 discovery only under these constraints:

- Interview adults only.
- Do not collect explicit sexual content.
- Do not use raw participant notes in external AI tools.
- Do not test coercive accountability flows.
- Treat ally support as voluntary support, not emergency response.
- Do not move to Phase 1 implementation until the safety gates in this file are satisfied.

## Language Rules

Use:

- "unwanted behavior"
- "compulsive use"
- "high-risk moment"
- "lapse"
- "repair"
- "support"
- "your rules"
- "calm-state choice"

Avoid by default:

- "dirty"
- "clean"
- "failure"
- "weak"
- "broken"
- "pervert"
- "sin" unless the user explicitly chooses a faith-based mode
- "addict" unless the user uses it for themselves

## Consent Rules

1. Adult users must opt in voluntarily.
2. Consent must be specific, not bundled.
3. Data-sharing consent must expire and be renewable.
4. Ally visibility must default to minimal disclosure.
5. Users must see exactly what is shared and when.
6. Users must have a calm-state exit process.
7. Strict controls must be user-authored, not imposed by a partner or organization.
8. Partner/family modes must include coercion checks.
9. Research participation must be separate from product account creation.
10. Recording consent must be separate from interview consent.
11. Participants must be able to request deletion of research notes.
12. Interviewers must explain that the product cannot guarantee prevention or recovery.

## Consent Script For Interviews

Before every Phase 0 interview, say this in plain language:

"This is product research, not therapy or clinical care. You can skip any question or stop at any time. Please do not share explicit sexual content, explicit URLs, screenshots, or identifying details about other people. I am interested in patterns, emotions, devices, and what kind of support feels safe. If this conversation starts to feel distressing, we can pause or stop."

Then confirm:

- Participant is 18 or older.
- Participation is voluntary.
- No one else is requiring them to participate.
- They understand this is not therapy.
- They understand no explicit content should be shared.
- They understand what notes will be kept.
- They understand deletion options.
- Recording is off unless they separately consent.

## Data Categories

### Allowed In Phase 0 Notes

- Participant code.
- Device types.
- High-level sequence patterns.
- Emotions and contexts.
- Reactions to prototype language.
- Non-explicit quotes.
- Safety concerns.

### Avoid In Phase 0 Notes

- Explicit sexual content.
- Pornography site names unless absolutely necessary.
- Raw URLs.
- Screenshots.
- Search history.
- Partner names.
- Full names.
- Addresses.
- Employer names.
- Anything not needed for product discovery.

## AI And Research Data Rules

Phase 0 notes may contain highly sensitive information even when explicit content is avoided. Treat them as restricted research data.

Do not:

- Paste raw participant notes into external AI systems.
- Use raw participant notes to train or fine-tune a model.
- Upload recordings, transcripts, or participant quotes to third-party tools without a written review.
- Ask an AI model to infer diagnosis, sexuality, trauma history, religion, or mental health state from raw notes.

Allowed:

- Use de-identified synthesis notes after removing participant codes, names, dates, locations, and rare identifying details.
- Use AI to help organize themes only after manual redaction.
- Keep a record of any AI-assisted synthesis step.

## Retention And Deletion Rules

- Separate contact information from interview notes.
- Use participant codes such as `U01`, `T02`, and `A03`.
- Delete recordings after note verification unless there is a documented reason to retain them.
- Keep a deletion request log.
- Do not keep sensitive raw notes longer than needed for Phase 0 synthesis.
- Before Phase 1, define a formal retention schedule.

## Minimal Disclosure Model For Allies

Default ally reports should never include raw content. Suggested levels:

- Green: no support needed.
- Yellow: elevated risk; no action required unless pre-agreed.
- Red: user requested support or hit a high-risk loop.
- Tamper: user tried to disable an agreed protection.
- Help request: user explicitly asks for contact.

Ally support must include boundaries:

- Allies are not therapists by default.
- Allies are not emergency services.
- Allies should not interrogate the user.
- Allies should not receive content details by default.
- Users must be able to change or remove an ally through a calm-state process.
- The product should provide ally response scripts to reduce shame and panic.

## Safety Escalation Draft

### Routine Risk

User reports a high-risk moment but no safety danger.

Response:

- Offer delay.
- Offer replacement action.
- Offer self-authored reminder.
- Offer ally contact if consented.

### Distress After Lapse

User reports shame, hopelessness, or distress after a lapse.

Response:

- Use repair language.
- Ask one grounding question.
- Offer a short repair plan.
- Encourage reaching out to a trusted person.

### Possible Clinical Need

User reports major impairment, repeated inability to function, severe depression, trauma, or escalating compulsive behavior.

Response:

- Say the app is not a substitute for professional care.
- Encourage contacting a qualified mental health professional.
- Provide a way to export a non-explicit summary for a clinician.

### Immediate Safety Risk

User expresses imminent self-harm, intent to harm someone else, or inability to stay safe.

Response:

- Stop product/research flow.
- Encourage contacting local emergency services or crisis support immediately.
- If in a live research session, follow the pre-approved safety protocol and document only necessary facts.
- Do not rely on an ally notification as the only emergency response.
- Do not continue product testing after immediate safety risk appears.

### Coercion Risk

User appears pressured by a partner, parent, employer, religious authority, or group.

Response:

- Do not validate surveillance features.
- Ask if participation is voluntary.
- Offer privacy-preserving alternatives.
- Do not share data with the coercive party.

### Interview Stop Conditions

Stop or pause a Phase 0 interview if:

- The participant appears distressed and wants to stop.
- The participant begins sharing explicit content despite redirection.
- The participant appears coerced.
- The participant describes imminent self-harm or harm to another person.
- The interviewer cannot maintain the non-clinical research boundary.
- A third party is present and may influence answers.

## Red Lines For Phase 1

Do not build:

- Hidden monitoring.
- Partner spyware.
- Default screenshot sharing.
- Public shame mechanics.
- Permanent lock-in.
- Diagnosis labels.
- AI claims of clinical treatment.
- Content collection for model training.
- Features that require breaking encrypted messaging.
- Features that hide activity from the user.
- Features that let another person secretly configure controls.
- Features that make emergency promises the product cannot keep.
- Features that store raw participant or user sexual content.

## Phase 1 Entry Safety Gates

Phase 1 implementation can begin only after:

- At least 8 adult user interviews are complete.
- At least 3 expert interviews are complete.
- Safety language has been revised from evidence.
- Coercion checks are defined for ally/partner flows.
- Data minimization rules are written for each MVP feature.
- Exit and deletion paths are defined.
- Claims are reviewed to avoid diagnosis, treatment, cure, or guaranteed prevention.
- The risk register is updated with Phase 0 evidence.
- The first MVP does not require invasive monitoring.

## Regulatory Watch Items

The product may move toward regulated digital health or Software as a Medical Device if it claims to diagnose, prevent, treat, or clinically manage a disorder. Phase 0 should keep claims behavior-change oriented until legal and clinical review are complete.

Sensitive data handling must be treated as high risk because the product may process or infer health, sex life, sexual orientation, religious belief, biometric, and behavioral data.
