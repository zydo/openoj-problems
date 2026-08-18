## 0719 — Find K-th Smallest Pair Distance

- New id / title / slug: 719 / K-th Smallest Gap / `kth-smallest-gap`
- Old → new API: `smallestDistancePair` → `kthSmallestGap` (go `kthSmallestGap`, rust `kth_smallest_gap`, ts `kthSmallestGap`); parameters `nums`, `k` kept (conventional)
- Core algorithm / difficulty: binary search on the answer value, with a two-pointer count of qualifying pairs over the sorted array / H4 (unchanged)
- Statement rewritten from spec: yes — "gap" replaces "distance" throughout, the pair count `n * (n - 1) / 2` is stated up front, and the `1`-based reading of `k` is made explicit
- Examples newly constructed: yes (structure-preserving: n-a — no figures)
  - `[4,9,7]`, k=2 → 3; `[2,2,8,2]`, k=3 → 0 (repeats realise gap 0); `[10,3]`, k=1 → 7 (smallest legal array)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7 (cpp, go, java, js, py, rust, ts)
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- No parameter renames here: `nums` and `k` are on `ADAPT.md`'s keep list, and
  the method name alone carries the new identity.
- The hints deliberately avoid naming "binary search" — they walk the reasoning
  (too many gaps to list → a monotone tally → halve the candidate range) so the
  technique is derived rather than announced, which is what the source's first
  hint did announce.
