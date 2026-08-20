## 101 — Meeting Rooms II

- New id / title / slug: 101 / Peak Interval Overlap / `peak-interval-overlap`
- Old → new API: `minMeetingRooms` → `peakOverlap` (go `peakOverlap`, rust `peak_overlap`, ts `peakOverlap`); parameter `intervals` kept
- Core algorithm / difficulty: sort by start, min-heap of end times, peak heap size / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[[10,40],[20,30],[35,50]] → 2` (two different pairs peak at 2),
    `[[1,4],[4,7]] → 1` (back-to-back, half-open boundary),
    `[[1,9],[2,6],[4,8],[10,15]] → 3` (three-deep instant, then an isolated interval)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The meeting-rooms scenario was dropped rather than re-dressed. The task is
  really "how many intervals run at once", which states directly with no cast of
  characters; the statement defines half-open activity (`running at every
  instant from start up to but not including end`) so the boundary rule that the
  source carried implicitly in its room-reuse behaviour is now explicit.
- Solution comments named old terminology (`meetings`, `rooms`) in all seven
  languages; they now speak of intervals and running counts. The Go variant also
  had a local `rooms` variable, renamed `active` — a local, not API, but leaving a
  rooms-named variable beside a rooms-free statement reads stale.
- Caught by the gates: the statement-example correspondence is enforced
  (`Public cases must correspond one-to-one with statement examples`) — I had
  generated a fourth public case for a shape already covered. Worth knowing the
  gate surfaces it only through verify's traceback, not as a friendly message.
