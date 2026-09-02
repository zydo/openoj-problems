# Markdowns By Section

## Description

Table: `CatalogItems`

| Column Name | Type    |
| ----------- | ------- |
| item_id     | int     |
| section     | varchar |
| list_price  | decimal |

`item_id` is the unique key for this table. Each row is one item in the
catalog: its id, the section of the store it sits in, and its list
price.

Table: `Markdowns`

| Column Name | Type    |
| ----------- | ------- |
| section     | varchar |
| percent_off | int     |

`section` is the primary key for this table. Each row is one store
section and the percentage taken off every item there (0 to 100).

Write a solution that reports the checkout price of every item after
its section's markdown is applied. An item whose section has no row in
`Markdowns` sells at its list price unchanged.

Return the result table ordered by `item_id` in ascending order.

Each testcase supplies its own `dataset`: the script seeds the
`CatalogItems` table and, when present, its `Markdowns` rows before
your query runs. The result format is in the following example.

### Example 1

```text
Input:
CatalogItems table:
+---------+---------+------------+
| item_id | section | list_price |
+---------+---------+------------+
| 10      | Audio   | 300        |
| 11      | Audio   | 79         |
| 12      | Bedding | 140        |
| 13      | Audio   | 45         |
| 14      | Outdoor | 260        |
+---------+---------+------------+
Markdowns table:
+---------+-------------+
| section | percent_off |
+---------+-------------+
| Audio   | 25          |
| Outdoor | 0           |
+---------+-------------+
Output:
+---------+-------------+---------+
| item_id | final_price | section |
+---------+-------------+---------+
| 10      | 225         | Audio   |
| 11      | 59.25       | Audio   |
| 12      | 140         | Bedding |
| 13      | 33.75       | Audio   |
| 14      | 260         | Outdoor |
+---------+-------------+---------+
Explanation: Items 10, 11, and 13 sit in Audio, which takes 25% off:
300 drops to 225, 79 to 59.25, and 45 to 33.75. Item 12's Bedding
section has no markdown row, so its price stays 140. Item 14's Outdoor
section carries an explicit 0% markdown, which also leaves the price
untouched at 260.
```

Result table is ordered by `item_id` in ascending order.

Write your solution as a single `SELECT` query returning three columns
— `item_id`, `final_price`, and `section` — one row per item, ordered
by `item_id` in ascending order.

## Hints

### Hint 1

An item whose section has no row in `Markdowns` must still show up with
its list price, so begin from `CatalogItems` and `LEFT JOIN` the
markdowns in — an inner join would silently discard exactly those rows.

### Hint 2

Treat an absent markdown as 0 (via `COALESCE` or an equivalent) and
compute the checkout price as `list_price * (100 - percent_off) / 100`,
rounded to two decimals.
