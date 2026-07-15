# Mutual-aid mechanism map

Status: Cycle 1 Draft
Issue: #18
Branch: `codex/18-mutual-aid-model`
Research cutoff: 2026-07-15

## Scope and evidence boundary

| Classification | Statement |
| --- | --- |
| Verified | Better Life is independent from AA, NA, SA, SAA, and every other fellowship; no endorsement, affiliation, or reproduction of proprietary identity is claimed. |
| Evidence-supported | Cochrane found evidence for AA/12-step facilitation in alcohol use disorder. That evidence concerns alcohol-focused programs and must not be transferred to PPU/CSBD or to a digital product. [Cochrane review](https://www.cochrane.org/evidence/CD012880_alcoholics-anonymous-aa-and-other-12-step-programs-alcohol-use-disorder) |
| Evidence-supported | Fellowship publications describe practices such as meetings, anonymity, service, shared experience, and member-to-member sponsorship. These sources establish what the organizations say they do, not that a Better Life translation is effective. [NA meeting guide](https://na.org/e-lit/ip-29-introduction-to-na-meetings/); [SAA traditions](https://saa-recovery.org/our-program/the-twelve-traditions/) |
| Open question | Cycle 1 found no direct evidence that a Better Life digital fellowship or anonymous peer match improves outcomes safely. |

## Architecture and product pre-check

| Required element | Classification | Cycle 1 answer |
| --- | --- | --- |
| User problem | Evidence-supported | Some adults seek non-shaming connection, shared experience, and practical support while protecting identity and autonomy. Fellowship sources demonstrate that these needs are served in existing communities; target-user fit remains unvalidated. |
| Expected benefit | Hypothesis | Selected mechanisms may reduce isolation, improve preparation, and make a self-chosen next action easier. |
| Supporting evidence | Evidence-supported | Organizational sources support mechanism descriptions; alcohol mutual-aid evidence supports only a distant analogy. |
| Required data | Hypothesis | A low-risk digital translation needs no explicit narrative; live interaction would require pseudonym, consent state, safety reports, and operational metadata. |
| Consent requirements | Verified | Joining, leaving, sharing, matching, and contacting must be separate, understandable, revocable choices. |
| Safety risks | Verified | Harassment, grooming, moral pressure, misinformation, shame, dependency, crisis mishandling, and implied affiliation are foreseeable. |
| Misuse risks | Verified | A partner, peer, sponsor, or organization must not gain surveillance or account-control power. |
| Platform feasibility | Open question | Directory/preparation tools are simpler than live matching; live support depends on Thread 04 moderation and Thread 07 privacy architecture. |
| Success metric | Hypothesis | Early metrics should cover helpfulness, autonomy, unwanted contact, report rate, response time, privacy regret, and exit completion. |
| Exit strategy | Verified | Remove social contact or matching if moderation, consent, privacy, or economic gates cannot be met; retain private planning if independently useful. |

## Mechanism extraction

| Mechanism observed | Classification | Potential benefit | Transfer risk | Better Life translation | Decision |
| --- | --- | --- | --- | --- | --- |
| Shared lived experience | Evidence-supported | Members may feel understood by people with relevant experience. | False equivalence, triggering detail, advice presented as fact. | Optional short, non-explicit “what helped me” patterns with clear lived-experience labels. | Hypothesis; defer public sharing until moderation exists. |
| Repeated meetings and routine | Evidence-supported | A recurring cadence can support continuity and belonging. | Compulsory attendance, streak pressure, dependency. | Private check-in or links to independent resources; no attendance score. | Prototype private cadence only. |
| Anonymity and confidentiality norms | Evidence-supported | Lower identity exposure may make participation easier. | Norms cannot guarantee technical anonymity or prevent screenshots. | Use precise pseudonymity/confidentiality language plus visible limitations. | Design principle; Thread 07 defines implementation. |
| Sponsorship / experienced-member guidance | Evidence-supported | NA describes sponsors as members offering Step experience. | Unlicensed authority, dependency, grooming, clinical advice. | Do not call any Better Life role “sponsor”; use bounded peer-support roles if later validated. | Reject role imitation; study bounded alternative. |
| Service and helping others | Evidence-supported | Contribution may support meaning and reciprocity. | Burdening vulnerable people, status hierarchy, unpaid moderation. | Optional, reversible micro-contributions after stability/safety criteria; never a recovery requirement. | Defer. |
| Hope through visible recovery | Evidence-supported | Seeing varied paths can counter isolation. | Survivorship bias and guaranteed-recovery implication. | Curated, consented, non-prescriptive stories with setbacks and diversity represented. | Defer until evidence and editorial safeguards. |
| Non-professional peer identity | Evidence-supported | Peers can relate without presenting as clinicians. | “Non-professional” can obscure serious duty-of-care and moderation needs. | Clear scope labels and escalation routes; no diagnosis, treatment, or crisis responsibility. | Required principle. |
| Group autonomy | Evidence-supported | Fellowship groups commonly emphasize local/member responsibility. | Inconsistent safety, capture by dominant members. | Better Life cannot outsource platform safety; community voice may inform rules but mandatory safeguards remain. | Adapt, do not copy. |
| Spiritual or higher-power framing | Evidence-supported | Some fellowships centrally use spiritual language. | Exclusion, coercion, moral incongruence, false affiliation. | User-authored values language; no required theology or anti-theology. | Do not import. |
| Abstinence and counting | Evidence-supported | Some fellowships organize around abstinence and time markers. | All-or-nothing shame, contested target, moral scoring. | User chooses goal; private progress may include multiple outcomes and repair after setbacks. | Do not make universal. |
| Traditions and organizational non-affiliation | Verified | Public traditions protect fellowship identity and independence. | Product appropriation or misleading endorsement. | Use original Better Life vocabulary; cite sources only in research context. | Mandatory. |

## What may and may not transfer

| Classification | Cycle 1 decision |
| --- | --- |
| Hypothesis | Private meeting preparation, question prompts, values reflection, and post-meeting notes may be low-risk augmentation ideas. |
| Hypothesis | A user-controlled directory could link to independent support resources if listings, neutrality, and update responsibility are solved. |
| Open question | Structured peer availability may be valuable, but no live matching proceeds before threat modeling, moderation staffing, privacy review, and economic viability. |
| Verified | Better Life will not copy Steps, Traditions, fellowship names, sponsor roles, chips, prayers, or recovery claims into a proprietary experience. |
| Verified | Better Life will not rank programs, claim equivalence, or present one recovery philosophy as universally correct. |

## Source register

| ID | Classification | Source | Use |
| --- | --- | --- | --- |
| S01 | Evidence-supported | [Cochrane AA/TSF review](https://www.cochrane.org/evidence/CD012880_alcoholics-anonymous-aa-and-other-12-step-programs-alcohol-use-disorder) | Alcohol-specific effectiveness context; no PPU/digital transfer. |
| S02 | Evidence-supported | [NA introduction to meetings](https://na.org/e-lit/ip-29-introduction-to-na-meetings/) | Meeting confidentiality, anonymity, and sponsor description. |
| S03 | Evidence-supported | [NA group booklet](https://na.org/e-lit/the-group-booklet/) | Group practice and service concepts. |
| S04 | Evidence-supported | [SAA Twelve Traditions](https://saa-recovery.org/our-program/the-twelve-traditions/) | Organizational independence, anonymity, and non-professional framing. |
| S05 | Evidence-supported | [Sexaholics Anonymous](https://www.sa.org/sa/) | Example of a distinct fellowship definition; not adopted by Better Life. |

## Open questions

1. **Open question:** Which connection needs appear in Better Life interviews: being heard, practical help, accountability, belonging, or referral?
2. **Open question:** Can those needs be met through existing communities or a chosen ally without creating a new live network?
3. **Open question:** What terminology is acceptable to users from secular, religious, queer, and culturally diverse contexts?
4. **Open question:** What adverse events and exclusion patterns occur in digital mutual-aid settings?
