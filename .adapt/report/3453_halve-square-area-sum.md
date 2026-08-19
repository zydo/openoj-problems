## 3453 — Separate Squares I

- New id / title / slug: 3453 / Halve the Square Area Sum / `halve-square-area-sum`
- Old → new API: `separateSquares` → `halveAreaSum` (go `halveAreaSum`, rust `halve_area_sum`, ts `halveAreaSum`); parameter `squares` kept
- Core algorithm / difficulty: binary search on the line height, per-square clipped-span area test, leftmost-qualifying steering for plateaus / H3 (unchanged)
- Statement rewritten from spec: yes (per-square tally semantics — "a region covered by two squares counts twice" — restated from the task)
- Examples newly constructed: yes (structure-preserving: yes)
  - `[[5,7,3]]` → 8.5 (lone square, mid-height), `[[0,0,2],[4,3,2]]` → 2.0 (equal disjoint squares, plateau returns the lower edge), `[[0,0,4],[2,2,2]]` → 7/3 (inner square counts again; verified `28/3 + 2/3 = 10` each side)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: example-1 dropped (new first example is the no-figure lone square); example-2 and example-3 **regenerated** from the family's documented mapping (axes origin, fixed px-per-unit scale, tick grid, dashed balance line, per-side area labels) with the scale re-fit to each new y-range; rendered PNGs verified by image analysis (rsvg-convert + magick re-encode — the raw rsvg output failed the remote analyzer once, re-encoding fixed it)
- Gates: check ✓ (per-bundle static tier clean) verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓ (after two alt-text rewordings, see notes)

### Notes

- The overlap gate counts image alt text as prose, and the shared token run
  "figures example svg" from the link path welds alt text to whatever
  follows; an alt ending in "above and below." plus the path produced
  5 shared shingles on the first try. Keep figure alts lexically distant
  from the source's alts, not just semantically.
- Expected values must be full-precision floats: `close` comparison uses
  DEFAULT_CLOSE_TOLERANCE 1e-9, so `round(v, 5)` in a public case would
  fail. Exact-arithmetic oracles (Fractions) for both twins live in
  `.localonly/wave-g-03/exp_3453.py` / `exp_3454.py`; 400 random inputs
  each agreed with the reference.
- Twin titling: "Halve the Square Area Sum" vs "... Union" keeps the pair
  recognizably kin while naming the semantic that separates them.
