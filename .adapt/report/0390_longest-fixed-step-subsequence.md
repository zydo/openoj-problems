## 390 — Longest Arithmetic Subsequence of Given Difference

- New id / title / slug: 390 / Longest Fixed-Step Subsequence / `longest-fixed-step-subsequence`
- Old → new API: `longestSubsequence` → `longestStepSubsequence` (go `longestStepSubsequence`, rust `longest_step_subsequence`, ts `longestStepSubsequence`); parameter `arr` kept, `difference` → `step`
- Core algorithm / difficulty: hash-map DP keyed by ending value, `dp[x] = dp[x - step] + 1` / H2 (unchanged)
- Statement rewritten from spec: yes ("arithmetic sequence" dropped; picks stride by exactly `step`)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[4,7,10,13] step 3` → 4 (whole array is the chain); `[6,3,9,1] step 2` → 1 (no successor anywhere); `[8,1,6,4,2,5,0] step -2` → 5 (negative step threading past noise)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (per-bundle static clean) verify ✓ (7/7 languages, 19/19 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- `step` and `chain` appear only in source comments, never as identifiers,
  so the `difference` → `step` parameter rename had no 0587-style trap.
