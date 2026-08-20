# Longest Constant-Step Subsequence

## Description

You are given an integer array `nums`.

Call a sequence **constant-step** when every consecutive pair differs by the
same amount — `seq[i + 1] - seq[i]` is identical for all `i`. A subsequence of
`nums` keeps some of its entries, in their original order, skipping the rest.

Return the length of the longest constant-step subsequence of `nums`.

### Example 1

```text
Input: nums = [5,10,15,20]
Output: 4
Explanation: Every neighbor differs by 5, so the whole array already qualifies.
```

### Example 2

```text
Input: nums = [7,12,3,8,13]
Output: 3
Explanation: Skipping 7 and 12 leaves [3,8,13], whose steps are all 5.
Nothing longer has a uniform step.
```

### Example 3

```text
Input: nums = [16,12,8,3,4]
Output: 4
Explanation: The step may be negative: [16,12,8,4] falls by 4 each time.
```

### Constraints

- `2 <= nums.length <= 1000`
- `0 <= nums[i] <= 500`

## Hints

### Hint 1

A chain that ends at index `i` is not pinned down by its endpoint alone — the
step it has been following matters too. Track, per endpoint, the best length
for each step value.

### Hint 2

Arriving at `nums[i]`, consider every earlier `j`: the step `d = nums[i] - nums[j]`
extends the best chain that ended at `j` following that same `d`.

### Hint 3

A per-index map from step to length keeps the table sparse, and the answer is
the largest length recorded anywhere.
