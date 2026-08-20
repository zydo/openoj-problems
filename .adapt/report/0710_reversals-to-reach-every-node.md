## 710 — Minimum Edge Reversals So Every Node Is Reachable

- New id / title / slug: 710 / Reversals to Reach Every Node / `reversals-to-reach-every-node`
- Old → new API: `minEdgeReversals` → `minReversalsPerRoot` (go `minReversalsPerRoot`, rust `min_reversals_per_root`, ts `minReversalsPerRoot`); parameters `n`, `edges` kept
- Core algorithm / difficulty: rerooting tree DP — subtree cost at root 0, then ±1 adjustment per edge moved / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — figures dropped)
  - star `n=5 [[0,1],[2,0],[0,3],[4,0]] → [2,3,1,3,1]`, alternating path `n=4 [[0,1],[2,1],[2,3]] → [1,2,1,2]`, out-arborescence `n=6 → [0,1,2,2,3,3]` — all brute-verified (per-root count of child→parent edges)
- Constraints: domain unchanged (2 ≤ n ≤ 10⁵, n−1 edges, tree when undirected), presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped — both SVGs draw the source examples' directed tree geometry (node labels + arrow directions), which is the data itself; no structure-preserving example exists
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Two figures dropped for the geometry-encodes-data reason of ADAPT.md §Figures;
  candidates for the phase-2 redraw pass.
