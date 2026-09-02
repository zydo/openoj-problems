# Client Revenue per Agent

## Description

Table: `Agent`

| Column Name | Type    |
| ----------- | ------- |
| agent_id    | int     |
| name        | varchar |

`agent_id` contains unique values. Each row introduces one agent of the
firm.

Table: `Client`

| Column Name | Type |
| ----------- | ---- |
| client_id   | int  |
| agent_id    | int  |

`client_id` contains unique values. `agent_id` is a foreign key
(reference column) to the `Agent` table. Each row pairs a client with
the agent who manages them.

Table: `Purchases`

| Column Name | Type |
| ----------- | ---- |
| purchase_id | int  |
| client_id   | int  |
| price       | int  |

`purchase_id` contains unique values. `client_id` is a foreign key
(reference column) to the `Client` table. Each row records one purchase
made by a client and the price paid.

For every agent in the `Agent` table, report the total money their
clients spent — the sum of the prices of all purchases made by all of
that agent's clients. An agent with no clients, or whose clients never
bought anything, reports a total of `0`.

Return the result table in any order.

Each testcase supplies its own `dataset`: the DDL seeds the `Agent`,
`Client`, and `Purchases` tables with that testcase's rows. Every client
references an agent present in `Agent`, and every purchase references a
client present in `Client`, so no join can drop a row from its own
table; the reverse is not required — agents may have no clients, and
clients may have made no purchases. Write your solution as a single
`SELECT` query returning three columns — `agent_id`, `name`, and
`total`, where `total` is the sum of that agent's clients' purchase
prices (`0` for an agent with no revenue). The result format is shown in
the following examples.

### Example 1

```text
Input:
Agent table:
+----------+------+
| agent_id | name |
+----------+------+
| 1        | Maya |
| 2        | Liam |
| 3        | Noor |
| 4        | Elio |
+----------+------+
Client table:
+-----------+----------+
| client_id | agent_id |
+-----------+----------+
| 11        | 1        |
| 12        | 1        |
| 13        | 2        |
| 14        | 2        |
+-----------+----------+
Purchases table:
+-------------+-----------+-------+
| purchase_id | client_id | price |
+-------------+-----------+-------+
| 101         | 11        | 200   |
| 102         | 12        | 350   |
| 103         | 13        | 90    |
| 104         | 11        | 60    |
+-------------+-----------+-------+
Output:
+----------+------+-------+
| agent_id | name | total |
+----------+------+-------+
| 1        | Maya | 610   |
| 2        | Liam | 90    |
| 3        | Noor | 0     |
| 4        | Elio | 0     |
+----------+------+-------+
Explanation: Maya manages clients 11 and 12.
  - Client 11 bought twice: 200 and 60.
  - Client 12 bought once: 350.
Maya's total is 200 + 60 + 350 = 610.

Liam manages clients 13 and 14, but client 14 never bought anything, so
only client 13's 90 counts. Liam's total is 90.

Noor and Elio manage no clients at all, so both report 0.
```

### Example 2

```text
Input:
Agent table:
+----------+------+
| agent_id | name |
+----------+------+
| 5        | Ada  |
| 6        | Ben  |
+----------+------+
Client table:
+-----------+----------+
| client_id | agent_id |
+-----------+----------+
| 21        | 5        |
+-----------+----------+
Purchases table:
+-------------+-----------+-------+
| purchase_id | client_id | price |
+-------------+-----------+-------+
| 201         | 21        | 75    |
+-------------+-----------+-------+
Output:
+----------+------+-------+
| agent_id | name | total |
+----------+------+-------+
| 5        | Ada  | 75    |
| 6        | Ben  | 0     |
+----------+------+-------+
Explanation: Ada's single client bought once for 75. Ben has no
clients, so his total is 0.
```
