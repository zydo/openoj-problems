# Hiker Mileage

## Description

A walking club tracks how far each of its members has walked. Two
tables hold the data: one listing the members, and one logging every
recorded trek.

Table: `Hikers`

| Column Name | Type    |
| ----------- | ------- |
| id          | int     |
| name        | varchar |

`id` is the column with unique values for this table. `name` is the
hiker's name.

Table: `Treks`

| Column Name | Type |
| ----------- | ---- |
| id          | int  |
| hiker_id    | int  |
| distance    | int  |

`id` is the column with unique values for this table. `hiker_id` is the
id of the hiker who walked `distance` kilometers on that trek.

Report every hiker's cumulative distance. A hiker who has no trek on
record has walked 0 kilometers.

Each testcase's `dataset` seeds both tables: its script inserts the
testcase's `Hikers` rows and, when present, its `Treks` rows before
your query runs. Sort the result by `total_distance` from highest to
lowest, and when totals are equal sort those hikers by `name` from A
to Z. The result format is in the following example.

### Example 1

```text
Input:
Hikers
+----+-------+
| id | name  |
+----+-------+
| 3  | Mira  |
| 8  | Dane  |
| 15 | Kofi  |
| 21 | Tara  |
| 30 | Boris |
+----+-------+
Treks
+----+----------+----------+
| id | hiker_id | distance |
+----+----------+----------+
| 1  | 3        | 45       |
| 2  | 8        | 120      |
| 3  | 3        | 110      |
| 4  | 15       | 155      |
| 5  | 30       | 95       |
| 6  | 30       | 60       |
| 7  | 8        | 25       |
| 8  | 15       | 80       |
+----+----------+----------+
Output:
+-------+----------------+
| name  | total_distance |
+-------+----------------+
| Kofi  | 235            |
| Boris | 155            |
| Mira  | 155            |
| Dane  | 145            |
| Tara  | 0              |
+-------+----------------+
Explanation: Kofi walked 235 kilometers across two treks, more than
anyone else. Boris and Mira both total 155, and Boris is listed first
because his name sorts earlier. Dane's single 120-kilometer trek plus
a short 25-kilometer walk gives 145. Tara never logged a trek, so her
total is 0 and she still appears in the result.
```

Write your solution as a single `SELECT` query returning two columns —
`name` and `total_distance` — one row per hiker.

## Hints

### Hint 1

The answer must contain one row for every hiker, including hikers who
never walked — those get 0. Beginning from `Hikers` and `LEFT JOIN`ing
the treks on preserves the full roster.

### Hint 2

Collapse the joined rows per hiker and add the trek distances with
`SUM`. The sum of a hiker with no treks is null, so wrap it in
`COALESCE` to report 0 instead.

### Hint 3

Two sort keys are needed: `total_distance` descending, then `name`
ascending for equal totals.
