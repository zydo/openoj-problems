## 0432 — All O`one Data Structure

- New id / title / slug: 432 / Constant-Time Frequency Extremes /
  `constant-time-frequency-extremes`
- Old → new API: `AllOne` → `FrequencyExtremes`; `inc` → `increase`; `dec`
  → `decrease`; `getMaxKey` → `highestKey`; `getMinKey` → `lowestKey`
- Core algorithm / difficulty: hash-indexed keys in ordered count buckets /
  H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a)
  - two keys exchange unique frequency extremes; one key falls to zero and
    leaves an empty structure
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: Java, Python
- Figures: none
- Gates: check ✓; verify ✓ (2/2 languages, 15/15 cases); sandbox pending
  (central design batch); compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- Hidden cases differ only in their sanctioned class and method action names.
- Public queries avoid tied extremes because comparison is exact even though
  the contract permits returning any key at the requested count.
