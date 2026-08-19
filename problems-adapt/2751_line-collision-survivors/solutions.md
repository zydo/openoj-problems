# Solutions — Line Collision Survivors

## Sorted Stack Simulation

Sorting the robots by position lines every meeting up in the order it happens,
which turns the whole timeline into one left-to-right sweep. Right-movers met
along the way cannot hit anything yet, so they simply wait — on a stack. A
left-mover is the only robot with work to do: everyone that could possibly
collide with it is a right-mover sitting on that stack, so it duels the top
until one side gives out.

A duel is the collision rule applied once per round: a strictly weaker top is
popped while the challenger spends one health and turns to the next top; a
strictly stronger top wins outright, keeping its direction with one less
health; matching healths remove both robots. Should a left-mover clear every
right-mover on the stack, it joins the stack itself — nothing ahead of it is
moving toward it. Losses are written straight into `healths`, so any survivor
already holds its final value.

![Example 2 laid out on the line (R 11, R 7, L 7, L 5) with the stack as it
evolves: two pushes, an equal-health trade, and a duel won at 10.](figures/solution-stack-duels.svg)

For `[4,8,3,9]`, `[7,7,11,5]`, `"RLRL"` the sorted line is R 11 (pos 3), R 7
(pos 4), L 7 (pos 8), L 5 (pos 9). The two right-movers pile up; the first
left-mover trades its 7 against the stacked 7 and both vanish; the second dies
to the 11, which settles at 10.

The stack's final contents are exactly the survivors, yet the answer must be
reported in input order — so the code collects the stack indices into a set and
walks `range(n)` through it. After the sort, each robot enters and leaves the
stack at most once.

**Complexity:** `O(n log n)` time, `O(n)` space.
