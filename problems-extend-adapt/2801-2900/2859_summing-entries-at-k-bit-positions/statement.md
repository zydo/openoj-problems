# Summing Entries At K-Bit Positions

## Description

Given a 0-indexed integer array `nums` and an integer `k`, add up every
element whose position in the array is written in binary with exactly `k`
one-bits, and return that total.

A bit counts as set when the binary form of the number shows a `1` at
that spot. As a refresher, 21 is `10101` in binary and therefore carries
3 set bits.

### Example 1

```text
Input: nums = [9,8,7,6,5,4,3], k = 1
Output: 20
Explanation: The indices written in binary are 0 = 0, 1 = 1, 2 = 10,
3 = 11, 4 = 100, 5 = 101, 6 = 110. Indices 1, 2, and 4 each show
exactly one set bit, so the answer is 8 + 7 + 5 = 20.
```

### Example 2

```text
Input: nums = [2,2,2,2,2,2,2,2], k = 2
Output: 6
Explanation: Indices 3 = 11, 5 = 101, and 6 = 110 are the only ones
with exactly two set bits, giving 2 + 2 + 2 = 6.
```

### Example 3

```text
Input: nums = [5,1,2], k = 0
Output: 5
Explanation: Only the index 0, whose binary form has no set bits at
all, qualifies.
```

### Constraints

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 10⁵`
- `0 <= k <= 10`

## Hints

### Hint 1

Walk the indices from `0` to `n - 1`; for each one, tally the set bits
in its binary form and, when the tally equals `k`, fold `nums[i]` into
the running sum.
