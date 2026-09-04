# Measuring A Triangle's Corners

## Description

You receive `sides`, an array of three positive integers. The question is
whether side lengths like these can physically close into a triangle of
positive area.

When they can, report the triangle's three internal angles in degrees as an
array of floating-point numbers, ordered from smallest to largest. When they
cannot — the pieces never meet — return an empty array instead.

Any answer within `10⁻⁵` of the true measurement is accepted.

### Example 1

```text
Input: sides = [5,12,13]
Output: [22.61986,67.38014,90.00000]
Explanation: Lengths 5, 12, and 13 close into a right triangle. Its corners
measure roughly 22.619865 degrees, 67.380135 degrees, and exactly 90
degrees.
```

### Example 2

```text
Input: sides = [1,1,1]
Output: [60.00000,60.00000,60.00000]
Explanation: Three equal sides make an equilateral triangle, so every
corner is a clean 60 degrees.
```

### Example 3

```text
Input: sides = [7,3,4]
Output: []
Explanation: 3 and 4 together only just reach 7, so the two short sides lie
flat against the long one — the area collapses to zero and no triangle
exists.
```

### Constraints

- `sides.length == 3`
- `1 <= sides[i] <= 1000`

## Hints

### Hint 1

Put the sides in order first; the whole validity question then reduces to
whether the two shorter lengths strictly beat the longest one.

### Hint 2

For a valid triangle, the law of cosines turns each side triple into an
angle in radians; a degrees conversion finishes the job.

### Hint 3

Sort the three angles before handing them back, and answer with an empty
array when the sides never form a triangle at all.
