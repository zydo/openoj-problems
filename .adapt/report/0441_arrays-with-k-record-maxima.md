## 441 — Build Array Where You Can Find The Maximum Exactly K Comparisons

- New id / title / slug: 441 / Arrays With K Record Maxima / `arrays-with-k-record-maxima`
- Old → new API: `numOfArrays` → `arraysWithKRecordMaxima` (go `arraysWithKRecordMaxima`, rust `arrays_with_k_record_maxima`, ts `arraysWithKRecordMaxima`); parameters `n`, `m`, `k` kept
- Core algorithm / difficulty: DP over (length, record count, running maximum) with per-cost prefix sums / H3 (unchanged)
- Statement rewritten from spec: yes — the pseudocode block is replaced by a prose definition of "record" plus two inline worked arrays (`[2,5,5,7]`, `[4,4,4]`)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `(2,5,1) → 15`, `(3,3,2) → 12` (brute-force cross-checked), `(5,3,5) → 0` (impossible shape); source used (2,3,1)/(5,2,3)/(9,1,1); no overlap with hidden cases
- Constraints: domain unchanged, presentation identical numbers (`1..50`, `1..100`, `0..k..n`)
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (adapt_gates) verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The statement's examples must be verified against the reference, not
  asserted: my hand count for `(3,3,2)` was 11, the DP (and a brute force
  over all 27 arrays) say 12.
