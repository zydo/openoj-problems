# Solutions — Bonus Payroll

The payout rule is one conditional evaluated per row over two columns,
so the whole task is a single projection: derive `pay` or `0` for each
staff member with a `CASE` expression, and order the result by the key.

## Conditional projection

Select every `Staff` row and emit `CASE WHEN staff_id % 2 = 1 AND
SUBSTR(full_name, 1, 1) != 'M' THEN pay ELSE 0 END` as the `payout`
column. The odd test reads the primary key directly, and comparing the
first character against `'M'` keeps the exclusion exact rather than
collation-dependent (`LIKE` ignores letter case for ASCII in some
engines, which would silently spare a lowercase `'mila'` too); both
conditions must hold for the full pay to pass through.

Ordering by `staff_id` at the end makes the output deterministic for
the sorted comparison.

**Complexity:** `O(r)` time for `r` rows, `O(1)` additional space.
