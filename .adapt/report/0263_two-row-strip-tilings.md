## 263 — Domino and Tromino Tiling

- New id / title / slug: 263 / Two-Row Strip Tilings / `two-row-strip-tilings`
- Old → new API: `numTilings` → `countStripTilings` (go `countStripTilings`, rust `count_strip_tilings`, ts `countStripTilings`); parameter `n` kept
- Core algorithm / difficulty: two-state column DP collapsed to `f(i) = 2f(i-1) + f(i-3)`, modulo `10^9 + 7` / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — the example figure was dropped)
  - `n = 2` → 2 (enumerable by eye; shows why an L-piece cannot start)
  - `n = 12` → 6105 (growth, still below the modulus)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped `example-1.svg` (its geometry is the five tilings of a width-3 strip); `tiles.svg` kept and newly referenced from the statement; `solution-tilings.svg` kept in `solutions.md`
- Gates: check ✓ verify ✓ (7/7 languages, 20/20 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The input is one small integer, and the hidden set already owns every width
  from 3 to 10 plus 15, 20, 30, 50, 100, 250, 500, 777, 999 and 1000. Widths 1
  and 2 are the source's public cases and 3 and 1 are its examples, so the
  usable small widths are exactly 2, 11, 12, 13, 14 and a scattering above.
  Single-integer problems will keep hitting this; check the hidden list first.
- `tiles.svg` was an orphan in the source bundle — it draws the two piece shapes
  and no example data, so it is legitimate for the new statement and gives it a
  figure back. It sits inside `## Description` before `### Example 1`, which no
  live bundle does; `check.py`'s statement grammar is permissive about figure
  placement, so this passes, but flagging it in case the house style is meant to
  be stricter.
- `solution-tilings.svg` enumerates the five coverings at width 3. That width is
  no longer an example, so `solutions.md` uses it where it belongs — as the hand
  check on the first value the recurrence produces.
