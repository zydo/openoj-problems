# Solutions — Rising Third Purchases

## Sequence each user with windows, keep the rising third

One CTE walks every user's history in date order: `ROW_NUMBER() OVER
(PARTITION BY user_id ORDER BY purchased_at)` numbers each purchase
inside its user, while two `LAG(amount, k)` windows over the same
partition carry the amount one and two positions back. For the row
numbered 3 those lagged values are exactly the two preceding purchases'
amounts, so the outer filter — `rn = 3 AND amount > prev_amount_1 AND
amount > prev_amount_2` — keeps precisely the third purchases that
strictly top both of their predecessors. Users with fewer than three
rows never produce an `rn = 3` row and drop out on their own, and later
purchases are never examined.

The composite key `(user_id, purchased_at)` makes the per-user date
order total, so the numbering has no tie-breaking freedom to get wrong,
and `user_id` is unique among surviving rows, which makes the final
`ORDER BY user_id` deterministic. The two output aliases emit the
amount and the date of the surviving third purchase under the column
names the statement fixes.

The window sort dominates the cost: with `T` purchases the engine sorts
each partition once, and the filter and final sort are linear passes
over the windowed rows.

**Complexity:** `O(T log T)` time, `O(T)` space.
