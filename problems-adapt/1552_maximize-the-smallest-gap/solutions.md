# Solutions — Maximize the Smallest Gap

## Binary search on the answer

Ask instead a yes/no question: can the markers be arranged with every pair at
least `d` apart? If some `d` can, every smaller value can too, so feasibility
is monotone and the answer — the largest workable `d` — can be found by binary
search over `[1, max(slots) - min(slots)]`. Searching directly over placements
would be hopeless; there are exponentially many.

Testing one `d` is a greedy sweep. Sort the coordinates, seat the first marker
in the leftmost slot, then walk rightward seating a marker in each first slot
that lies `d` or more beyond the previous marker. Seating a marker as early as
legal can never cost anything later, so when this sweep falls short of `m`
markers no arrangement meets `d`. The loop bails out as soon as the `m`-th
marker lands. The search takes the upper-mid `mid = (lo + hi + 1) // 2` with
`hi = mid - 1` on failure — a plain midpoint would stall at the end instead of
closing in on the last feasible value.

Because coordinates are distinct and `m <= n`, `d = 1` always succeeds, so the
search has a floor to land on. The sweep starts from `count = 1` because the
leftmost slot already holds a marker, and `m = 2` needs no special case: the
sweep simply returns the whole span when the two extremes are the right seats.
For `slots = [1,2,6,7,9]` and `m = 3`, `d = 3` seats markers at 1, 6, 9 while
`d = 4` runs out of slots, so the answer is 3.

**Complexity:** `O(n log n + n log D)` time, `O(n)` space, where `D` is the
span from the smallest to the largest coordinate.
