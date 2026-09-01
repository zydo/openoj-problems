# Same-Day Call Bookends

## Description

Table: `PhoneLog`

| Column Name | Type     |
| ----------- | -------- |
| origin_id   | int      |
| target_id   | int      |
| placed_at   | datetime |

`(origin_id, target_id, placed_at)` is the primary key (combination of
columns with unique values) for this table.
Each row is one phone call: user `origin_id` dialed user `target_id` at
moment `placed_at`.

For a user and a calendar day, look at every call that user took part in
that day — calls they placed and calls they received count equally. The
day's bookends for that user are the first of those calls and the last of
them. Report the IDs of all users for whom at least one day has both
bookends with the same other person.

Return the result table in any order.

Each testcase's `dataset` seeds the `PhoneLog` table: its script inserts
the testcase's `PhoneLog` rows (whichever are present) before your query
runs. The result format is in the following example.

### Example 1

```text
Input:
PhoneLog table:
+-----------+-----------+---------------------+
| origin_id | target_id | placed_at           |
+-----------+-----------+---------------------+
| 4         | 11        | 2022-06-01 09:15:00 |
| 11        | 4         | 2022-06-01 12:40:00 |
| 11        | 6         | 2022-06-01 17:20:00 |
| 6         | 2         | 2022-06-01 10:05:00 |
| 2         | 6         | 2022-06-01 13:30:00 |
| 9         | 4         | 2022-06-02 08:00:00 |
| 4         | 9         | 2022-06-02 19:45:00 |
| 6         | 9         | 2022-06-02 11:10:00 |
| 9         | 6         | 2022-06-02 15:35:00 |
+-----------+-----------+---------------------+
Output:
+---------+
| user_id |
+---------+
| 2       |
| 4       |
| 6       |
| 9       |
+---------+
Explanation:
On 2022-06-01, user 4 placed the day's first call (to user 11 at
09:15:00) and received the day's last one (from user 11 at 12:40:00) —
both bookends involve user 11, so user 4 is reported. User 11 fails the
same day: their first call was with user 4 but their last was with
user 6. User 6 also fails on 2022-06-01 (first with user 2, last with
user 11), yet on 2022-06-02 both of their bookends are with user 9, and
one qualifying day is enough, so user 6 is reported too. User 2's two
calls on 2022-06-01 were both with user 6, and user 9's first and last
calls on 2022-06-02 (at 08:00:00 and 19:45:00) were both with user 4.
```

### Example 2

```text
Input:
PhoneLog table:
+-----------+-----------+---------------------+
| origin_id | target_id | placed_at           |
+-----------+-----------+---------------------+
| 5         | 8         | 2022-06-03 10:00:00 |
+-----------+-----------+---------------------+
Output:
+---------+
| user_id |
+---------+
| 5       |
| 8       |
+---------+
Explanation:
The day's only call is its own first and last call, so both participants
— users 5 and 8 — have matching bookends and are reported.
```

Write your solution as a single `SELECT` query returning one column —
`user_id` — holding every user whose first and last calls of some day
were shared with the same person, in any order.
