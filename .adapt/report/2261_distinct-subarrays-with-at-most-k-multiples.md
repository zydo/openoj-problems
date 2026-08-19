## 2261 — K Divisible Elements Subarrays

- New id / title / slug: 2261 / Distinct Subarrays With at Most K Multiples / `distinct-subarrays-with-at-most-k-multiples`
- Old → new API: `countDistinct` → `countDistinctSubarrays` (go `countDistinctSubarrays`, rust `count_distinct_subarrays`, ts `countDistinctSubarrays`); parameters `nums`, `k`, `p` kept
- Core algorithm / difficulty: per-left-endpoint extension with a running divisible tally, break past `k`, dedup via tuple hash set / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[3,6,6,3,3] k 1 p 6` → 6 (two adjacent multiples, dedup visible), `[2,4,8,4] k 4 p 2` → 9 (budget never binds), `[7,3,7,3,7] k 1 p 7` → 5 (alternating pattern)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- `problem.json` was produced by loading the source JSON and rewriting the
  identity fields programmatically — cheaper than retyping and keeps
  `limits`/`comparison` byte-identical by construction.
- Example 1's enumeration in the explanation was hand-derived then confirmed
  by the generator's count; the per-run lists keep the statement followable
  without a figure.
