## 2307 — Check for Contradictions in Equations

- New id / title / slug: 2307 / Conflicting Ratios / `conflicting-ratios`
- Old → new API: `checkContradictions` → `hasRatioConflict` (go `hasRatioConflict`, rust `has_ratio_conflict`, ts `hasRatioConflict`); parameters `equations` → `pairs`, `values` → `ratios`
- Core algorithm / difficulty: weighted union-find, ratio-to-root factors, tolerance 10⁻⁵ check when a constraint's endpoints already share a root / H3 (unchanged)
- Statement rewritten from spec: yes — "equations" → constraints on named ratios; contradiction phrased as "some subset cannot hold at once"
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[["p","q"],["q","r"],["p","r"]], [4,0.5,2] → false` (consistent triangle), `[["ab","cd"],["cd","ef"],["ef","ab"]], [2,3,0.5] → true` (cycle forces 1/6 vs 0.5), `[["w","w"]], [4.0] → true` (self-ratio)
- Constraints: domain unchanged (1–100 constraints, names 1–5 lowercase letters, 0 < ratio ≤ 10.0 with ≤ 2 decimals), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (static tier clean for this key) verify ✓ (7/7 languages, 19/19 cases) sandbox n/a (function kind) compatibility ✓ stale ✓ overlap ✓

### Notes

- Overlap gate bit twice on boilerplate-shaped prose: the canonical
  "You are given a 2D array of strings … and an array of real numbers"
  opening and the constraint line "`x` has a maximum of 2 decimal
  places" (numbers are stripped before shingling, so both ran 7+ words).
  Opening restructured ("Two arrays describe the constraints…") and the
  decimals line reworded ("written with at most two digits after the
  decimal point"). Constraint bullets that echo source phrasing should
  be varied proactively on later problems.
