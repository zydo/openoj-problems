# Office Minutes per Day

## Description

A shared office logs every arrival and departure in one table.
`Attendance` holds one row per office visit: who came in, on which day,
the minute they arrived, and the minute they left.

Table: `Attendance`

| Column Name | Type |
| ----------- | ---- |
| worker_id   | int  |
| work_day    | date |
| clock_in    | int  |
| clock_out   | int  |

(`worker_id`, `work_day`, `clock_in`) is the primary key (combination of
columns with unique values) for this table. `work_day` is the day of the
visit, `clock_in` is the minute at which the worker entered the office,
and `clock_out` is the minute at which they left. Both clock values fall
between 1 and 1440, every `clock_in` is smaller than its matching
`clock_out`, and two visits by the same worker on the same day never
overlap in time.

Add up, for every worker and every day, the total number of minutes that
worker spent at the office that day. A worker may enter and leave more
than once on a single day; one visit lasts `clock_out - clock_in`
minutes.

The result rows may come back in any order.

The result format is shown in the following examples.

### Example 1

```text
Input:
Attendance table:
+-----------+------------+----------+-----------+
| worker_id | work_day   | clock_in | clock_out |
+-----------+------------+----------+-----------+
| 4         | 2023-03-06 | 10       | 45        |
| 4         | 2023-03-06 | 120      | 180       |
| 4         | 2023-03-08 | 30       | 95        |
| 6         | 2023-03-06 | 15       | 60        |
| 6         | 2023-03-09 | 100      | 205       |
+-----------+------------+----------+-----------+
Output:
+------------+-----------+---------------+
| day        | worker_id | total_minutes |
+------------+-----------+---------------+
| 2023-03-06 | 4         | 95            |
| 2023-03-08 | 4         | 65            |
| 2023-03-06 | 6         | 45            |
| 2023-03-09 | 6         | 105           |
+------------+-----------+---------------+
Explanation:
Worker 4 spent (45 - 10) + (180 - 120) = 95 minutes at the office on
2023-03-06 across two visits, and (95 - 30) = 65 minutes on 2023-03-08.
Worker 6 spent (60 - 15) = 45 minutes on 2023-03-06 and
(205 - 100) = 105 minutes on 2023-03-09.
```

### Example 2

```text
Input:
Attendance table:
+-----------+------------+----------+-----------+
| worker_id | work_day   | clock_in | clock_out |
+-----------+------------+----------+-----------+
| 2         | 2023-05-02 | 480      | 540       |
| 3         | 2023-05-02 | 600      | 720       |
| 3         | 2023-05-03 | 1        | 60        |
| 9         | 2023-05-03 | 720      | 1440      |
+-----------+------------+----------+-----------+
Output:
+------------+-----------+---------------+
| day        | worker_id | total_minutes |
+------------+-----------+---------------+
| 2023-05-02 | 2         | 60            |
| 2023-05-02 | 3         | 120           |
| 2023-05-03 | 3         | 59            |
| 2023-05-03 | 9         | 720           |
+------------+-----------+---------------+
Explanation:
Each of these visits is a single stretch, so its total is just the visit's
own duration.
```

Write your solution as a single `SELECT` query returning `day`,
`worker_id`, and `total_minutes` for every (`work_day`, `worker_id`) pair
present in `Attendance`, in any order.
