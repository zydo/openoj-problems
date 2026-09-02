# Each Bike's Latest Return

## Description

Table: `Rentals`

| Column Name | Type     |
| ----------- | -------- |
| rental_id   | int      |
| bike_no     | varchar  |
| took_at     | datetime |
| returned_at | datetime |

`rental_id` column contains unique values. Every row is one rental trip:
which bike went out, when it was taken, and when it came back. Both
timestamps are always valid datetime values.

For each bike, find the moment it was last returned to the fleet.

Return the result table with the most recently used bikes first.

Every test case ships its own `dataset`: the statements inside it populate
`Rentals` before your query executes. The result format is in the
following examples.

### Example 1

```text
Input:
Rentals table:
+-----------+---------+---------------------+---------------------+
| rental_id | bike_no | took_at             | returned_at         |
+-----------+---------+---------------------+---------------------+
| 1         | B2210   | 2024-05-01 09:15:00 | 2024-05-01 09:52:00 |
| 2         | B1177   | 2024-05-01 10:05:00 | 2024-05-01 10:31:00 |
| 3         | B2210   | 2024-05-02 14:40:00 | 2024-05-02 15:12:00 |
| 4         | B3305   | 2024-05-01 08:00:00 | 2024-05-01 08:20:00 |
| 5         | B1177   | 2024-05-03 11:00:00 | 2024-05-03 11:26:00 |
| 6         | B2210   | 2024-05-02 18:00:00 | 2024-05-02 18:47:00 |
+-----------+---------+---------------------+---------------------+
Output:
+---------+---------------------+
| bike_no | returned_at         |
+---------+---------------------+
| B1177   | 2024-05-03 11:26:00 |
| B2210   | 2024-05-02 18:47:00 |
| B3305   | 2024-05-01 08:20:00 |
+---------+---------------------+
Explanation:
Bike B1177 took three trips, the last of which came back on 2024-05-03
11:26:00.
Bike B2210 also took three trips; its most recent return was on 2024-05-02
18:47:00.
Bike B3305 took a single trip, so its one return time is reported as is.
The bikes are listed most recently used first.
```

### Example 2

```text
Input:
Rentals table:
+-----------+---------+---------------------+---------------------+
| rental_id | bike_no | took_at             | returned_at         |
+-----------+---------+---------------------+---------------------+
| 11        | C0007   | 2024-09-09 07:30:00 | 2024-09-09 07:58:00 |
| 12        | C0003   | 2024-09-09 06:10:00 | 2024-09-09 06:44:00 |
| 13        | C0003   | 2024-09-09 17:05:00 | 2024-09-09 17:39:00 |
| 14        | C0009   | 2024-09-10 21:12:00 | 2024-09-10 21:40:00 |
| 15        | C0007   | 2024-09-09 12:00:00 | 2024-09-09 12:31:00 |
+-----------+---------+---------------------+---------------------+
Output:
+---------+---------------------+
| bike_no | returned_at         |
+---------+---------------------+
| C0009   | 2024-09-10 21:40:00 |
| C0003   | 2024-09-09 17:39:00 |
| C0007   | 2024-09-09 12:31:00 |
+---------+---------------------+
Explanation:
C0009's single trip ended last of anything in the table, so it leads the
output.
C0003 went out twice; only its evening return counts.
C0007's later of its two trips ended at 2024-09-09 12:31:00.
```

Every bike contributes exactly one row: the greatest `returned_at` among
its trips, however many share that bike number. The rows then come out
with the most recently used bike first — `returned_at` descending.
Datetimes travel as fixed-width `YYYY-MM-DD HH:MM:SS` text, so that
descending order is both chronological and total: every test case is
constructed so that no two distinct bikes share a most-recent
`returned_at`, which makes the required order fully determined. Write
your solution as a single `SELECT` query returning two columns —
`bike_no` and `returned_at`, in that order — with the rows sorted most
recent first.
