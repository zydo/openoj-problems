## 760 — Select Cells in Grid With Maximum Score

- New id / title / slug: 760 / Largest Distinct-Value Sum Across Grid Rows / `largest-distinct-value-sum-across-grid-rows`
- Old → new API: `maxScore` → `bestPickSum` (go `bestPickSum`, rust `best_pick_sum`, ts `bestPickSum`); parameter `grid` kept
- Core algorithm / difficulty: value→row-bitmask compression, dp over row masks processing values descending, transitions read pre-update table so each value is taken once / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes — both figures keep their grid sizes, values and shaded cells edited)
  - `[[7,2,3],[7,4,5],[6,7,1]]` → 18 (a value in every row taken only once), `[[9,9,4],[9,2,7]]` → 16 (paired 9s, one spent)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: both `example-1.svg` and `example-2.svg` labels updated (values + moved highlight rects)
- Gates: check ✓ (static tier full-tree run — bundle absent from failure list) verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Second overlap failure of the wave, again 100% figure-alt-text: both alts
  had copied the source's "A NxM grid with the values ...; the X in the top
  row and the Y in the bottom row are shaded" skeleton with new numbers.
  Rule of thumb now burned in: alt text is prose, write it from the spec.
