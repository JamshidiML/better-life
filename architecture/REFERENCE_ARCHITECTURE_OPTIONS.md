# Reference Architecture Options

- Status: Cycle 1 draft
- Issue: #13
- Research date: 2026-07-15

## Option Comparison

All rows are **Hypothesis** informed by the platform findings; no production stack is selected.

| Option | Value | Enforceability | Setup / privacy | Complexity / cost | Principal failure | Cycle 1 decision |
| --- | --- | --- | --- | --- | --- | --- |
| Web command center + guided controls | Fast plan creation and device-specific instructions | Low | Low setup; minimal data if local browser storage is used | Low | Guidance is ignored or existing controls are weak | Keep as base experience |
| Mobile-first companion | Available during high-risk moments | Low-medium, platform dependent | App permissions and store review; intimate context risk | Medium | Overpromises system control | Keep as support surface, not sole architecture |
| Browser-extension-first | Direct web friction and redirect | Medium inside one installed browser | Clear permission surface; local-only feasible | Low-medium | Disable/removal and alternate browser | Recommended first technical wedge |
| Layered suite | Broadest long-term coverage | Medium-high across enrolled surfaces | Highest setup, trust, and data-flow burden | High | Inconsistent adapters and operational fragility | Long-term target, not MVP |
| Network-first | Covers multiple applications/domains | Medium for known domains | VPN/DNS conflict and household privacy burden | Medium-high | Encrypted/app-internal/alternate-network bypass | Spike later; guidance only in v1 |

## Recommended Conceptual Architecture

```text
User and transparency UI
  -> versioned Protection Constitution
  -> local policy engine
       -> browser adapter
       -> mobile adapter
       -> desktop adapter
       -> optional network adapter
  -> local intervention engine
  -> local content-free event journal
  -> optional encrypted sync of policy metadata
  -> optional minimal-disclosure help request
```

## Trust Boundaries

| Boundary | Classification | Rule |
| --- | --- | --- |
| User to local policy engine | Verified | Only an authenticated adult user creates or changes policy; consequences are previewed before activation. |
| Adapter to local journal | Verified | Record action, adapter health, coarse time, and policy version; exclude page content, screenshots, and explicit URLs. |
| Device to cloud sync | Hypothesis | Sync is optional and end-to-end encryption should be evaluated; server receives the minimum needed for multi-device policy consistency. |
| Device to ally | Verified | Send only an explicit help request or pre-selected state; never raw history or content. |
| Operations to observability | Verified | Metrics cover crashes, latency, and adapter health with pseudonymous/coarse identifiers; no intimate event stream by default. |
| Recovery / strict-mode exit | Verified | Account recovery cannot silently let a third party control the user; safety escape and calm-state change are separate flows. |

## Component Responsibilities

- **Verified:** Identity proves access to the user's account, not diagnosis, morality, or ownership of every device.
- **Verified:** Consent service versions each permission and purpose, records revocation, and prevents a policy from silently gaining new data access.
- **Hypothesis:** Local policy engine resolves schedules, rules, degraded adapter state, and an intervention choice without requiring the cloud.
- **Hypothesis:** Optional sync stores encrypted policy envelopes and adapter status, not raw browsing events.
- **Verified:** Audit UI explains what was attempted, what succeeded, what failed, and why protection is degraded.
- **Verified:** Deletion removes local journals and requests server-side erasure; uninstall alone must not be described as complete cloud deletion.

## Alternatives Not Selected

- **Verified:** Device-owner/MDM-first is rejected for the consumer MVP because its provisioning model and control power conflict with simple voluntary self-install.
- **Verified:** Screenshot/classifier-first is rejected because it creates disproportionate intimate-data and false-positive risk before value is established.
- **Platform limitation:** DNS-only is rejected as the product architecture because it cannot address app-internal, encrypted, local, or alternate-network paths.

## Open Questions

- Whether cross-device sync can be useful without centralizing intimate events.
- Whether users understand and trust per-adapter degraded-state messaging.
- Whether a browser extension provides enough moment-of-need value to justify a first product.
- Which local storage, encryption, and account-recovery design passes Thread 07 review.
