## 2430 — Maximum Deletions on a String

- New id / title / slug: 2430 / Longest Deletion Sequence / `longest-deletion-sequence`
- Old → new API: `deleteString` → `longestDeletionSequence` (go `longestDeletionSequence`, rust `longest_deletion_sequence`, ts `longestDeletionSequence`); parameter `s` kept (conventional); vocabulary operations → steps
- Core algorithm / difficulty: suffix dp over legal doubled-prefix chops with a two-row LCP table deciding block equality / H4 (unchanged)
- Statement rewritten from spec: yes — the operation is defined as a deletion step whose leading block must be immediately repeated, with the length bound tied to the current string
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"xyzxyzxy" → 2` (one doubling chop then forced full deletion), `"aabaabab" → 4` (mixed chain aabaabab → aabab → abab → ab → ∅), `"cccccc" → 6` (uniform run, letter at a time)
- Constraints: domain unchanged (length ≤ 4000, lowercase), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The 4-step chain was found by brute-force search over {a,b,c} strings, then
  hand-walked to confirm each intermediate chop is legal; `aabaabab` is a
  nicer worked example than anything I could construct by hand.
