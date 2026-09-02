# Who Boards And Who Waits

## Description

Table: `Departures`

| Column Name  | Type |
| ------------ | ---- |
| departure_id | int  |
| seats        | int  |

`departure_id` is the column with unique values of this table. Each row is
one departure and the number of seats it offers.

Table: `Bookings`

| Column Name  | Type |
| ------------ | ---- |
| booking_id   | int  |
| departure_id | int  |

`booking_id` is the column with unique values of this table. Each row is
one request to travel on the departure it points at.

Requests are honored in seat order: a request lands a seat while seats are
still free, and once the departure is full every further request goes to
the standby line.

For each departure, report how many requests got seats (`seated_cnt`) and
how many ended up on standby (`standby_cnt`).

Return the result table ordered by `departure_id` in ascending order.

Every test case ships its own `dataset`: the statements inside it populate
`Departures` and `Bookings` before your query executes. Every request
points at a departure that exists in `Departures`. A departure with no
requests at all still gets a row — 0 seated, 0 waiting. A departure with
zero seats seats nobody, so each of its requests waits. A departure whose
request count exactly equals its seats is full with an empty standby line;
only the requests beyond the seat count wait.
The result format is in the following examples.

### Example 1

```text
Input:
Departures table:
+--------------+-------+
| departure_id | seats |
+--------------+-------+
| 1            | 3     |
| 2            | 1     |
| 3            | 0     |
| 4            | 2     |
+--------------+-------+
Bookings table:
+------------+--------------+
| booking_id | departure_id |
+------------+--------------+
| 10         | 1            |
| 11         | 1            |
| 12         | 1            |
| 13         | 1            |
| 20         | 2            |
| 21         | 2            |
| 30         | 3            |
+------------+--------------+
Output:
+--------------+------------+-------------+
| departure_id | seated_cnt | standby_cnt |
+--------------+------------+-------------+
| 1            | 3          | 1           |
| 2            | 1          | 1           |
| 3            | 0          | 1           |
| 4            | 0          | 0           |
+--------------+------------+-------------+
Explanation:
- Departure 1 offers 3 seats and drew 4 requests, so 3 requests get
  seats and 1 waits.
- Departure 2 offers 1 seat and drew 2 requests: 1 seated, 1 waiting.
- Departure 3 has no seats at all, so its single request waits.
- Departure 4 drew no requests and still must be reported, with 0 and 0.
```

### Example 2

```text
Input:
Departures table:
+--------------+-------+
| departure_id | seats |
+--------------+-------+
| 7            | 2     |
| 8            | 2     |
| 9            | 5     |
+--------------+-------+
Bookings table:
+------------+--------------+
| booking_id | departure_id |
+------------+--------------+
| 40         | 7            |
| 41         | 7            |
| 42         | 8            |
+------------+--------------+
Output:
+--------------+------------+-------------+
| departure_id | seated_cnt | standby_cnt |
+--------------+------------+-------------+
| 7            | 2          | 0           |
| 8            | 1          | 0           |
| 9            | 0          | 0           |
+--------------+------------+-------------+
Explanation:
- Departure 7 drew exactly as many requests as it has seats, so everyone
  boards and the standby line is empty.
- Departure 8 drew fewer requests than seats, so the single request
  boards and nobody waits.
- Departure 9 drew no requests, so its row reads 0 and 0.
```

Write your solution as a single `SELECT` query returning `departure_id`,
`seated_cnt`, and `standby_cnt` for every departure, ordered ascending by
`departure_id` — the ordering is judged.

## Hints

### Hint 1

Count requests per departure first — `GROUP BY departure_id` over
`Bookings` with `COUNT(*)` — then attach each tally to its departure with
a `LEFT JOIN` driven by `Departures`. An `INNER JOIN` silently drops every
zero-request departure, which must still be reported as 0 seated and 0
waiting.

### Hint 2

The missed join leaves the count NULL: `COALESCE(cnt, 0)` turns it into 0
before anything else touches it. Then seated = `MIN(cnt, seats)` and
standby = `MAX(cnt - seats, 0)` — SQLite's two-argument scalar min/max —
handle both boundaries at once: under capacity everyone boards, at
exactly capacity the standby line lands on 0 rather than going negative,
beyond capacity the overflow waits.

### Hint 3

`ORDER BY departure_id ASC` supplies the required ascending order; the
judge compares rows exactly, so a dataset whose departures are inserted
out of order still expects the output sorted by `departure_id`.
