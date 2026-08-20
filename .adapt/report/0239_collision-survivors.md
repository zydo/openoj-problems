## 239 — Asteroid Collision

- New id / title / slug: 239 / Collision Survivors / `collision-survivors`
- Old → new API: `asteroidCollision` → `collisionSurvivors` (go `collisionSurvivors`, rust `collision_survivors`, ts `collisionSurvivors`); parameter `asteroids` → `movers`
- Core algorithm / difficulty: stack of settled survivors, one pass / H2 (unchanged)
- Statement rewritten from spec: yes — the space scenario is dropped entirely; the task is stated over signed "bodies" on a line, with sign as heading and magnitude as strength
- Examples newly constructed: yes (structure-preserving: n-a — no figures)
  - `[7,-3,12] → [7,12]`, `[-2,6,-6,3] → [-2,3]` (mutual cancellation), `[2,3,1,-9,-4] → [-9,-4]` (one arrival clears a tail)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- **Public case shape follows the invocation type, not a single convention.**
  A `function` bundle's public `input` is a positional *list* (`[[7,-3,12]]`);
  a `design` bundle's is an object with `actions`/`params`. Writing the
  function form as `{"movers": [...]}` fails every language at once with
  "Function input must be a positional argument list", and the compatibility
  gate surfaces that as a truncated `verify_solution.py` traceback for the
  six compiled languages, which reads like a toolchain problem rather than a
  data problem. Copy the shape from the source's own `public[0]`.
- `asteroids` is LeetCode's parameter name and carries the scenario, so it was
  renamed; `movers`/`mover` appear nowhere as identifiers in the seven source
  solutions (only the word "survivors" occurs, and only in comments), so the
  compatibility staging is unaffected.
