# Last Sign-In Of 2020

## Description

Table: `SignIns`

| Column Name | Type     |
| ----------- | -------- |
| visitor_id  | int      |
| seen_at     | datetime |

(`visitor_id`, `seen_at`) is the primary key (combination of columns
with unique values) for this table. Each row records one sign-in
moment for the visitor with ID `visitor_id`.

Report the most recent sign-in of every visitor during the year 2020.
Visitors who never signed in during 2020 are left out entirely.

The result table may be returned in any order.

Each testcase's `dataset` seeds the `SignIns` table with that
testcase's rows. The result format is in the following example.

### Example 1

```text
Input:
SignIns table:
+------------+---------------------+
| visitor_id | seen_at             |
+------------+---------------------+
| 4          | 2020-03-14 09:12:40 |
| 4          | 2020-11-02 22:05:11 |
| 4          | 2019-05-19 08:00:00 |
| 7          | 2020-07-04 12:00:00 |
| 7          | 2021-02-14 10:30:00 |
| 9          | 2018-12-31 23:59:59 |
| 9          | 2021-01-01 00:00:01 |
| 12         | 2020-12-31 23:59:59 |
+------------+---------------------+
Output:
+------------+---------------------+
| visitor_id | latest_seen         |
+------------+---------------------+
| 4          | 2020-11-02 22:05:11 |
| 7          | 2020-07-04 12:00:00 |
| 12         | 2020-12-31 23:59:59 |
+------------+---------------------+
Explanation:
Visitor 4 signed in three times but only twice in 2020; the later of
those, 2020-11-02 22:05:11, is reported. Visitor 7's only 2020
sign-in is 2020-07-04 12:00:00 (their 2021 visit is outside the year).
Visitor 9 never signed in during 2020 and is dropped. Visitor 12
signed in exactly once in 2020, at the year's final second.
```
