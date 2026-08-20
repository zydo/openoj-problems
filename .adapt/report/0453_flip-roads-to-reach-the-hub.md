## 453 — Reorder Routes to Make All Paths Lead to the City Zero

- New id / title / slug: 453 / Flip Roads to Reach the Hub / `flip-roads-to-reach-the-hub`
- Old → new API: `minReorder` → `minFlips` (go `minFlips`, rust `min_flips`, ts `minFlips`); parameter `connections` → `roads` (`n` kept)
- Core algorithm / difficulty: root the tree at 0 and count original edges running away from the root / H2 (unchanged)
- Statement rewritten from spec: yes — "cities/capital/ministry" framing dropped for towns and a regional hub
- Examples newly constructed: yes (structure-preserving: n/a — geometry figures, regenerated)
  - `n=6 [[0,2],[3,0],[1,3],[3,4],[5,2]] → 2` (mixed), `n=7 [[2,0],[2,1],[3,2],[3,4],[4,5],[3,6]] → 4` (deep, mostly wrong-way), `n=4 [[1,0],[2,1],[3,2]] → 0` (chain already draining) — all cross-checked against a 2^(n-1) flip-subset brute force
- Constraints: domain unchanged (2 ≤ n ≤ 5·10⁴, n-1 roads, u ≠ v, tree), presentation rewritten
- Skeletons regenerated: all 7
- Figures: regenerated — the three SVGs draw the tree topology, so label edits cannot carry new data; the layout rule (circles r=17, segments trimmed 22px at each end, 8×8 cross at each flip-road midpoint) was read off the originals and re-emitted for the new trees in `.localonly/e04/fig_1466.py`; renders eyeballed
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The tree family has no renderer in `adapt_figures.py`; recovering the
  trim arithmetic from the source coordinates took minutes and produced
  faithful figures, so regeneration beat dropping here.
- The compatibility gate's per-language rename covers the Go/TS entrypoint
  and the Rust snake_case independently, so a camel/snake split is safe.
