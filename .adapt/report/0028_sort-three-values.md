## 28 — Sort Colors

- New id / title / slug: 28 / Sort Three Values / `sort-three-values`
- Old → new API: `sortColors` → `sortThreeValues` (go `sortThreeValues`, rust `sort_three_values`, ts `sortThreeValues`); parameter `nums` kept
- Core algorithm / difficulty: two-pass counting sort over a three-value alphabet / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[1,0,2,1,0,0,2]`, `[2,2,1]` (a value absent), `[1]` (single element)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) compatibility ✓ stale ✓ overlap ✓

### Notes

- The stale gate rejects any example whose *output* is `[0,1,2]` — the
  source's example 2 prints exactly that, and on a three-value sort the
  sorted permutation of `{0,1,2}` is forced. Every future bundle in this
  family must dodge `[0,1,2]` as a printed literal.
- Dropped the source's parenthetical about LeetCode's in-place/no-return
  convention; this bank's contract (sort and return) is stated directly.
