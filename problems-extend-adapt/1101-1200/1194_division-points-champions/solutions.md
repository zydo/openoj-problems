# Solutions — Division Points Champions

## Union the Two Sides of Every Race, Then Pick per Division

A racer's points arrive in two disguises: as `first_points` when listed
first and as `second_points` when listed second. The first stage
flattens that — a `UNION ALL` emits one `(racer, points)` event per
side of every race, and a grouped `SUM` over the events yields each
racer's season total. Racers who never started appear in no event,
which is fine: their total is zero, handled naturally at the next
stage.

The second stage ranks within divisions. Joining those totals against
`Racers` attaches a division to every score; racers absent from the
totals join through a `LEFT JOIN` carrying NULL, and `COALESCE(total,
0)` normalizes them to zero so a division that never raced still
crowns its lowest-id member. Ranking with the tie rule baked in needs
one ordered value: `ROW_NUMBER() OVER (PARTITION BY division_id ORDER
BY total DESC, racer_id)` counts down by points, then by id — exactly
"maximum points, lowest id breaks ties". Row number 1 in each
partition is the champion.

**Complexity:** `O(M log M)` for the union-side aggregation over `M`
race sides plus `O(R log R)` for the ranked window over `R` racers,
`O(R)` space for the decorated rows.
