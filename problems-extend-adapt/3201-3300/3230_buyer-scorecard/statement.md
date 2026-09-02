# Buyer Scorecard

## Description

Table: `purchases`

| Column Name | Type    |
| ----------- | ------- |
| purchase_id | int     |
| buyer_id    | int     |
| item_id     | int     |
| bought_on   | date    |
| paid        | decimal |

`purchase_id` is the unique identifier for this table.
Each row records one purchase: who bought, which item, on what day, and
how much was paid.

Table: `catalog`

| Column Name | Type    |
| ----------- | ------- |
| item_id     | int     |
| category    | varchar |
| price       | decimal |

`item_id` is the unique identifier for this table.
Each row describes one item for sale: the category it belongs to and its
list price.

Write a query that builds a scorecard for every buyer. For each buyer,
report:

- `total_paid`: everything the buyer spent, rounded to 2 decimal
  places.
- `purchase_count`: how many purchases the buyer made.
- `distinct_categories`: how many different categories the buyer
  purchased from.
- `avg_order_value`: the average amount per purchase, rounded to 2
  decimal places.
- `top_category`: the category the buyer purchased from most often; if
  several categories tie on purchases, pick the one whose most recent
  purchase is the latest.
- `affinity_score`: `(purchase_count * 10) + (total paid / 100)`,
  rounded to 2 decimal places.

Return the result table ordered by `affinity_score` descending, then by
`buyer_id` ascending.

Each testcase's `dataset` seeds both tables: its script inserts the
testcase's `purchases` rows and then its `catalog` rows before your
query runs. Every `item_id` in `purchases` appears in `catalog`. The
result format is in the following examples.

### Example 1

```text
Input: purchases and catalog tables from the dataset below.
Output:
buyer_id  total_paid  purchase_count  distinct_categories  avg_order_value  top_category  affinity_score
5         35.75       4               3                    8.94             Vinyl         40.36
6         31.75       3               3                    10.58            Tape          30.32
Explanation: buyer 5 spent 12.00 + 4.50 + 7.25 + 12.00 = 35.75 across 4
purchases in the 3 categories Vinyl, Tape, and Shell, averaging
35.75 / 4 = 8.94 per purchase; Vinyl leads with 2 purchases, so it is
the top category; the score is (4 * 10) + (35.75 / 100) = 40.36. Buyer
6 bought once from each of Disc, Shell, and Tape — a three-way count tie
— so the most recent purchase decides, Tape on 2024-05-20; the totals
are 31.75 spent, 10.58 average, and (3 * 10) + (31.75 / 100) = 30.32.
```

### Example 2

```text
Input: purchases and catalog tables from the dataset below.
Output:
buyer_id  total_paid  purchase_count  distinct_categories  avg_order_value  top_category  affinity_score
9         15.0        3               2                    5.0              Cup           30.15
8         9.0         1               1                    9.0              Bowl          10.09
Explanation: buyer 9's three purchases total 15.00 across Cup and Bowl;
Cup's two purchases beat Bowl's one, and the score is (3 * 10) +
(15.00 / 100) = 30.15. Buyer 8 made a single Bowl purchase: 9.00 spent,
9.00 average, score (1 * 10) + (9.00 / 100) = 10.09.
```

Write your solution as a single `SELECT` query returning seven columns
— `buyer_id`, `total_paid`, `purchase_count`, `distinct_categories`,
`avg_order_value`, `top_category`, and `affinity_score` — one row per
buyer with at least one purchase.
