# Solutions — Runner-Up Earners By Unit

## Dense rank per unit, keep rank two

`DENSE_RANK() OVER (PARTITION BY unit ORDER BY wage DESC)` numbers the
distinct wage levels inside each unit from the top: every copy of a
unit's best wage lands on rank one, its second-highest distinct value
on rank two. Ties never consume extra ranks precisely because dense
ranking skips nothing between distinct values.

Keeping only `rnk = 2` rows selects exactly the workers earning their
unit's runner-up wage — all duplicates included — while units without a
second distinct level (a single worker or one shared wage) simply never
produce a rank-two row and drop out of the result without any special
case. The final sort by `worker_id` produces the required ascending
order.

**Complexity:** `O(n log n)` time, `O(n)` space.
