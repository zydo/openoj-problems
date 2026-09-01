# Strongest Signal Point

## Description

A collection of network towers is described by the array `towers`, where
`towers[i] = [xi, yi, qi]` places the `i`-th tower on the integer grid
point `(xi, yi)` and gives it quality factor `qi`. All distances are
ordinary Euclidean distances.

An integer `radius` bounds how far each tower reaches. A tower only
matters at points lying within distance `radius` of it; past that range
its signal is treated as absent.

At a point `(x, y)`, each in-range tower contributes a signal strength of
`⌊qi / (1 + d)⌋`, where `d` is the distance from that tower to `(x, y)`
and `⌊val⌋` denotes the floor of `val`. The network quality of the point
is the sum of the contributions of every tower within its reach.

Return the integer coordinate `[cx, cy]` whose network quality is
highest. Should several points tie at that maximum, report the
lexicographically smallest coordinate with non-negative components:
`(x1, y1)` comes before `(x2, y2)` when `x1 < x2`, or when `x1 == x2`
and `y1 < y2`.

### Example 1

![diagram](figures/1620-1.svg)

```text
Input: towers = [[1,2,5],[2,1,7],[3,1,9]], radius = 2
Output: [2,1]
Explanation: Standing at (2, 1), the tower on that very spot is at
distance 0 and gives ⌊7 / (1 + 0)⌋ = 7; the tower at (1, 2) is
sqrt(2) away and gives ⌊5 / (1 + sqrt(2))⌋ = 2; the tower at (3, 1)
is at distance 1 and gives ⌊9 / (1 + 1)⌋ = 4. The total is 13, and
no other integer point scores higher.
```

### Example 2

```text
Input: towers = [[12,8,6]], radius = 4
Output: [12,8]
Explanation: With a single tower, the strongest reception is at the
tower's own grid point, where the distance is 0 and the full
⌊6 / (1 + 0)⌋ = 6 is received; every other in-range point is farther
away and receives less.
```

### Example 3

```text
Input: towers = [[0,0,10],[2,0,10]], radius = 5
Output: [0,0]
Explanation: Points (0, 0) and (2, 0) each score ⌊10/1⌋ + ⌊10/3⌋ =
10 + 3 = 13, while the point (1, 0) between them manages only
5 + 5 = 10. The best score is tied, and of the two winners (0, 0) is
lexicographically smaller.
```

### Constraints

- `1 <= towers.length <= 50`
- `towers[i].length == 3`
- `0 <= xi, yi, qi <= 50`
- `1 <= radius <= 50`

## Hints

### Hint 1

Both coordinates of every tower fall in `[0, 50]`, so the whole
candidate grid holds at most `51 * 51` points — small enough to score
each point directly.

### Hint 2

Scoring one point is a single pass over the towers: skip any tower
farther than `radius` away, and otherwise add
`⌊qi / (1 + d)⌋` using the true Euclidean `d`.
