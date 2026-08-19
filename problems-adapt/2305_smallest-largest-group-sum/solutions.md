# Solutions — Smallest Largest Group Sum

## Backtracking with symmetry and bound pruning

Eight entries at most and eight groups at most: the space of assignments
is small enough to walk outright. Hand the entries out one by one,
trying every group as the destination of the current entry. The state is
the vector of group sums together with the running maximum; once the
last entry is placed, that maximum *is* the cost of the grouping at this
leaf, and the answer is the cheapest leaf reached.

Two cuts keep the tree small. Bound pruning: the running maximum never
shrinks as more entries arrive, so a branch whose maximum already
reaches the best complete grouping found so far is dropped on the spot —
nothing below it can win. Symmetry breaking: two groups whose sums are
currently equal are interchangeable, since handing the entry to either
produces isomorphic subtrees; a per-level set of already-tried sums
guarantees each distinct sum is attempted once. That is strongest at the
top of the tree, where several groups still sit at 0 — the raw `k^8`
branching collapses before it ever forms.

No memoization is needed: the minimized quantity is a final maximum, not
a value that composes over states, and the pruned tree is tiny at these
sizes. Note `k` may match the number of entries — then one group per
entry is available and the answer is at most `max(nums)`, as empty
groups never raise the maximum; and the initial best of infinity makes
certain the first complete leaf always improves on it.

**Complexity:** `O(k^n)` time in the worst case, heavily pruned;
`O(n + k)` space for the recursion stack, the group sums, and the
tried-sum sets.
