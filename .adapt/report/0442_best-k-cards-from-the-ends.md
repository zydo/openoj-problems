## 442 — Maximum Points You Can Obtain from Cards

- New id / title / slug: 442 / Best K Cards From The Ends / `best-k-cards-from-the-ends`
- Old → new API: `maxScore` → `bestKCardsFromTheEnds` (go `bestKCardsFromTheEnds`, rust `best_k_cards_from_the_ends`, ts `bestKCardsFromTheEnds`); parameters `cardPoints`, `k` kept
- Core algorithm / difficulty: complement view — minimize the fixed-length middle window left behind / H2 (unchanged)
- Statement rewritten from spec: yes — the taking is described as repeated end removals, and the window argument is left to the hints
- Examples newly constructed: yes (structure-preserving: **yes** — Example 1 is a 7-card row with k = 3 whose optimum takes the three rightmost cards, exactly the drawn layout)
  - `[3,1,4,1,5,9,2], k=3 → 16`, `[8,1,1,9], k=2 → 17` (one card from each end), `[4,8,15,16], k=4 → 43` (all cards); no overlap with hidden cases
- Constraints: domain unchanged, presentation rewritten (`10⁵`/`10⁴` as `10^5`/`10^4`)
- Skeletons regenerated: all 7
- Figures: labels updated — `solution-card-window.svg` card texts re-valued, window/taken labels and caption sums recomputed (25 − 9 = 16)
- Gates: check ✓ (adapt_gates) verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The solution figure walks through Example 1's data, so the example was
  chosen for the drawn structure (7 cards, k = 3, cheapest window at the left
  end) and the figure needed only text edits.
