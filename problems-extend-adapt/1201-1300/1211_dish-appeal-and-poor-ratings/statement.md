# Dish Appeal and Poor Ratings

## Description

Table: `Dishes`

| Column Name | Type    |
| ----------- | ------- |
| category    | varchar |
| dish        | varchar |
| placement   | int     |
| rating      | int     |

This table may contain duplicate rows.
Each row is one dish from a restaurant group's menu survey: the menu
`category` it belongs to, the dish's name, how high up it sits on the
menu board, and the average diner `rating` it has earned.
The `placement` column holds a value from 1 to 500.
The `rating` column holds a value from 1 to 5. A dish rated below 3 is
considered poorly rated.

A category's appeal is defined as:

The average of the ratio between a dish's rating and its placement,
taken over every row of that category.

A category's poor share is defined as:

The percentage of the category's dishes whose rating is below 3.

Write a solution to find each `category` together with its `appeal` and
`poor_share`.

Both `appeal` and `poor_share` should be **rounded to 2 decimal places**.

Return the result table in any order.

The result format is shown in the following examples.

### Example 1

```text
Input:
Dishes table:
+----------+-------------+-----------+--------+
| category | dish        | placement | rating |
+----------+-------------+-----------+--------+
| Coffee   | Flat White  | 10        | 4      |
| Coffee   | Espresso    | 25        | 5      |
| Coffee   | Instant     | 80        | 1      |
| Bakery   | Croissant   | 3         | 5      |
| Bakery   | Bagel       | 6         | 2      |
+----------+-------------+-----------+--------+
Output:
+----------+--------+------------+
| category | appeal | poor_share |
+----------+--------+------------+
| Bakery   | 1.00   | 50.00      |
| Coffee   | 0.20   | 33.33      |
+----------+--------+------------+
Explanation: Bakery's appeal is ((5 / 3) + (2 / 6)) / 2 = 1.00, and 1
of its 2 dishes is poorly rated, a poor share of (1 / 2) * 100 =
50.00. Coffee's appeal is ((4 / 10) + (5 / 25) + (1 / 80)) / 3 = 0.20,
and its lone poorly rated Instant gives (1 / 3) * 100 = 33.33.
```

### Example 2

```text
Input:
Dishes table:
+----------+------------+-----------+--------+
| category | dish       | placement | rating |
+----------+------------+-----------+--------+
| Pizza    | Margherita | 1         | 5      |
| Pizza    | Pepperoni  | 2         | 3      |
| Pizza    | Anchovy    | 300       | 2      |
| Salads   | Caesar     | 4         | 1      |
| Salads   | Greek      | 9         | 5      |
+----------+------------+-----------+--------+
Output:
+----------+--------+------------+
| category | appeal | poor_share |
+----------+--------+------------+
| Pizza    | 2.17   | 33.33      |
| Salads   | 0.40   | 50.00      |
+----------+--------+------------+
Explanation: Pizza's appeal is ((5 / 1) + (3 / 2) + (2 / 300)) / 3 =
2.17; the lowly rated Anchovy alone makes its poor share 33.33.
Salads' appeal is ((1 / 4) + (5 / 9)) / 2 = 0.40 with the Caesar the
only poorly rated dish, again 50.00.
```

Write your solution as a single `SELECT` query returning `category`,
`appeal`, and `poor_share`.
