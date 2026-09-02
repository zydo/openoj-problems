# Towns With Pricier Homes

## Description

Table: `Homes`

| Column Name  | Type    |
| ------------ | ------- |
| home_id      | int     |
| town         | varchar |
| asking_price | int     |

`home_id` is the unique key of this table. Each row is one home on the
market, recorded with the town it sits in and its asking price.

Report every town whose homes are priced above the market as a whole: a
town qualifies when the average asking price of its rows is strictly
greater than the average asking price over all rows in the table.

Return the column `town`, with each qualifying town listed once, ordered
by `town` in ascending order.

Every testcase carries its own `dataset`: the DDL loads the `Homes` table
with that testcase's rows. The example below shows the result format.

### Example 1

```text
Input:
Homes table:
+---------+----------+--------------+
| home_id | town     | asking_price |
+---------+----------+--------------+
| 41      | Riverton | 812000       |
| 17      | Riverton | 934000       |
| 88      | Milton   | 402000       |
| 63      | Milton   | 361000       |
| 25      | Oakdale  | 577000       |
| 52      | Oakdale  | 708000       |
| 77      | Fairview | 632000       |
+---------+----------+--------------+
Output:
+---------+
| town    |
+---------+
| Oakdale |
| Riverton|
+---------+
Explanation
The market-wide average asking price is 4426000 / 7 = 632285.71.
- Riverton's two homes average 873000, which clears the market average.
- Oakdale's two homes average 642500, which also clears it.
- Milton's two homes average 381500, well below the market average.
- Fairview's single home asks 632000, just under the market average of
632285.71, so it does not qualify.
Only Oakdale and Riverton are reported, ordered by town in ascending
order.
```

A town's average is taken over that town's own rows only, while the
market average spans every row in `Homes`; the comparison is strict, so a
town sitting exactly on the market average is left out. Because the
market average is a weighted average of the town averages, some town
always reaches or exceeds it, and every town exactly on it is excluded.
Write your solution as a single `SELECT` query returning the one column
`town`, each qualifying town once, in ascending order.
