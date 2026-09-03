# The Above-Average Loggers

## Description

Table: `work_logs`

| Column Name | Type    |
| ----------- | ------- |
| dev_id      | int     |
| task_note   | varchar |
| points      | int     |

(`dev_id`, `task_note`) together form the primary key (unique pair) of
this table. Every row is one logged work entry: `task_note` is a short
description of the task, and `points` is the effort score the entry
consumed.

Study the logging habits of each developer under these rules:

- Count how many entries each developer has logged in total.
- Work out each developer's mean points per entry, rounded to two
  decimal places.
- Keep only developers with at least 3 logged entries.
- Among those, keep only developers with at least one entry whose
  points exceed that developer's own mean — a personal spike.

Report the result ordered by average points from highest to lowest,
with ties broken by `dev_id` from lowest to highest.

Each testcase's `dataset` seeds the `work_logs` table: its script
inserts the testcase's `work_logs` rows before your query runs. The
result format is in the following example.

### Example 1

```text
Input:
work_logs table:
+--------+---------------------------+--------+
| dev_id | task_note                 | points |
+--------+---------------------------+--------+
| 11     | Fix login pagination bug  | 90     |
| 11     | Draft onboarding guide    | 30     |
| 11     | Patch stale cache keys    | 60     |
| 12     | Refactor billing webhook  | 120    |
| 12     | Write release notes       | 45     |
| 12     | Migrate config to env file| 75     |
| 12     | Profile slow report query | 60     |
| 13     | Audit unused dependencies | 55     |
| 13     | Update API docs page      | 65     |
| 14     | Triage flaky tests        | 50     |
| 14     | Rotate service credentials| 50     |
| 14     | Add retry queue           | 50     |
| 15     | Rebuild search index      | 10     |
| 15     | Pair on parser cleanup    | 20     |
| 15     | Sketch dashboard mockup   | 30     |
| 15     | Compress asset bundle     | 40     |
| 15     | Untangle import cycle     | 250    |
| 16     | Silence noisy deprecation | 8      |
| 16     | Trace dropped websocket   | 9      |
| 16     | Shrink docker image       | 10     |
+--------+---------------------------+--------+
Output:
+--------+-------------+------------+
| dev_id | entry_count | avg_points |
+--------+-------------+------------+
| 12     | 4           | 75.0       |
| 15     | 5           | 70.0       |
| 11     | 3           | 60.0       |
| 16     | 3           | 9.0        |
+--------+-------------+------------+
Explanation: Developer 12 logged 4 entries averaging
(120 + 45 + 75 + 60) / 4 = 75.0, and the 120-point refactor towers over
that mean. Developer 15 logged 5 entries averaging
(10 + 20 + 30 + 40 + 250) / 5 = 70.0, spiked by the 250-point import
untangling. Developer 11 logged 3 entries averaging
(90 + 30 + 60) / 3 = 60.0 with the 90-point fix above it. Developer 16
logged 3 entries averaging (8 + 9 + 10) / 3 = 9.0, where the
10-point entry clears the bar. Developer 13 logged only 2 entries,
under the minimum. Developer 14 logged three entries but all worth
exactly 50 points: the largest equals the mean instead of exceeding it,
so no spike exists and they are left out.
```

Write your solution as a single `SELECT` query returning `dev_id`,
`entry_count`, and `avg_points` for every qualifying developer, ordered
by `avg_points` descending then `dev_id` ascending.
