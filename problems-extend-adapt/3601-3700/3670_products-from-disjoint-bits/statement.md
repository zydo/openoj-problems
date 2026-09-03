# Products From Disjoint Bits

## Description

An integer array `nums` is given. Pick two distinct indices `i` and `j`
whose values never light up the same binary digit — formally,
`nums[i] & nums[j] == 0` — and among all such pairs return the largest
product `nums[i] * nums[j]`.

If no pair of elements is bitwise disjoint, return `0`.

### Example 1

```text
Input: nums = [10, 5, 21]
Output: 210
Explanation: In binary, 10 is `01010`, 5 is `00101`, and 21 is `10101`.
Both 5 and 21 are disjoint from 10, and the better pairing gives
10 * 21 = 210.
```

### Example 2

```text
Input: nums = [31, 16, 15, 1]
Output: 240
Explanation: The largest value, 31 (`11111`), touches every bit the
other elements use, so it has no disjoint partner at all. The best
usable pair is 15 (`01111`) with 16 (`10000`), which multiplies to 240.
```

### Example 3

```text
Input: nums = [7, 7]
Output: 0
Explanation: Two equal values share every set bit they have, so no
qualifying pair exists.
```

### Constraints

- `2 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁶`

## Hints

### Hint 1

Values up to 10⁶ fit inside 20 bits, so each element doubles as its own
20-bit mask, and "disjoint" is exactly `mask_i & mask_j == 0`.

### Hint 2

Seed a table over all 2²⁰ masks so that each mask holds the largest
element whose set bits are exactly that mask — or 0 when no element
carries it.

### Hint 3

Then sweep one bit at a time: for every bit `b` and every mask `m`
containing it, relax `dp[m]` with `dp[m` without `b]`. Afterwards
`dp[m]` answers "largest element whose set bits are a subset of `m`".

### Hint 4

A disjoint partner of `x`, whose mask is `mx`, must fit entirely inside
the 20-bit complement `FULL ^ mx` with `FULL = 2²⁰ - 1` — so the table
lookup at that complement hands back the best partner directly.

### Hint 5

One final scan tracks the largest `x * dp[complement of x]`; when no
element has a disjoint partner, every lookup returns 0 and the answer
stays 0.
