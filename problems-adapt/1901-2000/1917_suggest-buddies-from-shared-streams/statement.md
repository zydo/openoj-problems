# Suggest Buddies from Shared Streams

## Description

Table: `Streams`

| Column Name | Type |
| ----------- | ---- |
| listener_id | int  |
| track_id    | int  |
| day         | date |

This table may contain duplicates (in other words, there is no primary
key for this table in SQL).
Each row records that listener `listener_id` streamed track `track_id`
on day `day`.

Table: `Buddies`

| Column Name | Type |
| ----------- | ---- |
| buddy1_id   | int  |
| buddy2_id   | int  |

In SQL, `(buddy1_id, buddy2_id)` is the primary key for this table.
Each row records that listeners `buddy1_id` and `buddy2_id` are buddies.
Note that `buddy1_id` < `buddy2_id`.

Suggest buddies to the app's listeners. Listener `x` should be suggested
to listener `y` when both hold:

- Listeners `x` and `y` are not buddies, and
- Listeners `x` and `y` streamed three or more different common tracks
  on the same day.

Suggestions are directional: when `x` and `y` qualify for each other, the
result contains both `x` suggested to `y` and `y` suggested to `x`. The
result must not repeat a row — `y` is suggested to `x` at most once, even
if the pair qualifies on several days.

Return the result table in any order.

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
| 9           | 100      | 2022-05-02 |
| 9           | 101      | 2022-05-02 |
| 9           | 102      | 2022-05-02 |
| 4           | 100      | 2022-05-02 |
| 4           | 101      | 2022-05-02 |
| 5           | 100      | 2022-05-02 |
| 5           | 101      | 2022-05-03 |
| 5           | 102      | 2022-05-03 |
| 6           | 100      | 2022-05-03 |
| 6           | 101      | 2022-05-03 |
| 6           | 102      | 2022-05-03 |
+-------------+----------+------------+
Buddies table:
+-----------+-----------+
| buddy1_id | buddy2_id |
+-----------+-----------+
| 3         | 9         |
+-----------+-----------+
Output:
+-------------+---------------+
| listener_id | suggested_id  |
+-------------+---------------+
| 3           | 7             |
| 7           | 9             |
| 7           | 3             |
| 9           | 7             |
+-------------+---------------+
Explanation:
Listeners 3 and 7 shared tracks 100, 101, and 102 on 2022-05-02 and
tracks 200, 201, and 202 on 2022-05-09 — they qualify on two days but
are only suggested once per direction. Listener 3's repeated row for
track 100 counts the track once. Listeners 3 and 9 also reached three
common tracks on 2022-05-02, but they are already buddies, so neither
is suggested. Listeners 7 and 4 shared only two tracks that day, and
listeners 5 and 6 never reached three common tracks on a single day.
```

### Example 2

```text
Input:
Streams table:
+-------------+----------+------------+
| listener_id | track_id | day        |
+-------------+----------+------------+
| 21          | 30       | 2022-01-10 |
| 21          | 31       | 2022-01-10 |
| 21          | 32       | 2022-01-10 |
| 22          | 30       | 2022-01-10 |
| 22          | 31       | 2022-01-10 |
| 23          | 30       | 2022-01-10 |
| 23          | 31       | 2022-01-10 |
| 23          | 32       | 2022-01-10 |
+-------------+----------+------------+
Output:
+-------------+---------------+
| listener_id | suggested_id  |
+-------------+---------------+
| 21          | 23            |
| 23          | 21            |
+-------------+---------------+
Explanation:
Listeners 21 and 23 streamed the same three tracks that day and are not
buddies, so each is suggested to the other. Both pairs involving
listener 22 stop at two common tracks.
```

Write your solution as a single `SELECT` query returning the suggestions
as rows `listener_id` / `suggested_id` — each direction of each
suggestion exactly once, in any order.
