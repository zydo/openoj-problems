# Solutions — Final Domino Orientations

## Two-pass force accumulation

Represent the net influence at every position by a signed number. During a
left-to-right pass, an `'R'` starts a rightward influence with magnitude `n`,
an `'L'` cancels it, and an unpushed position decreases the magnitude by one
without going below zero. Add these values to an array.

Repeat symmetrically from right to left. This time `'L'` starts an influence,
`'R'` blocks it, and each magnitude is subtracted from the same array. After
both scans, every entry is the difference between the nearest unblocked
rightward and leftward pushes.

A positive result means the rightward push arrives sooner, so the domino ends
as `'R'`. A negative result selects `'L'`. Zero represents either equal arrival
times or no arriving force, both of which leave the domino upright as `'.'`.
The initially pushed positions follow the same calculation and therefore need
no special output handling.

Each pass touches every position once, and a final pass converts force signs
back into characters.

**Complexity:** `O(n)` time and `O(n)` space.
