# The Newest Payroll Record

## Description

Table: `Payroll`

| Column Name | Type    |
| ----------- | ------- |
| worker_id   | int     |
| given_name  | varchar |
| surname     | varchar |
| yearly_pay  | varchar |
| unit_id     | varchar |

`(worker_id, yearly_pay)` is the primary key (combination of columns with
unique values) for this table. Every row is one payroll entry for a worker,
and a worker generally appears once per recorded year.

The pay figure is stored as text, and the amounts only ever grow from one
entry to the next — so a worker's newest entry is the one carrying the
greatest pay once the text is read as a number.

Report every worker's newest payroll entry: their `worker_id`, `given_name`,
`surname`, `yearly_pay`, and `unit_id`.

Return the result table ordered by `worker_id` in ascending order.

Every test case ships its own `dataset`: the statements inside it populate
`Payroll` before your query executes. The result format is in the following
examples.

### Example 1

```text
Input:
Payroll table:
+-----------+------------+---------+------------+---------+
| worker_id | given_name | surname | yearly_pay | unit_id |
+-----------+------------+---------+------------+---------+
| 7         | Mara       | Voss    | 52000      | U14     |
| 7         | Mara       | Voss    | 48000      | U14     |
| 8         | Theo       | Brandt  | 61500      | U11     |
| 8         | Theo       | Brandt  | 58000      | U11     |
| 9         | Ines       | Calder  | 39000      | U12     |
+-----------+------------+---------+------------+---------+
Output:
+-----------+------------+---------+------------+---------+
| worker_id | given_name | surname | yearly_pay | unit_id |
+-----------+------------+---------+------------+---------+
| 7         | Mara       | Voss    | 52000      | U14     |
| 8         | Theo       | Brandt  | 61500      | U11     |
| 9         | Ines       | Calder  | 39000      | U12     |
+-----------+------------+---------+------------+---------+
Explanation:
Worker 7 has entries worth 52000 and 48000; 52000 is the larger, so that is
their newest entry.
Worker 8 has entries worth 61500 and 58000; 61500 wins.
Worker 9 appears once, so their only entry is already the newest.
```

### Example 2

```text
Input:
Payroll table:
+-----------+------------+---------+------------+---------+
| worker_id | given_name | surname | yearly_pay | unit_id |
+-----------+------------+---------+------------+---------+
| 3         | Petra      | Lang    | 9500       | U20     |
| 4         | Omar       | Ndiaye  | 10000      | U20     |
| 4         | Omar       | Ndiaye  | 9975       | U20     |
| 5         | Lena       | Petrov  | 88200      | U17     |
| 5         | Lena       | Petrov  | 90100      | U17     |
+-----------+------------+---------+------------+---------+
Output:
+-----------+------------+---------+------------+---------+
| worker_id | given_name | surname | yearly_pay | unit_id |
+-----------+------------+---------+------------+---------+
| 3         | Petra      | Lang    | 9500       | U20     |
| 4         | Omar       | Ndiaye  | 10000      | U20     |
| 5         | Lena       | Petrov  | 90100      | U17     |
+-----------+------------+---------+------------+---------+
Explanation:
Worker 4 shows the text-vs-number trap: as plain text, '9975' sorts after
'10000', but numerically 10000 is the larger and is the newest entry.
Worker 5's newest entry is worth 90100 rather than 88200.
Worker 3 has a single entry, which is reported as is.
```
