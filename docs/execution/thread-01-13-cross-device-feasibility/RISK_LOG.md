# Risk Log - Thread 01

- Issue: #13
- Branch: `codex/13-cross-device-feasibility`
- Cycle: 1

| ID | Severity | Classification | Risk | Mitigation | Residual / owner |
| --- | --- | --- | --- | --- | --- |
| R01 | Critical | Evidence-supported conclusion | False prevention claim creates dangerous confidence. | Per-adapter capability labels, degraded state, bypass register, prohibited universal claim. | Open; product and legal review |
| R02 | Critical | Evidence-supported conclusion | Strong controls become partner/employer spyware. | Adult self-authorization, no secret admin, anti-coercion and safe-exit review. | Open; Thread 07 and safety expert |
| R03 | High | Open question | Apple entitlement or store policy rejects intended use. | Treat iOS as gated spike; no launch promise. | Open; platform evidence |
| R04 | High | Platform limitation | VPN/extension conflicts or removal stop protection silently. | Adapter health indicator and explicit degraded state. | Open; prototype |
| R05 | High | Evidence-supported conclusion | Logs expose intimate browsing behavior. | Content-free local schema; no raw URL paths/screenshots. | Open; Thread 07 |
| R06 | High | Evidence-supported conclusion | Overblocking blocks essential or safety access. | Allowlist, safety exception, local audit, scenario tests. | Open; prototype and safety review |
| R07 | Medium | Platform limitation | OEM/browser/version changes raise maintenance burden. | Small support matrix and adapter conformance suite. | Open; engineering estimate |
| R08 | Medium | Hypothesis | Partial coverage is too weak to justify setup. | User testing and explicit kill criterion. | Open; Phase 0 |

## Cycle 2 Additions

| ID | Severity | Classification | Risk | Mitigation | Residual / owner |
| --- | --- | --- | --- | --- | --- |
| R09 | Critical | Hypothesis | Strict Mode causes lockout during legitimate or safety-critical use. | Independent exceptional access, finite term, allowlist, and lockout stop test. | Open; safety/security specialists |
| R10 | Critical | Hypothesis | Trusted ally or managed role becomes coercive control. | No permanent veto, bounded expiry, independent recovery, visible history. | Open; coercive-control review |
| R11 | High | Platform limitation | External DNS/router/OS settings survive app uninstall. | Visible ownership, inventory export, guided teardown, residual-state disclosure. | Open; real teardown tests |
| R12 | High | Platform limitation | Browser/OS versions diverge from documentation. | Named version matrix and adapter conformance suite. | Open; platform testing |
| R13 | High | Hypothesis | Layer count creates unusable complexity and false global health. | Progressive disclosure and per-layer state; comprehension gate. | Open; user research |
| R14 | High | Open question | Store or entitlement review rejects the intended adult self-use model. | Gated spike; no product promise. | Open; Apple/Google/store evidence |
| R15 | Medium | Platform limitation | Router or SafeSearch changes affect other household members. | Ownership confirmation, exact impact preview, avoid household logging. | Open; privacy review |
| R16 | Medium | Hypothesis | Inventory export is lost, altered, or exposed. | Minimal fields, optional encryption, integrity check, recovery sheet alternatives. | Open; security/usability tests |

## Cycle 3 Additions

| ID | Severity | Classification | Risk | Mitigation | Residual / owner |
| --- | --- | --- | --- | --- | --- |
| R17 | High | Platform limitation | Store/API changes invalidate a previously documented adapter capability. | Source IDs, version fields, refresh triggers, emergency shutdown, unsupported state. | Open; external platform review and synthetic tests |
| R18 | High | Open question | Reset, replacement, alternate profile/account, or clock change leaves policy state misleading. | Treat each as a separate protocol scenario; never infer continuity. | Open; synthetic protocol |
| R19 | Medium | Repository decision | Cross-branch references drift before merge. | Reference canonical owner and contract ID, not another branch-only file path. | Open until coordinated integration |
