## 0050 — Pow(x, n)

- New id / title / slug: 50 / Raise To A Power / `raise-to-a-power`
- Old → new API: `myPow` → `raiseToPower` (go `raiseToPower`, rust `raise_to_power`, ts `raiseToPower`)
- Core algorithm / difficulty: exponentiation by squaring, iterative and recursive / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `x = 3.0, n = 5` → 243 (odd exponent), `x = 1.5, n = 4` → 5.0625 (pure squarings, non-integer base), `x = 2.0, n = -3` → 0.125 (negative exponent)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages × 2 variants, 22/22 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Multi-solution bundle: variant ids `fast_pow_iterative` and
  `fast_pow_recursive` kept unchanged, and both `solutions.md` section
  headings still resolve to them by token containment. `verify_solution.py`
  runs 14 ports (7 languages × 2 variants); all green.
- The O(log n) demand moved from the source's description body into the
  second paragraph of the description, stated as a cost argument ("one
  multiplication per step of the exponent") rather than a bare requirement —
  same judged semantics, since the limits already enforce it.
- `comparison` is `close`; expecteds still came from running the reference
  (`243.0`, `5.0625`, `0.125` — all exact in binary floating point, so no
  tolerance questions arise for these three).
- The n = -2³¹ overflow caveat stays in Hint 3 where the source had it; the
  guide keeps the port-specific widening note, which is genuinely useful to
  anyone porting between the languages.
