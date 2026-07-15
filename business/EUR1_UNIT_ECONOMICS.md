# EUR1 unit economics

Status: Cycle 1 Draft - illustrative model, not a price commitment
Issue: #24
Branch: `codex/24-business-model`
Fee snapshot: 2026-07-15, Germany/EU-oriented

## Source facts and limits

| Input | Classification | Current source fact | Model use / limitation |
| --- | --- | --- | --- |
| Stripe EEA standard card | Verified | Germany page lists 1.5% + EUR0.25. [Stripe Germany](https://stripe.com/de/pricing) | Excludes Billing, dispute, refund, foreign-card, currency, tax, and other product fees. |
| Stripe SEPA Direct Debit | Verified | Germany page lists EUR0.35 per transaction. [Stripe Germany](https://stripe.com/de/pricing) | Mandate/failure/refund/operational costs not modeled. |
| Apple Small Business Program | Verified | Apple states a 15% commission for eligible developers up to its USD1M proceeds threshold, with eligibility/associated-account rules. [Apple](https://developer.apple.com/app-store/small-business-program/) | Tax treatment and EU alternative terms require channel-specific review. |
| Google Play fees | Verified | Current help page describes service-fee structures that vary by market/program; subscriptions and post-2026 EEA/UK/US terms require exact enrollment/channel review. [Google](https://support.google.com/googleplay/android-developer/answer/112622?hl=en-GB) | Do not use one universal rate in a decision model. |
| VAT OSS | Verified | EU OSS provides an optional electronic portal for certain cross-border consumer VAT obligations. [European Commission](https://vat-one-stop-shop.ec.europa.eu/one-stop-shop_en) | It does not determine Better Life's exact VAT rate, establishment, exemption, merchant-of-record, or filing duties. |

## One EUR monthly transaction

**Hypothesis:** The examples assume EUR1 is a German consumer price including illustrative 19% VAT and that Better Life bears the listed payment fee. Legal/tax/accounting review may change the treatment.

| Channel illustration | Gross | Fee assumption | Gross after fee | Illustrative VAT component (`1 - 1/1.19`) | Remaining before all operating cost |
| --- | ---: | ---: | ---: | ---: | ---: |
| Direct EEA card | EUR1.000 | EUR0.265 | EUR0.735 | EUR0.160 | **EUR0.575** |
| Direct SEPA debit | EUR1.000 | EUR0.350 | EUR0.650 | EUR0.160 | **EUR0.490** |
| App store at 15%, before tax treatment | EUR1.000 | EUR0.150 | **EUR0.850** | Not double-counted until merchant/tax role is confirmed | **EUR0.850 pre-tax-context** |

- **Verified arithmetic:** Stripe card fee at EUR1 = `0.25 + 1.5% * 1 = EUR0.265`.
- **Verified arithmetic:** Illustrative German VAT within EUR1 at 19% = `1 - 1/1.19 = EUR0.1597`.
- **Open question:** App-store proceeds and VAT must be modeled from the actual agreement/invoice flow; the table intentionally avoids claiming EUR0.690 after double deduction.

## Annual billing illustration

| Channel | EUR12 gross fee | Illustrative VAT component | Annual contribution before operations | Monthly equivalent |
| --- | ---: | ---: | ---: | ---: |
| One EEA card transaction | `0.25 + 1.5% * 12 = EUR0.430` | `12 - 12/1.19 = EUR1.916` | **EUR9.654** | **EUR0.805** |
| One SEPA transaction | EUR0.350 | EUR1.916 | **EUR9.734** | **EUR0.811** |
| 15% store fee, pre-tax-context | EUR1.800 | Not resolved here | **EUR10.200 pre-tax-context** | **EUR0.850** |

- **Evidence-supported:** Annual direct billing materially reduces fixed-fee drag versus twelve EUR1 card charges.
- **Open question:** Annual payment can reduce accessibility, create refund/cancellation obligations, and increase perceived commitment; user and consumer-law review are required.

## Cost stack

| Cost | Classification | Driver | Cycle 1 treatment |
| --- | --- | --- | --- |
| Payment/store/VAT/tax/accounting | Verified / open legal question | Transaction, channel, country, entity | Model by channel, refresh before decision. |
| Hosting/sync/AI | Hypothesis | Active accounts, storage, tokens, egress | Local/accountless core minimizes; no estimate without architecture/load. |
| Customer support | Hypothesis | Active/paying users, platform failures, refunds | Measure tickets/user and minutes/ticket in pilot. |
| Human moderation/safeguarding | Verified need if social | Coverage, incidents, quality, appeals, moderator care | Zero only because peer network is excluded; cannot be wished into automation. |
| Security/privacy/compliance | Verified need | Architecture, audits, incidents, rights, vendors | Fixed annual reserve required before production. |
| Clinical/evidence/accessibility review | Verified need | Content/release/research cycles | Fixed and per-change cost. |
| Engineering/product/operations | Verified need | Platform count, releases, maintenance | Founder time is an economic cost even if unpaid. |
| Insurance/legal/entity/admin | Open question | Country, claims, data, staff, contracts | Obtain professional quotes/advice. |
| Refunds, disputes, fraud, failed payments | Verified | Channel and cohort | Add observed rates; note Stripe page lists material dispute fees. |

## Break-even model

`required average paying users = annual fixed cost / (12 * monthly contribution per payer - annual variable cost per payer)`

| Illustration | Classification | Annual fixed cost | Contribution assumption | Variable cost | Paying users for break-even |
| --- | --- | ---: | ---: | ---: | ---: |
| Lean local core | Hypothesis | EUR40,000 | EUR0.80/month | EUR0.05/month | about **4,445** |
| Maintained service | Hypothesis | EUR120,000 | EUR0.80/month | EUR0.10/month | about **14,286** |
| Human safety service | Hypothesis | EUR300,000 | EUR0.80/month | EUR0.25/month | about **45,455** |

**Verified arithmetic:** These are formulas over illustrative inputs, not forecasts. They exclude growth/marketing, working capital, bad debt, corporate tax, and founder return; the human-service number is not an approved staffing budget.

## Decision

- **Hypothesis:** EUR1/month may work only for a very low-service local product at meaningful scale, with annual/prepaid collection or subsidy improving contribution.
- **Verified:** EUR1 cannot be used to justify underfunded privacy, security, clinical review, support, or moderation.
- **Open question:** Willingness to pay, free-to-paid conversion, churn, channel mix, support burden, and full costs are unknown.
- **Verified:** No public “only EUR1” promise is approved.
