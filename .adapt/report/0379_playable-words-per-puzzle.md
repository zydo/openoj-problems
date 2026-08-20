## 379 — Number of Valid Words for Each Puzzle

- New id / title / slug: 379 / Playable Words per Puzzle / `playable-words-per-puzzle`
- Old → new API: `findNumOfValidWords` → `countPlayableWords` (go `countPlayableWords`, rust `count_playable_words`, ts `countPlayableWords`); parameters `words`, `puzzles` kept
- Core algorithm / difficulty: bucket words by 26-bit letter mask, per puzzle enumerate the ≤127 submasks carrying the key-letter bit / H4 (unchanged)
- Statement rewritten from spec: yes ("valid word" reframed as a word *playable* against a puzzle; the two conditions restated over letter sets)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `["tide","tilde","doted","edit"]` with 4 puzzles → `[3,2,0,0]` (kills a word per failure mode: outside letter, missing key letter, missing non-key letter, key in no word); `["sleets","stakes","kales","least","steals"]` → `[3,1]` (anagram words share a bucket)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (per-bundle static clean; tree run is the main agent's) verify ✓ (7/7 languages, 19/19 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- macOS sed has no `\b`; word-boundary renames must go through python
  `re.sub` (the shell loop silently emitted unchanged files on first try).
- Source `method` != `entrypoints.rust` (case-convention split); the split is
  mirrored (`countPlayableWords` / `count_playable_words`), which the
  compatibility gate's rename order handles.
