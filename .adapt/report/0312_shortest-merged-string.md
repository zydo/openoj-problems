## 312 — Find the Shortest Superstring

- New id / title / slug: 312 / Shortest Merged String / `shortest-merged-string`
- Old → new API: `shortestSuperstring` → `shortestMerge` (go `shortestMerge`, rust `shortest_merge`, ts `shortestMerge`); parameter `words` kept (conventional, and unchanged in every source solution)
- Core algorithm / difficulty: maximum-overlap table + bitmask DP for the shortest Hamiltonian path / H5 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figures)
  - `["earth","ripe","pear"]` → `"ripearth"` (input order is not the merge order)
  - `["sun","nset","unse"]` → `"sunset"` (three words collapse into six characters)
  - `["chase","seven","enter","terse"]` → `"chaseventerse"` (four-word chain)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- `comparison` is `exact`, but the task genuinely admits several shortest
  strings and the source statement said so; the reference solutions all break
  ties the same way (shortest, then smallest index sequence), so the judge is
  in practice single-answer. I kept the "any one of them counts" sentence
  because it is part of the functional spec, and picked all three examples so
  their optimum is *unique* (verified by brute force over all permutations) —
  no example depends on the tie-break. The tension between "return any" and
  `comparison: exact` is pre-existing in the source bundle and is not something
  an adaptation can fix without changing judged semantics.
- Every candidate example was checked against the hidden inputs (all of which
  are a/b/c-style strings plus `["hello","low","world"]`) — no overlap.
- The one comment in `solution.py` that used the old terminology
  ("best superstring") was reworded with the API rename.
