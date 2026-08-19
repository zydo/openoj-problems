## 0732 — My Calendar III

- New id / title / slug: 732 / Peak Booking Depth / `peak-booking-depth`
- Old → new API: `MyCalendarThree` → `BookingDepth`, `book` → `add`, `startTime` → `start`, `endTime` → `end`
- Core algorithm / difficulty: boundary `+1`/`-1` deltas in a position-keyed map, re-swept per call / H3 (unchanged)
- Statement rewritten from spec: yes — reframed around the *depth* of a calendar rather than a counted mutual intersection, so the half-open rule is stated as a consequence rather than as a footnote
- Examples newly constructed: yes (structure-preserving: n-a — the figure is regenerated, so the example was chosen freely)
  - six spans peaking at depth 4; four nested-plus-disjoint spans; four spans laid end to end plus one straddler
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: py, java (design bundle — the source ships only these two)
- Figures: **regenerated** — `figures/solution-delta-sweep.svg` redrawn from the new six-span example by a small local renderer (bars + step plot); alt text rewritten
- Gates: check ✓ verify ✓ (2/2 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- **The source's solution figure was geometry-encoded but still cheap to
  regenerate.** Its x-axis is *ordinal* — one evenly spaced slot per distinct
  endpoint — so the only real inputs are the span list and the step heights.
  About sixty lines of Python reproduce the whole family. Worth promoting into
  `scripts/adapt_figures.py` as an `interval-sweep` renderer if another
  interval bundle (0759, 0253) wants one.
- The source's comments in `solution.py` / `solution.java` used LeetCode's
  "`k`-booking" vocabulary. The stale gate does not catch prose in comments,
  but ADAPT.md §table does require it, so those two sentences were rewritten.
- **Family caution:** `0729_my-calendar-i` is Part A but in `wave-a-2`, and
  `families.json` pins no calendar titles. "Peak Booking Depth" is chosen to
  read as a sibling of whatever booking-flavoured title I gets, without
  requiring agreement. If I lands on something unrelated, this pair is worth a
  second look at merge time.
