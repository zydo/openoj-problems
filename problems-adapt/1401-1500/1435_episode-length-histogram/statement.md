# Episode Length Histogram

## Description

A podcast network wants a picture of how long its episodes run.
`Episodes` holds one row per published episode.

Table: `Episodes`

| Column Name | Type |
| ----------- | ---- |
| episode_id  | int  |
| runtime     | int  |

`episode_id` is the column of unique values for this table. `runtime`
is the episode's length in seconds.

Group the episodes into four length buckets, counted in minutes:
`[0-5>`, `[5-10>`, `[10-15>`, and `15 or more`. An episode lands in
the bucket whose interval contains its runtime — `[0-5>` means at
least 0 and less than 5 minutes, and so on — and an episode of 15
minutes or longer belongs to the last bucket.

Report the pair (`bucket`, `total`): the bucket's label and the number
of episodes in it.

Each testcase's `dataset` seeds the table: its script inserts the
testcase's `Episodes` rows before your query runs. All four buckets
appear in the result even when their count is `0`, with the exact
labels `[0-5>`, `[5-10>`, `[10-15>` and `15 or more`. Runtimes are
seconds, so the bucket edges sit at 300, 600 and 900 seconds. Return
the result table in any order. The result format is in the following
example.

### Example 1

```text
Input:
Episodes
+------------+---------+
| episode_id | runtime |
+------------+---------+
| 1          | 45      |
| 2          | 240     |
| 3          | 299     |
| 4          | 540     |
| 5          | 1500    |
| 6          | 60      |
+------------+---------+
Output:
+--------------+-------+
| bucket       | total |
+--------------+-------+
| [0-5>        | 4     |
| [5-10>       | 1     |
| [10-15>      | 0     |
| 15 or more   | 1     |
+--------------+-------+
Explanation: Episodes 1, 2, 3, and 6 run 45, 240, 299, and 60 seconds
— under 5 minutes each — so the first bucket counts 4. Episode 4 runs
540 seconds, between 5 and 10 minutes. Nothing lands between 10 and
15 minutes, yet the `[10-15>` row still appears, reporting 0. Episode
5 runs 1500 seconds, a full 25 minutes, filling the last bucket.
```

Write your solution as a single `SELECT` query returning two columns
— `bucket` and `total` — exactly four rows.

## Hints

### Hint 1

A bucket with no episodes must still show up with a count of 0, so
build the answer as four constant-labeled SELECTs glued together with
`UNION ALL`.

### Hint 2

Give every arm its own `WHERE` slice of `runtime` — under 300 seconds,
then 300 to 599, 600 to 899, and finally 900 and up — so the four
ranges together cover every possible episode exactly once.
