# Intervention evidence matrix

Status: Cycle 1 Draft
Issue: #17
Branch: `codex/17-evidence-map`
Research cutoff: 2026-07-15

## Decision rule

| Classification | Rule |
| --- | --- |
| Design requirement | A mechanism is not approved merely because it appears in clinical literature. Product transfer requires a defined user problem, consent model, safety analysis, feasibility check, success metric, and exit strategy. |
| Design requirement | `Reject` means outside scope or unsafe under current doctrine; `Defer` means evidence or safeguards are incomplete; `Prototype` means a low-risk research artifact may be tested after the named gate. |

## Comparative matrix

| Mechanism | Evidence status | Intended benefit | Required data | Consent and safety | Feasibility | Metric and exit | Cycle 1 decision |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Neutral psychoeducation | **Evidence-supported conclusion:** clinical guidance supports psychoeducation as part of care, but no Better Life efficacy is established. [WFSBP](https://pubmed.ncbi.nlm.nih.gov/37522807/) | **Hypothesis:** reduce confusion and support informed choices. | **Hypothesis:** selected topic and usefulness response only. | **Design requirement:** no diagnosis, moral judgment, or care replacement. | **Hypothesis:** simple local content is feasible. | **Hypothesis:** comprehension/usefulness plus shame and burden checks; remove content that increases shame or misleads. | Prototype after clinical content review. |
| Values and goal clarification | **Evidence-supported conclusion:** ACT-related psychotherapy has preliminary support; direct automated-product evidence is limited. [López-Pinar et al.](https://pubmed.ncbi.nlm.nih.gov/40126561/) | **Hypothesis:** help users choose personally meaningful, non-coerced goals. | **Hypothesis:** locally stored self-authored goal. | **Design requirement:** detect partner/employer coercion in research; allow editing/deletion. | **Hypothesis:** technically simple. | **Hypothesis:** perceived autonomy and goal fit; exit if moralizing or coercive effects appear. | Prototype as a non-clinical exercise after review. |
| Trigger/context reflection | **Evidence-supported conclusion:** self-monitoring and CBT-derived formulations appear in intervention research, with heterogeneous quality. [Antons et al.](https://pmc.ncbi.nlm.nih.gov/articles/PMC9872540/) | **Hypothesis:** increase pattern awareness. | **Hypothesis:** user-chosen non-explicit context labels; no browsing history required. | **Design requirement:** visible capture, local default, delete/export controls. | **Hypothesis:** feasible without surveillance. | **Hypothesis:** insight/usefulness; stop if it increases rumination, shame, or compulsive logging. | Prototype with minimal fields. |
| Coping-plan rehearsal | **Evidence-supported conclusion:** CBT/relapse-prevention approaches are represented in reviews; exact effective components remain uncertain. | **Hypothesis:** make a chosen action easier in a high-risk moment. | **Hypothesis:** selected action, optional reminder, completion response. | **Design requirement:** user controls timing and can dismiss; no punitive escalation. | **Hypothesis:** feasible as local prompts. | **Hypothesis:** successful plan recall and unwanted-prompt rate; remove intrusive or ineffective prompts. | Prototype after user-language testing. |
| Brief urge observation / mindfulness | **Evidence-supported conclusion:** mindfulness and emotion regulation are plausible mechanisms, but PPU-specific product evidence is weak. [Bőthe et al.](https://pmc.ncbi.nlm.nih.gov/articles/PMC10658102/) | **Hypothesis:** create a pause without promising urge removal. | **Hypothesis:** none beyond optional completion. | **Design requirement:** avoid medical or guaranteed calming claims. | **Hypothesis:** feasible as static guidance. | **Hypothesis:** perceived usefulness and adverse response; remove if distress worsens. | Defer pending clinical review of wording. |
| Setback review and repair plan | **Evidence-supported conclusion:** relapse-prevention concepts appear in treatment literature, but a universal abstinence model is not established. | **Hypothesis:** reduce all-or-nothing reactions and restore agency. | **Hypothesis:** optional user-authored reflection; no streak required. | **Design requirement:** non-shaming language and delete control. | **Hypothesis:** feasible locally. | **Hypothesis:** recovery time, agency, and shame response; exit if it reinforces self-punishment. | Prototype after language validation. |
| Automated personalized clinical advice | **Open question:** no reviewed evidence establishes safe, effective automated clinical guidance for this use. | **Hypothesis:** individualized support. | **Design requirement:** would likely require highly sensitive context and create inference risk. | **Design requirement:** diagnosis, therapy impersonation, and crisis overreach are outside scope. | **Open question:** clinical/regulatory feasibility unresolved. | **Open question:** no safe acceptance metric defined. | Reject for current phase. |
| Anonymous live peer matching | **Open question:** no direct Better Life outcome or safety evidence found. | **Hypothesis:** reduce isolation and increase follow-through. | **Design requirement:** interaction metadata and abuse reports would be required even under pseudonymity. | **Design requirement:** grooming, harassment, coercion, and crisis ambiguity require active moderation. | **Open question:** operational and economic feasibility unresolved. | **Open question:** benefit, incident, and moderator-response thresholds not defined. | Defer to Threads 03, 04, 07, and 09. |
| Ally notification | **Open question:** direct evidence for Better Life is absent. | **Hypothesis:** add voluntary social support at a chosen moment. | **Hypothesis:** ally contact and explicit event-specific consent. | **Design requirement:** no secret setup, no content disclosure, no ally control over the account. | **Open question:** platform delivery varies. | **Hypothesis:** helpful-contact rate versus regret/coercion; disable on any hidden-monitoring pattern. | Defer until consent and abuse-case testing. |
| Medication advice or recommendation | **Source-verified fact:** the cited WFSBP guidance describes clinician-led treatment. **Repository decision:** medication advice is outside Better Life scope. [WFSBP](https://pubmed.ncbi.nlm.nih.gov/37522807/) | **Repository decision:** not a Better Life benefit. | **Design requirement:** not applicable. | **Design requirement:** Better Life must not prescribe or recommend medication. | **Repository decision:** prohibited by scope. | **Design requirement:** no product metric. | Reject. |

## Evidence-to-product transfer gates

| Gate | Pass condition | Current status |
| --- | --- | --- |
| G1 - construct | **Evidence-supported conclusion:** the mechanism addresses a defined user-reported problem without assuming diagnosis. | Partial; interview evidence pending. |
| G2 - evidence | **Open question:** at least one relevant synthesis and the pivotal studies have been appraised for bias, population, comparator, outcomes, and harms. | Not passed. |
| G3 - clinical language | **Open question:** a qualified reviewer approves educational content and confirms no treatment/diagnostic implication. | Not passed. |
| G4 - consent/privacy | **Design requirement:** data flow is minimal, visible, revocable, exportable, and deletable. | Design requirement; implementation not assessed. |
| G5 - safety/misuse | **Design requirement:** coercion, shame, surveillance, crisis, and care-displacement cases have explicit mitigations and stop conditions. | Partial. |
| G6 - feasibility | **Open question:** Thread 01/07 constraints support the mechanism without disproportionate data. | Not passed for cross-device or social features. |
| G7 - evaluation | **Open question:** benefit, burden, adverse-effect, and exit metrics are preregistered or frozen before a pilot. | Not passed. |

## Known weaknesses

- **Open question:** Intervention rows are mechanism-level translations, not recommendations for clinical care.
- **Open question:** No adverse-event extraction was completed across individual studies.
- **Open question:** Population fit for German and multilingual adult users has not been established.
- **Open question:** No mechanism has passed all seven gates; none is ready for an efficacy claim.
