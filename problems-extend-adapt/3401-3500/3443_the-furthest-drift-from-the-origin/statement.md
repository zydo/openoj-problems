# The Furthest Drift From The Origin

## Description

A walker starts at the origin `(0, 0)` of an endless grid and follows a
string `s` step by step. Each character of `s` is one of `'N'`, `'S'`,
`'E'`, `'W'` and moves one unit:

- `'N'`: one unit north (up),
- `'S'`: one unit south (down),
- `'E'`: one unit east (right),
- `'W'`: one unit west (left).

Before or during the walk you may rewrite at most `k` characters of `s`,
each into whichever of the four directions you like.

Report the largest Manhattan distance from the origin the walker ever
reaches while carrying out the (possibly rewritten) steps in order. The
Manhattan distance between cells `(xi, yi)` and `(xj, yj)` is
`|xi - xj| + |yi - yj|`.

### Example 1

```text
Input: s = "NEWS", k = 1
Output: 3
Explanation: Rewriting s[2] from 'S' to 'N' turns s into "NWNE".

    Movement     Position (x, y)   Manhattan Distance
    s[0] == 'N'  (0, 1)            0 + 1 = 1
    s[1] == 'W'  (-1, 1)           1 + 1 = 2
    s[2] == 'N'  (-1, 2)           1 + 2 = 3
    s[3] == 'E'  (0, 2)            0 + 2 = 2

The furthest point reached sits 3 units from the origin.
```

### Example 2

```text
Input: s = "SSEN", k = 2
Output: 4
Explanation: Rewrite s[2] from 'E' to 'S', making the walk "SSSS", which
carries the walker down to (0, -4) — 4 units from the origin. No rewrite
plan gets further.
```

### Example 3

```text
Input: s = "NWS", k = 1
Output: 3
Explanation: Rewriting the final 'S' to 'N' gives "NWN", whose third step
puts the walker at (-1, 2), a distance of 3.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `0 <= k <= s.length`
- `s` consists of only 'N', 'S', 'E', and 'W'.

## Hints

### Hint 1

Only the corner the walker is being pushed toward matters, so try all four
north-east/south-west sign combinations instead of one fixed target.

### Hint 2

Within a fixed corner, every step either helps (contributes +1) or hurts
(contributes -1); spending a rewrite on a hurting step always buys exactly
2 units, so repair up to `k` of them.
