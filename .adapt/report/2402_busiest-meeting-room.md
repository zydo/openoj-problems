## 2402 — Meeting Rooms III

- New id / title / slug: 2402 / Busiest Meeting Room / `busiest-meeting-room`
- Old → new API: `mostBooked` → `busiestRoom` (go `busiestRoom`, rust `busiest_room`, ts `busiestRoom`); parameters `n`, `meetings` kept
- Core algorithm / difficulty: sort by start, free-room min-heap + busy `(end, room)` min-heap, per-room counter / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `n=2` `[[1,4],[2,3],[5,9],[6,8]]` → 0 (simultaneous opening, tie to lowest); `n=3` `[[0,7],[1,3],[2,9],[4,6]]` → 1 (reused early-opening room); `n=1` `[[2,5],[3,4],[9,12]]` → 0 (serialized waits, duration preserved)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Family: source `0253_meeting-rooms-ii` is unadapted so far. This title keeps
  the "meeting room" family wording so 0253 can still be named a recognizable
  sibling (e.g. "Fewest Meeting Rooms") when its chunk runs.
