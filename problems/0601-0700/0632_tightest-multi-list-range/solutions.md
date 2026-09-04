# Solutions — Tightest Multi-List Range

## Min-Heap K-Way Merge

Maintain one selected element from every list. Their minimum and maximum form
a covering range. Seed a min-heap with each list's first value and track the
largest seeded value.

At each step, compare `[heap minimum, current maximum]` with the best range,
using the left endpoint to break equal-width ties. Then advance the list that
provided the minimum and insert its next value, updating the maximum if
needed. Advancing any other list cannot raise the current minimum, so it cannot
produce a tighter next candidate.

When the minimum's list is exhausted, no later selection can include that list
while moving the lower endpoint forward. The search is therefore complete.
Each value enters and leaves a heap containing at most one item per list.

**Complexity:** `O(N log k)` time and `O(k)` auxiliary space, where `N` is the
total number of values.
