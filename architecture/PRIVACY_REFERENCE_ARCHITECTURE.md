# Privacy reference architecture

Status: Cycle 1 Draft - not a compliance claim
Issue: #22
Branch: `codex/22-privacy-architecture`

## Architecture decision

- **Hypothesis:** The first useful digital shape can be accountless and local-only: personal plan, manual Protective Spiral, static education, and local settings.
- **Design requirement:** Account, sync, AI, ally, peer, and telemetry are separate capability layers, not prerequisites hidden inside the core.
- **Source-verified fact:** EDPB Article 25 guidance addresses data protection by design/default, including data-minimizing design. [EDPB Article 25 guidance](https://www.edpb.europa.eu/public-consultations/guidelines-42019-on-article-25-data-protection-by-design-and-by-default_et)
- **Open question:** This architecture requires EU/German legal, security, accessibility, and platform validation before implementation.

## Architecture and product pre-check

| Required element | Classification | Cycle 1 answer |
| --- | --- | --- |
| User problem | Evidence-supported conclusion | Adults need intimate self-help tools without creating a surveillance record or losing control of sharing. |
| Expected benefit | Hypothesis | Local/accountless core reduces breach, coercion, processor, and consent complexity while keeping manual planning usable. |
| Supporting evidence | Evidence-supported conclusion | Repository doctrine plus GDPR/EDPB data-minimization and privacy-by-design principles support the direction, not its legal sufficiency. |
| Required data | Design requirement | Core requires only local plan/settings; each optional service adds a named inventory. |
| Consent requirements | Design requirement | Optional service boundaries require separate, informed, specific, revocable choices and purpose-limited receipts. |
| Safety/misuse | Evidence-supported conclusion | Device compromise, coercive partner, insider, provider, logging, re-identification, recovery, notification, and export leaks. |
| Platform feasibility | Open question | Secure local storage and permission behavior vary; accountless use complicates backup/recovery but reduces server exposure. |
| Success metric | Hypothesis | Core task success with zero external intimate data, consent comprehension, zero hidden flows, delete/export correctness, and incident results. |
| Exit strategy | Design requirement | Optional service can be disabled independently; local core remains; feature is removed if its value does not justify added data. |

## Capability layers

| Layer | Classification | Components/data | Trust boundary | Default |
| --- | --- | --- | --- | --- |
| L0 Research artifact | Repository decision | Paper/Figma-like plan, synthetic scenarios | Researcher/participant protocol | No raw participant artifact in repo/AI. |
| L1 Local core | Hypothesis | Encrypted local plan, manual Spiral, static content, consent/control UI | Device account, OS storage, backups, notifications | First digital candidate. |
| L2 Local platform adapter | Platform limitation | Browser/app/domain rules and local events | Extension/VPN/OS permission | Off; per-capability consent. |
| L3 Optional account | Open question | Opaque auth, consent receipts, entitlement, security events | Identity service | Not needed first. |
| L4 Optional encrypted sync | Open question | User-selected plan/settings | Sync service, keys, recovery | Off; design not approved. |
| L5 Optional ally delivery | Open question | Recipient and exact selected message | Notification/message processor | Off; preview every send. |
| L6 Optional peer support | Repository decision | Thread 04 match/report data | Relay/moderation | Excluded from MVP. |
| L7 Optional AI | Open question | Narrow user-selected prompt | Model/provider | Off; static/rules-first. |
| L8 Operational telemetry | Hypothesis | Allowlisted health/error schema | Analytics/observability | Off or minimal aggregate; no ad SDK. |

## Local core trust boundaries

| Boundary | Classification | Control and residual risk |
| --- | --- | --- |
| User -> app | Design requirement | Explicit input and current visibility; shoulder-surfing and coercion remain. |
| App -> OS secure storage | Platform limitation | Platform encryption/key store and app isolation; rooted/jailbroken or shared/unlocked device remains. |
| App -> notifications | Platform limitation | Neutral/off default and preview setting; OS sync or observers may reveal metadata. |
| App -> backup | Open question | Sensitive backup should be disabled or end-to-end protected with clear recovery tradeoff; platform behavior must be tested. |
| App -> platform adapter | Platform limitation | Narrow user-selected rule and local event; extension/VPN permissions expose capability and require review. |
| App -> export target | Design requirement | User-initiated, re-authenticated, sensitivity warning, encrypted option; destination leaves Better Life control. |

## Optional sync design choices

| Option | Classification | Benefit | Privacy/recovery cost | Decision |
| --- | --- | --- | --- | --- |
| No sync | Hypothesis | Smallest breach/processor surface | Device loss loses plan unless user exports | Default candidate. |
| Provider-readable sync | Repository decision | Easier recovery/support | Provider can access D3; creates high-impact breach and legal scope | Reject for intimate core unless exceptional need. |
| End-to-end encrypted sync | Open question | Reduces provider content access | Key recovery, metadata, multi-device revocation, abuse/support complexity | Research only after user need. |
| User-managed encrypted export | Hypothesis | Explicit portable backup | Password/key loss and unsafe destination | Candidate after usability/security test. |

## Logging and analytics standard

1. **Design requirement:** Compile-time/schema allowlist; unknown fields and free text are rejected.
2. **Design requirement:** Never log URLs, titles, screenshots, goals, values, context labels, messages, contact details, clipboard, or form content.
3. **Design requirement:** Separate security events from product analytics and intimate local state.
4. **Design requirement:** No third-party advertising, cross-app tracking, session replay, heatmaps, or raw screen capture.
5. **Design requirement:** Debug mode has time-limited explicit consent, visible indicator, local review, and automatic expiry; it still excludes DX data.

## Threat-control summary

| Threat | Classification | Primary control | Exit/limitation |
| --- | --- | --- | --- |
| Server breach | Evidence-supported conclusion | Keep D3/D4 local; separate D2; minimize service | Accountless mode. |
| Coercive partner/device observer | Evidence-supported conclusion | Neutral surface, local re-auth, session review, no ally controls | No app can protect a fully compromised device; provide fast safe exit. |
| Insider/support browsing | Evidence-supported conclusion | No default D3 server copy; role access/audit | Remove support feature needing broad access. |
| Processor/model reuse | Evidence-supported conclusion | No ad tech/training; contract/technical controls; no default AI | Static/local fallback. |
| Re-identification | Evidence-supported conclusion | Avoid granular small-cohort analytics and linkable IDs | Suppress report rather than weaken threshold. |
| Export/recovery leak | Evidence-supported conclusion | Re-auth, explicit destination, encryption option, no email attachment | Warn that exported copy leaves control. |
| Silent feature drift | Evidence-supported conclusion | Data review gate, DPIA/change review, consent versioning | Disable feature until review. |

## Required verification

- **Open question:** DPIA, records of processing, controller/processor map, legal bases/Article 9 condition, transfer and vendor reviews.
- **Open question:** mobile/browser secure-storage, backup, notification, permission, uninstall, and multi-user-device tests.
- **Open question:** security design review, threat model, penetration test, dependency/supply-chain controls, incident plan.
- **Open question:** consent comprehension, coercion, recovery, export, deletion, and accessibility usability tests.
- **Repository decision:** No “GDPR compliant,” “anonymous,” or “zero knowledge” claim is approved by this document.
