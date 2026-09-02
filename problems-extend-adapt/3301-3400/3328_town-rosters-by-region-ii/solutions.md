# Solutions — Town Rosters By Region II

## One ordered pass per region: aggregate, filter with HAVING

The whole contract is a single grouped scan. The rows are first forced
into a normalized order inside a subquery — `ORDER BY
REPLACE(LOWER(town), ' ', ''), town` compares names case-insensitively
with spaces stripped, and the `LIMIT -1 OFFSET 0` keeps the optimizer
from flattening the subquery away. `GROUP_CONCAT` therefore reads each
region's towns already in that order and the one aggregate both joins
them with `', '` into the roster and counts the letter matches via
`SUM(SUBSTR(region, 1, 1) = SUBSTR(town, 1, 1))`, which is 1 for every
town whose first letter equals the region's.

`HAVING COUNT(*) >= 3 AND SUM(...) >= 1` applies the two eligibility
rules — a large-enough town set and at least one same-letter town — and
drops every region that fails either. The final sort orders by the
match count descending, breaking ties by region name ascending, exactly
as the statement requires. The stripped comparison is what puts `Elm
shade` ahead of `Ember`: with the space removed, `elmshade` sorts
before `ember` at the second letter.

**Complexity:** `O(n log n)` time, `O(n)` space.
