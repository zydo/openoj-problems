# XOR Fingerprint

## Description

You are given an integer array `nums`. For any triplet of positions
`(i, j, k)` — repetitions allowed throughout — define its blend as
`(nums[i] | nums[j]) & nums[k]`. The array's fingerprint is the XOR of
the blends of all `n³` triplets with `0 <= i, j, k < n`.

Return the fingerprint of `nums`.

Here `val1 | val2` denotes bitwise OR and `val1 & val2` denotes
bitwise AND.

### Example 1

```text
Input: nums = [3,6]
Output: 5
Explanation: The eight triplets blend to 3, 2, 3, 6, 3, 6, 2, 6 as
(i, j, k) runs through its combinations — for instance (0,1,1) gives
(3 | 6) & 6 = 6. XORing them: 3 ^ 2 ^ 3 ^ 6 ^ 3 ^ 6 ^ 2 ^ 6 = 5.
```

### Example 2

```text
Input: nums = [7,11,3,8,21]
Output: 18
Explanation: XORing the blends of all 5³ = 125 triplets leaves 18.
```

### Example 3

```text
Input: nums = [12]
Output: 12
Explanation: The only triplet is (0,0,0), whose blend is
(12 | 12) & 12 = 12.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`

## Hints

### Hint 1

Enumerating `n³` triplets cannot work at this size. Instead, examine a
single bit position and ask how many triplets emit a 1 there.

### Hint 2

Fix a bit and let `c` be the number of elements carrying it. The
`(i, j)` pairs whose OR holds the bit number `c(2n − c)` — odd exactly
when `c` is odd — and intersecting with the `c` usable `k` positions
multiplies by `c` without changing the parity. So a bit lands in the
fingerprint precisely when an odd number of elements hold it.
