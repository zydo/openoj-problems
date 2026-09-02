# Cheapest Three-Way Split

## Description

You are given an integer array `nums` of length `n`.

A piece's cost is the value it opens with: the cost of `[1,2,3]` is 1 and
the cost of `[3,4,1]` is 3.

Cut `nums` into exactly three non-empty contiguous pieces — every element
ends up in exactly one piece, and the pieces keep their left-to-right
order. Return the smallest total the three costs can add up to.

### Example 1

```text
Input: nums = [4,2,9,1,7]
Output: 7
Explanation: Cutting into [4], [2,9], and [1,7] totals 4 + 2 + 1 = 7.
Cutting into [4], [2,9,1], and [7] instead totals 4 + 2 + 7 = 13, and
leaving the array whole is not allowed.
```

### Example 2

```text
Input: nums = [8,8,8]
Output: 24
Explanation: An array of length 3 forces three singleton pieces, so the
total is 8 + 8 + 8 = 24 no matter how the cuts are described.
```

### Example 3

```text
Input: nums = [6,5,9,2,2,4]
Output: 10
Explanation: Cutting into [6,5,9], [2], and [2,4] totals 6 + 2 + 2 = 10.
Every other placement of the two cuts produces a larger total, so 10 is
the answer.
```

### Constraints

- `3 <= n <= 50`
- `1 <= nums[i] <= 50`
