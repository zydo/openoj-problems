# Restless Friends After Pairing

## Description

There are `n` friends, numbered `0` through `n - 1`, and `n` is even.
`preferences[i]` is friend `i`'s ranking of all the others from most to
least preferred: the sooner a friend shows up in `preferences[i]`, the
more `i` would like to be paired with them.

The friends have already been divided into `n / 2` pairs. `pairs` lists
them, and `pairs[k] = [x, y]` means `x` and `y` are currently paired.

A friend `x` whose partner is `y` is _restless_ when some other friend
`u` — whose partner is `v` — satisfies both of these:

- `x` ranks `u` ahead of `y`, and
- `u` ranks `x` ahead of `v`.

In words, `x` and `u` would each rather be paired with the other than
with the partner they ended up with. Return how many of the friends are
restless.

### Example 1

```text
Input: n = 4, preferences = [[3,2,1],[0,3,2],[3,0,1],[0,1,2]], pairs = [[0,1],[2,3]]
Output: 2
Explanation: Friend 0 ranks friend 3 ahead of their partner 1, and
friend 3 ranks friend 0 ahead of their partner 2, so both qualify.
Friends 1 and 2 each got their top choice as a partner, so neither has
any reason to switch.
```

### Example 2

```text
Input: n = 4, preferences = [[3,1,2],[2,0,3],[1,3,0],[0,2,1]], pairs = [[0,3],[1,2]]
Output: 0
Explanation: Every friend was paired with their first choice, so no one
prefers anybody else over their own partner and nobody is restless.
```

### Example 3

```text
Input: n = 6, preferences = [[4,2,3,5,1],[0,2,3,4,5],[5,0,1,3,4],[2,0,1,4,5],[0,1,2,3,5],[2,0,1,3,4]], pairs = [[0,1],[2,3],[4,5]]
Output: 4
Explanation: Friends 0 and 4 each rank the other ahead of their current
partners, and friends 2 and 5 do the same, so those four are restless.
Friends 1 and 3 both received their top choice and stay content.
```

### Constraints

- `2 <= n <= 500` and `n` is even.
- `preferences.length == n`, and every `preferences[i]` holds each friend
  other than `i` exactly once.
- `pairs.length == n / 2`, `pairs[i].length == 2`, and the two entries of
  a pair differ.
- Every friend appears in exactly one pair.

## Hints

### Hint 1

Precompute a `rank` table where `rank[i][j]` says how highly friend `i`
places friend `j`. Then "does `i` prefer `j` over `k`" becomes a single
constant-time comparison rather than a search through `preferences[i]`.

### Hint 2

For every friend `x` and every candidate `u` outside `x`'s own pair,
check the two rank comparisons directly; the first `u` that satisfies
both marks `x` as restless.
