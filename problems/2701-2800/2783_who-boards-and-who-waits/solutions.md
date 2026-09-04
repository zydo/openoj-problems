# Solutions — Who Boards And Who Waits

## Left join onto per-departure request counts

The boarding rule is a per-departure threshold on one number: how many
requests want a seat versus how many seats exist. So the query first
reduces `Bookings` to that number — GROUP BY departure_id with COUNT(*)
produces one row per requested departure and its demand — and then
attaches the tally to `Departures` with a LEFT JOIN driven by
`Departures` itself. Driving from the departure side is what keeps every
departure in the answer: an INNER JOIN would silently drop each
zero-request departure, which the statement still requires reported as 0
seated and 0 waiting.

The join miss shows up as NULL, so COALESCE(cnt, 0) normalizes it to a
count of zero before any arithmetic reads it. What remains is two
clamped expressions over SQLite's two-argument scalar min/max:
MIN(cnt, seats) seats everyone up to the seat count and no further, and
MAX(cnt - seats, 0) holds everyone past capacity in the standby line
while pinning the exactly-at-capacity case to an empty line instead of a
negative one. A zero-seat departure falls out of the same clamps —
nobody can board, every request waits — without special-casing.

The outer SELECT projects departure_id with its two tallies and sorts
with ORDER BY departure_id ASC, the order the judge compares exactly.

Aggregating p booking rows costs O(p log p) comparisons to group (plus f
departures joined against the small aggregated result), and the
intermediate holds one row per departure.

**Complexity:** `O(p log p)` time, `O(p)` space.
