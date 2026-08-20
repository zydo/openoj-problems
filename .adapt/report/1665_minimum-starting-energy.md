## 1665 — Minimum Initial Energy to Finish Tasks

- New id / title / slug: 1665 / Minimum Starting Energy / `minimum-starting-energy`
- Old → new API: `minimumEffort` → `minimumEnergy` (go `minimumEnergy`, rust `minimum_energy`, ts `minimumEnergy`); parameter `tasks` kept, pair fields reframed as `cost_i` / `start_i` in the statement only
- Core algorithm / difficulty: sort by slack (`start − cost`) descending, answer is the max prefix requirement / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[[2,3],[3,6],[1,5]]` → 7 (reverse order wins; 6 provably fails), `[[8,10],[1,5]]` → 11 (cheap high-slack task first beats 13), `[[3,4],[2,7],[6,13],[5,9],[1,10]]` → 18 (five-task walk-through used again in the guide)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- The stale gate derives literals from the source examples; `[6,12]`, `[10,12]`
  and `[4,10]` are the three that qualify, so the new examples avoid exactly
  those pairs (e.g. the guide's five-task case uses `[6,13]`, not `[6,12]`).
- Source hints mention binary search on a monotone predicate; the rewritten
  hints keep that path (monotonicity first, sorting key second) without naming
  a procedure to run.
