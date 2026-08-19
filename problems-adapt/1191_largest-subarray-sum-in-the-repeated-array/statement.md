# Largest Subarray Sum in the Repeated Array

## Description

You are given an integer array `arr` and a repeat count `k`. Write out `arr`
back to back `k` times — so `[4, 6]` with `k = 3` becomes
`[4, 6, 4, 6, 4, 6]`.

Find the largest sum of a contiguous stretch of the written-out array. A
stretch may be empty, and an empty one scores `0`.

Return the largest sum modulo `10⁹ + 7`.

### Example 1

```text
Input: arr = [2,3], k = 4
Output: 20
Explanation: Every element is positive, so the best stretch is the whole
written-out array: (2 + 3) * 4 = 20.
```

### Example 2

```text
Input: arr = [3,-4,6], k = 3
Output: 16
Explanation: The best stretch takes the 6 at the end of the first copy, the
whole middle copy, and then 3, -4, 6 from the last copy:
6 + (3 - 4 + 6) + (3 - 4 + 6) = 16 — a tail, a full copy, and a head.
```

### Example 3

```text
Input: arr = [-3,-1,-2], k = 6
Output: 0
Explanation: Every element is negative, so the empty stretch scores highest.
```

### Constraints

- `1 <= arr.length <= 10⁵`
- `1 <= k <= 10⁵`
- `-10⁴ <= arr[i] <= 10⁴`

## Hints

### Hint 1

Solve one copy first: the largest stretch sum found by the classic scan that
restarts whenever the running total drops below the empty stretch's 0.

### Hint 2

With several copies laid end to end, ask where the best stretch can sit. It
never needs more than a tail of one copy and a head of a later copy.

### Hint 3

Whatever lies between that tail and that head is a run of complete copies,
each pitching in the same total.

### Hint 4

Complete copies pay in only when one copy's total is positive; when it is
not, the best stretch hides inside two adjacent copies and no farther.
