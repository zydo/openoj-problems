# Longest Rising Subsequence Sharing A Bit

## Description

You are given an integer array `nums`.

Pick some elements of `nums` without changing their order so that the picked
values increase strictly from left to right, and so that their bitwise AND
is non-zero — equivalently, some bit position is set in every picked value.

Return the greatest number of elements such a pick can contain. If no pick
qualifies, return `0`.

### Example 1

```text
Input: nums = [9,12,4,19,8,25]
Output: 3
Explanation: The pick [9, 19, 25] rises strictly and every value has bit 0
set, so its bitwise AND is 9 AND 19 AND 25 = 1, which is non-zero. No
longer pick has a non-zero AND.
```

### Example 2

```text
Input: nums = [1,2,3,0,0,0]
Output: 2
Explanation: The pick [1, 3] rises and ANDs to 1. Picking all of 1, 2, 3
fails because 1 AND 2 AND 3 = 0, and the zeros can never join a pick since
0 shares no bit with anything.
```

### Example 3

```text
Input: nums = [7,7,14,28]
Output: 3
Explanation: The pick [7, 14, 28] rises strictly and ANDs to 4. Equal
values cannot both be picked, so the two 7s contribute at most one
element.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `0 <= nums[i] <= 10⁹`

## Hints

### Hint 1

A non-zero AND means the picked values all share at least one bit. So a
qualifying pick lives entirely inside the elements that carry one fixed
bit.

### Hint 2

Fix a bit, keep the elements that have it in their original order, and find
the longest strictly increasing subsequence of that reduced list — the
patience-tails array with a binary search does this in one pass.

### Hint 3

The answer is the best result over all bit positions, and it is 0 when no
element has any bit set.
