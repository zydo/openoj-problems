## 1648 — Sell Diminishing-Valued Colored Balls

- New id / title / slug: 1648 / Sell Tokens From Shrinking Stacks / `sell-tokens-from-shrinking-stacks`
- Old → new API: `maxProfit` → `bestRevenue` (go `bestRevenue`, rust `best_revenue`, ts `bestRevenue`); parameter `inventory` → `stacks`; `orders` kept
- Core algorithm / difficulty: sorted descending, band-by-band arithmetic-series selling with a 0 sentinel, answer mod `10⁹ + 7` / H3 (unchanged)
- Statement rewritten from spec: yes — token stacks where a token leaving a stack of `s` sells for `s`, exactly `orders` sales, maximize the take
- Examples newly constructed: yes (structure-preserving: yes for Example 1 — two stacks with prices stacked beside them, sold ones ringed)
  - `stacks = [3,6], orders = 5 → 21` (6+5+4 levels the stacks, then two 3s), `[4,4], orders = 6 → 18` (equal stacks sell in pairs)
- Constraints: domain unchanged, presentation rewritten (`min(sum(stacks), 10⁹)`)
- Skeletons regenerated: all 7
- Figures: **regenerated** — `example-1.svg` re-emitted by `.localonly/wave-e-05/fig_1648.py` (r=15 circle columns, price labels, dashed rings and brackets for the 5 sold tokens); render eyeballed
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The colored-ball shop framing became token stacks; the figure's "value = balls left" note became "price = tokens left in that stack", and the color names (amber/blue) replaced yellow/blue so nothing of the source example survives visually.
