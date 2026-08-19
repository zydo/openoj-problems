## 0398 — Random Pick Index

- New id / title / slug: 398 / Uniform Matching Index /
  `uniform-matching-index`
- Old → new API: `Solution` → `IndexSampler`; `pick` → `drawIndex`
- Core algorithm / difficulty: value-to-index buckets and uniform sampling /
  H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a)
  - three target multiplicities in one array; one value occupying all four
    positions
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: Java, Python
- Figures: none
- Gates: check ✓; verify ✓ (2/2 languages, 15/15 cases); sandbox pending
  (central design batch); compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- Hidden action names received the sanctioned class/method rename; all hidden
  numeric inputs and statistical expectations remain data-identical.
- Both new public cases use distribution expectations rather than fixing the
  illustrative draws shown in the statement.
