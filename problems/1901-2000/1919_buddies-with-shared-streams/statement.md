# Buddies with Shared Streams

## Description

Table: `Streams`

| Column Name | Type |
| ----------- | ---- |
| listener_id | int  |
| track_id    | int  |
| day         | date |

This table may contain duplicate rows.
Each row records that listener `listener_id` streamed track `track_id` on
the day `day`.

Table: `Buddies`

| Column Name | Type |
| ----------- | ---- |
| buddy1_id   | int  |
| buddy2_id   | int  |

`(buddy1_id, buddy2_id)` is the primary key (combination of columns with
unique values) for this table.
Each row records that listeners `buddy1_id` and `buddy2_id` are buddies.
Note that `buddy1_id` < `buddy2_id`.

Report the app's buddy pairs that stream alike. Listeners `x` and `y`
stream alike when both hold:

- Listeners `x` and `y` are buddies, and
- Listeners `x` and `y` streamed three or more different common tracks on
  the same day.

Return the result table in any order. Each qualifying pair must come back
the same way it was stored in the input (i.e., always
`buddy1_id` < `buddy2_id`), once per pair.

Each testcase's `dataset` seeds the tables: its script inserts the
testcase's `Streams` and `Buddies` rows (whichever are present) before
your query runs. The result format is in the following example.

### Example 1

```text
Input:
Streams table:
+-------------+----------+------------+
| listener_id | track_id | day        |
+-------------+----------+------------+
| 3           | 100      | 2022-05-02 |
| 3           | 100      | 2022-05-02 |
| 3           | 101      | 2022-05-02 |
| 3           | 102      | 2022-05-02 |
| 3           | 200      | 2022-05-09 |
| 3           | 201      | 2022-05-09 |
| 3           | 202      | 2022-05-09 |
| 7           | 100      | 2022-05-02 |
| 7           | 101      | 2022-05-02 |
| 7           | 102      | 2022-05-02 |
| 7           | 200      | 2022-05-09 |
| 7           | 201      | 2022-05-09 |
| 7           | 202      | 2022-05-09 |
| 8           | 100      | 2022-05-02 |
| 8           | 101      | 2022-05-02 |
| 8           | 102      | 2022-05-02 |
| 5           | 400      | 2022-06-01 |
| 5           | 401      | 2022-06-01 |
| 5           | 402      | 2022-06-02 |
| 6           | 400      | 2022-06-02 |
| 6           | 401      | 2022-06-02 |
| 6           | 402      | 2022-06-02 |
+-------------+----------+------------+
Buddies table:
+-----------+-----------+
| buddy1_id | buddy2_id |
+-----------+-----------+
| 3         | 7         |
| 3         | 8         |
| 5         | 6         |
| 1         | 2         |
+-----------+-----------+
Output:
+-----------+-----------+
| buddy1_id | buddy2_id |
+-----------+-----------+
| 3         | 7         |
| 3         | 8         |
+-----------+-----------+
Explanation:
Buddies 3 and 7 shared tracks 100, 101, and 102 on 2022-05-02 and again
tracks 200, 201, and 202 on 2022-05-09 — they qualify, and one row
reports them. Listener 3's repeated row for track 100 counts the track
once. Buddies 3 and 8 reached the same three tracks on 2022-05-02, so
they qualify too. Buddies 5 and 6 never held three common tracks on a
single day (their only same-day overlap is track 402), and buddies 1 and
2 have no streams at all. Listeners 7 and 8 streamed alike but are not
buddies, so they are not reported.
```

### Example 2

```text
Input:
Streams table:
+-------------+----------+------------+
| listener_id | track_id | day        |
+-------------+----------+------------+
| 11          | 50       | 2022-01-10 |
| 11          | 51       | 2022-01-10 |
| 11          | 52       | 2022-01-10 |
| 12          | 50       | 2022-01-10 |
| 12          | 51       | 2022-01-10 |
| 12          | 52       | 2022-01-10 |
| 13          | 50       | 2022-01-10 |
| 13          | 51       | 2022-01-10 |
| 13          | 52       | 2022-01-10 |
+-------------+----------+------------+
Buddies table:
+-----------+-----------+
| buddy1_id | buddy2_id |
+-----------+-----------+
| 11        | 12        |
+-----------+-----------+
Output:
+-----------+-----------+
| buddy1_id | buddy2_id |
+-----------+-----------+
| 11        | 12        |
+-----------+-----------+
Explanation:
Listeners 11, 12, and 13 all streamed the same three tracks that day,
but only the pair that is actually stored as buddies — 11 and 12 — is
reported.
```

Write your solution as a single `SELECT` query returning the qualifying
pairs as rows `buddy1_id` / `buddy2_id` — each pair exactly once with
`buddy1_id` < `buddy2_id`, in any order.
