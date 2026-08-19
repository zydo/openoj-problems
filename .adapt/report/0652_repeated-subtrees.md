## 0652 — Find Duplicate Subtrees

- New id / title / slug: 652 / Repeated Subtrees / `repeated-subtrees`
- Old → new API: `findDuplicateSubtrees` → `repeatedSubtrees` (go
  `repeatedSubtrees`, rust `repeated_subtrees`, ts `repeatedSubtrees`);
  parameter `root` kept
- Core algorithm / difficulty: post-order description strings with null markers,
  tallied in a hash map / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes, all three — every
  example keeps the drawn tree shape and changes only the values, which is what
  keeps three example figures alive)
  - `[7,5,9,6,null,5,6,null,null,6]` → `[[5,6],[6]]`
  - `[8,3,3]` → `[[3]]`
  - `[4,6,6,5,null,5,null]` → `[[6,5],[5]]`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (`example-1.svg`, `example-2.svg`, `example-3.svg`,
  and `solution-duplicate-subtrees.svg`, renamed to
  `solution-repeated-subtrees.svg` with its reference in `solutions.md`)
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a
  compatibility ✓ stale ✓ overlap ✓

### Notes

- The values were picked so the repeats land on the *same nodes* as in the
  drawn figures: in example 1 the two positions holding the repeated
  two-node subtree and the three positions holding the repeated leaf are
  unchanged, so only text labels moved.
- Expected outputs were computed by running the reference algorithm and
  serializing its returned nodes level-order; the same script reproduces the
  source bundle's own expected outputs, confirming the codec convention.
- Inherited quirk, deliberately left alone: `comparison` is `exact`, so the
  order of the returned roots is judged, and the reference orders them by the
  most recent pre-order position of each kind. Neither the source statement nor
  this one states an order rule — changing that would change judged semantics,
  which decision 5 forbids. Worth a central decision at some point.
- Locals named `duplicates` inside the reference solutions were left as they
  are: ordinary English, not a renamed identifier, and PROTOCOL limits solution
  edits to API identifiers and comments.
