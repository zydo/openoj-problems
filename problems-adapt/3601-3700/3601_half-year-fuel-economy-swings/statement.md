# Half-Year Fuel Economy Swings

## Description

Table: `couriers`

| Column Name  | Type    |
| ------------ | ------- |
| courier_id   | int     |
| courier_name | varchar |

(`courier_id`) is the unique identifier for this table.
Each row describes one courier on the delivery roster.

Table: `deliveries`

| Column Name   | Type    |
| ------------- | ------- |
| delivery_id   | int     |
| courier_id    | int     |
| delivery_date | date    |
| km_driven     | decimal |
| fuel_used     | decimal |

(`delivery_id`) is the unique identifier for this table.
Each row logs one completed run: the courier who drove it, the date it
happened, the kilometers covered, and the fuel that run consumed.

A run's fuel economy is `km_driven / fuel_used`. Compare every courier's
average economy over the first half of the year (January through June)
with their average over the second half (July through December), and
report the swing between the two halves.

- Only couriers with at least one delivery in each half are reported
- `first_half_mean` and `second_half_mean` average the per-run economy
  ratios of each half — they are not the ratio of the totals
- `economy_gain` is `second_half_mean - first_half_mean`, computed from
  the unrounded means before anything is rounded
- All three values are rounded to 2 decimal places

Return the result table ordered by `economy_gain` in descending order,
then by `courier_name` in ascending order.

Each testcase supplies its own `dataset`: the script seeds the
`couriers` and `deliveries` tables before your query runs. The result
format is in the following example.

### Example 1

```text
Input:
couriers table:
+------------+--------------+
| courier_id | courier_name |
+------------+--------------+
| 11         | Marta Kell   |
| 12         | Owen Pratt   |
| 13         | Priya Nair   |
| 14         | Sam Otis     |
+------------+--------------+
deliveries table:
+-------------+------------+---------------+-----------+-----------+
| delivery_id | courier_id | delivery_date | km_driven | fuel_used |
+-------------+------------+---------------+-----------+-----------+
| 101         | 11         | 2024-02-10    | 100.0     | 9.0       |
| 102         | 11         | 2024-05-19    | 140.0     | 12.0      |
| 103         | 11         | 2024-08-02    | 120.0     | 10.0      |
| 104         | 11         | 2024-11-14    | 117.8     | 9.0       |
| 105         | 12         | 2024-01-22    | 96.0      | 8.0       |
| 106         | 12         | 2024-04-03    | 132.0     | 11.0      |
| 107         | 12         | 2024-09-30    | 100.0     | 8.5       |
| 108         | 12         | 2024-12-07    | 104.0     | 9.0       |
| 109         | 13         | 2024-03-08    | 80.0      | 8.0       |
| 110         | 13         | 2024-06-21    | 110.0     | 10.0      |
| 111         | 14         | 2024-07-04    | 140.0     | 14.0      |
+-------------+------------+---------------+-----------+-----------+
Output:
+------------+--------------+-----------------+------------------+--------------+
| courier_id | courier_name | first_half_mean | second_half_mean | economy_gain |
+------------+--------------+-----------------+------------------+--------------+
| 11         | Marta Kell   | 11.39           | 12.54            | 1.16         |
| 12         | Owen Pratt   | 12.00           | 11.66            | -0.34        |
+------------+--------------+-----------------+------------------+--------------+
Explanation: Marta Kell (courier_id = 11) drives 100.0/9.0 = 11.11 km
per liter in February and 140.0/12.0 = 11.67 in May, so her first-half
mean is 11.39. In the second half she manages 120.0/10.0 = 12.00 in
August and 117.8/9.0 = 13.09 in November, a second-half mean of 12.54.
The gain is computed from the unrounded means: 12.5444... - 11.3889...
= 1.1556, which rounds to 1.16 — note the displayed means themselves
only differ by 1.15.

Owen Pratt (courier_id = 12) holds a flat 12.00 through the first half
but slips to 11.66 in the second, so his swing is negative: -0.34.

Priya Nair (courier_id = 13) drove only in the first half and Sam Otis
(courier_id = 14) only in the second; with nothing to compare against,
neither appears in the output.

The output table is ordered by economy_gain in descending order, then
by courier_name in ascending order.
```

Write your solution as a single `SELECT` query returning five columns —
`courier_id`, `courier_name`, `first_half_mean`, `second_half_mean`, and
`economy_gain` — one row for each courier with deliveries in both halves
of the year, ordered by `economy_gain` in descending order, then by
`courier_name` in ascending order.
