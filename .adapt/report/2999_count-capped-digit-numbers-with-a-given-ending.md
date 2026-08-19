## 2999 — Count the Number of Powerful Integers

- New id / title / slug: 2999 / Count Capped-Digit Numbers With a Given Ending / `count-capped-digit-numbers-with-a-given-ending`
- Old → new API: `numberOfPowerfulInt` → `countCappedNumbers` (go `countCappedNumbers`, rust `count_capped_numbers`, ts `countCappedNumbers`); parameters `start`, `finish`, `limit`, `s` kept
- Core algorithm / difficulty: `f(finish) - f(start-1)` with per-length capped-prefix counting (closed form + tight digit DP) / H4 (unchanged)
- Statement rewritten from spec: yes ("powerful integer" reframed as a capped number with a given ending)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[1..1000], limit 3, "21"` → 4; `[150..600], limit 4, "33"` → 3 (floor cuts the short candidates); `[600..900], limit 5, "55"` → 0 (cap forbids every digit above the floor)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- The public-case generator brute-force cross-checks each example against a
  linear scan — cheap insurance on a counting problem.
- `countCappedNumbers` / `count_capped_numbers` were grepped against every
  source solution first: the Go port's own helpers are `countPowerful2999`
  / `countExactLen2999` (suffixed precisely to dodge collisions), so the new
  names are free.
