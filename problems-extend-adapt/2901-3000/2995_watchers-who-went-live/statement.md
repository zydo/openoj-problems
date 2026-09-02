# Watchers Who Went Live

## Description

Table: `StreamLog`

| Column Name  | Type     |
| ------------ | -------- |
| member_id    | int      |
| started_at   | datetime |
| ended_at     | datetime |
| log_id       | int      |
| session_kind | enum     |

`log_id` is the column of unique values for this table. `session_kind` is
an ENUM (category) type of (`Viewer`, `Streamer`). Each row is one session:
who it belonged to, when it started and ended, and whether the member spent
it watching or live-streaming.

For every member whose first session was spent as a `Viewer`, count how
many of their sessions were `Streamer` sessions.

Return the result table ordered by stream count, then `member_id`, both in
descending order.

Each testcase carries its own `dataset`: the DDL creates the `StreamLog`
table and loads it with that testcase's rows before your query runs. The
result format is shown in the examples below.

### Example 1

```text
Input:
StreamLog table:
+-----------+---------------------+---------------------+--------+--------------+
| member_id | started_at          | ended_at            | log_id | session_kind |
+-----------+---------------------+---------------------+--------+--------------+
| 7         | 2023-11-04 09:12:00 | 2023-11-04 09:40:00 | 501    | Viewer       |
| 7         | 2023-11-09 18:30:00 | 2023-11-09 19:05:00 | 502    | Streamer     |
| 7         | 2023-11-21 12:00:00 | 2023-11-21 12:45:00 | 503    | Streamer     |
| 8         | 2023-11-05 20:00:00 | 2023-11-05 21:15:00 | 504    | Streamer     |
| 8         | 2023-11-12 20:00:00 | 2023-11-12 21:02:00 | 505    | Streamer     |
| 9         | 2023-11-06 08:00:00 | 2023-11-06 08:30:00 | 506    | Viewer       |
| 10        | 2023-11-02 10:00:00 | 2023-11-02 10:20:00 | 507    | Viewer       |
| 10        | 2023-11-15 22:00:00 | 2023-11-15 22:30:00 | 508    | Streamer     |
+-----------+---------------------+---------------------+--------+--------------+
Output:
+-----------+--------------+
| member_id | stream_count |
+-----------+--------------+
| 7         | 2            |
| 10        | 1            |
+-----------+--------------+
Explanation:
- Member 7's first session, log 501 on 2023-11-04, was as a Viewer; they
  later went live twice, so their stream_count is 2.
- Member 10 also started as a Viewer (log 507) and went live once.
- Member 8's first session was already as a Streamer, so they are excluded.
- Member 9 started as a Viewer but never went live, so they are excluded
  too.
Output table is ordered by stream count and then member_id, descending.
```

### Example 2

```text
Input:
StreamLog table:
+-----------+---------------------+---------------------+--------+--------------+
| member_id | started_at          | ended_at            | log_id | session_kind |
+-----------+---------------------+---------------------+--------+--------------+
| 44        | 2023-11-03 08:00:00 | 2023-11-03 08:30:00 | 611    | Viewer       |
| 44        | 2023-11-03 08:00:00 | 2023-11-03 08:45:00 | 609    | Streamer     |
| 41        | 2023-11-03 08:00:00 | 2023-11-03 08:30:00 | 612    | Viewer       |
| 41        | 2023-11-07 19:00:00 | 2023-11-07 19:30:00 | 613    | Streamer     |
| 41        | 2023-11-14 19:00:00 | 2023-11-14 19:30:00 | 614    | Streamer     |
| 41        | 2023-11-21 19:00:00 | 2023-11-21 19:30:00 | 615    | Streamer     |
| 47        | 2023-11-10 09:00:00 | 2023-11-10 09:20:00 | 616    | Viewer       |
| 47        | 2023-11-11 10:00:00 | 2023-11-11 10:20:00 | 617    | Streamer     |
+-----------+---------------------+---------------------+--------+--------------+
Output:
+-----------+--------------+
| member_id | stream_count |
+-----------+--------------+
| 41        | 3            |
| 47        | 1            |
+-----------+--------------+
Explanation:
- Members 44 and 41 both have two sessions starting at the same earliest
  instant. For member 44 the smaller log_id (609) counts as first, and it
  is a Streamer session, so member 44 does not qualify at all. Member 41's
  first session is the Viewer one, and their three later streams give a
  stream_count of 3.
- Member 47 started as a Viewer and went live once.
Output table is ordered by stream count and then member_id, descending.
```

A member's first session is the row with the earliest `started_at`; if two
of their sessions share that earliest instant, the one with the smaller
`log_id` is treated as first. Only members whose first session is a
`Viewer` session can qualify, and among those, only members with at least
one `Streamer` session appear in the output — a viewer-first member who
never went live contributes no row. The count itself covers every
`Streamer` session of the member, no matter when it happened. Write your
solution as a single `SELECT` query returning two columns — `member_id`
and `stream_count`, in that order, with rows ordered by `stream_count`
descending and then `member_id` descending.

## Hints

### Hint 1

Identify each member's first session with
`ROW_NUMBER() OVER (PARTITION BY member_id ORDER BY started_at, log_id)`
and keep the row numbered 1 — `log_id` makes the earliest-start pick
deterministic.

### Hint 2

Count streaming sessions per member independently:
`WHERE session_kind = 'Streamer'` with `GROUP BY member_id` gives every
member that has at least one, and members absent from that grouping have no
streaming sessions at all.

### Hint 3

Join the two sides on `member_id` and keep only rows whose first-session
kind is `Viewer`; the inner join itself drops viewer-first members with
zero streaming sessions, and
`ORDER BY stream_count DESC, member_id DESC` finishes the contract.
