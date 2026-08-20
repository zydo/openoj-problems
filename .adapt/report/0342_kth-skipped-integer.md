## 342 — Missing Element in Sorted Array

- New id / title / slug: 342 / Kth Skipped Integer / `kth-skipped-integer`
- Old → new API: `missingElement` → `kthSkippedInteger` (go `kthSkippedInteger`, rust `kth_skipped_integer`, ts `kthSkippedInteger`); parameters `nums`, `k` kept (conventional)
- Core algorithm / difficulty: binary search on a monotone shortfall function / H2 (unchanged)
- Statement rewritten from spec: yes — framed as "counting upward from the first entry, which integers get skipped", and states outright that the count continues past the last entry (the source left that implicit in an example)
- Examples newly constructed: yes (structure-preserving: n-a, no figures)
  - `[2,3,6,7,11], k=2 → 5` (gap inside), `[5,6,7], k=4 → 11` (gapless, answer past the end), `[1,10], k=6 → 7` (one wide gap)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The source solution's local helper is called `missing`, which is a prefix of the
  renamed API name `missing_element`. No collision: the stale gate uses word
  boundaries, so a shorter local surviving inside a renamed longer identifier is
  safe. Worth knowing before reflexively renaming such locals — the protocol
  forbids editing the solution beyond API names anyway.
