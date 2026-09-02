# Call Duration Leaders

## Description

Table: `Directory`

| Column Name | Type    |
| ----------- | ------- |
| person_id   | int     |
| given_name  | varchar |
| family_name | varchar |

`person_id` is the primary key (column with unique values) of this
table. `person_id` is a foreign key (reference column) to the `CallLog`
table. Each row holds one person's id, given name, and family name.

Table: `CallLog`

| Column Name | Type |
| ----------- | ---- |
| person_id   | int  |
| direction   | enum |
| duration    | int  |

(`person_id`, `direction`, `duration`) is the primary key (combination
of columns with unique values) of this table. `direction` is an ENUM
(category) type of ('incoming', 'outgoing'). Each row describes one
call: who it belongs to, which way it went, and how long it lasted, in
seconds.

The phone carrier wants each direction's podium: name the three longest
`incoming` calls and the three longest `outgoing` calls, with the
length of each shown as `HH:MM:SS`.

Return the result table ordered by `direction`, then `duration`, then
`given_name` — all three descending.

The judge hands your query `Directory` and `CallLog` tables already
loaded with the testcase's rows — each case runs against its own
`dataset`. The result format is in the following examples.

### Example 1

```text
Input:
Directory table:
+-----------+------------+-------------+
| person_id | given_name | family_name |
+-----------+------------+-------------+
| 1         | Priya      | Nair        |
| 2         | Marcus     | Webb        |
| 3         | Elena      | Petrov      |
| 4         | Tom        | Okafor      |
| 5         | Ines       | Costa       |
+-----------+------------+-------------+
CallLog table:
+-----------+-----------+----------+
| person_id | direction | duration |
+-----------+-----------+----------+
| 1         | outgoing  | 600      |
| 2         | outgoing  | 600      |
| 5         | outgoing  | 450      |
| 4         | outgoing  | 200      |
| 4         | incoming  | 720      |
| 3         | incoming  | 300      |
| 1         | incoming  | 300      |
| 2         | incoming  | 90       |
+-----------+-----------+----------+
Output:
+------------+-----------+--------------------+
| given_name | direction | duration_formatted |
+------------+-----------+--------------------+
| Priya      | outgoing  | 00:10:00           |
| Marcus     | outgoing  | 00:10:00           |
| Ines       | outgoing  | 00:07:30           |
| Tom        | incoming  | 00:12:00           |
| Priya      | incoming  | 00:05:00           |
| Elena      | incoming  | 00:05:00           |
+------------+-----------+--------------------+
Explanation:
On the outgoing side Priya and Marcus tie at ten minutes and 'Priya'
sorts after 'Marcus', so Priya takes the top slot; Ines is third and
Tom's 200-second call misses the cut. On the incoming side Tom leads,
then Priya and Elena tie at five minutes with 'Priya' sorting after
'Elena'.
```

### Example 2

```text
Input:
Directory table:
+-----------+------------+-------------+
| person_id | given_name | family_name |
+-----------+------------+-------------+
| 1         | Ada        | Boateng     |
| 2         | Leo        | Marchetti   |
| 3         | Sana       | Qadir       |
+-----------+------------+-------------+
CallLog table:
+-----------+-----------+----------+
| person_id | direction | duration |
+-----------+-----------+----------+
| 2         | outgoing  | 4700     |
| 1         | outgoing  | 3920     |
| 3         | outgoing  | 125      |
| 3         | incoming  | 3925     |
| 1         | incoming  | 600      |
+-----------+-----------+----------+
Output:
+------------+-----------+--------------------+
| given_name | direction | duration_formatted |
+------------+-----------+--------------------+
| Leo        | outgoing  | 01:18:20           |
| Ada        | outgoing  | 01:05:20           |
| Sana       | outgoing  | 00:02:05           |
| Sana       | incoming  | 01:05:25           |
| Ada        | incoming  | 00:10:00           |
+------------+-----------+--------------------+
Explanation:
The outgoing calls fill all three podium slots, led by Leo's
one-hour-eighteen-minute call. Only two incoming calls exist, so the
incoming block lists just those two; hours appear in the leading
position whenever a call runs past 3600 seconds.
```

Write your solution as a single `SELECT` query returning three columns
— `given_name`, `direction`, `duration_formatted`, where
`duration_formatted` renders the call's length in seconds as `HH:MM:SS`
with each part zero-padded to two digits — listing the three longest
calls of each direction (fewer if that side holds fewer than three),
ordered by `direction` descending, then `duration` descending, then
`given_name` descending. Return the result table in that order.
