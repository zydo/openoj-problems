## 366 — Longest Common Subsequence

- New id / title / slug: 366 / Longest Common Subsequence / `longest-common-subsequence` — **title kept**
- Old → new API: `longestCommonSubsequence` kept (canonical algorithm name — same clause as 0072 Edit Distance and this wave's 1092); parameters `text1` → `s`, `text2` → `t` (matching 1092's adapted API, so the two-string family now shares parameter names)
- Core algorithm / difficulty: two-row LCS DP / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — figure dropped)
  - `"stone"`/`"longest"` → 3 (scattered witness "one"); `"sprint"`/`"print"` → 5 (containment); `"wolf"`/`"tram"` → 0 (no shared letter)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped `solution-lcs-table.svg` — the DP-table drawing is forced cell-for-cell by the source strings ("abcde" vs "ace" in headers and every value), same situation as 0072's dp-table figure; a table renderer would rescue this family in phase 2
- Gates: check ✓ (bundle shape; central tree run pending) verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Kinship across the wave: 1092 (SCS) and 1143 (LCS) are the twin
  two-string DP problems of this dispatch; keeping both canonical titles
  and giving both the `s`/`t` parameter pair keeps the pair recognizably
  related — the ledger's api maps now agree (`str1`→`s` there, `text1`→`s`
  here).
- The famous textbook pair `aggtab`/`gxtxayb` was available only in the
  hidden set; all three examples are homemade and computed by the
  reference, per the construction-not-borrowing rule from 0072's notes.
