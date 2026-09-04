# Most Points In One Sweep

## Description

You stand at a fixed position `location = [posx, posy]` on the X-Y plane,
with points `points[i] = [xi, yi]` scattered around you, all coordinates
integers. You never move — the only control you have is where you point
your field of view. That field is an arc `angle` degrees wide: choosing a
counterclockwise rotation `d` makes everything inside the inclusive range
`[d - angle / 2, d + angle / 2]` visible.

A point counts as visible when the direction from your position to that
point, measured counterclockwise from due east, lands inside the field
you chose. Points never get in each other's way. Several points may
share one coordinate, and any point sitting exactly at your own position
is visible no matter where you aim.

Return the largest number of points that can be visible at the same
moment.

### Example 1

![diagram](figures/1610-1.svg)

```text
Input: points = [[2,1],[2,2],[3,3]], angle = 90, location = [1,1]
Output: 3
Explanation: A single 90-degree field can be aimed so that all three
points fall inside it. [3,3] stays visible even though [2,2] lies in
front of it along the same line of sight, because points do not occlude
one another.
```

### Example 2

```text
Input: points = [[5,1],[2,3],[6,4],[1,6],[4,5]], angle = 120, location = [3,3]
Output: 3
Explanation: Aim the field to run from just before the direction of
[6,4] round to just past [1,6]; that 120-degree stretch holds [6,4],
[4,5], and [1,6]. The other two points lie too far around the circle to
join any such stretch.
```

### Example 3

![diagram](figures/1610-2.svg)

```text
Input: points = [[1,0],[2,1]], angle = 13, location = [1,1]
Output: 1
Explanation: Seen from your position, the two directions are much more
than 13 degrees apart, so one narrow field can never hold both points at
once.
```

### Constraints

- Between `1` and `10⁵` points are given, each a pair `[xi, yi]`.
- The watching position is `[posx, posy]`.
- `0 <= angle < 360`
- `0 <= posx, posy, xi, yi <= 100`

## Hints

### Hint 1

Every point away from your position collapses to a single number: its
polar angle around your position, measured from due east. Points at your
position are free and can be set aside.

### Hint 2

Since the field is one arc, the points it catches always form a
contiguous run of the sorted angles. Slide a two-pointer window of width
`angle` along the sorted list to find the longest run.

### Hint 3

The circle's seam at due north is the only nuisance. Append a copy of the
sorted angles with 360 added to each value, and the wraparound window
becomes an ordinary interval on a line.
