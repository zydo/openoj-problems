# Longest Lull Between Stopovers

## Description

A travel hub keeps a log of the days each traveler passes through.
`Stopovers` holds that log, one row per stopover.

Table: `Stopovers`

| Column Name   | Type |
| ------------- | ---- |
| traveler_id   | int  |
| stopover_date | date |

The table has no primary key (column with unique values), so it may
contain duplicate rows. Each row records one traveler stopping at the
hub on one date.

Assume today's date is '2021-01-01'.

For every traveler, look at the gaps between one stopover and the one
immediately after it — and between the last stopover and today when no
next stopover exists — and report the size of the widest such gap in
whole days.

Each testcase's `dataset` seeds the `Stopovers` table: its script
inserts the testcase's `Stopovers` rows (whichever are present) before
your query runs. Return the result table ordered by `traveler_id`. The
result format is in the following example.

### Example 1

```text
Input:
Stopovers table:
+-------------+---------------+
| traveler_id | stopover_date |
+-------------+---------------+
| 4           | 2020-09-02    |
| 4           | 2020-11-21    |
| 7           | 2020-12-25    |
| 7           | 2020-08-14    |
| 9           | 2020-06-30    |
| 9           | 2020-07-15    |
| 9           | 2020-10-08    |
+-------------+---------------+
Output:
+-------------+--------------+
| traveler_id | longest_lull |
+-------------+--------------+
| 4           | 80           |
| 7           | 133          |
| 9           | 85           |
+-------------+--------------+
Explanation:
For traveler 4, the gaps to measure are between dates:
    - 2020-09-02 and 2020-11-21, 80 days.
    - 2020-11-21 and 2021-01-01, 41 days.
The longest lull is the 80-day one.
For traveler 7, the gaps to measure are between dates:
    - 2020-08-14 and 2020-12-25, 133 days.
    - 2020-12-25 and 2021-01-01, 7 days.
The longest lull is the 133-day one.
For traveler 9, the gaps to measure are between dates:
    - 2020-06-30 and 2020-07-15, 15 days.
    - 2020-07-15 and 2020-10-08, 85 days.
    - 2020-10-08 and 2021-01-01, 85 days.
The longest lull is 85 days.
```

Write your solution as a single `SELECT` query returning `traveler_id`
and `longest_lull` — the largest number of days between consecutive
stopovers (or between the last stopover and today) — for every traveler
in `Stopovers`, ordered by `traveler_id` ascending.
