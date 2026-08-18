## 0268 — Missing Number

- New id / title / slug: 268 / The Missing Value / `the-missing-value`
- Old → new API: `missingNumber` → `missingValue` (go `missingValue`, rust `missing_value`, ts `missingValue`); parameter `nums` kept
- Core algorithm / difficulty: series total minus array sum; XOR of indices vs elements / H1 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[4,1,0,3] → 2`, `[1] → 0` (smallest n, missing at the bottom), `[7,5,3,1,0,2,6] → 4` (gap in the middle)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (14/14 language-variants, 15/15 cases each) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Title chosen jointly with 0287 in this chunk ("The Repeated Value") — the two
  tasks are mirror images (one absent value in 0..n vs one doubled value in
  1..n), so their names mirror too, while staying distinct from the bank's
  "Any Repeated Value" (existence, 0217) and the Lone Element family.
- The source's three explanations all restate the same sentence about n and the
  range; the rewritten examples each say only what that example adds.
- The follow-up was kept but re-posed as a question about running quantities,
  since the source's phrasing ("O(1) extra space and O(n) runtime") is a
  constraint restatement rather than a nudge.
- The XOR guide section referenced "Single Number" by name — a sibling problem,
  not generic vocabulary. It now describes the pairing idea without pointing at
  another bundle's title.
