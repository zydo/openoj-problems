## 655 — Most Profitable Path in a Tree

- New id / title / slug: 655 / Best Root-to-Leaf Walk Against a Rival / `best-root-to-leaf-walk-against-a-rival`
- Old → new API: `mostProfitablePath` → `bestWalkIncome` (go `bestWalkIncome`, rust `best_walk_income`, ts `bestWalkIncome`); parameters `edges`, `bob`, `amount` kept
- Core algorithm / difficulty: BFS orientation + Bob's fixed arrival times up the parent chain + one accumulation sweep with the three-way arrival comparison (full / half / nothing), max over leaves / H3 (unchanged)
- Statement rewritten from spec: yes (gate/price/reward skin replaced by "collect the node's value — first arriver takes it, ties split"; Alice/Bob kept as generic walker names)
- Examples newly constructed: yes (structure-preserving: yes, renumbered)
  - `edges [[0,2],[2,4],[2,1],[1,3]] bob 1 amount [-4,-2,6,8,2]` → `7` (same drawn shape as source E1 with ids permuted, root pinned at 0; exercises pay/split/free/full), `[[0,1]] bob 1 [-4210,3674]` → `-4210` (two-node tree, values changed), star `[[0,1],[0,2],[0,3]] bob 3 [-6,10,12,8]` → `6` (no figure; rival on an unused branch)
  - expected values cross-checked against a brute-force path enumerator
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — all three SVGs renumbered (1→2, 2→4, 3→1, 4→3; root stays 0), amounts remapped (−2→−4, +4→+6, −4→−2, +6→+8), walk captions, timeline notes, and leaf-income arithmetic recomputed; edge/arrow geometry untouched
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- First chained-replacement bug of the chunk: relabeling amounts −2→−4 and
  −4→−2 in sequence undoes itself. Every value remap now goes through unique
  placeholder tokens in ONE pass, and each replacement asserts the old string
  is present so a miss cannot pass silently.
- In a rooted tree with root fixed at label 0, node ids are a permutation of
  1..n-1 over the drawn shape — same trick as 3553's renumbering, with the
  extra constraint that the rival's start and Alice's winning path must keep
  landing on the same glyphs (they do; only labels and amounts changed).
- The `<text>`-only substitution is safe here because ids are pure digits and
  amounts match `[+−]\d+`; prose lines inside `<text>` nodes are matched
  verbatim per line (SVG text does not wrap inside one element).
