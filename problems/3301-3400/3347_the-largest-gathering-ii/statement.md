# The Largest Gathering II

## Description

This is the larger-scale companion to "The Largest Gathering": the same
gathering game, but the values are far bigger, so a strategy that walks
every possible target one by one will not finish in time.

Recap of the rules. You are given `nums` together with a reach `k` and a
budget of `numOperations` moves. Each move picks one index that no earlier
move has touched and adds some single integer between `-k` and `k`
(inclusive) to the value there. Every index is adjustable at most once,
and a move may add `0`, changing nothing. Afterwards, return the largest
frequency any single value can have.

### Example 1

```text
Input: nums = [1, 999999999, 1000000000], k = 1, numOperations = 1
Output: 2
Explanation: Move 999999999 up by 1 to join 1000000000 — a shift of 1,
within reach. Two entries now read 1000000000, and the lone 1 is far
outside anyone's reach.
```

### Example 2

```text
Input: nums = [5, 400000000, 800000000], k = 400000000, numOperations = 2
Output: 3
Explanation: Rally everything on 400000000: raise 5 by 399999995 and lower
800000000 by exactly k = 400000000. All three entries then agree.
```

### Example 3

```text
Input: nums = [10, 20, 30, 40], k = 10, numOperations = 3
Output: 3
Explanation: Bring 10 up to 20 and 30 down to 20 (each shift is 10) to get
three 20s. No single target can hold all four values, since they span 30
while each entry can move at most 10.
```

### Constraints

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^9`
- `0 <= k <= 10^9`
- `0 <= numOperations <= nums.length`

### Hints

- The best target can always be found among `nums[i] - k`, `nums[i]`, and
  `nums[i] + k` for some `i` — think about which element sits at the edge
  of the winning window.
- For a fixed target, two binary searches give the number of elements
  within reach and the number already on the target.
