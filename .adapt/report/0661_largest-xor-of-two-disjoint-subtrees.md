## 661 — Maximum XOR of Two Non-Overlapping Subtrees

- New id / title / slug: 661 / Largest XOR of Two Disjoint Subtrees / `largest-xor-of-two-disjoint-subtrees`
- Old → new API: `maxXor` → `maxDisjointXor` (go `maxDisjointXor`, rust `max_disjoint_xor`, ts `maxDisjointXor`); parameters `n`, `edges`, `values` kept
- Core algorithm / difficulty: post-order subtree sums + binary trie of finished subtrees queried at DFS entry / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes — both figures kept, same tree shapes, values only)
  - `n=6`, values `[4,9,6,5,4,7]` → 31 (branching; 18 XOR 13 = 31), `n=3`, values `[7,3,9]` → 0 (chain), `n=6`, values `[3,20,4,1,8,7]` → 27 (two equal branches score 0; winner is a lone internal node vs a deeper subtree)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (both example SVGs; geometry untouched)
- Gates: check ✓ (no failures for this bundle) verify ✓ (7/7 languages, 18/18 cases) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- The overlap gate reads figure **alt text** as prose. My first alt texts kept the
  source's sentence skeleton with new numbers ("the subtree at node 1 sums to X
  and the subtree at node 2 to Y, giving X XOR Y = Z" → 14% overlap). Rewriting
  the alt sentences themselves — not just their numbers — brought it to 0%.
  Numbers are stripped by normalization, so only the surrounding skeleton counts;
  write alt text in a fresh voice too.
- Example 3 was constructed so the two branches off the root have equal sums
  (20 XOR 20 = 0) and the optimum uses a non-sibling pair — gives the statement
  and solutions.md something the source's examples don't show.
- `check.py --tree problems-adapt` runs its static tier over the whole shared
  tree; concurrent chunk agents leave half-written bundles there (0547/0736/
  0864/1000/2050 during this run). Filtering the output by `<key>:` is the only
  meaningful read; `--problems=` does not scope the static tier.
