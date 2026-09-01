# Solutions — Prepaid Card Balances

## Aggregate movements per card, then filter on the sum

Group `Movements` by `card_no` and sum `delta` to get each card's
balance in one pass, then join that aggregate onto `Cards` by
`card_no`. A card with no rows in `Movements` never produces a group,
so a plain inner join already drops it correctly — its balance is 0,
which can never exceed the 10000 threshold anyway.

Apply the `> 10000` filter with a `HAVING` clause on the grouped sum
rather than a `WHERE` clause on a per-row `delta`, since the threshold
applies to the aggregate balance, not to any individual movement.
Project `owner` alongside the summed `delta` as `balance`.

**Complexity:** `O(n)` time and `O(n)` space, where `n` is the number
of movements — a single grouped scan of `Movements` followed by a join
onto `Cards`.
