## 0743 — Network Delay Time

- New id / title / slug: 743 / Last To Hear The Signal / `last-to-hear-the-signal`
- Old → new API: `networkDelayTime` → `lastToHear` (go `lastToHear`, rust `last_to_hear`, ts `lastToHear`); parameter `times` → `edges`
- Core algorithm / difficulty: single-source shortest paths, answer = max distance from `k` / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes, for the kept figure)
  - `[[3,1,2],[3,4,2],[4,2,3]] n=4 k=3` → 5, `[[2,1,4]] n=2 k=2` → 4, `[[2,1,4]] n=2 k=1` → -1 (same graph, source on the wrong end)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: `example-1.svg` kept with label edits — node ids, edge weights and
  arrival annotations are text; the three-edge shape (source → two nodes, one
  of them onward to the fourth) is the structure
- Multi-solution: variant ids `dijkstra`, `bellman_ford`, `floyd` kept; guide
  headings still contain the variant tokens
- Gates: check ✓ verify ✓ (7/7 languages × 3 variants, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Parameter rename `times` → `edges` collided with a local `edges` variable in
  `solution_dijkstra.java` (compile error caught by verify). After any blanket
  parameter rename, grep each port for the new name *before* running the gates.
- Image alt text counts as prose for the overlap gate: an alt that mirrors the
  source figure's caption sentence-by-sentence fails it. Describe the figure
  in your own words.
