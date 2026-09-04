# Verification Success Rates

## Description

Table: `Registrations`

| Column Name | Type     |
| ----------- | -------- |
| member_id   | int      |
| joined_at   | datetime |

`member_id` is the column of unique values for this table.
Each row holds the join time for the member with ID `member_id`.

Table: `Verifications`

| Column Name | Type     |
| ----------- | -------- |
| member_id   | int      |
| sent_at     | datetime |
| outcome     | ENUM     |

`(member_id, sent_at)` is the primary key (combination of columns with
unique values) for this table.
`member_id` is a foreign key (reference column) to the `Registrations`
table.
`outcome` is an ENUM (category) of the type (`'confirmed'`, `'timeout'`).
Each row records that the member with ID `member_id` was sent a
verification prompt at `sent_at`, and that the prompt was either
confirmed (`'confirmed'`) or expired without being confirmed
(`'timeout'`).

A member's verification success rate is the number of `'confirmed'`
prompts divided by the total number of prompts sent to that member. A
member who was never sent a prompt has a rate of 0. Round the rate to
two decimal places.

Report the verification success rate of every member.

Return the result table in any order.

Each testcase's `dataset` seeds the tables: its script inserts the
testcase's `Registrations` and `Verifications` rows (whichever are
present) before your query runs. The result format is in the following
example.

### Example 1

```text
Input:
Registrations table:
+-----------+---------------------+
| member_id | joined_at           |
+-----------+---------------------+
| 4         | 2021-02-14 09:30:00 |
| 8         | 2021-03-01 11:00:00 |
| 15        | 2021-05-10 08:45:00 |
| 21        | 2021-06-21 19:05:00 |
| 30        | 2021-07-04 12:00:00 |
+-----------+---------------------+
Verifications table:
+-----------+---------------------+-----------+
| member_id | sent_at             | outcome   |
+-----------+---------------------+-----------+
| 4         | 2021-03-01 10:00:00 | confirmed |
| 4         | 2021-03-02 10:00:00 | timeout   |
| 4         | 2021-03-03 10:00:00 | confirmed |
| 8         | 2021-04-01 09:00:00 | timeout   |
| 21        | 2022-01-05 08:00:00 | confirmed |
| 21        | 2022-01-06 08:00:00 | confirmed |
| 21        | 2022-01-07 08:00:00 | confirmed |
| 21        | 2022-01-08 08:00:00 | confirmed |
| 30        | 2022-02-01 07:30:00 | confirmed |
| 30        | 2022-02-02 07:30:00 | timeout   |
+-----------+---------------------+-----------+
Output:
+-----------+-------------------+
| member_id | verification_rate |
+-----------+-------------------+
| 4         | 0.67              |
| 8         | 0.0               |
| 15        | 0.0               |
| 21        | 1.0               |
| 30        | 0.5               |
+-----------+-------------------+
Explanation:
Member 15 was never sent a prompt, so the rate is 0. Member 4 confirmed
two of three prompts, for a rate of 2 / 3 = 0.67 rounded to two decimal
places. Member 8's only prompt timed out, so the rate is 0. Member 21
confirmed all four prompts, so the rate is 1. Member 30 confirmed one of
two prompts, so the rate is 1 / 2 = 0.5.
```

### Example 2

```text
Input:
Registrations table:
+-----------+---------------------+
| member_id | joined_at           |
+-----------+---------------------+
| 9         | 2021-08-01 10:00:00 |
| 12        | 2021-08-02 10:00:00 |
+-----------+---------------------+
Verifications table:
+-----------+---------------------+-----------+
| member_id | sent_at             | outcome   |
+-----------+---------------------+-----------+
| 9         | 2021-08-03 10:00:00 | confirmed |
+-----------+---------------------+-----------+
Output:
+-----------+-------------------+
| member_id | verification_rate |
+-----------+-------------------+
| 9         | 1.0               |
| 12        | 0.0               |
+-----------+-------------------+
Explanation:
Member 9 confirmed the only prompt ever sent, so the rate is 1. Member
12 was never sent a prompt, so the rate is 0.
```

A member with no prompts gets rate `0.0`; every other member gets their
confirmed-to-total ratio rounded to two decimal places. Write your
solution as a single `SELECT` query returning two columns — `member_id`
and `verification_rate`, in that order — with one row for every member
in the `Registrations` table.
