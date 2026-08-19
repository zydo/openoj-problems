## 3575 — Maximum Good Subtree Score

- New id / title / slug: 3575 / Digit-Disjoint Subtree Scores / `digit-disjoint-subtree-scores`
- Old → new API: `goodSubtreeSum` → `digitDisjointScoreSum` (go `digitDisjointScoreSum`, rust `digit_disjoint_score_sum`, ts `digitDisjointScoreSum`); parameters `vals`, `par` kept
- Core algorithm / difficulty: per-node DP over 10-bit digit masks joined by max-plus subset convolution (3^10 per child edge) / H4 (unchanged)
- Statement rewritten from spec: yes ("good" replaced by the defined property digit-disjoint; per-node best array renamed `best`)
- Examples newly constructed: yes (structure-preserving: no — see notes; all three use 4-node trees)
  - `[4,7,6,9]` chain → `72` (all digits differ; best = suffix sums), `[7,7,3,9]` star → `38` (duplicate digit 7 forces a drop at the root), `[33,4,7,2]` chain → `37` (33 repeats a digit and is never selectable)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: regenerated (2) — same visual language (circles, node ids, blue per-node scores, caption), new geometry: 4-node chain and a 3-leaf star. The source's 2- and 3-node figures could not be label-edited (see notes); ex3 has no figure, like the source's ex4
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a (function) compatibility ✓ stale ✓ overlap ✓

### Notes

- **par-array trap for parent-array problems**: the stale gate flags the
  literal `[-1,0]`, `[-1,0,0]`, `[-1,0,1]` (4+ chars inside brackets), and
  these are the *forced* parent arrays of every 2-node tree and every 3-node
  star/chain. No label edit can dodge them, so the three figures were
  regenerated for 4-node trees (`[-1,0,1,2]`, `[-1,0,0,0]`) in the source's
  visual style. Anyone adapting another `par`-input problem should plan
  4+-node examples from the start.
- Per-node best values for the figures came from the same subsets brute force
  that cross-checked the reference (which first reproduced all source public
  cases); public inputs checked against the hidden set for duplicates.
