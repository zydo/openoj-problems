# Merge the Smallest Pair II

## Description

This task is the large-input version of "Merge the Smallest Pair". You
are given an integer array `nums`, and one operation works like this:

- Find the pair of adjacent elements with the smallest sum. If several
  pairs tie, take the leftmost one.
- Remove that pair and put their sum in its place.

Every operation shrinks the array by one element. Apply operations until
the array is non-decreasing — each element is greater than or equal to
the one before it — and return how many operations were performed.

### Example 1

```text
Input: nums = [4,-2,5,-1,3]
Output: 4
Explanation:
The pair sums are 2, 3, 4, 2; (4,-2) and (-1,3) tie at 2, so the
leftmost merges: nums = [2,5,-1,3]. Next (-1,3) merges into 2:
nums = [2,5,2]. Then the two pairs tie at 7 and the leftmost merges:
nums = [7,2]. Finally nums = [9]. That is four operations.
```

### Example 2

```text
Input: nums = [3,-1,-1,-1,2]
Output: 4
Explanation:
The pairs (-1,-1) tie for the smallest sum of -2 and the leftmost
merges: nums = [3,-2,-1,2]. Then (-2,-1) merges into -3:
nums = [3,-3,2]. Next (-3,2) merges into -1: nums = [3,-1], and the
last merge leaves nums = [2]. Four operations in total.
```

### Example 3

```text
Input: nums = [8,8,9]
Output: 0
Explanation:
The array is already non-decreasing, so no operation happens.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `-10⁹ <= nums[i] <= 10⁹`

## Hints

### Hint 1

A full rescan per merge is too slow at this size. Keep the surviving
elements in a doubly linked list so neighbours are known in constant
time.

### Hint 2

Keep a min-heap of candidate pairs keyed by their sum; a heap entry is
stale once either of its elements has been merged away, so discard stale
entries when they surface instead of erasing them eagerly.

### Hint 3

Maintain a running count of adjacent descents. It changes only around
the merged pair, and the simulation stops the moment the count reaches
zero. Sums can reach `n · 10⁹`, so use 64-bit integers.
