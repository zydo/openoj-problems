## 265 — Preimage Size of Factorial Zeroes Function

- New id / title / slug: 265 / Factorials With K Trailing Zeros / `factorials-with-k-trailing-zeros`
- Old → new API: `preimageSizeFZF` → `countFactorialsWithKZeros` (go `countFactorialsWithKZeros`, rust `count_factorials_with_k_zeros`, ts `countFactorialsWithKZeros`)
- Core algorithm / difficulty: Legendre's five-tier count plus bisection on a monotone tally / H3 (unchanged)
- Statement rewritten from spec: yes — it names the tally `z(n)` up front and states the question as a counting problem over `n`, rather than as a preimage of a named function
- Examples newly constructed: yes (structure-preserving: n-a, no figures)
  - `k = 2 → 5` (n = 10..14), `k = 11 → 0` (skipped at 50), `k = 6 → 5` (n = 25..29, the value the jump over 25 makes reachable)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7 (cpp, go, java, js, py, rust, ts)
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 23/23 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The source's acronym entrypoint (`preimage_size_f_z_f`) is an extra rename beyond
  the usual snake_case derivation, so it has to be listed explicitly in the ledger
  `api` map; the compatibility gate derives per-language entrypoint renames from
  `problem.json` anyway, but the map is what the stale scan reads.
- Picking `k = 6` as the third example is worth copying as a pattern: choosing the
  value immediately *after* a skipped one makes the statement carry the insight
  (the tally jumps at multiples of 25) without stating the answer.
