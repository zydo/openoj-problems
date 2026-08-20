## 88 — Contains Duplicate

- New id / title / slug: 88 / Any Repeated Value / `any-repeated-value`
- Old → new API: `containsDuplicate` → `anyRepeatedValue` (go `anyRepeatedValue`, rust `any_repeated_value`, ts `anyRepeatedValue`); parameter `nums` kept
- Core algorithm / difficulty: hash set membership, one pass / H1 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[8,3,-1,3] → true`, `[8,3,-1,0,5] → false` (all distinct), `[-4,-4] → true` (minimal pair)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: compatibility ✓ stale ✓ overlap ✓ (verify 7/7 languages, 15/15 cases)

### Notes

- Nothing surprising; the source's hidden set includes a 10⁵-length
  all-equal case, which passes untouched under the renamed API.
