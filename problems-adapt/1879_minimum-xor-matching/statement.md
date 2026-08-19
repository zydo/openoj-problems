# Minimum XOR Matching

## Description

You are given two integer arrays `nums1` and `nums2`, both of length `n`.

Pair every element of `nums1` with a distinct element of `nums2` — a
perfect matching between the two arrays. The cost of a pairing is the sum,
over all `n` pairs, of the bitwise XOR of the two paired values.

For instance, pairing `[1,2,3]` with `[3,2,1]` position by position costs
`(1 XOR 3) + (2 XOR 2) + (3 XOR 1) = 2 + 0 + 2 = 4`.

Return the smallest cost any pairing can achieve.

### Example 1

```text
Input: nums1 = [3,6], nums2 = [5,4]
Output: 8
Explanation: The pairing 3 with 5 and 6 with 4 costs 6 + 2 = 8, which beats
3 XOR 4 + 6 XOR 5 = 7 + 3 = 10.
```

### Example 2

```text
Input: nums1 = [2,0,7], nums2 = [1,6,3]
Output: 3
Explanation: Pair 2 with 3, 0 with 1, and 7 with 6: (2 XOR 3) + (0 XOR 1) +
(7 XOR 6) = 1 + 1 + 1 = 3. No pairing does better.
```

### Example 3

```text
Input: nums1 = [4,9,2], nums2 = [9,2,4]
Output: 0
Explanation: Each value meets its equal — XOR of equal values is 0 — for a
total cost of 0.
```

### Constraints

- `n == nums1.length == nums2.length`
- `1 <= n <= 14`
- `0 <= nums1[i], nums2[i] <= 10^7`

## Hints

### Hint 1

With `n <= 14`, every subset of `nums2` can be enumerated — there are at
most `2^14`.

### Hint 2

Index those subsets with a bitmask.

### Hint 3

Over the masks, keep `dp[mask]` = least cost of pairing the first
`popcount(mask)` elements of `nums1` with exactly the positions `mask`
selects in `nums2`.
