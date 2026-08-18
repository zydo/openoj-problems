## 0179 — Largest Number

- New id / title / slug: 179 / Largest Concatenation / `largest-concatenation`
- Old → new API: `largestNumber` → `largestConcatenation` (go `largestConcatenation`, rust `largest_concatenation`, ts `largestConcatenation`); parameter `nums` kept
- Core algorithm / difficulty: sort on the two-reading comparator, plus the all-zero collapse / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[4,45,7,71] → "771454"` (both directions of the prefix tie-break), `[23,2,234] → "234232"` (a prefix chain), `[0,0,0] → "0"` (the zero collapse)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: compatibility ✓ stale ✓ overlap ✓ (verify 7/7 languages, 20/20 cases)

### Notes

- The title joins the existing "Largest …" family in `problems-adapt/`
  (Largest Subarray Sum, Largest Water Container, …) while naming the actual
  operation, which the source title never did.
- Example 1 was chosen so both orderings the comparator decides run against
  numeric intuition in *opposite* directions (7 before 71, but 45 before 4),
  which is the point a reader has to internalize.
