# Play Log Running Totals

## Description

Table: `PlayLog`

| Column Name  | Type |
| ------------ | ---- |
| user_id      | int  |
| device_id    | int  |
| session_date | date |
| rounds       | int  |

No user appears twice on one day — `(user_id, session_date)` is the primary
key. A row says: this user, on that device, on that date, finished that many
rounds of a game. Zero is a legal count.

For every row in the log, report how many rounds that user had completed in
total up to and including that day.

Each test case builds its own copy of the table: the case's `dataset` value
holds the `INSERT` rows to run first.

### Example 1

```text
Input: PlayLog table from the dataset below.
Output:
user_id | session_date | rounds_so_far
4       | 2021-04-02   | 3
4       | 2021-06-11   | 10
4       | 2022-01-05   | 10
9       | 2021-04-02   | 2
9       | 2021-09-19   | 8
Explanation: user 4 completed 3 rounds, then 3 + 7 = 10, and the 0-round
session on 2022-01-05 leaves the running total unchanged at 10. Only days
with a logged session appear.
```

Answer with one `SELECT` whose output columns are `user_id`, `session_date`,
and `rounds_so_far`, in that order.

## Hints

### Hint 1

A per-user total that grows with date is a running aggregate — the shape a
window function computes without collapsing any rows.

### Hint 2

`SUM(...) OVER (PARTITION BY user_id ORDER BY session_date)` accumulates in
place; the default frame reaches from each partition's first row through the
current one.

### Hint 3

No `GROUP BY` — every logged session keeps its own row in the output.
