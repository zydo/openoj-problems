## 674 — Put Marbles in Bags

- New id / title / slug: 674 / Score Range Over K Cuts / `score-range-over-k-cuts`
- Old → new API: `putMarbles` → `scoreRange` (go `scoreRange`, rust `score_range`, ts `scoreRange`); parameters `weights`, `k` kept
- Core algorithm / difficulty: score = fixed outer ends + sum of adjacent-pair values at the k−1 cuts; answer = top (k−1) pair values minus bottom (k−1), `k = 1` guard / H3 (unchanged)
- Statement rewritten from spec: yes (marbles/bags framing dropped for a neutral "cut into k consecutive pieces" framing)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[2,4,3,6] k 2` → `3` (all three cuttings listed), `[5,1,1,5] k 3` → `4` (repeated pair value), `[7,2,9] k 1` → `0` (the guard case)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Brute force enumerates all `C(n-1, k-1)` cut sets; it validated the
  reference on all three public examples.
- `weights[i]` reaches `10^9`, so the statement notes the 64-bit answer —
  presentation only, the domain is untouched.
