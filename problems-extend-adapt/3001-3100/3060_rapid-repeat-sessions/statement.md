# Rapid Repeat Sessions

## Description

Table: `Visits`

| Column Name | Type     |
| ----------- | -------- |
| member_id   | int      |
| visit_start | datetime |
| visit_end   | datetime |
| visit_id    | int      |
| visit_kind  | enum     |

`visit_id` is a column of unique values for this table.
`visit_kind` is an ENUM (category) type of ('Viewer', 'Streamer').
Each row records one sitting: the member it belongs to, the moments it
started and ended, its own id, and the role the member held during it.

Report every member who fits at least two sittings of the same kind —
both 'Viewer' or both 'Streamer' — where the idle stretch between the
two stays within twelve hours. The stretch runs from the moment the
earlier sitting of the pair ends to the moment the later one begins,
taking "earlier" by `visit_start`; two sittings that overlap leave a
nonexistent gap and always fit. Twelve hours is the largest allowed
stretch: a later sitting beginning exactly twelve hours after the
earlier one ends still counts, and anything later does not.

Return the result table ordered by `member_id` in ascending order.

Every test case ships its own `dataset`: the statements inside it
populate `Visits` before your query executes. The result format is in
the following examples.

### Example 1

```text
Input:
Visits table:
+-----------+---------------------+---------------------+----------+------------+
| member_id | visit_start         | visit_end           | visit_id | visit_kind |
+-----------+---------------------+---------------------+----------+------------+
| 201       | 2024-05-01 09:00:00 | 2024-05-01 10:00:00 | 1        | Viewer     |
| 202       | 2024-05-01 12:00:00 | 2024-05-01 13:00:00 | 2        | Viewer     |
| 201       | 2024-05-01 15:00:00 | 2024-05-01 16:00:00 | 3        | Viewer     |
| 203       | 2024-05-01 20:00:00 | 2024-05-01 21:00:00 | 4        | Viewer     |
| 201       | 2024-05-02 08:00:00 | 2024-05-02 09:00:00 | 5        | Streamer   |
| 202       | 2024-05-02 01:00:00 | 2024-05-02 02:00:00 | 6        | Viewer     |
| 203       | 2024-05-02 09:30:00 | 2024-05-02 10:30:00 | 7        | Viewer     |
| 201       | 2024-05-02 18:00:00 | 2024-05-02 19:00:00 | 8        | Streamer   |
+-----------+---------------------+---------------------+----------+------------+
Output:
+-----------+
| member_id |
+-----------+
| 201       |
| 202       |
+-----------+
Explanation: Member 201 pairs the Viewer sittings 1 and 3 — sitting 1
ends at 10:00 and sitting 3 begins at 15:00, five idle hours later —
so they qualify. Member 202's two Viewer sittings are separated by
exactly twelve hours (sitting 2 ends at 13:00, sitting 6 begins at
01:00 the next morning), which is still within the bound. Member 203's
only same-kind pair is twelve and a half hours apart, so they are left
out.
```

### Example 2

```text
Input:
Visits table:
+-----------+---------------------+---------------------+----------+------------+
| member_id | visit_start         | visit_end           | visit_id | visit_kind |
+-----------+---------------------+---------------------+----------+------------+
| 301       | 2024-03-10 08:00:00 | 2024-03-10 12:00:00 | 11       | Streamer   |
| 302       | 2024-03-10 09:00:00 | 2024-03-10 10:00:00 | 12       | Viewer     |
| 301       | 2024-03-10 10:00:00 | 2024-03-10 11:00:00 | 13       | Streamer   |
| 302       | 2024-03-10 09:30:00 | 2024-03-10 10:30:00 | 14       | Streamer   |
| 303       | 2024-03-11 08:00:00 | 2024-03-11 08:30:00 | 15       | Viewer     |
| 302       | 2024-03-10 20:00:00 | 2024-03-10 21:00:00 | 16       | Viewer     |
| 303       | 2024-03-11 09:00:00 | 2024-03-11 09:30:00 | 17       | Streamer   |
| 304       | 2024-03-10 07:00:00 | 2024-03-10 07:45:00 | 18       | Viewer     |
| 304       | 2024-03-10 20:00:00 | 2024-03-10 20:45:00 | 19       | Viewer     |
| 304       | 2024-03-12 10:00:00 | 2024-03-12 10:30:00 | 20       | Streamer   |
+-----------+---------------------+---------------------+----------+------------+
Output:
+-----------+
| member_id |
+-----------+
| 301       |
| 302       |
+-----------+
Explanation: Member 301 qualifies through an overlap — Streamer
sitting 13 begins while sitting 11 is still running, so the pair has
no idle stretch at all. Member 302's two Viewer sittings sit ten hours
apart. Member 303 never repeats a kind. Member 304 does repeat
'Viewer', but their two Viewer sittings are twelve and a quarter hours
apart — past the bound — and the lone Streamer sitting has no partner,
so they miss the cut.
```

Write your solution as a single `SELECT` query returning one column —
`member_id` — with one row for every member holding a same-kind pair
of sittings whose stretch fits the twelve-hour bound, ordered by
`member_id` ascending.
