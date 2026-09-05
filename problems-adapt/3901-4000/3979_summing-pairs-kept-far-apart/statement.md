# Summing Pairs Kept Far Apart

## Description

You are given an integer array `nums` of length `n` and an integer `k`.

An ordered pair of positions `(i, j)` may be summed only when both rules
hold:

- `0 <= i < j < n`
- the two positions keep their distance: `j - i >= k`

Over every pair that satisfies both rules, return the largest value of
`nums[i] + nums[j]`.

### Example 1

```text
Input: nums = [7,2,9,4,6], k = 3
Output: 13
Explanation:
    The pairs that stay at least 3 apart are:
        (0, 3): nums[0] + nums[3] = 11
        (0, 4): nums[0] + nums[4] = 13
        (1, 4): nums[1] + nums[4] = 8

    Thus, the answer is 13.
```

### Example 2

```text
Input: nums = [10,1,1,10], k = 2
Output: 20
Explanation:
    Three pairs qualify, and the best one is (0, 3), giving
    nums[0] + nums[3] = 10 + 10 = 20.
    Thus, the answer is 20.
```

### Example 3

```text
Input: nums = [3,8], k = 1
Output: 11
Explanation: There is only one possible pair, (0, 1), and its distance of
1 just meets `k`, so the answer is 3 + 8 = 11.
```

### Constraints

- `2 <= n == nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`
- `1 <= k <= n - 1`

## Hints

### Hint 1

Fix the second position `j`; then the first position can be no larger than
`j - k`.

### Hint 2

Sweep `j` from `k` to `nums.length - 1` while carrying the largest value
seen among `nums[0], nums[1], ..., nums[j - k]`.

### Hint 3

That carried maximum is exactly the strongest possible partner for a pair
whose second element sits at `j`.
