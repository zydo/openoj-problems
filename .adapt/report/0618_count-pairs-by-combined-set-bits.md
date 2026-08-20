## 618 — Number of Excellent Pairs

- New id / title / slug: 618 / Count Pairs by Combined Set Bits / `count-pairs-by-combined-set-bits`
- Old → new API: `countExcellentPairs` → `countSetBitPairs` (go `countSetBitPairs`, rust `count_set_bit_pairs`, ts `countSetBitPairs`)
- Core algorithm / difficulty: identity popcount(a|b)+popcount(a&b)=popcount(a)+popcount(b), bucket distinct values by bit count, ordered bucket pairs / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[2,3,5,3,2] k 3 → 8` (duplicates deduped), `[6,9,4] k 5 → 0`, `[7,8,12] k 4 → 6` (shows the identity on one pair)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
