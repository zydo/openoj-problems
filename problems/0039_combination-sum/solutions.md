# Solutions — Combination Sum

## Backtracking with a start index

Grow one combination at a time down a recursion that carries two things: `remaining`, the target minus the sum of what is already on the path, and `start`, the first candidate index still allowed. At each node the loop runs from `start` onward: a chosen candidate is pushed, and the recursion is entered with the **same** index `i` — not `i + 1` — because a candidate may be reused without limit, while everything before `i` stays forbidden. That index discipline pins every combination to nondecreasing candidate order, which is exactly what makes duplicates like `(2, 3, 2)` impossible while `(2, 2, 3)` is reachable once.

![The search tree for candidates [2,3,6,7] and target 7: paths keep their start index, so [2,2,3] is reachable while [2,3,2] never forms; dead ends and the two hits are marked.](figures/solution-backtracking-tree.svg)

The base case is `remaining == 0`: the path is a valid combination, and a copy of it is recorded. Candidates strictly larger than `remaining` are skipped before recursing, so a branch dies the moment it can no longer reach the target rather than one layer deeper. The skip is a `continue`, not a `break`, because the input is not assumed to be sorted — an oversized candidate says nothing about the ones after it. The shared `path` list is pushed and popped around each recursive call, so the working storage is one path, not one per branch.

With `n` candidates, target `T`, and smallest candidate `M`, the tree branches at most `n` ways to a depth of at most `T/M`, which bounds the total work (each hit also copies a path of at most that depth); the recursion stack and shared path likewise never exceed `T/M` entries, excluding the output.

**Complexity:** `O(n^(T/M))` time, `O(T/M)` space.
