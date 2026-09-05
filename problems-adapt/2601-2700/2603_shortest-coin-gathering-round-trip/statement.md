# Shortest Coin-Gathering Round Trip

## Description

You are given an unrooted tree with `n` nodes numbered `0` to `n - 1`, as an
array `edges` of `n - 1` pairs, and an array `coins` where `coins[i]` is `1`
exactly when node `i` holds a coin.

Pick any node to start on. From wherever you stand you may, at any moment,
sweep up every coin lying within distance `2` of your node — the distance
being the number of edges between you and the coin. You may also walk to an
adjacent node, and each edge crossed counts once per crossing.

Collect every coin and return to your starting node. Return the smallest
possible number of edge crossings.

### Example 1

```text
Input: coins = [0,1,0,1,0], edges = [[0,1],[1,2],[2,3],[3,4]]
Output: 0
Explanation: Both coins sit one edge away from node 2, so standing there and
sweeping once gathers everything — no walking at all.
```

### Example 2

```text
Input: coins = [1,0,0,0,0,0,0,0,0,1],
       edges = [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9]]
Output: 10
Explanation: A path of ten nodes with coins on both ends. Sweeping covers two
edges of reach, so a round trip over the middle six nodes (2 through 7)
suffices: 5 edges out and 5 back.
```

### Example 3

```text
Input: coins = [0,0,0,0,1,0,0,0,1,0,0,0,1,0],
       edges = [[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],
                [0,9],[9,10],[10,11],[11,12],[5,13]]
Output: 12
Explanation: Three arms of length 4 grow from node 0, each ending in a coin,
and node 13 is a coinless dead end (never worth entering). After dropping the
coinless stub and the last two layers of each arm, the nodes 0, 1, 2, 5, 6,
9, 10 remain; a round trip over that subtree crosses 6 edges twice — 12.
```

### Constraints

- `n == coins.length`
- `1 <= n <= 3 * 10⁴`
- `coins[i]` is `0` or `1`
- `edges.length == n - 1`
- `edges[i].length == 2`
- `0 <= aᵢ, bᵢ < n`
- `aᵢ != bᵢ`
- `edges` forms a valid tree

## Hints

### Hint 1

A leaf with no coin on it is never worth stepping onto — and removing it may
expose another useless leaf. Prune until every remaining leaf holds a coin.

### Hint 2

With distance-2 sweeps, the last two layers of the pruned tree never need to
be entered either: the coins on its leaves are reachable from two edges
inward.

### Hint 3

Strip two more layers of leaves from the pruned tree. Whatever survives is
the smallest subtree the walk must cover.

### Hint 4

A closed walk around a subtree with `r` nodes crosses each of its `r - 1`
edges exactly twice, so the answer is `(r - 1) * 2` — clamped at `0` when
nothing survives the pruning.
