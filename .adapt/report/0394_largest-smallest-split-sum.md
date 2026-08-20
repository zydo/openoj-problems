## 394 — Divide Chocolate

- New id / title / slug: 394 / Largest Smallest Split Sum / `largest-smallest-split-sum`
- Old → new API: `maximizeSweetness` → `largestSmallestSplit` (go `largestSmallestSplit`, rust `largest_smallest_split`, ts `largestSmallestSplit`); parameter `sweetness` → `nums`; `k` kept
- Core algorithm / difficulty: binary search on the answer over [1, sum/(k+1)] with an earliest-cut greedy feasibility check / H3 (unchanged)
- Statement rewritten from spec: yes (chocolate framing dropped; pure split-array statement, deliberately mirroring sibling 0410 `smallest-largest-split-sum` = LC 410's kin, which minimizes the largest piece sum)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[4,2,7,3,5,1] k=2` → 6 (average cap binds); `[6,2,9] k=0` → 17 (single piece); `[8,1,2,1,9,4] k=2` → 4 (a weak run pins the score)
- Constraints: domain unchanged (`1 <= len <= 10^4`, `0 <= k < len`, `1 <= nums[i] <= 10^5`), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: compatibility ✓ stale ✓ overlap ✓ verify ✓ (7/7 languages, 17/17 cases) check ✓ (per-bundle static clean)
- Sandbox: function kind, deferred to batch run

### Notes

- Title/method chosen to mirror 0410's adapted identity (`smallestLargestSplit`)
  — the two problems are near-twins by technique (minimize-max vs
  maximize-min split) even though they are not a numbered LeetCode family.
- `nums` was free as an identifier in all seven source solutions; the
  `sweetness` rename covers statements, starters, and comments.
