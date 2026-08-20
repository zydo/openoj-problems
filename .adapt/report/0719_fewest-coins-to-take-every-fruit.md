## 719 — Minimum Number of Coins for Fruits II

- New id / title / slug: 719 / Fewest Coins to Take Every Fruit / `fewest-coins-to-take-every-fruit`
- Old → new API: `minimumCoins` → `minCoinsForAllFruits` (go `minCoinsForAllFruits`, rust `min_coins_for_all_fruits`, ts `minCoinsForAllFruits`); parameter `prices` kept
- Core algorithm / difficulty: dp over last purchase l ∈ [⌈i/2⌉, i], window min via monotonic deque / H4 (unchanged)
- Statement rewritten from spec: yes — the "II" is dropped (its twin 2944 is not in this repo, so no sibling-title constraint), the offer rule stated directly, re-arming on a free fruit kept explicit
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[2,3,1,4] → 3` (purchases {1,3}), `[5,1,9,9] → 6` (buying free fruit 2 to re-arm — the rule's whole point), `[1]x8 → 3` (chained doubling offers {1,2,4}) — all brute-verified by enumerating purchase subsets with coverage check
- Constraints: domain unchanged (1 ≤ n ≤ 10⁵, 1 ≤ prices[i] ≤ 10⁵), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- First example draft had all three cases resolving to the same purchase
  pattern {1,3}; the brute that also prints an optimal purchase set caught
  it, and E2/E3 were redesigned to distinct shapes ({1,2} re-arm,
  {1,2,4} chain).
