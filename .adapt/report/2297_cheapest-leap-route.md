## 2297 — Jump Game VIII

- New id / title / slug: 2297 / Cheapest Leap Route / `cheapest-leap-route`
- Old → new API: `minCost` → `cheapestLeapRoute` (go `cheapestLeapRoute`, rust `cheapest_leap_route`, ts `cheapestLeapRoute`); parameters `nums`, `costs` kept (both conventional and already clear)
- Core algorithm / difficulty: two monotonic-stack "first index to the right" tables, then forward DP over the resulting DAG / H4 (unchanged)
- Statement rewritten from spec: yes — the two leap rules are phrased as conditions on the run of values in between ("every value below", "no value below"), and the pricing as a charge on landing, which makes `costs[0]` visibly free
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[4,1,5,4,6,3]` / `[7,1,6,7,2,8] → 16` (three-leap optimum with two costed alternatives, and a non-zero `costs[0]` that is never paid), `[6,2,2,7]` / `[0,4,7,5] → 5` (one long leap over a dip), `[8,2,9,1,1]` / `[0,3,4,1,5] → 9` (final leap lands on an equal value, the `>=` side of the first rule)
- Constraints: domain unchanged, presentation rewritten; the source's `O(n)` follow-up is kept, reworded
- Skeletons regenerated: all 7 (cpp, go, java, js, py, rust, ts)
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- **Family naming.** 1345, 1696 and 2297 are the surviving members of a sequel
  series and were adapted together as `<superlative> Leap Route`: Shortest
  (fewest leaps), Richest (largest collected total), Cheapest (smallest paid
  total). The idiom is carried through the statements as well as the titles —
  each opens by placing the reader on index `0` wanting the final index, and
  each calls one move a *leap* — so the three read as one author's series while
  the objectives stay mutually distinguishable. Methods follow the titles
  exactly (`shortestLeapRoute`, `richestLeapRoute`, `cheapestLeapRoute`). Two
  earlier members of the source series are already adapted under different
  idioms (`0055_reach-the-last-cell`, `0403_hops-across-stones`), so nothing
  here needed to match them.
- Examples for this one are easy to get wrong by hand: the jump graph is not
  obvious from the array, and it is easy to pick values where index 0 reaches
  the last index in a single leap, which makes the example say nothing. A tiny
  brute-force search over random small arrays (enumerate all legal routes, keep
  the arrays whose optimum needs three leaps and whose runner-up is strictly
  worse) produced Example 1 in seconds; the generator lives in
  `.localonly/wave-a-01/`.
