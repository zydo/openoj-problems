# Most Units Hauled

## Description

A delivery run needs loading. You are given a table `boxTypes`, whose
`i`-th entry is `[count_i, units_i]`: there are `count_i` boxes of type
`i`, and every box of that type holds `units_i` units of cargo.

The vehicle takes at most `truckSize` boxes — the limit counts boxes, not
units, and you may load any selection of the available boxes as long as
the box count stays within the limit.

Load the vehicle so that the total number of units carried is as large as
possible, and return that total.

### Example 1

```text
Input: boxTypes = [[1,5],[3,2],[2,4]], truckSize = 4
Output: 15
Explanation: Load the single box of the richest type (5 units), then both
boxes holding 4 units each (8 more), then one box holding 2 units. That is
4 boxes carrying 5 + 8 + 2 = 15 units in total.
```

### Example 2

```text
Input: boxTypes = [[4,6],[2,9],[5,1]], truckSize = 8
Output: 44
Explanation: The two boxes of 9 units go first (18), then the four boxes
of 6 units (24 more), and two of the five boxes of 1 unit (2 more) fill
the eighth slot: 18 + 24 + 2 = 44.
```

### Constraints

- `1 <= boxTypes.length <= 1000`
- `1 <= count_i, units_i <= 1000`
- `1 <= truckSize <= 10⁶`

## Hints

### Hint 1

While there is room left, a free slot should always take a box with the
most units still on the ground.

### Hint 2

Order the types so units per box never increases, then walk down the
list.

### Hint 3

At each type, load as many of its boxes as the remaining room allows and
move on.
