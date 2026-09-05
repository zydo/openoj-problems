# Solutions — Blind Spots on the Grid

## Paint every line of sight, count what is left

Walls and guards first occupy their cells; such a cell can never be
a blind spot. Each guard's line of sight walks outward in the four
cardinal directions, marking every cell it reaches as watched, and stops
at the first wall or fellow guard — both block the view.

Once every guard has painted its four rays, a blind spot is exactly a cell
that was never written to, so counting the untouched cells yields the
answer.

**Complexity:** `O(m·n + g·(m + n))` time, `O(m·n)` space, with `g`
guards.
