# Realized Gains per Asset

## Description

Table: `Deals`

| Column Name | Type    |
| ----------- | ------- |
| asset       | varchar |
| side        | enum    |
| dealt_on    | int     |
| price       | int     |

`(asset, dealt_on)` is the primary key (combination of columns with unique
values) for this table.
The `side` column is an ENUM (category) of type `('Sell', 'Buy')`.
Each row says that the asset named `asset` changed hands on day number
`dealt_on` at the given `price`.
It is guaranteed that every `'Sell'` deal for an asset is preceded by a
`'Buy'` deal for that same asset, and that every `'Buy'` deal is followed
by a `'Sell'` deal later on.

Write a query that reports the realized gain or loss for each asset — the
net result of buying and selling it once or many times.

Return the result table in any order.

### Example 1

```text
Input:
Deals table:
+----------+------+----------+-------+
| asset    | side | dealt_on | price |
+----------+------+----------+-------+
| Kelp     | Buy  | 1        | 400   |
| Moss     | Buy  | 3        | 25    |
| Kelp     | Sell | 6        | 520   |
| Fern     | Buy  | 8        | 1500  |
| Moss     | Sell | 9        | 30    |
| Moss     | Buy  | 11       | 28    |
| Moss     | Sell | 15       | 24    |
| Fern     | Sell | 20       | 900   |
+----------+------+----------+-------+
Output:
+----------+---------------+
| asset    | net_gain_loss |
+----------+---------------+
| Fern     | -600          |
| Kelp     | 120           |
| Moss     | 1             |
+----------+---------------+
Explanation: Kelp was bought on day 1 for 400 and sold on day 6 for 520,
a gain of 120. Fern was bought on day 8 for 1500 and sold on day 20 for
900, a loss of 600. Moss was bought at 25 and sold at 30, then bought at
28 and sold at 24, for a net of (30 - 25) + (24 - 28) = 1.
```
