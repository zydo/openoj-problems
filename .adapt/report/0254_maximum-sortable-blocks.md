## 254 — Max Chunks To Make Sorted II

- New id / title / slug: 254 / Maximum Sortable Blocks / `maximum-sortable-blocks`
- Old → new API: `maxChunksToSorted` → `maximumSortableBlocks` (go `maximumSortableBlocks`, rust `maximum_sortable_blocks`, ts `maximumSortableBlocks`); parameter `arr` kept (conventional)
- Core algorithm / difficulty: prefix-multiset equality via a running unmatched tally against a sorted copy / H3 (unchanged)
- Statement rewritten from spec: yes — framed as "slice, sort each slice in place, read back", with the duplicates caveat stated in the description rather than left to the hints
- Examples newly constructed: yes (structure-preserving: n/a — no figures)
  - `[9,7,5,3] → 1` (nothing can be cut), `[2,0,1,5,4] → 2`, `[1,3,3,2,6] → 3` (duplicates straddling a would-be cut)
- Constraints: domain unchanged, presentation rewritten (prose form rather than inequalities)
- Skeletons regenerated: all 7 (cpp, go, java, js, py, rust, ts)
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The sibling `0769_max-chunks-to-make-sorted` (the permutation-only version) is
  not in `families.json` and was not adapted yet. The title chosen here is the
  general one on purpose; when 769 comes up it can take a qualified sibling
  title such as "Maximum Sortable Blocks, Permutation" without disturbing this
  bundle.
- The source's own terminology word ("chunk") is not an identifier the stale
  gate tracks, but it was renamed to "block" in the ported solutions' comments
  and local variables so no artifact carries the old vocabulary.
