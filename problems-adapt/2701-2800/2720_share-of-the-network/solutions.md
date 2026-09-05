# Solutions — Share Of The Network

## Double each tie into a directed edge list, then group and divide

A tie is stored once, in either column order, but the statement counts it
toward both endpoints: member "2" is tied to member "1" no matter which of
the pair sat in `member_a`. The `directed` CTE makes that symmetry
mechanical by selecting `(member_a, member_b)` from `Ties` unioned all
with its column-swapped twin `(member_b, member_a)`. Every tie then exists
twice in the derived row set — once owned by each endpoint — so grouping
those rows by the owner column and counting partners collapses directly to
per-member tie counts. The network population falls out of the same
derivation: counting `DISTINCT` owners over the doubled rows counts each
distinct member exactly once, which is precisely "the number of distinct
members in the whole table".

One detail keeps the arithmetic honest: the division must happen in
floating point (`100.0 * COUNT(f) / p.users`) before rounding — an
integer `500 / 9` would floor to `50` before `ROUND` ever sees it,
quietly producing `50.00` instead of `55.56`. The `population` CTE
reduces to a single row, cross-joined into the grouped scan so every
group divides by the same constant without a per-row subquery;
`ROUND(..., 2)` then snaps each quotient to the required two decimals.
The final `ORDER BY member` emits group keys ascending, matching the
contract's ordering even where several members share identical
percentages.

Cost-wise, deriving the doubled edges scans `Ties` once per direction
(two linear passes over E rows), materializing 2E rows; the population
count reuses those rows, and grouping aggregates them again with a
sort-backed pass over the key.

**Complexity:** `O(E log E)` time, `O(E)` space.
