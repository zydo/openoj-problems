# Filling In the Lost Rolls

## Description

A die with faces numbered `1` through `6` was rolled `n + m` times, but the
results of `n` of those rolls were lost — only the `m` recorded rolls survive.
The average over all `n + m` rolls, however, was computed before anything went
missing.

You are given the recorded rolls as an integer array `rolls` of length `m`
(`rolls[i]` is the `i`th surviving result), together with the overall average
`mean` and the count of lost rolls `n`.

Reconstruct the lost rolls as an array of length `n` so that the average of all
`n + m` values is exactly `mean`. Every die result must lie between `1` and
`6`. If no reconstruction can achieve that average, return an empty array.

Several reconstructions may share the correct average, so judging is pinned to
one deterministic rule: spread the sum owed by the lost rolls as evenly as the
die allows, writing the larger values first. Formally, with `needed` the sum
the lost rolls must supply, let `base = needed / n` rounded down and
`remainder = needed mod n`; the first `remainder` positions hold `base + 1`
and every later position holds `base`.

An average of a set of `k` numbers is their sum divided by `k`. Since `mean`
is an integer, the sum of all `n + m` rolls is a multiple of `n + m`.

### Example 1

```text
Input: rolls = [4,5,6], mean = 5, n = 3
Output: [5,5,5]
Explanation: All six rolls must total 30. The survivors already sum to 15, so
the lost rolls supply the other 15 — three fives give average
(4 + 5 + 6 + 5 + 5 + 5) / 6 = 5.
```

### Example 2

```text
Input: rolls = [2,3], mean = 4, n = 5
Output: [5,5,5,4,4]
Explanation: Seven rolls must total 28 while the survivors sum to 5, leaving
23 for the five lost rolls. The rule above places three 5s ahead of two 4s,
and (2 + 3 + 5 + 5 + 5 + 4 + 4) / 7 = 4.
```

### Example 3

```text
Input: rolls = [6,6,6], mean = 1, n = 2
Output: []
Explanation: The survivors alone already exceed the required grand total of
5, so no die faces can bring the average down to 1.
```

### Constraints

- `m == rolls.length`
- `1 <= n, m <= 10⁵`
- `1 <= rolls[i], mean <= 6`

## Hints

### Hint 1

The whole session must total `mean * (m + n)`; subtract the recorded sum and
the difference is exactly what the lost rolls have to add up to.

### Hint 2

That required sum is achievable only between `n` (all ones) and `6 * n` (all
sixes). Inside that window, one division decides the balanced distribution.
