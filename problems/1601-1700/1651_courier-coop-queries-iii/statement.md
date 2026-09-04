# Courier Co-op Queries III

## Description

The courier collective keeps its three tables — couriers, the delivery
requests customers place, and the requests a courier accepted — and
now wants a rolling picture of workload: for every three-month window
of 2020, the average distance and duration its accepted requests
covered.

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
records details of a request that a courier accepted. Every accepted
request also has a matching row in `Requests`.

Each testcase's `dataset` seeds all three tables: its script inserts
the testcase's `Couriers`, `Requests`, and `AcceptedRequests` rows
(whichever are present) before your query runs. The `Couriers` table
shares its schema with the rest of the series but is not needed to
answer this query.

Compute `average_distance_km` and `average_duration_min` for every
three-month window of 2020 that starts in January and ends by
December: January-March, February-April, March-May, and so on through
October-December — ten windows in total, one per starting month `1`
through `10`.

For a window starting at month `s`, first total, separately for each
of the three months `s`, `s + 1`, and `s + 2`, the `distance_km`
(respectively `duration_min`) of every accepted request whose matching
`Requests.requested_at` falls inside that month of **2020** — a month
with no such accepted request contributes `0` for that month, and a
request placed outside 2020 (an earlier or later year) never
contributes to any window, whether or not it was accepted. Then
`average_distance_km` is the sum of the window's three monthly
distance totals divided by `3`, and `average_duration_min` is computed
the same way from the duration totals. Round both averages to the
nearest two decimal places.

Return the result table ordered by `month` in ascending order, where
`month` is the window's starting month number (January is `1`,
February is `2`, and so on, through `10` for the October-December
window). The result format is in the following example.

### Example 1

```text
Input:
Couriers
+------------+------------+
| courier_id | join_date  |
+------------+------------+
| 3          | 2019-05-05 |
| 7          | 2020-02-02 |
| 9          | 2020-06-06 |
+------------+------------+
Requests
+------------+-------------+--------------+
| request_id | customer_id | requested_at |
+------------+-------------+--------------+
| 1          | 202         | 2020-01-21   |
| 2          | 203         | 2020-04-08   |
| 3          | 204         | 2020-05-19   |
| 4          | 205         | 2020-09-02   |
| 5          | 201         | 2019-11-11   |
| 6          | 206         | 2021-02-14   |
| 7          | 207         | 2020-06-30   |
+------------+-------------+--------------+
AcceptedRequests
+------------+------------+-------------+--------------+
| request_id | courier_id | distance_km | duration_min |
+------------+------------+-------------+--------------+
| 1          | 7          | 40          | 60           |
| 2          | 7          | 25          | 35           |
| 3          | 9          | 70          | 20           |
| 4          | 9          | 10          | 50           |
| 5          | 3          | 500         | 400          |
| 6          | 3          | 333         | 222          |
+------------+------------+-------------+--------------+
Output:
+-------+---------------------+---------------------+
| month | average_distance_km | average_duration_min |
+-------+---------------------+---------------------+
| 1     | 13.33               | 20.00                |
| 2     | 8.33                | 11.67                |
| 3     | 31.67               | 18.33                |
| 4     | 31.67               | 18.33                |
| 5     | 23.33               | 6.67                 |
| 6     | 0.00                | 0.00                 |
| 7     | 3.33                | 16.67                |
| 8     | 3.33                | 16.67                |
| 9     | 3.33                | 16.67                |
| 10    | 0.00                | 0.00                 |
+-------+---------------------+---------------------+
Explanation:
By their placement dates, the accepted requests land in these 2020
months: January (request 1, 40 km, 60 min), April (request 2, 25 km,
35 min), May (request 3, 70 km, 20 min), and September (request 4,
10 km, 50 min). Requests 5 and 6 were accepted too, but they were
placed on 2019-11-11 and 2021-02-14, outside 2020, so neither
contributes to any window; request 7 was placed in June 2020 but
never accepted, so the join to `AcceptedRequests` drops it.
The January window covers January-March: distances (40, 0, 0)
average to 40 / 3 = 13.33, durations (60, 0, 0) average to
60 / 3 = 20.00.
The February window covers February-April: distances (0, 0, 25)
average to 8.33, durations (0, 0, 35) average to 11.67.
The March window covers March-May: distances (0, 25, 70) average to
95 / 3 = 31.67, durations (0, 35, 20) average to 55 / 3 = 18.33.
The April window covers April-June: the same three months as March's
window shifted by one give April's totals (25, 70, 0) — again 95 / 3
= 31.67 and 55 / 3 = 18.33.
The May window covers May-July: distances (70, 0, 0) average to
70 / 3 = 23.33, durations (20, 0, 0) average to 20 / 3 = 6.67.
The June window covers June-August, which holds no accepted requests:
0.00 and 0.00.
September's request 10 km / 50 min then feeds three consecutive
windows — July-September, August-October, and September-November —
each averaging 10 / 3 = 3.33 km and 50 / 3 = 16.67 min.
The October window covers October-December, which again holds
nothing: 0.00 and 0.00.
```

### Example 2

```text
Input:
Requests
+------------+-------------+--------------+
| request_id | customer_id | requested_at |
+------------+-------------+--------------+
| 1          | 301         | 2020-10-31   |
| 2          | 302         | 2020-11-01   |
+------------+-------------+--------------+
AcceptedRequests
+------------+------------+-------------+--------------+
| request_id | courier_id | distance_km | duration_min |
+------------+------------+-------------+--------------+
| 1          | 5          | 88          | 44           |
| 2          | 6          | 99          | 55           |
+------------+------------+-------------+--------------+
Output:
+-------+---------------------+---------------------+
| month | average_distance_km | average_duration_min |
+-------+---------------------+---------------------+
| 1     | 0.00                | 0.00                 |
| 2     | 0.00                | 0.00                 |
| 3     | 0.00                | 0.00                 |
| 4     | 0.00                | 0.00                 |
| 5     | 0.00                | 0.00                 |
| 6     | 0.00                | 0.00                 |
| 7     | 0.00                | 0.00                 |
| 8     | 29.33               | 14.67                |
| 9     | 62.33               | 33.00                |
| 10    | 62.33               | 33.00                |
+-------+---------------------+---------------------+
Explanation:
Request 1 is placed on 2020-10-31, the last day of October, and
request 2 on 2020-11-01, the first day of November — a single day
apart, but in different months. The August window (August, September,
October) contains only request 1: 88 / 3 = 29.33 km and 44 / 3 =
14.67 min. The September window (September, October, November)
contains both: (88 + 99) / 3 = 62.33 km and (44 + 55) / 3 = 33.00
min. The October window (October, November, December) also contains
both, so it repeats 62.33 and 33.00. Every window from January
through July covers months with no accepted requests and reports
0.00 for both averages.
```

Write your solution as a single `SELECT` query returning `month`,
`average_distance_km`, `average_duration_min` for every starting
month `1` through `10`, where each window's averages are the sum of
`distance_km` (respectively `duration_min`) over its three months of
2020 divided by `3`, rounded to two decimal places — a month with no
accepted requests contributes `0` to that window's sum, and requests
placed outside 2020 never contribute. Order the result by `month`
ascending.
