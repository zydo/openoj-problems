# Tutors Without 2020 Lessons

## Description

A tutoring marketplace keeps three tables: who studies here, who
teaches here, and every lesson that was booked.

Table: `Learner`

| Column Name  | Type    |
| ------------ | ------- |
| learner_id   | int     |
| learner_name | varchar |

`learner_id` is the column with unique values for this table. Each row
records one learner who can book lessons on the platform.

Table: `Lessons`

| Column Name | Type    |
| ----------- | ------- |
| lesson_id   | int     |
| lesson_date | date    |
| lesson_fee  | int     |
| learner_id  | int     |
| tutor_id    | int     |

`lesson_id` is the column with unique values for this table. Each row
records one booked lesson: the fee charged, the learner who booked it,
and the tutor who gave it on `lesson_date`.

Table: `Tutor`

| Column Name | Type    |
| ----------- | ------- |
| tutor_id    | int     |
| tutor_name  | varchar |

`tutor_id` is the column with unique values for this table. Each row
records one tutor who can be booked for lessons.

Report the names of every tutor who gave no lessons at all during
2020 — whether their lessons all fall in other years or they never
gave a lesson.

Each testcase's `dataset` seeds all three tables: its script inserts
the testcase's `Learner`, `Lessons`, and `Tutor` rows (whichever are
present) before your query runs. Return the result table ordered by
`tutor_name` in ascending order. The result format is in the following
example.

### Example 1

```text
Input:
Learner
+------------+--------------+
| learner_id | learner_name |
+------------+--------------+
| 11         | Amara        |
| 12         | Boris        |
| 13         | Chen         |
+------------+--------------+
Tutor
+----------+------------+
| tutor_id | tutor_name |
+----------+------------+
| 1        | Hana       |
| 2        | Ivan       |
| 3        | Jade       |
| 4        | Kiran      |
+----------+------------+
Lessons
+-----------+-------------+------------+------------+----------+
| lesson_id | lesson_date | lesson_fee | learner_id | tutor_id |
+-----------+-------------+------------+------------+----------+
| 501       | 2020-01-15  | 120        | 11         | 1        |
| 502       | 2019-11-30  | 90         | 12         | 2        |
| 503       | 2021-03-03  | 150        | 13         | 2        |
| 504       | 2018-07-21  | 60         | 11         | 3        |
| 505       | 2020-12-31  | 200        | 12         | 1        |
| 506       | 2019-06-06  | 80         | 13         | 4        |
+-----------+-------------+------------+------------+----------+
Output:
+------------+
| tutor_name |
+------------+
| Ivan       |
| Jade       |
| Kiran      |
+------------+
Explanation:
Hana taught on 2020-01-15 and 2020-12-31, so she is left out. Ivan
taught in 2019 and 2021 but never in 2020, so he qualifies. Jade's
only lesson is from 2018, so she qualifies. Kiran's only lesson is
from 2019, so she qualifies too.
```

### Example 2

```text
Input:
Learner
+------------+--------------+
| learner_id | learner_name |
+------------+--------------+
| 21         | Dara         |
+------------+--------------+
Tutor
+----------+------------+
| tutor_id | tutor_name |
+----------+------------+
| 10       | Elias      |
| 20       | Farah      |
+----------+------------+
Lessons
+-----------+-------------+------------+------------+----------+
| lesson_id | lesson_date | lesson_fee | learner_id | tutor_id |
+-----------+-------------+------------+------------+----------+
Output:
+------------+
| tutor_name |
+------------+
| Elias      |
| Farah      |
+------------+
Explanation:
No lesson was ever booked, so both tutors qualify.
```

Write your solution as a single `SELECT` query returning `tutor_name`
for every tutor with zero rows in `Lessons` whose `lesson_date` falls
in 2020. Order the result by `tutor_name` ascending.
