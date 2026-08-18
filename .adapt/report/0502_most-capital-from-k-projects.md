## 0502 — IPO

- New id / title / slug: 502 / Most Capital From k Projects / `most-capital-from-k-projects`
- Old → new API: `findMaximizedCapital` → `mostCapitalFromProjects` (go `mostCapitalFromProjects`, rust `most_capital_from_projects`, ts `mostCapitalFromProjects`); parameters `k`/`w`/`profits`/`capital` kept
- Core algorithm / difficulty: greedy — sort by requirement, sweep pointer, max-heap of affordable profits, at most min(k, n) picks with early exit / H3 (unchanged)
- Statement rewritten from spec: yes (the LeetCode IPO framing is gone; the task is stated as plain sequential project-taking under affordability)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `k=2 w=0 profits=[2,4,1,3] capital=[0,1,2,1] → 6` (unlock-by-profit chain), `k=4 … [3,1]/[0,5] → 3` (early stop, quota unused), `k=5 … [1,2]/[0,0] → 3` (k > n)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The scenario words that survive (project, capital, profit) are the domain
  vocabulary of the computation itself, not invented scenery — kept for the
  same reason `nums`/`target` are kept.
