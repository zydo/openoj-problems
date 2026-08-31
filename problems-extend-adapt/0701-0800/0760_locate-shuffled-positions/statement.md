# Locate Shuffled Positions

## Description

You are given two integer arrays `nums1` and `nums2` of the same length,
where `nums2` holds exactly the same multiset of values as `nums1` in some
shuffled order (duplicates are allowed on either side).

Build an array `mapping` of the same length where `mapping[i]` is an index
into `nums2` such that `nums2[mapping[i]] == nums1[i]` — that is, `mapping[i]`
tells you where the `i`-th element of `nums1` landed after the shuffle.

A value that occurs more than once has more than one valid position it could
map to, so fix one deterministic rule: scan `nums1` left to right, and let
each element claim the smallest index in `nums2` holding that value that no
earlier element of `nums1` has already claimed.

### Example 1

```text
Input: nums1 = [11,23,7,19], nums2 = [19,7,23,11]
Output: [3,2,1,0]
Explanation: Every value is unique, so each element of nums1 simply maps to
its one occurrence in nums2 — 11 is at index 3, 23 is at index 2, and so on.
```

### Example 2

```text
Input: nums1 = [4,4,9], nums2 = [9,4,4]
Output: [1,2,0]
Explanation: nums2 holds two 4s, at indices 1 and 2. The first 4 in nums1
claims the smaller of those indices (1), and the second 4 claims the
remaining one (2); the 9 has only one position, index 0.
```

### Constraints

- `1 <= nums1.length <= 100`
- `nums2.length == nums1.length`
- `0 <= nums1[i], nums2[i] <= 10⁵`
- `nums2` is a shuffled rearrangement of `nums1`.

## Hints

### Hint 1

Precompute, for each value, the sorted list of indices where it occurs in
`nums2`. Then process `nums1` left to right, handing each element the next
unused index from its value's list — a small queue per value does exactly
this in one pass.
