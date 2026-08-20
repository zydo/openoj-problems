## 741 — Kth Smallest Amount With Single Denomination Combination

- New id / title / slug: 741 / Kth Smallest Single-Coin Amount / `kth-smallest-single-coin-amount`
- Old → new API: `findKthSmallest` → `kthSingleCoinAmount` (go `kthSingleCoinAmount`, rust `kth_single_coin_amount`, ts `kthSingleCoinAmount`); parameters `coins`, `k` kept
- Core algorithm / difficulty: binary search on the answer + inclusion–exclusion over subset LCMs / H3 (unchanged)
- Statement rewritten from spec: yes ("amounts reachable with copies of one denomination"; union-of-multiples framing stated outright)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[4,10] k=6` → 20 (shared multiple counts once), `[9] k=3` → 27 (single denomination), `[2,3,5] k=7` → 9 (three-way merge)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Expected values computed by brute-force union of multiples (`.localonly/wave-f-05/gen3116.py`), not by hand; examples were also checked against the hidden inputs for duplication.
- The whole-tree static check exceeded 120 s, so this wave scopes it per bundle via a symlinked single-bundle tree under `.localonly/wave-f-05/checktree/` — same checker, one bundle.
