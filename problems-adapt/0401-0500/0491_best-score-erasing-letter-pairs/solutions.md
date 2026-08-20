# Solutions — Best Score Erasing Letter Pairs

## Greedy Two-Pass Stack Removal

Emptying the pricier pair type first is always safe. Exchange argument: when
an `"ab"` and a `"ba"` contend for the same letter — an `a` or `b` that could
serve either pattern — banking the pricier one first can never cost points,
because the leftover letter still stands ready to complete the other pattern
later. So the two passes are ordered by comparing `x` and `y`: clear the
higher-scoring pair type first, then sweep the survivors for the other.

Each pass is one left-to-right scan with a stack, the classic
adjacent-pair-removal pattern: when the incoming character `c` equals
`second` and the stack top equals `first`, the pair vanishes — pop the top and
add `points`; anything else pushes. What remains after the scan is exactly the
input with every non-overlapping copy of that pattern greedily removed, and
joining the stack yields the string handed to the second pass. In
`"aababbab"` with `x = 4, y = 5` the first pass collects the two `"ba"` pairs
and leaves `"aabb"`, from which the second pass lifts both `"ab"` pairs —
18 points in total.

After the first pass no copy of the first pattern remains, so the second pass
harvests everything the other pattern still offers. Foreign letters pass
through both stacks unmodified and never interact — in `"cbbaacb"` the two
`c`s are spectators while two `"ba"` pairs score. Every character is pushed
and popped at most once per pass, and the final score is the sum of the two
passes.

**Complexity:** `O(n)` time, `O(n)` space.
