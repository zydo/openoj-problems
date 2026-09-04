# Solutions — Top Salary In Each Division

## Group the maxima, then join back

The answer needs each division's top salary and every engineer sitting at
it. `(SELECT divisionId, MAX(salary) FROM Engineers GROUP BY divisionId)`
computes the maxima in one grouped pass, and joining `Engineers` back onto
that subquery with an `ON` that requires both `divisionId` and `salary`
to match keeps exactly those engineers: the equality on salary admits every
row tied at the group's maximum — a tie yields several output rows, as in
the example where both Jonas and Nils survive — while nothing below the
maximum can ever match, since `MAX` produces one value per group. The final
`JOIN Divisions d ON e.divisionId = d.divisionId` turns the surviving ids
into division names, and the three selected columns are aliased `Division`,
`Engineer`, and `Pay`.

The inner-join shape needs no special cases because the grouped subquery
has a row for precisely the divisions that have engineers: an empty
`Engineers` table produces no groups and therefore no output rows, and a
division with no engineers never surfaces for the same reason — every
division that does appear contributes at least its maximum earner.
Equivalent shapes reach the same keep-set other ways —
`DENSE_RANK() OVER (PARTITION BY divisionId ORDER BY salary DESC) = 1`
ranks each division once and keeps its first rank, and the correlated
`salary = (SELECT MAX(salary) FROM Engineers e2 WHERE e2.divisionId =
e.divisionId)` re-derives each row's group maximum at the cost of one
aggregation per row.

The grouped pass hashes the `E` engineer rows by `divisionId`, holding
only the `D` group maxima; the join back probes those maxima once per
engineer, and the division-name join resolves `D` ids. Nothing beyond
the group table and the output itself is materialized.

**Complexity:** `O(E + D)` time, `O(D)` space.
