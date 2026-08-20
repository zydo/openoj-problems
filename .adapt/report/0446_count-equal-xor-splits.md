## 446 — Count Triplets That Can Form Two Arrays of Equal XOR

- New id / title / slug: 446 / Count Equal-XOR Splits / `count-equal-xor-splits`
- Old → new API: `countTriplets` → `countEqualXorSplits` (go `countEqualXorSplits`, rust `count_equal_xor_splits`, ts `countEqualXorSplits`); parameter `arr` kept
- Core algorithm / difficulty: prefix-xor repetition counting with two hash maps / H2 (unchanged)
- Statement rewritten from spec: yes — the (i, j, k) triplet framing is restated as "choose a stretch and a cut position inside it", a bijection onto the same count
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[5,6,3] → 2` (single zero stretch at the left edge), `[2,6,4,2,6] → 6` (three overlapping zero stretches, brute-force cross-checked), `[10,4,10,4] → 3` (whole array); no overlap with hidden cases
- Constraints: domain unchanged, presentation rewritten (`10⁸` as `10^8`)
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (adapt_gates) verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Hand-counting xor examples is error-prone: my first draft of Example 2
  claimed 8 splits where the truth is 6 (three length-3 stretches × 2 cuts);
  the brute-force cross-check over all (i, j, k) settled every explanation
  before publishing.
