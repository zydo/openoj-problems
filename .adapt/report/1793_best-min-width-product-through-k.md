## 1793 — Maximum Score of a Good Subarray

- New id / title / slug: 1793 / Best Min-Width Product Through K / `best-min-width-product-through-k`
- Old → new API: `maximumScore` → `bestMinWidthProduct` (go `bestMinWidthProduct`, rust `best_min_width_product`, ts `bestMinWidthProduct`); parameters `nums`, `k` kept (conventional)
- Core algorithm / difficulty: two-pointer expansion from k, absorbing the larger boundary element, scoring running-min × width at every step / H3 (unchanged)
- Statement rewritten from spec: yes — "score of a good subarray" reframed as the product (smallest value × width) of a window through k
- Examples newly constructed: yes (structure-preserving: **yes** — Example 1 keeps the figure's six cells, k = 3, and its exact bracket sequence [3,3]→[3,4]→[3,5]→[2,5]→[1,5])
  - `[1,6,3,7,5,4], k = 3 → 15` (full expansion wins; figure's walk), `[8,3,9,1,1,1], k = 2 → 9` (widening past the 3 only adds 1s — early stop wins), `[4,6,2,5,3], k = 4 → 10` (k at the edge, all moves forced left)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7 (cpp, go, java, js, py, rust, ts)
- Figures: **labels updated** — `solution-expand-from-k.svg`: same cell pitch, bracket geometry and width rows; new values 1,6,3,7,5,4; narration recomputed (mins 7,5,4,3,3; scores 7,10,12,12,15); example data was chosen so the expansion choices (right, right, then forced left twice) match the drawn brackets
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Bracket-sequence preservation only needed `nums[4] >= nums[2]` and
  `nums[5] >= nums[2]` (the two chosen right-moves); the last two brackets are
  forced by the right edge. Deriving the inequalities from the drawing first
  made the data search a filter, not a lottery.
- The bank already had `maximumScore` methods from other sources; this
  bundle's method is distinctive enough (`bestMinWidthProduct`) that no
  cross-bundle confusion arises in the ledger's api map.
