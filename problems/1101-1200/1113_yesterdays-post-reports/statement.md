# Yesterday's Post Reports

## Description

A social platform logs what its users do to posts. `Interactions`
holds one row per logged event: which user acted on which post, on
what day, and what they did.

Table: `Interactions`

| Column Name | Type    |
| ----------- | ------- |
| user_id     | int     |
| post_id     | int     |
| event_date  | date    |
| action      | enum    |
| detail      | varchar |

This table may contain duplicate rows.
The `action` column is an ENUM (category) type of (`'view'`, `'like'`,
`'reaction'`, `'comment'`, `'report'`, `'share'`).
The `detail` column carries optional context for the action — for a
report, the reason behind it.

Assume today is `2019-07-05`. For every report reason, count how many
distinct posts were reported yesterday, `2019-07-04`.

Reasons with no reports yesterday simply do not appear. Return the
result rows in any order.

The result format is shown in the following examples.

### Example 1

```text
Input:
Interactions table:
+---------+---------+------------+--------+------------+
| user_id | post_id | event_date | action | detail     |
+---------+---------+------------+--------+------------+
| 1       | 3       | 2019-07-04 | view   | null       |
| 2       | 3       | 2019-07-04 | report | spam       |
| 3       | 3       | 2019-07-04 | report | spam       |
| 4       | 7       | 2019-07-04 | report | spam       |
| 5       | 7       | 2019-07-03 | report | spam       |
| 6       | 9       | 2019-07-04 | report | harassment |
| 2       | 9       | 2019-07-04 | like   | null       |
| 7       | 3       | 2019-07-05 | report | scam       |
+---------+---------+------------+--------+------------+
Output:
+------------+--------------+
| reason     | report_count |
+------------+--------------+
| harassment | 1            |
| spam       | 2            |
+------------+--------------+
Explanation:
Yesterday, post 3 was reported as spam by users 2 and 3 and post 7 as
spam by user 4 — two distinct posts, so spam counts 2. Post 9 was
reported for harassment once. Post 7's spam report from 2019-07-03 and
post 3's scam report from 2019-07-05 are not from yesterday and do not
count.
```

### Example 2

```text
Input:
Interactions table:
+---------+---------+------------+--------+--------+
| user_id | post_id | event_date | action | detail |
+---------+---------+------------+--------+--------+
| 1       | 5       | 2019-07-04 | view   | null   |
| 1       | 5       | 2019-07-04 | like   | null   |
| 2       | 6       | 2019-07-03 | report | spam   |
| 2       | 6       | 2019-07-05 | report | spam   |
+---------+---------+------------+--------+--------+
Output:
+--------+--------------+
| reason | report_count |
+--------+--------------+
+--------+--------------+
Explanation:
The only reports happened on 2019-07-03 and 2019-07-05, so nothing was
reported yesterday and the result is empty.
```

Write your solution as a single `SELECT` query returning `reason` and
`report_count`.
