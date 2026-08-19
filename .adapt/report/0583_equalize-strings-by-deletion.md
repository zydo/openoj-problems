## 0583 — Delete Operation for Two Strings

- New id / title / slug: 583 / Equalize Strings by Deletion /
  `equalize-strings-by-deletion`
- Old → new API: `minDistance` → `minimumDeletionsToEqual` (go
  `minimumDeletionsToEqual`, rust `minimum_deletions_to_equal`, ts
  `minimumDeletionsToEqual`)
- Core algorithm / difficulty: longest common subsequence reduction / H3
  (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes for the figure)
  - two three-letter words retaining a two-letter LCS; two shifted five-letter
    words retaining four letters
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated
- Gates: check ✓; verify ✓ (7/7 languages, 16/16 cases); sandbox n/a;
  compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- The first example preserves the source figure's LCS equality pattern, so its
  table values remain valid with new row and column labels.
- Visual review exposed a source layout defect: labels were shifted into
  suffix order over a prefix-DP table and an annotation covered cells. The
  adapted SVG realigns the axes, removes the overlay, and widens the caption.
