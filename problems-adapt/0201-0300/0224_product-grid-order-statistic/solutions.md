# Solutions — Product Grid Order Statistic

## Binary Search on the Value

For a proposed value `x`, row `i` contributes `min(x // i, n)` cells no
greater than `x`. Summing this over the rows yields a monotone count without
constructing the potentially enormous grid.

Binary-search the smallest `x` whose count is at least `k`. That boundary must
be a cell value: if no cell equaled it, the count would be unchanged at
`x - 1`, contradicting that `x` was the first satisfying value.

The count may stop early after reaching `k`. Each search probe scans at most
`m` rows and uses only integer arithmetic.

**Complexity:** `O(m log(mn))` time and `O(1)` auxiliary space.
