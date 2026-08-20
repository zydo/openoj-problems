## 129 — Maximum Product of Word Lengths

- New id / title / slug: 129 / Largest Disjoint Word Product / `largest-disjoint-word-product`
- Old → new API: `maxProduct` → `largestDisjointProduct` (go `largestDisjointProduct`, rust `largest_disjoint_product`, ts `largestDisjointProduct`)
- Core algorithm / difficulty: 26-bit letter-set masks + pairwise AND over unordered pairs / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `["brick","stone","metal","waxy"]` (length-tie broken by disjointness), `["moon","loom","wool","moat"]` (all-zero), `["cat","cart","care","dog"]` (same letter set, different lengths)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) compatibility ✓ stale ✓ overlap ✓

### Notes

- `words` kept as the conventional parameter name.
