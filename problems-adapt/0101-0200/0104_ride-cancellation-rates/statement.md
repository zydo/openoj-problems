# Ride Cancellation Rates

## Description

Two tables record a ride service's activity. `Rides` holds one row per
requested ride; `Members` holds one row per registered person.

Rides

| Column Name | Type    |
| ----------- | ------- |
| id          | int     |
| rider_id    | int     |
| driver_id   | int     |
| city_id     | int     |
| status      | enum    |
| ride_date   | varchar |

`id` is the primary key. `rider_id` and `driver_id` both reference
`member_id` in `Members`. `status` is one of `('completed',
'cancelled_by_driver', 'cancelled_by_client')`.

Members

| Column Name | Type |
| ----------- | ---- |
| member_id   | int  |
| banned      | enum |
| role        | enum |

`member_id` is the primary key. `banned` is one of `('Yes', 'No')` and
`role` is one of `('client', 'driver', 'partner')`.

A day's **cancellation rate** is the share of that day's rides that were
cancelled — by either side — among rides whose rider **and** driver are
both unbanned.

For each day from `2013-10-01` through `2013-10-03` that has at least one
such ride, report the day and its cancellation rate rounded to two decimal
places. (SQLite's `ROUND` yields a number, so `0.00` and `0` count as equal
here.)

Each test case creates fresh copies of both tables; the case's `dataset`
value holds the `INSERT` statements run beforehand.

### Example 1

```text
Input: the Rides and Members tables from the dataset below.
Rides rows:
id | rider | driver | city | status               | ride_date
1  | 2     | 7      | 4    | completed            | 2013-10-01
2  | 3     | 8      | 4    | cancelled_by_client  | 2013-10-01
3  | 5     | 9      | 2    | completed            | 2013-10-01
4  | 5     | 8      | 4    | cancelled_by_driver  | 2013-10-01
5  | 2     | 7      | 1    | completed            | 2013-10-02
6  | 5     | 11     | 2    | completed            | 2013-10-02
7  | 2     | 8      | 3    | cancelled_by_client  | 2013-10-03
8  | 5     | 7      | 4    | completed            | 2013-10-03
9  | 2     | 11     | 2    | cancelled_by_driver  | 2013-10-03
10 | 2     | 7      | 1    | completed            | 2013-10-04
Members rows: 2 and 5 (clients, unbanned), 3 (client, banned), 7, 8 and 11
(drivers, unbanned), 9 (driver, banned), 12 (partner, unbanned).
Output:
Day        | Cancellation Rate
2013-10-01 | 0.50
2013-10-02 | 0.00
2013-10-03 | 0.67
Explanation: On 10-01 ride 2 loses its banned rider and ride 3 its banned
driver, so the rate is 1 of the 2 remaining rides. 10-02 is a clean day.
On 10-03, 2 of 3 rides were cancelled. Ride 10 falls outside the window
and no 10-04 row appears.
```

Answer with one `SELECT` whose output columns are `Day` and
`Cancellation Rate`, in that order.

## Hints

### Hint 1

Both the numerator and the denominator must ignore rides with a banned
participant, so attach `Members` to `Rides` twice — once via `rider_id`,
once via `driver_id` — and bake `banned = 'No'` into each join condition.

### Hint 2

With one row per qualifying ride, grouping by day reduces each day to a
single output row. A `CASE` expression turning "not completed" into 1 and
everything else into 0 lets one aggregate produce the share directly.

### Hint 3

Average those 0/1 flags and round to two decimals. Restrict `ride_date` to
the three-day window _before_ grouping; groups form only for days that have
rows, so days with no qualifying rides stay absent without extra filtering.
