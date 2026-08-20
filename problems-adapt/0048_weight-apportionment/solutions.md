# Solutions — Weight Apportionment

## Two-Pass Neighbor Sweep

One constraint mentions two neighbours at once, which is what makes a direct
greedy assignment awkward: fixing a position against its left neighbour can
break it against its right. Split the constraint in half and handle each half
in the direction it points.

Every position starts at `1`, the floor. The forward sweep looks only leftward:
when `scores[i]` beats `scores[i - 1]`, position `i` takes `weights[i - 1] + 1`.
That is the smallest weight that clears its left neighbour, and because the
prefix is already settled when `i` is reached, nothing earlier has to move. When
this sweep finishes, only rightward violations can be outstanding.

The backward sweep repairs those: when `scores[i]` beats `scores[i + 1]`,
position `i` needs at least `weights[i + 1] + 1`. Assigning that outright would
be a mistake, since it could lower a weight the forward sweep raised for a good
reason; taking `max(weights[i], weights[i + 1] + 1)` instead only ever pushes a
weight up. Raising a weight can never violate a "strictly greater" requirement
that was already met from the left, so the second sweep repairs the right side
without disturbing the left, and after it both halves hold.

The result is also minimal. A position at the top of a rise-then-fall ridge ends
at one more than the longer of the two monotone runs touching it, which is
precisely what the chain of strict inequalities forces; nowhere is a weight
larger than some chain demands. Summing the array is the answer.

Ties do nothing, since both comparisons are strict: in `[9,4,4,7,1]` the two
fours neither raise each other nor get raised, leaving `2, 1, 1, 2, 1`. And a
flat input like `[6,6,6,6]` never triggers either branch, so every position
keeps its initial `1`.

**Complexity:** `O(n)` time, `O(n)` space.
