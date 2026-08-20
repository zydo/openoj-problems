## 635 — Maximum Matching of Players With Trainers

- New id / title / slug: 635 / Most Pairs From Requirements and Capacities / `most-pairs-from-requirements-and-capacities`
- Old → new API: `matchPlayersAndTrainers` → `mostRequirementCapacityPairs` (go `mostRequirementCapacityPairs`, rust `most_requirement_capacity_pairs`, ts `mostRequirementCapacityPairs`); parameters `players` → `requirements`, `trainers` → `capacities`
- Core algorithm / difficulty: sort both, two-pointer greedy pairing, exchange-argument optimality / H2 (unchanged)
- Statement rewritten from spec: yes — the player/trainer scenario dropped for the naked requirement/capacity pairing
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[3,6,8]`/`[7,2,5,9]` → 3 (one capacity wasted, rest cover all); `[2,2,2]`/`[2]` → 1 (single capacity spent once); `[5,9]`/`[6,6]` → 1 (an unmeetable requirement)
  - cross-checked against a brute-force matching search
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Comment terminology followed the parameter rename: singular `player`/`trainer`
  words in the copied solutions were rewritten to `requirement`/`capacity` so no
  comment names the dead scenario.
