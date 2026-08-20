## 164 — Partition Equal Subset Sum

- New id / title / slug: 164 / Split Into Equal-Sum Halves / `split-into-equal-sum-halves`
- Old → new API: `canPartition` → `hasEqualSumSplit` (go `hasEqualSumSplit`, rust `has_equal_sum_split`, ts `hasEqualSumSplit`); parameter `nums` kept
- Core algorithm / difficulty: bitset 0/1 knapsack reachability to `total / 2` / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[3,1,7,3,2]` → true, `[4,4,9]` → false (odd total), `[2,2,2,12]` → false (even total, parity bars the half)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The three false-shapes are deliberately different reasons to fail: odd total
  vs. unreachable half — the second is the interesting one and got its own
  example.
- solutions.md walks the bitset evolution on the new true example
  (`{0}` → `{0,3}` → `{0,1,3,4}` → bit 8 set by the 7) and closes with the
  even-sums-only parity argument on the new false example.
