# Stocking The Warehouse

## Description

Table: `Stock`

| Column Name | Type    |
| ----------- | ------- |
| stock_id    | int     |
| item_type   | varchar |
| category    | varchar |
| area        | decimal |

`stock_id` is the column of unique values for this table.
Each row describes one product the warehouse can carry: its id, its
type, its category, and the floor area one unit occupies.

A warehouse has 500,000 square feet to fill, and it fills them in two
passes. First it stocks as many `prime_eligible` items as possible;
whatever floor area is left over then goes to `not_prime` items. Items
of one type move together: loading one copy of every row of that type
counts as one combination, so `k` whole combinations of a type occupy
`k` times the type's combined area and stock `k` times its item count.

Write a solution to report how many `prime_eligible` and `not_prime`
items end up stocked in the 500,000 square feet, one row per type with
`prime_eligible` first and `not_prime` second.

Note:

- Item counts must be whole numbers — a partial combination cannot be
  stocked, so leftover area that fits less than one more combination of
  a type is wasted.
- If a type ends up with no room at all (or has no rows at all),
  report 0 for it.

Return the result table ordered by item count in descending order.

Every test case ships its own `dataset`: the statements inside it
populate `Stock` before your query executes. The result format is in
the following example.

### Example 1

```text
Input:
Stock table:
+----------+----------------+----------+--------+
| stock_id | item_type      | category | area   |
+----------+----------------+----------+--------+
| 4100     | prime_eligible | Audio    | 200.00 |
| 4101     | prime_eligible | Lighting | 137.50 |
| 4102     | not_prime      | Books    | 40.00  |
| 4103     | not_prime      | Decor    | 120.00 |
+----------+----------------+----------+--------+
Output:
item_type       item_count
prime_eligible  2962
not_prime       2
Explanation: the prime-eligible rows cover 337.50 square feet in
total, so the warehouse fits 1481 whole combinations of them — 2962
items occupying 499,837.50 square feet. That leaves 162.50 square
feet, and the not_prime rows cover 160.00 together, so exactly 1 more
combination — 2 items — fits afterward. Output is ordered by item
count in descending order.
```

Write your solution as a single `SELECT` query returning two columns —
`item_type` and `item_count` — with one row for each item type,
counting whole combinations only and reporting 0 for a type that ends
up with no room or no rows.
