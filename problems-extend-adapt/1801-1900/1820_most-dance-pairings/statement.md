# Most Dance Pairings

## Description

A dance session brings together `m` leaders and `n` followers. Compatibility
between them is described by an `m x n` integer matrix `grid` of zeros and
ones: `grid[i][j] == 1` says leader `i` and follower `j` dance well together.

For the session, each leader can partner with at most one follower, and each
follower with at most one leader — and a pair may only form where the matrix
allows it.

Return the largest number of pairs the session can put on the floor at once.

### Example 1

```text
Input: grid = [[1,1,0],[0,1,1]]
Output: 2
Explanation: Pair leader 1 with follower 2 and leader 2 with follower 3.
Both pairs are compatible, and no arrangement reaches 3 since there are only
2 leaders.
```

### Example 2

```text
Input: grid = [[1,0],[1,0]]
Output: 1
Explanation: Both leaders are compatible only with follower 1, so at most
one pair can form no matter how the partnering is arranged.
```

### Example 3

```text
Input: grid = [[1,0,0,1],[0,1,1,0],[1,0,1,0],[0,1,0,1]]
Output: 4
Explanation: Pair each leader with the follower of the same index — every
such pair is compatible — so all 4 leaders dance simultaneously.
```

### Constraints

- `grid.length == m`, the number of leaders
- `grid[i].length == n`, the number of followers
- `1 <= m, n <= 200`
- `grid[i][j]` is `0` or `1`

### Hint 1

Read `grid` as a bipartite graph: an edge joins leader `i` to follower `j`
exactly when `grid[i][j]` is `1`, and a set of pairs is a set of edges that
share no endpoints.

### Hint 2

The largest such edge set is a maximum bipartite matching; grow it one pair
at a time and reroute earlier partners whenever an augmenting path exists.
