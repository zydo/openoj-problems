## 599 — Sum of Total Strength of Wizards

- New id / title / slug: 599 / Sum of Min Times Sum Over All Subarrays / `sum-of-min-times-sum-over-all-subarrays`
- Old → new API: `totalStrength` → `totalMinTimesSum` (go `totalMinTimesSum`, rust `total_min_times_sum`, ts `totalMinTimesSum`); parameter `strength` → `power`
- Core algorithm / difficulty: contribution-by-minimum with two monotonic stacks (strict/non-strict tie split), prefix sums of prefix sums, modulo 10⁹+7 / H4 (unchanged)
- Statement rewritten from spec: yes (wizard scenario dropped; task stated as min × sum over runs)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[2,4,1,3]` → 76 (full ten-run table in the explanation), `[3,2,5]` → 82 (middle owns every containing run), `[6,6,6]` → 360 (equal values exercising the tie rule)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- The public generator cross-checks the O(n) reference against an O(n³)
  brute force per example — cheap insurance on a formula-heavy problem, and
  it also validated the worked example in solutions.md (middle claim of
  `[3,2,5]` contributes 48, singletons 9 and 25).
- Renaming `strength` swept all seven solutions plus the parameter field in
  `problem.json`; `power` was free as an identifier everywhere (checked
  before choosing it, per the 0587 lesson).
