## 718 — Minimum Number of Coins to be Added

- New id / title / slug: 718 / Fewest Coins to Cover Every Sum / `fewest-coins-to-cover-every-sum`
- Old → new API: `minimumAddedCoins` → `minCoinsToCoverSums` (go `minCoinsToCoverSums`, rust `min_coins_to_cover_sums`, ts `minCoinsToCoverSums`); parameters `coins`, `target` kept
- Core algorithm / difficulty: greedy reach extension — absorb coins while `c <= reach+1`, else add `reach+1` / H2 (unchanged)
- Statement rewritten from spec: yes — the coin framing is genuine to the computation and stays; "obtainable via subsequence" restated as subset sums
- Examples newly constructed: yes (structure-preserving: n/a — figure dropped)
  - `[1,3,9], 15 → 2` (add 2 and 7), `[1,2,6,12], 16 → 1` (single gap at 4), `[2,3], 7 → 2` (no 1-coin, forced additions) — all brute-verified by exhaustive search over added-coin multisets with subset-sum coverage DP
- Constraints: domain unchanged (1 ≤ target ≤ 10⁵, 1 ≤ coins[i] ≤ target), presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped — the single SVG (`solution-reach-extension.svg`) walks the source example's absorb/add ladder step by step; no renderer exists for this family (`container-lines`, `kadane-walk` only)
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- macOS has no `timeout` command — use the Bash tool's own `timeout_ms`
  for brute-force scripts instead of wrapping with `timeout`.
