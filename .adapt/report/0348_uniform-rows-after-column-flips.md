## 348 — Flip Columns For Maximum Number of Equal Rows

- New id / title / slug: 348 / Uniform Rows After Column Flips / `uniform-rows-after-column-flips`
- Old → new API: `maxEqualRowsAfterFlips` → `mostUniformRowsAfterFlips` (go `mostUniformRowsAfterFlips`, rust `most_uniform_rows_after_flips`, ts `mostUniformRowsAfterFlips`); parameter `matrix` kept
- Core algorithm / difficulty: canonical row form (each cell XOR the row's first cell), largest group of identical-or-complementary rows / H3 (unchanged)
- Statement rewritten from spec: yes ("rows with all values equal" reframed as uniform rows under column flips)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[[0,1,0],[1,0,1],[1,0,0]]` → 2 (two complementary rows co-satisfied, one row left out); `[[0,0],[0,0],[1,1]]` → 3 (all-zero and all-one rows count together); `[[1],[0],[1]]` → 3 (single-column triviality)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (no failures for this key in the tree static run) verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- The three examples deliberately cover the three failure modes of the
  naive mental model: complement-pairs, mixed-color uniform rows, and the
  one-column degenerate case.
- `check.py`'s static tier always scans the whole adapted tree, so the
  per-bundle gate is "this key produces no FAIL lines"; other parts'
  in-flight bundles (0547/0736/1039 at the time of writing) are outside
  this wave.
