## 3393 — Count Paths With the Given XOR Value

- New id / title / slug: 3393 / Count Grid Routes With a Given Xor / `count-grid-routes-with-a-given-xor`
- Old → new API: `countPathsWithXorValue` → `countXorRoutes` (go `countXorRoutes`, rust `count_xor_routes`, ts `countXorRoutes`); parameters `grid`, `k` kept
- Core algorithm / difficulty: dp over cells with the running xor (16 states) as the third index, mod 1e9+7 / H3 (unchanged)
- Statement rewritten from spec: yes (route definition, xor-of-visited-values, modulus restated from scratch)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[[2,6,6],[5,5,1],[3,7,1]], k=2` → 3, `[[4,1,5,1],[5,5,2,4],[0,6,7,1]], k=4` → 4 (two routes share a value sequence), `[[5,2,7],[6,0,1],[5,5,5]], k=15` → 0
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Expected values from `.localonly/wave-g-02/cases_3393.py`: source DP cross-checked against brute-force enumeration of every monotone route.
- Example 2 was chosen because two of its four routes traverse different cells with the same value sequence — worth stating explicitly, since it is the one subtlety of "count routes, not value sequences".
