## 0162 — Find Peak Element

- New id / title / slug: 162 / Leftmost Local Maximum / `leftmost-local-maximum`
- Old → new API: `findPeakElement` → `leftmostLocalMaximum` (go `leftmostLocalMaximum`, rust `leftmost_local_maximum`, ts `leftmostLocalMaximum`); parameter `nums` kept
- Core algorithm / difficulty: left-to-right scan stopping at the first descent / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[5,9,4,8,3] → 1` (two local maxima, earliest wanted), `[-8,-3,0,6] → 3` (climbs throughout), `[7,5,2,-1] → 0` (descends throughout)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: compatibility ✓ stale ✓ overlap ✓ check ✓ (verify 7/7 languages, 16/16 cases)

### Notes

- **The spec's sharpest edge is "leftmost".** `comparison` is `exact` and the
  reference is a linear scan, so the hidden cases demand one particular index
  (`[1,2,1,2,1] → 1`, `[2,1,2,1,...] → 0`). The statement says so explicitly
  ("smallest index", "the earliest"), and the guide keeps the source's honest
  warning that interval-halving finds *a* qualifying index but not reliably the
  earliest — the one thing that distinguishes this task from the classic
  any-peak version.
- This bundle was redone after a first attempt was deleted for being a
  near-verbatim copy with the source examples intact; the redo was written from
  the spec with the source statement closed, and all three gates were run
  locally before moving on.
