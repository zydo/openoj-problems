# Counting Matching Domino Pairs

## Description

A domino is a pair `[a, b]`. Two dominoes `[a, b]` and `[c, d]` match when
they carry the same two pips regardless of orientation — that is, when
`a == c` and `b == d`, or when `a == d` and `b == c` (one rotated to match
the other).

Given a list `dominoes`, count the unordered pairs of positions
`i < j` whose dominoes match, and return that count.

### Example 1

```text
Input: dominoes = [[2,5],[5,2],[7,1]]
Output: 1
```

`[2,5]` and `[5,2]` are one rotation apart, so they form the only
matching pair.

### Example 2

```text
Input: dominoes = [[1,1],[2,2],[1,1],[2,2],[1,1]]
Output: 4
```

Three copies of `[1,1]` contribute three pairs and two copies of `[2,2]`
contribute one more.

### Example 3

```text
Input: dominoes = [[3,3],[4,4],[3,3],[4,4]]
Output: 2
```

A double matches only itself — each matching class here holds two
dominoes, giving one pair apiece.

### Constraints

- `1 <= dominoes.length <= 4 * 10⁴`
- `dominoes[i].length == 2`
- `1 <= dominoes[i][j] <= 9`

## Hints

### Hint 1

Each new domino only needs to know how many earlier ones it matches —
pairs are completed the moment their second half appears.

### Hint 2

Rotate every domino so its smaller pip leads; matching dominoes then
share one identical key you can count in a table.
