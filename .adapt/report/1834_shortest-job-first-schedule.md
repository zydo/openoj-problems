## 1834 — Single-Threaded CPU

- New id / title / slug: 1834 / Shortest Job First Schedule / `shortest-job-first-schedule`
- Old → new API: `getOrder` → `processingOrder` (go `processingOrder`, rust `processing_order`, ts `processingOrder`); parameter `tasks` → `jobs`
- Core algorithm / difficulty: pre-sorted arrival stream + min-heap keyed (length, index), clock jumps to next readiness when idle / H3 (unchanged)
- Statement rewritten from spec: yes — CPU framing kept but re-voiced as one processor and jobs with ready/length times; selection rule stated as bullets
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[[2,3],[3,1],[5,2],[6,1]] → [0,1,3,2]` (shorter arrivals overtake), `[[4,7],[4,3],[4,5],[4,3]] → [1,3,2,0]` (all ready together, index tie-break), `[[8,2],[1,4]] → [1,0]` (idle gap, clock waits for job 0)
- Constraints: domain unchanged, presentation rewritten (`10^5`/`10^9` → `10⁵`/`10⁹`)
- Skeletons regenerated: all 7 (cpp, go, java, js, py, rust, ts)
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 13/13 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The reference was cross-validated against a brute-force event simulator on
  300 random inputs before generating expected values (this judge output is a
  permutation, where a subtle rule misreading would otherwise pass silently
  between my own examples and the port).
- Go's solution has a local `taskHeap` type; renaming the parameter
  `tasks` → `jobs` leaves it untouched (word-boundary rename), which is
  correct — only the public API name needed to change.
