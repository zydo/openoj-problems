## 3454 — Separate Squares II

- New id / title / slug: 3454 / Halve the Square Area Union / `halve-square-area-union`
- Old → new API: `separateSquares` → `halveAreaUnion` (go `halveAreaUnion`, rust `halve_area_union`, ts `halveAreaUnion`); parameter `squares` kept
- Core algorithm / difficulty: sweep square bottom/top events in y, maintain union width of active x-intervals on a count-per-node segment tree over compressed x, exact integer band areas, one final division inside the half-total band / H4 (unchanged)
- Statement rewritten from spec: yes (covered-region semantics — "a point counts once no matter how many squares lie on it" — restated from the task)
- Examples newly constructed: yes (structure-preserving: yes)
  - `[[0,0,1],[3,2,1]]` → 1.0 (disjoint pair, plateau at the lower top edge), `[[0,0,3],[1,1,1]]` → 1.5 (nested square adds nothing), `[[0,0,4],[3,3,2]]` → 2.375 (corner overlap, union 19, line inside the first band)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: both **regenerated** from the family's documented mapping (nested variant reuses the dashed no-fill inner square); rendered PNGs verified by image analysis
- Gates: check ✓ (per-bundle static tier clean) verify ✓ (7/7 languages, 19/19 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓ (after alt-text rewording)

### Notes

- Same alt-text/overlap-gate trap as 3453 — my first ex1 alt was a light
  paraphrase of the source's alt and cost 15% overlap. Alt text is prose to
  the shingler; write it as fresh as the description.
- The independent oracle (`exp_3454.py`) recomputes band widths by sorting
  active intervals per band — no segment tree — so it checks the tree logic,
  not just the sweep bookkeeping.
