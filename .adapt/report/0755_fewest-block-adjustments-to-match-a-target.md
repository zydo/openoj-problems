## 755 — Minimum Operations to Make Array Equal to Target

- New id / title / slug: 755 / Fewest Block Adjustments to Match a Target / `fewest-block-adjustments-to-match-a-target`
- Old → new API: `minimumOperations` → `fewestAdjustments` (go `fewestAdjustments`, rust `fewest_adjustments`, ts `fewestAdjustments`); parameters `nums`, `target` kept
- Core algorithm / difficulty: sum of positive rises of the padded difference array (0, d0..dn-1, 0); return type is 64-bit and stays so / H3 (unchanged)
- Statement rewritten from spec: yes (subarray ±1 reframed as raising/lowering a contiguous block)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[2,2,2]→[5,5,5]` → 3 (uniform gap, one bulk block repeated), `[4,2,6,3]→[2,5,4,3]` → 7 (shared trim then a local raise), `[1,2,1,2]→[2,1,2,1]` → 4 (alternating, no block of length > 1 helps)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (static tier full-tree run — bundle absent from failure list) verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The source hints name "divide and conquer" while the reference is the
  difference-array sweep; the rewritten hints follow the miss-array/skyline
  path that actually leads to the shipped solution, per ADAPT ("rewrite from
  the algorithmic insight").
