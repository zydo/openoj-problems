## 648 — Next Greater Element IV

- New id / title / slug: 648 / Next Greater, Second Match / `next-greater-second-match`
- Old → new API: `secondGreaterElement` → `secondNextGreater` (go `secondNextGreater`, rust `second_next_greater`, ts `secondNextGreater`); parameter `nums` kept
- Core algorithm / difficulty: dual monotonic stacks — first-match stack graduating batches (reversed) into a second-match stack / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[3,1,5,2,8] → [8,2,-1,-1,-1]` (second match smaller than the first), `[1,7,2,8,3,9] → [2,9,3,-1,-1,-1]`, `[2,2,5] → [-1,-1,-1]` (strictness under duplicates)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Third member of the Next Greater family (0496 "Query Values", 0503
  "Circular Array", 2454 "Second Match") — all three adapted in one sitting
  with the shared family head.
- The statement defines the task operationally ("second value on the list of
  greater values, in order of appearance") rather than via the source's
  index-quantifier form — same semantics, independent presentation.
