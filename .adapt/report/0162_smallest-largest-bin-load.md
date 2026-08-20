## 162 — Minimized Maximum of Products Distributed to Any Store

- New id / title / slug: 162 / Smallest Largest Bin Load / `smallest-largest-bin-load`
- Old → new API: `minimizedMaximum` → `smallestLargestBinLoad` (go `smallestLargestBinLoad`, rust `smallest_largest_bin_load`, ts `smallestLargestBinLoad`); parameter `quantities` → `piles`; `n` kept (conventional)
- Core algorithm / difficulty: binary-search the smallest feasible load cap; per-cap cost `sum ceil(q/x)` over piles compared with `n` / H3 (unchanged)
- Statement rewritten from spec: yes — retail stores and product types recast as **bins** and **piles** (items, one pile per bin, empty bins allowed)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `n=5, [9,7] → 4` (cap arithmetic shown both ways), `n=7, [6,6,6] → 3` (spare bin stays empty), `n=1, [5000] → 5000` (single-bin forced)
- Constraints: domain unchanged (1 ≤ m ≤ n ≤ 10⁵, piles 1–10⁵), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Family: follows the `smallest-largest-*` title branch (`0161_smallest-largest-split-sum`, `0163_smallest-largest-group-sum`); the one-pile-per-bin rule keeps it distinct from those
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Parameter rename `quantities` → `piles` checked for collisions first
  (source locals: stores_needed/storesNeeded, x, q, lo, hi, mid — clean);
  solution locals renamed to `bins_needed`/`binsNeeded` to match, and all
  store/product comments rewritten to bin/pile.
- Publics cross-checked between a linear scan of caps and the binary-search
  reference; example arithmetic in the statement (ceil sums 6 vs 5) comes
  straight from that computation.
