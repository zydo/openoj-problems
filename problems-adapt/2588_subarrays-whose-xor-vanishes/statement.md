# Subarrays Whose XOR Vanishes

## Description

You are given an integer array `nums`. In one move you may:

- pick two different positions `i` and `j`, and
- pick a bit `k` that is set to `1` in both `nums[i]` and `nums[j]`, and
- subtract `2^k` from each of the two — clearing that bit in both.

Call a subarray **reducible** when some sequence of moves — possibly none —
can turn every one of its elements into `0`. Moves act on positions inside
the subarray only, and each move's two positions must both lie in it.

Return the number of reducible subarrays of `nums`. A subarray is a
contiguous non-empty stretch of the array.

An all-zero subarray already consists of zeros, so it counts without any
move.

### Example 1

```text
Input: nums = [5,6,3,5]
Output: 2
Explanation: The reducible subarrays are [5,6,3] and [6,3,5]:
- In [5,6,3]: clear bit 1 of 6 and 3 (both 0110 and 0011 hold it), leaving
  [5,4,1]; then clear bit 2 of 5 and 4, leaving [1,0,1]; then clear bit 0 of
  the two 1s, leaving zeros.
- In [6,3,5]: 6^3^5 = 0 as well, and the same style of pairing clears it.
```

### Example 2

```text
Input: nums = [2,4,8]
Output: 0
Explanation: Every element is a distinct power of two, so no two elements
share a set bit and no move is ever legal; nothing can be reduced.
```

### Example 3

```text
Input: nums = [0,7,0]
Output: 2
Explanation: The single-element subarrays holding a 0 are already reduced.
The 7 cannot pair with anything, so the longer stretches fail.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `0 <= nums[i] <= 10⁶`

## Hints

### Hint 1

A move clears one shared bit in exactly two elements, so the parity of set
bits at each position of the subarray never changes. What does that make the
XOR of the subarray?

### Hint 2

The parity vector is the XOR, and all-zeros is its fixed point: a subarray is
reducible exactly when its XOR is already `0`.

### Hint 3

Introduce the prefix XOR `x` after each element. The stretch between two
positions XORs to zero exactly when the prefixes at its two ends are equal.

### Hint 4

Sweep once with a hash map of prefix-XOR counts seeded with one zero (the
empty prefix); each earlier matching prefix contributes one subarray ending
at the current element.
