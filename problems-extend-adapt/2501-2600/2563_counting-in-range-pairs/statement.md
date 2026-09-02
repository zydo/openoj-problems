# Counting In-Range Pairs

## Description

You are given an integer array `nums` of length `n` and two integers
`lower` and `upper`. Count the index pairs whose element sum falls inside
the closed interval `[lower, upper]`.

A pair of distinct positions `(i, j)` qualifies when both of these hold:

- `0 <= i < j < n`
- `lower <= nums[i] + nums[j] <= upper`

Return how many qualifying pairs exist.

### Example 1

```text
Input: nums = [2,5,1,4], lower = 5, upper = 8
Output: 4
Explanation: The qualifying pairs are (0,1), (0,3), (1,2), and (2,3)
with sums 7, 6, 6, and 5 respectively.
```

### Example 2

```text
Input: nums = [-3,2,0,6], lower = -1, upper = 3
Output: 3
Explanation: Only (0,1), (0,3), and (1,2) land in the range, with sums
-1, 3, and 2.
```

### Example 3

```text
Input: nums = [3,3,3], lower = 6, upper = 6
Output: 3
Explanation: Every two of the three positions sums to exactly 6.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `nums.length == n`
- `-10⁹ <= nums[i] <= 10⁹`
- `-10⁹ <= lower <= upper <= 10⁹`

## Hints

### Hint 1

Put the array in ascending order first; index identity never matters, only
values do.

### Hint 2

Once sorted, the values that pair with a fixed element to stay inside the
range form one contiguous block — locate its two ends for each element.

### Hint 3

Growing the element only shrinks that block from both sides, so the two
ends can be tracked with pointers that never move backwards.
