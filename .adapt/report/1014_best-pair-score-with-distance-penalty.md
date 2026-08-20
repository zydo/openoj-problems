## 1014 — Best Sightseeing Pair

- New id / title / slug: 1014 / Best Pair Score With Distance Penalty / `best-pair-score-with-distance-penalty`
- Old → new API: `maxScoreSightseeingPair` → `bestPairScoreWithDistancePenalty` (go `bestPairScoreWithDistancePenalty`, rust `best_pair_score_with_distance_penalty`, ts `bestPairScoreWithDistancePenalty`); parameter `values` kept
- Core algorithm / difficulty: one pass carrying max(values[i] + i) / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[7,2,10,4,8]` → 16 (best partner is not the global max prefix value), `[3,9]` → 11 (minimum length), `[50,40,30]` → 89 (decaying values make the adjacent pair win)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Sightseeing scenario dropped; the statement now defines the score directly
  (two entries minus the positional gap). Copied solutions happened to carry no
  scenario wording, so no comment edits were needed.
- Example 1 was chosen so the winning pair (2,4) is not centered on index 0,
  exercising the running-maximum growth between j = 2 and j = 4.
