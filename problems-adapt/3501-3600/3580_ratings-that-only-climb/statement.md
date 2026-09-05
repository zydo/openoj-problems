# Ratings That Only Climb

## Description

Table: `staff`

| Column Name | Type    |
| ----------- | ------- |
| staff_id    | int     |
| name        | varchar |

`staff_id` is the unique key for this table. Each row describes one staff
member.

Table: `appraisals`

| Column Name  | Type |
| ------------ | ---- |
| appraisal_id | int  |
| staff_id     | int  |
| held_on      | date |
| score        | int  |

`appraisal_id` is the unique key for this table. Each row is one
performance appraisal. The score runs on a 1-5 scale, where 5 is
excellent and 1 is poor.

Write a solution to find the staff members whose score rose on every one
of their three most recent appraisals.

- A staff member needs at least 3 appraisals to be considered.
- Only the 3 most recent appraisals (by `held_on`) count for that staff
  member.
- Within those three, each score must be strictly higher than the one
  before it.
- The score gain is the latest score minus the earliest score among those
  three.

Return the result table ordered by score gain in descending order, then by
name in ascending order.

Every testcase supplies its own `dataset`: the DDL seeds both tables with
that testcase's rows. The result format is in the following example.

### Example 1

```text
Input:

staff table:

+----------+---------------+
| staff_id | name          |
+----------+---------------+
| 21       | Nadia Rahman  |
| 22       | Felix Gruber  |
| 23       | Iris Chen     |
| 24       | Marcus Webb   |
+----------+---------------+

appraisals table:

+--------------+----------+------------+-------+
| appraisal_id | staff_id | held_on    | score |
+--------------+----------+------------+-------+
| 101          | 21       | 2024-02-10 | 2     |
| 102          | 21       | 2024-05-10 | 3     |
| 103          | 21       | 2024-08-10 | 4     |
| 104          | 21       | 2024-11-10 | 5     |
| 105          | 22       | 2024-01-15 | 5     |
| 106          | 22       | 2024-04-15 | 3     |
| 107          | 22       | 2024-07-15 | 4     |
| 108          | 22       | 2024-10-15 | 5     |
| 109          | 23       | 2024-03-05 | 2     |
| 110          | 23       | 2024-06-05 | 2     |
| 111          | 23       | 2024-09-05 | 4     |
| 112          | 24       | 2024-04-20 | 1     |
| 113          | 24       | 2024-08-20 | 5     |
+--------------+----------+------------+-------+

Output:

+----------+---------------+------------+
| staff_id | name          | score_gain |
+----------+---------------+------------+
| 22       | Felix Gruber  | 2          |
| 21       | Nadia Rahman  | 2          |
+----------+---------------+------------+

Explanation:

    Nadia Rahman (staff_id = 21):

        Four appraisals with scores 2, 3, 4, 5 in date order.
        Last 3: 2024-05-10 (3), 2024-08-10 (4), 2024-11-10 (5).
        Strictly rising: 3 → 4 → 5.
        Score gain: 5 - 3 = 2.

    Felix Gruber (staff_id = 22):

        Four appraisals with scores 5, 3, 4, 5 in date order.
        Last 3: 2024-04-15 (3), 2024-07-15 (4), 2024-10-15 (5).
        Strictly rising: 3 → 4 → 5 — the early 5 does not count.
        Score gain: 5 - 3 = 2.

    Staff members not included:

        Iris Chen (staff_id = 23): her last 3 scores are 2, 2, 4 — the
        first step is flat, not an increase.
        Marcus Webb (staff_id = 24): only 2 appraisals, short of the
        required 3.

    Felix and Nadia tie with a score gain of 2, so Felix Gruber comes
    first by name.
```

Write your solution as a single `SELECT` query returning one row per
qualifying staff member — the staff id, their name, and the score gain.
