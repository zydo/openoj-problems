# Solutions — Top Three Earners Per Office

## Dense rank the unique salaries per office

The definition runs over distinct values, not rows: a top earner is an analyst whose salary is one of their office's three highest _unique_ salaries. `DENSE_RANK() OVER (PARTITION BY officeId ORDER BY salary DESC)` numbers exactly those values — inside each office partition it walks the salaries from the top and assigns 1 to the highest distinct value, 2 to the next distinct value, and so on, giving every analyst tied at a value the same rank. Because the ranking is dense, a tie neither consumes extra ranks the way `ROW_NUMBER()` would nor skips one the way `RANK()` would: 100000, 100000, 90000 earns ranks 1, 1, 2, and the third-highest unique salary always carries rank 3 however many analysts sit at it. Filtering `rnk <= 3` is then literally the definition — everyone tied at a top-three unique salary is kept, whole ties at the third value included, and an office holding fewer than three unique salaries keeps every analyst it has.

The rank is computed in a derived table because the filter needs the window's output: a window function is evaluated after grouping but before `WHERE`, so `rnk <= 3` can only be applied one query level up from the `DENSE_RANK()` call. The ranked rows then join `Offices` on `a.officeId = o.officeId` to attach the office name — analysts whose `officeId` has no `Offices` row match nothing and drop out, and an office with no analysts contributes no rows at all. The projection emits the three requested columns: `o.officeName AS Office`, `a.name AS Analyst`, and `a.salary AS Pay`.

The window pass sorts each office partition, so `E` analyst rows cost `O(E log E)`, and the join probes each ranked row against `Offices` once; the derived table materializes one ranked row per analyst.

**Complexity:** `O(E log E)` time, `O(E)` space.
