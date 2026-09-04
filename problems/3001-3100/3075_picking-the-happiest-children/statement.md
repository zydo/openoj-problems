# Picking the Happiest Children

## Description

You are given an array `happiness` of length `n` and a positive integer
`k`. There are `n` children waiting in a line; child `i` carries the
happiness value `happiness[i]`. Over the next `k` turns you pick exactly
one child per turn.

Whenever a child is picked, every child still waiting loses exactly one
point of happiness, and no child's happiness may drop below zero — a child
already at zero stays there.

Choose the picks to make the sum of the happiness values of the `k` picked
children as large as possible, and return that largest possible sum.

### Example 1

```text
Input: happiness = [4,1,7,3], k = 2
Output: 10
Explanation: Pick the child with happiness 7 first; the waiting children
drop to [3,0,2]. Then pick the child now at 3, for a total of 7 + 3 = 10.
```

### Example 2

```text
Input: happiness = [9,9,9], k = 3
Output: 24
Explanation: Pick one 9, then another (now 8), then the last (now 7).
The picked values total 9 + 8 + 7 = 24.
```

### Example 3

```text
Input: happiness = [5,2], k = 2
Output: 6
Explanation: Pick the child with 5; the other child drops from 2 to 1.
Picking it brings the total to 5 + 1 = 6.
```

### Constraints

- `1 <= n == happiness.length <= 2 * 10⁵`
- `1 <= happiness[i] <= 10⁸`
- `1 <= k <= n`

## Hints

### Hint 1

Everyone still waiting loses happiness at the same rate, so which children
you pick matters far more than the mechanics of the queue — the `k`
largest values are the ones worth taking.

### Hint 2

The child picked in turn `i` (counting from zero) has shed exactly `i`
points by the time it is picked, so its contribution is its starting
value minus `i`.

### Hint 3

Clamp that contribution at zero — a waiting child never goes negative —
and sum the clamped contributions over the `k` largest values.
