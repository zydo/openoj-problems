# Subsets at the OR Ceiling

## Description

For an integer array `nums`, no subset can beat one particular OR value:
OR-ing an element into a group can only switch bits on, never off, so the
largest attainable OR is simply the OR of the entire array. Call that value
the ceiling.

Count how many distinct non-empty subsets of `nums` have a bitwise OR equal
to the ceiling.

One array is a subset of another when it can be produced by deleting some
(possibly zero) elements. Two subsets count as different whenever the
indices of the chosen elements differ, even if the values are equal. The
bitwise OR of an array is `a[0] OR a[1] OR ... OR a[a.length - 1]`.

### Example 1

```text
Input: nums = [5,2]
Output: 1
Explanation: The ceiling is 5 OR 2 = 7. Neither value alone reaches 7, so
the only subset that does is [5,2] itself.
```

### Example 2

```text
Input: nums = [4,4,4]
Output: 7
Explanation: Every non-empty subset of [4,4,4] ORs to exactly 4, which is
the ceiling. There are 2³ - 1 = 7 such subsets.
```

### Example 3

```text
Input: nums = [9,3,6,1]
Output: 4
Explanation: The ceiling is 15, reached by 4 subsets: [9,6], [9,6,3],
[9,6,1] and [9,3,6,1]. Only 9 supplies the 8-bit and only 6 supplies the
4-bit, so both must be present.
```

### Constraints

- `1 <= nums.length <= 16`
- `1 <= nums[i] <= 10⁵`

## Hints

### Hint 1

With at most 16 elements, every subset can be visited: from each index,
branch into leaving the value out or OR-ing it into a running total.

### Hint 2

The ceiling equals the OR of all the elements, so settle on that target
before counting.

### Hint 3

Tally a branch only once the whole array has been decided on, and remember
that equal values at different positions still produce different subsets.
