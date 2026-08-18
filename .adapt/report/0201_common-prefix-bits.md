## 0201 — Bitwise AND of Numbers Range

- New id / title / slug: 201 / Common Prefix Bits / `common-prefix-bits`
- Old → new API: `rangeBitwiseAnd` → `commonPrefixBits` (go `commonPrefixBits`, rust `common_prefix_bits`, ts `commonPrefixBits`); parameters `left`, `right` kept
- Core algorithm / difficulty: common binary prefix of the endpoints, via shift-until-equal or Kernighan clearing / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `18..21 → 16` (prefix survives), `6..8 → 0` (range crosses a power of two), `13..13 → 13` (one-element range)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: compatibility ✓ stale ✓ overlap ✓ (verify 14/14 solution files, 17/17 cases)

### Notes

- First reminder that expected values must come from a *correct* reference:
  a throwaway accumulator seeded with `1` instead of the first element
  produced a plausible wrong answer (9..12 → 0 instead of 8) and the
  compatibility gate caught it immediately. Always re-derive with a clean
  function, and prefer the source's own algorithm over ad-hoc arithmetic.
