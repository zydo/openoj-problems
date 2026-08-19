## 3049 — Earliest Second to Mark Indices II

- New id / title / slug: 3049 / Earliest Time to Finalize Every Counter / `earliest-time-to-finalize-every-counter`
- Old → new API: `earliestSecondToMarkIndices` → `earliestFinalizeTime` (go `earliestFinalizeTime`, rust `earliest_finalize_time`, ts `earliestFinalizeTime`); parameter `changeIndices` → `resets`, `nums` kept
- Core algorithm / difficulty: binary search on the deadline + backward greedy with a min-heap of zeroing savings / H4 (unchanged)
- Statement rewritten from spec: yes ("mark an index / set to 0" reframed as counters, knocks, resets, finalizations)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[4,0], resets [1,2,1,2]` → 3 (one reset, two finals); `[1,2], resets [2,2,2,2,2,2]` → 4 (one counter never resettable); `[4,2], resets [1,2,1]` → -1 (not enough seconds)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 20/20 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Parameter rename (`changeIndices` → `resets`) verified against the Part B
  compat gate, which cannot see ledger fragments: invocation is positional, so
  the staged source solution (still declaring `changeIndices`) passes the
  adapted bundle's cases. Part B parameter renames are safe when the name is
  grepped first for local collisions.
- The brute-force oracle is a full DFS over the four per-second actions with
  memoization on (second, counter state, finalized bitmask) — worth the twenty
  lines on a greedy this subtle; it caught nothing this time, which is itself
  information.
- LeetCode's 2578 ("... Mark Indices I") is not in this bank; the "II" suffix
  was dropped with no family to preserve.
