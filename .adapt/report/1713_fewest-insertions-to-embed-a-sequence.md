## 1713 — Minimum Operations to Make a Subsequence

- New id / title / slug: 1713 / Fewest Insertions to Embed a Sequence / `fewest-insertions-to-embed-a-sequence`
- Old → new API: `minOperations` → `fewestInsertions` (go `fewestInsertions`, rust `fewest_insertions`, ts `fewestInsertions`); parameters `target`, `arr` kept
- Core algorithm / difficulty: map `arr` onto `target` positions, longest strictly increasing subsequence by patience sorting, answer `len(target) - LIS` / H4 (unchanged)
- Statement rewritten from spec: yes (insertion mechanics re-explained from the operation itself)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[3,7,1,9]` into `[7,1,1,4,9]` → 1 (one front insertion finishes it)
  - `[4,8,15]` into `[4,1,8,15]` → 0 (already embedded)
  - `[5,2,8]` into `[2,2,8]` → 1 (duplicate in `arr`; only one 2 is usable — the strictness shape)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (per-bundle static replica) verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Title phrasing deliberately echoes 1312's adapted "Fewest Insertions to
  Reach a Palindrome" (both are insertion-count problems) while the head
  phrase differs; they are not family siblings, only voice-mates.
- Example 3 exists because `bisect_left` strictness only matters when `arr`
  repeats a `target` value — the explanation says why in one sentence.
