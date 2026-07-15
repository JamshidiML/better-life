# Progress and outcome model

Status: Cycle 1 Draft - non-clinical measurement framework
Issue: #21
Branch: `codex/21-personal-recovery-plan`

## Measurement position

- **Design requirement:** Better Life progress is not a diagnosis, clinical outcome, moral worth, or public rank.
- **Design requirement:** No single streak or abstinence count is the universal definition of success.
- **Hypothesis:** Early measurement should prioritize agency, plan fit, burden, and repair alongside any user-chosen behavior measure.

## Outcome families

| Family | Classification | Candidate measure | Data and consent | Interpretation limit |
| --- | --- | --- | --- | --- |
| Agency | Hypothesis | “I could choose my next step” short response | Optional local check | Self-report; not proof of behavior change. |
| Plan fit | Hypothesis | Primary/fallback action available and useful | Optional event response | May reflect design quality, not recovery. |
| Burden and shame | Hypothesis | Intrusion, rumination, shame, coercion, unwanted disclosure | Optional adverse-effect check | Must be reviewed even if benefit rises. |
| Setback repair | Hypothesis | Time/steps until a chosen plan adjustment or return to routine | User-defined, optional | No forced disclosure or “relapse” label. |
| Chosen behavior | Hypothesis | User-selected frequency/window or goal-consistency note | Off by default; local; user-defined | Frequency alone is not diagnosis or impairment. |
| Function/wellbeing | Open question | User-selected sleep, focus, relationships, mood, or daily function | Sensitive; strong minimization and measure validation needed | Product cannot infer cause. |
| Product control | Design requirement | Exit, consent change, delete/export, false trigger/block | System verification | Measures safety/control, not personal success. |
| Care navigation | Hypothesis | Resource understood/opened if user requested it | Minimal event, no clinical follow-up inference | Opening is not treatment access or outcome. |

## Display rules

1. **Design requirement:** Default view says what was recorded and what was not; no opaque score.
2. **Design requirement:** Trends show uncertainty and missingness; they do not label “good/bad,” “clean,” “failed,” or “recovered.”
3. **Design requirement:** Setbacks do not reset unrelated learning, plan quality, or control achievements.
4. **Design requirement:** User chooses fields/time window and can hide/delete the view.
5. **Design requirement:** No social comparison, percentile, leaderboard, badge, loss aversion, or public streak.
6. **Design requirement:** The product must not claim causality from temporal association.

## Evaluation hierarchy

| Stage | Classification | Primary question | Stop condition |
| --- | --- | --- | --- |
| Concept | Hypothesis | Do users understand each measure without clinical/moral interpretation? | Misinterpretation, shame, coercion. |
| Usability | Hypothesis | Can users choose, review, and remove measures easily? | Compulsive checking or inaccessible controls. |
| Feasibility | Hypothesis | Is collection complete enough without surveillance? | Missingness drives pressure for more invasive data. |
| Pilot | Open question | Does the product improve predefined user-relevant outcomes versus baseline/comparator without unacceptable harms? | Frozen safety threshold crossed. |
| Clinical claim | Repository decision | Not available from current phase. | Requires separate rigorous evidence and regulatory/clinical review. |

## Metric quality checklist

- **Design requirement:** Define construct, population, wording, response window, missing-data handling, burden, and minimally important interpretation before collection.
- **Design requirement:** Separate product-use metrics from user outcomes and safety/adverse effects.
- **Design requirement:** Report denominators, attrition, uncertainty, null/adverse findings, and subgroup limits.
- **Design requirement:** Never optimize a proxy when doing so could increase shame, surveillance, or engagement dependency.

## Exit strategy

- **Design requirement:** Remove a measure if it cannot be collected without disproportionate sensitivity or if users interpret it as diagnosis/moral judgment.
- **Design requirement:** Replace dashboards with a simple private plan review if visualization increases checking or shame.
- **Open question:** Validated candidate instruments and pilot thresholds require methodologist and clinical review.
