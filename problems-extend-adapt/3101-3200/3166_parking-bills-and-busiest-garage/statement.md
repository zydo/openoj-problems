# Parking Bills and Busiest Garage

## Description

Table: `Stays`

| Column Name | Type     |
| ----------- | -------- |
| garage_id   | int      |
| vehicle_id  | int      |
| entered_at  | datetime |
| left_at     | datetime |
| amount_paid | decimal  |

(garage_id, vehicle_id, entered_at) is the primary key (combination of
columns with unique values) for this table.
Each row is one parking session: the garage that held the vehicle, the
vehicle itself, the moments it entered and left, and what that session
cost.

For every vehicle, total up everything it paid across all garages, and
divide that total by its overall parked time to get an average hourly rate
rounded to two decimal places. Also name the garage where the vehicle
accumulated the most parked time.

Return the result table ordered by `vehicle_id` in ascending order.

Note: Test cases are generated in such a way that a vehicle is never parked
in two garages at the same time.

Every test case ships its own `dataset`: the statements inside it populate
`Stays` before your query executes. The result format is in the following
examples.

### Example 1

```text
Input:
Stays table:
+-----------+------------+---------------------+---------------------+-------------+
| garage_id | vehicle_id | entered_at          | left_at             | amount_paid |
+-----------+------------+---------------------+---------------------+-------------+
| 1         | 301        | 2024-04-02 08:00:00 | 2024-04-02 09:30:00 | 4.50        |
| 2         | 301        | 2024-04-02 10:00:00 | 2024-04-02 11:45:00 | 6.00        |
| 3         | 301        | 2024-04-03 14:00:00 | 2024-04-03 16:00:00 | 5.00        |
| 1         | 302        | 2024-04-02 07:15:00 | 2024-04-02 10:45:00 | 3.00        |
| 1         | 302        | 2024-04-03 09:00:00 | 2024-04-03 12:30:00 | 3.00        |
| 2         | 303        | 2024-04-02 22:00:00 | 2024-04-03 02:30:00 | 8.00        |
| 3         | 303        | 2024-04-03 22:00:00 | 2024-04-04 00:30:00 | 2.00        |
+-----------+------------+---------------------+---------------------+-------------+
Output:
+------------+------------+-----------------+------------+
| vehicle_id | total_paid | avg_hourly_rate | top_garage |
+------------+------------+-----------------+------------+
| 301        | 15.50      | 2.95            | 3          |
| 302        | 6.00       | 0.86            | 1          |
| 303        | 10.00      | 1.43            | 2          |
+------------+------------+-----------------+------------+
Explanation: Vehicle 301 paid 4.50 + 6.00 + 5.00 = 15.50 for 1.5 + 1.75 +
2 = 5.25 parked hours, an average of 2.95 per hour; its longest total sits
in garage 3 (2 hours against 1.75 and 1.5). Vehicle 302 paid 6.00 across
two garage-1 sessions totalling 7 hours, so its average is 0.86 and garage
1 is trivially its busiest. Vehicle 303's sessions run across midnight and
sum to 4.5 + 2.5 = 7 hours for 10.00 paid — an average of 1.43 — with
garage 2 holding the most time (4.5 hours).
```

### Example 2

```text
Input:
Stays table:
+-----------+------------+---------------------+---------------------+-------------+
| garage_id | vehicle_id | entered_at          | left_at             | amount_paid |
+-----------+------------+---------------------+---------------------+-------------+
| 2         | 401        | 2024-04-05 08:00:00 | 2024-04-05 12:00:00 | 6.00        |
| 5         | 401        | 2024-04-06 08:00:00 | 2024-04-06 12:00:00 | 4.00        |
| 4         | 402        | 2024-04-05 09:00:00 | 2024-04-05 09:20:00 | 1.00        |
+-----------+------------+---------------------+---------------------+-------------+
Output:
+------------+------------+-----------------+------------+
| vehicle_id | total_paid | avg_hourly_rate | top_garage |
+------------+------------+-----------------+------------+
| 401        | 10.00      | 1.25            | 2          |
| 402        | 1.00       | 3.00            | 4          |
+------------+------------+-----------------+------------+
Explanation: Vehicle 401 parked exactly 4 hours in garage 2 and 4 hours in
garage 5 — a tie, resolved toward the smaller id, so garage 2 is reported;
it paid 10.00 over 8 hours, an average of 1.25. Vehicle 402 has one short
20-minute session in garage 4, costing 1.00, which works out to 3.00 per
hour.
```

Write your solution as a single `SELECT` query returning four columns —
`vehicle_id`; `total_paid`, the sum of the vehicle's paid amounts;
`avg_hourly_rate`, that sum divided by the vehicle's total parked hours
counted as fractional hours and rounded to 2 decimal places; and
`top_garage`, the garage id where the vehicle's summed duration is largest
(ties broken toward the smaller `garage_id`) — one row per vehicle, in
ascending `vehicle_id` order. Return the result table in that order.
