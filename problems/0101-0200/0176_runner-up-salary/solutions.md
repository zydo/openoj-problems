# Solutions — Runner-Up Salary

## Max below the maximum

The request is positional over the _distinct_ amounts: the value one step below the top, with `null` when fewer than two distinct values exist. `(SELECT MAX(amount) FROM Wages)` finds the top, the outer filter `amount <` that value keeps exactly the rows the runner-up is drawn from, and `MAX` over them is the answer. The aggregate form is chosen over `DISTINCT ... ORDER BY amount DESC LIMIT 1 OFFSET 1`: with fewer than two distinct amounts the OFFSET form yields an empty row set, while an aggregate over zero rows emits one row holding `null` — the output shape the contract requires, with no wrapper query.

Duplicates collapse without any explicit deduplication. The strict `<` excludes every copy of the top amount at once, so repeated top values cannot leak into the answer, and `MAX` picks the largest remaining value no matter how often it repeats. Because the outer query is a plain aggregate its row count is fixed at one: the runner-up when it exists, and `null` for the all-equal, single-row, and empty-table cases.

The uncorrelated scalar subquery scans `Wages` once for the maximum and the outer query scans it once more with a constant comparison per row; nothing beyond a running maximum is materialized. With `E` rows in `Wages` that is two linear passes.

**Complexity:** `O(E)` time, `O(1)` extra space.
