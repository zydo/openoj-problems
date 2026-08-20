## 515 — Largest Color Value in a Directed Graph

- New id / title / slug: 515 / Most Frequent Color on a Directed Path / `most-frequent-color-on-a-directed-path`
- Old → new API: `largestPathValue` → `mostFrequentColor` (go `mostFrequentColor`, rust `most_frequent_color`, ts `mostFrequentColor`); parameters `colors`, `edges` kept (conventional)
- Core algorithm / difficulty: Kahn topological order + 26-slot per-node color DP, `-1` on cycle / H4 (unchanged)
- Statement rewritten from spec: yes — "color value of a path" is stated as the count of the path's most frequent color
- Examples newly constructed: yes (structure-preserving: yes)
  - `colors = "msmkm"` keeps the drawn graph shape (same 5 nodes, same edges, same highlighted path) with new letters; `"q"` self-loop for the cycle; plus a third, figure-free diamond `tutt` where the two routes disagree
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — both `example-*.svg` draw node/edge geometry only; the letters and the caption were edited in place
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Both figures are pure node-link drawings, so the structure-preserving rule
  applied cleanly: same nodes, same edges, same highlighted path, new
  colors `"msmkm"` instead of `"abaca"`.
