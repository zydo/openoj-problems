# Spam Takedown Rate

## Description

A content platform logs what its users do to posts, and its moderation
team takes down posts that break the rules. `Interactions` holds one
row per logged event: which user acted on which post, on what day, and
what they did. `Takedowns` records the posts that were later removed.

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

Table: `Takedowns`

| Column Name   | Type |
| ------------- | ---- |
| post_id       | int  |
| takedown_date | date |

`post_id` is the primary key (column with unique values) of this table.
Each row means the post was taken down — because of reports or a
moderation review; when it happened does not matter here.

For each day on which at least one post was reported as **spam**,
measure what percentage of that day's spam-reported posts were
eventually taken down. Return the average of these daily percentages,
rounded to 2 decimal places.

The result format is shown in the following example.

### Example 1

```text
Input:
Interactions table:
+---------+---------+------------+--------+------------+
| user_id | post_id | event_date | action | detail     |
+---------+---------+------------+--------+------------+
| 10      | 100     | 2021-03-01 | view   | null       |
| 10      | 100     | 2021-03-01 | report | spam       |
| 11      | 200     | 2021-03-01 | report | spam       |
| 11      | 200     | 2021-03-02 | report | spam       |
| 12      | 300     | 2021-03-02 | report | harassment |
| 13      | 400     | 2021-03-03 | report | spam       |
| 13      | 400     | 2021-03-04 | like   | null       |
+---------+---------+------------+--------+------------+
Takedowns table:
+---------+---------------+
| post_id | takedown_date |
+---------+---------------+
| 100     | 2021-03-20    |
| 400     | 2021-03-25    |
+---------+---------------+
Output:
+-----------------------+
| average_daily_percent |
+-----------------------+
| 50.00                 |
+-----------------------+
Explanation:
On 2021-03-01 two distinct posts were reported as spam and only post
100 was taken down, so that day scores 50%. On 2021-03-02 the only
spam-reported post, post 200, still stands, so that day scores 0%. On
2021-03-03 post 400 was reported as spam and later removed, so that
day scores 100%. The average is (50 + 0 + 100) / 3 = 50. The
harassment report and the day-less events never enter the average,
and neither do the takedown dates themselves.
```

### Example 2

```text
Input:
Interactions table:
+---------+---------+------------+--------+--------+
| user_id | post_id | event_date | action | detail |
+---------+---------+------------+--------+--------+
| 7       | 50      | 2020-11-05 | report | spam   |
| 8       | 50      | 2020-11-05 | report | spam   |
| 9       | 60      | 2020-11-05 | report | racism |
| 9       | 70      | 2020-11-06 | report | spam   |
+---------+---------+------------+--------+--------+
Takedowns table:
+---------+---------------+
| post_id | takedown_date |
+---------+---------------+
| 50      | 2020-11-30    |
| 70      | 2020-12-01    |
+---------+---------------+
Output:
+-----------------------+
| average_daily_percent |
+-----------------------+
| 100.00                |
+-----------------------+
Explanation:
Post 50 was reported as spam twice on 2020-11-05, but a day's
percentage counts distinct posts, so that day is the single post 50 —
removed, hence 100%. Post 70, the only spam report of 2020-11-06, was
also taken down, so that day is 100% too. The racism report of post 60
never counts. The average is 100.00.
```

Write your solution as a single `SELECT` query returning
`average_daily_percent`.
