## 159 — Queue Reconstruction by Height

- New id / title / slug: 159 / Rebuild Line From Taller Counts / `rebuild-line-from-taller-counts`
- Old → new API: `reconstructQueue` → `rebuildLine` (go `rebuildLine`, rust `rebuild_line`, ts `rebuildLine`); parameter `people` kept (the pairs really are people, and no clearer name exists)
- Core algorithm / difficulty: sort tallest-first with count ascending, then insert each person at index `count` / H3 (unchanged)
- Statement rewritten from spec: yes — stated as "a line was scrambled, one pair survives per person", and the uniqueness of the answer is stated outright (the source only promised solvability, but the judge compares exactly, so a solver deserves to know the answer is forced)
- Examples newly constructed: yes (structure-preserving: n-a, no figures)
  - `[[8,1],[4,3],[3,0],[6,1],[5,3],[8,0]] → [[3,0],[8,0],[6,1],[8,1],[4,3],[5,3]]` (mixed heights, two equal-height people), `[[5,2],[5,0],[5,1]] → [[5,0],[5,1],[5,2]]` (all one height — the tie-break case), `[[3,3],[5,2],[9,0],[7,1]] → [[9,0],[7,1],[5,2],[3,3]]` (strictly descending)
- Constraints: domain unchanged, presentation rewritten (`hi`/`ki` replaced by `people[i][0]`/`people[i][1]`, which the bank's other pair-array statements already use)
- Skeletons regenerated: all 7 (cpp, go, java, js, py, rust, ts)
- Figures: none in the source
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Examples for a reconstruction problem are best built backwards: pick the
  finished arrangement, derive each entry's count from it, then present the
  pairs in a scrambled order. Deriving the counts by hand and trusting them is
  the trap; the expected values here still came from running the reference on
  the scrambled input, and the two agreed.
- The stale gate's literal extraction (`\[[^\[\]\n]{4,}\]`) never fires on a
  pair-of-pairs statement, because the innermost literals like `[7,0]` hold only
  three characters. For this family of problems the gate gives no protection
  against reusing the source's example data — the discipline has to come from
  constructing the examples first, from the spec.
