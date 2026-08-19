## 1996 — The Number of Weak Characters in the Game

- New id / title / slug: 1996 / Count Dominated Points / `count-dominated-points`
- Old → new API: `numberOfWeakCharacters` → `countDominatedPoints` (go `countDominatedPoints`, rust `count_dominated_points`, ts `countDominatedPoints`); parameter `properties` → `points`
- Core algorithm / difficulty: sort by x descending with y ascending inside equal-x groups, single running max of y, count points below it / H3 (unchanged)
- Statement rewritten from spec: yes — the game/attack/defense dressing dropped entirely; points in the plane with two-coordinate strict domination
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[[8,1],[1,9],[9,3],[2,2],[3,4]] → 2` (mixed), `[[6,3],[6,8],[2,9],[4,7]] → 1` (equal-x group), `[[1,1],[2,2],[3,3],[4,1]] → 2` (chain broken at the end)
- Constraints: domain unchanged (2–10⁵ points, coordinates 1–10⁵), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Parameter rename `properties` → `points` (checked first that no source
  solution declares a local `points` — clean). Solutions carry the rename,
  and their comments were rewritten from attack/defense/character vocabulary
  to x/y/point vocabulary, including locals `weak` → `dominated`,
  `maxDefense` → `maxY`.
- The compatibility gate passes with the parameter rename because parameter
  names are not part of the gate's rename set — staged source solutions
  compile under their own parameter name. This is the cheap, sanctioned way
  to drop LeetCode's parameter vocabulary.
- Hidden set already covers equal-x groups, strictness edge cases, and a
  100-element chain (→ 99); the public examples avoid mirroring those
  shapes one-for-one.
