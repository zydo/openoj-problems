## 1723 — Find Minimum Time to Finish All Jobs

- New id / title / slug: 1723 / Smallest Maximum Workload / `smallest-maximum-workload`
- Old → new API: `minimumTimeRequired` → `smallestMaxWorkload` (go `smallestMaxWorkload`, rust `smallest_max_workload`, ts `smallestMaxWorkload`); parameters `jobs`, `k` kept
- Core algorithm / difficulty: branch-and-bound backtracking — descending sort, `>= best` cut, duplicate-load and empty-worker symmetry cuts / H4 (unchanged)
- Statement rewritten from spec: yes (framed as worker workloads, not working time)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[5,4,3,3,2]`, k=2 → 9 (near-balanced split, 9 vs 8)
  - `[6,6,2]`, k=3 → 6 (one job each; k equals n)
  - `[9,1,1,1]`, k=2 → 9 (one unbreakable heavy job sets the answer)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (per-bundle static replica) verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Expected values cross-checked against an exhaustive k^n assignment
  enumerator; both agree.
- Title sits beside the bank's existing "Smallest Maximum After Renumbering a
  Grid" (2371) in voice; "workload" keeps it distinct from the split-sum
  family (0410, contiguous cuts).
