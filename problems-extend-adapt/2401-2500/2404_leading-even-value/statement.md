# Leading Even Value

## Description

You are given an array of integers `nums`. Among the even values that appear
in the array, find the one that occurs most often, and return it. If several
even values share the top count, return the smallest of them; if the array
holds no even value at all, return `-1`.

### Example 1

```text
Input: nums = [6, 3, 8, 6, 8, 6, 9]
Output: 6
Explanation: The even entries are 6 and 8. The value 6 occurs three times
and 8 twice, so 6 leads.
```

### Example 2

```text
Input: nums = [2, 4, 2, 4, 6]
Output: 2
Explanation: The evens 2 and 4 each occur twice, and 6 once. The tie
between 2 and 4 is broken toward the smaller value, 2.
```

### Example 3

```text
Input: nums = [1, 3, 5]
Output: -1
Explanation: No value is even, so there is nothing to report.
```

### Constraints

- `1 <= nums.length <= 2000`
- `0 <= nums[i] <= 10⁵`

## Hints

### Hint 1

Collect the occurrence count of every even value, skipping odd ones
entirely.

### Hint 2

Scan the counts for the largest frequency, and let the smallest value win
ties.
