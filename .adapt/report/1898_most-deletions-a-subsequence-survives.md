## 1898 — Maximum Number of Removable Characters

- New id / title / slug: 1898 / Most Deletions a Subsequence Survives / `most-deletions-a-subsequence-survives`
- Old → new API: `maximumRemovals` → `mostDeletionsSurvived` (go `mostDeletionsSurvived`, rust `most_deletions_survived`, ts `mostDeletionsSurvived`); parameters `s`, `p`, `removable` kept (conventional)
- Core algorithm / difficulty: binary search on k (upper-mid) with a greedy subsequence check over a removed-position set / H3 (unchanged)
- Statement rewritten from spec: yes — the delete-the-first-k mechanic restated as "applying the first k deletions", subsequence defined by selection-in-order rather than deletion-without-reordering
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"bacb"/"bc"/[0,2] → 0` (first deletion kills it), `"bacbc"/"bc"/[1,0,3] → 2`, `"aabb"/"ab"/[0,2] → 2` (whole array usable)
- Constraints: domain unchanged (|p| ≤ |s| ≤ 10⁵, r < |s|, distinct indices, lowercase), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- First overlap failure of the wave: "You are given two strings s and p,
  where p is a subsequence of s" is 3 shared shingles on its own. The fix
  was restating the premise ("p occurs inside s as a subsequence — a
  selection of s's characters, kept in their original order") rather than
  swapping words; the subsequence *definition* sentence went the same way.
- Brute-force cross-check (all k, filter survivors) backs each public
  expectation.
