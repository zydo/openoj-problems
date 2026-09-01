# Take-Home Pay

## Description

A firm's tax band is set by its own best-paid worker, and every worker
at that firm withholds at the same rate.

Table: `Wages`

| Column Name | Type    |
| ----------- | ------- |
| firm_id     | int     |
| worker_id   | int     |
| worker_name | varchar |
| pay         | int     |

`(firm_id, worker_id)` is the primary key of this table: each row holds
one worker's firm, their id and name, and their pay.

Compute every worker's take-home pay: the pay left after the firm's tax
rate is withheld, rounded to the nearest integer with halves rounding
up. The rate is fixed per firm from its maximum pay:

- `0%` when the firm's maximum pay is below `1000`;
- `24%` when the firm's maximum pay falls in `[1000, 10000]` inclusive;
- `49%` when the firm's maximum pay is above `10000`.

Each testcase's `dataset` seeds the table: its script inserts the
testcase's `Wages` rows before your query runs. Return the result table
in any order. The result format is in the following example.

### Example 1

```text
Input:
Wages
+---------+-----------+-------------+-------+
| firm_id | worker_id | worker_name | pay   |
+---------+-----------+-------------+-------+
| 4       | 1         | Ivy         | 450   |
| 4       | 6         | Jonas       | 940   |
| 6       | 2         | Rhea        | 2750  |
| 6       | 8         | Marco       | 6480  |
| 9       | 3         | Zelda       | 15300 |
| 9       | 12        | Noor        | 1250  |
| 9       | 7         | Petra       | 820   |
+---------+-----------+-------------+-------+
Output:
+---------+-----------+-------------+-------+
| firm_id | worker_id | worker_name | pay   |
+---------+-----------+-------------+-------+
| 4       | 1         | Ivy         | 450   |
| 4       | 6         | Jonas       | 940   |
| 6       | 2         | Rhea        | 2090  |
| 6       | 8         | Marco       | 4925  |
| 9       | 3         | Zelda       | 7803  |
| 9       | 12        | Noor        | 638   |
| 9       | 7         | Petra       | 418   |
+---------+-----------+-------------+-------+
Explanation: Firm 4's top pay is 940, below 1000, so its workers keep
everything. Firm 6's top pay is 6480, in the middle band, so Rhea keeps
2750 * 0.76 = 2090 and Marco keeps 6480 * 0.76 = 4924.8, rounded up to
4925. Firm 9's top pay is 15300, above 10000, so its rate is 49%:
Zelda keeps 15300 * 0.51 = 7803, Noor keeps 1250 * 0.51 = 637.5, which
the half-up rule lifts to 638, and Petra keeps 820 * 0.51 = 418.2,
rounded to 418.
```

Write your solution as a single `SELECT` query returning four columns —
`firm_id`, `worker_id`, `worker_name` and `pay` — one row per worker.

## Hints

### Hint 1

The rate hinges on the firm's own maximum, not the individual row: a
grouped subquery over `Wages` gives `(firm_id, MAX(pay))`.

### Hint 2

Join that per-firm maximum back to the workers, map it to `0`, `0.24`
or `0.49` with a `CASE`, and round `pay * (1 - rate)` — `ROUND` rounds
halves away from zero, matching the statement's half-up rule.
