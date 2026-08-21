# Solutions — Smallest Largest Daily Load

## Binary search on the day cap

Workability climbs with the cap: a row that fits under `cap` also fits under
anything larger. So the answer — the least workable cap — is a search target.
The ends of the range write themselves: `lo = max(weights)`, because whatever
else happens a day must be able to carry the heaviest single item, and
`hi = sum(weights)`, the cap that puts the entire row on one day and always
works since `days >= 1`.

Deciding a candidate cap is one greedy sweep, and the order of the row makes the
greed honest: because items may not be reordered, stuffing the current day as
full as the cap allows uses the fewest days, so counting days that way decides
feasibility. `current` grows until the next item would break the cap, the sweep
then opens a fresh day starting at that item, and it bails the moment the day
count passes `days`. The bisection keeps `hi` workable the whole way and pushes
`lo` up over every midpoint that failed, landing exactly on the smallest
workable cap.

Neither extreme wants a special case. With `days == weights.length` every item
takes its own day and the search settles on `max(weights)`; with `days == 1`
everything rides together and it settles on the full sum.

For `[4, 7, 2, 9, 5, 3]` with `days = 4`, cap 9 splits into `[4]`, `[7,2]`,
`[9]`, `[5,3]` — four days — while cap 8 strands the lone 9 on a fifth day, so
9 is the answer.

**Complexity:** `O(n log S)` time, where `S = sum(weights) - max(weights)` is
the search range; `O(1)` space.
