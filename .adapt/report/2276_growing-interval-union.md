## 2276 — Count Integers in Intervals

- New id / title / slug: 2276 / Growing Interval Union / `growing-interval-union`
- Old → new API: class `CountIntervals` → `IntervalUnion`; `add` kept (generic collection verb); `count` → `size` (reads as ordinary collection vocabulary); parameters `left`, `right` kept (conventional)
- Core algorithm / difficulty: disjoint sorted ranges + running covered total, hull-splice on overlap / H3 (unchanged)
- Statement rewritten from spec: yes — "set of intervals" recast as a growing union of ranges
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - two ranges bridged by a third that touches both; three separated ranges collapsed by one wide add
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: python3 + java (design problems offer only these)
- Figures: none
- Gates: check ✓ verify ✓ (2/2 languages, 14/14 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓

### Notes

- Renaming `count` to `covered` was rejected before writing anything: the
  source solutions carry a `covered` field, and a method of that name
  would shadow it in Python (the 0587 trap in method form). `size` is
  unused in every source solution.
- The stale gate harvests literals from the source's explanation prose
  too, not just its input lines — `[5, 10]` there (the merged set in the
  source's example walkthrough) rejected my first bridging range.
