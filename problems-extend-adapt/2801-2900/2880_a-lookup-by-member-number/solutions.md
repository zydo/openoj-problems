# Solutions — A Lookup By Member Number

## Filter the rows by member number, then project the two columns

The `Members` table already holds one row per member, so the lookup is
two restrictions applied in order: on rows, then on columns.
`WHERE member_no = 101` keeps only the matching row, and naming
`member_name`, `member_age` in the SELECT list — rather than
`SELECT *` — keeps the result at exactly those two columns in that
exact order.

Because each dataset's `member_no` values are distinct, the filtered row
set holds at most one row: it is that member's row, or the empty table
when no member carries the number `101`. Nothing about the output
depends on where the matching row sits — first, last, or shuffled
somewhere in between — because `WHERE` scans every row of the table and
keeps the ones that satisfy the predicate, so the query needs no
`ORDER BY` at all.

**Complexity:** `O(n)` time, `O(1)` space — the query scans all `n` rows
of the table once, and the result holds at most one
`(member_name, member_age)` pair.
