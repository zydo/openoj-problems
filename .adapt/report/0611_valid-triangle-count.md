## 0611 — Valid Triangle Number

- New id / title / slug: 611 / Valid Triangle Count / `valid-triangle-count`
- Old → new API: `triangleNumber` → `countTriangles` (go `countTriangles`,
  rust `count_triangles`, ts `countTriangles`); parameter `nums` → `sides`
- Core algorithm / difficulty: sort, anchor the largest side, two-pointer
  sweep over the prefix / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes)
  - `[3,4,5,6]` (all four triplets work), `[0,1,1,1]` (zeros and repeats),
    `[7,3]` (too few entries)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — the solution figure's four boxes, pointer
  positions, and first-step event survive unchanged on `[3,4,5,6]`; only the
  four box values, the anchor label, and the two caption lines changed
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a
  compatibility ✓ stale ✓ overlap ✓

### Notes

- The parameter rename `nums` → `sides` was grepped against the source
  solutions first (no hit) — the 0587 collision class does not arise.
- Example 1 was reverse-engineered for the figure: it needed a sorted
  four-element array where `lo = 0`, `hi = 2` clears the anchor at the first
  comparison, which `[3,4,5,6]` satisfies exactly as `[2,2,3,4]` did.
