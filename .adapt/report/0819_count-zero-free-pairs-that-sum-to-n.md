## 819 — Count No-Zero Pairs That Sum to N

- New id / title / slug: 819 / Count Zero-Free Pairs That Sum to N / `count-zero-free-pairs-that-sum-to-n`
- Old → new API: `countNoZeroPairs` → `countZeroFreePairs` (go `countZeroFreePairs`, rust `count_zero_free_pairs`, ts `countZeroFreePairs`); parameter `n` kept
- Core algorithm / difficulty: digit DP over decimal columns with carry + per-summand started flags, mod 1e9+7 / H3 (unchanged)
- Statement rewritten from spec: yes ("no-zero integer" renamed zero-free, defined from scratch with my own examples of the concept)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `n = 6` → 5 (equal pair (3,3)), `n = 13` → 10 (10 excluded by its zero), `n = 21` → 16 (two-digit summands both ways)
- Constraints: domain unchanged (`2 <= n <= 10^15`), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- **Source statement omission, fixed in the rewrite:** the reference returns the
  count modulo 10^9 + 7 (three hidden cases at 10^14–10^15 scale have expected
  values that are residues, e.g. true count 50891681057058 → expected 680700821),
  but the source statement never mentions a modulus. My statement states the
  modulus explicitly; judged semantics are unchanged (same solution, same hidden
  data), so decision 5 holds. Worth a central look in case other digit-count
  bundles have the same silent-mod habit.
- All six source solutions only ever mention the task through the entry-point
  identifier — the identifier rename covered the whole port set.
