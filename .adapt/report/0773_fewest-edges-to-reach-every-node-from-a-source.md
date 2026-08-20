## 773 — Minimum Runes to Add to Cast Spell

- New id / title / slug: 773 / Fewest Edges to Reach Every Node from a Source / `fewest-edges-to-reach-every-node-from-a-source`
- Old → new API: `minRunesToAdd` → `fewestEdgesToAdd` (go `fewestEdgesToAdd`, rust `fewest_edges_to_add`, ts `fewestEdgesToAdd`); parameters `crystals` → `sources`, `flowFrom` → `edgeFrom`, `flowTo` → `edgeTo` (rust `flow_from`/`flow_to` → `edge_from`/`edge_to`); `n` kept
- Core algorithm / difficulty: iterative Kosaraju condensation, BFS from marked components, count uncovered in-degree-zero components / H3 (unchanged)
- Statement rewritten from spec: yes — the wizard dressing is gone (house rule: no invented scenarios); the reachability semantics ("covered = marked, or a path from a marked node leads to it") is stated explicitly, resolving the source's ambiguous "receives magic flow from another focus point" (read literally as in-degree ≥ 1, both source examples would answer 0)
- Examples newly constructed: yes (structure-preserving: yes for both figures)
  - fig-1 shape: `n=6 sources=[2]` cycle `2→5→0→3→2` + detached 1, 4 → 2 (nodes renumbered, same drawn cycle + two dashed additions); fig-2 shape: `n=7 sources=[0,2]` cycle `4→6→1` + chains `0→3`, `2→5` → 1 (renumbered, same drawn layout); plain zero case `n=4 sources=[2] [2,2,1]/[1,3,0]` → 0
- Constraints: domain unchanged, presentation rewritten (the "distinct runes" bullet re-expressed)
- Skeletons regenerated: all 7
- Figures: both **labels updated** — node ids renumbered at the same positions, "crystal(s)"/"runes"/"focus point" wording replaced by source/edge/node, captions recomputed for the new data; geometry untouched
- Gates: check ✓ (adapt_gates: starters/compatibility/stale/overlap) verify ✓ (7/7 languages, 18/18 cases) sandbox n/a (function kind) compatibility ✓ stale ✓ overlap ✓

### Notes

- Parameter renames here are load-bearing for honesty, not cosmetics:
  `crystals`/`flowFrom`/`flowTo` restate the dropped story. Renaming
  parameters touched all 7 solution signatures plus the js `@param`
  block; the rust snake-case pair maps separately in the ledger.
- Third example first drafted with an uncovered node (answer 1 where I
  claimed 0) — the reference run caught it before anything was written
  to cases.json.
- The source statement's coverage rule is genuinely ambiguous prose;
  reference, hidden data, and both worked examples all agree on
  reachability-from-marked-node semantics, so this is a clarification,
  not a blocked source.
