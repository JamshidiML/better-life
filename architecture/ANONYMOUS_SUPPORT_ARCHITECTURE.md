# Pseudonymous support reference architecture

Status: Cycle 1 Draft - not approved for implementation
Issue: #19
Branch: `codex/19-anonymous-support`
Research cutoff: 2026-07-15

## Cycle 1 decision

- **Verified:** “Anonymous” is not an accurate absolute: abuse prevention, transport, account security, and incident response create linkable metadata.
- **Hypothesis:** A pseudonymous relay with constrained messages is safer than direct handle exchange or open chat, but it is not proven safe or beneficial.
- **Verified:** Live peer matching is excluded from the MVP recommendation until human moderation, privacy/legal review, simulations, and operating-cost gates pass.
- **Open question:** User need may be met more safely by a chosen ally or existing support organization.

## Architecture and product pre-check

| Required element | Classification | Cycle 1 answer |
| --- | --- | --- |
| User problem | Hypothesis | A consenting adult may want brief human encouragement without revealing civil identity or explicit details. |
| Expected benefit | Hypothesis | A bounded exchange may reduce isolation and help complete a self-chosen next step. |
| Supporting evidence | Open question | No direct Better Life outcome or safety evidence exists; Thread 03 supplies mechanism analogies only. |
| Required data | Verified | Pseudonymous account, age-attestation state, consent version, coarse availability, match/relay IDs, rate-limit counters, block edges, reports, moderation actions, and security logs would be necessary. |
| Consent requirements | Verified | Separate consent is required to join, become available, accept each match, send each message class, report, and leave/delete. |
| Safety risks | Verified | Grooming, harassment, triggering content, crisis ambiguity, retaliation, ban evasion, and identity leakage are inherent design risks. |
| Misuse risks | Verified | Partner surveillance, off-platform migration, extortion, sexual solicitation, coordinated abuse, and peer authority must be addressed. |
| Platform feasibility | Open question | Relay, moderation, and abuse controls are technically plausible; reliable identity separation, 24/7 response, and affordable operations are unresolved. |
| Success metric | Hypothesis | Helpful exchange rate must be evaluated beside report rate, severe incidents, unwanted-contact rate, response time, privacy regret, and deletion completion. |
| Exit strategy | Verified | Global kill switch, per-user leave/block/delete, match termination, evidence-retention rules, and safe migration to private/non-social tools are mandatory. |

## Trust boundaries

| Boundary | Classification | Data crossing | Required control |
| --- | --- | --- | --- |
| User device -> identity service | Verified | Authentication proof, age-attestation state, consent version | No civil identity unless legally justified; separate auth identifier from peer profile. |
| Identity service -> match service | Verified | Opaque eligibility token | Match service must not receive email, phone, or external identity. |
| Match service -> relay | Verified | Pairwise match ID and allowed message schema | No stable public handle; expire match capability. |
| User -> peer | Verified | Only user-confirmed structured content | Show preview, audience, retention, and “no confidentiality guarantee” before send. |
| Relay -> moderation | Verified | Flagged content plus minimum context | Access is role-limited, audited, time-bounded, and policy-triggered. |
| Service -> third-party processor | Open question | Hosting, notifications, analytics, model input | Processor-by-processor legal/privacy review; no ad tech; AI moderation cannot be sole decision maker. |
| Moderation -> emergency/professional route | Open question | Potentially identifying report data | Only under disclosed, legally reviewed protocol; never promise detection or rescue. |

## Minimal logical components

| Component | Classification | Responsibility | Explicit non-responsibility |
| --- | --- | --- | --- |
| Consent/eligibility service | Hypothesis | Adult attestation, policy version, granular participation state | Does not diagnose or judge recovery status. |
| Pseudonym service | Hypothesis | Rotating display token and pairwise identifiers | Does not promise anonymity from Better Life or infrastructure providers. |
| Match service | Hypothesis | Applies safety eligibility, block graph, cooldown, and bounded matching criteria | Does not optimize for engagement or vulnerability. |
| Structured relay | Hypothesis | Transmits allowed message types, expiry, delivery state | No media, links, files, exact location, or direct contact exchange. |
| Safety control plane | Verified | Rate limits, blocks, reports, quarantines, ban-evasion signals, kill switch | Automated scores do not make final severe-case decisions. |
| Human moderation console | Verified | Review, action, appeal, audit, and escalation | No unrestricted browsing of conversations. |
| Metrics/privacy service | Hypothesis | Aggregated safety and usefulness measures | No advertising profiles, explicit-content analytics, or individual “recovery score.” |

## Data inventory and default retention hypotheses

| Data | Classification | Purpose | Cycle 1 default | Deletion / caveat |
| --- | --- | --- | --- | --- |
| Authentication identifier | Open question | Account integrity and abuse control | Separated from peer profile | User deletion subject to legal/security exceptions. |
| Pairwise pseudonym | Hypothesis | Prevent stable cross-match identity | Rotate per match | Delete/expire when match closes. |
| Structured message | Hypothesis | Deliver bounded support | Ephemeral, short expiry | Reported content may need isolated retention. |
| Block edge | Verified | Prevent re-contact | Retain as opaque safety relation | Deletion design must preserve protection without exposing identity. |
| Report evidence | Verified | Investigate harm and appeals | Restricted incident store | Final period requires legal and safety review. |
| Rate-limit/security event | Verified | Abuse and account defense | Shortest operational period | No content unless necessary. |
| Usefulness response | Hypothesis | Evaluate benefit | Aggregated/separated from message | Optional; delete at user request where possible. |

**Open question:** No retention period is approved in Cycle 1. Thread 07 and legal/safety review must set and justify each period before a prototype stores real interaction data.

## Privacy and security properties

1. **Verified:** No contact discovery, address-book upload, public profile search, follower graph, or location matching.
2. **Verified:** No links, images, audio, video, files, custom free-text biography, or explicit-content exchange in the first considered prototype.
3. **Verified:** Pairwise pseudonyms prevent ordinary peers from correlating encounters; they do not prevent platform-side correlation needed for abuse control.
4. **Verified:** Block is immediate and silent to the blocked user; re-match and notification are suppressed.
5. **Verified:** Moderation access is least-privilege, logged, reviewable, and separated from general support/analytics access.
6. **Verified:** Encryption in transit/at rest is necessary but does not solve recipient screenshots, endpoint compromise, or platform metadata.
7. **Verified:** No third-party behavioral analytics, advertising SDK, or training on interaction content.

## Architecture options

| Option | Classification | Safety/privacy | Operations | Cycle 1 decision |
| --- | --- | --- | --- | --- |
| User-chosen existing ally | Hypothesis | Known relationship can reduce stranger risk but may contain coercion | Low platform moderation; consent abuse cases remain | Research first. |
| One-way structured encouragement pool | Hypothesis | No persistent dyad; content can be pre-reviewed | Moderation still required, benefit uncertain | Consider only after simulation. |
| Pairwise asynchronous relay | Hypothesis | Limits identity and contact exchange | Significant moderation/ban-evasion burden | Reference architecture, not MVP. |
| Real-time text chat | Verified | Higher leakage, grooming, crisis, and moderation risk | High coverage requirement | Reject for initial scope. |
| Voice/video or off-platform handles | Verified | High identification and content risk | High safety burden, weak enforceability | Reject. |

## Verification gates

- **Open question:** DPIA and legal basis reviewed for special-category and sex-life inferences.
- **Open question:** Red-team exercises cover all threat-model cases with measured prevention/detection/response.
- **Open question:** Human moderator runbook, training, coverage, quality sampling, wellbeing support, and appeals tested.
- **Open question:** Synthetic-data prototype passes access-control, isolation, deletion, rate-limit, and kill-switch tests.
- **Open question:** Adult user research shows incremental value over a chosen ally/private tool without unacceptable coercion or privacy regret.
- **Open question:** Unit economics fund the required safety service at realistic incident rates.

## External foundations

- **Verified:** NIST notes that pseudonymous accounts can be appropriate when a service does not require real identity; it does not imply that an account is untraceable. [NIST SP 800-63-4](https://pages.nist.gov/800-63-4/sp800-63/introduction/)
- **Evidence-supported:** OWASP threat modeling and abuse-case guidance support systematic analysis of assets, actors, trust boundaries, and misuse before implementation. [OWASP Threat Modeling](https://owasp.org/www-project-threat-modeling/); [OWASP Abuse Case](https://cheatsheetseries.owasp.org/cheatsheets/Abuse_Case_Cheat_Sheet.html)
- **Verified:** GDPR Article 9 treats data concerning health, sex life, and sexual orientation as special categories; exact applicability and legal basis require counsel. [GDPR](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679)
