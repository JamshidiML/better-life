# Scientific evidence map

Status: Cycle 1 Draft
Issue: #17
Branch: `codex/17-evidence-map`
Research cutoff: 2026-07-15
Scope: terminology, differential considerations, intervention evidence, and product claim boundaries

## Classification key

- **Verified**: directly established by a cited primary or authoritative source, or by repository policy.
- **Evidence-supported**: supported by the reviewed evidence, with material limitations stated.
- **Platform limitation**: imposed by a technical or distribution platform.
- **Hypothesis**: plausible but not established for Better Life or its intended users.
- **Open question**: unresolved and decision-relevant.

## Method and limits

| Classification | Statement |
| --- | --- |
| Verified | Cycle 1 reviewed WHO diagnostic material, peer-reviewed reviews/meta-analyses, instrument-validation studies, and repository policy. |
| Evidence-supported | The source set is appropriate for an initial evidence map and claim gate. |
| Open question | This is not a systematic review: searches were not dual-screened, no protocol was registered, risk of bias was not independently rated, and most full texts were not extracted study by study. |
| Open question | A clinician with CSBD/sexual-health expertise must review diagnostic interpretation and any public outcome language before release. |

## Architecture and product pre-check

| Required element | Classification | Cycle 1 answer |
| --- | --- | --- |
| User problem | Evidence-supported | Some adults report impaired control, adverse consequences, or distress around sexual behavior; distress can also be shaped by moral incongruence, so self-labels alone cannot define the problem. [WHO CDDR](https://www.who.int/publications/i/item/9789240077263); [Grubbs et al. meta-analysis](https://pubmed.ncbi.nlm.nih.gov/30076491/) |
| Expected benefit | Hypothesis | A non-diagnostic product may help a consenting adult notice patterns, add voluntary friction, practice coping skills, and recover from setbacks. |
| Supporting evidence | Evidence-supported | Psychotherapy research offers candidate mechanisms, but the evidence base is heterogeneous and does not validate Better Life as an intervention. [López-Pinar et al.](https://pubmed.ncbi.nlm.nih.gov/40126561/); [Antons et al.](https://pmc.ncbi.nlm.nih.gov/articles/PMC9872540/) |
| Required data | Hypothesis | Product research may need self-chosen goals, context labels, intervention use, and user-reported outcomes; diagnosis, explicit content, and identity data are not required for the first product test. |
| Consent requirements | Verified | Participation and each sharing pathway must be voluntary, specific, understandable, revocable, and visible; strict-mode changes also need a calm-state recovery path. `phase0/SAFETY_AND_CONSENT.md` |
| Safety risks | Verified | Misdiagnosis, shame amplification, moralizing, care displacement, coercion, and false efficacy confidence are foreseeable harms. `phase0/RISK_REGISTER.md` |
| Misuse risks | Verified | Hidden monitoring, partner surveillance, punishment, and claims of guaranteed prevention are prohibited. `AGENTS.md`; `docs/foundation/PRODUCT_DOCTRINE.md` |
| Platform feasibility | Open question | Technical feasibility belongs to Thread 01; no clinical mechanism should be assumed technically enforceable across devices. |
| Success metric | Hypothesis | For research, every public-facing claim maps to an approved register entry; for a future pilot, benefit must be measured with non-diagnostic, user-relevant outcomes and predefined harm checks. |
| Exit strategy | Verified | Reject or reframe any mechanism whose benefit cannot be distinguished from shame, coercion, surveillance, or unsupported treatment. |

## Terminology map

| Term or distinction | Classification | Evidence finding | Better Life rule |
| --- | --- | --- | --- |
| Compulsive sexual behaviour disorder (CSBD) | Verified | WHO ICD-11 code 6C72 places CSBD among impulse-control disorders. Diagnostic requirements concern persistent impaired control over intense, repetitive sexual impulses or urges leading to repetitive behavior, with marked distress or impairment; distress based entirely on moral judgments is insufficient. [WHO CDDR](https://www.who.int/publications/i/item/9789240077263) | CSBD may appear in scientific context, never as an app-assigned identity or diagnosis. |
| Problematic pornography use (PPU) | Evidence-supported | PPU is a research and clinical presentation used in the literature; it is not interchangeable with an ICD-11 diagnosis. [Antons et al.](https://pmc.ncbi.nlm.nih.gov/articles/PMC9872540/); [Bőthe et al.](https://pmc.ncbi.nlm.nih.gov/articles/PMC10658102/) | Describe the behavior or user goal without asserting a disorder. |
| High frequency or high desire | Verified | Frequency or strong sexual interest alone does not establish CSBD without the required loss of control and distress/impairment pattern. [WHO CDDR](https://www.who.int/publications/i/item/9789240077263) | Never classify a user from frequency alone. |
| Moral incongruence | Evidence-supported | Meta-analytic evidence supports moral incongruence as one contributor to self-perceived pornography problems; it does not explain every impaired-control presentation. [Grubbs et al.](https://pubmed.ncbi.nlm.nih.gov/30076491/) | Avoid moral scoring and ask whether the user's goal is self-chosen and grounded in experienced impact. |
| CSBD-19 | Evidence-supported | The scale was developed as an ICD-11-based screening measure and validated across languages and samples. A 2026 scoping review found broad reliability/validity evidence but called for more criterion-validity and cutoff work in clinical populations. [Development study](https://pubmed.ncbi.nlm.nih.gov/32609629/); [2026 scoping review](https://pubmed.ncbi.nlm.nih.gov/41669818/) | Do not use as a diagnosis, eligibility gate, or automated risk label in Phase 0. |
| CSBD-DI | Evidence-supported | A seven-item inventory has cross-language psychometric support as a screening instrument. [Grubbs et al.](https://pubmed.ncbi.nlm.nih.gov/36913189/) | Same restriction: screening evidence does not authorize automated diagnosis. |

## Differential and exclusion considerations

| Consideration | Classification | Why it matters | Product boundary |
| --- | --- | --- | --- |
| Moral distress without impaired control or functional impairment | Verified | WHO explicitly excludes distress based entirely on moral judgments or disapproval. | Offer neutral goal reflection; do not reinforce a disorder label. |
| Strong interest or frequent behavior without marked impairment | Verified | High interest alone is not the disorder. | Frequency must not trigger alarming language or escalation. |
| Substance, medication, manic, neurological, or other clinical contributors | Evidence-supported | Clinical assessment may need to distinguish other causes or co-occurring conditions. [WHO CDDR](https://www.who.int/publications/i/item/9789240077263); [Kraus et al.](https://pubmed.ncbi.nlm.nih.gov/29352554/) | The product cannot resolve the differential; present a professional-care route when users report concerning changes or impairment. |
| Trauma, anxiety, depression, OCD-spectrum symptoms, or relationship distress | Evidence-supported | Reviews report heterogeneous correlates and comorbidity; direction and causality cannot be assumed for an individual. [Bőthe et al.](https://pmc.ncbi.nlm.nih.gov/articles/PMC10658102/) | Do not infer causes. Keep crisis and clinical support pathways outside peer/AI responsibility. |
| Age and capacity | Verified | Better Life's current scope is voluntary self-use by adults. `docs/foundation/PROJECT_CHARTER.md` | No minors in Phase 0; re-consent if scope changes. |

## Intervention evidence map

| Intervention family | Classification | Cycle 1 evidence finding | Translation boundary |
| --- | --- | --- | --- |
| Psychoeducation | Evidence-supported | WFSBP clinical guidance treats psychoeducation and psychotherapy as first-choice clinical approaches, while noting few randomized trials. [Turner et al.](https://pubmed.ncbi.nlm.nih.gov/37522807/) | Plain-language education may be tested, but it must not be presented as treatment. |
| CBT-derived skills | Evidence-supported | Reviews and a recent psychotherapy meta-analysis suggest potential benefit for PPU-related outcomes, with study-quality, heterogeneity, and definition limitations. [López-Pinar et al.](https://pubmed.ncbi.nlm.nih.gov/40126561/); [Antons et al.](https://pmc.ncbi.nlm.nih.gov/articles/PMC9872540/) | Candidate skills include trigger reflection, coping planning, and lapse review; efficacy in Better Life remains a hypothesis. |
| ACT-derived skills | Evidence-supported | ACT appears in the psychotherapy evidence base, but the number and comparability of studies are limited. [López-Pinar et al.](https://pubmed.ncbi.nlm.nih.gov/40126561/) | Values clarification and urge-observation exercises require clinical-content review and user validation. |
| Mindfulness and emotion-regulation skills | Evidence-supported | Mechanisms are discussed across reviews, but product-specific and PPU-specific certainty is limited. [Bőthe et al.](https://pmc.ncbi.nlm.nih.gov/articles/PMC10658102/) | Test as optional coping tools, never as a cure or guaranteed urge reduction. |
| Motivational interviewing principles | Hypothesis | Autonomy-supportive reflection is compatible with Better Life's consent doctrine, but direct evidence for an automated Better Life implementation was not established. | Use only non-coercive prompts; do not impersonate a clinician. |
| Relapse-prevention planning | Evidence-supported | Planning and coping approaches occur in the treatment literature; evidence does not establish a universal relapse model for all users. [Antons et al.](https://pmc.ncbi.nlm.nih.gov/articles/PMC9872540/) | Prefer “setback” and “repair” language; avoid streak punishment and catastrophic framing. |
| Peer or mutual support | Open question | Cycle 1 found no direct evidence that Better Life's proposed anonymous support model improves PPU/CSBD outcomes safely. | Thread 03 may extract mechanisms; Thread 04 must establish safety before any live test. |
| Pharmacological treatment | Verified | WFSBP guidance concerns clinician-led assessment and prescribing; no medication has a formal CSBD indication in the cited guideline. [Turner et al.](https://pubmed.ncbi.nlm.nih.gov/37522807/) | Entirely out of product scope; direct users to qualified professionals. |

## Product decisions for Cycle 1

| Decision | Classification | Rationale |
| --- | --- | --- |
| Use non-diagnostic, self-defined goal language. | Evidence-supported | It reduces conflict with diagnostic uncertainty, moral incongruence, and product scope. |
| Treat all intervention mechanisms as testable product hypotheses. | Verified | No reviewed source validates Better Life itself. |
| Keep screening instruments out of Phase 0 onboarding. | Evidence-supported | Screening could imply diagnosis, collect sensitive data, and distort recruitment before a validated use case exists. |
| Measure agency, perceived usefulness, burden, shame effects, and unwanted consequences before any symptom-reduction claim. | Hypothesis | These outcomes are closer to the product promise and can expose harm; the final measure set still needs research and clinical review. |
| Provide a professional-care pathway without claiming referral adequacy. | Evidence-supported | A non-clinical tool must not displace assessment when users report impairment, danger, or co-occurring concerns. |

## Open evidence work

1. **Open question:** Which outcomes are clinically meaningful, non-diagnostic, and feasible for a small Phase 0 study?
2. **Open question:** Which studies in the 2025 psychotherapy meta-analysis carry the result after risk-of-bias and attrition review?
3. **Open question:** How do findings vary by gender, sexual orientation, culture, religiosity, and help-seeking context?
4. **Open question:** What adverse effects, shame effects, and treatment-displacement outcomes were measured or omitted?
5. **Open question:** Which educational and coping exercises can a clinician approve for a self-help product without creating a regulated medical claim?

## Source register

| ID | Classification | Source | Use and limitation |
| --- | --- | --- | --- |
| S01 | Verified | [WHO, ICD-11 CDDR (2024)](https://www.who.int/publications/i/item/9789240077263) | Authoritative diagnostic terminology; not evidence that Better Life should diagnose. |
| S02 | Evidence-supported | [Kraus et al., CSBD in ICD-11](https://pubmed.ncbi.nlm.nih.gov/29352554/) | Clinical framing article; concise and not an intervention trial. |
| S03 | Evidence-supported | [Bőthe et al., CSBD-19 development](https://pubmed.ncbi.nlm.nih.gov/32609629/) | Instrument development; screening is not diagnosis. |
| S04 | Evidence-supported | [Engelhardt et al., CSBD-19 scoping review](https://pubmed.ncbi.nlm.nih.gov/41669818/) | Broad validation map; identifies remaining criterion/cutoff questions. |
| S05 | Evidence-supported | [Grubbs et al., CSBD-DI](https://pubmed.ncbi.nlm.nih.gov/36913189/) | Cross-cultural screening validation; no product-use authorization. |
| S06 | Evidence-supported | [Grubbs et al., moral incongruence meta-analysis](https://pubmed.ncbi.nlm.nih.gov/30076491/) | Supports differential caution; does not negate all impairment. |
| S07 | Evidence-supported | [Antons et al., preregistered treatment review](https://pmc.ncbi.nlm.nih.gov/articles/PMC9872540/) | Maps treatment evidence and weaknesses; older search window. |
| S08 | Evidence-supported | [López-Pinar et al., psychotherapy meta-analysis](https://pubmed.ncbi.nlm.nih.gov/40126561/) | Recent synthesis; product transfer, high risk of bias, and limited population diversity remain concerns. |
| S09 | Evidence-supported | [Turner et al., WFSBP guideline](https://pubmed.ncbi.nlm.nih.gov/37522807/) | Clinical guidance, especially pharmacology; not a consumer-product specification. |
| S10 | Evidence-supported | [Bőthe et al., biopsychosocial determinants review](https://pmc.ncbi.nlm.nih.gov/articles/PMC10658102/) | Broad correlates review; individual causality cannot be inferred. |
