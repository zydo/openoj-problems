# Crop Rotation Routines

## Description

Table: `growers`

| Column Name | Type    |
| ----------- | ------- |
| grower_id   | int     |
| grower_name | varchar |
| region      | varchar |

`grower_id` is the unique identifier for this table. Each row describes
one grower and the region they farm in.

Table: `plantings`

| Column Name   | Type    |
| ------------- | ------- |
| planting_id   | int     |
| grower_id     | int     |
| crop          | varchar |
| planting_date | date    |
| hours_logged  | decimal |

`planting_id` is the unique identifier for this table. Each row records
one tending visit a grower paid to a plot planted with one crop.

A grower keeps a crop rotation routine when their visits run through
several crops in a repeating cycle rather than sticking to one or two.

- A routine means at least 3 different crops visited in a repeating
  sequence
- The sequence must complete at least 2 full cycles, so the run needs at
  least 2 x (number of crops) visits
- Visits must fall on near-consecutive dates: a gap of more than 2 days
  between two visits ends the run
- `rotation_length` counts the different crops in the run
- `rotation_hours` totals `hours_logged` across every visit in the run
- Only growers whose best run spans at least 3 crops are reported

Return the result table ordered by `rotation_length` in descending
order, then by `rotation_hours` in descending order.

Each testcase supplies its own `dataset`: the script seeds the `growers`
and `plantings` tables before your query runs. The result format is in
the following example.

### Example 1

```text
Input:
growers table:
+------------+--------------+-------------+
| grower_id  | grower_name  | region      |
+------------+--------------+-------------+
| 3          | Hana Ito     | Riverbend   |
| 4          | Marco Diaz   | Stonebridge |
| 5          | Nell Okafor  | Riverbend   |
| 6          | Pavel Novak  | Hillcrest   |
+------------+--------------+-------------+
plantings table:
+-------------+------------+---------+---------------+--------------+
| planting_id | grower_id  | crop    | planting_date | hours_logged |
+-------------+------------+---------+---------------+--------------+
| 501         | 3          | Kale    | 2024-10-01    | 2.5          |
| 502         | 3          | Beans   | 2024-10-02    | 3.0          |
| 503         | 3          | Corn    | 2024-10-03    | 2.0          |
| 504         | 3          | Kale    | 2024-10-04    | 2.5          |
| 505         | 3          | Beans   | 2024-10-05    | 3.0          |
| 506         | 3          | Corn    | 2024-10-06    | 2.0          |
| 507         | 4          | Wheat   | 2024-10-01    | 5.0          |
| 508         | 4          | Beets   | 2024-10-02    | 2.5          |
| 509         | 4          | Garlic  | 2024-10-03    | 3.0          |
| 510         | 4          | Lentils | 2024-10-04    | 2.0          |
| 511         | 4          | Wheat   | 2024-10-05    | 5.0          |
| 512         | 4          | Beets   | 2024-10-06    | 2.5          |
| 513         | 4          | Garlic  | 2024-10-07    | 3.0          |
| 514         | 4          | Lentils | 2024-10-08    | 2.0          |
| 515         | 5          | Squash  | 2024-10-01    | 2.0          |
| 516         | 5          | Okra    | 2024-10-02    | 2.5          |
| 517         | 5          | Squash  | 2024-10-03    | 2.0          |
| 518         | 5          | Okra    | 2024-10-04    | 2.5          |
| 519         | 6          | Barley  | 2024-10-01    | 3.0          |
| 520         | 6          | Oats    | 2024-10-05    | 2.5          |
+-------------+------------+---------+---------------+--------------+
Output:
+------------+--------------+-------------+-----------------+----------------+
| grower_id  | grower_name  | region      | rotation_length | rotation_hours |
+------------+--------------+-------------+-----------------+----------------+
| 4          | Marco Diaz   | Stonebridge | 4               | 25.0           |
| 3          | Hana Ito     | Riverbend   | 3               | 15.0           |
+------------+--------------+-------------+-----------------+----------------+
Explanation: Marco Diaz (grower_id = 4):
Visit sequence: Wheat -> Beets -> Garlic -> Lentils -> Wheat -> Beets ->
Garlic -> Lentils over Oct 1-8, dates consecutive with no gap over 2
days. The 4-crop cycle repeats twice (8 visits, and 8 >= 2 x 4).
Rotation length: 4 crops.
Rotation hours: 5.0 + 2.5 + 3.0 + 2.0 + 5.0 + 2.5 + 3.0 + 2.0 = 25.0
hours.

Hana Ito (grower_id = 3):
Kale -> Beans -> Corn, repeated twice over Oct 1-6: 6 visits covering 3
crops, so her routine spans 3 crops and 2.5 + 3.0 + 2.0 + 2.5 + 3.0 +
2.0 = 15.0 hours.

Growers not included:
Nell Okafor (grower_id = 5): alternates Squash and Okra only — 2 crops
is below the 3-crop minimum.
Pavel Novak (grower_id = 6): his two visits sit 4 days apart, which
breaks the run, and 2 visits could not complete a cycle anyway.

The output table is ordered by rotation_length in descending order,
then by rotation_hours in descending order.
```

Write your solution as a single `SELECT` query returning `grower_id`,
`grower_name`, `region`, `rotation_length`, and `rotation_hours` in that
order — one row per grower whose best run forms a rotation of at least
three crops, ordered by `rotation_length` in descending order, then by
`rotation_hours` in descending order.
