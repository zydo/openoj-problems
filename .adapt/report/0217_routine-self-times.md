## 217 — Exclusive Time of Functions

- New id / title / slug: 217 / Routine Self Times / `routine-self-times`
- Old → new API: `exclusiveTime` → `routineSelfTimes` (go `routineSelfTimes`,
  rust `routine_self_times`, ts `routineSelfTimes`); parameter `logs` →
  `events`, `n` kept
- Core algorithm / difficulty: replay the trace on a stack of open entries,
  billing each unit to the top / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes for example 1 —
  same seven-unit timeline with one nested entry, split at different units)
  - `n = 2, ["0:start:0","1:start:3","1:end:4","0:end:6"]` → `[5,2]`
  - `n = 1, ["0:start:0","0:start:1","0:end:3","0:end:4"]` → `[5]` (recursion)
  - `n = 3, ["1:start:2","1:end:4","0:start:5","2:start:6","2:end:6","0:end:8"]`
    → `[3,3,1]` (idle stretches, a one-unit entry)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (`example-1.svg`) — the timeline is a uniform 56px
  grid of unit boxes, so the new split needed two box fills swapped, the inner
  bar's `x`/`width` moved, two tick lines moved and the legend retermed
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a
  compatibility ✓ stale ✓ overlap ✓

### Notes

- The event string format `"<id>:start:<ts>"` is judged input data — it appears
  verbatim in every hidden case — so the field layout and the literal words
  `start` and `end` had to stay. Only the surrounding vocabulary (function →
  routine, exclusive time → self time) is the adaptation's own.
- No source solution declares an `events` identifier, so the `logs` → `events`
  rename is safe for the staged-source compatibility run once the api map
  reaches the ledger. Comments naming `funcId` / `func_id` were retermed;
  the code itself is untouched.
