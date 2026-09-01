# Trim Down to a Zigzag

## Description

You are given an integer array `nums`. One move picks any single element
and lowers it by exactly `1`.

An array zigzags when its values alternate strictly up and down. Either
shape qualifies:

- the even positions are the local peaks:
  `A[0] > A[1] < A[2] > A[3] < A[4] > ...`
- or the odd positions are:
  `A[0] < A[1] > A[2] < A[3] > A[4] < ...`

Return the fewest moves needed to reshape `nums` into some zigzag array.

### Example 1

```text
Input: nums = [8,8,3,8,8]
Output: 2
Explanation: Lower each end from 8 to 7, giving [7,8,3,8,7], which rises
and falls alternately around the odd positions.
```

### Example 2

```text
Input: nums = [1,2,3,4,5]
Output: 4
Explanation: Sinking the odd positions works: 2 becomes 0 and 4 becomes 2,
producing [1,0,3,2,5].
```

### Example 3

```text
Input: nums = [10,10,10]
Output: 1
Explanation: Dropping the middle element to 9 leaves [10,9,10].
```

### Constraints

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 1000`

## Hints

### Hint 1

Handle the two shapes independently: one where the even positions must end
up as the local peaks, and one where the odd positions must.

### Hint 2

For a fixed shape, only the would-be valleys ever need lowering, and each
valley has to end strictly below both of its neighbors — so its cheapest
final value is `min(left neighbor, right neighbor) - 1`.
