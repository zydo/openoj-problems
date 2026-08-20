## 257 — Minimize Max Distance to Gas Station

- New id / title / slug: 257 / Minimum Largest Gap After Insertions /
  `minimum-largest-gap-after-insertions`
- Old → new API: `minmaxGasDist` → `minimumLargestGap` (go
  `minimumLargestGap`, rust `minimum_largest_gap`, ts `minimumLargestGap`);
  parameter `stations` → `positions`, `k` kept
- Core algorithm / difficulty: bisection on the answer with a linear
  feasibility test (`⌈g / D⌉ - 1` insertions per run), 60 fixed rounds / H4
  (unchanged)
- Statement rewritten from spec: yes — the gas-station scenario is dropped for
  points on a line
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[0,1,2,3,4,5,6,7,8,60], k = 4` → `10.4` (one dominant run absorbs the whole
    budget), `[0,6,12,18,24,30,36,42,48,54], k = 9` → `3.0` (budget matches the
    run count exactly), `[3,5,9,10,14,15,21,22,30,31], k = 2` → `4.0` (uneven
    runs; the optimum is limited by the two runs that stay uncut)
- Constraints: domain unchanged, presentation rewritten; the `10⁻⁶` acceptance
  band is restated
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a
  compatibility ✓ stale ✓ overlap ✓

### Notes

- **How the tolerance is expressed** (the thing to copy for other
  binary-search-on-a-float problems): `problem.json` carries
  `"comparison": "close"` — a kept field — and the *statement* carries the
  acceptance band in prose. `close` resolves to `math.isclose` with both
  relative and absolute tolerance `1e-9` (`api/app/judge.py`,
  `DEFAULT_CLOSE_TOLERANCE`), which is tighter than the `10⁻⁶` the statement
  promises. That is fine in practice because every language port runs the same
  60 fixed halvings and lands on the same double, and the expected values in
  `cases.json` are the reference's own output; but a solver whose loop count
  differs could be judged against `1e-9` rather than the advertised `1e-6`.
  Pre-existing, unchanged here.
- All three new examples have exact decimal answers (`10.4`, `3.0`, `4.0`), so
  the statement can print them at five decimal places without any rounding
  question; `cases.json` still stores the reference's own floats.
