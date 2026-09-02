# Uptime In Whole Days

## Description

Table: `HostLog`

| Column Name | Type     |
| ----------- | -------- |
| host_id     | int      |
| event_time  | datetime |
| event_state | enum     |

(`host_id`, `event_time`, `event_state`) is the primary key
(combination of columns with unique values) for this table.
`event_state` is an ENUM (category) type of ('start', 'stop'). Each row
records one lifecycle event: which host, at what instant, and whether
it began or ended running there.

Every host's log alternates: a `start` opens one running session and
the matching `stop` closes it. Report the fleet's accumulated running
time across all sessions of all hosts, rounded down to a whole number
of days — partial days count for nothing.

Return the result table in any order.

The judge hands your query a `HostLog` table already loaded with the
testcase's rows — each case runs against its own `dataset`. The result
format is in the following example.

### Example 1

```text
Input:
HostLog table:
+---------+---------------------+-------------+
| host_id | event_time          | event_state |
+---------+---------------------+-------------+
| 7       | 2023-11-02 08:00:00 | start       |
| 7       | 2023-11-02 14:30:00 | stop        |
| 2       | 2023-11-10 00:00:00 | start       |
| 2       | 2023-11-11 10:00:00 | stop        |
| 7       | 2023-11-05 22:00:00 | start       |
| 7       | 2023-11-06 05:30:00 | stop        |
| 2       | 2023-11-12 09:15:00 | start       |
| 2       | 2023-11-12 12:45:00 | stop        |
+---------+---------------------+-------------+
Output:
+-------------------+
| total_uptime_days |
+-------------------+
| 2                 |
+-------------------+
Explanation:
Host 7 ran 6.5 hours on November 2 and another 7.5 hours across
November 5-6. Host 2 ran 34 hours spanning November 10-11 plus 3.5
hours on November 12. The fleet total is 51.5 hours, which is two full
days plus 3.5 leftover hours — the leftover hours are discarded, so the
answer is 2.
```

### Example 2

```text
Input:
HostLog table:
+---------+---------------------+-------------+
| host_id | event_time          | event_state |
+---------+---------------------+-------------+
| 1       | 2023-11-20 09:00:00 | start       |
| 1       | 2023-11-20 17:30:00 | stop        |
| 3       | 2023-11-21 23:50:00 | start       |
| 3       | 2023-11-22 00:10:00 | stop        |
| 3       | 2023-11-25 10:00:00 | start       |
| 3       | 2023-11-25 22:30:00 | stop        |
+---------+---------------------+-------------+
Output:
+-------------------+
| total_uptime_days |
+-------------------+
| 0                 |
+-------------------+
Explanation:
The sessions add up to 8.5 hours, 20 minutes (a session crossing
midnight), and 12.5 hours — under 22 hours in all. Nothing rounds up:
with not even one complete day of running, the answer is 0.
```

Write your solution as a single `SELECT` query returning one row with
one column — `total_uptime_days`, where each host's consecutive
`start`/`stop` events delimit one running span, every span's length is
summed across all hosts, and that total is rounded down to whole days.
Return the result table in any order.
