# Home Ward per Nurse

## Description

A hospital records every ward a nurse serves in one table, which also
marks where that nurse's home ward is.

Table: `Nurses`

| Column Name | Type    |
| ----------- | ------- |
| nurse_id    | int     |
| ward_id     | int     |
| home_flag   | varchar |

(`nurse_id`, `ward_id`) is the primary key (combination of columns with
unique values) for this table.

`nurse_id` is the id of a nurse and `ward_id` is the id of a ward that
nurse serves. `home_flag` is a category of type `('Y', 'N')`: `'Y'`
marks the row as that nurse's home ward, `'N'` means it is not.

A nurse may serve several wards at once and flags a home ward among
them with `'Y'`; the rows for their other wards read `'N'`. A nurse
serving a single ward leaves the flag at `'N'` — with no other ward to
contrast against, that lone ward is the home ward anyway.

Report every nurse with their home ward: every flagged ward belongs in
the result, and a nurse serving exactly one ward reports that ward even
though the flag reads `'N'`.

Each testcase's `dataset` seeds the `Nurses` table with that testcase's
rows. Return the result table in any order. The result format is in the
following examples.

### Example 1

```text
Input:
Nurses table:
+----------+---------+-----------+
| nurse_id | ward_id | home_flag |
+----------+---------+-----------+
| 5        | 10      | N         |
| 5        | 11      | Y         |
| 6        | 10      | N         |
| 7        | 12      | N         |
| 8        | 11      | N         |
| 8        | 12      | Y         |
| 8        | 13      | N         |
+----------+---------+-----------+
Output:
+----------+---------+
| nurse_id | ward_id |
+----------+---------+
| 5        | 11      |
| 6        | 10      |
| 7        | 12      |
| 8        | 12      |
+----------+---------+
Explanation:
Nurse 5 serves wards 10 and 11, and ward 11 is the flagged home ward.
Nurse 6 serves only ward 10, so that ward is the home ward. Nurse 7
serves only ward 12, so that ward is the home ward. Nurse 8 serves
wards 11, 12, and 13, and ward 12 is the flagged home ward.
```

### Example 2

```text
Input:
Nurses table:
+----------+---------+-----------+
| nurse_id | ward_id | home_flag |
+----------+---------+-----------+
| 9        | 20      | N         |
+----------+---------+-----------+
Output:
+----------+---------+
| nurse_id | ward_id |
+----------+---------+
| 9        | 20      |
+----------+---------+
Explanation:
Nurse 9's single assignment is the home ward even though the flag
reads 'N'.
```

Write your solution as a single `SELECT` query returning `nurse_id`
and `ward_id` — one row for each flagged assignment, plus one row for
every nurse whose entire service is a single unflagged ward.
