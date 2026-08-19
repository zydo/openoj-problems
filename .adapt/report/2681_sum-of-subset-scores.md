## 2681 — Power of Heroes

- New id / title / slug: 2681 / Sum of Subset Scores / `sum-of-subset-scores`
- Old → new API: `sumOfPower` → `sumOfSubsetScores` (go `sumOfSubsetScores`, rust `sum_of_subset_scores`, ts `sumOfSubsetScores`); parameter `nums` kept
- Core algorithm / difficulty: sorted sweep, running variant accumulator s ← 2s + x, contribution x²(s + x), mod 10⁹+7 / H4 (unchanged)
- Statement rewritten from spec: yes — hero scenario dropped; "power of a group" → "score of a subset" = largest² × smallest
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[3,1,2] → 76`, `[5,5] → 375` (duplicates at distinct positions), `[2,6,4] → 608` (also walked through in solutions.md)
- Constraints: domain unchanged (1 ≤ n ≤ 10⁵, 1 ≤ values ≤ 10⁹), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The mod is part of the judged semantics, so it stays in the statement
  verbatim as a numeric fact.
