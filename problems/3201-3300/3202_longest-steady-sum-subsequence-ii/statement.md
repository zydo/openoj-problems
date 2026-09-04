# Longest Steady-Sum Subsequence II

## Description

Given an integer array `nums` and a positive integer `k`, pick a
subsequence `sub` of length `x` and divide each neighboring-pair sum by
`k`. The subsequence qualifies when every one of those sums leaves the
same remainder:

`(sub[0] + sub[1]) % k == (sub[1] + sub[2]) % k == ... == (sub[x - 2] +
sub[x - 1]) % k`.

Return the length of the longest qualifying subsequence that can be
formed from `nums`.

### Example 1

```text
Input: nums = [10,1,6,3,8], k = 7
Output: 4
Explanation: In [10, 1, 3, 8] the neighboring sums are 11, 4, 11, and
each leaves remainder 4 modulo 7.
```

### Example 2

```text
Input: nums = [2,7,2,9,5,2], k = 5
Output: 4
Explanation: The subsequence [2, 7, 2, 2] has neighboring sums 9, 9,
4, which all leave remainder 4 modulo 5.
```

### Example 3

```text
Input: nums = [1,2,4,8,6], k = 4
Output: 3
Explanation: The even values [2, 4, 6] have neighboring sums 6 and 10,
each leaving remainder 2 modulo 4.
```

### Constraints

- `2 <= nums.length <= 10³`
- `1 <= nums[i] <= 10⁷`
- `1 <= k <= 10³`

## Hints

### Hint 1

The remainder shared by all adjacent sums is a single unknown in
`[0, k)`; there are only `k` candidates, so guess one and score the
guess.

### Hint 2

For a fixed candidate, scan the array while keeping `dp[r]`: the best
chain found so far whose last element is congruent to `r` modulo `k`.

### Hint 3

An element with residue `r` can only follow an element at residue
`(val - r) % k`, so it offers `dp[(val - r) % k] + 1` to slot `r` — and
it may always stand alone as a chain of one.
