# First Absent Multiple Of K

## Description

You are given an integer array `nums` and an integer `k`.

Consider the positive multiples of `k` in increasing order: `k`, `2k`, `3k`,
and so on. Return the first multiple in that sequence that does not appear
anywhere in `nums`.

Values of `nums` that are not multiples of `k` play no role in the answer —
they can neither provide a candidate nor stand in its way.

### Example 1

```text
Input: nums = [6,3,12,7], k = 3
Output: 9
Explanation: The multiples of 3 run 3, 6, 9, 12, ... The array contains 3
and 6 but not 9, so 9 is the answer.
```

### Example 2

```text
Input: nums = [5,10,25], k = 5
Output: 15
Explanation: The array supplies 5 and 10 but then jumps straight to 25,
leaving 15 as the first multiple that is absent.
```

### Example 3

```text
Input: nums = [4,8], k = 6
Output: 6
Explanation: No positive multiple of 6 appears in the array, so the very
first candidate, 6, is already the answer.
```

### Example 4

```text
Input: nums = [3,1,2,5], k = 1
Output: 4
Explanation: With k = 1 every positive integer is a multiple, so the answer
is the smallest positive integer the array leaves out: 4.
```

### Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`
- `1 <= k <= 100`

## Hints

### Hint 1

Membership questions should be cheap — pour the array into a hash set first.

### Hint 2

The candidates only ever need to be tested in ascending order, and you can
stop at the very first one the set does not contain.

### Hint 3

Every candidate that is present consumes at least one array element, so the
walk finds a gap within n steps; that also caps the answer near the largest
value the array can hold, plus one more multiple.
