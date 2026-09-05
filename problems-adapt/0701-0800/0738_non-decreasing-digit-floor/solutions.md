# Solutions — Non-Decreasing Digit Floor

## Decrement at the first break, trail with nines

The answer keeps as much of `n`'s left side as it can. Scanning the digit
string left to right, everything before the first position where a digit
exceeds its right neighbor is already non-decreasing, so the repair starts
exactly there: that digit must come down by one, and every position after
it is then free — filling them with nines makes the result as large as it
can be while staying at or below `n`. If no such position exists, `n`
already qualifies and is its own answer.

Decrementing in place needs one care. The offending digit may sit at the
right end of a plateau of equals, and subtracting one there would leave its
left neighbor bigger than it, so the repair first slides left across the
plateau to its first member. The slide costs nothing — every digit it
passes is the same value — and the digit just before the plateau is
strictly smaller (the prefix was non-decreasing and differs there), so the
decremented digit still stands above or equal to it. For `n = 2210` the
first break is the second 2 (it exceeds the 1 after it); the slide moves
back across the plateau to the first 2, and the fix turns `2210` into
`1999`. For `n = 20` there is no plateau to slide across, and the same
two moves produce `19`.

The decrement itself is always safe: a digit chosen for breaking is larger
than its right neighbor, so it is at least 1, and after losing one it is at
most 8, safely below the nines that follow. On a `d`-digit input the work
is one pass to find the break, one slide across the plateau, and one fill
of the tail — constant work per digit — with the digit string as the only
storage beyond a few indices.

**Complexity:** `O(d)` time, `O(d)` space.
