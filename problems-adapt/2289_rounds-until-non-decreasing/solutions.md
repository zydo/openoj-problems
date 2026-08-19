# Solutions — Rounds Until Non-decreasing

## Monotonic stack of removal rounds

Doom is a left-looking property: an element dies eventually if and only
if something strictly larger stands to its left, and the elements that
live forever are exactly the running maxima from the left, ties included
(dominating requires a strict `>`). So the rounds need not be simulated
at all — compute each element's dying round and take the maximum.

Sweep left to right over `nums` with a stack of `(value, round)` pairs:
the elements whose fate is still pending. A new value `x` first pops
every entry with value `<= x` — each of those is gone before `x` meets
its own executioner — while remembering the latest round among them as
`cur`. If the stack still holds something afterwards, its top is the
nearest strictly larger survivor on the left; that entry outlives the
whole popped chain and kills `x` one round after the chain finishes
collapsing, so `x` gets `cur + 1`. An empty stack after the pops means
nothing on the left strictly exceeds `x`: it is immortal, round 0.
Popping on `<=` rather than `<` is where strictness lives — equal values
cannot remove one another, yet an equal entry still dies behind the same
larger blocker, so its round correctly feeds `cur`. The answer is the
largest round ever pushed.

![The example array with each element's removal round as a badge: the prefix maxima 9, 10, 12, and 12 live forever at round 0 while the others fade through rounds 1, 2, and 3, and the stack snapshot shows the second 4 popping the earlier 4 at round 2 before inheriting round 3 from the surviving 9.](figures/solution-removal-rounds.svg)

For `[6, 2, 2, 2]` the mechanics show plainly: each 2 dies one round
after the 2 before it, giving rounds 1, 2, 3 and the answer 3 — the
equal run cannot be cleared in a single sweep because a 2 never
dominates a 2. On an array already non-decreasing nothing ever gets a
round: every arrival pops the whole stack, the stack empties, and the
maximum stays 0.

Every element is pushed once and popped at most once, so the sweep is
linear.

**Complexity:** `O(n)` time, `O(n)` space.
