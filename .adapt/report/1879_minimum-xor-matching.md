## 1879 — Minimum XOR Sum of Two Arrays

- New id / title / slug: 1879 / Minimum XOR Matching / `minimum-xor-matching`
- Old → new API: `minimumXORSum` → `minXORMatching` (go `minXORMatching`, rust `min_xor_matching`, ts `minXORMatching`); parameters `nums1`, `nums2` kept (conventional)
- Core algorithm / difficulty: assignment problem by bitmask DP, `dp[mask]` over subsets of `nums2`, lowbit transitions / H4 (unchanged)
- Statement rewritten from spec: yes — "rearrange nums2" reframed as choosing a perfect matching of least XOR cost; the XOR-of-arrays cost is defined on its own (the `[1,2,3]`/`[3,2,1]` illustration is generic arithmetic, kept as a worked sum in the description)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[3,6]/[5,4] → 8`, `[2,0,7]/[1,6,3] → 3`, `[4,9,2]/[9,2,4] → 0` (equal values can all meet)
- Constraints: domain unchanged (n ≤ 14, values ≤ 10⁷), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Public-case script cross-checks the DP against a brute-force
  `permutations` minimum — cheap at n ≤ 7 and catches DP slips.
- Session restart happened between verify and report; all gates were
  re-run green before this report was written.
