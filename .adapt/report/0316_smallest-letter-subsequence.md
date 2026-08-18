## 0316 — Remove Duplicate Letters

- New id / title / slug: 316 / Smallest Letter Subsequence / `smallest-letter-subsequence`
- Old → new API: `removeDuplicateLetters` → `smallestLetterSubsequence` (go `smallestLetterSubsequence`, rust `smallest_letter_subsequence`, ts `smallestLetterSubsequence`)
- Core algorithm / difficulty: greedy monotonic stack with remaining-occurrence counts / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes)
  - `"hfdhkhfh"` reproduces the source example's exact column operations (push / pop+push / pop+push / push / push / skip / push / skip, same stack heights 1–4), so the solution figure needed only letter relabels; `"bab"` minimal pop case; `"twisted"` blocked-pop case (single-occurrence letters cannot be reordered)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (`solution-monotonic-stack.svg` — same geometry, letters c/b/a/d → h/f/d/k, footer result updated)
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) compatibility ✓ stale ✓ overlap ✓

### Notes

- The figure is a solution figure walking the source example, so the example
  was chosen to preserve the drawn operation sequence rather than merely the
  length — worth doing for every monotonic-stack figure.
- `s` is the conventional string parameter; kept.
