## 1997 — First Day Where You Have Been in All the Rooms

- New id / title / slug: 1997 / First Day in Every Cell / `first-day-in-every-cell`
- Old → new API: `firstDayBeenInAllRooms` → `firstDayInEveryCell` (go `firstDayInEveryCell`, rust `first_day_in_every_cell`, ts `firstDayInEveryCell`); parameter `nextVisit` kept (reads naturally under the cell framing)
- Core algorithm / difficulty: `f[i] = 2·f[i-1] − f[nextVisit[i-1]] + 2` over first-entry days, mod `10^9+7` / H4 (unchanged)
- Statement rewritten from spec: yes — rooms recast as a row of cells you occupy; parity rule and `mod n` step stated from the spec, not the source prose
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[0,1,1] → 4` (self-jumps only), `[0,1,2,1] → 6` (late back-jump), `[0,0,1,2] → 12` (jump to the very start, long replay)
- Constraints: domain unchanged (`n == nextVisit.length`, 2–10⁵, `0 <= nextVisit[i] <= i`), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- n = 2 is unusable for examples: the only arrays `[0,0]` (source example)
  and `[0,1]` (hidden) are both taken; examples start at n = 3.
- Walk sequences in the explanations were machine-simulated, and each
  expected value cross-checked between the raw simulation and the DP —
  the two agree on every public case.
- Solution comments carried "room" wording; replaced with "cell"
  (`rooms 0..i-2` → `cells 0..i-2` etc.). No code identifiers changed
  beyond the entry points.
