## 0600 — Non-negative Integers without Consecutive Ones

- New id / title / slug: 600 / No Adjacent One-Bits / `no-adjacent-one-bits`
- Old → new API: `findIntegers` → `countNoAdjacentOnes` (go `countNoAdjacentOnes`,
  rust `count_no_adjacent_ones`, ts `countNoAdjacentOnes`); parameter `n` kept
- Core algorithm / difficulty: Fibonacci digit counting over the binary
  representation / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `n = 10` (with a full binary table), `n = 20`, `n = 10⁹` (scale)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a
  compatibility ✓ stale ✓ overlap ✓

### Notes

- Introduced the word *sparse* in the statement to name the property once
  instead of repeating "no two adjacent ones"; the title still spells the
  property out.
- The `n = 10⁹` example doubles as a performance signal: any exponential or
  per-integer approach visibly cannot produce 2178309 by enumeration.
- Small-value hidden cases (1 through 8, …) are untouched; the public examples
  were chosen outside the source's public set {1, 2, 5}.
