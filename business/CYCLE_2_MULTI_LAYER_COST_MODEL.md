# Cycle 2 Multi-Layer Cost And Funding Model

- Status: illustrative planning model; not a forecast, price, tax, legal, or funding recommendation
- Issue: #24 and Founder Amendment Issue #42
- Snapshot date: 2026-07-15

## Classification

This document uses: `Source-verified fact`, `Evidence-supported conclusion`, `Repository decision`, `Founder decision`, `Founder decision pending`, `Design requirement`, `Proposed control`, `Hypothesis`, `Platform limitation`, `Open question`, `Executed test result`, and `Arithmetic check`.

The structured inputs are in [Cycle 2 cost inputs](CYCLE_2_COST_INPUTS.csv) and [Cycle 2 scenarios](CYCLE_2_SCENARIOS.csv). All operating-cost, volume, conversion, funding, and price inputs are hypotheses until replaced by quotes or observed evidence.

## Architecture And Business Pre-Check

| Required element | Classification | Cycle 2 answer |
| --- | --- | --- |
| User problem | Evidence-supported conclusion | Adults may need a low-cost private core, while multi-layer controls and human services create very different cost and risk structures. |
| Expected benefit | Hypothesis | Separating free core, convenience, managed control, and human service may prevent hidden subsidy and safety underfunding. |
| Supporting evidence | Source-verified fact | Current official payment/store pages show meaningful fixed/percentage fees and channel-specific structures; they do not establish Better Life demand or viability. |
| Required data | Design requirement | Aggregated channel, payer/supporter status, transaction/refund/support cost, service usage needed for cost allocation; intimate plan/behavior data is excluded. |
| Consent requirements | Design requirement | Payment, supporter, organization funding, and optional service are separate from intimate product consent and never affect interventions or care routes. |
| Safety risks | Evidence-supported conclusion | Underfunded review/support/moderation, shame conversion, crisis paywalls, cancellation friction, hidden labor, and financial runway failure. |
| Misuse risks | Evidence-supported conclusion | Employer/organization reporting, vulnerability pricing, intimate-data monetization, ally-visible payer status, and safety-feature upsell. |
| Platform feasibility | Platform limitation | Store eligibility/fees, billing rules, app distribution, payment methods, tax, and refunds vary by channel, country, date, and agreement. |
| Success metric | Hypothesis | Full cost by layer, net contribution, runway/reserve, free access, refund/cancellation, support burden, safety coverage, and no monetization harm. |
| Exit strategy | Design requirement | Disable an optional layer, preserve free local rights/safety, export/delete/teardown, and fund a clear support horizon before shutdown. |

## Current Official Fee Facts

| Input | Classification | Snapshot and model rule |
| --- | --- | --- |
| Stripe standard EEA card | Source-verified fact | Stripe Germany lists `1.5% + EUR0.25`; extra products, disputes, refunds, foreign cards, FX, and taxes remain separate. [Stripe Germany](https://stripe.com/de/pricing) |
| Stripe SEPA Direct Debit | Source-verified fact | Stripe Germany lists `EUR0.35` per transaction; failures, mandates, refunds, support, and other fees are not resolved. [Stripe Germany](https://stripe.com/de/pricing) |
| Apple eligible small business | Source-verified fact | Apple describes a 15% reduced commission for eligible participants up to its proceeds threshold and associated-account rules. [Apple](https://developer.apple.com/app-store/small-business-program/) |
| Google Play | Source-verified fact | Google says there is no single fee and documents EEA/UK/US changes effective 30 June 2026; its table shows subscription components and program/install-dependent rates. [Google Play fees](https://support.google.com/googleplay/android-developer/answer/112622?hl=en-GB) |
| EU VAT OSS | Source-verified fact | The Commission describes OSS as a portal for covered cross-border B2C supplies; it does not determine Better Life's entity, rate, exemption, merchant role, or filing. [European Commission](https://vat-one-stop-shop.ec.europa.eu/) |

Repository decision: no universal app-store fee, VAT treatment, or net contribution is approved. The 15% `store_fee_illustration` and 19% tax reserve are sensitivity inputs only.

## Cost Ownership By Protection Layer

| Layer/offer | Fixed cost families | Variable cost families | Funding boundary | Exit if unfunded |
| --- | --- | --- | --- | --- |
| Research/MVE | Participant compensation, method/clinical/coercion/privacy/accessibility review, research operations, legal/ethics, low-fidelity design. | Recruitment, interviews, transcription under protocol, adverse-event follow-up. | Founder/grant/donation with independence terms; no product revenue assumption. | Stop/narrow study and preserve consent/data obligations. |
| Free local core | Engineering/release, security/privacy, content/claims, accessibility/localization, legal/entity, support horizon. | Distribution, basic support, incident handling. | Grant/supporter/mission reserve; rights and safety cannot depend on payment. | Freeze distribution safely; preserve local use/export/delete and publish horizon. |
| Paid convenience | Account/auth, sync/backup/recovery, billing/rights, multi-device state, vendor/security review. | Storage/egress, account support, payment/refund/fraud, rights requests. | Transparent convenience price; local core remains useful and private. | Disable cloud layer; export/delete; local fallback. |
| Managed controls | Browser/OS/network adapters, platform specialists, security test, store/entitlement/admin operations, incident and teardown. | Per-platform support, false block/recovery, policy health, vendor changes. | Separate price/subsidy by supported adapter; no impossible-bypass promise. | Remove adapter and every artifact; retain Supportive/local core. |
| Ally delivery | Consent/recovery architecture, coercion/security review, messaging vendor, incident response. | Delivery, support, compromise/revocation, key rotation. | Optional convenience/support funding; no payer-visible ally signal. | Revoke role/token; independent recovery; local core. |
| Human support network | Moderation system, staffing, training, supervision, wellbeing, safeguarding, appeals, legal/privacy/security, insurance, crisis boundaries. | Coverage hours, reports/incidents, translations, user support, audits. | Dedicated conservative funding separate from optimistic low-price core. | Kill switch preserving block/report/delete/routes and private core. |
| Organization-funded access | Procurement, contract, tenant isolation, independence, anti-coercion, audit, support. | Eligible-user support and service operations. | Organization pays only for access; no user activity/history/admin control. | User continuity/migration; revoke organization role/data. |

## Funding Streams Must Stay Separate

| Stream | May fund | Must not buy |
| --- | --- | --- |
| Free core reserve | Local planning, static content, consent/control, safety/privacy fixes, export/delete. | Intimate data, ads, weaker privacy, shame conversion. |
| Voluntary supporter | Same public core and research/maintenance reserve. | Status, badges, ally visibility, preferential care, policy authority. |
| Paid convenience | Optional account/sync/presentation where independently safe and valuable. | Safety boundary, deletion, recovery, core usefulness. |
| Managed-control fee | Expensive adapter operation and support only after validation. | Guarantee, coercive administrator, hidden monitoring. |
| Human-service fee/grant | Staffed service with ring-fenced safeguarding and shutdown reserve. | AI-only substitution for required humans or emergency promise. |
| Organization funding | Access/research with independence and no reporting. | Employee/member behavior, plan, history, strict-mode control, referral rank. |
| Grant/donation | Research, public-interest core, external review, access subsidy. | Funder control of result, hidden conflict, participant access/data. |

## Scenario Formula

The CSV scenarios use:

```text
gross_paid = payers * annual_price
direct_card_fee = payers * (0.25 + 0.015 * annual_price)
store_fee_illustration = gross_paid * 0.15
illustrative_tax_reserve = gross_paid * 19 / 119
resource_after_fee_tax = other_funding + gross_paid - channel_fee - tax_reserve
total_cost = fixed_cost + variable_cost
surplus = resource_after_fee_tax - total_cost
```

Arithmetic check: these formulas reproduce the rounded values in `CYCLE_2_SCENARIOS.csv`; rounding tolerance is EUR0.01. Economic validity is not verified because channel/tax role, quotes, user volume, conversion, churn, bad debt, refunds, support, and cost inputs are unresolved.

## Scenario Readout

| ID | Offer/funding split | Arithmetic result | Interpretation limit |
| --- | --- | ---: | --- |
| S0 | Research MVE funded by EUR180k founder/grant/donation resources | EUR0 | Balanced only because the cost/funding budget is assumed. |
| S1 | Free local core, 1,000 supporters at EUR24, plus EUR120k grant | **-EUR15,441.93** | Supporter rate, grant, cost, tax and price are hypotheses. |
| S2 | 100k active; 15k pay EUR36 for convenience | **EUR39,431.51** | Positive only at assumed scale, conversion, low cost, and direct-card mix; no acquisition/runway included. |
| S3 | 10k pay EUR60 for managed controls | **-EUR235,798.32** | Shows adapter cost cannot be folded into a cheap generic promise under these inputs. |
| S4 | 50k pay EUR120 for human service plus EUR2.5m dedicated funding | **EUR642,016.81** | Not a staffing plan; demonstrates dependence on substantial scale, price, and subsidy. |
| S5 | Organization contributes EUR500k for free access to 100k users | **-EUR50,000.00** | No admin reporting is allowed; procurement/cost assumptions are unvalidated. |

Evidence-supported conclusion: model sign changes are driven more by unvalidated scale, conversion, fixed cost, human coverage, and channel/tax structure than by arithmetic. None is a forecast or acceptance case.

## Missing Costs And Reserves

The CSV does not yet quantify acquisition, founder return/capital cost, working capital, bad debt, refunds/disputes, corporate/income taxes, payroll overhead, insurance quotes, accessibility remediation, penetration testing, incident/breach response, regulator/court matters, app-store review delay, vendor migration, content translation, 24/7 staffing, severance, or shutdown obligations.

Design requirement: every future scenario includes a named annual reserve for security/privacy, clinical/method, accessibility/inclusion, legal/consumer/tax, platform maintenance, incident response, user support, and orderly exit. Human support additionally requires funded coverage, supervision, wellbeing, appeals, and surge capacity.

## Decision Gates

| Gate | Evidence required | Stop/exit |
| --- | --- | --- |
| Founder constraint | Decide whether EUR1 is mission constraint, hypothesis, communication shorthand, or abandoned. | No public price before decision. |
| User value/willingness | Concept tests separating free, supporter, annual price, convenience, managed controls, and human service. | Stop paid layer if confusion, shame, weak value, or inequitable access. |
| Full-cost budget | Quotes and loaded internal costs by layer, platform, support, reserve, and shutdown. | No launch when safety/privacy/maintenance is unfunded. |
| Channel/tax/legal | Entity-specific accountant, consumer counsel, payment/store agreements, VAT/OSS and refund/cancellation flow. | No checkout or forecast from generic rates. |
| Operations | Synthetic ticket/incident/deletion/refund/adapter simulations and staffing coverage. | Exclude layer whose service burden is unsupported. |
| Governance | Free-core lock, conflict/funder disclosure, no organization reporting, price/cancellation change process. | Reject funding that buys user control/data or evidence result. |

## Cycle 2 Recommendation

Repository decision: treat EUR1 as an unresolved hypothesis, not a promise. Fund research/MVE first; preserve a genuinely useful free local core; test supporter intent separately from paid convenience; price managed controls and human services only from full cost; permit organization funding only without user reporting/control; and remove any layer whose responsible operation cannot be funded without violating safety, privacy, consent, evidence, or access.
