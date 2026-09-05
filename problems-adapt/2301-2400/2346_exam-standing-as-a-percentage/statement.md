# Exam Standing as a Percentage

## Description

Table: `Examinees`

| Column Name | Type |
| ----------- | ---- |
| examinee_id | int  |
| cohort_id   | int  |
| score       | int  |

`examinee_id` is unique. Each row records one examinee's id, the cohort
they sat the exam with, and the score they earned.

For every examinee, express their standing within their cohort as a
percentage, computed from their competition rank in the cohort's score
ordering:

    (rank_within_cohort - 1) * 100 / (examinees_in_cohort - 1)

Ranking is by descending score — the top score takes rank 1 — and
examinees with equal scores share one rank. Round the percentage to two
decimal places.

Each testcase supplies its own `dataset`: the DDL seeds the `Examinees`
table with that testcase's rows. The rank is standard competition
ranking inside the cohort: equal scores share a rank and the next
distinct score skips ahead — scores `9, 9, 7` give ranks `1, 1, 3`, so
with three examinees the shared-top pair lands at `0.0` and the last
examinee at `100.0`. Every testcase has at least two examinees in each
cohort, so the denominator is never zero. Return the result table in
any order, with columns `examinee_id`, `cohort_id`, and `standing`. The
result format is shown in the following example.

### Example 1

```text
Input:
Examinees table:
+-------------+-----------+-------+
| examinee_id | cohort_id | score |
+-------------+-----------+-------+
| 9           | 4         | 88    |
| 3           | 7         | 91    |
| 5           | 4         | 88    |
| 14          | 7         | 85    |
| 21          | 7         | 60    |
| 12          | 4         | 73    |
+-------------+-----------+-------+
Output:
+-------------+-----------+----------+
| examinee_id | cohort_id | standing |
+-------------+-----------+----------+
| 9           | 4         | 0.0      |
| 5           | 4         | 0.0      |
| 12          | 4         | 100.0    |
| 3           | 7         | 0.0      |
| 14          | 7         | 50.0     |
| 21          | 7         | 100.0    |
+-------------+-----------+----------+
Explanation:
Cohort 4 has 3 examinees: examinees 9 and 5 tie on the top score 88,
sharing rank 1, so both stand at (1 - 1) * 100 / (3 - 1) = 0.0; the
next score skips to rank 3, putting examinee 12 at 100.0.
Cohort 7 has 3 examinees and no ties: examinee 3 stands at 0.0,
examinee 14 at (2 - 1) * 100 / (3 - 1) = 50.0, and examinee 21 at
100.0.
```

### Example 2

```text
Input:
Examinees table:
+-------------+-----------+-------+
| examinee_id | cohort_id | score |
+-------------+-----------+-------+
| 31          | 2         | 9     |
| 32          | 2         | 9     |
| 33          | 2         | 7     |
| 34          | 2         | 7     |
| 40          | 5         | 50    |
| 41          | 5         | 50    |
| 42          | 5         | 50    |
+-------------+-----------+-------+
Output:
+-------------+-----------+----------+
| examinee_id | cohort_id | standing |
+-------------+-----------+----------+
| 31          | 2         | 0.0      |
| 32          | 2         | 0.0      |
| 33          | 2         | 66.67    |
| 34          | 2         | 66.67    |
| 40          | 5         | 0.0      |
| 41          | 5         | 0.0      |
| 42          | 5         | 0.0      |
+-------------+-----------+----------+
Explanation:
In cohort 2 both scores tie in blocks: the top pair shares rank 1 and
stands at 0.0, while the 7-score pair lands at rank 3, giving
(3 - 1) * 100 / (4 - 1) = 66.67 after rounding.
Cohort 5's examinees all scored the same, so all share rank 1 and stand
at 0.0.
```
