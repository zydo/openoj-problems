# Suffix Flips To All Ones II

## Description

You are handed a binary array `nums`, every entry 0 or 1. A single
operation picks an index `i` and flips the whole suffix from position
`i` through the end of the array: each entry in that stretch swaps —
0 becomes 1, 1 becomes 0.

Return the fewest operations that leave the array filled with 1s.

### Example 1

```text
Input: nums = [1,0,1,0]
Output: 3
Explanation:
Flip at i = 1, giving [1,1,0,1]; flip at i = 2, giving [1,1,1,0];
flip at i = 3, giving [1,1,1,1].
```

### Example 2

```text
Input: nums = [1,1,0,0,1]
Output: 2
Explanation:
Flip at i = 2 to reach [1,1,1,1,0], then flip at i = 4 to finish.
```

### Example 3

```text
Input: nums = [0,0,1,1]
Output: 2
Explanation:
Flip at i = 0 to reach [1,1,0,0], then flip at i = 2 to reach
[1,1,1,1].
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `0 <= nums[i] <= 1`

## Hints

### Hint 1

Only a flip launched at index 0 can ever change `nums[0]`, so whether
to open with an operation there is forced.

### Hint 2

Sweep left to right while remembering the parity of operations so far:
a flip at `i` re-inverts everything to its right, so an entry reads 0
exactly when it differs from the running parity — flip at each such
position.
