# Peak Reading Day per City

## Description

Table: `Readings`

| Column Name | Type |
| ----------- | ---- |
| metro_id    | int  |
| day         | date |
| temp        | int  |

The pair `(metro_id, day)` is the primary key: no metro has two rows
for the same day. Each row is one temperature reading taken in a metro
area on a particular day, and every reading in the table falls in the
year 2022.

For each metro, find the day on which its highest temperature was
recorded. When a metro's top temperature shows up on several days,
report the earliest of those days.

Each testcase supplies its own `dataset`: the DDL seeds the `Readings`
table with that testcase's rows. Return the result table ordered by
`metro_id` ascending, with columns `metro_id`, `day`, and `temp` — one
row per metro, and nothing at all when the table is empty. The result
format is shown in the following example.

### Example 1

```text
Input:
Readings table:
+----------+------------+------+
| metro_id | day        | temp |
+----------+------------+------+
| 4        | 2022-05-19 | 11   |
| 2        | 2022-09-03 | 27   |
| 4        | 2022-01-30 | -4   |
| 2        | 2022-04-21 | 29   |
| 7        | 2022-06-12 | 15   |
| 2        | 2022-11-08 | 29   |
| 7        | 2022-08-25 | -9   |
| 4        | 2022-03-14 | 11   |
+----------+------------+------+
Output:
+----------+------------+------+
| metro_id | day        | temp |
+----------+------------+------+
| 2        | 2022-04-21 | 29   |
| 4        | 2022-03-14 | 11   |
| 7        | 2022-06-12 | 15   |
+----------+------------+------+
Explanation:
Metro 2 peaked at 29 on both 2022-04-21 and 2022-11-08, so the earlier
day, 2022-04-21, is reported.
Metro 4 peaked at 11 on both 2022-03-14 and 2022-05-19; the earlier
day, 2022-03-14, is reported.
Metro 7's highest reading, 15, occurred only on 2022-06-12.
```

### Example 2

```text
Input:
Readings table:
+----------+------------+------+
| metro_id | day        | temp |
+----------+------------+------+
| 3        | 2022-10-02 | -1   |
| 3        | 2022-07-16 | 6    |
| 9        | 2022-02-27 | 6    |
| 3        | 2022-12-01 | 6    |
| 9        | 2022-05-05 | -20  |
+----------+------------+------+
Output:
+----------+------------+------+
| metro_id | day        | temp |
+----------+------------+------+
| 3        | 2022-07-16 | 6    |
| 9        | 2022-02-27 | 6    |
+----------+------------+------+
Explanation:
Metro 3 hit 6 on 2022-07-16 and again on 2022-12-01; the earliest peak
day, 2022-07-16, wins. Metro 9's peak of 6 was reached only on
2022-02-27.
```
