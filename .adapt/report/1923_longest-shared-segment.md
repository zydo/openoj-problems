## 1923 — Longest Common Subpath

- New id / title / slug: 1923 / Longest Shared Segment / `longest-shared-segment`
- Old → new API: `longestCommonSubpath` → `longestSharedSegment` (go `longestSharedSegment`, rust `longest_shared_segment`, ts `longestSharedSegment`); parameters `n`, `paths` kept (conventional)
- Core algorithm / difficulty: binary search on the answer + double-modulus rolling-hash set intersection across sequences / H4 (unchanged)
- Statement rewritten from spec: yes (LeetCode's cities-and-travelers framing dropped; the task is stated directly over sequences)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `n=6, [[2,5,1,4,0],[0,3,5,1,4],[5,1,4,2]] → 3` (shared block mid-sequence), `n=4, [[0,1],[2,0],[1,3]] → 0` (no common value), `n=5, [[0,1,2,4],[2,0,4,1]] → 1` (singles only, no adjacent pair shared)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: compatibility ✓ stale ✓ overlap ✓ verify ✓ (7/7 languages, 17/17 cases) check ✓ (per-bundle static)

### Notes

- "subpath"/"city" appear in solution comments, not just the statement; both
  were rewritten during the copy ("common segment", "+1 per value") so the
  stale scan stays clean.
- Hidden-case scan for public duplication matters here: several hidden cases
  are tiny (`[[0],[0]]`, `[[0,1],[0,1]]`); the new examples were checked
  against all 14 before locking.
- Full-tree `check.py --tree problems-adapt` currently reports 18 failures,
  none in this bundle — they live in other chunks' in-progress bundles
  (e.g. `1000_cheapest-sequence-collapse` stray solutions, plus a duplicate
  slug `count-graph-components` shared by 0323 and 0547). Flagged to the main
  agent, not fixed here.
