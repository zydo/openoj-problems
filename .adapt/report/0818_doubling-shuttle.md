## 0818 — Race Car

- New id / title / slug: 818 / Doubling Shuttle / `doubling-shuttle`
- Old → new API: `racecar` → `shuttle` (go `shuttle`, rust `shuttle`, ts `shuttle`); parameter `target` kept
- Core algorithm / difficulty: BFS over `(coordinate, speed)` states with a `2 * target` fence / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figures)
  - `target = 15` → 4 (`"AAAA"`, no turn)
  - `target = 14` → 6 (`"AAAARA"`, overshoot then one turn)
  - `target = 9` → 8 (`"AAARARAA"`, two turns)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The source has `invocation.method == entrypoints.rust == "racecar"`, so the
  PART-A rule applies: the new name has to be a single token usable verbatim as
  the Rust entry point. `shuttle` satisfies that; anything camel-cased would have
  split the pair and broken the staged Rust source with E0599.
- The command letters `'A'` and `'R'` are kept. The judged value is a length, so
  the alphabet carries no judged semantics — but they are the obvious mnemonics
  for the two operations and renaming them would only obscure the statement.
- The instruction strings quoted in the explanations came out of a BFS that
  tracks paths, not by hand; where several shortest strings exist the statement
  presents one without claiming uniqueness.
