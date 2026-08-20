## 808 — Subtree Inversion Sum

- New id / title / slug: 808 / Subtree Sign-Flip Sum / `subtree-sign-flip-sum`
- Old → new API: `subtreeInversionSum` → `subtreeSignFlipSum` (go `subtreeSignFlipSum`, rust `subtree_sign_flip_sum`, ts `subtreeSignFlipSum`); parameters `edges`, `nums`, `k` kept
- Core algorithm / difficulty: reverse-BFS tree DP over (flip parity, distance-to-nearest-flip capped at k) / H4 (unchanged)
- Statement rewritten from spec: yes ("sign flip" replaces "inversion"; spacing rule restated from the ancestor-distance condition)
- Examples newly constructed: yes (structure-preserving: yes — same tree topologies, values changed)
  - Ex1 `[[0,1],[0,2],[1,3],[1,4],[2,5],[2,6]] nums=[2,-9,5,-3,6,-7,1] k 2` → `21`, flip {1,5}: the flip at 1 damages node 4 (6 → −6) yet still pays; Ex2 path `nums=[3,-6,2,-8,5] k 2` → `20`, flip {1,4}: node 4 is negated twice and lands back on 5; Ex3 star `nums=[-4,6,-5] k 3` → `7`, flip {2}
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (2) — node geometry untouched; fills moved to the new flip sets, before/after value labels, data comments, and captions rewritten
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a (function) compatibility ✓ stale ✓ overlap ✓

### Notes

- Ex1 was tuned for a **unique** optimal flip set (first attempt tied {1,5}
  with {0,4,6} at 20; changing node 2 from 4 to 5 broke the tie) so the figure
  shows the only optimum — check ties before drawing.
- The overlap gate failed once at 9% purely on alt-text sentences echoing the
  source's alt-text template ("each node shows its value before and after…");
  rewriting both alt texts brought it to 0%. Same trap 3486 hit.
- The optimum for every example was verified by a subsets brute force that
  also reproduced all source public cases before use.
