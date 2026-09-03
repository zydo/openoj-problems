# Or Together The Even Values

## Description

You are given an integer array `nums`. Combine every even value it holds
into a single bitwise OR and return that value.

An array with no even values at all yields `0`.

### Example 1

```text
Input: nums = [10,3,5,14,6]
Output: 14
Explanation: The even entries are 10, 14 and 6, and 10 | 14 | 6 = 14; both
10 and 6 only carry bits that 14 already has.
```

### Example 2

```text
Input: nums = [9,7,1]
Output: 0
Explanation: Nothing in the array is even, so the fold never happens and
the answer is 0.
```

### Example 3

```text
Input: nums = [12,12,20]
Output: 28
Explanation: Repeating 12 changes nothing — OR is idempotent — so the
result is 12 | 20 = 28.
```

### Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`

## Hints

### Hint 1

Scan the array once with an accumulator that starts at `0` — the identity
of OR — and fold in each element that passes the even test.
