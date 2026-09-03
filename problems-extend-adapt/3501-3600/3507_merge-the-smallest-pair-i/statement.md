# Merge the Smallest Pair I

## Description

You are given an integer array `nums`. One operation on the array works
like this:

- Look at every pair of adjacent elements and find the pair whose sum is
  smallest. If several pairs share that smallest sum, take the leftmost
  of them.
- Delete both elements of that pair and insert their sum where the pair
  used to be.

Each operation shrinks the array by one element. Keep applying
operations until the array is non-decreasing — every element is greater
than or equal to the one before it — and report how many operations that
took.

### Example 1

```text
Input: nums = [4,1,3,2]
Output: 2
Explanation:
Adjacent pair sums are 5, 4, 5, so (1,3) merges into 4: nums = [4,4,2].
Now the sums are 8 and 6, so (4,2) merges into 6: nums = [4,6].
The array is non-decreasing after two operations.
```

### Example 2

```text
Input: nums = [2,4,2,4]
Output: 2
Explanation:
All three adjacent pairs sum to 6, so the leftmost pair (2,4) merges:
nums = [6,2,4]. There the pair (2,4) has the smaller sum of 6 versus 8,
so it merges: nums = [6,6], which is non-decreasing.
```

### Example 3

```text
Input: nums = [-1,-5,2]
Output: 1
Explanation:
The pair (-1,-5) sums to -6, the smallest possible, so it merges into
-6: nums = [-6,2], already non-decreasing after one operation.
```

### Constraints

- `1 <= nums.length <= 50`
- `-1000 <= nums[i] <= 1000`

## Hints

### Hint 1

No decision is ever made: the pair to merge next is fully determined by
the current array. Simply perform the merge repeatedly and count how
many rounds pass before the array stops having a descent.
