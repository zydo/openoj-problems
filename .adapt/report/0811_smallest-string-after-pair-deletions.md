## 811 — Lexicographically Smallest String After Adjacent Removals

- New id / title / slug: 811 / Smallest String After Pair Deletions / `smallest-string-after-pair-deletions`
- Old → new API: `lexicographicallySmallestString` → `smallestAfterPairDeletions` (go `smallestAfterPairDeletions`, rust `smallest_after_pair_deletions`, ts `smallestAfterPairDeletions`); parameter `s` kept
- Core algorithm / difficulty: interval "can vanish" DP + right-to-left suffix assembly comparing whole candidate strings / H4 (unchanged)
- Statement rewritten from spec: yes (deletion framing; circular-alphabet rule stated once)
- Examples newly constructed: yes (structure-preserving: n/a in statement — no example figures; the solutions figure keeps its 4-cell layout)
  - `"zac"` → `"c"` (circular pair), `"zbca"` → `""` (nested brackets, full deletion), `"dabg"` → `"dabg"` (deleting the only pair makes the string larger)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (1 solution figure) — same cells/arcs geometry; string `zbca` replaces `bcda`, arc annotations rewritten, rem table corrected for the new data (`"zb"` is not vanishing, so cell (0,1) lost its 1)
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a (function) compatibility ✓ stale ✓ overlap ✓

### Notes

- First attempt at the keep-everything example was `"dabe"`: deleting `"ab"`
  leaves `"de"`, which deletes again to `""` — the brute force caught it.
  Constructing "deletion worsens the result" needs the post-deletion remainder
  to contain no neighbour pair (`"dabg"` → `"dg"`).
- The string example values are invisible to the stale gate (it scans bracketed
  arrays only), so freshness is on the honour system for string problems.
- Expected values from a reachability brute force over all deletion sequences;
  it reproduced all source public cases first, and public inputs were checked
  against the hidden set for duplicates.
