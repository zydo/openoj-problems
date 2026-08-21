# Distance Sums in a Sorted Array

## Description

You hold a non-decreasing integer array `nums`. Produce an array `result`
of the same length in which `result[i]` totals the distance from
`nums[i]` to every entry of the array, its own position included:

`result[i] = |nums[i] - nums[0]| + |nums[i] - nums[1]| + ... +
|nums[i] - nums[n - 1]|`.

### Example 1

```text
Input: nums = [3,6,7]
Output: [7,4,5]
Explanation:
result[0] = |3-3| + |3-6| + |3-7| = 0 + 3 + 4 = 7,
result[1] = |6-3| + |6-6| + |6-7| = 3 + 0 + 1 = 4,
result[2] = |7-3| + |7-6| + |7-7| = 4 + 3 + 0 = 5.
```

### Example 2

```text
Input: nums = [1,3,3,8,10]
Output: [20,14,14,19,25]
```

### Example 3

```text
Input: nums = [2,4,4,9]
Output: [11,7,7,17]
Explanation: The tied 4s contribute nothing to each other, so their
entries agree; the far-off 9 pays |9-2| + |9-4| + |9-4| = 7 + 5 + 5.
```

### Constraints

- `2 <= nums.length <= 10⁵`
- `1 <= nums[i] <= nums[i + 1] <= 10⁴`

## Hints

### Hint 1

A distance `|a - b|` is just the larger value minus the smaller one.
Which of the two is larger is never in doubt inside a sorted array.

### Hint 2

For entry `i`, split the total at `i` itself: the distances to
everything earlier form one signed sum, the distances to everything
later form another, and the two add up.

### Hint 3

Each side collapses into a count times `nums[i]` minus a range total —
one running prefix sum plus the grand total of the array serves every
position in constant time.
