# Permit Approvals and Revocations

## Description

Table: `Permits`

| Column Name | Type    |
| ----------- | ------- |
| permit_id   | int     |
| region      | varchar |
| status      | varchar |
| fee         | int     |
| issued_on   | date    |

`permit_id` is the column with unique values for this table.
Each row is one building-permit application: the `region` it was filed
in, its `fee` in dollars, the date it was lodged, and its `status` —
`status` is an ENUM (category) of type `["approved", "declined"]`.

Table: `Revocations`

| Column Name | Type |
| ----------- | ---- |
| permit_id   | int  |
| revoked_on  | date |

`Revocations` logs permits that were later struck down. `permit_id`
refers to the `permit_id` column of `Permits`, and `revoked_on` is the
date the revocation took effect. Each revocation points at a previously
filed application, even one whose `status` was never `approved`.

For every month and region, report the number of approved applications
with their total fee, and the number of revocations with the total fee
of the permits they struck down. Approvals are tallied in the month the
application was lodged; a revocation is tallied in the month it took
effect, which can differ from the month its permit was lodged.

Note: given a month and region, skip any row of the output whose four
tallies are all zero.

Return the result table in any order.

The result format is shown in the following examples.

### Example 1

```text
Input:
Permits table:
+-----------+--------+----------+------+------------+
| permit_id | region | status   | fee  | issued_on  |
+-----------+--------+----------+------+------------+
| 7         | CA     | approved | 1200 | 2021-03-04 |
| 8         | CA     | declined | 900  | 2021-03-11 |
| 9         | CA     | approved | 1500 | 2021-04-02 |
| 10        | CA     | declined | 600  | 2021-04-19 |
| 11        | CA     | approved | 2000 | 2021-04-25 |
+-----------+--------+----------+------+------------+
Revocations table:
+-----------+------------+
| permit_id | revoked_on |
+-----------+------------+
| 8         | 2021-03-27 |
| 7         | 2021-04-30 |
| 11        | 2021-07-05 |
+-----------+------------+
Output:
+---------+--------+---------------+--------------+---------------+--------------+
| month   | region | approved_count | approved_fee | revoked_count | revoked_fee |
+---------+--------+---------------+--------------+---------------+--------------+
| 2021-03 | CA     | 1              | 1200         | 1             | 900          |
| 2021-04 | CA     | 2              | 3500         | 1             | 1200         |
| 2021-07 | CA     | 0              | 0            | 1             | 2000         |
+---------+--------+---------------+--------------+---------------+--------------+
Explanation: March approved one permit worth 1200 and took in the
revocation of permit 8, a declined application worth 900. Permit 7 was
lodged in March but not revoked until April, so April's revocation
tally carries its 1200 fee — separate from April's two approvals,
which total 3500. Permit 11's July revocation is the only event of
that month, so July keeps its row with zero approvals.
```

### Example 2

```text
Input:
Permits table:
+-----------+--------+----------+------+------------+
| permit_id | region | status   | fee  | issued_on  |
+-----------+--------+----------+------+------------+
| 21        | UK     | approved | 400  | 2022-01-09 |
| 22        | UK     | declined | 250  | 2022-01-20 |
| 23        | UK     | approved | 650  | 2022-02-14 |
| 24        | DE     | approved | 300  | 2022-01-28 |
| 25        | DE     | declined | 150  | 2022-02-05 |
+-----------+--------+----------+------+------------+
Revocations table:
+-----------+------------+
| permit_id | revoked_on |
+-----------+------------+
| 22        | 2022-02-01 |
| 24        | 2022-03-15 |
+-----------+------------+
Output:
+---------+--------+---------------+--------------+---------------+--------------+
| month   | region | approved_count | approved_fee | revoked_count | revoked_fee |
+---------+--------+---------------+--------------+---------------+--------------+
| 2022-01 | DE     | 1              | 300          | 0             | 0            |
| 2022-01 | UK     | 1              | 400          | 0             | 0            |
| 2022-02 | UK     | 1              | 650          | 1             | 250          |
| 2022-03 | DE     | 0              | 0            | 1             | 300          |
+---------+--------+---------------+--------------+---------------+--------------+
Explanation: January has approvals in both regions and no revocations.
February's UK row pairs the approval of permit 23 with the revocation
of the declined permit 22. Permit 24 was approved in January but
revoked in March, so it appears as DE's March revocation.
```

Write your solution as a single `SELECT` query returning `month`,
`region`, `approved_count`, `approved_fee`, `revoked_count`, and
`revoked_fee`.
