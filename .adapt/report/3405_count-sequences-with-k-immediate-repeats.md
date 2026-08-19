## 3405 — Count the Number of Arrays with K Matching Adjacent Elements

- New id / title / slug: 3405 / Count Sequences With K Immediate Repeats / `count-sequences-with-k-immediate-repeats`
- Old → new API: `countGoodArrays` → `countSequencesWithRepeats` (go `countSequencesWithRepeats`, rust `count_sequences_with_repeats`, ts `countSequencesWithRepeats`); parameters `n`, `m`, `k` kept
- Core algorithm / difficulty: closed form `m · C(n-1, k) · (m-1)^(n-1-k)` via factorial/inverse-factorial tables mod 1e9+7 / H3 (unchanged)
- Statement rewritten from spec: yes ("immediate repeat" coined and defined in the statement, counting task restated from scratch)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `n=3,m=2,k=2` → 2 (all-copy extreme), `n=4,m=2,k=1` → 6 (all six listed), `n=4,m=3,k=0` → 24 (no-repeat extreme, counted by construction)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Expected values from `.localonly/wave-g-02/cases_3405.py`: closed form cross-checked against full enumeration for every source case with `n <= 8`.
- The three examples deliberately cover `k = n - 1`, interior `k`, and `k = 0`, the three regimes the source guide discusses.
