# Count Longest Increasing Subsequences

## Description

You are given an integer array `nums`. Report how many different
increasing subsequences of `nums` share the maximum possible length.

A subsequence keeps some of the array's elements in their original order
while skipping any number of the others; "increasing" here means strictly
increasing, so equal neighboring values never both belong to the same one.
Two subsequences count separately even when they land on the same values,
as long as they are built from different positions in `nums`.

### Example 1

```text
Input: nums = [3,1,4,1,5,9,2,6]
Output: 4
Explanation: The longest increasing subsequences all have length 4 — for
instance [3,4,5,9] (indices 0,2,4,5) and [1,4,5,6] (indices 1,2,4,7) — and
four of them exist in total.
```

### Example 2

```text
Input: nums = [7,7,7,7]
Output: 4
Explanation: No value strictly exceeds another, so every increasing
subsequence has length 1 — each of the four elements forms its own — and
none can be extended.
```

### Constraints

- `1 <= nums.length <= 2000`
- `-10⁶ <= nums[i] <= 10⁶`
- The answer is guaranteed to fit inside a 32-bit integer.
