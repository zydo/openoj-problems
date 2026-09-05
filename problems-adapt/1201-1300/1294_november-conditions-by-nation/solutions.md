# Solutions — November Conditions by Nation

## Filter to November, group, round, classify

Only November 2019 rows matter, and a `BETWEEN '2019-11-01' AND
'2019-11-30'` filter on the date removes every other month in one
predicate — including the October and December rows planted as decoys.
Grouping what survives by `nation_id` gives each nation its November
average through `AVG(condition_level)`.

The classification thresholds apply to the _rounded_ average, so the
rounding happens before the comparison: `ROUND(AVG(condition_level))`
snaps the mean to an integer (half away from zero, matching the reference
outputs), and a `CASE` expression maps that value onto Cold at 15 or
below, Hot at 25 or above, Warm in between. The final step joins the
grouped result back to `Nations` — or aggregates a join that starts
there — so the answer carries `nation_name`, and the inner join's drop of
nations with no November rows implements the "no data, no row" rule for
free.

**Complexity:** `O(w + n)` time over `w` condition rows and `n` nations
(with the grouping hash or index doing the heavy lifting), `O(n)` space.
