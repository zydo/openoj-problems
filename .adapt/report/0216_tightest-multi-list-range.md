## 216 — Smallest Range Covering Elements from K Lists

- New id / title / slug: 216 / Tightest Multi-List Range /
  `tightest-multi-list-range`
- Old → new API: `smallestRange` → `tightestCoveringRange` (go
  `tightestCoveringRange`, rust `tightest_covering_range`, ts
  `tightestCoveringRange`)
- Core algorithm / difficulty: min-heap k-way merge with a tracked maximum /
  H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a)
  - a width-two range across mixed signs; a shared singleton value
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓; verify ✓ (7/7 languages, 16/16 cases); sandbox n/a;
  compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- Public expectations were recomputed by exhaustive Cartesian-product search.
