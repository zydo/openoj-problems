# Top Category Each Season

## Description

Table: `receipts`

| Column Name | Type    |
| ----------- | ------- |
| receipt_id  | int     |
| item_id     | int     |
| sold_on     | date    |
| units       | int     |
| unit_price  | decimal |

`receipt_id` is the unique key for this table. Each row records one sale:
the item sold, the date of the sale, how many units it moved, and the
price per unit.

Table: `catalog`

| Column Name | Type    |
| ----------- | ------- |
| item_id     | int     |
| item_name   | varchar |
| department  | varchar |

`item_id` is the unique key for this table. Each row gives an item's name
and department.

Write a solution to find the most popular department for each season. The
seasons are defined as:

- Winter: December, January, February
- Spring: March, April, May
- Summer: June, July, August
- Fall: September, October, November

A department's popularity in a season is its total units sold that season.
If two departments tie on units, pick the one with the higher total
revenue (units × unit_price). If they still tie, pick the lexicographically
smaller department name.

Return the result table ordered by season in ascending order.

Every testcase supplies its own `dataset`: the DDL seeds both tables with
that testcase's rows. The result format is in the following example.

### Example 1

```text
Input:

receipts table:

+------------+---------+------------+-------+------------+
| receipt_id | item_id | sold_on    | units | unit_price |
+------------+---------+------------+-------+------------+
| 1          | 31      | 2024-12-08 | 4     | 20.00      |
| 2          | 33      | 2025-01-12 | 3     | 30.00      |
| 3          | 35      | 2025-02-02 | 5     | 15.00      |
| 4          | 34      | 2025-03-15 | 2     | 12.00      |
| 5          | 32      | 2025-04-21 | 6     | 10.00      |
| 6          | 35      | 2025-05-30 | 2     | 15.00      |
| 7          | 33      | 2025-06-09 | 4     | 30.00      |
| 8          | 31      | 2025-07-18 | 4     | 22.00      |
| 9          | 35      | 2025-08-25 | 1     | 15.00      |
| 10         | 34      | 2025-09-14 | 3     | 12.00      |
| 11         | 32      | 2025-10-05 | 3     | 12.00      |
| 12         | 35      | 2025-11-23 | 2     | 15.00      |
+------------+---------+------------+-------+------------+

catalog table:

+---------+-------------+------------+
| item_id | item_name   | department |
+---------+-------------+------------+
| 31      | Red Wagon   | Toys       |
| 32      | Board Game  | Toys       |
| 33      | Garden Hose | Garden     |
| 34      | Plant Pot   | Garden     |
| 35      | Vinyl Recd. | Media      |
+---------+-------------+------------+

Output:

+----------+------------+-------------+---------------+
| season   | department | total_units | total_revenue |
+----------+------------+-------------+---------------+
| Fall     | Garden     | 3           | 36.00         |
| Spring   | Toys       | 6           | 60.00         |
| Summer   | Garden     | 4           | 120.00        |
| Winter   | Media      | 5           | 75.00         |
+----------+------------+-------------+---------------+

Explanation:

Fall (Sep, Oct, Nov):

    Garden: 3 units (3 Plant Pots in Sep), revenue $36.00
    Toys: 3 units (3 Board Games in Oct), revenue $36.00
    Media: 2 units (2 Vinyl Records in Nov), revenue $30.00
    Garden and Toys tie on 3 units and $36.00, so the lexicographically
    smaller department, Garden, wins.

Spring (Mar, Apr, May):

    Garden: 2 units, revenue $24.00
    Toys: 6 units (6 Board Games in Apr), revenue $60.00
    Media: 2 units, revenue $30.00
    Toys wins with the highest total (6 units).

Summer (Jun, Jul, Aug):

    Garden: 4 units (4 Garden Hoses in Jun), revenue $120.00
    Toys: 4 units (4 Red Wagons in Jul), revenue $88.00
    Media: 1 unit, revenue $15.00
    Garden and Toys tie on 4 units; Garden's higher revenue ($120.00 vs
    $88.00) breaks the tie.

Winter (Dec, Jan, Feb):

    Toys: 4 units, revenue $80.00
    Garden: 3 units, revenue $90.00
    Media: 5 units (5 Vinyl Records in Feb), revenue $75.00
    Media wins with the highest total (5 units).

The result table is ordered by season in ascending order.
```

Write your solution as a single `SELECT` query returning, for each season,
the winning department, its total units, and its total revenue.
