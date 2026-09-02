# Longest Steady-Sum Subsequence I

## Description

Work with the parities of an integer array `nums`. Pick a subsequence
`sub` of length `x` and look at the sums of its neighboring pairs. The
subsequence is called steady when all of those sums land on the same
side of modulo 2:

`(sub[0] + sub[1]) % 2 == (sub[1] + sub[2]) % 2 == ... == (sub[x - 2] +
sub[x - 1]) % 2`.

Return the length of the longest steady subsequence that can be formed
from `nums`.

### Example 1

```text
Input: nums = [2,3,4,4,5,8]
Output: 5
Explanation: Dropping one of the 4s leaves [2, 3, 4, 5, 8]. Every
neighboring pair sums to an odd number, so the whole subsequence is
steady.
```

### Example 2

```text
Input: nums = [5,5,5,8,8,3]
Output: 4
Explanation: The odd values [5, 5, 5, 3] make every neighboring pair
sum to an even number.
```

### Example 3

```text
Input: nums = [9,6]
Output: 2
Explanation: The single neighboring pair sums to an odd number, so both
elements can be kept.
```

### Constraints

- `2 <= nums.length <= 2 * 10⁵`
- `1 <= nums[i] <= 10⁷`

## Hints

### Hint 1

A pair's sum parity is decided by the two parities alone: equal
parities sum to even, opposite parities sum to odd.

### Hint 2

So a steady subsequence either keeps one parity throughout or flips
parity at every step — four possible shapes in all.

### Hint 3

Sweep the array once per shape, holding the parity the next slot needs
and taking the earliest element that satisfies it.
