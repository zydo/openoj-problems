# Factorials With K Trailing Zeros

## Description

Write `z(n)` for the count of zeros that sit at the very end of the decimal
form of `n!`, where `n! = 1 * 2 * ... * n` and `0! = 1`. So `z(4) = 0`, because
`4! = 24`, and `z(10) = 2`, because `10! = 3628800`.

You are handed a target `k`. Report how many non-negative integers `n` satisfy
`z(n) = k`.

### Example 1

```text
Input: k = 2
Output: 5
Explanation: n = 10, 11, 12, 13, 14 all give a factorial ending in exactly two
zeros; nothing else does.
```

### Example 2

```text
Input: k = 11
Output: 0
Explanation: z(49) = 10 and z(50) = 12. The tally never rests on 11, so no
factorial ends in eleven zeros.
```

### Example 3

```text
Input: k = 6
Output: 5
Explanation: n = 25 through 29. Note that z jumps from 4 straight to 6 here,
which is why six is reachable and five is not.
```

### Constraints

- `k` is an integer with `0 <= k <= 10^9`

## Hints

### Hint 1

A trailing zero needs a factor of 10, and in a factorial the twos vastly
outnumber the fives, so the answer is really "how many fives divide `n!`".
Count them by tiers: every fifth number gives one, every twenty-fifth gives a
second, every hundred-and-twenty-fifth a third.

### Hint 2

`z` never decreases as `n` grows, so the set of `n` reaching any given tally is
a contiguous block. Bisect for the first `n` whose tally is at least `k`, then
ask whether it landed on `k` exactly or overshot.

### Hint 3

Between one multiple of five and the next, `z` holds still, so a reachable
tally is shared by five consecutive values of `n`. Every answer is therefore
either five or nothing — the only question is whether `k` was skipped over at a
multiple of twenty-five.
