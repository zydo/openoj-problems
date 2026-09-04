# Cross Swaps To Level Two Rows

## Description

You are given two integer arrays `nums1` and `nums2`, both of length `n`.

Two moves are available, in any quantity and any order:

- A **within-row swap** picks two positions `i` and `j` and exchanges
  either `nums1[i]` with `nums1[j]`, or `nums2[i]` with `nums2[j]`.
  Reordering the inside of one row never costs anything.
- A **cross swap** picks a single position `i` and exchanges `nums1[i]`
  with `nums2[i]`. Every cross swap costs 1.

Return the least total cost that leaves both arrays holding the same value
in every position, or `-1` if no sequence of moves can get there.

### Example 1

```text
Input: nums1 = [1,2,2,3], nums2 = [2,1,3,2]
Output: 0
Explanation: The two rows already hold the same multiset of values
{1, 2, 2, 3}. nums1 needs no move at all, and free within-row swaps
reorder nums2 into [1, 2, 2, 3] to match it, so the cost is 0.
```

### Example 2

```text
Input: nums1 = [4,4,8], nums2 = [8,6,6]
Output: 1
Explanation: Both rows must end as {4, 6, 8}. One cross swap exchanges a
surplus 4 from nums1 with a surplus 6 from nums2, after which each row
holds {4, 6, 8} and free within-row swaps line the values up. The cost
is 1.
```

### Example 3

```text
Input: nums1 = [1,1,1,1], nums2 = [2,2,2,2]
Output: 2
Explanation: Each row must end with two 1s and two 2s. Every cross swap
trades one 1 for one 2, and nums1 has to give away two of its four 1s, so
two paid swaps are needed and none fewer suffices.
```

### Example 4

```text
Input: nums1 = [2,2,5], nums2 = [5,5,7]
Output: -1
Explanation: The value 5 appears three times across the two rows. Both
rows together hold an odd number of 5s, so they can never split it evenly
and the rows can never match.
```

### Constraints

- `2 <= n == nums1.length == nums2.length <= 8 * 10⁴`
- `1 <= nums1[i], nums2[i] <= 8 * 10⁴`

## Hints

### Hint 1

Because reordering inside a row is free, positions carry no information —
only how many copies of each value each row holds matters.

### Hint 2

Matching rows split every value's combined count into two equal halves, so
a value that occurs an odd number of times across both rows immediately
dooms the task.

### Hint 3

One paid swap can retire one excess copy in `nums1` and one excess copy in
`nums2` simultaneously, and the excesses of the two rows balance — the
answer is the summed frequency gap divided by four.
