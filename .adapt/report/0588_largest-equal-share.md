## 588 — Maximum Candies Allocated to K Children

- New id / title / slug: 588 / Largest Equal Share / `largest-equal-share`
- Old → new API: `maximumCandies` → `maxShare` (go `maxShare`, rust `max_share`, ts `maxShare`); parameter `candies` → `piles` (`k` kept)
- Core algorithm / difficulty: binary search on the answer over `[0, max(piles)]` with an O(n) feasibility check `Σ floor(p/s) >= k` / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[6,9,4] k 4` → 4 (cutting across piles), `[3,3] k 7` → 0 (supply short of demand), `[10,10,10] k 9` → 3 (answer far below the max pile)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Source solutions already used the word "piles" in comments while the
  parameter was `candies`; renaming to `piles` made the comments and the
  identifier agree, no collisions in any language.
- Hidden cases are dominated by the `[10]`-with-varying-`k` family, so the
  new public examples avoid single-pile inputs entirely.
- `k` is a 64-bit parameter — kept `bits: 64` byte-for-byte.
