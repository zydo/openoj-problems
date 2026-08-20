## 424 — Maximum Number of Events That Can Be Attended

- New id / title / slug: 424 / Most Tasks Done, One Per Day / `most-tasks-done-one-per-day`
- Old → new API: `maxEvents` → `maxTasks` (go `maxTasks`, rust `max_tasks`, ts `maxTasks`); `events` → `windows`
- Core algorithm / difficulty: day sweep over openings with a min-heap of closings, earliest-closing-first exchange argument / H3 (unchanged)
- Statement rewritten from spec: yes (events → tasks with open/close windows)
- Examples newly constructed: yes (structure-preserving: yes — figure kept its staggered-bar calendar, re-emitted for longer windows)
  - `[[1,3],[2,4],[3,5]]` → 3 (all fit, days 1/2/3), `[[1,2],[1,2],[1,2]]` → 2 (three tasks, two days)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: regenerated — example-1.svg re-emitted from the recovered layout rule (125 px day cells from x=50, bars per window, blue worked-day block); viewBox widened for the 5-day span
- Gates: check ✓ (bundle check clean) verify ✓ (7/7 languages, 14/14 cases) sandbox n/a (function kind, batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Source's example literals are all `[a,b]` pairs over ≤2 distinct digits,
  so the stale gate exempts this problem's examples; freshness enforced by
  construction.
- Example answers cross-checked by an exact day-assignment search
  (`.localonly/wave-e-01/pub_1353.py`).
