## 42 — Word Ladder II

- New id / title / slug: 42 / All Shortest Word Bridges / `all-shortest-word-bridges`
- Old → new API: `findLadders` → `allShortestBridges` (go `allShortestBridges`, rust `all_shortest_bridges`, ts `allShortestBridges`); parameters `beginWord` → `startWord`, `endWord` → `targetWord`, `wordList` → `dictionary`
- Core algorithm / difficulty: one BFS recording distances plus a layered shortest-path DAG, then a DFS enumerating every minimum route / H4 (unchanged)
- Statement rewritten from spec: yes — the bridge/neighbour definitions are copied verbatim from the finished sibling `0043_shortest-word-bridge` so the pair reads as one family, with only the ask differing
- Examples newly constructed: yes (structure-preserving: **yes** — rings of 1, 1, 2, 2, 1 words, exactly the shape `solution-bfs-levels.svg` draws)
  - `mile → cane` over `["male","bale","pale","bane","pane","cane"]` gives the two 5-word bridges; `cold → ward` over `["cord","card","ward","wart"]` gives one 4-word bridge
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: **labels updated** — seven node labels, the header (also `beginWord/endWord` → `startWord/targetWord` and "levels" → "rings"), and the footnote. Ring sizes and arrow geometry untouched.
- Gates: check ✓ verify ✓ (7/7 languages, 14/14 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- **Family: `ladder`, written straight after `0043_shortest-word-bridge`.** The
  definition paragraphs are deliberately identical between the two statements
  (neighbours, bridge, the ```text block spelling out the word list), the
  constraint blocks are identical, and the titles differ by exactly the
  qualifier — *Shortest* vs *All Shortest*. The sibling's hint vocabulary
  ("rings") carries over, and `0126`'s solutions.md says "sweep" where the
  source said "BFS level" for the same reason.
- **Constructing a two-bridge example that fits a drawn graph is real work.**
  The figure fixes the shape: one word, one word, two words, two words, one
  word, with the pairs cross-adjacent at their own ring and converging on the
  target. My first candidate (`melt → band` via salt/sand) failed because a
  "one-letter" step I had checked by eye was two letters — *salt → sand*
  changes positions 2 and 3. Running the reference caught it instantly
  (answer came back `[]`). The working family shares a fixed 3-letter suffix
  with only the first letter varying (`male/bale/pale` over `-ale`, then
  `bane/pane/cane` over `-ane`), which makes every intra-ring and cross-ring
  distance easy to verify by hand. Lesson: for word-graph examples, run the
  reference *before* writing the statement, not after.
- The footnote in the figure had to be shortened as well as reworded: the
  replacement was 6 characters longer than the source's, which already ended
  within ~5px of the canvas edge. Long figure prose has no slack — measure it.
- `verify_solution.py` on this bundle is slow enough (rust compile) that the
  combined gates+verify+check command hit the 120s tool timeout. Running the
  three steps separately avoids the timeout; nothing is wrong with the bundle.
