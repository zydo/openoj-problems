# Valid Delegate Triplets

## Description

A company has three offices, and every employee works in exactly one
of them. To staff a joint committee it wants to send one delegate from
each office.

Table: `OfficeA`

| Column Name   | Type    |
| ------------- | ------- |
| delegate_id   | int     |
| delegate_name | varchar |

`delegate_id` is the column with unique values for this table. Each
row records the id and the name of one employee in office A. All
`delegate_name` values are distinct.

Table: `OfficeB`

| Column Name   | Type    |
| ------------- | ------- |
| delegate_id   | int     |
| delegate_name | varchar |

`delegate_id` is the column with unique values for this table. Each
row records the id and the name of one employee in office B. All
`delegate_name` values are distinct.

Table: `OfficeC`

| Column Name   | Type    |
| ------------- | ------- |
| delegate_id   | int     |
| delegate_name | varchar |

`delegate_id` is the column with unique values for this table. Each
row records the id and the name of one employee in office C. All
`delegate_name` values are distinct.

A triplet `(delegate_A, delegate_B, delegate_C)` is valid when:

- `delegate_A` works in `OfficeA`,
- `delegate_B` works in `OfficeB`,
- `delegate_C` works in `OfficeC`, and
- the three delegates' ids are pairwise distinct and their names are
  pairwise distinct — no shared id and no shared name anywhere in the
  triplet.

Each testcase's `dataset` seeds all three tables: its script inserts
the testcase's `OfficeA`, `OfficeB`, and `OfficeC` rows (whichever are
present) before your query runs. Report every valid triplet. Return
the result table in any order. The result format is in the following
example.

### Example 1

```text
Input:
OfficeA
+-------------+---------------+
| delegate_id | delegate_name |
+-------------+---------------+
| 1           | Ana           |
| 2           | Boris         |
+-------------+---------------+
OfficeB
+-------------+---------------+
| delegate_id | delegate_name |
+-------------+---------------+
| 5           | Cem           |
| 2           | Dara          |
+-------------+---------------+
OfficeC
+-------------+---------------+
| delegate_id | delegate_name |
+-------------+---------------+
| 7           | Ewa           |
| 2           | Femi          |
+-------------+---------------+
Output:
+------------+------------+------------+
| delegate_A | delegate_B | delegate_C |
+------------+------------+------------+
| Ana        | Cem        | Ewa        |
| Ana        | Cem        | Femi       |
| Ana        | Dara       | Ewa        |
| Boris      | Cem        | Ewa        |
+------------+------------+------------+
Explanation:
- (Ana, Cem, Ewa), (Ana, Cem, Femi), (Ana, Dara, Ewa), and
  (Boris, Cem, Ewa) are valid: their ids are pairwise distinct and so
  are their names.
- (Ana, Dara, Femi) is rejected: Dara and Femi share the id 2.
- (Boris, Cem, Femi) is rejected: Boris and Femi share the id 2.
- (Boris, Dara, Ewa) is rejected: Boris and Dara share the id 2.
- (Boris, Dara, Femi) is rejected: all three carry the id 2.
```

### Example 2

```text
Input:
OfficeA
+-------------+---------------+
| delegate_id | delegate_name |
+-------------+---------------+
| 1           | Lena          |
| 2           | Mark          |
+-------------+---------------+
OfficeB
+-------------+---------------+
| delegate_id | delegate_name |
+-------------+---------------+
| 3           | Lena          |
+-------------+---------------+
OfficeC
+-------------+---------------+
| delegate_id | delegate_name |
+-------------+---------------+
| 4           | Nia           |
| 5           | Mark          |
+-------------+---------------+
Output:
+------------+------------+------------+
| delegate_A | delegate_B | delegate_C |
+------------+------------+------------+
| Mark       | Lena       | Nia        |
+------------+------------+------------+
Explanation:
- (Mark, Lena, Nia) is the only valid triplet.
- (Lena, Lena, Nia) and (Lena, Lena, Mark) are rejected: office A's
  Lena and office B's Lena share a name.
- (Mark, Lena, Mark) is rejected: office A's Mark and office C's Mark
  share a name.
```

Write your solution as a single `SELECT` query returning
`delegate_A`, `delegate_B`, and `delegate_C` for every triplet of one
`OfficeA` employee, one `OfficeB` employee, and one `OfficeC` employee
whose ids and names are all pairwise distinct. Return the result table
in any order.
