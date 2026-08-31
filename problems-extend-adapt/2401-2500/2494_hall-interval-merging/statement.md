# Hall Interval Merging

## Description

Table: `Bookings`

| Column    | Type |
| --------- | ---- |
| hall_id   | int  |
| start_day | date |
| end_day   | date |

Each row books a hall for an inclusive date range `[start_day, end_day]`. Two
bookings of the same hall merge whenever their ranges overlap or touch — for
inclusive ranges, when the later one starts no later than the earlier one
ends. Repeatedly merging produces one maximal run per hall. Report each run as
`hall_id`, its earliest `start_day`, and its latest `end_day`, with hall ids in
ascending order.

Each test case supplies its own `dataset`: the DDL seeds the `Bookings` table
with that test case's rows. The result format is shown in the following
example.

### Example 1

```text
Input: the Bookings table from the dataset below.
Bookings rows:
hall_id | start_day  | end_day
5       | 2023-02-01 | 2023-02-03
5       | 2023-02-04 | 2023-02-09
5       | 2023-02-08 | 2023-02-11
6       | 2023-01-05 | 2023-01-20
7       | 2022-11-01 | 2022-12-15
7       | 2022-12-15 | 2023-01-01
Output:
hall_id | start_day  | end_day
5       | 2023-02-01 | 2023-02-03
5       | 2023-02-04 | 2023-02-11
6       | 2023-01-05 | 2023-01-20
7       | 2022-11-01 | 2023-01-01
Explanation: Hall 5's first booking ends on 02-03 and the second starts on
02-04 — no shared day, so they stay separate runs; the third booking overlaps
the second and merges into [02-04, 02-11]. Hall 6 stands alone. Hall 7's
bookings touch — the second starts on the first's last day — so they merge
into one run.
```

Answer with a single `SELECT`.

## Hints

### Hint 1

Order each hall's rows, then slide a window over previous rows to track the
farthest end seen so far; a row whose start is past that running maximum opens
a new merged group.

### Hint 2

Give each row a 0/1 "starts a group" flag, cumulatively sum the flag within
the hall to derive a group id, and aggregate each group with `MIN(start_day)`
and `MAX(end_day)`.
