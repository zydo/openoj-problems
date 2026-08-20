## 161 — Split Array Largest Sum

- New id / title / slug: 161 / Smallest Largest Split Sum / `smallest-largest-split-sum`
- Old → new API: `splitArray` → `smallestLargestSplit` (go `smallestLargestSplit`, rust `smallest_largest_split`, ts `smallestLargestSplit`); parameters `nums`, `k` kept
- Core algorithm / difficulty: binary search on the answer + greedy piece-count feasibility / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[6,1,3,9,4,2] k=2` → 15, `[5,5,5,5] k=3` → 10, `[2,9,3,1] k=4` → 9 (piece-per-element extreme)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The solutions.md search trace was re-derived by instrumenting the reference
  on the new example (bounds 9…25, probes 17 → 13 → 15 → 14, answer 15) —
  the four-probe walk fits the house pattern of showing the invariant move.
- Solution code carries no old-title terminology in comments; identifier
  renames alone were enough for `solution.*`.
