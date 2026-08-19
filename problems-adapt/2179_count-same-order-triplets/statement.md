# Count Same-Order Triplets

## Description

You are given two arrays `nums1` and `nums2`, each of length `n`, and each a
permutation of the values `0` through `n - 1`.

Three distinct values form a same-order triplet when one order governs both
arrays: reading `nums1` left to right meets them as `x`, then `y`, then `z`,
and reading `nums2` left to right meets them in that same sequence.

Return the number of same-order triplets.

### Example 1

```text
Input: nums1 = [1,3,0,2], nums2 = [0,2,1,3]
Output: 0
Explanation: In nums1 the values 0 and 2 occupy the last two positions, so
every triplet there reads (1, ·, ·) or (3, ·, ·). But nums2 places 1
next-to-last and 3 last, so neither can be followed by two values there.
No triplet survives both arrays.
```

### Example 2

```text
Input: nums1 = [2,4,0,1,3], nums2 = [4,0,2,3,1]
Output: 2
Explanation: In nums1 the values 4 and 0 sit at positions 1 and 2, so a
triplet reading (4, 0, ·) needs its closing value after position 2 — that
leaves 1 or 3, since 2 comes earlier at position 0. In nums2, 4 is first
and 0 second, so both (4, 0, 1) and (4, 0, 3) read in exactly that order
there too. These two triplets qualify; no others do.
```

### Example 3

```text
Input: nums1 = [0,5,2,4,1,3], nums2 = [2,0,4,1,5,3]
Output: 8
Explanation: Count by middle value. With 4 in the middle, the values before
it in both arrays are {0,2} and after it {1,3}, giving 2 · 2 = 4 triplets.
With 5 in the middle: {0} before, {3} after, 1 triplet. With 1 in the
middle: {0,2,4} before, {3} after, 3 triplets. Every other middle value
contributes nothing, for a total of 8.
```

### Constraints

- `n == nums1.length == nums2.length`
- `3 <= n <= 10^5`
- `0 <= nums1[i], nums2[i] <= n - 1`
- `nums1` and `nums2` are each permutations of `[0, 1, ..., n - 1]`.

## Hints

### Hint 1

Fixing the two outer values leaves the middle determined by nothing — fix the
middle instead. For a middle value `y`, which two counts decide how many
triplets have `y` in the middle?

### Hint 2

The counts are: values preceding `y` in both arrays, and values following `y`
in both arrays; their product is `y`'s contribution. How might you count
common predecessors while sweeping one array left to right?

### Hint 3

Sweep `nums1` and keep a Fenwick tree indexed by `nums2` position, marking
each value as it passes. A prefix query below `y`'s `nums2` position counts
the common predecessors; common successors follow by subtraction from the
values that follow `y` in `nums2`.
