## 1201 — Ugly Number III

- New id / title / slug: 1201 / Nth Multiple of Any of Three Divisors / `nth-multiple-of-any-of-three-divisors`
- Old → new API: `nthUglyNumber` → `nthMultiple` (go `nthMultiple`, rust `nth_multiple`, ts `nthMultiple`); parameters `n`, `a`, `b`, `c` kept
- Core algorithm / difficulty: binary search on the value with an inclusion–exclusion count over lcm multiples / H3 (unchanged)
- Statement rewritten from spec: yes ("ugly number" dropped per the 0264 precedent; the set restated as multiples of at least one of three divisors)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `n=6, a=2,b=5,c=3` → 8; `n=7, a=3,b=6,c=9` → 21 (nested divisors collapse to multiples of 3); `n=4, a=7,b=11,c=13` → 14 (near-coprime)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (per-bundle static clean) verify ✓ (7/7 languages, 20/20 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Sibling of 0264 (`Nth Five-Smooth Number`): both keep the "Nth …" family
  shape while naming their own concept; "ugly" survives nowhere in the
  bundle — comment prose says "multiple(s)", mirroring the title.
- `ugly` appeared only in comments here (no identifiers), so the concept
  rename was comment-only, unlike 0264's deeper rename.
