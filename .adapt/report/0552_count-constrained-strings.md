## 0552 — Student Attendance Record II

- New id / title / slug: 552 / Count Constrained Strings / `count-constrained-strings`
- Old → new API: `checkRecord` → `countConstrainedStrings` (go
  `countConstrainedStrings`, rust `count_constrained_strings`, ts
  `countConstrainedStrings`); parameter `n` kept
- Core algorithm / difficulty: linear DP over six states — copies of the capped
  letter spent × length of the current run — with modular addition / H3
  (unchanged)
- Statement rewritten from spec: yes — this is the requeued one, written from
  the abstract spec (count length-`n` strings over a three-letter alphabet with
  one letter capped at a single use and another capped at runs of two, modulo
  `10⁹ + 7`) with no scenario at all, per ADAPT's "no invented scenarios" rule
- Examples newly constructed: yes (structure-preserving: n/a — the figure draws
  the state machine, not an example)
  - `n = 8` → 861, with sample accepted and rejected strings for each rule
  - `n = 12` → 14071, contrasting the growth rate with the free alphabet
  - `n = 54321` → 713407490, where the modulus earns its place
- Constraints: domain unchanged (`1 <= n <= 10⁵`), presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (`solution-state-machine.svg`) — the state machine's
  geometry is the six states and their moves, which the adaptation keeps
  exactly; only the letter names on the edges and the axis captions changed
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a
  compatibility ✓ stale ✓ overlap ✓

### Notes

- The judged data is `n` in, a count out — the alphabet's letters never cross
  the interface, so choosing `x` / `y` / `z` costs nothing in compatibility and
  removes the source's framing entirely.
- Letters `x`, `y`, `z` rather than `a`, `b`, `c` on purpose: the reference
  solutions index the table with loop variables `a` and `l`, and an alphabet
  containing `a` would make every comment ambiguous.
- Example inputs had to dodge both the source's public cases (1, 2, 10101) and
  all twelve hidden inputs (3–7, 10, 20, 30, 100, 1000, 10000, 100000), which
  rules out every length small enough to enumerate by eye. Example 1 therefore
  names representative members and non-members instead of listing all 861.
- Solution comments named the old terminology (records, absences, lates, the
  letters `P`/`A`/`L`); those were retermed. The code itself is untouched.
