# Missing Attendee IDs

## Description

A conference issues each attendee a badge number. The badges handed
out so far are recorded in one table.

Table: `Attendees`

| Column Name   | Type    |
| ------------- | ------- |
| attendee_id   | int     |
| attendee_name | varchar |

`attendee_id` is the column with unique values for this table. Each
row records the badge number and the name of one attendee.

Badge numbers start at 1, but some badges in the range were never
issued: a badge number is missing when it sits between 1 and the
largest `attendee_id` in the table without appearing as an
`attendee_id` itself. Note the range always begins at 1, no matter how
large the smallest issued `attendee_id` is.

Report every missing badge number.

The maximum `attendee_id` will not exceed 100.

Each testcase's `dataset` seeds the `Attendees` table with that
testcase's rows. Return the result table ordered by `ids` in ascending
order. The result format is in the following example.

### Example 1

```text
Input:
Attendees table:
+-------------+---------------+
| attendee_id | attendee_name |
+-------------+---------------+
| 2           | Rana          |
| 7           | Milos         |
| 9           | Thandi        |
+-------------+---------------+
Output:
+-----+
| ids |
+-----+
| 1   |
| 3   |
| 4   |
| 5   |
| 6   |
| 8   |
+-----+
Explanation:
The largest attendee_id in the table is 9, so the range [1,9] is
searched. Within it, badges 1, 3, 4, 5, 6, and 8 were never issued.
```

### Example 2

```text
Input:
Attendees table:
+-------------+---------------+
| attendee_id | attendee_name |
+-------------+---------------+
| 10          | Pavel         |
+-------------+---------------+
Output:
+-----+
| ids |
+-----+
| 1   |
| 2   |
| 3   |
| 4   |
| 5   |
| 6   |
| 7   |
| 8   |
| 9   |
+-----+
Explanation:
Only badge 10 was issued, and the range still starts at 1, so badges
1 through 9 are all missing.
```

Write your solution as a single `SELECT` query returning one column
`ids` — every integer in `[1, MAX(attendee_id)]` that does not appear
as an `attendee_id` in `Attendees`. Order the result by `ids`
ascending.
