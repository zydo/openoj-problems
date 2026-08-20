## 682 — Minimum Operations to Make All Array Elements Equal

- New id / title / slug: 682 / Steps to Align Every Value / `steps-to-align-every-value`
- Old → new API: `minOperations` → `alignmentCosts` (go `alignmentCosts`, rust `alignment_costs`, ts `alignmentCosts`); parameters `nums` kept, `queries` → `targets`
- Core algorithm / difficulty: sort + prefix sums; per target a binary search splits below/above and both groups' costs come out in O(1) / H3 (unchanged)
- Statement rewritten from spec: yes ("queries" → targets, each standing alone with the array restored)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[4,2,7] targets [3,6]` → `[6,7]`, `[5,5,5,2] targets [5]` → `[3]` (duplicates cost nothing), `[1,10] targets [1,10,6]` → `[9,9,9]` (endpoints and midpoint coincide)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Renamed `queries` → `targets` for clarity (checkable noun, not judge
  jargon); no identifier collision in any source solution. The rename is
  applied consistently in `problem.json`, every solution, and the
  regenerated starters — parameter renames must be decided *before*
  `init_bundle.py`, which is where this one slipped.
- Brute force is the direct `sum(abs(x - q))` per target.
