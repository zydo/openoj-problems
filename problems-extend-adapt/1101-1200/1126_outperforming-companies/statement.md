# Outperforming Companies

## Description

A review aggregator keeps a set of counters for every company on its
platform. `Metrics` holds one row per company and counter: the
company, which metric it counts, and how often the metric was
recorded.

Table: `Metrics`

| Column Name | Type    |
| ----------- | ------- |
| company_id  | int     |
| metric      | varchar |
| tally       | int     |

`(company_id, metric)` is the primary key (combination of columns with
unique values) of this table.
Each row records that a given metric was tallied `tally` times for a
given company.

The baseline of a metric is the average `tally` of that metric across
every company that has it.

A company is **outperforming** when more than one of its metrics has a
`tally` strictly greater than that metric's baseline.

Find every outperforming company. Return the result rows in any order.

The result format is shown in the following examples.

### Example 1

```text
Input:
Metrics table:
+------------+------------+-------+
| company_id | metric     | tally |
+------------+------------+-------+
| 1          | reviews    | 9     |
| 2          | reviews    | 4     |
| 3          | reviews    | 5     |
| 1          | ads        | 14    |
| 2          | ads        | 6     |
| 3          | ads        | 7     |
| 1          | page views | 2     |
| 2          | page views | 15    |
+------------+------------+-------+
Output:
+------------+
| company_id |
+------------+
| 1          |
+------------+
Explanation:
The baselines are: 'reviews' (9+4+5)/3 = 6, 'ads' (14+6+7)/3 = 9, and
'page views' (2+15)/2 = 8.5. Company 1 beats its reviews baseline (9 >
6) and its ads baseline (14 > 9) — two metrics — so it is
outperforming. Company 2 tops only 'page views' and company 3 tops
nothing.
```

### Example 2

```text
Input:
Metrics table:
+------------+------------+-------+
| company_id | metric     | tally |
+------------+------------+-------+
| 1          | reviews    | 12    |
| 2          | reviews    | 6     |
| 3          | reviews    | 9     |
| 1          | ads        | 5     |
| 2          | ads        | 11    |
| 3          | ads        | 8     |
+------------+------------+-------+
Output:
+------------+
| company_id |
+------------+
+------------+
Explanation:
The baselines are 'reviews' (12+6+9)/3 = 9 and 'ads' (5+11+8)/3 = 8.
Company 3 sits exactly on both baselines, and exactly-on is not
strictly greater. Company 1 leads only 'reviews' and company 2 only
'ads', so no company clears two metrics and the result is empty.
```

Write your solution as a single `SELECT` query returning `company_id`.
