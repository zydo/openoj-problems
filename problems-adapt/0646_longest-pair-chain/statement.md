# Longest Pair Chain

## Description

You are given `n` pairs, where `pairs[i] = [left_i, right_i]` and
`left_i < right_i`.

Pair `[c, d]` may be placed after pair `[a, b]` when `b < c`. A **chain** is a
sequence of pairs in which every pair may be placed after the one preceding it.

Return the largest number of pairs that can be arranged into a chain.

The pairs need not be used in the order given, and leftover pairs may be
discarded.

### Example 1

```text
Input: pairs = [[5,7],[1,4],[8,10]]
Output: 3
Explanation: The whole set chains as [1,4] -> [5,7] -> [8,10].
```

### Example 2

```text
Input: pairs = [[-5,-2],[-2,1],[0,3]]
Output: 2
Explanation: [-5,-2] and [-2,1] meet at -2, which is not a strict passing of
the baton, so they cannot both sit in one chain. [-5,-2] -> [0,3] gives 2.
```

### Example 3

```text
Input: pairs = [[10,20],[1,30],[2,3],[31,40],[4,5]]
Output: 4
Explanation: [2,3] -> [4,5] -> [10,20] -> [31,40] has four pairs. The wide
pair [1,30] fits nowhere without blocking more room than it is worth.
```

### Constraints

- `1 <= n <= 1000`
- `-1000 <= left_i < right_i <= 1000`

## Hints

### Hint 1

A pair you accept costs you only one thing: everything up to its right end.
Among the pairs you could accept next, which one costs the least?

### Hint 2

Order the pairs by right endpoint and sweep. Keep the right endpoint of the
last accepted pair, and accept the next candidate only when its left endpoint
lies strictly beyond it.

### Hint 3

To see the sweep is optimal, take any optimal chain and swap its first pair for
the candidate with the smallest right endpoint: everything later in the chain
stays legal, and the swap never shortens it. Repeat pair by pair.
