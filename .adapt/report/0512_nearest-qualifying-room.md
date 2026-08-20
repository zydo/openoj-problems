## 512 — Closest Room

- New id / title / slug: 512 / Nearest Qualifying Room / `nearest-qualifying-room`
- Old → new API: `closestRoom` → `nearestQualifyingRoom` (go `nearestQualifyingRoom`, rust `nearest_qualifying_room`, ts `nearestQualifyingRoom`); parameters `rooms`, `queries` kept (conventional)
- Core algorithm / difficulty: offline — requests by falling min size, ids inserted into a sorted list, bisect for nearest / H3 (unchanged)
- Statement rewritten from spec: yes — the hotel framing is dropped; "qualifies" is defined once and the title leans on it
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `rooms=[[4,5],[10,5],[6,2]]`: distance tie broken to the smaller id, a no-qualifier `-1`, and an exact hit
  - `rooms=[[2,3],[4,1],[6,3],[8,3],[10,2]]`: nearest-on-the-right, nearest-on-the-left, and a two-sided tie
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 12/12 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- First draft of Example 1 claimed a tie at `[7,5]` that the reference
  contradicted (|7−4| = 3, not 2) — the expected-value script caught the
  arithmetic, reinforcing "never compute expectations by hand".
- Solution comments still name `minSize`/`preferred` as internal concepts;
  those are solution locals, not API identifiers, so they stay per the
  "rename only the API" rule.
