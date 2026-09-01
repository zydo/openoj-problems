# Solutions — Consecutive Seat Number Runs

## Group by the gap count, then take MIN and MAX per group

Two seat numbers belong to the same block exactly when every number
between them is present, which a self-join can test but at quadratic cost.
The linear trick is to notice that within a run of consecutive numbers,
subtracting each one's rank among the sorted rows — its row number,
starting at 1 — leaves a constant: `4-1=3`, `5-2=3`, `6-3=3`, `7-4=3`
share one key, while the gap moves the next row's key to `11-5=6`, and
`24-6=18`, `25-7=18`, `26-8=18` share a third. Each missing number bumps
every later row's rank by one more than it bumps `seat_id`, so the
difference identifies the block and never collides across blocks.

So the query numbers the rows in seat order with a window function, groups
by that `seat_id - row number` difference, and reads each block's
boundaries straight off the group: `MIN(seat_id)` as `first_seat`,
`MAX(seat_id)` as `last_seat`. One scan, one sort, one aggregation — no
joins.

**Complexity:** `O(n log n)` time for the ordering pass over `n` seat rows
(the grouping itself is `O(n)`), `O(n)` space.
