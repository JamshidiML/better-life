# Product shape comparison

Status: Cycle 1 Draft - no production implementation approved
Issue: #25
Branch: `codex/25-mvp-product-shape`
Research cutoff: 2026-07-15

## Decision frame

| Required element | Classification | Cycle 1 answer |
| --- | --- | --- |
| User problem | Evidence-supported | Adults may need a calm, voluntary way to turn intention into a plan and one next action without surveillance or a clinical label. |
| Expected benefit | Hypothesis | A small local product can validate plan/Spiral value before expensive enforcement, cloud, AI, or social layers. |
| Supporting evidence | Evidence-supported | Threads 01, 02, 05, 06, and 07 support a cautious testable shape; no Better Life efficacy evidence exists. |
| Required data | Verified | Accountless core needs only local user-authored plan/settings and optional local outcome responses. |
| Consent | Verified | Manual use has no external share; every future adapter/service is a separate opt-in capability. |
| Safety/misuse | Verified | Clinical overclaim, shame, coercion, lockout, false protection, sensitive data, and inaccessible exit are critical. |
| Feasibility | Platform limitation | A web app can provide planning/manual support but cannot provide universal device enforcement; Chromium extension and Android VPN are separate spikes. |
| Success metric | Hypothesis | Comprehension, plan ownership, task completion, agency/usefulness, burden/shame, zero hidden external flows, and safe exit. |
| Exit strategy | Verified | Keep/remove each layer independently; stop before enforcement if manual core lacks value. |

## Options

| Shape | Classification | User value | Data/platform cost | Key risk | Cycle 1 decision |
| --- | --- | --- | --- | --- | --- |
| Paper/clickable research prototype | Hypothesis | Tests goal, plan, Spiral, education, and language quickly. | No account or monitoring; researcher protocol only. | Simulated use may not predict real moments. | **Current Phase 0 shape.** |
| Accountless local web app | Hypothesis | Immediate plan/manual Spiral on desktop/mobile browser; easy review. | Local browser storage; no universal interception; backup/device loss. | Feels too weak or browser data leaks/clears. | **First digital core candidate after research gates.** |
| Chromium extension + local dashboard | Platform limitation / hypothesis | Adds visible user-configured browser friction near selected domains. | Extension permissions/rules; incognito and other browser/device bypass. | False confidence, overblocking, permission concern. | Separate technical/product spike after core value and privacy gates. |
| Native Android app/VPN | Platform limitation / hypothesis | Stronger device-level network control and moment-of-need access. | VPN/service permissions, app-store policy, battery/network impact. | High trust and platform burden before need is known. | Second enforcement spike, not first MVP baseline. |
| Native iOS app | Platform limitation / hypothesis | Native UX and Screen Time/Network Extension possibilities. | Entitlement/App Review/API limits. | Schedule/approval dependency and incomplete coverage. | Parallel feasibility track, not first MVP baseline. |
| Desktop native/network agent | Platform limitation | Broader Windows/macOS control potential. | Privileged software, signing, security/maintenance. | Large attack/maintenance surface. | Defer. |
| Cloud multi-device suite | Open question | Sync and coordinated policy. | Account, sensitive sync, recovery, processors, support. | Violates simplicity/local-first before value proof. | Defer. |
| AI coach | Open question | Conversational reflection. | External model data and clinical/rumination risk. | Therapy impersonation/hallucination/privacy. | Exclude. Static/rules first. |
| Ally/peer network | Open question | Human support. | Sharing, delivery, moderation, abuse, cost. | Coercion and Thread 04 critical risks. | Exclude from MVP. |

## Recommended product ladder

| Step | Classification | Shape | Advancement evidence |
| ---: | --- | --- | --- |
| 0 | Verified | Interview scripts, paper/clickable plan and Spiral; no production code. | Phase 0 safety and problem evidence. |
| 1 | Hypothesis | Accountless local web prototype: one plan, manual Spiral, static education, controls. | User value without shame/burden; clinical/privacy/accessibility review. |
| 2 | Platform limitation | Synthetic Chromium extension spike, not real behavior monitoring. | Thread 01 pass/fail plus permission/false-block UX. |
| 3 | Hypothesis | Optional browser adapter connected locally to core. | Incremental value over manual core and Thread 07 approval. |
| 4 | Platform limitation | Android VPN and iOS entitlement feasibility in parallel. | Platform proof and validated cross-device need. |
| 5 | Open question | Account/sync/ally/AI/social services. | Separate evidence, privacy, safety, business, and exit proof per layer. |

## Cycle 1 recommendation

- **Hypothesis:** The lowest-regret first product is an accountless local web core, researched first as a clickable prototype, with a Chromium extension kept as a separate gated adapter.
- **Verified:** Do not describe the core as protection across devices, relapse prevention, therapy, AI coaching, or anonymous support.
- **Open question:** Users may reject a manual-only core as insufficient; that result should stop or redirect the project, not trigger premature surveillance.
