# Team Payroll Standing

## Description

Table: `Paycheck`

| Column Name | Type |
| ----------- | ---- |
| id          | int  |
| worker_id   | int  |
| amount      | int  |
| pay_date    | date |

`id` is the primary key column for this table. Each row of this table
records one worker's pay for one month. `worker_id` is a foreign key
(reference column) from the `Worker` table.

Table: `Worker`

| Column Name | Type |
| ----------- | ---- |
| worker_id   | int  |
| team_id     | int  |

`worker_id` is the primary key column for this table. Each row of this
table records which team a worker belongs to.

Write a solution to find, for every month, how each team's average pay
compares to the whole company's average pay that same month —
`'higher'`, `'lower'`, or `'same'`.

Return the result table in any order.

Each testcase supplies its own `dataset`: the script seeds the
`Paycheck` and `Worker` tables with that testcase's rows before your
query runs. A `pay_date` is written `YYYY/MM/DD`, and the reported
`pay_month` is that month as `YYYY-MM`. The result format is in the
following example.

### Example 1

```text
Input: the Paycheck and Worker tables from the dataset below.
Paycheck rows:
id  worker_id  amount  pay_date
4   100        6000    2020/05/15
5   200        7000    2020/05/20
6   300        7000    2020/05/20
1   100        9500    2020/06/30
2   200        5000    2020/06/03
3   300        11000   2020/06/03
7   100        7000    2020/07/10
8   200        7000    2020/07/12
9   300        7000    2020/07/12
Worker rows:
worker_id  team_id
100        1
200        2
300        2
Output:
pay_month  team_id  comparison
2020-05    1        lower
2020-05    2        higher
2020-06    1        higher
2020-06    2        lower
2020-07    1        same
2020-07    2        same
Explanation: in May the company average is (6000+7000+7000)/3 = 6666.67.
Team 1's average is 6000, the pay of its only worker, so it reads lower.
Team 2's average is (7000+7000)/2 = 7000, so it reads higher. In June the
company average is (9500+5000+11000)/3 = 8500; team 1 at 9500 reads
higher and team 2 at (5000+11000)/2 = 8000 reads lower. In July every
worker is paid exactly 7000, so both teams and the company average 7000
and every row reads same.
```

Write your solution as a single `SELECT` query returning three columns —
`pay_month`, `team_id`, and `comparison` — with one row for every
(month, team) pair that has at least one paycheck row in that month.

## Hints

### Hint 1

Two averages at two grains, joined on the month. The team side joins
`Paycheck` to `Worker` on `worker_id` so each paycheck row carries a
`team_id`, then groups by month and team with `AVG(amount)` per group;
the company side is the same grouping over `Paycheck` alone, no join,
one average per month over every paycheck the month holds.

### Hint 2

The month key doubles as the output format: `SUBSTR(pay_date, 1, 7)`
takes `2020/06/30` down to `2020/06`, and `REPLACE(..., '/', '-')`
restyles that prefix as the reported `2020-06`. Group on the full
prefix — two pay dates on different days of one month must merge into
one group, while `2020/06` and `2020/07` stay separate months.

### Hint 3

Classify with a `CASE`: a team average strictly above the company
average reads `higher`, strictly below reads `lower`, and exact equality
reads `same` — the boundary is equality itself, and averages that
balance exactly compare equal without any rounding. A team with no
paycheck rows in a month has no group, hence no row; the judge compares
rows as an unordered multiset, so no `ORDER BY` is needed.
