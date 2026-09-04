# App Usage I

## Description

A mobile app logs everything its users do inside it. `Events` holds
one row per logged action: which user did it, in which session, on
what day, and what kind of action it was.

Table: `Events`

| Column Name | Type |
| ----------- | ---- |
| user_id     | int  |
| session_id  | int  |
| event_date  | date |
| event_type  | enum |

This table may contain duplicate rows.
The `event_type` column is an ENUM (category) type of
(`'open_session'`, `'end_session'`, `'scroll_down'`, `'send_message'`).
Each session belongs to exactly one user.

Count the daily active users over the 30 days ending 2019-07-27,
inclusively. A user is active on a day when they log at least one
event that day, and any of the event types counts. Days with no
active users simply do not appear. Return the result rows in any
order.

The result format is shown in the following examples.

### Example 1

```text
Input:
Events table:
+---------+------------+------------+--------------+
| user_id | session_id | event_date | event_type   |
+---------+------------+------------+--------------+
| 1       | 11         | 2019-06-28 | open_session |
| 1       | 11         | 2019-06-28 | send_message |
| 2       | 12         | 2019-06-28 | open_session |
| 2       | 12         | 2019-06-29 | end_session  |
| 1       | 11         | 2019-07-27 | scroll_down  |
| 3       | 13         | 2019-07-27 | open_session |
| 4       | 14         | 2019-06-27 | open_session |
| 4       | 14         | 2019-07-28 | end_session  |
+---------+------------+------------+--------------+
Output:
+------------+--------------+
| day        | active_users |
+------------+--------------+
| 2019-06-28 | 2            |
| 2019-06-29 | 1            |
| 2019-07-27 | 2            |
+------------+--------------+
Explanation:
Users 1 and 2 are both active on 2019-06-28, the window's first day,
and user 2 returns alone on 2019-06-29. On 2019-07-27, the window's
last day, users 1 and 3 are active. User 4's two events fall one day
before and one day after the window and never count.
```

### Example 2

```text
Input:
Events table:
+---------+------------+------------+--------------+
| user_id | session_id | event_date | event_type   |
+---------+------------+------------+--------------+
| 5       | 21         | 2019-07-01 | open_session |
| 5       | 21         | 2019-07-01 | open_session |
| 5       | 22         | 2019-07-01 | send_message |
| 5       | 25         | 2019-07-02 | open_session |
| 6       | 23         | 2019-07-02 | end_session  |
| 6       | 23         | 2019-07-02 | end_session  |
| 7       | 24         | 2019-07-03 | scroll_down  |
+---------+------------+------------+--------------+
Output:
+------------+--------------+
| day        | active_users |
+------------+--------------+
| 2019-07-01 | 1            |
| 2019-07-02 | 2            |
| 2019-07-03 | 1            |
+------------+--------------+
Explanation:
User 5 is one active user on 2019-07-01 whether through one event or
three, and the duplicate row still counts once. On 2019-07-02 both
users 5 and 6 are active. User 7 appears only on 2019-07-03.
```

Write your solution as a single `SELECT` query returning `day` and
`active_users`.
