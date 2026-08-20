## 376 — Optimize Water Distribution in a Village

- New id / title / slug: 376 / Least Cost to Supply All Sites /
  `least-cost-to-supply-all-sites`
- Old → new API: `minCostToSupplyWater` → `leastCostToSupplyAll`
  (go `leastCostToSupplyAll`, rust `least_cost_to_supply_all`,
  ts `leastCostToSupplyAll`); parameters `wells` → `sources`,
  `pipes` → `links`; `n` kept
- Core algorithm / difficulty: virtual source node + Kruskal MST /
  H3 (unchanged)
- Statement rewritten from spec: yes — village/water/wells/pipes became
  sites/supply/sources/links; site indexing (1-based, `sources[i-1]`) and
  parallel-edge allowance stated from the spec
- Examples newly constructed: yes (structure-preserving: yes — example 1
  keeps the 3-site triangle both figures draw)
  - `n=3, sources=[4,3,5], links=[[1,2,1],[1,3,2]]` → 6; `n=2` with parallel
    links `[1,2,3]`/`[1,2,1]` → 3; 4-site chain with one cheap source → 7
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: **regenerated** — both SVGs redrawn for the new example 1
  (drop icons kept as the visual language for source costs; MST figure
  shows chosen solid vs rejected dashed edges)
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) compatibility ✓ stale ✓
  overlap ✓ sandbox n/a (function kind)

### Notes

- The stale gate caught my first example reusing the source's literal
  `[2,3,1]` link values — a 3-symbol array is identifying even when the
  surrounding data differs. Link *costs* now differ, not just arrangement.
- Solution-file locals (`pipe`, `house1`, `house2`) were left alone per
  "rename only the API identifiers"; only the comment naming old
  terminology changed.
- Source hidden data contains `pipes = []` cases although the constraint
  says `1 <= pipes.length`; the constraint's numeric domain was kept
  exactly as the source states it.
