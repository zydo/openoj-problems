# The Longest Power Mountain

## Description

Given an array `nums` of positive integers, choose values from it — as
many as possible — that can be laid out in a row shaped like a mountain
of powers: symmetric about a peak, with each step away from the peak
taking a square root, until both ends reach the base `x`. Written out,
the row reads

- `x, x², x⁴, ..., x^(k/2), x^k, x^(k/2), ..., x⁴, x², x`

where `k` may be any power of two. A lone value `[x]` is the smallest
such mountain. So `[2, 4, 16, 4, 2]` and `[3, 9, 3]` shape up, while
`[2, 4, 8, 4, 2]` does not — 8 is not 4 squared.

Return the number of values in the largest selection that can be
arranged this way.

### Example 1

```text
Input: nums = [3,3,9,9,81,7]
Output: 5
Explanation: Two 3s and two 9s flank the lone 81, forming the row
[3, 9, 81, 9, 3] — 9 = 3² and 81 = 9². Five values in total, and the
unpaired 7 leaves nothing better within reach.
```

### Example 2

```text
Input: nums = [1,1,1,1,1,1,2]
Output: 5
Explanation: Because 1 squared is 1, a pile of 1s is a mountain all by
itself — but its size must be odd, and six copies is even, so one copy
sits out. That yields 5 values; the single 2 offers no better
alternative.
```

### Example 3

```text
Input: nums = [2,2,4,16]
Output: 3
Explanation: Every level except the peak needs a pair. The two 2s pair
up with the 4 as their peak: [2, 4, 2], worth 3 values. The lone 16
would demand a pair of 4s beneath it, so the mountain stops there.
```

### Constraints

- `2 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^9`

## Hints

### Hint 1

Copies of 1 are a corner of their own: since 1 squared is still 1, any
odd-sized run of 1s is a mountain on its own.

### Hint 2

Tally every value in a hash map. Then treat each value `x > 1` as a
candidate base and climb `x, x², x⁴, ...`, consuming a pair at each
level while two copies exist and the next square is present.

### Hint 3

That climb dies fast: squaring doubles the exponent again and again, so
within the `10^9` bound only a handful of levels can exist.

### Hint 4

Trying every base with such a short climb is cheap. The answer is the
best chain found, the odd-trimmed run of 1s, or the one-element
fallback that any present value provides.
