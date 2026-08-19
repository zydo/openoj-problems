## 2353 — Design a Food Rating System

- New id / title / slug: 2353 / Player Ratings by Team / `player-ratings-by-team`
- Old → new API: class `FoodRatings` → `PlayerRatings`; `changeRating` →
  `setRating`; `highestRated` → `bestPlayer`; parameters `food` → `player`,
  `cuisine` → `team`, `newRating` → `score`, and constructor `foods` →
  `players`, `cuisines` → `teams`, `ratings` → `scores`
- Core algorithm / difficulty: per-group lazy-deletion min-heap ordered by
  `(-rating, name)` plus a name → (group, rating) map / H3 (unchanged)
- Statement rewritten from spec: yes (framing shifted from food/cuisine to
  players/teams — same computation, items grouped into categories with
  scores and best-per-category queries)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - two teams, both queried, one update flips the leader, a second update
    creates a 16-16 tie broken by name
  - one team of three equal ratings including a prefix pair ("al" vs
    "ale"), then two updates swinging the leader back and forth
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: python3 + java (design problems offer only these)
- Figures: none
- Gates: check ✓ verify ✓ (2/2 languages, 14/14 cases) sandbox pending
  (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: design kind, deferred to batch run

### Notes

- Hidden-case `actions` renamed in place (`FoodRatings` → `PlayerRatings`,
  `changeRating` → `setRating`, `highestRated` → `bestPlayer`); the hidden
  params still carry the source's food-name strings — they are opaque
  string data to the judge and stay byte-identical by rule.
- Constructor parameter names are not covered by the stale gate (it reads
  only method parameters), but they were renamed anyway for consistency;
  they are recorded in the ledger's api map so the compatibility staging
  renames them in the source solutions too.
- Unlike 2286, multi-digit score arrays do become tracked literals here
  (`[9,12,8,15,14,7]` has seven distinct characters); the new examples
  were checked against the full literal list before writing prose.
