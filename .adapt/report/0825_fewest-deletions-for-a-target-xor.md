## 825 — Minimum Removals to Achieve Target XOR

- New id / title / slug: 825 / Fewest Deletions for a Target XOR / `fewest-deletions-for-a-target-xor`
- Old → new API: `minRemovals` → `fewestDeletions` (go `fewestDeletions`, rust `fewest_deletions`, ts `fewestDeletions`); parameters `nums`, `target` kept
- Core algorithm / difficulty: DP over reachable subset-XOR values mapped to max kept count, 14-bit value space / H3 (unchanged)
- Statement rewritten from spec: yes (removals → deletions with survivors framing)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[2,3,5] target 6` → 1 (delete one, keep 3^5), `[11,2] target 7` → -1 (all four XOR values listed), `[7,7] target 0` → 0 (equal pair cancels, keep everything)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Straightforward function bundle; the three examples were cross-checked with
  an exhaustive subset enumeration before being written up.
- The source tags say "Meet in the Middle" but the reference is a value-space
  DP (2^14 keys, not 2^20 halves); tags are kept byte-for-byte per the
  protocol, and the guide explains the DP that actually runs.
