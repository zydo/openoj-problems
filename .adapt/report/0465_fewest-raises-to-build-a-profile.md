## 465 — Minimum Number of Increments on Subarrays to Form a Target Array

- New id / title / slug: 465 / Fewest Raises to Build a Profile / `fewest-raises-to-build-a-profile`
- Old → new API: `minNumberOperations` → `fewestRaises` (go `fewestRaises`, rust `fewest_raises`, ts `fewestRaises`); parameter `target` → `heights`
- Core algorithm / difficulty: pay the first level plus every positive rise (difference-array greedy) / H3 (unchanged)
- Statement rewritten from spec: yes — the operation is "raise a contiguous run by 1", the input framed as a profile to build from a zeroed work array
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[2,5,3,5,2] → 7` (twin peaks), `[6,1,4] → 9` (deep valley), `[3,3,3,3] → 3` (flat: base layer only)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Parameter `target` renamed to `heights`; grep confirmed no source solution
  declares a local of that name, and the judge passes arguments positionally,
  so the compatibility gate (which cannot see ledger api renames for Part E
  bundles) is unaffected by a parameter rename.
