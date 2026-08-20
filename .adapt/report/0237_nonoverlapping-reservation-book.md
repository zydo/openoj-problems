## 237 — My Calendar I

- New id / title / slug: 237 / Nonoverlapping Reservation Book /
  `nonoverlapping-reservation-book`
- Old → new API: `MyCalendar` → `ReservationBook`; `book` → `reserveSlot`
- Core algorithm / difficulty: sorted reservations with binary-searched
  insertion / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a)
  - one six-request session inserts before, between, and after existing slots,
    permits touching boundaries, and rejects overlaps on both sides
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: Python and Java
- Figures: none
- Gates: check ✓; local verify ✓ (2/2 languages, 14/14 cases); sandbox
  pending central design batch; compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- Pairwise overlap simulation independently confirms every public response.
- All 13 hidden cases are exact source copies except for class and method
  action-string renames.
