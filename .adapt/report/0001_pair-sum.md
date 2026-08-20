## 1 — Two Sum

- New id / title / slug: 1 / Pair Sum / `pair-sum`
- Old → new API: `twoSum` → `pairSum` (go `pairSum`, rust `pair_sum`, ts `pairSum`)
- Core algorithm / difficulty: complement lookup in a hash map, one pass / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[4,13,6,21] target 19`, `[-5,8,14,3] target -2` (negatives), `[9,2,9,17] target 18` (repeated value)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓ (0%)

### Notes for the pilot review

- `comparison` is `sorted`, so "either ordering is accepted" is honest — worth
  checking per problem rather than copying the phrase.
- The public cases carry no `name` key: `check.py` requires exactly `input` and
  `expected`.
- The three examples were chosen to exercise different shapes (ordinary,
  negative, duplicate value) rather than to re-tell the source's three.
