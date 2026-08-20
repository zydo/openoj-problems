## 501 — Maximum Score from Performing Multiplication Operations

- New id / title / slug: 501 / Weighted End Deletions / `weighted-end-deletions`
- Old → new API: `maximumScore` → `maxWeightedEndScore` (go `maxWeightedEndScore`, rust `max_weighted_end_score`, ts `maxWeightedEndScore`); parameter `multipliers` → `weights` (`nums` kept)
- Core algorithm / difficulty: bottom-up DP over (moves made, front-count) with a rolling row, −∞ masking unreachable slots / H3 (unchanged)
- Statement rewritten from spec: yes — "deletions from either end, each scored as weights[i] × removed value"
- Examples newly constructed: yes (structure-preserving: **yes** — Example 1 keeps m = 3 so the figure's dp triangle keeps its box counts and dashed right-end path)
  - `[-9,-8,1], [4,2,-3] → 15` (negative final weight makes holding negatives back pay; figure's walk), `[4,3,-2,7,-5,1], [3,2,-1,-3,5] → 67` (n > m, middle untouched, negative weights rescue negative values)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7 (cpp, go, java, js, py, rust, ts)
- Figures: **labels updated** — `solution-dp-stages.svg`: same triangle geometry and dashed path (data searched so stage-1 both slots and the root resolve "take back", as drawn); new stage values 27/24/−3, 11/26, root 15; narration equations recomputed; canvas widened 620→660 to fit the longer equation lines
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The figure's narration walks the data, so preserving it constrained more
  than box counts: the winning path must go dp[0][0]→dp[1][0]→dp[2][0]→base
  (delete the back end thrice). Searching for m=3 data with that property plus
  six distinct dp values took one brute-force script; first attempts filtered
  on stage-1 *both* slots taking right, which is impossible to combine with
  the distinctness requirement — only the path-critical slots matter, the
  narration words for other slots are just text.
- Watch the `-inf` slots when checking dp value distinctness: `stages[i]`
  arrays are length m+1 with trailing −∞; compare reachable slots only
  (`stages[i][:i+1]`).
- Title deliberately avoids "picks from both ends" — `2462_k-cheapest-picks-
  from-both-ends` (Total Cost to Hire K Workers) is already in the bank and
  the two must stay distinguishable.
