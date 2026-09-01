# Article Reads I

## Description

A publishing site tracks every read of its articles. `Reads` holds one
row per read: which article was read, by whom it was written, who read
it, and when.

Table: `Reads`

| Column Name | Type |
| ----------- | ---- |
| article_id  | int  |
| writer_id   | int  |
| reader_id   | int  |
| read_on     | date |

This table has no primary key (column with unique values), so it may
contain duplicate rows.
Each row records that some reader read an article written by some
writer on some date.
Note that equal `writer_id` and `reader_id` indicate the same person.

Find every writer who read at least one of their own articles.

Return the result rows sorted by `id` in ascending order.

The result format is shown in the following examples.

### Example 1

```text
Input:
Reads table:
+------------+-----------+-----------+------------+
| article_id | writer_id | reader_id | read_on    |
+------------+-----------+-----------+------------+
| 101        | 15        | 42        | 2022-01-03 |
| 101        | 15        | 15        | 2022-01-04 |
| 102        | 8         | 8         | 2022-01-03 |
| 102        | 8         | 15        | 2022-01-05 |
| 103        | 8         | 8         | 2022-01-07 |
| 104        | 21        | 33        | 2022-01-08 |
| 104        | 21        | 21        | 2022-01-08 |
+------------+-----------+-----------+------------+
Output:
+----+
| id |
+----+
| 8  |
| 15 |
| 21 |
+----+
Explanation:
Writer 8 read both of their own articles (102 and 103) but appears
once; writer 15 caught their own article 101 the day after writing a
read logged against reader 42; writer 21 read their own article 104.
```

### Example 2

```text
Input:
Reads table:
+------------+-----------+-----------+------------+
| article_id | writer_id | reader_id | read_on    |
+------------+-----------+-----------+------------+
| 201        | 9         | 10        | 2021-12-01 |
| 201        | 9         | 10        | 2021-12-01 |
| 202        | 11        | 9         | 2021-12-02 |
| 203        | 10        | 11        | 2021-12-03 |
+------------+-----------+-----------+------------+
Output:
+----+
| id |
+----+
+----+
Explanation:
Nobody here ever appears as both the writer and the reader of a row —
the repeated line about article 201 is just the same two people
reading it twice — so the result is empty.
```

Write your solution as a single `SELECT` query returning `id`.
