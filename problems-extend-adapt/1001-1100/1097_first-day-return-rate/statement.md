# First-Day Return Rate

## Description

A habit-tracking app records every day a user opens it. `Logins`
holds one row per user-day: the user, the device they used, and how
long they stayed.

Table: `Logins`

| Column Name  | Type |
| ------------ | ---- |
| user_id      | int  |
| device_id    | int  |
| login_date   | date |
| minutes_used | int  |

(`user_id`, `login_date`) is the primary key (combination of columns
with unique values) of this table. Each row records one login day: the
user, the device they used, the date, and the number of minutes
(possibly 0) they spent in the app before logging out.

A user's first-login day is the earliest `login_date` of that user.

For a date `x`, the first-day return rate is the number of users whose
first-login day is `x` and who opened the app again on the day right
after `x`, divided by the number of users whose first-login day is
`x`, rounded to 2 decimal places.

Report, for every first-login day, the number of users who logged in
for the first time on that day, and the first-day return rate of that
day.

Return the result rows in any order.

The result format is shown in the following example.

### Example 1

```text
Input:
Logins table:
+---------+-----------+------------+--------------+
| user_id | device_id | login_date | minutes_used |
+---------+-----------+------------+--------------+
| 1       | 2         | 2023-04-10 | 12           |
| 1       | 2         | 2023-04-11 | 8            |
| 2       | 1         | 2023-04-10 | 5            |
| 3       | 4         | 2023-01-31 | 3            |
| 3       | 4         | 2023-02-01 | 9            |
| 4       | 2         | 2023-04-10 | 0            |
| 5       | 3         | 2023-01-31 | 6            |
| 5       | 3         | 2023-02-02 | 4            |
+---------+-----------+------------+--------------+
Output:
+-------------+-----------+-------------+
| first_login | new_users | return_rate |
+-------------+-----------+-------------+
| 2023-01-31  | 2         | 0.50        |
| 2023-04-10  | 3         | 0.33        |
+-------------+-----------+-------------+
Explanation:
Users 3 and 5 first logged in on 2023-01-31. User 3 came back on
2023-02-01, the very next day, while user 5 stayed away until
2023-02-02, so the first-day return rate of 2023-01-31 is
1 / 2 = 0.50.
Users 1, 2, and 4 first logged in on 2023-04-10, and only user 1 came
back on 2023-04-11, so the first-day return rate of 2023-04-10 is
1 / 3 = 0.33.
```

Write your solution as a single `SELECT` query returning
`first_login`, `new_users`, and `return_rate`.
