## 386 — Smallest String With Swaps

- New id / title / slug: 386 / Smallest String Reachable by Swaps / `smallest-string-reachable-by-swaps`
- Old → new API: `smallestStringWithSwaps` → `smallestReachableString` (go `smallestReachableString`, rust `smallest_reachable_string`, ts `smallestReachableString`); parameters `s`, `pairs` kept
- Core algorithm / difficulty: union-find over positions, sort each cluster's letters into its positions / H3 (unchanged)
- Statement rewritten from spec: yes (swap chains and transitive trading derived from the spec, "component" restated as cluster)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"zdca" pairs [[0,2],[1,3]]` → `"cazd"` (two disjoint clusters); same string plus bridge `[2,3]` → `"acdz"` (one cluster); `"topaz" [[0,1],[1,2]]` → `"optaz"` (chain makes a triple, two letters untouched)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (per-bundle static clean) verify ✓ (7/7 languages, 17/17 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Examples 1 and 2 share a base string on purpose: the bridge pair shows one
  extra swap collapsing two clusters, which is the whole insight in one diff.
