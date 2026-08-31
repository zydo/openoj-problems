# Cheapest Toll Path

## Description

You are given a 1-indexed integer array `coins` of length `n` and an
integer `maxJump`. Station `i` charges a toll of `coins[i]` the moment you
visit it, unless `coins[i] == -1`, which means station `i` is closed and
cannot be visited at all. From station `i` you may jump forward to any
station `i + k` with `i + k <= n`, for any `k` in the range `[1, maxJump]`.

Travel starts at station `1` (which is guaranteed open) and the goal is to
reach station `n` while paying as little total toll as possible, counting
every station visited along the way, start and end included.

Return the sequence of station indices visited on a cheapest route, in
order. If several cheapest routes exist, return the lexicographically
smallest one: comparing two index sequences position by position, the
first sequence where an earlier entry is smaller wins, and if one
sequence is a prefix of the other, the shorter one wins. If no route can
reach station `n`, return an empty array.

### Example 1

```text
Input: coins = [2,4,3,-1,3,1], maxJump = 2
Output: [1,3,5,6]
```

### Example 2

```text
Input: coins = [2,4,3,-1,3,1], maxJump = 1
Output: []
```

### Constraints

- `1 <= coins.length <= 1000`
- `-1 <= coins[i] <= 100`
- `coins[1] != -1`
- `1 <= maxJump <= 100`
