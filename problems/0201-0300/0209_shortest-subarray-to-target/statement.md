# Shortest Subarray To Target

## Description

You are given an array `nums` of positive integers and a positive integer
`target`. Find the length of the shortest contiguous run of elements whose
sum is at least `target`, and return it.

If every run falls short — including when a single element already reaches
`target`, that run has length 1 — return `0`. The empty run never counts.

### Example 1

```text
Input: target = 9, nums = [2,5,1,3,6,2]
Output: 2
Explanation: The run [3,6] sums to exactly 9. No single element reaches 9,
so nothing shorter works.
```

### Example 2

```text
Input: target = 15, nums = [3,15,2]
Output: 1
Explanation: The element 15 on its own meets the target.
```

### Example 3

```text
Input: target = 50, nums = [4,4,4,4]
Output: 0
Explanation: The whole array sums to 16, so no run reaches 50.
```

### Constraints

- `1 <= target <= 10⁹`
- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁴`

### Follow-up

A single left-to-right pass solves this. Can you also find an
`O(n log n)` route, and say why it is the one that survives when the
elements are no longer all positive?

## Hints

### Hint 1

With every element positive, lengthening a run can only raise its sum and
shortening can only lower it — that one-way behavior is what a moving
window needs.

### Hint 2

Advance the right end until the window's sum reaches `target`, then pull the
left end in as far as the sum allows.

### Hint 3

Remember the narrowest window you ever see. Should the entire array never
add up to `target`, report 0.
