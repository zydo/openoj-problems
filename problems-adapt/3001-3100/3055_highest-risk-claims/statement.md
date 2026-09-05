# Highest-Risk Claims

## Description

Table: `Claims`

| Column Name | Type    |
| ----------- | ------- |
| claim_id    | int     |
| region      | varchar |
| risk_score  | real    |

`claim_id` holds unique values in this table. Each row is one filed
claim: its id, the region where it was filed, and the risk score a
fraud model assigned to it.

An insurer routes its most experienced adjusters to the riskiest work:
within every region the claims are percentile-ranked by risk score, and
the top 5 percent of each region is escalated for review.

Find the claims that fall in the top 5 percentile of their region.

Note: rank each claim with `PERCENT_RANK() OVER (PARTITION BY region
ORDER BY risk_score DESC)` and keep the rows whose rank is strictly
below `0.05`. Claims tied on `risk_score` receive one shared rank and
are kept or dropped together, and a region holding a single claim ranks
that claim at `0`.

Return the result table ordered by `region` in **ascending** order,
`risk_score` in **descending** order, and `claim_id` in **ascending**
order.

Every testcase brings its own `dataset`: the DDL loads the `Claims`
table with that testcase's rows before your query runs. The result
format is shown in the examples below.

### Example 1

```text
Input:
Claims table:
+----------+---------+------------+
| claim_id | region  | risk_score |
+----------+---------+------------+
| 101      | Ontario | 0.71       |
| 102      | Ontario | 0.66       |
| 103      | Ontario | 0.59       |
| 104      | Ontario | 0.44       |
| 105      | Ontario | 0.31       |
| 201      | Kenya   | 0.83       |
| 202      | Kenya   | 0.79       |
| 203      | Kenya   | 0.62       |
| 301      | Bavaria | 0.9        |
+----------+---------+------------+
Output:
+----------+---------+------------+
| claim_id | region  | risk_score |
+----------+---------+------------+
| 301      | Bavaria | 0.9        |
| 201      | Kenya   | 0.83       |
| 101      | Ontario | 0.71       |
+----------+---------+------------+
Explanation:
- Bavaria holds a single claim, so that claim ranks at 0 and is kept.
- In Ontario the 0.71 claim sits at rank 0 while the next one already
sits at 0.25, past the 5% line; in Kenya the 0.83 claim ranks at 0 and
the next at 0.5. One claim per region survives.
Output table is ordered by region in ascending order, risk score in
descending order, and claim ID in ascending order.
```

### Example 2

```text
Input:
Claims table:
+----------+---------+------------+
| claim_id | region  | risk_score |
+----------+---------+------------+
| 11       | Aurora  | 0.95       |
| 12       | Aurora  | 0.95       |
| 13       | Aurora  | 0.9        |
| 14       | Aurora  | 0.87       |
| 15       | Aurora  | 0.85       |
| 16       | Aurora  | 0.83       |
| 17       | Aurora  | 0.81       |
| 18       | Aurora  | 0.79       |
| 19       | Aurora  | 0.77       |
| 20       | Aurora  | 0.75       |
| 21       | Aurora  | 0.73       |
| 31       | Summit  | 0.66       |
| 32       | Summit  | 0.66       |
| 33       | Summit  | 0.66       |
| 34       | Summit  | 0.6        |
| 35       | Summit  | 0.58       |
| 36       | Summit  | 0.56       |
| 37       | Summit  | 0.54       |
| 38       | Summit  | 0.52       |
| 39       | Summit  | 0.5        |
| 40       | Summit  | 0.48       |
| 41       | Summit  | 0.46       |
| 42       | Summit  | 0.44       |
+----------+---------+------------+
Output:
+----------+---------+------------+
| claim_id | region  | risk_score |
+----------+---------+------------+
| 11       | Aurora  | 0.95       |
| 12       | Aurora  | 0.95       |
| 31       | Summit  | 0.66       |
| 32       | Summit  | 0.66       |
| 33       | Summit  | 0.66       |
+----------+---------+------------+
Explanation:
- Aurora's two 0.95 claims tie for the front rank, share the rank 0,
and survive together; the next row down already sits at rank 3 of 11,
a percent rank of 0.2.
- Summit's three 0.66 claims occupy ranks 1 through 3, all at percent
rank 0; its fourth row lands at 3/11, roughly 0.27, far past the cut.
```

Write your solution as a single `SELECT` query returning the columns
`claim_id`, `region`, and `risk_score`.
