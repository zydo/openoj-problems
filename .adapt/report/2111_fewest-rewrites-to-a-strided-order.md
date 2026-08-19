## 2111 — Minimum Operations to Make the Array K-Increasing

- New id / title / slug: 2111 / Fewest Rewrites to a Strided Order / `fewest-rewrites-to-a-strided-order`
- Old → new API: `kIncreasing` → `fewestRewrites` (go `fewestRewrites`, rust `fewest_rewrites`, ts `fewestRewrites`); parameters `arr`, `k` kept
- Core algorithm / difficulty: residue classes mod k, longest non-decreasing subsequence per class via patience + `bisect_right` / H3 (unchanged)
- Statement rewritten from spec: yes — the definitional check inside the description uses a fresh array (`[3,7,4,8,6,9]` for k = 2)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[6,3,5,2,7], k = 1 → 2` (whole array non-descending), `[2,9,4,9,6,11], k = 2 → 0` (already ordered, equal values), `[5,8,3,6,4,9], k = 3 → 1` (lone violation in one class)
  - checked against the hidden inputs so no public case repeats one
- Constraints: domain unchanged (`1..10⁵` length, values and k in `1..arr.length`), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The definitional paragraph is where paraphrase risk concentrates: the
  source walks its demo array index by index, and so does any faithful
  definition. Giving the walk a different grammatical frame ("reading back
  in twos gives …") kept overlap low.
- Source solutions use no `fewestRewrites`/`fewest_rewrites` identifiers;
  rename checked for collisions before staging (PROTOCOL step 3).
