## 70 — House Robber IV

- New id / title / slug: 70 / Non-Adjacent Loot Under a Cap / `non-adjacent-loot-under-a-cap`
- Old → new API: `minCapability` → `minNonAdjacentLootCap` (go `minNonAdjacentLootCap`, rust `min_non_adjacent_loot_cap`, ts `minNonAdjacentLootCap`); parameters `nums`, `k` kept (conventional)
- Core algorithm / difficulty: binary search on the cap over the value range, greedy left-to-right sweep as the feasibility check / H3 (unchanged)
- Statement rewritten from spec: yes — robber scenario dropped; framed in the `house-robber` family vocabulary (positions holding values, neighbours, choosing), with the returned quantity renamed **capability → cap** ("the largest value a selection contains")
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[4,7,2,9,6], k=2 → 4` (cap must be a value), `[5,1,4,2,8,3], k=3 → 3` (sweep illustration), `[9,12,7], k=1 → 7` (quota of one)
- Constraints: domain unchanged (1–10⁵ values, values 1–10⁹, k ≤ (n+1)/2), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Family: `house-robber` — part I `0068_maximum-non-adjacent-loot`, part III `0069_non-adjacent-loot-in-a-tree` (both on disk), this is part IV. Part II `0213_house-robber-ii` is still unadapted
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- No method/entrypoint token collision here (`minCapability` vs
  `min_capability`), so the stock gate ran clean.
- Solution comments said "take every house…skip its neighbor" and
  `"k non-adjacent houses all <= cap"`; rewritten to positions/neighbour to
  match the scenario-free statement.
