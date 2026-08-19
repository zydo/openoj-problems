## 3486 — Longest Special Path II

- New id / title / slug: 3486 / Longest Distinct-Value Path With One Repeat / `longest-distinct-value-path-with-one-repeat`
- Old → new API: `longestSpecialPath` → `longestOneRepeatPath` (go `longestOneRepeatPath`, rust `longest_one_repeat_path`, ts `longestOneRepeatPath`); parameters `edges`, `nums` kept as conventional identifiers
- Core algorithm / difficulty: DFS carrying the root-to-node trail with two sliding window starts (strict + one-repeat) restored on backtrack / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes — same tree topologies, only values and edge weights changed)
  - Ex1: 9-node tree, two winning paths tie at 11 (3 vs 4 nodes), both spend their one allowed repeat
  - Ex2: 4-node star, plain 2-node winner
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: regenerated (2) — coordinates, node ids, and label positions reused; values, weights, winning-path
  highlights, annotation, and captions re-emitted for the new data. The original
  example-1 tinted node 0 with the blue path's fill although node 0 is on no
  winning path; the regeneration fixes that (blue = {1,2,4}, gold = {3,6,8},
  white = {0,5,7}).
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox n/a (function) compatibility ✓ stale ✓ overlap ✓

### Notes

- **Family naming for the sibling**: 3425 Longest Special Path (I) is still in
  `.adapt/part-g-remaining.json`. The pre-agreed scheme this bundle
  establishes: I → "Longest Distinct-Value Path" (`longestDistinctPath`),
  II → this bundle. Whoever takes 3425 should keep the family recognizable per
  ADAPT.md; flagged to the main agent for the families file.
- The overlap gate initially failed at 9% — the shared phrases were figure alt
  text mirroring the source's alt sentences and two hints that leaned on the
  source's wording ("any downward window ending at the current node"). Alt
  texts and hints rewritten; final overlap 0%.
- Expected values computed with the adapted `solution.py` and cross-checked
  against an independent brute force over every downward path (which itself was
  validated against both source public cases).
