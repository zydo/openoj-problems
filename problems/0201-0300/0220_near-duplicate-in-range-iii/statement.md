# Near Duplicate in Range III

## Description

You are given an integer array `nums` and two integers `indexDiff` and
`valueDiff`. Determine whether there exist two distinct indices `i` and
`j` such that both of the following hold at once:

- the indices are close together: `abs(i - j) <= indexDiff`
- the values are close together: `abs(nums[i] - nums[j]) <= valueDiff`

Return `true` if such a pair exists, `false` otherwise.

### Example 1

```text
Input: nums = [4,1,6,4], indexDiff = 3, valueDiff = 0
Output: true
Explanation: Indices 0 and 3 hold the same value 4 (difference 0, at
most valueDiff), and abs(0 - 3) = 3 is at most indexDiff.
```

### Example 2

```text
Input: nums = [8,2,9,2,7], indexDiff = 2, valueDiff = 1
Output: true
Explanation: Indices 1 and 3 both hold 2, so their value gap is 0 and
their index gap is 2 — both within the allowed limits.
```

### Example 3

```text
Input: nums = [2,9,3,15,2], indexDiff = 1, valueDiff = 4
Output: false
Explanation: Only immediately adjacent indices satisfy indexDiff = 1, and
none of those adjacent pairs — (2,9), (9,3), (3,15), (15,2) — differ by
4 or less in value.
```

### Constraints

- `2 <= nums.length <= 10⁵`
- `-10⁹ <= nums[i] <= 10⁹`
- `1 <= indexDiff <= nums.length`
- `0 <= valueDiff <= 10⁹`
