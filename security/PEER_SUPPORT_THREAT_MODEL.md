# Peer-support threat model

Status: Cycle 1 Draft - design threat model
Issue: #19
Branch: `codex/19-anonymous-support`

## System and assets

| Classification | Asset or safety property |
| --- | --- |
| Verified | Civil identity, contact details, sexual/behavioral inferences, message content, availability, block/report state, and security metadata are sensitive. |
| Verified | Autonomy, freedom from coercion, ability to leave, clinical boundary, and trust in reporting are protected safety properties. |
| Hypothesis | A pseudonymous structured relay is the maximum social surface worth threat-modeling for a first prototype. |

## Actors

- **Verified:** ordinary participant; vulnerable participant; coercive partner/employer; harasser/groomer; scammer/extortionist; ban evader; coordinated attacker; insider/moderator; compromised provider; curious bystander; minor attempting access.
- **Open question:** the feasible strength of adult assurance without disproportionate identity collection requires legal/privacy research.

## Abuse cases

| ID | Severity | Classification | Abuse or failure | Prevent / detect / respond | Residual decision |
| --- | --- | --- | --- | --- | --- |
| T01 | Critical | Verified | Sexual solicitation, grooming, or exploitation | Structured messages, no media/links/handles, rate limits; report sampling; immediate block/quarantine/human review | No launch until simulated detection and response meet threshold. |
| T02 | Critical | Verified | Credible imminent danger is treated as ordinary peer chat | No peer emergency promise, reviewed crisis affordance, human escalation protocol | Detection remains fallible; disclose limitation. |
| T03 | Critical | Verified | Identity or sensitive behavior is exposed | No public search/contact exchange, pairwise pseudonyms, minimum metadata, access audit | Recipient screenshot/social engineering remains. |
| T04 | Critical | Verified | Coercive partner secretly controls or observes account | Re-consent, device/session review, neutral notifications, fast safe exit | Compromised device cannot be fully protected. |
| T05 | High | Verified | Harassment, hate, shaming, threats, or retaliation | Constrained vocabulary, block/report, cooldown, moderator actions and appeals | Language evasion remains. |
| T06 | High | Verified | Peer gives diagnosis, treatment, medication, or moral commands | Scope reminders, prohibited content, reports, progressive enforcement | Human interpretation required. |
| T07 | High | Verified | Off-platform migration bypasses safety | Block links/handles and common obfuscation; user warning; enforcement | Cannot prevent all coded exchange. |
| T08 | High | Verified | Ban evader creates new accounts | Risk-based cooldown/device signals with minimal data; human review | Stronger assurance conflicts with minimization. |
| T09 | High | Hypothesis | Attacker correlates pseudonyms/timing to identify user | Pairwise rotation, coarse availability, delayed batching | Small populations still increase linkability. |
| T10 | High | Verified | Insider browses or exports sensitive interactions | Just-in-time role access, immutable audit, two-person export control, alerts | Privileged compromise remains possible. |
| T11 | High | Verified | Automated moderation falsely misses or flags sensitive content | AI only triages, quality sampling, human decision, appeal | Coverage and bias need measurement. |
| T12 | High | Verified | Minor accesses adult peer environment | Adult eligibility gate and no sexual content; remove/report under policy | Reliable age assurance may require more identity data. |
| T13 | High | Hypothesis | Coordinated users manipulate reputation/reports | No public score, graph anomaly review, report abuse policy | Detection quality unknown. |
| T14 | Medium | Verified | User becomes dependent on a peer or availability loop | No persistent follower graph, match limits, no “savior” status | Emotional dependency can still form. |
| T15 | Medium | Verified | Notifications reveal participation | Neutral defaults, local preview control, quiet mode | OS/device observers may still infer use. |
| T16 | Medium | Verified | Report retention becomes a permanent sensitive archive | Isolated evidence store, purpose limits, expiry, audit | Legal/safety retention tension unresolved. |
| T17 | Medium | Hypothesis | Matching optimization targets vulnerability to increase engagement | No engagement objective; safety and user-choice constraints | Governance must prevent future drift. |
| T18 | Medium | Verified | Service outage strands users who expected immediate help | Never market as emergency or continuous availability; degrade to static routes | External resources can also be unavailable. |

## Security and safety invariants

1. **Verified:** No ordinary user can address, search, follow, or rematch a specific pseudonymous participant.
2. **Verified:** A block immediately terminates relay capability and survives pseudonym rotation.
3. **Verified:** Severe reports enter a human-owned queue; automation cannot close them without review.
4. **Verified:** Moderator reads are purpose-bound and audited; general staff cannot inspect content.
5. **Verified:** A user can leave without peer approval and without receiving a final message.
6. **Verified:** No safety metric may require storing raw explicit content by default.
7. **Verified:** The network can be disabled independently of private planning features.

## Red-team test plan

| Test | Classification | Pass condition |
| --- | --- | --- |
| Contact-exchange evasion corpus | Hypothesis | Predefined detection/block rate with false-positive review; threshold set by safety team before test. |
| Block/rematch property tests | Verified | No blocked pair can exchange or rematch across rotations, retries, or races. |
| Moderator access exercise | Verified | Unauthorized reads/exports fail and alert; all authorized reads have case purpose. |
| Deletion/retention test | Verified | User data follows the approved inventory; exceptions are visible and isolated. |
| Crisis tabletop | Open question | Human team follows country-reviewed protocol without claiming rescue. |
| Grooming/harassment simulation | Open question | Time-to-containment and miss rates stay below pre-agreed safety thresholds. |
| Kill-switch drill | Verified | New matching and delivery stop without disabling deletion, reporting, or support routes. |

## Stop conditions

- **Verified:** Any critical incident caused by a known unmitigated design defect pauses matching.
- **Verified:** Missing staffed coverage, broken block isolation, uncontrolled moderator access, or inability to honor exit/deletion blocks launch.
- **Open question:** Quantitative incident and error thresholds require safety, clinical, privacy, and founder approval before testing.
