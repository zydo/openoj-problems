# Merge Equal Neighbors

## Description

You are given a 0-indexed array `nums` of `n` non-negative integers.

Apply a left-to-right sweep over the adjacent pairs: for each index `i`
from `0` to `n - 2`, if `nums[i]` and `nums[i + 1]` are equal, double
`nums[i]` and set `nums[i + 1]` to `0`. Otherwise the pair is left
untouched.

When the sweep is finished, move every `0` to the end of the array while
keeping the relative order of the non-zero values, and return the
resulting array.

The sweep is applied sequentially, one pair after another, so a value that
was just doubled is never revisited, but its zeroed neighbor may
participate in the very next comparison.

### Example 1

```text
Input: nums = [0,0,1,1,1,2]
Output: [2,1,2,0,0,0]
Explanation: At i = 0 both entries are 0, and doubling the left one
keeps it 0, so the pair is unchanged. At i = 2 the pair (1, 1) becomes
(2, 0), and at i = 3 the pair (0, 1) is left alone. Shifting the zeros to
the end gives [2,1,2,0,0,0].
```

### Example 2

```text
Input: nums = [1,1,2,2]
Output: [2,4,0,0]
Explanation: At i = 0 the pair (1, 1) becomes (2, 0). At i = 2 the pair
(2, 2) becomes (4, 0). Shifting the zeros to the end gives [2,4,0,0].
```

### Example 3

```text
Input: nums = [3,3,3]
Output: [6,3,0]
Explanation: Only the first pair (3, 3) merges, into (6, 0); the second
pair is then (0, 3), which is left untouched. Shifting the zero to the
end gives [6,3,0].
```

### Constraints

- `2 <= nums.length <= 2000`
- `0 <= nums[i] <= 1000`

## Hints

### Hint 1

Simulate the sweep in a single pass, doubling an element exactly when it
equals its right neighbor and zeroing that neighbor.

### Hint 2

After the sweep, compact the non-zero values to the front with a write
pointer and pad the remaining slots with zeros.
