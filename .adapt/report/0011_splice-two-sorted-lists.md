## 11 — Merge Two Sorted Lists

- New id / title / slug: 11 / Splice Two Sorted Lists / `splice-two-sorted-lists`
- Old → new API: `mergeTwoLists` → `spliceTwoSortedLists` (go `spliceTwoSortedLists`, rust `splice_two_sorted_lists`, ts `spliceTwoSortedLists`); parameters `list1`, `list2` → `first`, `second`
- Core algorithm / difficulty: node-relinking merge, loop-with-dummy and recursive variants / H1 (unchanged)
- Statement rewritten from spec: yes (after one overlap round — see notes)
- Examples newly constructed: yes (structure-preserving: **yes** — example 1 keeps two 3-node lists and a 6-node result)
  - `[3,5,8] + [1,6,9] → [1,3,5,6,8,9]`, `[] + [4] → [4]`, `[2,9] + [1,3,3,8] → [1,2,3,3,8,9]`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: **labels updated** — 12 digit nodes and 3 structural comments; zero
  geometry edits. The example was chosen tie-free and so that each result node's
  source (the drawn outline color) matches the input it must come from, keeping
  the color encoding truthful without touching a stroke attribute.
- Gates: check ✓ verify ✓ (7/7 languages × 2 variants, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Overlap gate caught two paraphrases in one pass: my figure alt-text was the
  source's caption with one word swapped, and my opening sentence kept
  "you are given the heads of two". Both rewritten; the lesson is that image
  captions are prose — they belong to the rewrite budget.
- The source figure colors the first result node as coming from `list2` even
  though the reference merge prefers `list1` on ties; a tie-free example makes
  the question moot.
