# Share Of The Network

## Description

Table: `Ties`

| Column Name | Type |
| ----------- | ---- |
| member_a    | int  |
| member_b    | int  |

(`member_a`, `member_b`) together form the primary key of this table. Each
row records one tie: the two members it connects. The pair is stored once,
and which of the two ends landed in `member_a` is arbitrary.

A member's reach share is the share of all members they are tied to. Count
the member's ties, divide by the number of distinct members in the whole
table, multiply by 100, and round to 2 decimal places.

Report one row per member with their `member` id and `reach_pct`. Every
member that appears in `Ties` — in either column — gets a row, and the
divisor includes all of them.

Return the result table ordered by `member` in ascending order.

Every test case ships its own `dataset`: the statements inside it populate
`Ties` before your query executes. The result format is in the following
examples.

### Example 1

```text
Input:
Ties table:
+-----------+-----------+
| member_a  | member_b  |
+-----------+-----------+
| 2         | 1         |
| 1         | 3         |
| 4         | 2         |
+-----------+-----------+
Output:
+--------+-----------+
| member | reach_pct |
+--------+-----------+
| 1      | 50.00     |
| 2      | 50.00     |
| 3      | 25.00     |
| 4      | 25.00     |
+--------+-----------+
Explanation:
- The table mentions four distinct members: 1, 2, 3 and 4, so every
  percentage divides by 4.
- Member 1 is tied to 2 and 3, and member 2 is tied to 1 and 4; both
  reach half the network, so 2/4 gives 50.00.
- Members 3 and 4 each appear in a single tie, so 1/4 gives 25.00.
```

### Example 2

```text
Input:
Ties table:
+-----------+-----------+
| member_a  | member_b  |
+-----------+-----------+
| 10        | 20        |
| 20        | 30        |
| 10        | 30        |
| 40        | 50        |
+-----------+-----------+
Output:
+--------+-----------+
| member | reach_pct |
+--------+-----------+
| 10     | 40.00     |
| 20     | 40.00     |
| 30     | 40.00     |
| 40     | 20.00     |
| 50     | 20.00     |
+--------+-----------+
Explanation:
- Five members appear overall — 10, 20, 30, 40 and 50 — even though the
  table splits into two groups that share nobody, so the divisor is 5 for
  everyone.
- Members 10, 20 and 30 form a triangle: each is tied to the other two,
  so 2/5 gives 40.00.
- Members 40 and 50 are tied only to each other, so 1/5 gives 20.00.
```

The member ids themselves never tie — the ordering by `member` ascending
is total, even where two rows share the same percentage. Write your
solution as a single `SELECT` query returning two columns — `member` and
`reach_pct`, in that order — with the percentage rounded to 2 decimal
places and the rows ordered by `member` ascending.
