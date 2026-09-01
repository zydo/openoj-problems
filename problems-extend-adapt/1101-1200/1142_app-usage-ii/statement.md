# App Usage II

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

Find the average number of sessions per user over the 30 days ending
2019-07-27, inclusively, rounded to 2 decimal places. A user's session
counts when at least one of its events falls inside that period, and
only users with at least one in-period event are averaged over.

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
| 1       | 15         | 2019-07-05 | scroll_down  |
| 2       | 12         | 2019-06-30 | open_session |
| 2       | 12         | 2019-06-30 | end_session  |
| 3       | 16         | 2019-07-27 | open_session |
| 4       | 14         | 2019-06-27 | open_session |
| 4       | 14         | 2019-07-28 | end_session  |
+---------+------------+------------+--------------+
Output:
+---------------------------+
| average_sessions_per_user |
+---------------------------+
| 1.33                      |
+---------------------------+
Explanation:
User 1 used two sessions in the period (11 and 15), while users 2 and
3 used one each, so the average is (2 + 1 + 1) / 3 = 1.33. User 4
never touched the app inside the period — both of their events fall
outside it — so user 4 is not part of the average at all.
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
| 5       | 26         | 2019-07-02 | scroll_down  |
| 6       | 23         | 2019-06-27 | open_session |
| 6       | 23         | 2019-06-28 | end_session  |
| 8       | 27         | 2019-07-26 | open_session |
+---------+------------+------------+--------------+
Output:
+---------------------------+
| average_sessions_per_user |
+---------------------------+
| 1.67                      |
+---------------------------+
Explanation:
User 5's events cover three distinct sessions (21, 22, and 26) — the
duplicate row does not add a fourth. Session 23 opened one day before
the period but closed inside it, so it still counts for user 6. The
average is (3 + 1 + 1) / 3 = 1.67.
```

Write your solution as a single `SELECT` query returning
`average_sessions_per_user`.
