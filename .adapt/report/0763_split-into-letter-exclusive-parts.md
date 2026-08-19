## 0763 — Partition Labels

- New id / title / slug: 763 / Split Into Letter-Exclusive Parts /
  `split-into-letter-exclusive-parts`
- Old → new API: `partitionLabels` → `letterExclusiveParts` (go
  `letterExclusiveParts`, rust `letter_exclusive_parts`, ts
  `letterExclusiveParts`); parameter `s` kept
- Core algorithm / difficulty: last-occurrence table plus a two-pointer sweep,
  cutting at the first legal index / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — figure dropped)
  - `"mnmopnoqrsrq"` → `[7,5]`, `"xyzzyx"` → `[6]` (a trailing repeat forbids
    every cut), `"ffgehge"` → `[2,5]` (a very short leading part)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped — `solution-last-occurrence.svg` draws the source's Example 1
  cell by cell (24 letter boxes at fixed coordinates, brackets over the parts of
  size 9, 7 and 8, spans for three named letters). Reusing it would have forced
  an example with exactly those part sizes, and `[9,7,8]` is one of the literals
  the stale gate extracts from the source statement, so it could not appear in
  the new one. Left for the phase-two redraw
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a
  compatibility ✓ stale ✓ overlap ✓

### Notes

- A general point for figure-bearing greedy/string problems: when the figure
  encodes both the input *and* the answer, the answer's literal form is usually
  also a stale-gate literal, which rules out the structure-preserving shortcut
  and makes dropping the figure the only option.
