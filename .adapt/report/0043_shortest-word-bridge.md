## 43 — Word Ladder

- New id / title / slug: 43 / Shortest Word Bridge / `shortest-word-bridge`
- Old → new API: `ladderLength` → `shortestBridgeLength` (go `shortestBridgeLength`, rust `shortest_bridge_length`, ts `shortestBridgeLength`); parameters `beginWord` → `startWord`, `endWord` → `targetWord`, `wordList` → `dictionary`
- Core algorithm / difficulty: BFS over the implicit one-letter graph, neighbours found through wildcard-pattern buckets / H3 (unchanged)
- Statement rewritten from spec: yes — the source's "transformation sequence" is renamed a **bridge** throughout, and neighbour/bridge are defined outright instead of by example
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `lead → gold` over `["load","goad","gold","loam","foam"]` gives `4` (with a dead-end branch), `wheat → bread` gives `0` (target in the dictionary but unreachable), `cat → cut` gives `2` (one substitution)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- **Family: `ladder`; written before `0042_all-shortest-word-bridges`, which
  inherits this statement's framing** — two equal-length words are
  **neighbours**, the sequence is a **bridge**, and BFS proceeds ring by ring
  rather than level by level. The word "ladder" is retired in both.
- Parameters were renamed with the title (`startWord`/`targetWord`/
  `dictionary`). Note the per-language split: python/js/ts/java/cpp/go
  solutions carry the camelCase names verbatim to match the regenerated
  starters; only the rust reference uses snake_case, which is the live bank's
  own practice (`0127_word-ladder` ships `beginWord` in `starter.rust` and
  `begin_word` in `solution.rust`).
- The source `solution.py` comment illustrated the bucket trick with the
  source's own example words (`"hot" -> "*ot", "h*t", "ho*"`) — exactly the
  class of leak the stale gate does not catch, since example *strings* inside
  code comments are not scanned. Rewritten to `"malt"` in all seven files by
  hand; grep the solutions for short quoted strings after any rename.
- Example 2 was chosen to differ from the source's in *why* the answer is `0`:
  the source's target was missing from the dictionary, this one is present but
  two letters away from everything near it. Same expected value, different
  reason, so the statement can say what it says honestly.
