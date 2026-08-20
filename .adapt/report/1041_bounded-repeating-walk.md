## 1041 — Robot Bounded In Circle

- New id / title / slug: 1041 / Bounded Repeating Walk / `bounded-repeating-walk`
- Old → new API: `isRobotBounded` → `isWalkBounded` (go `isWalkBounded`, rust `is_walk_bounded`, ts `isWalkBounded`); parameter `instructions` kept
- Core algorithm / difficulty: one-pass simulation, bounded iff home or turned / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"GGRRGG"` → true (each pass returns to origin), `"GGG"` → false (drift), `"GGRR"` → true (half-turn oscillation)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 21/21 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The `G`/`L`/`R` alphabet is part of the judged input domain, so the letters
  stay; everything else about the scenario (robot → walker) is ours.
- Example choice checked against hidden cases: `"GR"` would have duplicated a
  hidden input, so the quarter-turn case was replaced by `"GGRR"` (half-turn),
  which also demonstrates the two-pass cancellation more clearly.
