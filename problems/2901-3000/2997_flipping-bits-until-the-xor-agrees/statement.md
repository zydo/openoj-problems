# Flipping Bits Until The Xor Agrees

## Description

You are given a 0-indexed integer array `nums` and a non-negative integer
`k`.

One move picks any single array element and toggles one bit of its binary
form — a `0` becomes `1`, or a `1` becomes `0`. Toggling a leading zero
bit is allowed too: `(101)₂` may become `(1101)₂` in one move.

Return the fewest moves after which the XOR of every array element equals
`k`.

### Example 1

```text
Input: nums = [1,4,3], k = 5
Output: 2
Explanation: The array's XOR is (1 XOR 4 XOR 3) = 6 = (110)₂, while
k = 5 = (101)₂. The two patterns disagree in the two lowest bit
positions, so two moves are needed and two suffice: toggle the lowest
bit of the 1, turning it into 0, then toggle the second bit of the 3,
turning it into 1. The array becomes [0,4,1] with XOR (0 XOR 4 XOR 1) =
5 = k.
```

### Example 2

```text
Input: nums = [0,0,1], k = 1
Output: 0
Explanation: The array's XOR is already (0 XOR 0 XOR 1) = 1 = k, so no
move is required.
```

### Example 3

```text
Input: nums = [8,8,8], k = 0
Output: 1
Explanation: Three equal values XOR to a single copy of themselves, so
the current XOR is 8 = (1000)₂. Toggling that one set bit in any of the
three 8s — turning it into 0 — brings the XOR to 0 = k.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `0 <= nums[i] <= 10⁶`
- `0 <= k <= 10⁶`

## Hints

### Hint 1

Fold the whole array into one XOR value first, then put that value and
`k` side by side in binary.

### Hint 2

A move toggles exactly one bit position of the folded XOR and nothing
else, so every position where the fold and `k` disagree costs exactly one
move — and no move can be shared between positions.
