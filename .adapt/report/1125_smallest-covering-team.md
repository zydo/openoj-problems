## 1125 — Smallest Sufficient Team

- New id / title / slug: 1125 / Smallest Covering Team / `smallest-covering-team`
- Old → new API: `smallestSufficientTeam` → `smallestCoveringTeam` (go `smallestCoveringTeam`, rust `smallest_covering_team`, ts `smallestCoveringTeam`); parameters `req_skills`, `people` kept
- Core algorithm / difficulty: bitmask DP over skill subsets, buffered per-person sweep / H4 (unchanged)
- Statement rewritten from spec: yes (project framing kept — genuine set cover with people; prose and terminology fresh)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - 3 skills, 3 people → `[0,1]` (a two-skill member halves the team); 4 skills, 5 people incl. one with no required skills → `[0,1]` (ties exist; empty member never helps); 3 skills, generalist first → `[0]`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (tree run) verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- `comparison` is `sorted`, so the "any smallest team, any order" sentence
  in the statement is honest, and expected values could be taken from the
  adapted reference itself (identical algorithm to source) rather than a
  reimplementation.
- Skill words were chosen as multi-letter real skills so the new example
  arrays clear the stale gate's literal set (which pins every
  `["java","nodejs","reactjs"]`-style inner array of the source examples);
  inputs also checked against all 15 hidden cases.
