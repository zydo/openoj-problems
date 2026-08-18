## 0208 — Implement Trie (Prefix Tree)

- New id / title / slug: 208 / Prefix Tree / `prefix-tree`
- Old → new API: class `Trie` → `PrefixTree`; `startsWith` → `hasPrefix`; `insert`/`search` kept; parameters `word`/`prefix` kept
- Core algorithm / difficulty: 26-slot fixed-array prefix tree, shared walk for all three operations / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `train`/`trap` (shared path, one prefix-only query, one over-long prefix); `oak`/`oakum` (a whole word that is also another word's prefix)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: python3 + java (design offers only these)
- Figures: none
- Gates: check ✓ verify ✓ (2/2 languages, 15/15 cases) compatibility ✓ stale ✓ overlap ✓ sandbox pending (batch run)

### Notes

- **Rule conflict, resolved locally, needs the main agent's call.** ADAPT.md
  renames the class `Trie` (its own example), but the kept *tag* `"Trie"`
  then trips the stale gate — the source identifier `Trie` matches the tag
  string in `problem.json`. Tags are "kept byte-for-byte" per PROTOCOL, so
  the two rules collide head-on. I renamed the tag to `"Prefix Tree"`
  (semantically the same structure) to get every gate green. Two ways out
  centrally: accept tag renames for the former-Trie family (then 0211's
  `"Trie"` tag should follow for consistency — its gate does not force it,
  its class was `WordDictionary`), or teach the stale gate that tags are
  metadata, not identifier positions, and revert this tag.
- `startsWith` → `hasPrefix` puts it in accessor style like `getMin` →
  `minimum` in 0155; `insert`/`search` stayed as universal vocabulary.
