# Solutions — Play Log Running Totals

## Window Function Running Sum

What is asked for is a running total of `rounds` per user in date order, with
every logged session keeping its row — exactly the shape of an ordered window
aggregate. The query reads each row of `PlayLog` and computes
`SUM(rounds) OVER (PARTITION BY user_id ORDER BY session_date)`: the partition
isolates one user's history, and the ordering with the default frame — every
row from the partition's start through the current one — accumulates all of
that user's earlier sessions plus the session being read.

`GROUP BY` is not wanted and would be wrong: grouping collapses each user's
sessions into a single summary row, while the window annotates every row where
it stands. The `(user_id, session_date)` primary key guarantees at most one row
per user per day, so the running total is deterministic and each
`(user, day)` pair shows up exactly once, matching the required output. The
aliased column lands the required name `rounds_so_far`.

Days without a session never appear, because the query only transforms
existing rows — it invents no calendar rows. Ordering matters only inside a
partition, and since one user's dates are distinct, ties never arise. With
`n` rows, the engine sorts within partitions to feed the window.

**Complexity:** `O(n log n)` time, `O(n)` space.
