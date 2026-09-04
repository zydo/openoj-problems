# The Best Split Against A Tail Floor

## Description

An integer array `nums` of length `n` is given. Cut it into two non-empty
pieces by choosing a split index `i` with `0 <= i < n - 1`: the head is
`nums[0..i]` and the tail is everything from `nums[i + 1]` through
`nums[n - 1]`.

A split at `i` scores the head's total minus the tail's smallest value —

```text
score(i) = (nums[0] + ... + nums[i]) - min(nums[i + 1], ..., nums[n - 1])
```

— and the answer is the largest score any valid split reaches.

### Example 1

```text
Input: nums = [4,-2,7,1,-6]
Output: 16
Explanation: Splitting after index 3 gives head 4 + (-2) + 7 + 1 = 10 and a
tail whose only element -6 is also its minimum, so score(3) = 10 - (-6) = 16.
No other split does better.
```

### Example 2

```text
Input: nums = [-3,-8,2]
Output: 5
Explanation: Splitting after index 0 gives head -3 and tail floor -8, so
score(0) = -3 - (-8) = 5. Splitting after index 1 only manages
-11 - 2 = -13.
```

### Example 3

```text
Input: nums = [5,2]
Output: 3
Explanation: Index 0 is the only valid split, so the score is 5 - 2 = 3.
```

### Constraints

- `2 <= nums.length <= 10⁵`
- `-10⁹ <= nums[i] <= 10⁹`

## Hints

### Hint 1

Running prefix totals paired with running tail minimums do all the work.

### Hint 2

Tabulate the prefix sum at every index and the minimum of the elements after
every index.

### Hint 3

Walk the valid splits, take prefix minus tail minimum at each one, and keep
the largest value seen.
