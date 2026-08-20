## 399 — Count Number of Nice Subarrays

- New id / title / slug: 399 / Count Subarrays With K Odd Numbers / `count-subarrays-with-k-odd-numbers`
- Old → new API: `numberOfSubarrays` → `countSubarraysWithKOdds` (go `countSubarraysWithKOdds`, rust `count_subarrays_with_k_odds`, ts `countSubarraysWithKOdds`); parameters `nums`, `k` kept
- Core algorithm / difficulty: parity map to 0/1, one pass of prefix odd-count tallies, `result += counts[odds - k]` / H2 (unchanged)
- Statement rewritten from spec: yes (the "nice" label dropped; the property stated directly)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[3,8,3,3] k=2` → 3 (three odds, windows around two of them); `[10,3,10,10] k=1` → 6 (2×3 windows around a lone odd); `[5,2,4,5,2,5] k=2` → 5 (two pairings, all-three excluded)
- Constraints: domain unchanged (`1 <= len <= 50000`, `1 <= nums[i] <= 10^5`, `1 <= k <= len`), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: compatibility ✓ stale ✓ overlap ✓ verify ✓ (7/7 languages, 17/17 cases) check ✓ (per-bundle static clean)
- Sandbox: function kind, deferred to batch run

### Notes

- Title kin to `0206_count-subarrays-with-sum-k` (LC 560's adapted
  identity) — the reduction to that problem is the whole insight, so the
  names echo it.
