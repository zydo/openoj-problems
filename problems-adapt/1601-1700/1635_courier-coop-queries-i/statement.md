# Courier Co-op Queries I

## Description

A bicycle-courier collective keeps three tables: its couriers, the
delivery requests customers place, and the requests a courier accepted.

Table: `Couriers`

| Column Name | Type |
| ----------- | ---- |
| courier_id  | int  |
| join_date   | date |

`courier_id` is the column with unique values for this table. Each row
records a courier's id and the date they joined the collective.

Table: `Requests`

| Column Name  | Type |
| ------------ | ---- |
| request_id   | int  |
| customer_id  | int  |
| requested_at | date |

`request_id` is the column with unique values for this table. Each row
records a delivery request's id, the id of the customer who placed it,
and the day it was placed. Some requests in this table were never
accepted.

Table: `AcceptedRequests`

| Column Name  | Type |
| ------------ | ---- |
| request_id   | int  |
| courier_id   | int  |
| distance_km  | int  |
| duration_min | int  |

`request_id` is the column with unique values for this table. Each row
records details of a request that was accepted by a courier. Every
accepted request also has a matching row in `Requests`.

Each testcase's `dataset` seeds all three tables: its script inserts
the testcase's `Couriers`, `Requests`, and `AcceptedRequests` rows
(whichever are present) before your query runs.

Report, for each of the twelve months of 2020, two statistics:

- `active_couriers` — the number of couriers who have joined the
  collective by the end of that month. A courier counts toward a month
  once their `join_date` falls on or before the last day of that
  month, regardless of how long ago they joined (even in an earlier
  year); a courier whose `join_date` falls after that month's last day
  does not count yet.
- `accepted_requests` — the number of accepted requests whose
  `Requests.requested_at` falls within that month of 2020. A request
  counts only when both its year is 2020 and its month matches; the
  same request month applies regardless of when (or whether) the
  request was later accepted.

Report all twelve months of 2020 unconditionally, even months with
zero active couriers or zero accepted requests. Return the result
table ordered by `month` in ascending order, where `month` is the
month's number (January is `1`, February is `2`, and so on). The
result format is in the following example.

### Example 1

```text
Input:
Couriers
+------------+------------+
| courier_id | join_date  |
+------------+------------+
| 5          | 2019-11-20 |
| 9          | 2020-02-14 |
| 3          | 2020-05-02 |
| 12         | 2020-08-30 |
| 7          | 2021-02-11 |
+------------+------------+
Requests
+------------+-------------+--------------+
| request_id | customer_id | requested_at |
+------------+-------------+--------------+
| 100        | 501         | 2020-01-19   |
| 101        | 502         | 2020-02-08   |
| 102        | 503         | 2020-04-25   |
| 103        | 501         | 2020-06-14   |
| 104        | 504         | 2020-06-28   |
| 105        | 502         | 2020-08-05   |
| 106        | 505         | 2020-10-11   |
| 107        | 503         | 2020-12-21   |
| 108        | 506         | 2019-12-30   |
| 109        | 507         | 2021-01-03   |
+------------+-------------+--------------+
AcceptedRequests
+------------+------------+-------------+--------------+
| request_id | courier_id | distance_km | duration_min |
+------------+------------+-------------+--------------+
| 100        | 5          | 4           | 12           |
| 102        | 9          | 6           | 20           |
| 103        | 9          | 3           | 9            |
| 105        | 3          | 8           | 25           |
| 106        | 12         | 5           | 15           |
| 107        | 12         | 7           | 22           |
| 108        | 5          | 2           | 8            |
| 109        | 7          | 4           | 11           |
+------------+------------+-------------+--------------+
Output:
+-------+-----------------+-------------------+
| month | active_couriers | accepted_requests |
+-------+-----------------+-------------------+
| 1     | 1               | 1                 |
| 2     | 2               | 0                 |
| 3     | 2               | 0                 |
| 4     | 2               | 1                 |
| 5     | 3               | 0                 |
| 6     | 3               | 1                 |
| 7     | 3               | 0                 |
| 8     | 4               | 1                 |
| 9     | 4               | 0                 |
| 10    | 4               | 1                 |
| 11    | 4               | 0                 |
| 12    | 4               | 1                 |
+-------+-----------------+-------------------+
Explanation:
Courier 5 joined in November 2019, so they count from January
onward. Courier 9 joins on 2020-02-14 and counts from February,
courier 3 joins on 2020-05-02 and counts from May, and courier 12
joins on 2020-08-30 and counts from August — the active count steps
1, 2, 3, then 4 as those months end. Courier 7 joins in February
2021 and never counts toward any 2020 month.
On the request side, each accepted request is booked to the month it
was placed: January has request 100 (1), February's request 101 was
never accepted (0), April has 102, June has 103 (request 104 went
unaccepted), August has 105, October has 106, and December has 107.
Requests 108 and 109 were accepted too, but they were placed on
2019-12-30 and 2021-01-03, outside 2020, so they never count toward
any month of the year.
```

### Example 2

```text
Input:
Couriers
+------------+------------+
| courier_id | join_date  |
+------------+------------+
| 1          | 2020-01-31 |
| 2          | 2020-02-01 |
+------------+------------+
Requests
+------------+-------------+--------------+
| request_id | customer_id | requested_at |
+------------+-------------+--------------+
| 10         | 601         | 2019-12-31   |
| 11         | 602         | 2020-01-01   |
| 12         | 603         | 2020-12-31   |
| 13         | 604         | 2021-01-01   |
+------------+-------------+--------------+
AcceptedRequests
+------------+------------+-------------+--------------+
| request_id | courier_id | distance_km | duration_min |
+------------+------------+-------------+--------------+
| 10         | 1          | 3           | 7            |
| 11         | 1          | 3           | 7            |
| 12         | 1          | 3           | 7            |
| 13         | 1          | 3           | 7            |
+------------+------------+-------------+--------------+
Output:
+-------+-----------------+-------------------+
| month | active_couriers | accepted_requests |
+-------+-----------------+-------------------+
| 1     | 1               | 1                 |
| 2     | 2               | 0                 |
| 3     | 2               | 0                 |
| 4     | 2               | 0                 |
| 5     | 2               | 0                 |
| 6     | 2               | 0                 |
| 7     | 2               | 0                 |
| 8     | 2               | 0                 |
| 9     | 2               | 0                 |
| 10    | 2               | 0                 |
| 11    | 2               | 0                 |
| 12    | 2               | 1                 |
+-------+-----------------+-------------------+
Explanation:
Courier 1 joins on 2020-01-31 — the last day of January — so they
already count for January, while courier 2 joins one day later and
counts from February onward. Request 11, placed on 2020-01-01, is
January's single accepted request; request 12, placed on
2020-12-31, is December's. Requests 10 and 13 were accepted as
well, but they were placed on 2019-12-31 and 2021-01-01, outside
the year, so neither contributes to any 2020 month.
```

Write your solution as a single `SELECT` query returning `month`,
`active_couriers`, `accepted_requests` for every month `1` through
`12`, where `active_couriers` counts `Couriers` rows whose
`join_date` is on or before that month's last day of 2020, and
`accepted_requests` counts `AcceptedRequests` rows whose matching
`Requests.requested_at` falls in that month of 2020. Order the result
by `month` ascending.
