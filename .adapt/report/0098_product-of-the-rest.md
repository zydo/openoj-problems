## 98 — Product of Array Except Self

- New id / title / slug: 98 / Product Of The Rest / `product-of-the-rest`
- Old → new API: `productExceptSelf` → `productOfRest` (go `productOfRest`, rust `product_of_rest`, ts `productOfRest`); parameter `nums` kept
- Core algorithm / difficulty: prefix × suffix factorization, two linear sweeps / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[3,5,2,4] → [40,24,60,30]`, `[-4,3,-1] → [-3,4,-12]` (signs), `[6,-2,0,7] → [0,0,-84,0]` (a single zero)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (14/14 language-variants, 17/17 cases each) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Multi-solution bundle: variant ids `prefix_arrays` and `rolling` are kept, and
  `solutions.md` keeps one `## <variant id>` heading per variant so the Solutions
  tab still resolves them.
- The "linear time, no division" requirement is judged only in spirit, but it is
  part of the functional spec (it is what rules out the divide-the-total
  approach), so it stays in the description rather than moving to the hints.
- The source shipped two examples; a third was added rather than fewer, because
  the zero case and the all-negative case are genuinely different shapes and both
  worked examples in `solutions.md` needed data of their own.
- Both guide sections walk concrete numbers now (`[6,-2,0,7]` for the zero
  argument, `[3,5,2,4]` for the two-sweep trace) — the source's did too, so this
  is fresh data in the same expository slot.
