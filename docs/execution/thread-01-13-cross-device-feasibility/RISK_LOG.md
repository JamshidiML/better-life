# Risk Log - Thread 01

- Issue: #13
- Branch: `codex/13-cross-device-feasibility`
- Cycle: 1

| ID | Severity | Classification | Risk | Mitigation | Residual / owner |
| --- | --- | --- | --- | --- | --- |
| R01 | Critical | Verified risk | False prevention claim creates dangerous confidence. | Per-adapter capability labels, degraded state, bypass register, prohibited universal claim. | Open; product and legal review |
| R02 | Critical | Verified risk | Strong controls become partner/employer spyware. | Adult self-authorization, no secret admin, anti-coercion and safe-exit review. | Open; Thread 07 and safety expert |
| R03 | High | Open question | Apple entitlement or store policy rejects intended use. | Treat iOS as gated spike; no launch promise. | Open; platform evidence |
| R04 | High | Platform limitation | VPN/extension conflicts or removal stop protection silently. | Adapter health indicator and explicit degraded state. | Open; prototype |
| R05 | High | Verified risk | Logs expose intimate browsing behavior. | Content-free local schema; no raw URL paths/screenshots. | Open; Thread 07 |
| R06 | High | Verified risk | Overblocking blocks essential or safety access. | Allowlist, safety exception, local audit, scenario tests. | Open; prototype and safety review |
| R07 | Medium | Platform limitation | OEM/browser/version changes raise maintenance burden. | Small support matrix and adapter conformance suite. | Open; engineering estimate |
| R08 | Medium | Hypothesis | Partial coverage is too weak to justify setup. | User testing and explicit kill criterion. | Open; Phase 0 |
