# Closest Values Far Apart

## Description

Two entries of an array count as far apart when their positions differ by
at least `x`. Given a 0-indexed integer array `nums` and an integer `x`,
find the pair of far-apart entries whose values are as close as possible.

In other words, pick indices `i` and `j` such that `abs(i - j) >= x` and
`abs(nums[i] - nums[j])` is the smallest it can be. The two positions must
be distinct entries — `x` may be `0`, but pairing an index with itself does
not count.

Return that smallest possible absolute difference.

### Example 1

```text
Input: nums = [30, 7, 90, 30], x = 2
Output: 0
Explanation: The two 30s sit three indices apart, which clears the gap of
2, and their difference is 0 — nothing can beat that.
```

### Example 2

```text
Input: nums = [22, 37, 12, 15, 40], x = 1
Output: 3
Explanation: With `x` equal to 1, neighbouring entries may pair up. The
values 12 and 15 are one index apart and differ by 3, and no other pair of
distinct entries gets closer.
```

### Example 3

```text
Input: nums = [50, 4, 88, 17, 63, 41], x = 3
Output: 9
Explanation: Only entries at least 3 positions apart may pair. Among those,
the closest values are 50 and 41 (indices 0 and 5), differing by 9.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`
- `0 <= x < nums.length`

## Hints

### Hint 1

Differences are symmetric, so let one index always be the right-hand one;
every pair is then considered exactly once.

### Hint 2

Sweep the right index left to right. At each step exactly one new value
becomes an eligible partner: the value `x` positions back (one back when
`x` is `0`).

### Hint 3

Collect the eligible values in an ordered set; for each right index, two
binary searches find the stored values bracketing `nums[j]`, and those two
neighbours bound the best difference at that step.
