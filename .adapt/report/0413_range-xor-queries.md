## 413 — XOR Queries of a Subarray

- New id / title / slug: 413 / Range XOR Queries / `range-xor-queries`
- Old → new API: `xorQueries` → `rangeXorQueries` (go `rangeXorQueries`, rust `range_xor_queries`, ts `rangeXorQueries`); `arr` → `nums`, `queries` kept
- Core algorithm / difficulty: prefix XOR, one XOR per query / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[5,6,3,9]` with four queries → `[3,12,9,3]` (binary shown); `[2,2,8]` → `[0,8,2]` (equal neighbours cancel); `[12]` `[[0,0]]` → `[12]` (one-element range)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (per-bundle static clean) verify ✓ (7/7 languages, 15/15 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run
