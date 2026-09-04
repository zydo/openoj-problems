# Nurseries With Lopsided Stock

## Description

Table: `nurseries`

| Column Name  | Type    |
| ------------ | ------- |
| nursery_id   | int     |
| nursery_name | varchar |
| city         | varchar |

`nursery_id` is the unique identifier for this table. Each row describes
one plant nursery and the city it operates in.

Table: `stock`

| Column Name | Type    |
| ----------- | ------- |
| stock_id    | int     |
| nursery_id  | int     |
| plant_name  | varchar |
| quantity    | int     |
| price       | decimal |

`stock_id` is the unique identifier for this table. Each row records how
many units of one plant a nursery holds and at what price.

A nursery's stock is lopsided when its priciest plant sits in smaller
numbers than its cheapest one — the expensive end sold through while the
cheap end gathers dust.

- For each nursery, find the most expensive plant (highest price) and
  its quantity
- For each nursery, find the cheapest plant (lowest price) and its
  quantity
- The stock is lopsided when the priciest plant's quantity is strictly
  less than the cheapest plant's quantity
- `stock_skew` is `cheapest_quantity / priciest_quantity`, rounded to 2
  decimal places
- Only nurseries carrying at least 3 different plants are considered

Return the result table ordered by `stock_skew` in descending order,
then by nursery name in ascending order.

Each testcase supplies its own `dataset`: the script seeds the
`nurseries` and `stock` tables before your query runs. The result format
is in the following example.

### Example 1

```text
Input:
nurseries table:
+------------+--------------+----------+
| nursery_id | nursery_name | city     |
+------------+--------------+----------+
| 7          | Fern Hollow  | Portland |
| 8          | Cactus Cove  | Tucson   |
| 9          | Moss & Mist  | Portland |
| 10         | Tiny Sprout  | Salem    |
+------------+--------------+----------+
stock table:
+----------+------------+------------+----------+--------+
| stock_id | nursery_id | plant_name | quantity | price  |
+----------+------------+------------+----------+--------+
| 301      | 7          | Orchid     | 4        | 89.00  |
| 302      | 7          | Fern       | 60       | 12.50  |
| 303      | 7          | Bamboo     | 30       | 24.00  |
| 304      | 7          | Succulent  | 80       | 6.50   |
| 305      | 8          | Bonsai     | 5        | 120.00 |
| 306      | 8          | Cactus     | 45       | 9.00   |
| 307      | 8          | Palm       | 20       | 55.00  |
| 308      | 9          | Monstera   | 70       | 45.00  |
| 309      | 9          | Moss       | 40       | 8.00   |
| 310      | 9          | Ivy        | 25       | 15.00  |
| 311      | 10         | Basil      | 10       | 3.00   |
| 312      | 10         | Mint       | 30       | 2.50   |
+----------+------------+------------+----------+--------+
Output:
+------------+--------------+----------+----------------+----------------+------------+
| nursery_id | nursery_name | city     | priciest_plant | cheapest_plant | stock_skew |
+------------+--------------+----------+----------------+----------------+------------+
| 7          | Fern Hollow  | Portland | Orchid         | Succulent      | 20.00      |
| 8          | Cactus Cove  | Tucson   | Bonsai         | Cactus         | 9.00       |
+------------+--------------+----------+----------------+----------------+------------+

Explanation: Fern Hollow (nursery_id = 7):
Most expensive plant: Orchid ($89.00) with quantity 4.
Cheapest plant: Succulent ($6.50) with quantity 80.
Lopsided: 4 < 80. Stock skew: 80 / 4 = 20.00.
Carries 4 plants (at least 3), so it qualifies.

Cactus Cove (nursery_id = 8):
Most expensive plant: Bonsai ($120.00) with quantity 5.
Cheapest plant: Cactus ($9.00) with quantity 45.
Lopsided: 5 < 45. Stock skew: 45 / 5 = 9.00.
Carries 3 plants, so it qualifies.

Nurseries not included:
Moss & Mist (nursery_id = 9): its priciest plant Monstera (70 units)
outnumbers its cheapest plant Moss (40 units), so the stock is not
lopsided.
Tiny Sprout (nursery_id = 10): carries only 2 plants, below the
3-plant minimum.

The output table is ordered by stock_skew in descending order, then by
nursery_name in ascending order.
```

Write your solution as a single `SELECT` query returning one row per
lopsided nursery — the nursery details, its priciest and cheapest
plants, and the rounded stock skew — ordered by `stock_skew` in
descending order, then by `nursery_name` in ascending order.
