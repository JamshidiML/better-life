# First Platform Recommendation

- Status: Cycle 1 draft
- Issue: #13
- Research date: 2026-07-15

## Cycle 2 Recommendation

- **Repository decision:** The accountless local web surface is Stage A, a Minimum Viable Experiment (MVE), not the Better Life MVP and not an enforcement product.
- **Hypothesis:** Stage B should investigate adapters independently. Chromium/Edge, Firefox, Safari, Android `VpnService`, iOS Family Controls or Network Extension, and guided DNS/router setup each have separate pass, fail, and stop gates.
- **Founder decision:** Better Life should coordinate one visible user-authored policy across multiple transparent layers.
- **Platform limitation:** A common policy does not create common enforcement. Synchronized operation requires an explicitly approved sync/export mechanism; a local schema is only portable, not automatically synchronized.
- **Open question:** Stage C selects the actual MVP only after Stage A user evidence and one or more Stage B real-device results. No first production platform is selected in Cycle 2.

## Why This Ordering

| Criterion | Classification | Assessment |
| --- | --- | --- |
| Fastest honest capability | Evidence-supported conclusion | Chromium DNR directly supports block and redirect rules with official documentation and a narrow permission model. |
| Data minimization | Evidence-supported conclusion | A deterministic domain-rule spike can operate without screenshots, page bodies, or raw search history. |
| Prototype cost | Hypothesis | One browser, synthetic fixtures, and local storage are cheaper to validate than a coordinated mobile/desktop/network suite. |
| User value | Open question | Partial browser coverage may be too weak or misleading; Phase 0 interviews must test this before product commitment. |
| Cross-device learning | Hypothesis | A shared policy representation plus two adapters will expose synchronization and degraded-state problems early. |
| Safety | Evidence-supported conclusion | Browser-first avoids managed-device enrollment and high-power accessibility monitoring in the first experiment. |

## V1 Manual or Guided Work

- **Repository decision:** Existing Screen Time, Android Digital Wellbeing, browser, DNS, and router setup should be explained as guidance with platform-specific limitations.
- **Hypothesis:** High-risk windows, reasons for change, replacement action, and a help request can remain user-entered and local.
- **Repository decision:** No automated diagnosis, content classifier, continuous location, screenshot monitoring, or open peer matching.

## What Must Not Be Promised

- Universal cross-device coverage.
- Protection that cannot be bypassed.
- Detection of every app-internal, encrypted, offline, or generated item.
- iOS enforcement before entitlement and review are confirmed.
- Android persistence equivalent to device-owner mode in an ordinary install.
- Crisis prevention, treatment, or clinical effectiveness.

## Commit Gates

1. **Technical gate:** deterministic browser fixture passes and every degraded state is visible.
2. **Privacy gate:** Thread 07 approves local event schema, consent, deletion, and optional sync boundaries.
3. **Evidence gate:** Thread 02 approves only the wording of the intervention mechanism, not a treatment claim.
4. **User gate:** at least the Phase 0 interview threshold tests whether partial coverage is understandable and useful.
5. **Platform gate:** mobile recommendation is updated after entitlement/policy and real-device results.

## Exit Strategy

- **Design requirement:** If users interpret partial coverage as a guarantee, remove enforcement language and retain only transparent planning/guidance.
- **Hypothesis:** If extension disable/removal makes the wedge valueless, move the prototype focus to Android or an iOS-approved adapter rather than adding covert tamper monitoring.
- **Design requirement:** Delete prototype data and revoke permissions at the end of the study; retain only de-identified aggregate findings.
