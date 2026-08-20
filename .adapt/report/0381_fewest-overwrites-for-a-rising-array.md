## 381 — Make Array Strictly Increasing

- New id / title / slug: 381 / Fewest Overwrites for a Rising Array / `fewest-overwrites-for-a-rising-array`
- Old → new API: `makeArrayIncreasing` → `fewestOverwrites` (go `fewestOverwrites`, rust `fewest_overwrites`, ts `fewestOverwrites`); parameters `arr1` → `values`, `arr2` → `pool`
- Core algorithm / difficulty: DP over "prefix ends on value v at cost c", sorted+dedup pool, binary search for smallest fitting entry / H4 (unchanged)
- Statement rewritten from spec: yes (operation restated as overwriting a position from a reusable pool)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[4,9,7,20] pool [8,5]` → 1; `[5,9,7,8] pool [11,12]` → 2 (one overwrite provably insufficient); `[7,6,5] pool [8]` → -1
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (per-bundle static clean) verify ✓ (7/7 languages, 20/20 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Parameter rename checked first: `values`/`pool` appear nowhere as declared
  locals in the source solutions (`values` only as the `.values()` map
  method, which a positional rename cannot disturb).
- The compat gate reads parameter renames from the merged ledger's api map,
  which does not contain Part D fragments yet; positional invocation makes
  that harmless for this run, and the centrally merged rerun will apply them.
