# Minimum Pairing Distance

## Description

Two lists of lattice positions are given, `points` and `anchors`, each entry
written as a pair `[x, y]`. The first list is never longer than the second.

Tie each point to an anchor of its own — no anchor may take two points — and
add up the Manhattan distances of the ties. Return the smallest total any legal
tying reaches. Anchors nobody claims are simply left alone and cost nothing.

The Manhattan distance between `[x1, y1]` and `[x2, y2]` is
`|x1 - x2| + |y1 - y2|`.

### Example 1

```text
Input: points = [[1,1],[4,5]], anchors = [[2,3],[7,6]]
Output: 7
Explanation: Tying the first point to the first anchor costs 3 and the second
pair costs 4. Crossing the ties instead costs 11 + 4.
```

### Example 2

```text
Input: points = [[0,0],[0,3]], anchors = [[0,2],[0,4]]
Output: 3
Explanation: All four positions sit on one vertical line. The closest single
tie available is the one of length 1 between [0,3] and [0,4], but taking it
forces a tie of length 4 for the remaining point, totalling 5. Settling for
lengths 2 and 1 instead totals 3, so the cheapest individual tie is not part of
the cheapest overall answer.
```

### Example 3

```text
Input: points = [[2,2],[6,1],[3,5]], anchors = [[1,3],[7,2],[8,8],[4,4]]
Output: 6
Explanation: Each point has an anchor at distance 2 available, and no two of
those three choices conflict, so the total is 6 and the anchor at [8,8] goes
unused.
```

### Constraints

- `1 <= points.length <= anchors.length <= 10`
- Every entry of either list holds exactly two coordinates
- Coordinates satisfy `0 <= x < 1000` and `0 <= y < 1000`
- No two of the listed positions coincide

## Hints

### Hint 1

Trying every tying is a factorial number of possibilities, but notice what
actually distinguishes one half-finished tying from another: only *which*
anchors have been taken, never the order they were taken in.

### Hint 2

At most ten anchors exist, so that set is ten bits. And the number of bits set
already tells you how many points are done — so if you always tie the points in
the order they were given, the mask alone is the whole state.

### Hint 3

Let `best[mask]` be the cheapest total that ties the first `popcount(mask)`
points using exactly the anchors in `mask`. Sweeping masks in increasing numeric
order is a valid processing order, because setting a bit only makes the number
bigger.
