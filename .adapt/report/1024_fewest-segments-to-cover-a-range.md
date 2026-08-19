## 1024 — Video Stitching

- New id / title / slug: 1024 / Fewest Segments to Cover a Range / `fewest-segments-to-cover-a-range`
- Old → new API: `videoStitching` → `fewestSegments` (go `fewestSegments`, rust `fewest_segments`, ts `fewestSegments`); parameters `clips` → `segments`, `time` → `span`
- Core algorithm / difficulty: sort by start, jump-game greedy taking the farthest reach past the covered prefix / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — the one figure was regenerated)
  - `[[0,6],[0,2],[5,9],[3,4]], span = 9` → 2
  - `[[0,3],[2,5],[4,10],[7,9],[1,2]], span = 10` → 3 (the figure's data)
  - `[[0,2],[3,6]], span = 6` → -1 (an unbridgeable gap)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: `solution-clip-jumps.svg` → `solution-segment-jumps.svg`, regenerated from a script for the new example
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The sporting-event framing is invented scenery over a plain interval-cover
  task, so the rewrite states it on the number line and the API follows:
  `clips` → `segments`, `time` → `span`. `time` in particular is a bad
  parameter name to keep — it is a Go package and a C library function.
- Both candidate names were grepped as whole words across all seven source
  solutions before being chosen (`segments` 0 hits, `span` 0 hits). `covered`
  and `reach` are *taken* by source locals; anyone renaming here should avoid
  them.
- Parameter renames do not reach `adapt_gates.py` until the fragment is merged
  (the gate reads them from the ledger's `api` map). I staged the source
  solutions with the full map by hand and ran the local judge: 7/7 pass, so
  the merged compatibility gate will too.
- The figure is a time axis at `x = 50 + 44t` with one row per interval; it is
  easier to emit from a five-line script than to edit, and that is how the new
  one was produced. Row count dropped from six to five, so the axis and caption
  moved up 44px and the viewBox height with them.
