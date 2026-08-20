## 84 — Kth Largest Element in an Array

- New id / title / slug: 84 / Select Kth Largest / `select-kth-largest`
- Old → new API: `findKthLargest` → `selectKthLargest` (go `selectKthLargest`, rust `select_kth_largest`, ts `selectKthLargest`); parameters `nums`, `k` kept
- Core algorithm / difficulty: randomized quickselect vs min-heap of size k / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[7,1,9,3,9,5], k=3 → 7`, `[-2,-7,-1,-7], k=2 → -2` (duplicates hold separate ranks), `[4], k=1 → 4`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: compatibility ✓ stale ✓ overlap ✓ (verify 14/14 solution files, 19/19 cases)

### Notes

- Variant headings kept ("Randomized Quickselect", "Min-Heap of Size k") —
  they carry the `quickselect` / `heap` tokens the Solutions tab matches on.
