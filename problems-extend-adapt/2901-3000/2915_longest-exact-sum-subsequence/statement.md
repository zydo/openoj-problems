# Longest Exact-Sum Subsequence

## Description

Given a 0-indexed integer array `nums` and an integer `target`, pick
elements out of `nums` while keeping their original order and dropping
whatever you like — the kept elements form a subsequence.

Return the length of the longest subsequence whose elements total exactly
`target`, or `-1` when no selection of elements reaches that total.

### Example 1

```text
Input: nums = [2,3,4,5], target = 9
Output: 3
Explanation: The selections summing to 9 are [4,5] and [2,3,4]. The
longest of them, [2,3,4], holds 3 elements, so the answer is 3.
```

### Example 2

```text
Input: nums = [1,2,3,4,6], target = 10
Output: 4
Explanation: The selections summing to 10 are [4,6], [1,3,6], and
[1,2,3,4]. The longest holds 4 elements, so the answer is 4.
```

### Example 3

```text
Input: nums = [2,4,6], target = 5
Output: -1
Explanation: Every element is even, so no selection can total the odd
value 5.
```

### Constraints

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 1000`
- `1 <= target <= 1000`

## Hints

### Hint 1

Think of each element as an item you either take or leave; the order it
appeared in never affects the sum.

### Hint 2

Track, for every achievable sum up to `target`, the largest number of
elements that can produce it, and extend that table one element at a time.

### Hint 3

When folding in a new element, iterate the sums from high to low so the
element cannot be counted twice in one selection.
