## 115 — Game of Life

- New id / title / slug: 115 / Life, One Generation / `life-one-generation`
- Old → new API: `gameOfLife` → `nextGeneration` (go `nextGeneration`, rust `next_generation`, ts `nextGeneration`); parameter `board` kept
- Core algorithm / difficulty: one step of Conway's Life; snapshot copy vs in-place state-bit markers / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes — same 4x3 and 2x2 boards as the two figures)
  - `[[0,0,0],[1,1,1],[0,0,0],[0,0,0]] → [[0,1,0],[0,1,0],[0,1,0],[0,0,0]]` (the blinker: births and deaths both),
    `[[1,0],[1,1]] → [[1,1],[1,1]]` (birth by three neighbours),
    `[[1,0,0],[0,0,0]] → [[0,0,0],[0,0,0]]` (lonely cell dies)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (`example-1.svg`, `example-2.svg`)
- Gates: check ✓ verify ✓ (14/14 language-variants, 15/15 cases each) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Naming: Conway's Game of Life predates LeetCode by decades, so the concept
  keeps its real name — but the *task* here is a single step of it, so the title
  says exactly that ("Life, One Generation") rather than borrowing the whole
  game's name for one generation. "Life" is the term of art; "One Generation"
  is what is being asked.
- Grid figures are label-editable even where fill colour encodes the value:
  rewriting `fill="#1a2026"`/`"#ffffff"` and the digit/text colour per cell is a
  text edit, not a redraw. The new boards keep the drawn dimensions (4x3, 2x2),
  so no coordinates changed. Example 2's highlight (the born cell) moved from
  the bottom-right rect to the top-right — swapping which rect carries the
  tint/stroke attributes, still no geometry.
- Example 1 is the blinker — chosen because a vertical↔horizontal flip shows
  births and deaths in one picture and it is the canonical first oscillator,
  which suits a problem named after the game itself.
- Overlap failed at 12% on figure alt-text again (both captions were near the
  source's). Same fix as 0240: reword the alt text. Figure captions are the
  recurring overlap offender; consider writing them fresh-minded from the start.
