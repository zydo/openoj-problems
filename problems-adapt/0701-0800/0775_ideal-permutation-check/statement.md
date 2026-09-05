# Ideal Permutation Check

## Description

You are given an integer array `nums` of length `n` holding a permutation
of `0` to `n - 1`.

Call `(i, j)` a **far pair** when `0 <= i < j < n` and `nums[i] > nums[j]`
— any out-of-order pair, however far apart. Call `i` a **near swap** when
`0 <= i < n - 1` and `nums[i] > nums[i + 1]` — an out-of-order pair of
neighbors.

Every near swap is also a far pair, so the number of far pairs is always
at least the number of near swaps. Return `true` if the two counts are
exactly equal, and `false` otherwise.

### Example 1

```text
Input: nums = [0,2,1]
Output: true
Explanation: The only out-of-order pair is (1, 2), which is also an
adjacent pair, so the far-pair count and the near-swap count are both 1.
```

### Example 2

```text
Input: nums = [2,0,1]
Output: false
Explanation: The out-of-order pairs are (0, 1) and (0, 2), two far pairs
in total, but only (0, 1) is adjacent, giving one near swap — the counts
don't match.
```

### Constraints

- `n == nums.length`
- `1 <= n <= 10⁵`
- `0 <= nums[i] < n`
- All the integers of `nums` are unique.
- `nums` is a permutation of all the numbers in the range `[0, n - 1]`.

## Hints

### Hint 1

Where can the value 0 sit in such a permutation? What about the value 1?
