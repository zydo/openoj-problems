# Top-To-Bottom Score Spread

## Description

Table: `Gradebook`

| Column Name  | Type    |
| ------------ | ------- |
| learner_id   | int     |
| learner_name | varchar |
| homework1    | int     |
| homework2    | int     |
| homework3    | int     |

`learner_id` is the unique key of this table. Each row is one learner,
recorded with the points they earned on each of the three homework sets.

A learner's total score is the sum of their three homework scores. Work
out how far apart the strongest and weakest learners finished: take the
largest total score any learner achieved and subtract the smallest total
score any learner achieved.

Return a single row holding one column, `score_spread`, with that
difference. The answer is returned in any order.

Every testcase carries its own `dataset`: the DDL loads the `Gradebook`
table with that testcase's rows. The example below shows the result
format.

### Example 1

```text
Input:
Gradebook table:
+------------+--------------+-----------+-----------+-----------+
| learner_id | learner_name | homework1 | homework2 | homework3 |
+------------+--------------+-----------+-----------+-----------+
| 210        | Amara        | 72        | 81        | 90        |
| 214        | Ben          | 55        | 60        | 49        |
| 227        | Chidi        | 90        | 95        | 100       |
| 233        | Daria        | 61        | 70        | 66        |
| 241        | Enzo         | 40        | 45        | 52        |
+------------+--------------+-----------+-----------+-----------+
Output:
+--------------+
| score_spread |
+--------------+
| 148          |
+--------------+
Explanation
- Amara totals 72 + 81 + 90 = 243.
- Ben totals 55 + 60 + 49 = 164.
- Chidi totals 90 + 95 + 100 = 285.
- Daria totals 61 + 70 + 66 = 197.
- Enzo totals 40 + 45 + 52 = 137.
Chidi holds the highest total, 285, and Enzo the lowest, 137, so the
spread between the top and the bottom is 285 - 137 = 148.
```

Only the two extremes matter — ties at the top or the bottom need no
special treatment, since either extreme is the same value either way.
When every learner finishes with the same total, the spread is `0`.
Write your solution as a single `SELECT` query.
