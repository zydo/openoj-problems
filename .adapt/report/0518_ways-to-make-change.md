## 0518 — Coin Change II

- New id / title / slug: 518 / Ways To Make Change / `ways-to-make-change`
- Old → new API: `change` → `combinations` (go `combinations`, rust `combinations`, ts `combinations` — one word in every language, see note)
- Core algorithm / difficulty: unbounded-knapsack combinations DP, coins-outer loop order / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `amount = 6, coins = [1,2,3]` (all seven combinations listed), `11, [4,6]` (unmakeable), `8, [2,4,6]` (denominations that are multiples of one another)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) compatibility ✓ stale ✓ overlap ✓
- Family: member II of the change-making pair with 0322 (`Fewest Coins To Make Change`) — titles decided together

### Notes

- **Rename-collision lesson for the main agent:** the source's method name and
  rust entrypoint are the *same string* (`change`). Any multi-word new name
  splits into `waysToMakeChange` / `ways_to_make_change`, and the
  compatibility gate applies its rename pairs as one global sequential regex,
  so the two pairs clobber each other and the staged rust file cannot match
  the harness entrypoint. A single-word new name (identical in every
  language) sidesteps it; bundles whose source method is one bare lowercase
  word (`change`, `search`, `get`, `put` — the design problems' map
  vocabulary) will all hit this when renamed. Either keep such renames
  single-word or the gate needs per-language rename scoping.
- Kinship with 0322 is carried by the shared "make change" stem; the two
  deliberately share the `[4,6]`-evens-vs-odd-amount motif so the family
  reads as a pair (minimum count vs count of ways) without sharing example
  rows.
