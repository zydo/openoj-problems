# Swabbed Then Cleared

## Description

Table: `residents`

| Column Name   | Type    |
| ------------- | ------- |
| resident_id   | int     |
| resident_name | varchar |
| age           | int     |

`resident_id` is the unique key for this table. Each row describes one
resident enrolled in the town's screening program.

Table: `swab_tests`

| Column Name | Type    |
| ----------- | ------- |
| swab_id     | int     |
| resident_id | int     |
| swab_date   | date    |
| finding     | varchar |

`swab_id` is the unique key for this table. Each row is one swab result.
The finding can be Positive, Negative, or Inconclusive.

Write a solution to find residents who have cleared the infection —
residents who once swabbed Positive and later swabbed Negative.

- A resident has cleared the infection if they have at least one Positive
  swab followed by at least one Negative swab on a later date.
- The days to clear is the number of days between the first Positive swab
  and the first Negative swab taken after that Positive swab.
- Include only residents who have both a Positive and a qualifying
  Negative swab.

Return the result table ordered by `days_to_clear` in ascending order,
then by `resident_name` in ascending order.

Every testcase supplies its own `dataset`: the DDL seeds both tables with
that testcase's rows. The result format is in the following example.

### Example 1

```text
Input:

residents table:

+-------------+---------------+-----+
| resident_id | resident_name | age |
+-------------+---------------+-----+
| 31          | Alba Reyes    | 34  |
| 32          | Tomas Rivera  | 46  |
| 33          | Nina Kovac    | 51  |
| 34          | Owen Pratt    | 27  |
| 35          | Leah Fontaine | 39  |
+-------------+---------------+-----+

swab_tests table:

+--------+-------------+------------+--------------+
| swab_id| resident_id | swab_date  | finding      |
+--------+-------------+------------+--------------+
| 401    | 31          | 2024-03-04 | Positive     |
| 402    | 31          | 2024-03-14 | Negative     |
| 403    | 32          | 2024-02-01 | Negative     |
| 404    | 32          | 2024-02-20 | Positive     |
| 405    | 32          | 2024-03-01 | Negative     |
| 406    | 33          | 2024-04-02 | Positive     |
| 407    | 33          | 2024-04-05 | Positive     |
| 408    | 33          | 2024-04-10 | Negative     |
| 409    | 34          | 2024-05-06 | Positive     |
| 410    | 34          | 2024-05-09 | Inconclusive |
| 411    | 34          | 2024-05-11 | Positive     |
| 412    | 35          | 2024-01-08 | Negative     |
| 413    | 35          | 2024-01-22 | Negative     |
+--------+-------------+------------+--------------+

Output:

+-------------+---------------+-----+---------------+
| resident_id | resident_name | age | days_to_clear |
+-------------+---------------+-----+---------------+
| 33          | Nina Kovac    | 51  | 8             |
| 31          | Alba Reyes    | 34  | 10            |
| 32          | Tomas Rivera  | 46  | 10            |
+-------------+---------------+-----+---------------+

Explanation:

    Nina Kovac (resident_id = 33):

        First Positive swab: 2024-04-02 (the second Positive on
        2024-04-05 does not move the anchor).
        First Negative after it: 2024-04-10.
        Days to clear: 10 - 2 = 8.

    Alba Reyes (resident_id = 31):

        First Positive swab: 2024-03-04.
        First Negative after it: 2024-03-14.
        Days to clear: 14 - 4 = 10.

    Tomas Rivera (resident_id = 32):

        A Negative swab on 2024-02-01 came before any Positive, so it
        does not count.
        First Positive swab: 2024-02-20.
        First Negative after it: 2024-03-01.
        Days to clear: 10 days from 2024-02-20 to 2024-03-01 (2024 is a
        leap year).

    Nina Kovac's 8 days put her first; Alba Reyes and Tomas Rivera tie
    at 10, so Alba Reyes comes first by name.

    Residents not included:

        Owen Pratt (resident_id = 34): only Positive and Inconclusive
        swabs, never a Negative afterward.
        Leah Fontaine (resident_id = 35): only Negative swabs, never
        tested Positive.

Output table is ordered by days_to_clear in ascending order, then by
resident_name in ascending order.
```

Write your solution as a single `SELECT` query returning every resident
who has cleared the infection, with their `days_to_clear`.
