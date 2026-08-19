## 2448 — Minimum Cost to Make Array Equal

- New id / title / slug: 2448 / Cheapest Common Level / `cheapest-common-level`
- Old → new API: `minCost` → `cheapestCommonLevel` (go `cheapestCommonLevel`, rust `cheapest_common_level`, ts `cheapestCommonLevel`); parameters `nums`, `cost` kept (conventional); vocabulary cost → bill, target → shared value
- Core algorithm / difficulty: weighted median — sort (nums, cost) pairs, walk until cumulative price reaches ceil(total/2), evaluate there / H3 (unchanged)
- Statement rewritten from spec: yes — operation framed as ±1 steps billed per element at its own price
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[1,4,6,2],[2,3,1,10] → 12` (heavy price anchors the shared value 2; walked step by step), `[6,6,6],[9,2,7] → 0` (already level), `[9],[3] → 0` (lone element)
- Constraints: domain unchanged (n ≤ 10⁵, values/prices ≤ 10⁶, total ≤ 2⁵³−1), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- A third example (single element) was added beyond the source's two — the
  lone-element shape deserves a public case of its own and the source only
  covered it in hidden data.
