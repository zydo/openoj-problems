# Zigzag Quadruplet Count

## Description

You are given a 0-indexed array `nums` of length `n` that contains
every value from `1` to `n` exactly once. Count its zigzag
quadruplets — index choices `i < j < k < l` whose values rise, dip,
and rise again in the strict pattern

- `nums[i] < nums[k] < nums[j] < nums[l]`.

Note the zigzag lives in the values, not in the index order: the two
middle indices keep their usual arrangement, yet the later middle
value `nums[k]` must come out smaller than the earlier one `nums[j]`.

### Example 1

```text
Input: nums = [1,4,3,2,5]
Output: 3
Explanation: Anchor the ends at the 1 (index 0) and the 5 (index 4).
The three middle indices hold 4, 3, 2 in decreasing order, so every
pair of them can serve as (j, k): (0,1,2,4), (0,1,3,4), and
(0,2,3,4) all satisfy the pattern, and nothing else does.
```

### Example 2

```text
Input: nums = [1,2,3,4,5]
Output: 0
Explanation: The array climbs steadily, so whenever j < k we have
nums[k] > nums[j] and the required dip never happens.
```

### Constraints

- `4 <= nums.length <= 4000`
- `1 <= nums[i] <= nums.length`
- The values in `nums` are all distinct: the array is a permutation
  of the integers `1` through `n`.

## Hints

### Hint 1

Do not attack all four indices at once. Fixing just the middle pair
`(j, k)` turns a quadruplet into two independent side counts.

### Hint 2

A pair `(j, k)` with `nums[k] < nums[j]` contributes
`(choices for i) * (choices for l)`: indices `i < j` holding a value
below `nums[k]` on the left, indices `l > k` holding a value above
`nums[j]` on the right. Both counts can be tabulated for every pair
in quadratic time.

### Hint 3

Sweep `j` left to right, maintaining a value-indexed tally of the
prefix seen so far; a difference array plus one running sum refreshes
the whole less-than row each step, while a backward scan over the
tail accumulates the right-hand counts. Sum the products over usable
pairs.
