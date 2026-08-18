## 0752 — Open the Lock

- New id / title / slug: 752 / Fewest Wheel Turns / `fewest-wheel-turns`
- Old → new API: `openLock` → `fewestTurns` (go `fewestTurns`, rust `fewest_turns`, ts `fewestTurns`)
- Core algorithm / difficulty: BFS over the 10,000 readings / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `["1000","0111"] → "2000"` → 4 (the 2-move route is jammed; the shortest
    detour moves a side wheel first — the reference found 4, not the 8 a
    wraparound guess would suggest), `["1234"] → "0001"` → 1, all eight
    one-move readings jammed → -1
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Example 1's answer surprised me (4 via `"0001" -> "1001" -> "2001"`, not 8
  by wrapping the wheel around) — another argument for computing every
  expected value with the reference rather than reasoning it out.
