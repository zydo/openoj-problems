## 2040 — Kth Smallest Product of Two Sorted Arrays

- New id / title / slug: 2040 / Kth Smallest Pair Product / `kth-smallest-pair-product`
- Old → new API: `kthSmallestProduct` → `kthSmallestPairProduct` (go `kthSmallestPairProduct`, rust `kth_smallest_pair_product`, ts `kthSmallestPairProduct`); parameters `nums1`, `nums2`, `k` kept (conventional)
- Core algorithm / difficulty: binary search on the value over ±10¹⁰, per-probe count of pairs with product ≤ v via sign-aware binary searches into the sorted second array / H4 (unchanged)
- Statement rewritten from spec: yes — framed as products "one value from each array", repeats counted, 1-based rank
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[3,7]·[2,5], k=3 → 15` (all positive), `[-3,0,4]·[-2,1,3], k=5 → 0` (zero repeats), `[-4,1,2]·[-3,0,2], k=2 → -6` (mixed signs)
- Constraints: domain unchanged (lengths 1–5·10⁴, values ±10⁵, 1 ≤ k ≤ m·n, sorted), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Family: kth-order-statistic names (`0719_kth-smallest-gap`, `1918_kth-least-subarray-sum`, `0215_select-kth-largest`) — this one follows the `kth-smallest-*` branch
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Publics cross-checked between full-product enumeration and a re-derived
  binary-search counter; the solutions.md probe walkthrough (v = -6 and
  v = -7 on example 3) was verified by hand against the ceil/floor
  division cases before publishing.
- 64-bit `k` and return types kept byte-for-byte; only entry-point names
  changed in the solutions.
