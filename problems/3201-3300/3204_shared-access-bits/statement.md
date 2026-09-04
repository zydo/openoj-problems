# Shared Access Bits

## Description

Table: `staff_grants`

| Column Name | Type |
| ----------- | ---- |
| staff_id    | int  |
| mask        | int  |

`staff_id` is the primary key.
Each row stands for one staff member, and the member's access rights are
packed into the integer `mask`: bit `k` of `mask` is set exactly when
that member holds access right `k`.

Write a query that folds the whole team's masks into two integers:

- `all_bits`: the rights every member holds — all `mask` values
  combined with a bitwise AND.
- `any_bits`: the rights at least one member holds — all `mask` values
  combined with a bitwise OR.

Return the result table in any order.

Every testcase ships its own `dataset`: the DDL fills the `staff_grants`
table with that testcase's rows before your query runs. Each dataset
holds at least one staff member, and every `mask` lies between `0` and
`10^9`, so both folds come out as plain non-negative integers. The
answer is a single row — `all_bits` first, then `any_bits`. The format
is shown in the examples below.

### Example 1

```text
Input:
staff_grants table:
+----------+------+
| staff_id | mask |
+----------+------+
| 11       | 12   |
| 7        | 14   |
| 3        | 10   |
+----------+------+
Output:
+----------+----------+
| all_bits | any_bits |
+----------+----------+
| 8        | 14       |
+----------+----------+
Explanation:
    all_bits: the bits common to every mask.
        12 (1100), 14 (1110), 10 (1010)
        12 & 14 & 10 = 8 (binary 1000) — only bit 3 is universal.
    any_bits: the bits any mask carries.
        12 | 14 | 10 = 14 (binary 1110) — bits 1, 2 and 3 each
        appear on someone.
```

### Example 2

```text
Input:
staff_grants table:
+----------+------+
| staff_id | mask |
+----------+------+
| 5        | 21   |
| 9        | 30   |
+----------+------+
Output:
+----------+----------+
| all_bits | any_bits |
+----------+----------+
| 20       | 31       |
+----------+----------+
Explanation:
    21 (10101) and 30 (11110) share bits 2 and 4, so
    21 & 30 = 20 (binary 10100); between them the two masks cover all
    five low bits, so 21 | 30 = 31 (binary 11111).
```

Submit your work as a single `SELECT` query that returns exactly one
row with the two columns — `all_bits`, the bitwise AND across every
`mask`, and `any_bits`, the bitwise OR across them all. The result
table holds that one row in any order.
