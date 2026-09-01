# Stages Never Cleared

## Description

A deployment system splits every pipeline into a fixed number of
numbered stages. Two tables describe what was planned and what
actually cleared.

Table: `Pipelines`

| Column Name | Type |
| ----------- | ---- |
| pipeline_id | int  |
| stage_count | int  |

`pipeline_id` is the column with unique values for this table.

Each row in this table indicates that `pipeline_id` was divided into
`stage_count` stages labeled from `1` to `stage_count`.

It is guaranteed that `2 <= stage_count <= 20`.

Table: `Cleared`

| Column Name | Type |
| ----------- | ---- |
| pipeline_id | int  |
| stage_id    | int  |

(`pipeline_id`, `stage_id`) is the combination of columns with unique
values for this table.

Each row in this table indicates that for the pipeline `pipeline_id`,
the stage with id `stage_id` cleared successfully.

It is guaranteed that `stage_id <= stage_count` for each
`pipeline_id`.

Report the pairs of `pipeline_id` and `stage_id` for the stages that
never cleared — every stage a pipeline was divided into that has no
matching row in `Cleared`.

The result rows may come back in any order.

The result format is shown in the following examples.

### Example 1

```text
Input:
Pipelines table:
+-------------+-------------+
| pipeline_id | stage_count |
+-------------+-------------+
| 4           | 3           |
| 6           | 2           |
| 9           | 4           |
+-------------+-------------+
Cleared table:
+-------------+----------+
| pipeline_id | stage_id |
+-------------+----------+
| 4           | 2        |
| 9           | 1        |
| 9           | 2        |
| 9           | 3        |
| 9           | 4        |
+-------------+----------+
Output:
+-------------+----------+
| pipeline_id | stage_id |
+-------------+----------+
| 4           | 1        |
| 4           | 3        |
| 6           | 1        |
| 6           | 2        |
+-------------+----------+
Explanation:
Pipeline 4 was divided into 3 stages (1, 2, 3). Only stage 2 cleared,
so we include (4, 1) and (4, 3) in the answer.
Pipeline 6 was divided into 2 stages (1, 2). Neither stage cleared, so
we include (6, 1) and (6, 2) in the answer.
Pipeline 9 was divided into 4 stages (1, 2, 3, 4), and all of them
cleared.
```

### Example 2

```text
Input:
Pipelines table:
+-------------+-------------+
| pipeline_id | stage_count |
+-------------+-------------+
| 2           | 2           |
| 5           | 3           |
+-------------+-------------+
Cleared table:
+-------------+----------+
| pipeline_id | stage_id |
+-------------+----------+
| 2           | 1        |
| 2           | 2        |
| 5           | 1        |
+-------------+----------+
Output:
+-------------+----------+
| pipeline_id | stage_id |
+-------------+----------+
| 5           | 2        |
| 5           | 3        |
+-------------+----------+
Explanation:
Pipeline 2 cleared both of its stages, so it contributes nothing.
Pipeline 5 cleared only its first stage, leaving stages 2 and 3
uncleared.
```

Write your solution as a single `SELECT` query returning `pipeline_id`
and `stage_id` for every stage that never cleared, in any order.
