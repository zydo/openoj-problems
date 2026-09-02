# Reversal Distances

## Description

Start from an array `arr` of length `n` whose entries are all `0` except
for a single `1` sitting at index `p`. Some positions are off limits: the
array `banned` lists indices where the `1` is never allowed to rest. In one
move you may pick any window of exactly `k` consecutive cells inside `arr`
and reverse it — the move is legal precisely when, afterwards, the `1`
still stands on a permitted cell.

For every index `i` of `arr`, work out the smallest number of moves that
can carry the `1` from `p` to `i`. Return these values as an array
`answer`, using `-1` wherever `i` can never be reached. By convention
`answer[p]` is `0`.

### Example 1

```text
Input: n = 6, p = 0, banned = [], k = 4
Output: [0,3,2,1,2,3]
Explanation: The first move must flip the window covering cells 0-3, which
lands the 1 on cell 3. From there the reachable cells split by parity:
cells 2 and 4 take one more move, then cells 1 and 5 take one further move
each.
```

### Example 2

```text
Input: n = 6, p = 0, banned = [3], k = 4
Output: [0,-1,-1,-1,-1,-1]
Explanation: The only reachable landing cell after one move is 3, and 3 is
banned, so that move is illegal and the 1 is stuck at index 0 forever.
```

### Example 3

```text
Input: n = 5, p = 2, banned = [0], k = 3
Output: [-1,-1,0,-1,1]
Explanation: A size-3 window can carry the 1 from cell 2 to cell 4 (the
other landing cell, 0, is banned), and the odd-indexed cells are never on
any size-3 landing path from an even start.
```

### Constraints

- `1 <= n <= 10⁵`
- `0 <= p <= n - 1`
- `0 <= banned.length <= n - 1`
- `0 <= banned[i] <= n - 1`
- `1 <= k <= n`
- `banned[i] != p`
- all values in `banned` are unique

## Hints

### Hint 1

Each move relocates the `1` while leaving every other cell untouched, so
the answers are shortest-path distances in a graph whose nodes are the
permitted positions — breadth-first search from `p` computes them layer by
layer.

### Hint 2

If the `1` currently sits at `x`, reversing the window that starts at `l`
moves it to `2l + k - 1 - x`. For a fixed `x`, letting `l` run over its
whole valid range makes that landing spot sweep one contiguous block of
positions.

### Hint 3

Every landing spot inside that block shares one parity, which never changes
across moves. Avoid rescanning skipped cells by keeping, per parity, a
jump-pointer chain over the positions still unvisited.
