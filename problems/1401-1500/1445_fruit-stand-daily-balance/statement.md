# Fruit Stand Daily Balance

## Description

A corner fruit stand logs every day's sales in one table: for each of
the two fruits it stocks, how many crates went out.

Table: `Stall`

| Column Name | Type |
| ----------- | ---- |
| sold_on     | date |
| fruit       | enum |
| crates      | int  |

`(sold_on, fruit)` is the primary key of this table — the combination
of the two columns is unique. `fruit` is one of `('apples',
'oranges')`, and `crates` is how many crates of that fruit sold that
day.

For each day, report the stand's balance: crates of apples sold minus
crates of oranges sold.

Each testcase's `dataset` seeds the table: its script inserts the
testcase's `Stall` rows before your query runs. Return the result
table ordered by `sold_on`. The `balance` column may be negative on
days when oranges outsold apples. The result format is in the
following example.

### Example 1

```text
Input:
Stall
+------------+---------+--------+
| sold_on    | fruit   | crates |
+------------+---------+--------+
| 2021-07-05 | apples  | 9      |
| 2021-07-05 | oranges | 13     |
| 2021-07-06 | apples  | 21     |
| 2021-07-06 | oranges | 21     |
| 2021-07-07 | apples  | 0      |
| 2021-07-07 | oranges | 6      |
| 2021-07-08 | oranges | 4      |
| 2021-07-08 | apples  | 11     |
+------------+---------+--------+
Output:
+------------+---------+
| sold_on    | balance |
+------------+---------+
| 2021-07-05 | -4      |
| 2021-07-06 | 0       |
| 2021-07-07 | -6      |
| 2021-07-08 | 7       |
+------------+---------+
Explanation: On 2021-07-05 the stand sold 9 apple crates against 13
orange crates, a balance of 9 - 13 = -4. On 2021-07-06 the two fruits
tied at 21 crates each, so the balance is 0. On 2021-07-07 no apple
crates sold and 6 orange crates did, giving -6. On 2021-07-08, 11
apple crates against 4 orange crates gives 11 - 4 = 7.
```

Write your solution as a single `SELECT` query returning two columns —
`sold_on` and `balance` — one row per day, ordered by `sold_on`.

## Hints

### Hint 1

Each day contributes exactly two rows, one per fruit. Group the rows
by `sold_on` so every day becomes a single result row.

### Hint 2

Inside each group, add the apple crates and subtract the orange ones:
a conditional sum such as
`SUM(CASE WHEN fruit = 'apples' THEN crates ELSE -crates END)` builds
the balance in one expression. `ORDER BY sold_on` finishes the
contract.
