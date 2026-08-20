## 62 — Two Sum II - Input Array Is Sorted

- New id / title / slug: 62 / Pair Sum In Order / `pair-sum-in-order`
- Old → new API: `twoSum` → `pairSumInOrder` (go `pairSumInOrder`, rust `pair_sum_in_order`, ts `pairSumInOrder`); parameter `numbers` → `nums`
- Core algorithm / difficulty: converging two pointers over a sorted array / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[3,8,12,19] target 20 → [2,3]`, `[-13,-6,5,9,17] target 3 → [2,4]` (negatives), `[4,4,7,7,7] target 8 → [1,2]` (repeated value)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- **Family: `two-sum`, sibling of the finished `0001_pair-sum`.** The kinship is
  carried by three deliberate echoes of the pilot's statement: the parameter is
  `nums` in both (the source called it `numbers`), the "A position cannot be
  paired with itself … **exactly one** such pair" sentence has the same shape,
  and the duplicate-value example closes with the same "so pairing them is
  legal" note. The titles differ only by the qualifier that names the extra
  hypothesis, which is what makes the pair mutually distinguishable.
- The source's "constant extra space" requirement is a *restriction on
  solutions*, not on the data, so it stays in the description rather than the
  constraints block — and Hint 1 leans on it by pointing back at the hash-map
  sibling, which is the honest reasoning path for a solver who has already seen
  Pair Sum.
- `comparison` is `exact` here (it is `sorted` in the pilot), so the statement
  must say "report the smaller position first" rather than "either ordering is
  accepted". Worth re-reading the field per problem: the two siblings disagree.
