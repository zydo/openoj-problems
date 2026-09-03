# Strongest Beacon In Reach

## Description

A field of beacons covers a grid. The `beacons` array describes them:
`beacons[i] = [xi, yi, qi]` places beacon `i` at `(xi, yi)` and gives it
signal strength `qi`. You are standing at `center = [cx, cy]`, and a
beacon reaches you only when its Manhattan distance from you,
`|xi - cx| + |yi - cy|`, is at most `radius`.

Which beacon do you hear best? Among the beacons within reach, return
the position of the one carrying the largest `qi`. When several
in-range beacons share that largest strength, return the position that
is lexicographically smallest — compare `x` first, then `y`. If not a
single beacon reaches you, return `[-1, -1]`.

The Manhattan distance between two points `(xi, yi)` and `(xj, yj)` is
`|xi - xj| + |yi - yj|`. A position `[xi, yi]` is lexicographically
smaller than `[xj, yj]` when `xi < xj`, or when `xi == xj` and
`yi < yj`.

### Example 1

```text
Input: beacons = [[2,4,6], [4,2,9], [3,3,12]], center = [2,2], radius = 3
Output: [3,3]
Explanation:
    Beacon [2, 4, 6]: distance = |2 - 2| + |4 - 2| = 2, in range.
    Beacon [4, 2, 9]: distance = |4 - 2| + |2 - 2| = 2, in range.
    Beacon [3, 3, 12]: distance = |3 - 2| + |3 - 2| = 2, in range.
    All three reach you, and the strongest signal, 12, sits at
    position [3, 3].
```

### Example 2

```text
Input: beacons = [[1,5,10], [3,1,10], [6,6,20]], center = [0,0], radius = 7
Output: [1,5]
Explanation:
    Beacon [1, 5, 10]: distance = 1 + 5 = 6, in range.
    Beacon [3, 1, 10]: distance = 3 + 1 = 4, in range.
    Beacon [6, 6, 20]: distance = 6 + 6 = 12, out of range.
    The two in-range beacons tie with strength 10, and [1, 5] is the
    lexicographically smaller of their positions.
```

### Example 3

```text
Input: beacons = [[3,3,5], [7,1,9]], center = [0,0], radius = 6
Output: [3,3]
Explanation:
    Beacon [3, 3, 5]: distance = 3 + 3 = 6, in range.
    Beacon [7, 1, 9]: distance = 7 + 1 = 8, out of range — its signal
    of 9 never reaches you.
    Only [3, 3] is audible, so it is the answer.
```

### Example 4

```text
Input: beacons = [[8,8,15], [2,9,7]], center = [1,1], radius = 5
Output: [-1,-1]
Explanation:
    Beacon [8, 8, 15]: distance = 7 + 7 = 14, out of range.
    Beacon [2, 9, 7]: distance = 1 + 8 = 9, out of range.
    Nothing is within reach, so [-1, -1] is returned.
```

### Constraints

- `1 <= beacons.length <= 10⁵`
- `beacons[i] = [xi, yi, qi]`
- `center = [cx, cy]`
- `0 <= xi, yi, qi, cx, cy <= 10⁵`
- `0 <= radius <= 10⁵`

## Hints

### Hint 1

No beacon influences any other, so one scan over the array is enough to
settle everything.

### Hint 2

Compute `abs(xi - cx) + abs(yi - cy)` for each beacon and drop it from
consideration whenever the value exceeds `radius`.

### Hint 3

Among the survivors keep a running champion: a strictly larger `qi`
takes the lead, and on a `qi` tie the lexicographically earlier
position does.

### Hint 4

If the scan never promotes any beacon, a champion never existed —
answer `[-1, -1]`.
