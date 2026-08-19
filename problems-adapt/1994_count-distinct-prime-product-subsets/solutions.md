# Solutions — Count Distinct-Prime Product Subsets

## Knapsack over prime masks

A product factors into distinct primes exactly when it is square-free and
above 1, and since values stop at 30, everything happens inside the ten
primes 2 … 29. Map each value to the 10-bit mask of primes it contains.
Values divisible by a square — 4, 8, 9, 12, 18, 20, … — get no mask at all:
they can never sit in a qualifying choice, because their own prime repeats.
Positions, not values, distinguish choices, so the array first collapses
into a frequency table over the handful of values that survive.

The heart is a 0/1-knapsack over masks. Let `dp[mask]` count the ways to
pick positions whose product uses exactly the prime set `mask`. Process one
value at a time — say it has frequency `f` and prime mask `m` — sweeping
existing states in *decreasing* mask order so the value cannot be picked
twice within one choice. A state `prev` with `prev & m == 0` (no shared
prime) flows into `prev | m`, weighted by `f`: each of the `f`
interchangeable copies is its own pick. The value 1 has an empty mask and
is deliberately left out of this phase.

Walk `nums = [1, 2, 3, 10]`. Frequencies: one each of 1, 2, 3, 10, with
masks `{2}`, `{3}`, `{2, 5}`. After 2: `dp[{2}] = 1`. After 3:
`dp[{3}] = 1`, `dp[{2,3}] = 1`. After 10: from `{}` → `dp[{2,5}] = 1`, from
`{3}` → `dp[{2,3,5}] = 1`; the states sharing prime 2 are blocked. Five
non-empty masks hold one way each, and the single 1 doubles them:
`5 · 2 = 10`.

Summing every non-empty mask at the end enforces "at least one prime". The
`k` copies of 1 then multiply the total by `2^k`, since each is free to ride
along or not without moving the product. The mask space is at most
`30 · 2^10`, so the sweep is tiny next to the single pass over the input.

**Complexity:** `O(n + V · 2^P)` time, `O(2^P)` space.
