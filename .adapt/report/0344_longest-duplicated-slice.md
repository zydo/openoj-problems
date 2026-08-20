## 344 — Longest Repeating Substring

- New id / title / slug: 344 / Longest Duplicated Slice / `longest-duplicated-slice`
- Old → new API: `longestRepeatingSubstring` → `longestDuplicatedSlice` (rust `longest_duplicated_slice`); parameter `s` kept
- Core algorithm / difficulty: binary search on a downward-closed length predicate, each probe a hash-set duplicate hunt / H3 (unchanged)
- Statement rewritten from spec: yes — the source never said outright that appearances may overlap (it only implied it via a hint); the rewrite states it and spends an example on it
- Examples newly constructed: yes (structure-preserving: n-a, no figures)
  - `"flux" → 0`, `"banana" → 3` (overlapping appearances), `"mississippi" → 4`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Naming near-misses matter more than the gates can see. "Longest Repeated
  Substring" would pass every gate and is still just a word swap; the title has to
  move off the source's noun ("substring" → "slice", already the bank's word in
  0005 and 0647) as well as its verb.
