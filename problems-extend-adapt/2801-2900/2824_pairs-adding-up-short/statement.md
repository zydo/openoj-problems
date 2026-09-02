# Pairs Adding Up Short

## Description

You are given a 0-indexed integer array `nums` of length `n` and an integer
`target`. Count the index pairs `(i, j)` with `0 <= i < j < n` whose sum
falls short of it: `nums[i] + nums[j] < target`.

### Example 1

```text
Input: nums = [4,1,7,3,2], target = 8
Output: 6
Explanation: The pairs adding up short of 8 are (0, 1) with 4 + 1 = 5,
(0, 3) with 4 + 3 = 7, (0, 4) with 4 + 2 = 6, (1, 3) with 1 + 3 = 4,
(1, 4) with 1 + 2 = 3, and (3, 4) with 3 + 2 = 5. The pair (1, 2) misses
out because 1 + 7 = 8 is not strictly less than the target.
```

### Example 2

```text
Input: nums = [-2,5,-8,0], target = -1
Output: 4
Explanation: The qualifying pairs are (0, 2) with -10, (0, 3) with -2,
(1, 2) with -3, and (2, 3) with -8.
```

### Example 3

```text
Input: nums = [10], target = 100
Output: 0
Explanation: A lone element forms no pairs at all, so the count is 0 even
though the target is generous.
```

### Constraints

- `1 <= nums.length == n <= 50`
- `-50 <= nums[i], target <= 50`

## Hints

### Hint 1

With `n` at most 50, testing every index pair is comfortably fast enough.

### Hint 2

There is a neater tally: rearranging the values cannot change which pairs
qualify, only how conveniently they can be counted.

### Hint 3

After sorting, park one pointer at each end. If the outer pair already
adds up short, the larger value is the best partner the smaller one will
ever get — so every position in between pairs with it too, all at once.
