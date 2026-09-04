# Annual Spending Trend

## Description

Table: `Purchases`

| Column Name   | Type |
| ------------- | ---- |
| purchase_id   | int  |
| customer_id   | int  |
| purchase_date | date |
| amount        | int  |

`purchase_id` is the primary key. Each row records one purchase: the buyer, the
date, and the amount spent.

For a customer, each calendar year has a spending total — the sum of that
year's purchase amounts, with a year that contains no purchase counted as `0`.
Consider the years from the customer's first purchase through the customer's
last purchase. Report the ids of customers whose yearly totals are strictly
increasing across that entire span.

Return the result table in any order.

Each test case supplies its own `dataset`: the DDL seeds the `Purchases` table
with that test case's rows. The result format is shown in the following
example.

### Example 1

```text
Input: the Purchases table from the dataset below.
Purchases rows:
purchase_id | customer_id | purchase_date | amount
1           | 7           | 2020-03-01    | 100
2           | 7           | 2020-10-05    | 150
3           | 7           | 2021-04-01    | 260
4           | 7           | 2022-01-01    | 270
5           | 9           | 2021-07-01    | 400
6           | 9           | 2022-07-01    | 350
Output:
customer_id
7
Explanation: Customer 7 totals 250 in 2020, 260 in 2021, and 270 in 2022 — strictly increasing, so 7 is reported. Customer 9 spends 400 in 2021 but only 350 in 2022, so 9 is not.
```

Answer with a single `SELECT` whose only output column is `customer_id`.

## Hints

### Hint 1

Reduce the purchases to one row per (customer, year) holding that year's sum,
and record each customer's first and last year.

### Hint 2

Generate every year between each customer's first and last year so gap years
count as `0`, then detect any adjacent-year pair that fails to increase; a
customer with no such pair is the answer.
