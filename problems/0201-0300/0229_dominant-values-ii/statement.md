# Dominant Values II

## Description

You are given an integer array `nums` with `n` elements. Find every
distinct value that occurs more than `⌊n / 3⌋` times, and return those
values in ascending order.

### Example 1

```text
Input: nums = [5,5,5,2,2,8]
Output: [5]
```

### Example 2

```text
Input: nums = [9]
Output: [9]
```

### Example 3

```text
Input: nums = [4,6]
Output: [4,6]
```

### Constraints

- `1 <= nums.length <= 5 * 10⁴`
- `-10⁹ <= nums[i] <= 10⁹`

### Follow-up

Could you solve the problem in linear time and in `O(1)` space?

## Hints

### Hint 1

Think about how many distinct values could possibly occur more than
`⌊n / 3⌋` times in the same array.

### Hint 2

At most two. Why can there never be a third?

### Hint 3

A two-slot extension of the Boyer-Moore voting algorithm tracks exactly
those two candidates without ever counting occurrences directly.
