# Solutions — The Wildcard Walk's Farthest Reach

## Net movement plus wildcards

Combine opposite moves: `x = count('R') - count('L')` and
`y = count('U') - count('D')`. Each free step can be assigned to the axis
that already contributes more to the absolute distance, increasing the final
distance by exactly one.

The answer is therefore `abs(x) + abs(y) + count('_')`.

**Complexity:** `O(n)` time, `O(1)` space.
