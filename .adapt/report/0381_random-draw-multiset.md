## 0381 — Insert Delete GetRandom O(1) - Duplicates allowed

- New id / title / slug: 381 / Random Draw Multiset / `random-draw-multiset`
- Old → new API: class `RandomizedCollection` → `RandomDrawMultiset`;
  `getRandom` → `draw`; `insert`/`remove` **kept** (universal vocabulary)
- Core algorithm / difficulty: occurrence array + per-value sorted slot lists,
  swap-with-last removal / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - three traces: the self-copy case (removing a 3 whose copy survives at
    slot 0), a genuine tail-move reorder with a duplicate insert reporting
    `false`, and empty-then-refill
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: python3 + java (design problems offer only these)
- Figures: none
- Gates: compatibility ✓ verify ✓ (2/2 languages, 16/16 cases) sandbox
  deferred to the batch run stale ✓ overlap ✓

### Notes

- Family naming decided with 0380 (adapted immediately before it): Random
  Draw Set / Random Draw Multiset, `draw` in both, so the I/II kinship stays
  visible in the directory listing and the API.
- Unlike 0380, this one is judged **deterministically** (the judge pins the
  array semantics: append on insert, leftmost-occurrence removal with
  tail-fill, `a[0]` on draw). The judging-rule section of the statement is
  contract text — rewritten sentence by sentence but with the three rules
  kept semantically exact, since any drift there would change what a correct
  solution must return.
- Expected values for the three public traces were produced by driving the
  source reference (`RandomizedCollection`) through the new action lists —
  including the `true`/`false` returns, which is where hand computation
  would have bitten.
