## 434 — Pizza With 3n Slices

- New id / title / slug: 434 / Keep a Third of the Ring / `keep-a-third-of-the-ring`
- Old → new API: `maxSizeSlices` → `bestRingPicks` (go `bestRingPicks`, rust `best_ring_picks`, ts `bestRingPicks`); parameter `slices` → `ring` (scenario recast from pizza/Alice/Bob to an abstract circle)
- Core algorithm / difficulty: reduce to choosing exactly n non-adjacent entries on a circle, break the circle into two linear house-robber DPs with a pick quota / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes — same 6-position pick sequences as the figures)
  - `[3,8,2,9,5,11]` → 20, `[10,4,8,3,2,6]` → 18 (two largest are neighbours), `[2,7,3,8,1,9,4,6,5]` → 24 (9 values, n = 3)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — values, captions, and the Alice/Bob role labels relabeled to "out"; the pizza geometry was kept since the pick structure of both figures was matched by construction
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Scenario characters (Alice/Bob) lived only in the figures' text nodes, so the
  abstract rewrite cost a role-label edit ("out") plus new captions — the arcs
  and slice geometry are a deterministic 6-slice layout and were preserved by
  choosing examples with the same optimal pick positions (4 then 6; 1 then 3).
- The source constraints say length = 3n yet hidden data contains a length-1
  ring; kept verbatim in meaning (the reference special-cases length 1), since
  decision 5 forbids touching the domain.
- Parameter rename is safe for compatibility: the runner invokes positionally
  (`python_harness.py` line 99), so the staged source's own parameter name
  never matters.
