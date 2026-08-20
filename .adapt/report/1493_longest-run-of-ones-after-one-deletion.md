## 1493 — Longest Subarray of 1's After Deleting One Element

- New id / title / slug: 1493 / Longest Run of Ones After One Deletion / `longest-run-of-ones-after-one-deletion`
- Old → new API: `longestSubarray` → `longestRun` (go `longestRun`, rust `longest_run`, ts `longestRun`); parameter `nums` kept
- Core algorithm / difficulty: sliding window holding at most one zero, answer = best width − 1 (all-ones special case) / H2 (unchanged)
- Statement rewritten from spec: yes — deletion stated as compulsory removal of one chosen element, runs instead of subarrays
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[1,0,1,1,0,1] → 3` (weld across one zero), `[1,1,0,0,1,1,1,0,1,1] → 5` (double zero cannot be bridged), `[1,1,1,1,1] → 4` (compulsory deletion on all ones) — cross-checked by deleting each index in turn
- Constraints: domain unchanged (1 ≤ length ≤ 10⁵, binary values), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- None beyond the pilot's; the all-ones example had to dodge the hidden
  case `[1,1,1,1]`, so it uses length 5.
