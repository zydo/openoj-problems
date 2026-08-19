## 3149 — Find the Minimum Cost Array Permutation

- New id / title / slug: 3149 / Minimum-Cost Cyclic Ordering / `minimum-cost-cyclic-ordering`
- Old → new API: `findPermutation` → `minCostOrder` (go `minCostOrder`, rust `min_cost_order`, ts `minCostOrder`); parameter `nums` kept
- Core algorithm / difficulty: bitmask DP f[mask][last] over TSP-shaped cyclic sum, greedy lex-smallest reconstruction / H4 (unchanged)
- Statement rewritten from spec: yes (cost stated as a cyclic comparison of each entry against `nums[succ]`; score/perm renamed cost/ordering in prose)
- Examples newly constructed: yes (structure-preserving: **no** — see notes)
  - `[3,1,0,2]` → `[0,1,2,3]` (natural ordering optimal, cost 2), `[2,3,0,1]` → `[0,2,1,3]` (middle trade, cost 2), `[4,0,3,1,2]` → `[0,1,3,2,4]` (single trade reaches cost 0, n=5)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: **regenerated** — both example figures redrawn at n=4 from the original's column layout (pitch 100, boxes 60×34); term arcs re-routed for the new perms; rendered and eyeballed (no clipping/overlap)
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- The stale gate made n=3 examples impossible: the answer always starts with 0, so for n=3 the only possible outputs are `[0,1,2]` and `[0,2,1]` — both are the source's example literals. The figure-drawn examples therefore moved to n=4, which changed the drawn structure (3 columns → 4), so the figures were regenerated rather than label-edited: same box/arrow vocabulary, one extra column, viewBox widened 470→570, captions shortened to fit.
- Example 2's original figure used a bespoke over-the-top arrow route that does not generalize; both regenerated figures use the simple arc + left-wrap pattern of the original example 1.
- qlmanage renders SVGs for eyeballing; captions wider than the viewBox clip silently, so caption length was checked by pixel-scanning the rendered edges (`.localonly/wave-f-05/render/`).
