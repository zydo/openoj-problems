## 3337 — Total Characters in String After Transformations II

- New id / title / slug: 3337 / Length After Repeated Letter Expansions / `length-after-repeated-letter-expansions`
- Old → new API: `lengthAfterTransformations` → `lengthAfterExpansions` (go `lengthAfterExpansions`, rust `length_after_expansions`, ts `lengthAfterExpansions`); parameters `s`, `t`, `nums` kept
- Core algorithm / difficulty: 26x26 transition-matrix power by binary exponentiation applied to the letter-frequency vector / H4 (unchanged)
- Statement rewritten from spec: yes (round/expansion framing; rule shown with fresh `e`→`fg`, `x`→`yzab` inline cases)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"cy" t=1` (c=2, y=3, else 1) → 5 (wrap-around `y`→`zab`), `"a" t=2` (a=b=2, else 1) → 3 (two-round trace `a→bc→cdd`), `"hi" t=3` all-ones → 2 (length invariance)
  - Traces verified by direct simulation (`.localonly/wave-g-01/exp_3337.py`)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (adapt_gates: starters/compatibility/stale/overlap) verify ✓ (7/7 languages, 16/16 cases) sandbox n/a (function kind) compatibility ✓ stale ✓ overlap ✓

### Notes

- LeetCode "II" suffix dropped: the bank has no 3335 twin (checked the
  live tree and every ledger shard). Same situation as 3333 in this wave.
- Example nums arrays are spelled out in full on the Input lines (26
  entries) to match how the judge passes them; the explanation text only
  cites the entries that differ from 1.
