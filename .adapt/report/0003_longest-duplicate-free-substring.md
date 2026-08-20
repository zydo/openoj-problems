## 3 — Longest Substring Without Repeating Characters

- New id / title / slug: 3 / Longest Duplicate-Free Substring / `longest-duplicate-free-substring`
- Old → new API: `lengthOfLongestSubstring` → `longestDuplicateFreeLength` (go `longestDuplicateFreeLength`, rust `longest_duplicate_free_length`, ts `longestDuplicateFreeLength`)
- Core algorithm / difficulty: sliding window over last-seen indices, two variants (set eviction vs index jump) / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — figure dropped)
  - `"kayakrace"` → 5, `"oooxooo"` → 2 (long runs pin the width), `"ab1 ab2"` → 5 (digit + space in the alphabet)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: **dropped** — the solution figure walks the old example `"abcabcbb"`
  snapshot by snapshot; its shading geometry *is* the data, and a label edit would
  require an example with the identical repeat structure (a relabeling, not a new
  example). No renderer exists for the family.
- Gates: check ✓ verify ✓ (7/7 languages × 2 variants, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Multi-solution bundle: variant ids `sliding` / `last_index_jump` and their
  `solutions.md` section headings kept; the guide's figure reference went with
  the figure.
- Prettier normalizes `*emphasis*` to `_emphasis_` in markdown — run
  `scripts/format.py` on new bundles before the final check.
- The `>= start` guard walkthrough picked `"kayakrace"` because the second 'k'
  lands *left* of the window edge, which illustrates the stale-entry case
  better than the source's own example did.
