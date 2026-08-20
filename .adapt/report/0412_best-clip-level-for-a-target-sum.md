## 412 — Sum of Mutated Array Closest to Target

- New id / title / slug: 412 / Best Clip Level for a Target Sum / `best-clip-level-for-a-target-sum`
- Old → new API: `findBestValue` → `bestClipLevel` (go `bestClipLevel`, rust `best_clip_level`, ts `bestClipLevel`); `arr` → `nums`, `target` kept
- Core algorithm / difficulty: lower-bound search on the clip level, two straddling candidates with `<=` tie rule / H2 (unchanged)
- Statement rewritten from spec: yes ("mutated array" becomes clipping elements at a level)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[7,2,9] target=8` → 3 (exact hit); `[3,4,6] target=13` → 6 (untouched array, tie to the smallest level); `[4000,1000,7000,2000] target=6500` → 1833 (answer absent from the array, 6499 vs 6502)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (per-bundle static clean) verify ✓ (7/7 languages, 17/17 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run
