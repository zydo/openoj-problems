# Solutions — A Fixed Menu Of Prefix Flips

## Permutation BFS

The state space holds at most `8!` permutations, so a breadth-first search
over actual arrays stays small. Start from the input and treat every allowed
flip of the first `x` entries from `lengths` as a unit-cost edge.

The first time the sorted permutation comes off the queue, its distance is
the answer. If the queue empties first, no sequence of allowed flips sorts
the array.

**Complexity:** `O(n! * n * |lengths|)` time, `O(n!)` space.
