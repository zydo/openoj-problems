## 0480 — Sliding Window Median

- New id / title / slug: 480 / Rolling Window Medians / `rolling-window-medians`
- Old → new API: `medianSlidingWindow` → `rollingWindowMedians` (go `rollingWindowMedians`, rust `rolling_window_medians`, ts `rollingWindowMedians`); parameters `nums`/`k` kept
- Core algorithm / difficulty: sorted window maintained by binary insertion + leftmost-match eviction, median by index / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[4,1,8,2,7,3] k=4 → [3.0,4.5,5.0]` (even k, half-integer medians, window diagram), `[5,-2,6,1,-4,0] k=3 → [5.0,1.0,1.0,0.0]` (odd k, negatives), `[7,-1,4,7,-1,4] k=6 → [4.0]` (window = whole array, duplicates)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Family naming: kin `0239_sliding-window-maximum` was already adapted as
  `Rolling Window Maxima`, so this one takes `Rolling Window Medians` /
  `rollingWindowMedians` to keep the pair visibly related.
- `comparison` is `close`; the statement keeps a tolerance sentence (1e-5).
