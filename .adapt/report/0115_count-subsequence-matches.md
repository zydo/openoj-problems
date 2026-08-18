## 0115 — Distinct Subsequences

- New id / title / slug: 115 / Count Subsequence Matches / `count-subsequence-matches`
- Old → new API: `numDistinct` → `countSubsequenceMatches`
- Core algorithm / difficulty: counting DP over prefixes of both strings, rolled to one array / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes — `banana`/`bana` → 4, `aaa`/`aa` → 3, `ab`/`abb` → 0 (target longer than source)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none in source
- Gates: check ✓ verify ✓ compatibility ✓ stale ✓ overlap ✓ sandbox pending (batch run)

### Notes

statement.md and solutions.md were missing; written from the spec and the surviving reference solution.

Recovered by the main agent after the chunk agents hit the 5-hour quota
mid-problem; the surviving artifacts were kept as written and only the
missing pieces authored, with all gates run fresh.
