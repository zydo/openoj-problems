# Subarrays Their Maximum Absorbs

## Description

You are given an integer array `nums`.

A contiguous subarray of `nums` is called absorbed when the bitwise OR of
all its elements is equal to one of the elements inside it — which can only
be the subarray's own maximum.

Return how many absorbed subarrays `nums` contains.

Here, the bitwise OR of two integers `a` and `b` is written `a | b`.

### Example 1

```text
Input: nums = [5,1,4]
Output: 5
Explanation: The absorbed subarrays are [5], [1], [4], [5,1] — whose OR is
5 | 1 = 5, exactly its maximum — and [5,1,4], whose OR is again 5. The
window [1,4] fails: its OR is 5 but its maximum is only 4, so the OR
escapes the window's largest value.
```

### Example 2

```text
Input: nums = [3,4,2]
Output: 3
Explanation: Each single element is absorbed on its own. Every longer
window is ruled out: [3,4] and [3,4,2] both OR to 7 while their maximum is
4, and [4,2] ORs to 6 against the same maximum.
```

### Example 3

```text
Input: nums = [6,6,1]
Output: 4
Explanation: [6], [6], [1], and [6,6] are absorbed (the pair ORs to 6,
still its own maximum). Adding the trailing 1 to any window steals a bit:
[6,1] and [6,6,1] both OR to 7, which their maximum 6 does not contain.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `0 <= nums[i] <= 10⁹`

## Hints

### Hint 1

A subarray's OR equals its maximum precisely when every element's set bits
already sit inside the maximum's bits.

### Hint 2

Give each subarray to the rightmost occurrence of its maximum: a monotonic
stack yields the stretch `(L[i], R[i])` where `nums[i]` rules, with ties
broken to a single owner.

### Hint 3

For each bit missing from `nums[i]`, the window must also dodge the nearest
element carrying that bit on either side; with those per-bit boundaries
precomputed, index `i` contributes
`(i - effective_left) · (effective_right - i)` windows.
