## 1035 — Uncrossed Lines

- New id / title / slug: 1035 / Most Non-Crossing Matches / `most-non-crossing-matches`
- Old → new API: `maxUncrossedLines` → `mostNonCrossingMatches` (go `mostNonCrossingMatches`, rust `most_non_crossing_matches`, ts `mostNonCrossingMatches`); parameters `nums1`, `nums2` kept
- Core algorithm / difficulty: LCS over prefixes with two rolling rows / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes)
  - `[3,7,5]` vs `[3,5,7]` → 2 — same match topology as the source's figure example (vertical 0-0, diagonal 1-2, rejected 2-1), so both figures kept their geometry
  - `[4,8,6,4,8]` vs `[9,8,4,6,8,4]` → 3, `[5,9,12,9,5]` vs `[5,8,11,5,9]` → 2 (repeated values, short LCS)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (`example-1.svg` values/caption; `solution-uncrossed-lines.svg` renamed to `solution-parallel-matches.svg` — see notes)
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The stale gate caught the solution figure's *filename*: it carried the source
  slug (`solution-uncrossed-lines.svg`), which is a distinctive identifier in
  any file including markdown references. Renaming the figure to
  `solution-parallel-matches.svg` resolved it. Check figure filenames for slug
  fragments before running gates.
- Title avoids 1143's kept `Longest Common Subsequence` (unavoidable generic
  term) while the hints still steer toward recognizing the LCS.
- Example 1's values were chosen so the crossing topology (which the figure
  draws structurally) is identical to the source's — labels and captions only.
