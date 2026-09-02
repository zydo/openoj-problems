# Values Common to Every Row

## Description

You are given a 2D integer array `nums`, where every row `nums[i]` is a
non-empty list of distinct positive integers. Return the integers that
appear in **every** row of `nums`, sorted in ascending order.

### Example 1

```text
Input: nums = [[2,9,6],[9,2,7],[6,9,2]]
Output: [2,9]
Explanation:
Only 2 and 9 occur in all three rows, so the answer is [2,9].
```

### Example 2

```text
Input: nums = [[5],[5],[8,5]]
Output: [5]
Explanation:
The value 5 is the single integer shared by all rows.
```

### Example 3

```text
Input: nums = [[1,2],[3,4],[5,6]]
Output: []
Explanation:
No integer is present in every row, so the result is the empty list [].
```

### Constraints

- `1 <= nums.length <= 1000`
- `1 <= sum(nums[i].length) <= 1000`
- `1 <= nums[i][j] <= 1000`
- Within any single row, all values are pairwise distinct.

## Hints

### Hint 1

Tally how many of the rows contain each distinct value.

### Hint 2

Because a value can appear at most once per row, a value occurs in every row
exactly when its tally equals the number of rows. Collect those values and
sort them before returning.
