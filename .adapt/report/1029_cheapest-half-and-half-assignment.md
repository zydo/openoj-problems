## 1029 — Two City Scheduling

- New id / title / slug: 1029 / Cheapest Half-and-Half Assignment / `cheapest-half-and-half-assignment`
- Old → new API: `twoCitySchedCost` → `cheapestHalfAndHalfAssignment` (go `cheapestHalfAndHalfAssignment`, rust `cheapest_half_and_half_assignment`, ts `cheapestHalfAndHalfAssignment`); parameter `costs` kept
- Core algorithm / difficulty: sort by a-b difference, split at the half / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[[15,60],[70,10],[40,45],[35,35]]` → 100, `[[20,20],[30,10]]` → 30 (minimum size, one per site), 6-person array → 215
- Constraints: domain unchanged, presentation rewritten (`aCosti, bCosti` became `costs[i][0], costs[i][1]`)
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 14/14 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The flying/interview scenario is gone; the statement speaks of two sites and
  an even split, which is the whole content of the task. No scenario wording
  survived in the solutions.
- Explanations index people by position ("positions 3, 0, and 2"), which keeps
  the example walkthroughs unambiguous once people are 0-indexed input rows.
