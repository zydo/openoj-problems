# Solutions — Two Sum II - Input Array Is Sorted

## Two pointers converging from both ends

The array is already sorted, so the smallest and the largest values can speak for every candidate pair at once: their sum is the largest sum any pair involving `numbers[low]` can reach and the smallest sum any pair involving `numbers[high]` can reach. Comparing that one sum against `target` therefore rules out an entire row of the pair table — if `numbers[low] + numbers[high]` is too small, no partner can rescue `numbers[low]`; if too large, none can rescue `numbers[high]`. And since the walk keeps only two indexes, it satisfies the statement's requirement of constant extra space, which rules out the hash map that solved the unsorted version.

The code sets `low` to the first index and `high` to the last. Each round adds the two values: on a match it returns `[low + 1, high + 1]`, incrementing both because the statement's array is 1-indexed. Otherwise the too-small side steps `low` forward, or the too-large side steps `high` backward, the window shrinks by one, and the loop cannot run past the guaranteed solution. Duplicate values need no special handling — equal neighbors simply sit between the endpoints and are skipped or consumed exactly like any other value.

Every step discards an index with a one-line monotonicity argument, so the answer, which the tests guarantee is unique, is never thrown away, and the walk takes at most `n - 1` rounds.

**Complexity:** `O(n)` time, `O(1)` space.
