## 395 — Maximum Profit in Job Scheduling

- New id / title / slug: 395 / Most Profit From Non-Overlapping Jobs / `most-profit-from-non-overlapping-jobs`
- Old → new API: `jobScheduling` → `maxNonOverlappingProfit` (go `maxNonOverlappingProfit`, rust `max_non_overlapping_profit`, ts `maxNonOverlappingProfit`); parameters `startTime`, `endTime`, `profit` kept
- Core algorithm / difficulty: weighted interval scheduling — sort by end time, `best[i] = max(best[i-1], best[j] + p)` with `j` from a binary search over end times / H3 (unchanged)
- Statement rewritten from spec: yes (half-open span framing makes the touch-at-X rule part of the model)
- Examples newly constructed: yes (structure-preserving for all three figures: same job counts, same overlap patterns, same chosen-job highlight sets, new times/profits)
  - `[2,3,4,4]/[4,5,6,7]/[40,15,45,65]` → 105 (touch at 4); `[1,2,3,5,8]/[4,6,11,8,10]/[15,25,110,80,70]` → 165 (chain beats one big job); `[2,2,2]/[3,5,6]/[7,9,5]` → 9 (all conflict)
- Constraints: domain unchanged (`1 <= n <= 5*10^4`, `1 <= start < end <= 10^9`, `1 <= profit[i] <= 10^4`), presentation rewritten
- Skeletons regenerated: all 7
- Figures: regenerated — all four SVGs (example-1/2/3, solution-job-timeline) re-emitted by `.localonly/wave-d-05/gen1235_figs.py` from the recovered layout rule (fixed pitch per time unit; bar x = origin + pitch*(start - minT), width = pitch*(end - start)); style constants, bar rows, and tick-per-integer conventions kept
- Gates: compatibility ✓ stale ✓ overlap ✓ verify ✓ (7/7 languages, 16/16 cases) check ✓ (per-bundle static clean)
- Sandbox: function kind, deferred to batch run

### Notes

- First overlap-gate failure of this wave: my figure alt texts initially
  mirrored the source captions ("as bars on a time line from ... and ...
  are highlighted, giving") and alone pushed overlap to 21%. Alt text is
  prose — write it as fresh as the statement.
- Source `solution-job-timeline.svg` labels job 0 (span [1,3]) with value
  70 where the data says 50 (caption's 50 + 70 = 120 is right). Pre-existing
  figure defect in the live tree, left untouched; my regenerated figure
  carries the correct 40 + 65.
