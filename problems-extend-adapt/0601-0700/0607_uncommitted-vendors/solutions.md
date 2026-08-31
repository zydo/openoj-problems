# Solutions — Uncommitted Vendors

## Exclude representatives linked to RED

The inner query follows each `Purchases` row to its `Clients` row and
collects the `rep_id` values for purchases whose `client_name` is `RED`.
The outer query scans `Representatives` and uses `NOT IN` to retain every
representative outside that exclusion set, projecting `full_name`.

A representative with no purchases never appears in the inner query and is
therefore included. Multiple RED purchases do not create duplicate output
because the outer query starts from the one-row-per-representative table.

Scanning purchases builds the exclusion set, followed by one scan of the
representatives.

**Complexity:** `O(R + P)` time, `O(R + P)` space.
