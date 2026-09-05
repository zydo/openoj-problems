# Product Remainder Tallies I

## Description

You are given an array `nums` of positive integers and a positive integer
`k`.

You may perform the following operation exactly once: delete a prefix of
`nums` and a suffix of `nums`, where the two removed pieces never overlap
and the surviving middle stays non-empty. Either removed piece may be empty.

Every choice of operation leaves one non-empty contiguous middle behind.
For each remainder `x` with `0 <= x <= k - 1`, the tally for `x` is the
number of operations whose surviving middle has a product congruent to `x`
modulo `k`.

Return an array `tallies` of length `k` where `tallies[x]` is the tally for
`x`.

### Example 1

```text
Input: nums = [2,5,3,4], k = 3
Output: [6,2,2]
Explanation:
There are ten surviving middles in all. For x = 1 the two valid operations
keep the middles [2,5] and [4], whose products 10 and 4 are both ≡ 1
(mod 3). Six middles have product ≡ 0 (mod 3) — for instance [3] and the
full array — and two, [2] and [5], have product ≡ 2 (mod 3).
```

### Example 2

```text
Input: nums = [6,1,2,3], k = 4
Output: [2,1,6,1]
Explanation:
For x = 2, the six valid operations keep one of [6], [6,1], [1,2],
[1,2,3], [2], and [2,3] — products 6, 6, 2, 6, 2, 6, all ≡ 2 (mod 4).
The middles [6,1,2] and [6,1,2,3] are the two with product ≡ 0 (mod 4),
[1] is the only one with product ≡ 1 (mod 4), and [3] is the only one with
product ≡ 3 (mod 4).
```

### Example 3

```text
Input: nums = [1,1,1], k = 2
Output: [0,6]
Explanation:
All six surviving middles have product 1, which is odd, so every operation
lands at x = 1.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`
- `1 <= k <= 5`

## Hints

### Hint 1

Picking which prefix and which suffix to delete is the same as picking the
contiguous middle that survives, so count middles rather than trim choices.

### Hint 2

Sweep left to right and keep, for each remainder, how many surviving
middles end at the previous element with that product remainder.

### Hint 3

Multiplying those running counts by the current element slides every
surviving middle one position to the right, and each position contributes
its counts to the final tallies; with `k <= 5` the remainder table stays
tiny.
