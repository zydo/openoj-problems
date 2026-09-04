# Rapid Repeat Verifications

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

Report the IDs of the members who were sent two verification prompts no
more than 24 hours apart. Two prompts exactly 24 hours apart still count
as being within the window. The outcome of each prompt is irrelevant —
only the time it was sent matters.

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
| 5         | 2022-04-02 09:00:00 |
| 11        | 2022-04-15 10:30:00 |
| 23        | 2022-05-08 14:20:00 |
| 38        | 2022-06-30 08:05:00 |
+-----------+---------------------+
Verifications table:
+-----------+---------------------+-----------+
| member_id | sent_at             | outcome   |
+-----------+---------------------+-----------+
| 5         | 2022-07-01 12:00:00 | timeout   |
| 5         | 2022-07-02 12:00:00 | confirmed |
| 11        | 2022-07-03 08:00:00 | confirmed |
| 11        | 2022-07-04 08:00:01 | timeout   |
| 23        | 2022-07-05 10:00:00 | timeout   |
| 23        | 2022-07-05 10:45:00 | confirmed |
| 23        | 2022-07-07 09:00:00 | timeout   |
| 38        | 2022-07-06 16:30:00 | confirmed |
+-----------+---------------------+-----------+
Output:
+-----------+
| member_id |
+-----------+
| 5         |
| 23        |
+-----------+
Explanation:
Member 5 was sent two prompts exactly 24 hours apart, which is still
inside the window, so member 5 qualifies.
Member 11's two prompts are 24 hours and 1 second apart, just outside
the window, so member 11 does not qualify.
Member 23's first two prompts are 45 minutes apart, so member 23
qualifies.
Member 38 was sent a single prompt, which can never form a pair.
```

The qualifying check involves only the times the prompts were sent —
never the join time or the outcome. Write your solution as a single
`SELECT` query returning one column — `member_id` — with one row per
qualifying member, in any order.
