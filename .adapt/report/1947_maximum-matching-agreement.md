## 1947 — Maximum Compatibility Score Sum

- New id / title / slug: 1947 / Maximum Matching Agreement / `maximum-matching-agreement`
- Old → new API: `maxCompatibilitySum` → `maxMatchingAgreement` (go `maxMatchingAgreement`, rust `max_matching_agreement`, ts `maxMatchingAgreement`); parameters `students`, `mentors` kept (conventional)
- Core algorithm / difficulty: bitmask DP over taken mentors with precomputed agreement table / H2 (unchanged)
- Statement rewritten from spec: yes (survey restated as a questionnaire with answer sheets)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[[0,1,1],[1,0,0],[1,1,0]]` vs `[[1,1,0],[0,1,1],[0,0,1]] → 7` (non-greedy optimum 3+1+3), crossed-perfect `[[0,1],[1,0]]` vs `[[1,0],[0,1]] → 4`, identity `…→ 8`
- Constraints: domain unchanged (`m, n <= 8`, 0/1 entries), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: compatibility ✓ stale ✓ overlap ✓ verify ✓ (7/7 languages, 18/18 cases) check ✓ (per-bundle static)

### Notes

- Planned example 2 as an all-zero case, but the reference (plus a
  permutation brute force) showed the swap pairing scores 4 — my "zero"
  mentors were exactly the students' sheets reordered. Kept the corrected
  version; it demonstrates the crossed matching better anyway. Verified
  every expectation against the brute force.
- The stale gate collects no literals for 0/1-array problems (two-symbol
  alphabet is excluded by design), so example data only had to dodge the
  hidden cases.
