# Solutions — Rank Swings After The Points Update

## Rank each team before and after applying the point changes

Both rankings are one window function over the same ordering rule: points
descending, then country ascending. The "before" ranking reads `Standings`
directly; the "after" ranking first joins each team with its
`points_delta` row and adds the shift, then applies the identical
`ROW_NUMBER`. Joining the two ranked copies of every `team_id` puts both
positions side by side, and old minus new is exactly the requested
`rank_swing` (positive means the team moved up).

Because ties are broken by a column that never changes (the country), the
ordering is total and `ROW_NUMBER` is deterministic — no `DENSE_RANK`
ambiguity can leak into the swing.

**Complexity:** `O(T log T)` time for the two window sorts over `T`
teams, `O(T)` space.
