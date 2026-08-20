## 507 — Number of Different Subsequences GCDs

- New id / title / slug: 507 / Distinct Subsequence GCDs / `distinct-subsequence-gcds`
- Old → new API: `countDifferentSubsequenceGCDs` → `countSubsequenceGcds` (go `countSubsequenceGcds`, rust `count_subsequence_gcds`, ts `countSubsequenceGcds`); parameter `nums` kept (conventional)
- Core algorithm / difficulty: for each candidate g, gcd of all present multiples of g must equal g; harmonic enumeration with early exit / H4 (unchanged)
- Statement rewritten from spec: yes — gcd defined on kept entries; asks for the count of distinct gcd values across non-empty subsequences
- Examples newly constructed: yes (structure-preserving: **yes** — Example 1 keeps the figure's three-element, seven-row table)
  - `[12,8,3] → 5` (pair gcd 4 is new; figure's walk), `[9,15] → 3` (two entries), `[7,7] → 1` (duplicates collapse to one gcd)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7 (cpp, go, java, js, py, rust, ts)
- Figures: **labels updated** — `example-1.svg`: same table geometry (7 rows, header, footer); data chosen so the gcd pattern matches the source's row-for-row ([a,b] introduces a new gcd, [a,c] repeats c, [b,c] is the first 1, the triple repeats 1), keeping the two blue highlights where they are
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Structure-matching for the figure was a small search: need gcd(a,b) ∉
  {a,b,c}, gcd(a,c) = c, gcd(b,c) = 1. [12,8,3] satisfies all three; the
  blue-highlight rows (first 4, first 1) land in the same rows as the source.
