## 712 — Count Valid Paths in a Tree

- New id / title / slug: 712 / Tree Paths Through Exactly One Prime / `tree-paths-through-one-prime`
- Old → new API: `countPaths` → `countOnePrimePaths` (go `countOnePrimePaths`, rust `count_one_prime_paths`, ts `countOnePrimePaths`); parameters `n`, `edges` kept
- Core algorithm / difficulty: sieve of Eratosthenes + apex-counting tree DP over downward paths with 0 / 1 prime nodes / H3 (unchanged)
- Statement rewritten from spec: yes — "valid path" renamed to the property itself (exactly one prime label on the path)
- Examples newly constructed: yes (structure-preserving: n/a — figures dropped)
  - branching `n=7 → 6`, chain `n=8 → 8`, star `n=9 → 20` (4 single edges + 16 cross pairs, derived in the explanation) — all brute-verified by BFS from every node
- Constraints: domain unchanged (1 ≤ n ≤ 10⁵, n−1 edges, valid tree), presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped — both SVGs draw the source examples' tree shapes with label-dependent prime shading; a different example needs a different tree, so no structure-preserving choice exists
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The three examples deliberately cover branching / chain / star, the three
  shapes a solver's mental model has to survive.
