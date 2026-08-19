# Top Percentile Alerts

## Description

Table: `Alerts`

| Column Name | Type    |
| ----------- | ------- |
| alert_id    | int     |
| region      | varchar |
| risk_score  | real    |

`alert_id` is unique. One row records one monitored alert: the region it
came from and the risk score the scanner assigned it.

The security desk only has senior analysts for the **top 5%** of each
region's alerts by risk score, so it pulls exactly those rows.

Produce the top 5 percentile of alerts from every region.

Return the rows ordered by `region` in **ascending** order, `risk_score`
in **descending** order, and `alert_id` in **ascending** order. The
ordering is judged — the query must emit the rows in precisely this
order.

Note: rank with `PERCENT_RANK() OVER (PARTITION BY region ORDER BY
risk_score DESC)` and keep the rows whose rank is strictly under `0.05`.

Each test case seeds the table with its own data; the case's `dataset`
value holds the `INSERT` statements to run first.

### Example 1

```text
Input: Alerts table from the dataset below.
Output:
alert_id | region  | risk_score
7        | Alberta | 0.99
13       | Maine   | 0.70
1        | Ontario | 0.91
5        | Quebec  | 0.88
Explanation: Alberta's six alerts and Ontario's four each keep only their
single riskiest row; Quebec's pair likewise keeps one; Maine has exactly
one alert, and a lone-row partition ranks at 0, so it is kept as well.
```

Answer with one `SELECT` query returning the columns `alert_id`,
`region`, and `risk_score`.

## Hints

### Hint 1

Percentile ranks are measured inside each region, so the window must
partition by region.

### Hint 2

Ordering each window by risk_score DESC seats each region's riskiest
alert at percentile 0.

### Hint 3

The closing ORDER BY on (region, risk_score DESC, alert_id) is part of the
graded output — leaving it off costs the case.
