# Article Reads II

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

This table may contain duplicate rows.
Each row records that some reader read an article written by some
writer on some date.
Note that equal `writer_id` and `reader_id` indicate the same person.

Find every person who read more than one article on the same date.

Return the result rows sorted by `id` in ascending order.

The result format is shown in the following examples.

### Example 1

```text
Input:
Reads table:
+------------+-----------+-----------+------------+
| article_id | writer_id | reader_id | read_on    |
+------------+-----------+-----------+------------+
| 301        | 5         | 50        | 2022-05-01 |
| 302        | 6         | 50        | 2022-05-01 |
| 301        | 5         | 51        | 2022-05-01 |
| 303        | 7         | 51        | 2022-05-03 |
| 304        | 5         | 52        | 2022-05-02 |
| 304        | 5         | 52        | 2022-05-02 |
| 305        | 6         | 53        | 2022-05-02 |
+------------+-----------+-----------+------------+
Output:
+----+
| id |
+----+
| 50 |
+----+
Explanation:
Reader 50 read two different articles on 2022-05-01. Reader 51 also
read article 301 that day but saved article 303 for 2022-05-03 — two
articles on two different days does not count. Reader 52's duplicate
rows are the same article twice, still one article.
```

### Example 2

```text
Input:
Reads table:
+------------+-----------+-----------+------------+
| article_id | writer_id | reader_id | read_on    |
+------------+-----------+-----------+------------+
| 401        | 11        | 60        | 2022-03-10 |
| 402        | 12        | 60        | 2022-03-10 |
| 403        | 11        | 61        | 2022-03-11 |
| 404        | 13        | 61        | 2022-03-11 |
| 405        | 12        | 60        | 2022-03-12 |
+------------+-----------+-----------+------------+
Output:
+----+
| id |
+----+
| 60 |
| 61 |
+----+
Explanation:
Reader 60 binged two articles on 2022-03-10 and reader 61 did the same
on 2022-03-11, so both qualify. Reader 60's later single read on
2022-03-12 changes nothing — each person is listed once.
```

Write your solution as a single `SELECT` query returning `id`.
