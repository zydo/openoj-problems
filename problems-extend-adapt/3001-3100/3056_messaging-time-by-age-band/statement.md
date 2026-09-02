# Messaging Time By Age Band

## Description

Table: `Events`

| Column Name | Type    |
| ----------- | ------- |
| event_id    | int     |
| member_id   | int     |
| event_kind  | enum    |
| minutes     | decimal |

`event_id` is the column of unique values for this table.
`event_kind` is an ENUM (category) type of `'send'`, `'open'`.
This table contains event id, member id, event kind and minutes spent.

Table: `AgeGroups`

| Column Name | Type |
| ----------- | ---- |
| member_id   | int  |
| age_band    | enum |

`member_id` is the column of unique values for this table.
`age_band` is an ENUM (category) type of `'21-25'`, `'26-30'`,
`'31-35'`.
This table contains member id and age band.

A messaging platform watches how its age groups actually use the
product: every logged event is one member either composing a message
(`send`) or reading one (`open`), and each event carries the minutes
the member spent on it.

For every age band, work out what percentage of the band's total
minutes went to sending and what percentage went to opening. Round each
percentage to 2 decimal places.

Return the result table in any order.

Every testcase brings its own `dataset`: the DDL loads the `Events` and
`AgeGroups` tables with that testcase's rows before your query runs.
The result format is shown in the examples below.

### Example 1

```text
Input:
Events table:
+----------+-----------+------------+---------+
| event_id | member_id | event_kind | minutes |
+----------+-----------+------------+---------+
| 501      | 71        | send       | 4.20    |
| 502      | 71        | open       | 2.80    |
| 503      | 72        | send       | 1.10    |
| 504      | 73        | open       | 6.40    |
| 505      | 73        | send       | 3.60    |
| 506      | 74        | open       | 5.00    |
| 507      | 75        | send       | 2.50    |
+----------+-----------+------------+---------+
AgeGroups table:
+-----------+----------+
| member_id | age_band |
+-----------+----------+
| 71        | 21-25    |
| 73        | 26-30    |
| 75        | 31-35    |
| 76        | 26-30    |
+-----------+----------+
Output:
+----------+-----------+-----------+
| age_band | send_perc | open_perc |
+----------+-----------+-----------+
| 21-25    | 60.0      | 40.0      |
| 26-30    | 36.0      | 64.0      |
| 31-35    | 100.0     | 0.0       |
+----------+-----------+-----------+
Explanation:
For band 21-25: member 71 sent for 4.20 and opened for 2.80, so the
split is (4.20 / 7.00) * 100 = 60.0 against (2.80 / 7.00) * 100 =
40.0.
For band 26-30: member 73 sent for 3.60 and opened for 6.40, giving
36.0 and 64.0; member 76 belongs to this band but logged nothing, so
it adds no time.
For band 31-35: member 75 only ever sent (2.50 minutes), so the split
is 100.0 and 0.0.
Member 72's event is dropped entirely because 72 has no row in
AgeGroups. All percentages are rounded to two decimal places.
```

### Example 2

```text
Input:
Events table:
+----------+-----------+------------+---------+
| event_id | member_id | event_kind | minutes |
+----------+-----------+------------+---------+
| 901      | 81        | send       | 1.15    |
| 902      | 81        | open       | 0.85    |
| 903      | 82        | send       | 2.30    |
| 904      | 83        | open       | 1.05    |
| 905      | 83        | send       | 0.95    |
| 906      | 84        | open       | 2.75    |
| 907      | 85        | send       | 3.20    |
| 908      | 85        | open       | 1.30    |
+----------+-----------+------------+---------+
AgeGroups table:
+-----------+----------+
| member_id | age_band |
+-----------+----------+
| 81        | 21-25    |
| 82        | 31-35    |
| 83        | 26-30    |
| 84        | 31-35    |
| 85        | 21-25    |
+-----------+----------+
Output:
+----------+-----------+-----------+
| age_band | send_perc | open_perc |
+----------+-----------+-----------+
| 21-25    | 66.92     | 33.08     |
| 26-30    | 47.5      | 52.5      |
| 31-35    | 45.54     | 54.46     |
+----------+-----------+-----------+
Explanation:
For band 21-25, members 81 and 85 pool their time: sending 1.15 + 3.20
= 4.35 of the band's 6.50 total minutes, which is 66.92%, and opening
2.15 minutes, which is 33.08%.
For band 26-30, member 83 split 0.95 sent against 1.05 opened, giving
47.5 and 52.5.
For band 31-35, members 82 and 84 pool 2.30 sent against 2.75 opened
over a 5.05 total, giving 45.54 and 54.46.
```

Write your solution as a single `SELECT` query with three output
columns: the `age_band`, the share of its minutes spent on `send`
events (`send_perc`), and the share spent on `open` events
(`open_perc`), each a percentage of the band's own total minutes and
rounded to 2 decimal places. The result holds one row per age band
that ends up carrying at least one event, and any row order is
accepted. Only members present in both tables matter: an event whose
member has no `AgeGroups` row cannot be attached to a band, a member
with an `AgeGroups` row but no events adds nothing, and a band whose
members all lack events produces no row.
