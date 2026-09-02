# Adjacent Open Seats II

## Description

Table: `AuditoriumSeats`

| Column Name | Type |
| ----------- | ---- |
| seat_number | int  |
| is_open     | bool |

`seat_number` is an auto-increment column for this table. Each row says
whether that seat can be booked: `1` marks an open seat, `0` a taken
one.

The house is checking its biggest free block. A block is a maximal
stretch of consecutively numbered open seats — every seat in it is
open, and the seats on either side (or the ends of the auditorium) are
not. Find the length of the longest block, and report every block that
reaches that length: if several blocks tie for longest, they all appear
in the output.

Return the result table ordered by `first_seat_number` in ascending
order.

The judge hands your query an `AuditoriumSeats` table already loaded
with the testcase's rows — each case runs against its own `dataset`.
The result format is in the following examples.

### Example 1

```text
Input:
AuditoriumSeats table:
+-------------+---------+
| seat_number | is_open |
+-------------+---------+
| 1           | 0       |
| 2           | 1       |
| 3           | 1       |
| 4           | 0       |
| 5           | 1       |
| 6           | 0       |
| 7           | 1       |
| 8           | 1       |
| 9           | 0       |
| 10          | 1       |
+-------------+---------+
Output:
+-------------------+------------------+------------+
| first_seat_number | last_seat_number | run_length |
+-------------------+------------------+------------+
| 2                 | 3                | 2          |
| 7                 | 8                | 2          |
+-------------------+------------------+------------+
Explanation:
Two blocks tie for the longest length of 2: seats 2-3 and seats 7-8.
Both are reported, ordered by their opening seat. Seats 5 and 10 are
open but sit alone, so their blocks are only 1 long.
```

### Example 2

```text
Input:
AuditoriumSeats table:
+-------------+---------+
| seat_number | is_open |
+-------------+---------+
| 1           | 1       |
| 2           | 1       |
| 3           | 0       |
| 4           | 1       |
| 5           | 1       |
| 6           | 1       |
| 7           | 1       |
| 8           | 1       |
| 9           | 0       |
| 10          | 1       |
| 11          | 1       |
+-------------+---------+
Output:
+-------------------+------------------+------------+
| first_seat_number | last_seat_number | run_length |
+-------------------+------------------+------------+
| 4                 | 8                | 5          |
+-------------------+------------------+------------+
Explanation:
Seats 4 through 8 form the single longest open block, five seats in a
row. The blocks at the edges (1-2 and 10-11) are shorter and are not
reported.
```

Write your solution as a single `SELECT` query returning three columns
— `first_seat_number`, `last_seat_number`, `run_length`, the inclusive
endpoints and length of every maximal stretch of consecutive open
seats whose length equals the longest stretch anywhere in the table
(every tie at the maximum is listed) — ordered by `first_seat_number`
ascending. Return the result table in that order.
