# Largest Singleton

## Description

Given an array of integers `nums`, return the biggest value that appears
exactly one time in it. If no value is alone — every value that occurs,
occurs at least twice — return `-1`.

### Example 1

```text
Input: nums = [2,4,7,4,2,9]
Output: 9
Explanation: The values `2` and `4` each appear twice, while `7` and `9`
appear once. The larger of the two singletons is `9`.
```

### Example 2

```text
Input: nums = [0,3,3,0,8]
Output: 8
```

### Example 3

```text
Input: nums = [5,5,5]
Output: -1
Explanation: `5` repeats and is the only value present, so no value
occurs exactly once.
```

### Constraints

- `1 <= nums.length <= 2000`
- `0 <= nums[i] <= 1000`

## Hints

### Hint 1

First work out, for every distinct value in `nums`, how many times it
appears.

### Hint 2

Because values are capped at 1000, a plain frequency table indexed by the
value itself does the job — one incremented slot per array element.

### Hint 3

Walk the table from the highest value downward; the first slot holding
exactly one occurrence is the answer, and a walk that falls through
everything means `-1`.
