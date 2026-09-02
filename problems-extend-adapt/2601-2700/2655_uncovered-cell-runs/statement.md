# Uncovered Cell Runs

## Description

Picture the indices `0` through `n - 1` of a row laid out left to right.
You are given `ranges`, a list of segments over that row, where each
segment `ranges[i] = [s, e]` claims every index from `s` through `e`,
both ends included. Segments may pile on top of one another freely.

Once all the claims are laid down, some indices remain uncovered. Group
the uncovered indices into the longest consecutive runs they form: every
uncovered index belongs to exactly one reported run, and no two reported
runs may sit directly next to each other — if they did, they would really
be one run. Return the runs in ascending order of their first index, each
as `[start, end]`.

### Example 1

```text
Input: n = 12, ranges = [[2,4],[8,10]]
Output: [[0,1],[5,7],[11,11]]
Explanation: Indices 2 through 4 and 8 through 10 are covered. Reading
the row left to right, the uncovered indices form the runs `[0,1]`,
`[5,7]`, and the lone index `11`, each cut off from the next by covered
cells.
```

### Example 2

```text
Input: n = 6, ranges = [[0,5]]
Output: []
Explanation: A single segment blankets the whole row, so no index is
left uncovered.
```

### Example 3

```text
Input: n = 9, ranges = [[4,6],[1,2],[3,5]]
Output: [[0,0],[7,8]]
Explanation: The segments overlap and together cover indices 1 through
6. Only index `0` ahead of them and indices `7` and `8` behind them stay
uncovered, giving two runs.
```

### Constraints

- `1 <= n <= 10⁹`
- `0 <= ranges.length <= 10⁶`
- `ranges[i].length = 2`
- `0 <= ranges[i][j] <= n - 1`
- `ranges[i][0] <= ranges[i][1]`

## Hints

### Hint 1

`n` can be enormous, so any plan that visits individual indices is
hopeless — work purely with segment endpoints.

### Hint 2

Process the segments in order of where they begin.

### Hint 3

An uncovered run always starts right after some segment ends (or at
index zero) and ends right before the next segment begins (or at the
last index).
