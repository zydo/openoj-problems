# Inversions Beyond Double

## Description

Given an integer array `nums`, count the index pairs `(i, j)` such that:

- `i < j`, and
- `nums[i] > 2 * nums[j]`.

An earlier entry qualifies against a later one whenever it exceeds twice that
later entry's value. Values span the full 32-bit range, so doubling a very
negative entry can wrap in fixed-width arithmetic — compare in a wider type.

### Example 1

```text
Input: nums = [3,8,1,5,2]
Output: 4
Explanation: The qualifying pairs are:
(0, 2): 3 > 2 * 1
(1, 2): 8 > 2 * 1
(1, 4): 8 > 2 * 2
(3, 4): 5 > 2 * 2
```

### Example 2

```text
Input: nums = [5,-4,0,1]
Output: 3
Explanation: Doubling a negative entry only sinks it further, so the 5 at
index 0 qualifies against all three later entries: 5 > 2 * (-4), 5 > 2 * 0,
and 5 > 2 * 1. No other earlier entry is large enough.
```

### Example 3

```text
Input: nums = [6,3,1]
Output: 2
Explanation: The comparison is strict: 6 > 2 * 3 is false because both sides
are 6. The qualifying pairs are (0, 2) with 6 > 2 * 1 and (1, 2) with 3 > 2 * 1.
```

### Constraints

- `1 <= nums.length <= 5 * 10⁴`
- `-2³¹ <= nums[i] <= 2³¹ - 1`

## Hints

### Hint 1

Checking every pair is quadratic. Which classical counting problem does this
one resemble, and how is that one solved in `O(n log n)`?

### Hint 2

Split the array in half; pairs inside each half are settled by recursing.
What is left is counting, across the halves, entries on the left exceeding
twice an entry on the right.

### Hint 3

With both halves sorted after the recursive calls, that cross count is a
two-pointer sweep: the pointer over the right half never turns back, because
each successive left entry is no smaller than the last.

### Hint 4

Doubling `nums[j]` can overflow 32-bit arithmetic when `nums[j]` is very
negative — widen before comparing.
