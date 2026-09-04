# Duplicate and Missing Pair

## Description

A collection was meant to hold every integer from `1` to `n` exactly
once. A single mistake corrupted it: one value got written twice,
silently overwriting the slot that should have held a different value,
so that value never made it in at all.

You are given the array `nums`, the corrupted collection as it stands
now, with `n` equal to its length. Identify the value that appears
twice and the value that never appears, and return them as an array
`[duplicate, missing]`.

### Example 1

```text
Input: nums = [3,1,3,4]
Output: [3,2]
```

### Example 2

```text
Input: nums = [2,2]
Output: [2,1]
```

### Constraints

- `2 <= nums.length <= 10⁴`
- `1 <= nums[i] <= 10⁴`
