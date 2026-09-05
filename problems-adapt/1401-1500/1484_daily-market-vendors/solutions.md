# Solutions — Daily Market Vendors

## One GROUP BY with COUNT and GROUP_CONCAT over DISTINCT vendors

Grouping by `market_date` collapses the duplicate lines the table
permits into one output row per day. Inside each group,
`COUNT(DISTINCT vendor)` reports how many different stalls traded, and
`GROUP_CONCAT(DISTINCT vendor ORDER BY vendor)` builds the
comma-separated name list — SQLite's `GROUP_CONCAT` accepts both
qualifiers, so the dedup and the lexicographic ordering happen inside
the aggregate with no subquery or join. An outer
`ORDER BY market_date` fixes the row order.

**Complexity:** one scan of the table plus an in-group sort,
`O(n log n)` time overall, `O(n)` space.
