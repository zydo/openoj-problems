# Staff Buried In Meetings

## Description

Table: `staff`

| Column Name | Type    |
| ----------- | ------- |
| staff_id    | int     |
| staff_name  | varchar |
| division    | varchar |

`staff_id` is the unique identifier for this table. Each row describes
one staff member and the division they sit in.

Table: `sessions`

| Column Name  | Type    |
| ------------ | ------- |
| session_id   | int     |
| staff_id     | int     |
| session_date | date    |
| session_kind | varchar |
| length_hours | decimal |

`session_id` is the unique identifier for this table. Each row records
one booked session for a staff member. `session_kind` can be `'Team'`,
`'Client'`, or `'Training'`.

A week is called overloaded for a staff member when the sessions booked
that week soak up more than half of a standard 40-hour working week.

- Weeks run Monday to Sunday
- Total each staff member's `length_hours` per week; a week is
  overloaded when that total exceeds 20 hours
- Count each staff member's overloaded weeks
- Report only staff with at least 2 overloaded weeks

Return the result table ordered by the number of overloaded weeks in
descending order, then by staff name in ascending order.

Each testcase supplies its own `dataset`: the script seeds the `staff`
and `sessions` tables before your query runs. The result format is in
the following example.

### Example 1

```text
Input:
staff table:
+----------+--------------+------------+
| staff_id | staff_name   | division   |
+----------+--------------+------------+
| 5        | Ana Petrov   | Support    |
| 6        | Bilal Rahman | Finance    |
| 7        | Cato Lund    | Design     |
| 8        | Dora Vella   | Legal      |
+----------+--------------+------------+
sessions table:
+------------+----------+--------------+--------------+--------------+
| session_id | staff_id | session_date | session_kind | length_hours |
+------------+----------+--------------+--------------+--------------+
| 201        | 5        | 2024-03-04   | Team         | 9.0          |
| 202        | 5        | 2024-03-06   | Client       | 7.5          |
| 203        | 5        | 2024-03-07   | Training     | 5.0          |
| 204        | 5        | 2024-03-10   | Team         | 2.0          |
| 205        | 5        | 2024-03-12   | Client       | 11.0         |
| 206        | 5        | 2024-03-14   | Team         | 9.5          |
| 207        | 6        | 2024-03-05   | Team         | 12.0         |
| 208        | 6        | 2024-03-13   | Client       | 10.0         |
| 209        | 6        | 2024-03-15   | Team         | 14.0         |
| 210        | 6        | 2024-03-18   | Training     | 8.0          |
| 211        | 7        | 2024-03-04   | Client       | 10.5         |
| 212        | 7        | 2024-03-08   | Team         | 10.0         |
| 213        | 7        | 2024-03-25   | Training     | 21.0         |
| 214        | 8        | 2024-03-06   | Training     | 3.0          |
+------------+----------+--------------+--------------+--------------+
Output:
+----------+--------------+------------+------------------+
| staff_id | staff_name   | division   | overloaded_weeks |
+----------+--------------+------------+------------------+
| 5        | Ana Petrov   | Support    | 2                |
| 7        | Cato Lund    | Design     | 2                |
+----------+--------------+------------+------------------+
Explanation: Ana Petrov (staff_id = 5):
Week of Mar 4-10 (2024-03-04 to 2024-03-10): 9.0 + 7.5 + 5.0 + 2.0 =
23.5 hours (> 20 hours), including the 2.0-hour session on Sunday
Mar 10, which still belongs to that Mon-Sun week.
Week of Mar 11-17: 11.0 + 9.5 = 20.5 hours (> 20 hours).
Overloaded for 2 weeks.

Cato Lund (staff_id = 7):
Week of Mar 4-10: 10.5 + 10.0 = 20.5 hours (> 20 hours).
Week of Mar 25-31: 21.0 hours (> 20 hours).
Overloaded for 2 weeks.

Staff not included:
Bilal Rahman (staff_id = 6): weeks total 12.0, 24.0, and 8.0 hours, so
only one week crosses 20 — short of the 2-week bar.
Dora Vella (staff_id = 8): a single 3.0-hour session, no overloaded
weeks.

The output table is ordered by overloaded_weeks in descending order,
then by staff_name in ascending order.
```

Write your solution as a single `SELECT` query returning `staff_id`,
`staff_name`, `division`, and `overloaded_weeks` in that order — one row
per staff member with at least two overloaded weeks, ordered by
`overloaded_weeks` in descending order, then by `staff_name` in
ascending order.
