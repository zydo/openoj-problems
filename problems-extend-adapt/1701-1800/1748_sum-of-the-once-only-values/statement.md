# Sum of the Once-Only Values

## Description

Call a value in an integer array `nums` a singleton when it appears in
the array exactly once. Add up every singleton and return the total; an
array with no singleton contributes nothing and sums to 0.

### Example 1

```text
Input: nums = [9,4,9,7,7,2]
Output: 6
Explanation: Only 4 and 2 appear once — 9 and 7 each appear twice and
are skipped — so the sum is 4 + 2 = 6.
```

### Example 2

```text
Input: nums = [6,6,6]
Output: 0
Explanation: The only value present is repeated, so nothing qualifies.
```

### Example 3

```text
Input: nums = [3,8,8,3,5]
Output: 5
Explanation: Both 3 and 8 repeat, leaving the lone 5 to carry the
whole sum.
```

### Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`

## Hints

### Hint 1

Tally how many times each value occurs before deciding what counts.

### Hint 2

With values capped at 100, a fixed 101-slot count array does the
tallying; then keep exactly the values whose tally is 1.
