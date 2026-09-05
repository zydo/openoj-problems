# Tightest Multi-List Range

## Description

Each list in `nums` is sorted in non-decreasing order. Find a closed integer
range containing at least one value from every list.

Minimize the range width. If multiple ranges have equal width, return the one
with the smaller left endpoint.

### Example 1

```text
Input: nums = [[-8,-3,4],[0,5,9],[-2,6,12]]
Output: [4,6]
Explanation: The range contains 4 from the first list, 5 from the second, and 6 from the third.
```

### Example 2

```text
Input: nums = [[2,7],[0,2,8],[2,3]]
Output: [2,2]
Explanation: Every list contains 2.
```

### Constraints

- `nums.length == k`
- `1 <= k <= 3500`
- `1 <= nums[i].length <= 50`
- `-10^5 <= nums[i][j] <= 10^5`
- Every inner list is sorted in non-decreasing order.

## Hints

### Hint 1

Choose one current element per list; their minimum and maximum define a
covering candidate.

### Hint 2

Use a min-heap for the current elements and separately track their maximum.

### Hint 3

Advance only the list that supplied the minimum. Stop when that list has no
next element.

### Hint 4

Compare candidates by `(width, left endpoint)`.
