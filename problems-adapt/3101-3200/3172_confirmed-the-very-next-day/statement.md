# Confirmed The Very Next Day

## Description

Table: `Signups`

| Column Name | Type     |
| ----------- | -------- |
| signup_id   | int      |
| member_id   | int      |
| joined_at   | datetime |

(signup_id, member_id) is the primary key (combination of columns with
unique values) for this table.
Each row holds a confirmation email's identifier, the member it belongs to,
and the moment that member signed up.

Table: `Messages`

| Column Name | Type     |
| ----------- | -------- |
| message_id  | int      |
| signup_id   | int      |
| action_kind | enum     |
| acted_at    | datetime |

(message_id, signup_id) is the primary key (combination of columns with
unique values) for this table.
action_kind is an ENUM (category) type of ('Verified', 'Not Verified').
Each row holds a message's identifier, the signup it replies to, the action
that message carried, and when it was sent.

Report the members who confirmed their signup on the day right after they
joined.

Return the result table ordered by `member_id` in ascending order.

Every test case ships its own `dataset`: the statements inside it populate
`Signups` and `Messages` before your query executes. The result format is in
the following examples.

### Example 1

```text
Input:
Signups table:
+-----------+-----------+---------------------+
| signup_id | member_id | joined_at           |
+-----------+-----------+---------------------+
| 101       | 801       | 2023-09-04 10:15:00 |
| 102       | 802       | 2023-09-04 18:40:00 |
| 103       | 803       | 2023-09-11 09:00:00 |
| 104       | 804       | 2023-09-11 23:10:00 |
+-----------+-----------+---------------------+
Messages table:
+------------+-----------+--------------+---------------------+
| message_id | signup_id | action_kind  | acted_at            |
+------------+-----------+--------------+---------------------+
| 201        | 101       | Verified     | 2023-09-05 07:05:00 |
| 202        | 102       | Not Verified | 2023-09-05 12:00:00 |
| 203        | 103       | Verified     | 2023-09-12 22:50:00 |
| 204        | 104       | Verified     | 2023-09-13 00:05:00 |
+------------+-----------+--------------+---------------------+
Output:
+-----------+
| member_id |
+-----------+
| 801       |
| 803       |
+-----------+
Explanation: Member 801 joined on 2023-09-04 and their Verified message
arrives the very next calendar day, 2023-09-05, shortly after sunrise.
Member 802's only message says Not Verified, so they are out regardless of
its timing. Member 803 joined on 2023-09-11 and confirmed late on
2023-09-12 — still the next calendar day. Member 804 also joined on
2023-09-11 but their Verified message only lands on 2023-09-13, a day too
late.
```

### Example 2

```text
Input:
Signups table:
+-----------+-----------+---------------------+
| signup_id | member_id | joined_at           |
+-----------+-----------+---------------------+
| 105       | 805       | 2023-10-30 14:20:00 |
| 106       | 806       | 2023-10-30 08:00:00 |
| 107       | 807       | 2023-10-31 21:00:00 |
+-----------+-----------+---------------------+
Messages table:
+------------+-----------+--------------+---------------------+
| message_id | signup_id | action_kind  | acted_at            |
+------------+-----------+--------------+---------------------+
| 205        | 105       | Not Verified | 2023-10-31 09:00:00 |
| 206        | 105       | Verified     | 2023-10-31 23:59:00 |
| 207        | 106       | Verified     | 2023-10-30 20:15:00 |
| 208        | 107       | Verified     | 2023-11-01 00:00:00 |
+------------+-----------+--------------+---------------------+
Output:
+-----------+
| member_id |
+-----------+
| 805       |
| 807       |
+-----------+
Explanation: Member 805 first declined, then Verified one minute before
the next day ended — that message counts. Member 806 confirmed within
hours of signing up, on the signup date itself, which is too early.
Member 807 joined late on 2023-10-31 and their Verified message arrives
just past midnight on 2023-11-01, exactly the day after joining.
```

Write your solution as a single `SELECT` query returning one column,
`member_id`, for every member who has at least one `Verified` message whose
`acted_at` falls on the calendar day immediately after their joining day —
day boundaries are calendar dates, so any time of day on that next date
counts, while a `Verified` message on the signup date itself or later does
not. Return the rows ordered by ascending `member_id`.
