## 357 — Corporate Flight Bookings

- New id / title / slug: 357 / Seats Booked per Flight / `seats-booked-per-flight`
- Old → new API: `corpFlightBookings` → `seatsBookedPerFlight` (go `seatsBookedPerFlight`, rust `seats_booked_per_flight`, ts `seatsBookedPerFlight`); parameters `bookings`, `n` kept
- Core algorithm / difficulty: difference array (stamp +seats/−seats) + prefix sweep / H2 (unchanged)
- Statement rewritten from spec: yes (airline framing kept — the genuine task; all prose, example grids, and hints new)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[[1,3,5],[2,4,10],[3,5,7]] n=5` → `[5,15,22,17,7]` (three overlapping ranges); `[[2,2,4],[1,4,3]] n=4` → `[3,7,3,3]` (single-flight + full-range); `[[3,3,8]] n=3` → `[0,0,8]` (untouched flights stay 0)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (bundle shape; central tree run pending) verify ✓ (7/7 languages, 14/14 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Kept the flights/airline domain rather than abstracting to ranges: it is
  the computation itself, and this wave's other interval problem (1094) is
  a different task (capacity verdict vs. totals), so the two remain
  clearly distinguishable.
- A hidden case carries `seats = 0` bookings despite the stated
  `1 <= seats` bound; hidden data is frozen, the reference handles zeros
  naturally, and the constraint text keeps the source's domain exactly —
  noted for the main agent in case the source's statement deserves a
  future errata, not to be fixed here.
