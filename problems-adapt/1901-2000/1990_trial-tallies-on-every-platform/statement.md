# Trial Tallies on Every Platform

## Description

Table: `Trials`

| Column Name | Type    |
| ----------- | ------- |
| trial_id    | int     |
| platform    | varchar |
| trial_name  | varchar |

`trial_id` is the primary key (column with unique values) for this table.
`platform` is an ENUM (category) of type `'Android'`, `'IOS'`, or `'Web'`.
`trial_name` is an ENUM (category) of type `'Reading'`, `'Sports'`, or
`'Programming'`. Each row records one experiment run with a random
participant: the row's id, the platform it ran on, and the experiment's
name.

Tally the experiments for each of the three platforms and each of the
three experiment names. Every `(platform, trial_name)` pair must appear
in the output — the pairs with no experiments included, counted as zero.

Return the result table in any order.

Each testcase's `dataset` seeds the `Trials` table: its script inserts
the testcase's `Trials` rows (whichever are present) before your query
runs. The result format is in the following example.

### Example 1

```text
Input:
Trials table:
+----------+----------+--------------+
| trial_id | platform | trial_name   |
+----------+----------+--------------+
| 21       | Web      | Sports       |
| 22       | Android  | Sports       |
| 23       | Web      | Reading      |
| 24       | IOS      | Reading      |
| 25       | IOS      | Reading      |
| 26       | Android  | Programming  |
| 27       | Web      | Programming  |
| 28       | Web      | Programming  |
| 29       | Android  | Sports       |
+----------+----------+--------------+
Output:
+----------+--------------+-------------+
| platform | trial_name   | trial_count |
+----------+--------------+-------------+
| Android  | Programming  | 1           |
| Android  | Reading      | 0           |
| Android  | Sports       | 2           |
| IOS      | Programming  | 0           |
| IOS      | Reading      | 2           |
| IOS      | Sports       | 0           |
| Web      | Programming  | 2           |
| Web      | Reading      | 1           |
| Web      | Sports       | 1           |
+----------+--------------+-------------+
Explanation:
On Android, the Reading experiment never ran, Sports ran twice (trials
22 and 29), and Programming ran once. On IOS, Reading ran twice (trials
24 and 25) while Sports and Programming never ran. On Web, Programming
ran twice (trials 27 and 28), and Reading and Sports ran once each.
```

### Example 2

```text
Input:
Trials table:
+----------+----------+--------------+
| trial_id | platform | trial_name   |
+----------+----------+--------------+
| 5        | IOS      | Sports       |
+----------+----------+--------------+
Output:
+----------+--------------+-------------+
| platform | trial_name   | trial_count |
+----------+--------------+-------------+
| Android  | Programming  | 0           |
| Android  | Reading      | 0           |
| Android  | Sports       | 0           |
| IOS      | Programming  | 0           |
| IOS      | Reading      | 0           |
| IOS      | Sports       | 1           |
| Web      | Programming  | 0           |
| Web      | Reading      | 0           |
| Web      | Sports       | 0           |
+----------+--------------+-------------+
Explanation:
The single trial is the IOS Sports experiment. Even with the table this
sparse, the output still carries all nine pairs, and the eight pairs
with no matching row are counted as zero.
```

Write your solution as a single `SELECT` query returning three columns —
`platform`, `trial_name`, and `trial_count`, in that order — covering
exactly the nine platform/experiment combinations.
