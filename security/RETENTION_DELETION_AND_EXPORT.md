# Retention, deletion, export, and recovery

Status: Cycle 1 Draft - durations are design hypotheses, not approved legal schedules
Issue: #22
Branch: `codex/22-privacy-architecture`

## Rules

1. **Verified:** Every data element has an owner, purpose, class, authoritative store, retention trigger, deletion method, export behavior, backup behavior, and legal-exception review.
2. **Verified:** “Keep forever,” “until no longer needed,” and silent backup retention are not acceptable schedules.
3. **Verified:** Deleting an account, uninstalling a device, withdrawing consent, ending a match, and deleting an individual item are different events and must be explained.
4. **Verified:** Export and recovery are high-risk disclosure paths, not convenience afterthoughts.

## Retention design targets

| Data | Class | Classification | Cycle 1 target | Trigger and caveat |
| --- | --- | --- | --- | --- |
| Local plan/settings | D3 | Hypothesis | Until user deletes, resets, or uninstalls; subject to backup behavior | App must expose item/all deletion; OS backup behavior verified. |
| Current Spiral session | D3 | Verified | Memory/session only; minimal crash recovery | Expire on close/timeout; no sensitive lock-screen restoration. |
| Optional local history | D3 | Hypothesis | Off by default; user-selected short window | User can clear anytime; no hidden aggregate score. |
| Consent receipt | D2 | Open question | Purpose lifetime plus limited accountability period | Legal schedule required; no intimate payload. |
| Account/authentication | D2 | Open question | Active account plus short closure/security window | Accountless first shape avoids it. |
| Security event | D2 | Hypothesis | 30-day design target unless threat/legal evidence justifies another period | Minimized identifier; periodic necessity review. |
| Operational error | D1 | Hypothesis | 14-day design target | Allowlisted fields only; aggregate longer only after re-identification review. |
| Sync content | D3 | Open question | While sync active; deletion propagation target must be tested | Backups/other devices/key recovery disclosed. |
| Ally delivery metadata | D2/D3 | Hypothesis | Short delivery/troubleshooting window | Message content avoided after delivery where feasible. |
| Peer message | D3 | Verified | Not applicable: peer feature excluded from MVP | Future ephemeral target; reports follow D5. |
| Incident/report evidence | D5 | Open question | Severity-specific schedule approved by legal/safety owner | Isolated, access audited, deletion/right exceptions explained. |
| Research consent/contact | D2 | Verified | Per `phase0/RESEARCH_PROTOCOL.md` and approved study schedule | Raw notes remain outside repo/external AI. |

## Deletion semantics

| Scope | Classification | Required behavior |
| --- | --- | --- |
| Delete item | Verified | Remove from active local/sync stores and derived user view; issue tombstone only where needed for propagation. |
| Reset plan/history | Verified | Clear chosen D3 data without closing account or losing safety controls. |
| Withdraw optional feature | Verified | Stop future processing immediately; explain retained data and offer deletion. |
| Delete account | Verified | Re-authenticate safely, disable sessions/shares, queue all in-scope stores/processors, show receipt and exceptions. |
| Delete incident/report | Open question | Apply data-subject rights with safety/legal balancing and review, not an automatic blanket promise. |
| Backup deletion | Platform limitation | Remove from rotation under approved schedule; prevent routine restoration into active service after deletion. |
| Crypto-erasure | Open question | Key destruction may support deletion only if copies, metadata, backups, and key design are verified; it is not magic compliance. |

## Export model

| Classification | Requirement |
| --- | --- |
| Verified | Export is user-initiated and re-authenticated, with a sensitivity warning and destination choice. |
| Verified | Human-readable JSON/CSV/text plus a manifest states field, class, source, time, and omitted categories; exact format needs accessibility/user testing. |
| Verified | Export excludes secrets, password material, internal abuse signals that would defeat security, and third-party data not lawfully disclosable; omissions are explained. |
| Verified | Offer encrypted archive or direct local save; do not email an unencrypted intimate export. |
| Verified | The product states when the copy leaves Better Life control and does not keep a hidden export staging file. |

## Recovery model and tradeoffs

| Option | Classification | Benefit | Risk / Cycle 1 decision |
| --- | --- | --- | --- |
| No account/no recovery | Hypothesis | Minimal server exposure | Device loss loses data; default first shape. |
| OS backup | Platform limitation | Familiar recovery | Could expose/sync D3; must be disabled or verified protected. |
| User encrypted export | Hypothesis | Explicit portable backup | Password loss and unsafe storage; test before support. |
| Provider recovery key | Verified | Easier recovery | Provider access/attack target; reject for D3 unless exceptional reviewed need. |
| End-to-end sync recovery | Open question | Multi-device convenience | Complex key escrow/recovery and metadata; not approved. |
| Ally recovery | Verified | None sufficient | Coercion/identity leak; prohibited. |

## Verification plan

1. **Verified:** Automated inventory tests enumerate every store, queue, cache, log, backup, processor, and derived table for a synthetic account.
2. **Verified:** Deletion tests verify active stores, restored backups, offline devices, retries, exports, and processor callbacks.
3. **Verified:** Export tests verify completeness, third-party separation, encryption, accessibility, and no server staging residue.
4. **Open question:** Legal counsel approves schedules, rights handling, incident exceptions, and controller/processor responsibilities.
5. **Open question:** Security review approves re-authentication, key management, backup, recovery, and deletion evidence.

## Stop conditions

- **Verified:** Do not launch a feature whose stores/processors cannot be inventoried or whose deletion cannot be tested end to end.
- **Verified:** Do not offer recovery that gives an ally, support agent, or provider unnecessary access to D3/D4.
- **Verified:** Do not promise immediate total deletion while backups or legal/safety exceptions remain; state the exact process instead.
