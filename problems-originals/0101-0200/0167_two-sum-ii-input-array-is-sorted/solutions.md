# Solutions — Two Sum II - Input Array Is Sorted

## Converging Two Pointers

Sorted order lets two pointers start at the ends and close in. If the current pair sums below the target, the left value is finished: pairing it with anything smaller than the current right element would only lower the sum further, so no unseen partner can rescue it and the left pointer advances. Symmetrically, a sum above the target retires the right value, since pairing it with anything larger than the current left element only raises the sum.

Each step therefore discards one element with a proof that it cannot belong to the answer pair, and the window shrinks by one until the surviving pair sums exactly to the target. Because the tests guarantee exactly one solution, the pointers cannot skip past it — every discarded element is certified irrelevant before it leaves the window — and the loop returns the two positions incremented to the 1-based indices the problem expects.

Compared with the hash-map approach, the sorted structure replaces O(n) auxiliary memory with two integer indices, satisfying the constant-space requirement; the fallback empty return is unreachable under the uniqueness promise but keeps the function total.

**Complexity:** `O(n)` time, `O(1)` space.
