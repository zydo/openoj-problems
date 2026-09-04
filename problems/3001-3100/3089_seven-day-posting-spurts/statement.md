# Seven-Day Posting Spurts

## Description

Table: `Entries`

| Column Name | Type |
| ----------- | ---- |
| entry_id    | int  |
| author_id   | int  |
| entry_date  | date |

`entry_id` is the primary key (column with unique values) for this
table.
Each row is one journal entry: its own id, who wrote it, and the day
it was written.

An author posts in spurts when some stretch of 7 consecutive days in
February 2024 holds at least twice what a typical week holds for them.
Count February as exactly 4 weeks: the typical week holds the author's
February 1–28 entry count divided by 4, and the 7-day stretch is
measured only over February 1–28 — February 29 and March never enter
the figures.

Report every spurring author with two numbers: their fullest 7-day
stretch, and their typical week.

Return the result table ordered by `author_id` in ascending order.

Every test case ships its own `dataset`: the statements inside it
populate `Entries` before your query executes. The result format is in
the following examples.

### Example 1

```text
Input:
Entries table:
+----------+-----------+------------+
| entry_id | author_id | entry_date |
+----------+-----------+------------+
| 31       | 601       | 2024-02-05 |
| 32       | 602       | 2024-02-01 |
| 33       | 601       | 2024-02-07 |
| 34       | 603       | 2024-02-14 |
| 35       | 601       | 2024-02-09 |
| 36       | 602       | 2024-02-08 |
| 37       | 605       | 2024-02-02 |
| 38       | 602       | 2024-02-15 |
| 39       | 605       | 2024-02-03 |
| 40       | 602       | 2024-02-22 |
| 41       | 605       | 2024-02-15 |
| 42       | 601       | 2024-02-20 |
| 43       | 601       | 2024-02-24 |
| 44       | 601       | 2024-02-26 |
| 45       | 604       | 2024-02-29 |
+----------+-----------+------------+
Output:
+-----------+-----------------+----------------+
| author_id | peak_week_posts | avg_week_posts |
+-----------+-----------------+----------------+
| 601       | 3               | 1.5            |
| 603       | 1               | 0.25           |
| 605       | 2               | 0.75           |
+-----------+-----------------+----------------+
Explanation: Author 601 wrote 6 entries, and the stretch February 5–11
holds 3 of them — exactly twice their 1.5-entry typical week, which
still counts. Author 605 fit 2 of their 3 entries into February 2–8.
Author 603 wrote once, so their lone entry is automatically their
fullest week. Author 602 spaced four entries a week apart — no stretch
holds more than 1, short of twice their 1.0 typical week, so they are
left out. Author 604's only entry is dated February 29, outside the
February 1–28 window, and never produces a row.
```

### Example 2

```text
Input:
Entries table:
+----------+-----------+------------+
| entry_id | author_id | entry_date |
+----------+-----------+------------+
| 51       | 701       | 2024-02-10 |
| 52       | 701       | 2024-02-10 |
| 53       | 702       | 2024-02-25 |
| 54       | 701       | 2024-02-10 |
| 55       | 703       | 2024-02-01 |
| 56       | 703       | 2024-02-02 |
| 57       | 701       | 2024-02-12 |
| 58       | 702       | 2024-02-26 |
| 59       | 703       | 2024-02-15 |
| 60       | 703       | 2024-02-27 |
| 61       | 703       | 2024-02-28 |
+----------+-----------+------------+
Output:
+-----------+-----------------+----------------+
| author_id | peak_week_posts | avg_week_posts |
+-----------+-----------------+----------------+
| 701       | 4               | 1.0            |
| 702       | 2               | 0.5            |
+-----------+-----------------+----------------+
Explanation: Author 701 wrote all four entries — three of them on the
same day — inside February 10–16, the fullest stretch of the month.
Author 702's two back-to-back entries share one stretch. Author 703
spread five entries across the month so that no 7-day stretch holds
more than 2 — under half their total — and miss the cut.
```

Write your solution as a single `SELECT` query returning three columns
— `author_id`, `peak_week_posts`, the most entries the author wrote in
any 7-consecutive-day stretch inside February 1–28, and
`avg_week_posts`, the author's February 1–28 entry count divided by
the 4 weeks — with one row per author whose `peak_week_posts` is at
least twice their `avg_week_posts`, ordered by `author_id` in
ascending order.
