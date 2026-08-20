## 450 — Check If a String Contains All Binary Codes of Size K

- New id / title / slug: 450 / Covers Every K-Bit Pattern / `covers-every-k-bit-pattern`
- Old → new API: `hasAllCodes` → `coversEveryKBitPattern` (go `coversEveryKBitPattern`, rust `covers_every_k_bit_pattern`, ts `coversEveryKBitPattern`); parameters `s`, `k` kept
- Core algorithm / difficulty: distinct length-k window set with early exit at `2^k` / H2 (unchanged)
- Statement rewritten from spec: yes — the task is phrased as coverage of all `2^k` bit strings by consecutive stretches
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"100110", k=2 → true`, `"0010111000", k=3 → true` (a rotation of the hidden de Bruijn string, verified complete), `"1101011", k=2 → false` (00 missing); brute-force cross-checked; no overlap with hidden cases
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (adapt_gates) verify ✓ (7/7 languages, 21/21 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The minimal complete string for k = 3 has length 10 (2^3 + k − 1). A linear
  de Bruijn string is a cyclic sequence with its first k − 1 characters
  repeated at the end, so rotating the linear form just re-linearizes the same
  cycle and stays complete — `"0010111000"` is `"0001011100"` (the hidden
  case) rotated by one, and brute force confirmed it covers all eight.
