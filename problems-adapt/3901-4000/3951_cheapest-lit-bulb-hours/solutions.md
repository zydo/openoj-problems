# Solutions — Cheapest Lit Bulb-Hours

## Constant bulb count and interval union

Each lamp lights itself and up to two adjacent positions, so the smallest
number of lamps needed to cover `brightness` positions is
`ceil(brightness / 3)`. This is independent of time.

Merge all time windows to find the total number of demanded integer time
units. The answer is the lamp count multiplied by that demanded length.

**Complexity:** `O(n log n)` time for interval sorting, `O(n)` space.
