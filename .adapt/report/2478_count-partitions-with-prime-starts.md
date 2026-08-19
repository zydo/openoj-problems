## 2478 — Number of Beautiful Partitions

- New id / title / slug: 2478 / Count Partitions With Prime Starts / `count-partitions-with-prime-starts`
- Old → new API: `beautifulPartitions` → `countPrimeStartParts` (go `countPrimeStartParts`, rust `count_prime_start_parts`, ts `countPrimeStartParts`); parameters `s`, `k`, `minLength` kept
- Core algorithm / difficulty: `dp[i][j]` over prefix cuts with a per-layer prefix sum over prime-start positions; prime-final-digit cells skipped; mod `10^9+7` / H4 (unchanged)
- Statement rewritten from spec: yes ("beautiful" replaced by the three rules stated as cutting constraints on seam positions)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `s "24365871" k=3 minLength=1` → `3` (alternating prime/non-prime pairs give three enumerated cuts), same string `k=4 minLength=1` → `1` (pairs forced), `s "53628194" k=2 minLength=3` → `1` (minLength bites; minLength=4 noted as starving to 0)
  - expected values verified against a cut-enumeration brute force
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Example strings need deliberate construction: legal seams require a
  non-prime digit followed by a prime one, so an alternating layout
  (`24·36·58·71`) maximizes seam choices, while one long non-prime tail
  (`536·28194`) pins the single seam and lets `minLength` do the deciding.
  Hand-rolled strings mostly score 0; search with the brute forcer first.
- Source statement carries no bracketed-array literals (inputs are quoted
  digit strings), so stale scanning reduced to identifier renames.
