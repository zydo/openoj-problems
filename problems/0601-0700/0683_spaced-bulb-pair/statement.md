# Spaced Bulb Pair

## Description

A row contains `n` bulbs numbered from `1` through `n`, all initially
off. Exactly one bulb is switched on each day; after `n` days, every
bulb is on.

The permutation `bulbs` gives that activation schedule: if
`bulbs[i] = x`, then bulb `x` is switched on day `i + 1`. Given a
nonnegative integer `k`, find the earliest day on which two switched-on
bulbs have exactly `k` bulbs between them and every bulb in that gap is
still off. Return `-1` if that arrangement never occurs.

### Example 1

```text
Input: bulbs = [4,1,3,2], k = 1
Output: 3
Explanation:
Day 1 turns on bulb 4: [0,0,0,1].
Day 2 turns on bulb 1: [1,0,0,1].
Day 3 turns on bulb 3: [1,0,1,1]. Bulbs 1 and 3 are on with exactly
one still-off bulb between them, so day 3 is the first answer.
```

### Example 2

```text
Input: bulbs = [2,1,4,3], k = 1
Output: 3
Explanation: On day 3, bulbs 2 and 4 are on while bulb 3 between them
is still off. No qualifying pair exists sooner.
```

### Example 3

```text
Input: bulbs = [2,3,1], k = 0
Output: 2
Explanation: A gap of zero means the two lit bulbs must be adjacent.
Bulbs 2 and 3 are both on after day 2.
```

### Constraints

- `n == bulbs.length`
- `1 <= n <= 2 * 10⁴`
- `1 <= bulbs[i] <= n`
- `bulbs` is a permutation of the integers from `1` to `n`.
- `0 <= k <= 2 * 10⁴`
