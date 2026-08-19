# Count Subsets Avoiding Difference k

## Description

You are given an array `nums` of distinct integers and an integer `k`.

A subset of `nums` is admissible when no two of its elements differ by
exactly `k`. The empty subset is admissible.

Return the number of admissible subsets. A subset is any selection of
elements, including the selection of none.

### Example 1

```text
Input: nums = [7,3,5], k = 2
Output: 5
Explanation: The admissible subsets are {}, {3}, {5}, {7} and {3, 7}.
Every other subset contains two elements 2 apart.
```

### Example 2

```text
Input: nums = [4,1,7,9], k = 3
Output: 10
Explanation: The value 4 cannot share a subset with 1 or 7, and 1 with 4.
Independently, the 9 conflicts with nothing. The subsets of {1,4,7} that
avoid such pairs number 5 ({}, {1}, {4}, {7}, {1,7}) and the subsets of
{9} number 2, giving 5 · 2 = 10.
```

### Example 3

```text
Input: nums = [2,6,11], k = 8
Output: 8
Explanation: No two values differ by 8, so every one of the 2³ = 8 subsets
is admissible.
```

### Constraints

- `1 <= nums.length <= 50`
- `1 <= nums[i] <= 1000`
- `1 <= k <= 1000`
- All elements of `nums` are distinct.

## Hints

### Hint 1

Only values sitting exactly `k` apart restrict each other. After sorting,
which values does that tie together, and into what shapes?

### Hint 2

Each tied-together shape is a path: taking one member rules out its two
immediate neighbours in the shape. The number of ways to pick from a path
satisfies a two-term recurrence — which one?

### Hint 3

Values that end up in different shapes never conflict with each other, so
the per-shape counts combine by multiplication.
