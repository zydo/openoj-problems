# Trimming Duplicates Three At A Time

## Description

You are given an integer array `nums`.

One trim removes the three front elements of the array. When fewer than
three elements remain, the trim takes whatever is left and the array
becomes empty.

Trims are applied one after another, and the process stops as soon as the
array is empty or every value still present is unique. Return how many
trims were performed.

### Example 1

```text
Input: nums = [2,9,2,4,4,7]
Output: 2
Explanation: The first trim drops the front three values, leaving
[4, 4, 7], which still repeats 4. The second trim removes the remaining
three elements, so two trims were needed.
```

### Example 2

```text
Input: nums = [6,6]
Output: 1
Explanation: Fewer than three elements remain, so the single trim takes
both of them and the empty array ends the process.
```

### Example 3

```text
Input: nums = [10,3,7]
Output: 0
Explanation: Every value is already unique, so no trim is required.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁵`

## Hints

### Hint 1

Count how often each value occurs over the whole array and also track how
many distinct values are still duplicated.

### Hint 2

The remaining suffix is duplicate-free exactly when that duplicated-value
counter reaches zero, so advance a pointer three positions per operation
and update only the counts of the values you remove.

### Hint 3

Stop when the counter hits zero or the pointer walks past the end; the
shorter final trim is counted like any other.
