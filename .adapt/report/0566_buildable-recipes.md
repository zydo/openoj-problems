## 566 — Find All Possible Recipes from Given Supplies

- New id / title / slug: 566 / Buildable Recipes / `buildable-recipes`
- Old → new API: `findAllRecipes` → `buildableRecipes` (go `buildableRecipes`, rust `buildable_recipes`, ts `buildableRecipes`); parameters `recipes`, `ingredients`, `supplies` kept
- Core algorithm / difficulty: Kahn's topological sort over recipe-dependency edges, unknown ingredients poison a node, cycles drop out / H3 (unchanged)
- Statement rewritten from spec: yes — pantry/cookbook framing rebuilt from the spec; the "two recipes may name each other" note kept as its own sentence
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `["soup"]` with an unused supply, `["dough","pie"]` (recipe feeds recipe), `["kombucha","starter","jam"]` (mutual-dependency cycle plus an independent makeable)
  - checked against the hidden inputs so no public case repeats one
- Constraints: domain unchanged (n, list lengths ≤ 100, names ≤ 10 lowercase chars, uniqueness and per-list-no-duplicates facts), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Hidden cases carry the source's food vocabulary ("bread", "yeast", …) and
  abstract names — they stay data-identical by rule, so the adapted bundle's
  *public* face gets fresh vocabulary while its hidden face keeps the old.
  The stale gate skips `cases.json`, so this is silent; worth knowing.
- The two-symbol-alphabet exemption means single-letter name lists
  (`["a","b"]`) are not flagged as stale literals, but the public examples
  avoid that style anyway for readability.
