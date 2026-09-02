# Seat Or Standby

## Description

Table: `Departures`

| Column Name  | Type |
| ------------ | ---- |
| departure_id | int  |
| seats        | int  |

`departure_id` is the column with unique values of this table. Each row is
one departure and the number of seats it offers.

Table: `Bookings`

| Column Name  | Type     |
| ------------ | -------- |
| booking_id   | int      |
| departure_id | int      |
| booked_at    | datetime |

`booking_id` is the column with unique values of this table, and so is
`booked_at` — no two requests share a moment. Each row is one request to
travel on the departure it points at, stamped with when it was made.

Requests are honored in the order they were made: a request gets a seat
while the departure still has free ones, and once it is full every later
request goes on standby.

Decide the outcome of every request and report its `booking_id` with its
`Status` — the string `Confirmed` when it holds a seat, `Waitlist` when it
does not.

Return the result table ordered by `booking_id` in ascending order.

Every test case ships its own `dataset`: the statements inside it populate
`Departures` and `Bookings` before your query executes. Every request
points at a departure that exists in `Departures`. Because booking
moments are distinct, each departure's requests have exactly one order:
the first `seats` of them hold the seats, everyone after them waits. The
order is temporal, not by id — a larger `booking_id` may well have booked
earlier than a smaller one. The output has one row per request, so a
departure with no requests contributes no rows at all. A departure whose
request count equals its seats confirms everyone in it, and a departure
with zero seats sends every one of its requests to standby.
The result format is in the following examples.

### Example 1

```text
Input:
Departures table:
+--------------+-------+
| departure_id | seats |
+--------------+-------+
| 1            | 2     |
| 2            | 1     |
| 3            | 3     |
+--------------+-------+
Bookings table:
+------------+--------------+---------------------+
| booking_id | departure_id | booked_at           |
+------------+--------------+---------------------+
| 50         | 1            | 2024-04-01 09:00:00 |
| 51         | 1            | 2024-04-01 08:00:00 |
| 52         | 1            | 2024-04-01 07:30:00 |
| 53         | 2            | 2024-04-02 10:00:00 |
| 54         | 3            | 2024-04-03 11:00:00 |
| 55         | 3            | 2024-04-03 10:00:00 |
+------------+--------------+---------------------+
Output:
+------------+-----------+
| booking_id | Status    |
+------------+-----------+
| 50         | Waitlist  |
| 51         | Confirmed |
| 52         | Confirmed |
| 53         | Confirmed |
| 54         | Confirmed |
| 55         | Confirmed |
+------------+-----------+
Explanation:
- Departure 1 has 2 seats and drew 3 requests. Booking 52 came first
  (07:30), then 51 (08:00), then 50 (09:00), so 52 and 51 take the two
  seats and 50 — despite being the smallest id — waits.
- Departure 2 has 1 seat and one request; booking 53 takes it.
- Departure 3 has 3 seats and only 2 requests, so bookings 54 and 55
  both confirm.
```

### Example 2

```text
Input:
Departures table:
+--------------+-------+
| departure_id | seats |
+--------------+-------+
| 7            | 0     |
| 8            | 2     |
| 9            | 5     |
+--------------+-------+
Bookings table:
+------------+--------------+---------------------+
| booking_id | departure_id | booked_at           |
+------------+--------------+---------------------+
| 60         | 7            | 2024-05-01 09:00:00 |
| 61         | 8            | 2024-05-01 10:00:00 |
| 62         | 8            | 2024-05-01 09:30:00 |
+------------+--------------+---------------------+
Output:
+------------+-----------+
| booking_id | Status    |
+------------+-----------+
| 60         | Waitlist  |
| 61         | Confirmed |
| 62         | Confirmed |
+------------+-----------+
Explanation:
- Departure 7 offers no seats, so its request waits no matter when it
  was made.
- Departure 8 has 2 seats for 2 requests — bookings 62 (09:30) and 61
  (10:00) fill them in that order and both confirm.
- Departure 9 drew no requests, so it contributes no rows at all.
```

Write your solution as a single `SELECT` query returning `booking_id`
and `Status` for every request, with each status spelled `Confirmed` or
`Waitlist`, ordered ascending by `booking_id` — the ordering is judged.

## Hints

### Hint 1

A request's fate depends on one number: how many requests of the same
departure booked strictly earlier. Booking moments are distinct, so
`ROW_NUMBER() OVER (PARTITION BY departure_id ORDER BY booked_at)` hands
out that rank tie-free — rank 1 through `seats` secure seats, everyone
beyond waits.

### Hint 2

A rank decides nothing until it meets its departure's seat count: join
the ranked requests to `Departures` on `departure_id` and turn the
comparison into the status with `CASE WHEN rn <= seats THEN 'Confirmed'
ELSE 'Waitlist' END` — the boundary lands exactly on the seat count, so
`<=` is what separates the last confirmer from the first standby. Without
window functions, a self-join counting each request's earlier bookings
within the same departure computes the same rank.

### Hint 3

`ORDER BY booking_id ASC` supplies the required ascending order; the
judge compares rows exactly. The ranking is temporal, not id-based — sort
by `booked_at` inside each departure and only then project `booking_id` —
so a dataset where higher ids booked earlier expects those ids confirmed.
