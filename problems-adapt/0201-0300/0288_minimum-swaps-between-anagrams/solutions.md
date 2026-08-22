# Solutions — Minimum Swaps Between Anagrams

## BFS fixing the leftmost mismatch

Each string arrangement is a state and each swap is an unweighted edge, so
breadth-first search from `startText` yields the minimum operation count. A
naive state would have too many neighbors, but an optimality-preserving rule
greatly narrows the choices.

For the current arrangement, locate the first index `i` that differs from
`targetText`. Any successful sequence must eventually place
`targetText[i]` there. Try only later indices `j` holding that required
character. Also require position `j` to be currently incorrect, since removing
a correct character would create a mismatch and cannot improve a shortest
sequence.

Swap `i` with each qualifying `j` to produce neighboring arrangements, and
enqueue only states not seen before. Fixing the first mismatch immediately is
safe: the same exchange can be moved ahead of unrelated later swaps without
increasing their number. Thus at least one shortest path remains in the pruned
search.

The anagram guarantee makes the target reachable. The first time it is
dequeued, breadth-first order proves that its depth is minimal.

**Complexity:** `O(S · L²)` time and `O(S · L)` space, where `L` is the string
length and `S` is the number of explored arrangements.
