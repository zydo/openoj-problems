# Signed In Twice at Once

## Description

A streaming service keeps a log of every sign-in session in one table.
`AccessLog` holds one row per session: which user signed in, the IP
address the session used, and the moments it started and ended.

Table: `AccessLog`

| Column Name | Type     |
| ----------- | -------- |
| user_id     | int      |
| ip_address  | int      |
| signed_in   | datetime |
| signed_out  | datetime |

The table may contain duplicate rows, and every `signed_out` moment is
later than its matching `signed_in`.

A user should be banned if they were signed in at some moment from two
different IP addresses — that is, two sessions from different addresses
were live at the same moment.

Find the `user_id` of every user that should be banned.

The result rows may come back in any order.

The result format is shown in the following examples.

### Example 1

```text
Input:
AccessLog table:
+---------+------------+---------------------+---------------------+
| user_id | ip_address | signed_in           | signed_out          |
+---------+------------+---------------------+---------------------+
| 3       | 11         | 2024-04-02 08:00:00 | 2024-04-02 09:15:00 |
| 3       | 12         | 2024-04-02 09:00:00 | 2024-04-02 10:30:00 |
| 5       | 21         | 2024-04-02 12:00:00 | 2024-04-02 13:00:00 |
| 5       | 22         | 2024-04-03 12:00:00 | 2024-04-03 13:00:00 |
| 8       | 30         | 2024-04-02 18:00:00 | 2024-04-02 18:45:00 |
| 8       | 31         | 2024-04-02 18:45:00 | 2024-04-02 19:30:00 |
| 9       | 40         | 2024-04-02 07:00:00 | 2024-04-02 07:59:59 |
| 9       | 41         | 2024-04-02 08:00:00 | 2024-04-02 08:30:00 |
+---------+------------+---------------------+---------------------+
Output:
+---------+
| user_id |
+---------+
| 3       |
| 8       |
+---------+
Explanation:
User 3 --> Signed in from address 11 until 09:15:00 while the session
from address 12 was already live from 09:00:00, so the two sessions
shared the moment 09:00:00. Banned.
User 5 --> Two different addresses, but on two different days; the
sessions never overlap.
User 8 --> The first session ends at exactly 18:45:00, the moment the
second one starts, so they were both live at 18:45:00. Banned.
User 9 --> The sessions ended at 07:59:59 and started at 08:00:00,
which do not share any moment.
```

### Example 2

```text
Input:
AccessLog table:
+---------+------------+---------------------+---------------------+
| user_id | ip_address | signed_in           | signed_out          |
+---------+------------+---------------------+---------------------+
| 2       | 5          | 2024-06-10 10:00:00 | 2024-06-10 20:00:00 |
| 2       | 6          | 2024-06-10 13:00:00 | 2024-06-10 14:00:00 |
| 2       | 6          | 2024-06-11 13:00:00 | 2024-06-11 14:00:00 |
| 4       | 7          | 2024-06-10 09:00:00 | 2024-06-10 10:00:00 |
| 4       | 7          | 2024-06-10 09:30:00 | 2024-06-10 10:30:00 |
| 6       | 8          | 2024-06-10 21:00:00 | 2024-06-10 22:00:00 |
+---------+------------+---------------------+---------------------+
Output:
+---------+
| user_id |
+---------+
| 2       |
+---------+
Explanation:
User 2 --> The session from address 6 sat entirely inside the session
from address 5 on 2024-06-10; the next day's session from address 6 is
on its own. Banned.
User 4 --> Both overlapping sessions used the same address 7, so this
is one viewer with two tabs, not two places at once.
User 6 --> A single session, nothing to collide with.
```

Write your solution as a single `SELECT` query returning `user_id` for
every user that must be banned, in any order.
