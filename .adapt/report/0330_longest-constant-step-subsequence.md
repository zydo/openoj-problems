## 330 — Longest Arithmetic Subsequence

- New id / title / slug: 330 / Longest Constant-Step Subsequence / `longest-constant-step-subsequence`
- Old → new API: `longestArithSeqLength` → `longestConstantStepSubsequence` (go `longestConstantStepSubsequence`, rust `longest_constant_step_subsequence`, ts `longestConstantStepSubsequence`); parameter `nums` kept
- Core algorithm / difficulty: DP per endpoint keyed by common difference / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[5,10,15,20]` → 4 (whole array qualifies), `[7,12,3,8,13]` → 3 (must skip ahead), `[16,12,8,3,4]` → 4 (negative step)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Family kinship: 1218 became `Longest Fixed-Step Subsequence` (step given), so
  1027 is `Longest Constant-Step Subsequence` (step free but self-consistent) —
  related, distinguishable; 0446 kept "Arithmetic" (`Arithmetic Subsequence
  Count`), which remains distinct from both.
- "Arithmetic" appears nowhere in the adapted bundle; the statement defines
  "constant-step" inline instead, and the one comment in solution.py naming the
  old term was rewritten.
