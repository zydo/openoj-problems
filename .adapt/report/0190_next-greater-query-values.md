## 190 — Next Greater Element I

- New id / title / slug: 190 / Next Greater, Query Values / `next-greater-query-values`
- Old → new API: `nextGreaterElement` → `nextGreaterForQueries` (go `nextGreaterForQueries`, rust `next_greater_for_queries`, ts `nextGreaterForQueries`); `nums1` → `queries`, `nums2` → `nums`
- Core algorithm / difficulty: one monotonic-stack sweep of the host array plus a value→answer map, queries answered by lookup / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `queries=[6,3,9], nums=[3,7,6,9,2] → [9,7,-1]`, `[8],[8] → [-1]` (minimal), `queries=[5,1,4], nums=[1,4,5,2] → [-1,4,5]` (queries out of host order)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Family head "Next Greater" kept deliberately — the term is the standard
  textbook name for the technique, and kinship with parts II (0503) and IV
  (2454) must stay visible. Part II becomes "Next Greater, Circular Array"
  (`nextGreaterCircular`); part IV becomes "Next Greater, Second Match"
  (`secondNextGreater`). LeetCode's part III (556) is a different task and
  not in this chunk.
- `nums1`/`nums2` renamed to `queries`/`nums` — the query/host roles deserve
  names; verify calls positionally so the rename is judge-neutral.
