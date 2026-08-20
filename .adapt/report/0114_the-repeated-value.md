## 114 — Find the Duplicate Number

- New id / title / slug: 114 / The Repeated Value / `the-repeated-value`
- Old → new API: `findDuplicate` → `repeatedValue` (go `repeatedValue`, rust `repeated_value`, ts `repeatedValue`); parameter `nums` kept
- Core algorithm / difficulty: array read as an implicit linked list, Floyd tortoise-and-hare to the loop entry / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — figure dropped)
  - `[2,5,1,4,2,3] → 2` (repeat at both ends), `[4,4,1,2,3] → 4` (adjacent repeat),
    `[6,6,6,6,6,6,6] → 6` (whole array one value, loop of length one)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped (`solution-implicit-list-cycle.svg`)
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Title chosen jointly with 0268 ("The Missing Value") — mirror tasks, mirror
  names; see that report.
- The guide's worked walk was rebuilt on new data: `[2,5,1,4,2,3]` gives tail
  0,2,1,5,3 and a two-cell loop 4 -> 2 with entry 2. The source figure showed
  the same idea on `[1,3,4,2,2]`; since the figure *is* the pointer structure of
  that array, no new example can reuse the drawing — dropped (geometry encodes
  the data). The prose walk replaces it.
- The "do not modify the array / constant extra space" clause stays in the
  description, not the hints: it is part of the functional spec (it rules out
  the sort-and-scan and the seen-set), matching the 0238 no-division treatment.
- The degenerate all-equal example needed re-deriving, not copying: length 7
  over range 1..6 makes `[6]*7` legal where the source's `[3,3,3,3,3]` used n=4.
