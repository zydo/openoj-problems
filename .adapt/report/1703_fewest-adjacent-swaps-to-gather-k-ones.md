## 1703 — Minimum Adjacent Swaps for K Consecutive Ones

- New id / title / slug: 1703 / Fewest Adjacent Swaps to Gather K Ones / `fewest-adjacent-swaps-to-gather-k-ones`
- Old → new API: `minMoves` → `fewestAdjacentSwaps` (go `fewestAdjacentSwaps`, rust `fewest_adjacent_swaps`, ts `fewestAdjacentSwaps`); parameters `nums`, `k` kept
- Core algorithm / difficulty: positions of ones, `q[i] = pos[i] − i` compression, sliding window priced by L1-to-median via prefix sums / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[1,0,1,0,0,1], k=2` → 1, `[1,0,0,0,1,0,0,1], k=3` → 5 (gather onto the middle one: 3 + 2; reused in the guide), `[1,1,1,0,1], k=3` → 0
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Family naming held together with the bank's existing gather-ones problems:
  1151 *Fewest Swaps to Gather the Ones* (`fewestSwapsToGatherOnes`), 3086
  *Cheapest Gathering of K Ones* (`cheapestGathering`), 2193
  *Fewest Adjacent Swaps to a Palindrome* (`fewestSwapsToPalindrome`). The new
  title/method add exactly the two facts that distinguish 1703: adjacency and
  the count `k`. `fewestSwaps` itself is taken by three bundles, hence
  `fewestAdjacentSwaps`.
- Binary-array examples are exempt from the stale literal gate (two-symbol
  alphabet), so example choice was driven by shape, not literal collisions.
