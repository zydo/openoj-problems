# Solutions — One Row Per Address

## Keep each address's earliest signup with an aggregate over the ids

By the dataset contract, an address's first occurrence is the row
holding the smallest `signup_id` among the rows with that address — so
the rows to keep are exactly the rows whose `signup_id` equals the
minimum `signup_id` of its address group. The inner query computes that
keep-set in one sweep: `GROUP BY address` collapses the rows sharing an
address into one group and `MIN(signup_id)` reads the first occurrence's
id out of each group. The outer query then keeps the rows whose id is in
that set.

Because a later signup is dropped, not merged, every surviving row is an
original `(signup_id, subscriber_name, address)` triple; no aggregation
is applied to the outer columns. The trailing `ORDER BY signup_id`
restores id order, which is also the order the example's output table
lists the kept rows in, so the result is the input table minus the
late-arriving duplicates: Josh's and Ivy's rows are gone because their
addresses already occurred at smaller ids. The case-sensitive comparison
comes for free — grouping compares addresses exactly, so `per@sunmail.co`
and `Per@sunmail.co` land in different groups and both survive.

**Complexity:** `O(n log n)` time, `O(n)` space — grouping `n` rows by
`address` costs an `n log n` sort-backed aggregation, the id set holds
at most one entry per distinct address, and the outer scan visits each
row once.
