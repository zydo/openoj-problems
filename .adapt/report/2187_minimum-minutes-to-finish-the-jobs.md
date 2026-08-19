## 2187 — Minimum Time to Complete Trips

- New id / title / slug: 2187 / Minimum Minutes to Finish the Jobs / `minimum-minutes-to-finish-the-jobs`
- Old → new API: `minimumTime` → `minMinutesToFinishJobs` (go `minMinutesToFinishJobs`, rust `min_minutes_to_finish_jobs`, ts `minMinutesToFinishJobs`); parameters `time` → `cycles`, `totalTrips` → `quota` (rust `total_trips` → `quota`)
- Core algorithm / difficulty: binary search on the answer over [1, min·quota], floor-division feasibility check / H3 (unchanged)
- Statement rewritten from spec: yes (buses/trips de-scenarioed to workers/jobs)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `cycles = [2,3,4] quota 7` (three staggered workers, boundary minute 7→8), `[6] quota 4` (single worker), `[1,4] quota 8` (fast worker dominates, slow contributes at 4 and 7)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a (function kind) compatibility ✓ stale ✓ overlap ✓

### Notes

- Trap hit: source parameter `time` is a bare English word, and the stale
  gate's parameter rule (`\btime\b` over JSON bodies) fires on a slug like
  `minimum-time-to-...` (hyphens are word boundaries; `time_ms` and
  snake_case entrypoints are safe). Retitled to "Minutes" — which also
  matches the statement's unit — rather than argue false positive.
- Scenario vocabulary in solution comments (buses/trips) was updated to the
  new framing (workers/jobs) per ADAPT.md's "update comments naming old
  terminology"; local helper `trips_done` → `jobs_done` went with it.
- Reference cross-checked against a minute-by-minute simulation on 300
  random small inputs — agreed everywhere.
