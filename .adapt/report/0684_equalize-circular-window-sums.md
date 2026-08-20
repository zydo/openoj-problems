## 684 — Make K-Subarray Sums Equal

- New id / title / slug: 684 / Equalize Circular Window Sums / `equalize-circular-window-sums`
- Old → new API: `makeSubKSumEqual` → `equalizeWindowSums` (go `equalizeWindowSums`, rust `equalize_window_sums`, ts `equalizeWindowSums`); parameters `arr`, `k` kept (conventional)
- Core algorithm / difficulty: residue classes mod gcd(n, k) equalized at their medians / H3 (unchanged)
- Statement rewritten from spec: yes — "subarray" → "window on a ring", one window per starting position
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[2,7,1,7], k=2 → 1` (two classes), `[3,1,4,1,5], k=2 → 7` (one class, odd size), `[6,2,6,2], k=3 → 8` (one class, even size)
- Constraints: domain unchanged (1 ≤ k ≤ n ≤ 10⁵, 1 ≤ arr[i] ≤ 10⁹), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Dispatch key `2607_make-k-subarrays-sums-equal` (wave-b-15.json) is a typo;
  the live directory is `2607_make-k-subarray-sums-equal`; adapted that one.
- Return is int64 while elements are int32 — the reference already widens,
  so the rename touched nothing there.
