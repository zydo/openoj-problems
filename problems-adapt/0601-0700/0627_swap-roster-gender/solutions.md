# Solutions — Swap Roster Gender

## A row-local `CASE` flips the two values

The requested transformation depends on no other staff row: each row's
new `gender` is determined entirely by its old `gender`, while
`staff_id`, `name`, and `pay` pass through unchanged. A single scan of
`StaffRecord` can therefore project those three untouched columns and
replace the one changed column with `CASE gender WHEN 'm' THEN 'f' ELSE
'm' END`.

The enum's domain has exactly two values, `'m'` and `'f'`. When the input
is `'m'`, the explicit branch emits `'f'`; otherwise the only permitted
value is `'f'`, and the `ELSE` emits `'m'`. That makes the `CASE` a
complete flip without a temporary table, a join, or a second pass. An
empty table naturally produces no rows, and the query preserves every
input row once because it reads each row exactly once.

The original task describes an in-place `UPDATE`, but this runner accepts
a `SELECT` query only. Returning the projected post-swap rows represents
the same final table state for judging, and unordered comparison makes an
`ORDER BY` unnecessary.

One scan processes the `n` rows; apart from the returned rows, no state is
retained.

**Complexity:** `O(n)` time, `O(1)` space.
