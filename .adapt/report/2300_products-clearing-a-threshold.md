## 2300 — Successful Pairs of Spells and Potions

- New id / title / slug: 2300 / Products Clearing a Threshold / `products-clearing-a-threshold`
- Old → new API: `successfulPairs` → `countClearingProducts` (go `countClearingProducts`, rust `count_clearing_products`, ts `countClearingProducts`); parameters `spells`→`factors`, `potions`→`values`, `success`→`threshold` (scenario dropped)
- Core algorithm / difficulty: sort values once, per factor binary-search `ceil(threshold/f)` / H2 (unchanged)
- Statement rewritten from spec: yes — spells/potions fantasy framing replaced by plain products-and-threshold wording
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[4,2,6] x [3,1,2,5], t=12 → [2,0,3]`, `[5] x [3,3,3], t=15 → [3]` (equality clears), `[2,10] x [7,3], t=21 → [0,2]` (zero and full)
- Constraints: domain unchanged (lengths 1–10⁵, entries 1–10⁵, threshold 1–10¹⁰), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (static tier clean for this key) verify ✓ (7/7 languages, 15/15 cases) sandbox n/a (function kind) compatibility ✓ stale ✓ overlap ✓

### Notes

- Parameter renames here are scenario drops, so the stale gate forced a
  full purge of `spells`/`potions`/`success` from every solution file
  including comments. The safe order was: entry points first, then
  plurals (`spells`, `potions`) before singulars (`spell`, `potion`),
  then the adjective `successful` → `qualifying` and `sp` → `f` for
  coherence. Word-boundary regexes throughout; `success` never matches
  inside `successful` and `potion` never matches inside `potions`.
- Checked source locals first per PROTOCOL (the 0587 trap): no solution
  declares `factors`, `values`, or `threshold`.
- The compatibility gate does not rename parameters (positional passing),
  so source solutions keep their internal names — only entry points are
  staged-renamed, and they passed untouched.
