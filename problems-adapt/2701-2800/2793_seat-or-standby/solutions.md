# Solutions — Seat Or Standby

## Rank requests by booking moment within their departure

The boarding rule is a per-departure ranking: a request keeps a seat
exactly when fewer than `seats` requests of the same departure booked
strictly earlier. Booking moments are distinct, so the first pass assigns
that rank tie-free — `ROW_NUMBER() OVER (PARTITION BY departure_id ORDER
BY booked_at)` numbers each departure's requests in booking order, 1
being the earliest. The rank is temporal on purpose: nothing about
`booking_id` enters it, which is why a dataset where higher ids booked
earlier expects those ids confirmed.

The second pass joins the ranked rows to `Departures` to fetch each
departure's seat count and turns one comparison into the status —
`CASE WHEN rn <= seats THEN 'Confirmed' ELSE 'Waitlist' END`. The
boundary lands exactly on the seat count, so `<=` makes the seat-th
booker the last confirmer and rank seats + 1 the first standby; a
zero-seat departure standbys everyone through the same comparison. The
join is driven from the request side, so departures without requests
produce no row — the output is per request. `ORDER BY booking_id ASC`
then supplies the order the judge compares exactly.

Ranking sorts each departure's requests, n log n comparisons over n
booking rows in total, with O(n) intermediate rows.

**Complexity:** `O(n log n)` time, `O(n)` space.
