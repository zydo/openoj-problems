## 601 — Booking Concert Tickets in Groups

- New id / title / slug: 601 / Hall Seating / `hall-seating`
- Old → new API: class `BookMyShow` → `HallSeating`; `gather` → `block`;
  `scatter` → `spread`; parameter `maxRow` → `lastRow` (`k`, `n`, `m` kept)
- Core algorithm / difficulty: segment tree over per-row free-seat counts
  carrying both max and sum; first-index-at-least-k descent for `block`,
  prefix-sum check plus row draining for `spread` / H4 (unchanged)
- Statement rewritten from spec: yes (concert framing kept — the task
  genuinely is seat allocation; all prose new)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `3x4` hall: block lands row 0, fails on a partly full row, spills to
    row 1; spread drains three rows; spread fails on exhausted front rows
  - `1x6` hall: spread fills from the left, block continues at seat 4,
    then the row is full
  - `2x7` hall: a 9-seat spread empties row 0 and dips into row 1; an
    oversized block is refused, a smaller one lands mid-row at `[1, 2]`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: python3 + java (design problems offer only these)
- Figures: none
- Gates: check ✓ verify ✓ (2/2 languages, 15/15 cases) sandbox pending
  (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: design kind, deferred to batch run

### Notes

- Hidden-case `actions` strings renamed in place (`BookMyShow` →
  `HallSeating`, `gather` → `block`, `scatter` → `spread`), the one
  sanctioned hidden-case edit; params and expected values untouched
  (verified mechanically against the source cases).
- `block`/`spread` were grepped against both source solutions first:
  neither appears as an identifier (only prose "block"); `fill` was
  rejected — `Arrays.fill` is a live call in the Java port.
- Stale-literal extraction on numeric pairs is a non-issue here: the gate
  strips commas, so `[2, 5]` leaves only two distinct characters and never
  becomes a tracked literal; only the action-string array is tracked.
