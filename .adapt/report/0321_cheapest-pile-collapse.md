## 321 — Minimum Cost to Merge Stones

- New id / title / slug: 321 / Cheapest Pile Collapse / `cheapest-pile-collapse`
- Old → new API: `mergeStones` → `cheapestPileCollapse` (go `cheapestPileCollapse`, rust `cheapest_pile_collapse`, ts `cheapestPileCollapse`); parameter `stones` → `piles`, `k` kept
- Core algorithm / difficulty: interval DP over stretches with a pile-count dimension / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[6,2,4,3]` k=2 → 30 (pair-merge order matters), `[2,6,1,3]` k=3 → -1 (count never reaches one), `[4,1,3,2,5]` k=3 → 21
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (whole-tree static, see note) verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- No figure in the source; the walkthrough arrays in the explanations were
  checked against the source's stale literals (`[5,4,1]`, `[5,1,2]`, `[3,8,6]`)
  before writing.
- Kept the source's `method == entrypoints.go == entrypoints.typescript`
  equality; only rust splits to snake case.
- The `-1` example explains the divisibility obstruction in prose, which Hint 1
  then formalizes.
