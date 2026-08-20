## 506 — Count Pairs With XOR in a Range

- New id / title / slug: 506 / Count Pairs Within an XOR Band / `count-pairs-within-an-xor-band`
- Old → new API: `countPairs` → `countXorBandPairs` (go `countXorBandPairs`, rust `count_xor_band_pairs`, ts `countXorBandPairs`); parameters `nums`, `low`, `high` kept (conventional)
- Core algorithm / difficulty: 16-bit binary trie with subtree counts; band = pairs_le(high) − pairs_le(low−1) / H3 (unchanged)
- Statement rewritten from spec: yes — "nice pair" dropped for a plain band predicate; XOR spelled out as an operation on the two values
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[5,2,10,8], 3..12 → 3` (half the pairs inside), `[7,15], 8..8 → 1` (width-zero band), `[4,4,11,11], 5..15 → 4` (equal values XOR to 0 below the band; mixed pairs all hit 7)
- Constraints: domain unchanged, presentation rewritten (`2 * 10^4` → `2 * 10⁴`)
- Skeletons regenerated: all 7 (cpp, go, java, js, py, rust, ts)
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Expected values for public cases were computed by the ported reference and
  cross-checked against an O(n²) brute force on 300 random inputs before
  use — worth doing whenever the reference is a nontrivial data-structure
  port rather than a formula.
