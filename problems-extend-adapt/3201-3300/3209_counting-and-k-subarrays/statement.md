# Counting And-K Subarrays

## Description

Given an integer array `nums` and an integer `k`, count the contiguous
subarrays of `nums` whose elements AND down to exactly `k`.

(The bitwise AND of a stretch of numbers keeps only the bit positions that
are set in every one of them.)

### Example 1

```text
Input: nums = [7,7,7], k = 7
Output: 6
```

All six subarrays are runs of 7s, and any run of 7s ANDs to 7.

### Example 2

```text
Input: nums = [2,4,6,2], k = 2
Output: 3
```

The qualifying stretches are the two lone 2s at the ends plus the pair
`6 & 2 = 2` in the middle.

### Example 3

```text
Input: nums = [10,10,2,0,4], k = 0
Output: 8
```

AND-ing with `0` wipes every bit out, so exactly the subarrays that cover
the lone `0` qualify — four choices of left endpoint times two of the
right.

### Constraints

- `1 <= nums.length <= 10⁵`
- `0 <= nums[i], k <= 10⁹`

## Hints

### Hint 1

AND is monotone as a window grows: widening a subarray can only switch
bits off, never on.

### Hint 2

Fix one endpoint and watch how the AND evolves as the other end moves; the
value can only fall, and only when a bit dies.

### Hint 3

A value under `10⁹` has about 30 bits, so the windows ending at one index
hold at most a few dozen distinct ANDs before everything stabilizes.

### Hint 4

Sweep the array keeping (value, count) groups of those suffix ANDs — or
build a sparse table and binary-search where the AND equals `k`.
