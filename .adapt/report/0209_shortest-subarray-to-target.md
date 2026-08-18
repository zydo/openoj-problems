## 0209 — Minimum Size Subarray Sum

- New id / title / slug: 209 / Shortest Subarray To Target / `shortest-subarray-to-target`
- Old → new API: `minSubArrayLen` → `shortestSubarrayToTarget` (go `shortestSubarrayToTarget`, rust `shortest_subarray_to_target`, ts `shortestSubarrayToTarget`); parameters `target`, `nums` kept
- Core algorithm / difficulty: sliding window vs prefix sums + bisect, positivity throughout / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — figure dropped)
  - `target 9, [2,5,1,3,6,2] → 2`, `target 15, [3,15,2] → 1` (single element), `target 50, [4,4,4,4] → 0` (unreachable)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: **dropped** — `solution-window-states.svg` walks the source example step by step (window rect geometry + per-step sum annotations are the old data). Keeping it would require an example whose window boundaries, sums and target all coincide with the source's — a relabel, not a new example. Phase 2 can decide on a redraw.
- Gates: compatibility ✓ stale ✓ overlap ✓ (verify 14/14 solution files, 17/17 cases)

### Notes

- A solution figure that narrates an algorithm *on the example* is as
  data-bound as an example figure; the "keep unless it walks through an old
  example" clause bites here. Dropped rather than relabeled.
- The source solutions.md embedded the figure with an alt text describing the
  old data; the image line was removed with it.
