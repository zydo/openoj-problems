# Counting Corner Squares

## Description

Points arrive one at a time on the X-Y plane and are stored as they
come. Duplicates may arrive too, and each stored copy counts on its own.

Implement the `SquareCounter` class:

- `SquareCounter()` initializes the structure with no stored points.
- `void add(int[] point)` stores the point `point = [x, y]`.
- `int count(int[] point)` reports how many ways three stored points can
  be chosen so that, together with the query point, they are the four
  corners of an axis-aligned square with positive area.

An axis-aligned square is one whose four edges have equal length and run
either parallel or perpendicular to the coordinate axes.

### Example 1

![diagram](figures/2013-1.svg)

```text
Input:
["SquareCounter", "add", "add", "add", "count", "count", "add", "count"]
[[], [[3,10]], [[11,2]], [[3,2]], [[11,10]], [[14,8]], [[11,2]], [[11,10]]]
Output: [null, null, null, null, 1, 0, null, 2]
Explanation:
SquareCounter counter = new SquareCounter();
counter.add([3,10]);
counter.add([11,2]);
counter.add([3,2]);
counter.count([11,10]); // return 1 using the first three stored points
counter.count([14,8]);  // return 0 because no square can be formed
counter.add([11,2]);    // duplicate points are allowed
counter.count([11,10]); // return 2 because either copy of [11,2] can be chosen
```

### Constraints

- `point.length == 2`
- `0 <= x, y <= 1000`
- At most `3000` calls in total are made to `add` and `count`.

## Hints

### Hint 1

A frequency map over the stored points is all the state you need.

### Hint 2

For a query point, only stored points sharing its x-coordinate or its
y-coordinate can complete a square — each such pair fixes one candidate
square, whose other two corners you look up in the map.
