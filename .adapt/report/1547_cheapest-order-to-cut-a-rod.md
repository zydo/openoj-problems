## 1547 — Minimum Cost to Cut a Stick

- New id / title / slug: 1547 / Cheapest Order to Cut a Rod / `cheapest-order-to-cut-a-rod`
- Old → new API: `minCost` → `leastCost` (go `leastCost`, rust `least_cost`, ts `leastCost`); parameters `n`, `cuts` kept (conventional)
- Core algorithm / difficulty: interval DP over sorted cut positions plus the two rod ends / H4 (unchanged)
- Statement rewritten from spec: yes — a saw cutting a marked rod, cost of a pass = length of the piece cut, order free
- Examples newly constructed: yes (structure-preserving: yes for Example 1 — same `n = 7` and four cuts, so both figures keep their geometry)
  - `n = 7, cuts = [1,2,3,4] → 15` (listed order pays 22; cheapest `4, 2, 1, 3` pays 15 — the figure's walk)
  - `n = 9, cuts = [8,3,5,1,6] → 24` (five cuts spread wide; listed order pays 28)
  - `n = 10, cuts = [3,6] → 16` (two cuts; order still matters: listed order pays 17)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: **regenerated** — both source SVGs document a linear coordinate map (`44 px/unit from x=70`, `80 px/unit from x=60`), so a generator (`.localonly/wave-e-05/figs_1547.py`) re-emits both layouts for the new data; the interval-tree figure gains a fourth recursion row (the new cut set recurses one level deeper) and a taller viewBox. Renders eyeballed via qlmanage thumbnails.
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The example-1 figure needs not just the input set but an *optimal order with its per-pass rod lengths*; the DP reconstruction (`optimal_order` in `.localonly/wave-e-05/dp_1547.py`) supplies it and reproduced the source figure's order `[3, 5, 1, 4]` on the source data when validated, which is a good sanity check that the regenerator walks like the original.
- First scratch-DP draft charged adjacent (cut-free) intervals their length; validating the scratch against the source's known public expectations (16 / 22) caught it before it could poison public cases. Always cross-check a scratch oracle against a few source expected values first.
