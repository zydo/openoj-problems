## 1157 — Online Majority Element In Subarray

- New id / title / slug: 1157 / Range Majority Queries /
  `range-majority-queries`
- Old → new API: class `MajorityChecker` → `RangeMajority`; `query` and
  parameters `left`/`right`/`threshold`/`arr` kept (generic query vocabulary)
- Core algorithm / difficulty: Boyer-Moore voting segment tree for the
  candidate, per-value sorted position lists with binary search for
  verification / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[3,3,8,3,8,3,3]`: full-range hit, prefix hit, and a balanced
    `[3,8,3,8]` returning -1; `[5,9,9,5,9]`: whole-array majority, a
    two-cell -1, and a single-cell query answering itself
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: python + java (design offers only these)
- Figures: none
- Gates: check ✓ verify ✓ (2/2 languages, 16/16 cases) compatibility ✓ stale ✓
  overlap ✓ sandbox pending (batch run)

### Notes

- First draft of Example 1 used threshold 2 on a length-4 range — that
  violates `2 * threshold > right - left + 1`. When inventing query
  examples, check the quota inequality per query, not just per array.
- The hidden cases embed the class name once per case in `actions`; renamed
  in place, 14 cases, data untouched (1.4 MB cases file).
