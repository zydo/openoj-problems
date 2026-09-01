# Writer Pairs With the Most Shared Readers

## Description

Table: `Follows`

| Column Name | Type |
| ----------- | ---- |
| writer_id   | int  |
| reader_id   | int  |

`(writer_id, reader_id)` is the primary key (combination of columns with
unique values) for this table.
Each row of this table indicates that the reader with ID `reader_id`
follows the writer with ID `writer_id`.

Find every pair of writers tied for the largest number of shared readers.
In other words, if the largest number of readers shared by any two writers
is `maxShared`, report all pairs of writers that share `maxShared`
readers.

The result table should contain the pairs `writer1_id` and `writer2_id`
where `writer1_id` < `writer2_id`.

Return the result table in any order.

Each testcase's `dataset` seeds the `Follows` table with that testcase's
rows before your query runs. The result format is in the following
example.

### Example 1

```text
Input:
Follows table:
+-----------+-----------+
| writer_id | reader_id |
+-----------+-----------+
| 6         | 2         |
| 6         | 5         |
| 6         | 8         |
| 6         | 11        |
| 13        | 2         |
| 13        | 5         |
| 13        | 8         |
| 13        | 17        |
| 21        | 2         |
| 21        | 5         |
| 21        | 11        |
| 21        | 17        |
| 34        | 8         |
| 34        | 11        |
| 34        | 17        |
| 40        | 9         |
+-----------+-----------+
Output:
+------------+------------+
| writer1_id | writer2_id |
+------------+------------+
| 6          | 13         |
| 6          | 21         |
| 13         | 21         |
+------------+------------+
Explanation:
Writers 6 and 13 share three readers (2, 5, and 8).
Writers 6 and 21 share three readers (2, 5, and 11).
Writers 13 and 21 share three readers (2, 5, and 17).
Writers 6 and 34 share only two readers (8 and 11), and every other pair
shares even fewer. The largest shared count between any two writers is
therefore 3, so all three tied pairs are returned. Each pair is reported
with its smaller id first.
```

Write your solution as a single `SELECT` query returning one row per
qualifying pair — `writer1_id` and `writer2_id`, with `writer1_id` <
`writer2_id`, in any order.
