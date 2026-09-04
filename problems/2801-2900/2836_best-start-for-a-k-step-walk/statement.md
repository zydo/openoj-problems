# Best Start for a k-Step Walk

## Description

You are given an array `receiver` of length `n` and an integer `k`. A token
sitting on cell `i` always moves next to cell `receiver[i]`, which may be the
cell itself; several cells may share the same destination.

Choose the starting cell. The token then moves exactly `k` times, and the
walk's score is the sum of the indices of every cell it occupies — the
starting cell plus each cell it lands on, repetitions included.

Return the highest score over all choices of starting cell.

### Example 1

```text
Input: receiver = [1,2,0], k = 4
Output: 6
Explanation: The three cells form the cycle 0 -> 1 -> 2 -> 0. Starting at
cell 1 the walk occupies 1, 2, 0, 1, 2 and scores 6; starting at 2 scores 5
and starting at 0 scores 4.
```

### Example 2

```text
Input: receiver = [1,2,3,1], k = 4
Output: 11
Explanation: Cell 0 feeds into the ring 1 -> 2 -> 3 -> 1. Starting on cell 2
collects 2 + 3 + 1 + 2 + 3 = 11, more than any other start.
```

### Example 3

```text
Input: receiver = [1,0], k = 10000000000
Output: 5000000001
Explanation: The two cells toss the token back and forth. Starting on cell 1,
the walk occupies 10000000001 cells in all — 5000000001 of them cell 1 and
the rest cell 0 — so the score is 5000000001.
```

### Constraints

- `1 <= receiver.length == n <= 10⁵`
- `0 <= receiver[i] <= n - 1`
- `1 <= k <= 10¹⁰`

## Hints

### Hint 1

From any cell the route is completely determined, so "where the token is
after m steps" is a function of m that you can precompute by powers of two.

### Hint 2

For every cell `x` and level `i`, store where `2^i` steps carry the token
from `x`, and the index sum gathered along the way.

### Hint 3

Each level composes two of the one below — jump once, jump again from the
landing spot, and add the two sums.

### Hint 4

Split `k` into powers of two, combine the jumps for each starting cell, and
take the best total; the starting index itself counts toward the score.
