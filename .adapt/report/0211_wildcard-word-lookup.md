## 0211 — Design Add and Search Words Data Structure

- New id / title / slug: 211 / Wildcard Word Lookup / `wildcard-word-lookup`
- Old → new API: class `WordDictionary` → `WordMatcher`; `addWord` → `add`; `search` kept (kinship with 0208's kept `search`); parameter `word` kept
- Core algorithm / difficulty: 26-slot prefix tree, recursive fork at each dot / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `sand`/`send`/`song` with one-dot, two-dot, and mid-pattern dots; `coal`/`coat` with a leading dot, trailing dot, a too-long pattern, and a first-letter mismatch
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: python3 + java (design offers only these)
- Figures: none
- Gates: check ✓ verify ✓ (2/2 languages, 15/15 cases) compatibility ✓ stale ✓ overlap ✓ sandbox pending (batch run)

### Notes

- Kin naming with `0208_prefix-tree`: the two are trie siblings (not a
  numbered sequel, so no pre-decided family); titles "Prefix Tree" /
  "Wildcard Word Lookup" share the word-trouble domain and both guides
  cross-reference the shared node layout.
- Tags kept byte-for-byte here (`Trie`, `Backtracking`) — 0211's gate is not
  forced because its *class* was `WordDictionary`. If the main agent unifies
  the former-Trie-family tags after the 0208 decision, this bundle's `Trie`
  tag should become `Prefix Tree` at the same time.
