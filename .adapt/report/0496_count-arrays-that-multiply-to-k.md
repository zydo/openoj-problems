## 496 — Count Ways to Make Array With Product

- New id / title / slug: 496 / Count Arrays That Multiply to k / `count-arrays-that-multiply-to-k`
- Old → new API: `waysToFillArray` → `countProductArrays` (go `countProductArrays`, rust `count_product_arrays`, ts `countProductArrays`); parameter `queries` kept
- Core algorithm / difficulty: per-prime stars and bars `C(x + n − 1, n − 1)`, factorial/inverse-factorial tables to 20000 / H4 (unchanged)
- Statement rewritten from spec: yes (ordered-arrays framing, `[2,3]` vs `[3,2]` stated as the distinctness rule)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[[3,8],[2,12],[4,1]]` → `[10,6,1]` (single-prime split; ordered pairs listed; all-ones)
  - `[[50,8192],[3,10000],[1,7]]` → `[281184694,225,1]` (modulus wrap; two independent primes; single slot)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (per-bundle static replica) verify ✓ (7/7 languages, 14/14 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Expected values computed twice: by the staged source reference and by an
  independent `math.comb` stars-and-bars; the mod-wrap example agrees at
  281184694.
- Only identifying literal in the source statement is `[73,660]`; all its
  other example pairs are 3-symbol-short and exempt.
