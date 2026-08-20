## 235 — Maximum Length of Repeated Subarray

- New id / title / slug: 235 / Longest Shared Run / `longest-shared-run`
- Old → new API: `findLength` → `longestSharedRun` (go `longestSharedRun`, rust `longest_shared_run`, ts `longestSharedRun`); parameters `nums1`/`nums2` → `first`/`second`
- Core algorithm / difficulty: suffix DP over pairs of starting positions, rolled to one row / H3 (unchanged)
- Statement rewritten from spec: yes — it names the object ("a run") and spells out what sharing means (same values, same order, nothing skipped), which the source left to the word "subarray"
- Examples newly constructed: yes (structure-preserving: n-a — no figures)
  - `[6,2,8,5]` / `[1,6,2,8]` → 3, `[3,3,3]` / `[3,3]` → 2 (duplicates, shorter array caps), `[9,4]` / `[5,7]` → 0
- Constraints: domain unchanged, presentation rewritten (the two length bounds split onto their own lines, the value bound stated per array)
- Skeletons regenerated: all 7 (cpp, go, java, js, py, rust, ts)
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- `first`/`second` were checked against every source solution before the rename:
  the source locals are only `m`, `n`, `dp`, `best`, `cur`/`new`, `i`, `j`, so
  the api map can be applied to the staged source solution without collision.
- The source's `nums1`/`nums2` appear inside solution *comments* as well as in
  code, so the word-boundary rename has to cover comments or the stale gate
  reports the parameter in every language at once.
