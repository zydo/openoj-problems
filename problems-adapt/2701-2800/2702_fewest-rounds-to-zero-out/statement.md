# Fewest Rounds To Zero Out The Array

## Description

You are given an integer array `nums` and two decrement amounts `x` and
`y`, where `x` is strictly larger than `y`. Each round you single out one
index of the array; that slot drops by `x`, while every other slot drops
by `y`.

Return the fewest number of rounds after which every value in `nums` has
reached zero or gone below it.

### Example 1

```text
Input: nums = [5,2,9], x = 6, y = 3
Output: 2
Explanation: Pick index 2 in the first round, leaving [-2,-1,3]. Pick
index 2 again, leaving [-5,-4,-3]. Every value is now non-positive, so
two rounds are enough.
```

### Example 2

```text
Input: nums = [10,10,10,10], x = 7, y = 4
Output: 3
Explanation: After three rounds each slot has absorbed a decrement of
12, picked or not. Two rounds fall short: each slot would sit at 8, and
pushing all four slots past zero needs four extra picks while two rounds
supply only two.
```

### Example 3

```text
Input: nums = [8], x = 5, y = 1
Output: 2
Explanation: With a single slot there is nothing to boost but that slot
itself, so it falls by 5 each round: 8 becomes 3, then -2.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`
- `1 <= y < x <= 10⁹`

### Hint 1

Once a round count `t` is fixed, the schedule of picks stops mattering:
slot `i` simply collects `t` shares of `y` plus one extra `x - y` every
time it is the picked one. That makes a candidate count checkable in a
single pass over the values.

### Hint 2

Raising the round count never hurts, so the pass/fail boundary is
monotone — binary search for the smallest count that passes.
