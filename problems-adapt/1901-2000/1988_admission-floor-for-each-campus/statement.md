# Admission Floor for Each Campus

## Description

Table: `Campuses`

| Column Name | Type |
| ----------- | ---- |
| campus_id   | int  |
| seats       | int  |

`campus_id` is the column with unique values for this table.
Each row describes one campus and the number of applicants it can admit
at most (`seats`).

Table: `ScoreReport`

| Column Name | Type |
| ----------- | ---- |
| points      | int  |
| achievers   | int  |

`points` is the column with unique values for this table.
Each row says that `achievers` students scored at least `points` on the
exam. The table is logically consistent: a row with a higher `points`
value never carries more `achievers` than a row with a lower one — for
any two rows `i` and `j`, if `points_i` > `points_j` then `achievers_i`
<= `achievers_j`.

Every year each campus publishes an admission floor: the lowest exam
score a student must have to apply there. The floor is chosen from the
exam data under three rules:

- Even if every student meeting the floor applied, the campus could
  still admit them all.
- Subject to that, the campus wants to admit as many applicants as
  possible.
- The floor must be one of the values in the `ScoreReport` table.

Report the admission floor of every campus. If several reportable values
satisfy all three rules, pick the smallest. If the data cannot pin a
floor down, report `-1` for that campus.

Return the result table in any order.

Each testcase's `dataset` seeds the tables: its script inserts the
testcase's `Campuses` and `ScoreReport` rows (whichever are present)
before your query runs. The result format is in the following example.

### Example 1

```text
Input:
Campuses table:
+-----------+-------+
| campus_id | seats |
+-----------+-------+
| 4         | 300   |
| 17        | 40    |
| 23        | 6     |
+-----------+-------+
ScoreReport table:
+--------+-----------+
| points | achievers |
+--------+-----------+
| 650    | 9         |
| 610    | 25        |
| 595    | 25        |
| 580    | 60        |
| 520    | 150       |
| 480    | 260       |
+--------+-----------+
Output:
+-----------+--------+
| campus_id | points |
+-----------+--------+
| 4         | 480    |
| 17        | 595    |
| 23        | -1     |
+-----------+--------+
Explanation:
Campus 4 has 300 seats; even the 260 students scoring at least 480 fit,
and 480 is the lowest such score, so its floor is 480. Campus 17 has 40
seats, so only the rows with at most 40 achievers qualify — 25 achievers
at 610 and at 595, plus 9 at 650. Both 610 and 595 admit the same 25
students, and the smaller of the two, 595, is the floor. Campus 23 has 6
seats, fewer than even the 9 top scorers, and nothing above 650 is
recorded, so its floor cannot be determined and it reports -1.
```

### Example 2

```text
Input:
Campuses table:
+-----------+-------+
| campus_id | seats |
+-----------+-------+
| 8         | 10    |
+-----------+-------+
ScoreReport table:
+--------+-----------+
| points | achievers |
+--------+-----------+
| 700    | 10        |
+--------+-----------+
Output:
+-----------+--------+
| campus_id | points |
+-----------+--------+
| 8         | 700    |
+-----------+--------+
Explanation:
Exactly 10 students reached 700 points and campus 8 has exactly 10
seats, so setting the floor at 700 fills the campus precisely.
```

Write your solution as a single `SELECT` query returning two columns —
`campus_id` and `points`, in that order — with one row for every campus
in the `Campuses` table.
