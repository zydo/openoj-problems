## 586 — Maximum Value of K Coins From Piles

- New id / title / slug: 586 / Max Coins From Stack Tops / `max-coins-from-stack-tops`
- Old → new API: `maxValueOfCoins` → `maxCoinsFromStackTops` (go `maxCoinsFromStackTops`, rust `max_coins_from_stack_tops`, ts `maxCoinsFromStackTops`); parameter `piles` → `stacks`; `k` kept
- Core algorithm / difficulty: grouped knapsack over stacks with per-stack prefix sums / H3 (unchanged)
- Statement rewritten from spec: yes (wallet framing dropped; stacks/moves kept as the generic mechanics)
- Examples newly constructed: yes (structure-preserving: yes for the figured example)
  - `[[4,60,2],[5,30,9]] k 2` (same two 3-coin stacks, same three-panel take patterns; only values changed, 1/100/3/7/8/9 → 4/60/2/5/30/9, best 64), `[[50],[50],[3,3,3,900]] k 5` (dig to a bottom treasure, exactly-k forces one extra coin), `[[8,3],[6,1,5],[2]] k 4` (whole middle stack plus one top)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (example-1 — coin values, totals, footer best, stack captions)
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a (function kind) compatibility ✓ stale ✓ overlap ✓

### Notes

- The figure's blue highlighting is positional (which top coins are taken),
  not value-dependent, so a pure value swap keeps it truthful — worth
  remembering for any "enumerated options" figure.
- Public expecteds computed by running the source reference, then
  cross-checked against an exhaustive split-of-t enumerator — agreed.
