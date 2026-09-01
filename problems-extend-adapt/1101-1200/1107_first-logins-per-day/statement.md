# First Logins Per Day

## Description

A web app records what each signed-in user does. `Sessions` holds one
row per recorded action: who performed it, which action it was, and the
day it happened. A user can generate many rows over time, and fully
identical rows may repeat.

Table: `Sessions`

| Column Name | Type |
| ----------- | ---- |
| user_id     | int  |
| action      | enum |
| action_date | date |

The `action` column is an ENUM (category) type of (`'login'`,
`'logout'`, `'jobs'`, `'groups'`, `'homepage'`).

A user's first login is the earliest day on which that user has a
`login` row. Assume today is `2019-06-30`. For every day in the
closed 90-day window ending today — `2019-04-01` through
`2019-06-30` — count the users whose very first login fell on that
day.

Days with no such users are simply not reported. Return the result
rows in any order.

The result format is shown in the following example.

### Example 1

```text
Input:
Sessions table:
+---------+----------+--------------+
| user_id | action   | action_date  |
+---------+----------+--------------+
| 4       | jobs     | 2019-05-20   |
| 4       | login    | 2019-05-20   |
| 4       | logout   | 2019-05-20   |
| 1       | login    | 2019-06-30   |
| 1       | homepage | 2019-06-30   |
| 2       | login    | 2019-04-01   |
| 2       | logout   | 2019-04-01   |
| 2       | login    | 2019-06-15   |
| 3       | login    | 2019-03-31   |
| 3       | logout   | 2019-03-31   |
| 3       | login    | 2019-06-10   |
| 5       | homepage | 2019-06-12   |
| 5       | groups   | 2019-06-12   |
| 6       | login    | 2019-06-10   |
| 6       | logout   | 2019-06-10   |
| 6       | login    | 2019-06-29   |
| 7       | login    | 2019-06-10   |
+---------+----------+--------------+
Output:
+------------+------------+
| first_day  | user_count |
+------------+------------+
| 2019-04-01 | 1          |
| 2019-05-20 | 1          |
| 2019-06-10 | 2          |
| 2019-06-30 | 1          |
+------------+------------+
Explanation:
User 2 first logged in on 2019-04-01, exactly 90 days before today, so
the day still counts. User 3's first login was 2019-03-31, one day too
early, and user 5 never logged in at all, so neither appears. Users 6
and 7 both logged in for the first time on 2019-06-10; user 6's later
login on 2019-06-29 does not produce another row.
```

### Example 2

```text
Input:
Sessions table:
+---------+----------+--------------+
| user_id | action   | action_date  |
+---------+----------+--------------+
| 1       | login    | 2019-03-15   |
| 1       | logout   | 2019-03-15   |
| 2       | homepage | 2019-06-01   |
| 2       | groups   | 2019-06-01   |
| 3       | login    | 2019-01-02   |
+---------+----------+--------------+
Output:
+------------+------------+
| first_day  | user_count |
+------------+------------+
+------------+------------+
Explanation:
Every first login here is older than the 90-day window — user 1's on
2019-03-15 and user 3's on 2019-01-02 — and user 2 never logs in at
all, so no day qualifies and the result is empty.
```

Write your solution as a single `SELECT` query returning `first_day`
and `user_count`.
