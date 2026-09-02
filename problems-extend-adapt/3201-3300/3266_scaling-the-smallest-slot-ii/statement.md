# Scaling The Smallest Slot II

## Description

You are given an integer array `nums` along with two integers `k` and
`multiplier`. Carry out exactly `k` rounds of the same operation:

- Locate the smallest value in `nums`. When the minimum shows up several
  times, take the leftmost of those slots.
- Multiply that slot's value by `multiplier`.

When all `k` rounds have run, reduce every entry modulo `10⁹ + 7` and
output the resulting array.

### Example 1

```text
Input: nums = [3,1,4], k = 5, multiplier = 2
Output: [6,8,8]
Explanation: The rounds scale 1 to 2, then 2 to 4, then 3 to 6, then the
two 4s in left-to-right order, leaving [6,8,8]; the reduction changes
nothing at these sizes.
```

### Example 2

```text
Input: nums = [6,2,8], k = 7, multiplier = 3
Output: [54,54,72]
Explanation: The first round lifts the 2 to 6. Every multiplication after
that overshoots the maximum, so the remaining six rounds sweep the three
slots in ascending order twice — scaling each entry by 9 overall and
ending at [54,54,72].
```

### Example 3

```text
Input: nums = [123456,654321], k = 3, multiplier = 1000000
Output: [135808007,320995422]
Explanation: The very first multiplication already jumps far past the
maximum, so the remaining rounds alternate in ascending order: the smaller
value is multiplied twice and the larger once. The results
123456·10¹² and 654321·10⁶ are then reduced modulo 10⁹ + 7.
```

### Constraints

- `1 <= nums.length <= 10⁴`
- `1 <= nums[i] <= 10⁹`
- `1 <= k <= 10⁹`
- `1 <= multiplier <= 10⁶`

## Hints

### Hint 1

Ask what changes at the moment scaling the smallest slot would vault it
past the array's largest value.

### Hint 2

From that point the rounds begin to cycle: the same ascending order of
slots repeats over and over.

### Hint 3

Simulate only up to the crossover, then split the leftover rounds into a
quotient and a remainder of full sweeps, and reduce at the very end.
