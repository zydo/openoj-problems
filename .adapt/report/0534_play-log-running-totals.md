## 0534 — Game Play Analysis III

- New id / title / slug: 534 / Play Log Running Totals / `play-log-running-totals`
- Old → new API: table `Activity` → `PlayLog`; columns `player_id` → `user_id`, `event_date` → `session_date`, `games_played` → `rounds`, output `games_played_so_far` → `rounds_so_far`; `device_id` kept (generic)
- Core algorithm / difficulty: `SUM(...) OVER (PARTITION BY user ORDER BY date)` / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a) — two users, five rows, including a zero-round session that leaves the running total unchanged
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: sql
- Figures: none
- Gates: check ✓ verify ✓ (13/13 cases) sandbox **pending** compatibility ✓ stale ✓ overlap ✓

### Notes for the pilot review

- **SQL renames live in the ledger, not problem.json.** A SQL bundle's API
  is its schema — one CREATE TABLE string — so the table and column names
  have no structured field for the gates to diff. The ledger's `api` map is
  now the source the compatibility gate consumes; the stale gate parses the
  schema string itself.
- **Hidden datasets carry the table name**, exactly as design cases carry the
  class name: every `INSERT INTO Activity ...` became `INSERT INTO PlayLog`
  with the row data untouched. Same rule as 0146 — case data is unchanged,
  identifiers travel with the API.
- The overlap gate caught my own template reuse: the seeding note and the
  "single SELECT" sentence were copied from the source family's wording. A
  background-frequency exclusion was added for phrases common across the
  whole bank (≥3 statements), which correctly does NOT excuse these — they
  are common only within the 4 SQL statements, so the right fix was
  rewording mine, not weakening the gate.
