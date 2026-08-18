## 0053 — Maximum Subarray

- New id / title / slug: 53 / Largest Subarray Sum / `largest-subarray-sum`
- Old → new API: `maxSubArray` → `largestSubarraySum` (go `largestSubarraySum`, rust `largest_subarray_sum`, ts `largestSubarraySum`)
- Core algorithm / difficulty: Kadane's scan, plus a divide-and-conquer merge of range statistics / H2 (unchanged)
- Statement rewritten from spec: yes — it now names the object ("a block") and states the non-empty rule outright, which the source left implicit
- Examples newly constructed: yes (structure-preserving: **yes** — nine entries, so the trace figure keeps its shape)
  - `[-3,5,-6,4,-1,3,-2,1,-4] → 6`, `[-7] → -7` (all-negative), `[2,3,-1,4,5] → 13` (whole array)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: **regenerated** — `scripts/adapt_figures.py kadane-walk`
- Variants: `kadane`, `divide_and_conquer` kept as variant ids (decision 4); guide headings unchanged so the section matcher still resolves them
- Gates: check ✓ verify ✓ (14/14 variant files, 19/19 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes for the pilot review

- **Rebuilding a figure found bugs in the live one.** The renderer was validated
  by reproducing the source figure exactly — and the reproduction was
  pixel-identical *including two defects*: the two restart labels overprint
  each other into unreadable text, and the closing footnote runs off the right
  edge of the canvas. Both are in `problems/0053_maximum-subarray` on the live
  site today. The renderer fixes them (a second annotation row, a wrapped
  footnote, a canvas sized to its content), so the adapted figure is better
  than the one it replaces. Worth a separate sweep of the live figures for the
  same class of overflow.
- Multi-solution bundles cost nothing extra beyond volume: the variant ids are
  algorithm names, so they stay, and the guide headings must stay with them or
  the Solutions tab silently loses its explanations.
