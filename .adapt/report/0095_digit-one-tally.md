## 95 — Number of Digit One

- New id / title / slug: 95 / Digit One Tally / `digit-one-tally`
- Old → new API: `countDigitOne` → `digitOneTally` (go `digitOneTally`, rust `digit_one_tally`, ts `digitOneTally`); parameter `n` kept
- Core algorithm / difficulty: per-decimal-place counting via higher/current/lower split / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `21 → 13` (followable by enumeration), `1000 → 301` (all three branches of the case split), `7 → 1` (minimal)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: compatibility ✓ stale ✓ overlap ✓ (verify 7/7 languages, 18/18 cases)

### Notes

- The digit itself (`1`) and the range `0..n` are the functional core and
  stay; only the framing changed. `1000` was chosen as the worked example
  because its three lower places each hit the `current == 0` branch while the
  thousands place hits `current == 1`, so one example exercises the whole
  case analysis — the guide leans on it the same way.
- Expected values cross-checked against a brute-force digit count, not just
  the reference.
