## 813 — Once Twice

- New id / title / slug: 813 / Lone Element and One Pair / `lone-element-and-one-pair`
- Old → new API: `onceTwice` → `loneElementAndPair` (go `loneElementAndPair`, rust `lone_element_and_pair`, ts `loneElementAndPair`); parameter `nums` kept
- Core algorithm / difficulty: frequency table over the rigid once/twice/thrice pattern (per-bit mod-3 automaton noted for O(1) space) / H3 (unchanged)
- Statement rewritten from spec: yes (filling-pattern framing replaces the bullet-per-rule list; the O(n)/O(1) requirement is restated, as in the source)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[3,8,3,3,8,8,1,5,5]` → `[1,5]`, `[9,4,4]` → `[9,4]` (shortest legal array), `[-2,-2,-2,-7,-7,6]` → `[6,-7]` (negatives)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a (function) compatibility ✓ stale ✓ overlap ✓

### Notes

- **Family naming**: title keeps the kinship of the `lone` family in
  `.adapt/families.json` — 0136 "Lone Element", 0137 "Lone Element Among
  Triples", 0260 "Two Lone Elements" — now joined by "Lone Element and One
  Pair" (single occurrence + one pair among triples). Flagged for the families
  file.
- The overlap gate failed at 10% on the first draft: mirroring the source's
  "You are given an integer array... In this array:" lead-in plus its
  one-rule-per-bullet list is paraphrase even with the words changed.
  Restructuring (filling-pattern prose, reordered constraint bullets) fixed
  it. Rule-shape matters as much as vocabulary in short statements.
- The statement's `O(1)` extra-space demand is aspirational in the source too
  (its reference is a Counter); semantics preserved as-is.
