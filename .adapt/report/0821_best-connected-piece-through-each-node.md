## 821 — Maximum Subgraph Score in a Tree

- New id / title / slug: 821 / Best Connected Piece Through Each Node / `best-connected-piece-through-each-node`
- Old → new API: `maxSubgraphScore` → `bestPieceScores` (go `bestPieceScores`, rust `best_piece_scores`, ts `bestPieceScores`); parameter `good` → `marked` (`n`, `edges` kept)
- Core algorithm / difficulty: rerooting DP — down-sweep with positive-part pruning, up-sweep parent-side piece / H3 (unchanged)
- Statement rewritten from spec: yes ("good/bad node" reframed as marked/unmarked with ±1 weights)
- Examples newly constructed: yes (structure-preserving: yes)
  - path-3 `marked = [0,1,1]` → `[1,2,2]`, broom `marked = [1,0,0,1,1]` → `[2,2,1,2,2]`, pair `marked = [0,1]` → `[0,1]` (attach-hurts / hub-with-laggard / attach-helps)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — all three kept their geometry; shading moved to the new marked nodes, thick-edge overlay re-picked per new best pieces, good/bad → marked/unmarked, captions and header comments rewritten
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- The parameter rename `good` → `marked` required grepping the source ports
  first: `marked` appears nowhere as an identifier (only the English word
  "piece" in comments), so the compat gate's word-boundary rename is safe.
  Comments saying "+1 for good, -1 for bad" were rewritten to the new terms in
  the adapted ports.
- The stale gate's squashed-literal check flags the source's public arrays
  `1,0,1` and `0,1,0,1,1` anywhere in the bundle (spaces removed), including
  SVG comments — the new `marked` vectors avoid those exact character runs.
- Example values were re-derived with the reference before writing either the
  statement or the figure captions; my hand computation of example 2's node-2
  answer initially disagreed (the up-sweep passes through node 1's weight), a
  reminder to let the reference arbitrate.
