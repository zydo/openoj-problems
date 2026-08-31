# Quietest Richer Person

## Description

There are `n` people numbered from `0` through `n - 1`. A pair `[a, b]` in
`richer` states that person `a` is definitely wealthier than person `b`.
These observations are consistent, so they never imply a wealth cycle. The
array `quiet` gives each person's distinct quietness score; smaller values are
quieter.

For every person `x`, return the index of the quietest person who is either
`x` or is known, directly or indirectly, to be at least as wealthy as `x`.

### Example 1

```text
Input: richer = [[0,1],[1,2]], quiet = [0,2,1]
Output: [0,0,0]
Explanation: Person 0 is quieter than both people below them in the wealth
relation, so it is the best answer for each position.
```

### Example 2

```text
Input: richer = [[1,0],[2,0]], quiet = [3,2,1]
Output: [2,1,2]
```

### Example 3

```text
Input: richer = [], quiet = [2,0,1]
Output: [0,1,2]
Explanation: With no wealth observations, each person can only choose themself.
```

### Constraints

- `n == quiet.length`, and `1 <= n <= 500`.
- `quiet` is a permutation of the integers from `0` through `n - 1`.
- `richer` has from `0` to `n * (n - 1) / 2` distinct pairs.
- Every pair `[a, b]` has distinct indices in `[0, n)`.
- The wealth observations are logically consistent.
