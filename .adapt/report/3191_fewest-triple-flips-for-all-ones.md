## 3191 — Minimum Operations to Make Binary Array Elements Equal to One I

- New id / title / slug: 3191 / Fewest Triple Flips for All Ones / `fewest-triple-flips-for-all-ones`
- Old → new API: `minOperations` → `fewestFlips` (go `fewestFlips`, rust `fewest_flips`, ts `fewestFlips`); parameter `nums` kept
- Core algorithm / difficulty: greedy left-to-right sweep, each running 0 forces the triple flip starting there; feasibility from the last two cells / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — figure is a solution figure)
  - `[1,1,0,1,1,0]` → 2 (one forced flip creates the next), `[0,1,0,1,0,1]` → 3 (chain of three), `[0,0,1,1]` → -1 (minimal-length unfixable)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: solution figure `solution-greedy-flips.svg` **regenerated** from the recovered layout rule (cells at pitch 56 from x=60, rows at pitch 58 from y=28, highlight = flipped window) for the new example `[1,1,0,1,1,0]` — the original drawing walked the source example, and its flip set {0,1,3} uniquely determines that input, so no same-shape example exists
- Gates: check ✓ (static tier, full-tree run, no failure for this bundle) verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The greedy flip set uniquely determines the input (the sweep is invertible),
  so "same flip positions, different data" is impossible for this problem —
  any structure-preserving example IS the source example. The figure was
  regenerated instead, per PROTOCOL step 4's layout-recovery path.
- Binary-array examples are two-symbol literals, so the stale gate's example
  scan ignores them by construction; freshness rests on the constructed
  shapes (verified via the generator's flip trace).
- My first hand-trace of a candidate was wrong (missed that a flip window
  covering a 1 position doesn't fire); the reference-computed expectations
  caught it — never compute these by hand.
- check.py's `--problems` flag filters only the runtime tier; the static tier
  always scans the whole tree, so a per-bundle green signal means "absent from
  the failure list" of a full run (other sessions' bundles may FAIL
  concurrently — ignore those).
