## 2872 — Maximum Number of K-Divisible Components

- New id / title / slug: 2872 / Tree Split into Divisible Sums / `tree-split-into-divisible-sums`
- Old → new API: `maxKDivisibleComponents` → `maxDivisibleComponents` (go `maxDivisibleComponents`, rust `max_divisible_components`, ts `maxDivisibleComponents`); parameters `n`, `edges`, `values`, `k` kept
- Core algorithm / difficulty: greedy subtree-sum cutting — cut above every subtree whose finished sum is a multiple of k, count cuts plus the root piece / H2 (unchanged)
- Statement rewritten from spec: yes — "valid split" → "admissible deletion set", the multiple-of-k condition stated directly
- Examples newly constructed: yes (structure-preserving: n/a — figures dropped)
  - `n=5 values=[6,3,2,1,6] k=6 → 3`, `n=6 values=[4,1,3,3,0,5] k=4 → 4` (zero value standing alone), `n=4 path [4,0,0,8] k=4 → 4` (tree shatters completely) — all brute-verified over every edge subset
- Constraints: domain unchanged (1 ≤ n ≤ 3·10⁴, 0 ≤ values[i] ≤ 10⁹, 1 ≤ k ≤ 10⁹, total divisible by k), presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped — both SVGs draw the source examples' tree shapes with per-node values; geometry encodes the data
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The public-case script asserts `sum(values) % k == 0` before calling the
  reference — the statement guarantees it, so every example must respect it
  or the reference's own invariant argument breaks.
