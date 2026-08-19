## 2242 — Maximum Score of a Node Sequence

- New id / title / slug: 2242 / Highest Four-Node Path Score / `highest-four-node-path-score`
- Old → new API: `maximumScore` → `bestPathScore` (go `bestPathScore`, rust `best_path_score`, ts `bestPathScore`); parameters `scores`, `edges` kept
- Core algorithm / difficulty: enumerate each edge as the middle of the path, keep top-3 neighbours by value per node, 9 combinations per edge / H3 (unchanged)
- Statement rewritten from spec: yes ("node sequence" reframed as a four-node simple path)
- Examples newly constructed: yes (structure-preserving: yes)
  - `[7,3,11,9,5]` same edge set → 30 (winning node set matches the drawn blue path), `[8,14,5,6,10,3]` star + detached pair → -1, `[6,1,9,2,8]` chain → 20 (third example, no figure)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (score texts, captions, comments; geometry and highlights untouched)
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- The overlap gate caught my first figure alt texts — I had lightly edited the
  source's alt sentences instead of writing new ones. Rewriting the two alts
  from scratch dropped the shingle overlap to 0%. Alt text counts as statement
  prose; write it like prose.
- Keeping the same edge set and choosing scores so the optimal node set
  matches the highlighted path lets a graph figure survive with pure text
  edits — the blue highlight is geometry, so the winning set must not move.
- The second figure's caption was reworded to the new terminology
  ("lined up" instead of "valid node sequences of length 4").
