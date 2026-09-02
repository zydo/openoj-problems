# Solutions — Driver Standings By Fuel Type

## Join rides to fleet cars and captains, rank each engine type's standings

The answer's grain is one row per engine type, so the query first rebuilds
each (engine_type, captain) pair from the three tables: every ride is a fact
row, `Rides` joins `Fleet` on the ride's car to learn which captain
drove it and on what engine type, and that result joins `Captains` on `captain_id`
to carry the incident count the third tiebreaker needs. Inner joins are
the right shape here — a ride whose car or captain is missing has no
engine type to be ranked under, and the statement only ranks captains that
actually have rides. `GROUP BY engine_type, captain_id` then collapses each
captain's rides within an engine type into one aggregate row: `AVG(stars)`
is the performance score, rounded to two decimals as the statement
requires, and `SUM(miles)` is the total miles the second criterion
compares.

Ranking is an ordering problem, not a filtering one: per engine type the
winner is the aggregate row with the highest average rating, then the longest
total miles, then the fewest incidents. SQLite offers window functions,
so `ROW_NUMBER() OVER (PARTITION BY engine_type ORDER BY ...)` with exactly
that ordering numbers candidates 1, 2, 3... inside each engine type, and an
outer select keeps `rn = 1`. The same shape works without window support
by keeping the group rows in a derived table and picking, per engine type,
the one no other row outranks — identical ordering logic, just spelled as
a correlated subquery. One subtlety lives in the `ORDER BY`: the
comparison runs on the _rounded_ average, because the statement defines
the score as the rounded value before any ties are considered; ranking on
the raw mean could order two captains differently than their displayed
scores imply.

The final `ORDER BY` presents the table by `engine_type` ascending; the
judge compares result rows as an unordered multiset, so that clause is
presentation rather than correctness. Cost-wise, grouping scans every
ride once against hash or index probes into the two dimension tables, and
the window adds one sort of the grouped rows: linear in rides plus a sort
of the (engine type, captain) pairs.

**Complexity:** `O(T log D)` time for `T` rides and `D` grouped
(engine type, captain) pairs (`O(T)` when the group rows fit in memory and
no index probe degrades to a scan), `O(D)` space beyond the input.
