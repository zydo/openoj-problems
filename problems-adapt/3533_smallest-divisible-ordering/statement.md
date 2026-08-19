# Smallest Divisible Ordering

## Description

You are given a list of positive integers `nums` and a positive integer `k`.

Arrange the numbers in some order and write their decimal digits side by side,
forming one long number. Such an arrangement is **valid** when the long number
is divisible by `k`.

Return the valid arrangement that is lexicographically smallest, read as a
list of integers. If no arrangement is valid, return an empty list.

### Example 1

```text
Input: nums = [5,42,9], k = 5
Output: [9,42,5]
Explanation: The joined digits must end in 0 or 5, and only the number 5 can
supply that final digit, so 5 sits last. Both [42,9,5] and [9,42,5] are valid,
and [9,42,5] is the smaller list because 9 < 42.
```

### Example 2

```text
Input: nums = [6,40], k = 4
Output: [6,40]
Explanation: Joining 6 before 40 gives 640 = 4 · 160, which is divisible by 4.
The other arrangement gives 406, which is not.
```

### Example 3

```text
Input: nums = [2,4,6,8], k = 5
Output: []
Explanation: Whichever number is placed last, the joined digits end in 2, 4,
6, or 8 — never 0 or 5 — so no arrangement is divisible by 5.
```

### Constraints

- `1 <= nums.length <= 13`
- `1 <= nums[i] <= 10⁵`
- `1 <= k <= 100`

## Hints

### Hint 1

Every arrangement could be tried one by one, but with up to 13 numbers that is
13! candidates. What information do two partial arrangements share that would
let you merge their search?

### Hint 2

Appending a number `x` onto digits whose value is congruent to `r` modulo `k`
produces a new congruence computable from `r`, `x`, and the digit count of
`x` alone — the earlier digits beyond `r` never matter.

### Hint 3

So the set of numbers already placed plus the current congruence is a complete
state. Both dimensions are small: a bitmask of 13 numbers and `k` remainders.

### Hint 4

Build the answer left to right: at each position take the smallest number
whose placement leaves the state completable. Prove that taking it can always
be finished before you trust the greed.
