# Smallest Window Whose OR Reaches k I

## Description

You are given an array `nums` of non-negative integers and an integer
`k`.

Call a subarray of `nums` strong when the bitwise OR of all of its
elements is at least `k`. Return the length of the shortest strong
subarray, or -1 if no subarray of `nums` is strong.

### Example 1

```text
Input: nums = [5,1,2], k = 4
Output: 1
Explanation: the one-element subarray [5] has OR value 5, which already
reaches 4, so no longer piece is needed.
```

### Example 2

```text
Input: nums = [1,2,4], k = 7
Output: 3
Explanation: each of bits 0, 1, and 2 lives in a different element, so
only the full array [1,2,4] gathers an OR of 7 — nothing shorter gets
there.
```

### Example 3

```text
Input: nums = [3,0,3], k = 0
Output: 1
Explanation: a target of 0 is met by every non-empty piece, even a lone
zero, so the shortest possible length is the answer.
```

### Example 4

```text
Input: nums = [4,2], k = 8
Output: -1
Explanation: the largest OR any subarray can assemble here is 4 | 2 = 6,
which never reaches 8, so the answer is -1.
```

### Constraints

- `1 <= nums.length <= 50`
- `0 <= nums[i] <= 50`
- `0 <= k < 64`

## Hints

### Hint 1

At most 50 elements means there is plenty of room to inspect every
subarray directly.

### Hint 2

Fix the right endpoint and sweep the left edge backwards, folding each
element into a running OR. The first left edge where the running OR
reaches `k` marks the shortest strong subarray ending at that right
endpoint.
