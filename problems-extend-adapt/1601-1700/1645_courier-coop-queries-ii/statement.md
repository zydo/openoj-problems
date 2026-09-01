# Courier Co-op Queries II

## Description

The courier collective keeps the same three tables as before — its
couriers, the delivery requests customers place, and the requests a
courier has accepted — and now wants to see, month by month, how much
of its available roster was actually put to work during 2020.

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

| Column Name | Type |
| ----------- | ---- |
| request_id  | int  |
| courier_id  | int  |
| distance_km | int  |
| duration_min | int |

`request_id` is the column with unique values for this table. Each row
records details of a request that a courier accepted. Every accepted
request also has a matching row in `Requests`.

Each testcase's `dataset` seeds all three tables: its script inserts
the testcase's `Couriers`, `Requests`, and `AcceptedRequests` rows
(whichever are present) before your query runs.

Report, for each of the twelve months of 2020, the `busy_percentage`
of the couriers who were available that month:

```text
busy_percentage = (# couriers who accepted at least one request during the month)
                  / (# couriers available during the month) * 100.0
```

A courier is **available** for a month once their `join_date` falls on
or before that month's last day, no matter how long before that they
joined (an earlier year still counts); a courier whose `join_date`
lands after that month's last day is not yet available. A courier
**worked** during a month when at least one request they accepted has
its `Requests.requested_at` inside that month — accepting several
requests in the same month still counts the courier once, and a
request belongs to the month it was placed, regardless of when (or
whether) it was later accepted.

If no courier is available during a month, that month's
`busy_percentage` is `0`. Round every `busy_percentage` to the nearest
two decimal places.

Report all twelve months of 2020 unconditionally, even months with no
available couriers. Return the result table ordered by `month` in
ascending order, where `month` is the month's number (January is `1`,
February is `2`, and so on). The result format is in the following
example.

### Example 1

```text
Input:
Couriers
+------------+------------+
| courier_id | join_date  |
+------------+------------+
| 4          | 2019-11-30 |
| 11         | 2020-01-09 |
| 6          | 2020-04-21 |
| 9          | 2020-07-30 |
| 2          | 2020-11-15 |
| 13         | 2021-03-02 |
+------------+------------+
Requests
+------------+-------------+--------------+
| request_id | customer_id | requested_at |
+------------+-------------+--------------+
| 1          | 88          | 2020-01-17   |
| 7          | 64          | 2020-03-05   |
| 2          | 52          | 2020-05-23   |
| 8          | 77          | 2020-06-14   |
| 9          | 84          | 2020-06-27   |
| 11         | 91          | 2020-06-29   |
| 5          | 90          | 2020-08-02   |
| 12         | 45          | 2020-09-19   |
| 6          | 31          | 2020-12-01   |
| 3          | 101         | 2019-12-28   |
| 10         | 58          | 2021-01-20   |
+------------+-------------+--------------+
AcceptedRequests
+------------+------------+-------------+--------------+
| request_id | courier_id | distance_km | duration_min |
+------------+------------+-------------+--------------+
| 1          | 11         | 20          | 30           |
| 7          | 11         | 33          | 41           |
| 2          | 6          | 12          | 17           |
| 8          | 4          | 44          | 52           |
| 9          | 6          | 15          | 22           |
| 11         | 6          | 28          | 39           |
| 5          | 9          | 55          | 66           |
| 12         | 6          | 9           | 11           |
| 6          | 2          | 66          | 77           |
| 10         | 4          | 77          | 88           |
+------------+------------+-------------+--------------+
Output:
+-------+-----------------+
| month | busy_percentage |
+-------+-----------------+
| 1     | 50.00           |
| 2     | 0.00            |
| 3     | 50.00           |
| 4     | 0.00            |
| 5     | 33.33           |
| 6     | 66.67           |
| 7     | 0.00            |
| 8     | 25.00           |
| 9     | 25.00           |
| 10    | 0.00            |
| 11    | 0.00            |
| 12    | 20.00           |
+-------+-----------------+
Explanation:
Couriers 4 and 11 have joined by the end of January, so two couriers
are available in January and courier 11, who accepted request 1
(placed 2020-01-17), is the one who worked: 1 / 2 = 50%. February
still has two available couriers and neither worked: 0 / 2 = 0%.
March again has two available, and courier 11 worked once more
(request 7): 1 / 2 = 50%. Courier 6 joins on 2020-04-21, so April,
May, June, and July each have three available couriers. April has no
accepted requests (0 / 3 = 0%); May's request 2 goes to courier 6
(1 / 3 = 33.33%); June's requests 8 and 9 go to couriers 4 and 6
(2 / 3 = 66.67%); July has none again (0 / 3 = 0%). Courier 9 joins
on 2020-07-30, making four couriers available from August through
October: courier 9 takes August's request 5 (1 / 4 = 25%), courier 6
takes September's request 12 (1 / 4 = 25%), and October has none
(0 / 4 = 0%). Courier 2 joins on 2020-11-15, so November and December
each have five available couriers; November has no accepted requests
(0 / 5 = 0%) and courier 2 takes December's request 6
(1 / 5 = 20%). Courier 13 joins in 2021 and never counts as
available for any 2020 month. Request 11 also went to courier 6 in
June, but a courier who accepts several requests in the same month
still counts once. Request 10 was accepted by courier 4, yet it was
placed on 2021-01-20 and so counts toward no 2020 month; request 3
was never accepted and was placed in 2019 besides.
```

### Example 2

```text
Input:
Couriers
+------------+------------+
| courier_id | join_date  |
+------------+------------+
| 1          | 2020-02-28 |
| 2          | 2020-03-01 |
+------------+------------+
Requests
+------------+-------------+--------------+
| request_id | customer_id | requested_at |
+------------+-------------+--------------+
| 1          | 10          | 2020-03-14   |
+------------+-------------+--------------+
AcceptedRequests
+------------+------------+-------------+--------------+
| request_id | courier_id | distance_km | duration_min |
+------------+------------+-------------+--------------+
| 1          | 1          | 5           | 9            |
+------------+------------+-------------+--------------+
Output:
+-------+-----------------+
| month | busy_percentage |
+-------+-----------------+
| 1     | 0.00            |
| 2     | 0.00            |
| 3     | 50.00           |
| 4     | 0.00            |
| 5     | 0.00            |
| 6     | 0.00            |
| 7     | 0.00            |
| 8     | 0.00            |
| 9     | 0.00            |
| 10    | 0.00            |
| 11    | 0.00            |
| 12    | 0.00            |
+-------+-----------------+
Explanation:
Both couriers join after January, so January has no available
couriers and reports `0` by the zero-available rule. Courier 1 joins
on 2020-02-28, the month's second-to-last day, and already counts for
February — one available courier, none of them worked: 0 / 1 = 0%.
Courier 2 joins on 2020-03-01, so March has two available couriers,
and courier 1 worked by accepting request 1, placed 2020-03-14:
1 / 2 = 50%. From April through December the roster is unchanged and
no further requests were accepted, so every remaining month is 0%.
```

Write your solution as a single `SELECT` query returning `month` and
`busy_percentage` for every month `1` through `12`, where
`busy_percentage` is `0` whenever no courier is yet available that
month, and otherwise the percentage — rounded to two decimal places —
of available couriers who accepted at least one request placed during
that month. Order the result by `month` ascending.
