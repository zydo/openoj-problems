## 460 — Check If Array Pairs Are Divisible by k

- New id / title / slug: 460 / Pair Sums Divisible by k / `pair-sums-divisible-by-k`
- Old → new API: `canArrange` → `canPairUp` (go `canPairUp`, rust `can_pair_up`, ts `canPairUp`); parameter `arr` → `nums`; `k` kept
- Core algorithm / difficulty: remainder-class frequency matching, self-pairing classes need even counts / H2 (unchanged)
- Statement rewritten from spec: yes — split-into-pairs phrased as a disjoint pairing requirement
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[3,6,9,4,7,1] k=5 → true`, `[-2,2,-5,5] k=3 → true` (negative values and sums), `[2,4,6,8] k=6 → false` (odd zero-class) — cross-checked by pair-search backtracking
- Constraints: domain unchanged (n even ≤ 10⁵, |nums[i]| ≤ 10⁹, 1 ≤ k ≤ 10⁵), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Renaming `arr` → `nums` follows ADAPT's "conventional identifiers" rule;
  verified `nums` was unused as a local in every source solution first.
