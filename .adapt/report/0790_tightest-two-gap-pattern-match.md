## 790 — Shortest Matching Substring

- New id / title / slug: 790 / Tightest Two-Gap Pattern Match / `tightest-two-gap-pattern-match`
- Old → new API: `shortestMatchingSubstring` → `tightestMatch` (go `tightestMatch`, rust `tightest_match`, ts `tightestMatch`); parameters `s`, `p` kept
- Core algorithm / difficulty: split at the two stars, occurrence lists per literal run, latest-ending-in-time partners via binary search, monotone middle-partner array for the three-run case / H3 (unchanged)
- Statement rewritten from spec: yes (anchored-window semantics of the star gaps restated as beginning/middle/end spelling)
- Examples newly constructed: yes (structure-preserving: n/a — no figure); four examples mirroring the source's four shapes
  - `"cabdcabe" p="ab*d*e"` → 7 (three runs, gap-empty then "cab"), `"mppnqmppnq" p="pq**zz"` → -1 (missing run), `"w" p="**"` → 0 (all runs empty), `"hellohelloworld" p="*llo*"` → 3 (single run)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (per-bundle static tier clean) verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The DP brute force reaches anchored matches by set-of-positions forward
  reachability per start; 600 random inputs agreed with the reference
  (`exp_3455.py`). Careless candidate patterns with one star crash the
  three-way split — the guarantee "exactly two stars" is load-bearing in
  any local oracle.
