## 680 — Minimum Time to Repair Cars

- New id / title / slug: 680 / Least Time to Clear Every Job / `least-time-to-clear-every-job`
- Old → new API: `repairCars` → `leastTime` (go `leastTime`, rust `least_time`, ts `leastTime`); parameters `ranks` → `factors`, `cars` → `jobs`
- Core algorithm / difficulty: binary search on the deadline over `[1, min(factors) · jobs²]`; capacity of a factor-`r` worker at time `t` is `isqrt(t // r)` / H3 (unchanged)
- Statement rewritten from spec: yes (mechanics/garage framing dropped for an abstract worker crew with quadratic job cost)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[3,1,2] jobs 6` → `9` (three-way split), `[7] jobs 5` → `175` (lone worker), `[2,2,4] jobs 10` → `32` (two fast workers finish exactly at the deadline)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Parameter rename checked first: no `factors`/`jobs`/`leastTime` identifier
  in any source solution.
- The "no split finishes sooner" claims are backed by a linear-scan brute
  force (independent of the binary search) plus a per-worker load dump used
  in the explanations.
