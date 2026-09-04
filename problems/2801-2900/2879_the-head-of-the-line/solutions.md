# Solutions — The Head Of The Line

## Sort by slot and stop after three

The `LineUp` table already holds one row per person in the line, so
reporting the head of the line is a straight ordered scan with a cut-off.
Name the four output columns in the SELECT list — `entrant_id`,
`entrant_name`, `entrant_town`, then `entrant_points` — read them from
`LineUp`, sort by `slot_no`, and keep `LIMIT 3`. Naming the columns
rather than `SELECT *` keeps the result at exactly the line's four
attributes, and the limit is what turns the full ordered scan into the
head-of-the-line report.

The boundary behavior comes built in: a line shorter than three lets
every row through, so the same query serves the one-person, two-person,
and empty line. And the answer does not depend on the order the
dataset's INSERT statements happened to use, because `slot_no` records
each person's 1-based place in the line — `ORDER BY slot_no` recovers
the line's own order, so reversed and shuffled inserts collapse to the
same output. Ordering by a data column instead would be wrong: entrant
ids may descend while line order ascends, and two people sharing a town
would order arbitrarily.

**Complexity:** `O(n log n)` time, `O(n)` space — the `n` people in the
line are read and ordered by `slot_no`, while the reported result itself
keeps only the first three.
