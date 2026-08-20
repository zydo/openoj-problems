# Tree Paths Through Exactly One Prime

## Description

An undirected tree has `n` nodes labeled `1` to `n`, described by the array
`edges` of length `n - 1`, where `edges[i] = [ui, vi]` joins nodes `ui` and
`vi`.

A path from `a` to `b` walks along edges through a sequence of distinct
nodes, starting at `a` and ending at `b`. Paths `(a, b)` and `(b, a)` are the
same path and count once.

Count the paths on which exactly one of the visited node labels is a prime
number.

### Example 1

```text
Input: n = 7, edges = [[1,4],[4,2],[4,6],[1,3],[3,7],[3,5]]
Output: 6
Explanation: The primes among the labels are 2, 3, 5 and 7. The paths
carrying exactly one of them are (1,2), (1,3), (2,4), (2,6), (3,4) and
(3,6) — for instance (2,6) runs 2 - 4 - 6 through the single prime 2,
while (5,6) runs 5 - 3 - 1 - 4 - 6 through both 5 and 3 and does not
qualify.
```

### Example 2

```text
Input: n = 8, edges = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8]]
Output: 8
Explanation: The tree is a chain. The qualifying paths are (1,2), (3,4),
(4,5), (4,6), (5,6), (6,7), (6,8) and (7,8): a chain path qualifies exactly
when it contains one of the primes 2, 3, 5, 7 and neither of the others.
```

### Example 3

```text
Input: n = 9, edges = [[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9]]
Output: 20
Explanation: Every path either is a single edge 1-x or has the form x-1-y.
An edge 1-x qualifies whenever x is prime (4 of them: 2, 3, 5, 7), and a
two-edge path x-1-y qualifies when exactly one of x, y is prime
(4 x 4 = 16). Together 4 + 16 = 20.
```

### Constraints

- `1 <= n <= 10^5`
- `edges.length == n - 1`
- `edges[i].length == 2`
- `1 <= ui, vi <= n`
- The edges form a valid tree.

## Hints

### Hint 1

Primality here is a property of node labels, so one sieve of Eratosthenes up
to `n` marks every prime node up front.

### Hint 2

Root the tree anywhere. For each node, keep two counters over downward paths
starting there: how many contain no prime node, and how many contain exactly
one.

### Hint 3

Fill the counters bottom-up: a prime node resets the zero-prime counter to 0
(itself already supplies the one prime), a composite node starts both from
scratch, and each child's counters merge in shifted or direct depending on
the node's own primality.

### Hint 4

Every path has a unique highest node, its apex. When a child's counters
arrive at the apex, pair them against the counters already accumulated from
earlier children — one-prime-total combinations at a prime apex, and
one-side-prime combinations at a composite apex — so each path is counted
exactly once, where its two halves meet.
