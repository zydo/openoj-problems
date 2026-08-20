## 511 — Seat Reservation Manager

- New id / title / slug: 511 / Seat Pool / `seat-pool`
- Old → new API: class `SeatManager` → `SeatPool`; `reserve` kept; `unreserve` → `release`; parameter `seatNumber` → `seat`
- Core algorithm / difficulty: counter of highest seat handed out + min-heap of released seats / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `n=4`: three reserves, alternating releases showing re-take of smallest; `n=6`: two seats released out of order, both re-taken smallest-first
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: python3 + java (design problems offer only these)
- Figures: none
- Gates: check ✓ verify ✓ (2/2 languages, 14/14 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓

### Notes

- `unreserve` → `release`: "unreserve" is a source-only coinage; `release`
  is the ordinary English verb and pairs with the kept `reserve`.
- Hidden-case `actions` strings renamed in place (`SeatManager`→`SeatPool`,
  `unreserve`→`release`), the one sanctioned hidden-case edit for design
  problems; the compatibility gate proves it faithful.
- Example 2 was checked against all 12 hidden cases for duplication (0470
  convention); the tempting `n=1` ping-pong example is hidden case 0
  verbatim, so a two-release shape was used instead.
