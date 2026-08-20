## 407 — Find the Smallest Divisor Given a Threshold

- New id / title / slug: 407 / Smallest Divisor Under a Cap / `smallest-divisor-under-a-cap`
- Old → new API: `smallestDivisor` → `smallestDivisorUnderCap` (go `smallestDivisorUnderCap`, rust `smallest_divisor_under_cap`, ts `smallestDivisorUnderCap`); `nums` kept, `threshold` → `cap`
- Core algorithm / difficulty: lower-bound binary search on the divisor, ceiled-division sum probe / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[3,7,11,15] cap=8` → 6 (sum lands exactly on the cap); `[1,100] cap=3` → 50 (extreme spread); `[4,9,25] cap=3` → 25 (no slack, d forced to the max)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (per-bundle static clean) verify ✓ (7/7 languages, 16/16 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run
