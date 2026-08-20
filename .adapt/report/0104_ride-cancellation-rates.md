## 104 — Trips and Users

- New id / title / slug: 104 / Ride Cancellation Rates / `ride-cancellation-rates`
- Old → new API: tables `Trips` → `Rides`, `Users` → `Members`; columns `client_id` → `rider_id`, `users_id` → `member_id`, `request_at` → `ride_date`; kept `id`, `driver_id`, `city_id`, `status`, `banned`, `role`, output columns `Day` / `Cancellation Rate`, and every enum value and date (they are case *data*)
- Core algorithm / difficulty: double join with banned-folded conditions, 0/1 `CASE` average per day / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a)
  - ten rides / eight members: banned rider and banned driver knocked out of 10-01 (rate 1/2), a clean 10-02 (0.00), 2-of-3 on 10-03 (0.67), one ride outside the window
- Constraints: domain unchanged, presentation rewritten (three-day window `2013-10-01..03` is data-fixed, kept)
- Skeletons regenerated: sql
- Figures: none
- Gates: check ✓ verify ✓ (13/13 cases) compatibility ✓ (manual — see note) stale ✓ overlap ✓ sandbox pending (batch run)

### Notes

- **Compatibility was run by hand.** SQL renames live only in the ledger's
  `api` map, and this bundle's fragment is not merged yet, so
  `adapt_gates.py` applied no renames and failed with `no such table:
  Trips`. I replicated the gate exactly — word-boundary api-map rename of
  the *source* `solution.sql`, then `verify_solution.py --solution` against
  the adapted bundle: 13/13. Once the fragment merges, the formal gate
  reproduces this. Every SQL bundle in a chunk hits this; re-run
  `adapt_gates.py` after `adapt_merge.py`.
- Hidden datasets changed exactly in the `INSERT INTO <table>` names; row
  data, statuses (`'completed'`, `'cancelled_by_*'`), ban flags and dates
  are byte-identical — same rule as 0146's class-name actions.
- `banned` was deliberately kept: a plain English word for exactly the
  concept, not a LeetCode-coined name, and it appears inside hidden case
  data values ('Yes'/'No' rows) whose semantics it names.
