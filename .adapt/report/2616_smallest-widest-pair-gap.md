## 2616 — Minimize the Maximum Difference of Pairs

- New id / title / slug: 2616 / Smallest Widest Pair Gap / `smallest-widest-pair-gap`
- Old → new API: `minimizeMax` → `smallestWidestGap` (go `smallestWidestGap`, rust `smallest_widest_gap`, ts `smallestWidestGap`); parameters `nums`, `p` kept (conventional)
- Core algorithm / difficulty: sort, binary search the cap over the value span, greedy adjacent-pairing feasibility sweep / H3 (unchanged)
- Statement rewritten from spec: yes — "difference of a pair" → "gap"
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[8,3,1,9,5], p=2 → 2` (cap tightens past 1), `[6,2,6,9,2], p=2 → 0` (duplicate zero-gap pairs), `[7,4], p=0 → 0` (empty-collection rule)
- Constraints: domain unchanged (1 ≤ n ≤ 10⁵, 0 ≤ values ≤ 10⁹, 0 ≤ p ≤ n/2), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Nothing surprising; the reference's comments needed no prose repair
  (`minimizeMax` is identifier-shaped, no bare-word collisions).
