# Solutions — Pay Gap Between Divisions

## Compute both division maxima in one scan

Conditional aggregation folds the two per-division extremes into a single
pass over `Payroll`: each row is tested once against its own `division`,
contributes its `pay` to exactly one of the two `MAX` aggregates, and rows
from any other division match neither branch. Because the data guarantees
at least one `Engineering` row and at least one `Marketing` row, neither
aggregate ever reduces to a lone NULL, so the subtraction always sees two
real salaries and `ABS` produces the required non-negative gap no matter
which of the two divisions pays more.

The whole table is read once, and between rows the engine holds only the
two running maxima, so neither the working state nor the output grows with
the data.

**Complexity:** `O(N)` time, `O(1)` space.
