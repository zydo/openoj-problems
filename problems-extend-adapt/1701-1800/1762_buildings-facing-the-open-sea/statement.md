# Buildings Facing the Open Sea

## Description

A row of buildings stands along the shore, and the open sea lies to
the right of all of them. You are given an array `heights` where
`heights[i]` is the height of the `i`-th building from the left.

A building faces the sea when nothing taller stands between it and the
water. Formally, building `i` faces the sea exactly when every building
to its right is strictly shorter than it.

Return the 0-indexed positions of all buildings that face the sea,
listed in increasing order.

### Example 1

```text
Input: heights = [2,7,4,9,5]
Output: [3,4]
Explanation: Building 4 touches the horizon, and building 9 to its
left tops everything to its right. Buildings 0, 1, and 2 are all
blocked by the height-9 building.
```

### Example 2

```text
Input: heights = [6,6,3]
Output: [1,2]
Explanation: The first 6 does not qualify: the equal-height 6 to its
right blocks it, since blocking requires being strictly taller.
```

### Example 3

```text
Input: heights = [8]
Output: [0]
Explanation: A lone building always faces the sea.
```

### Constraints

- `1 <= heights.length <= 10^5`
- `1 <= heights[i] <= 10^9`

## Hints

### Hint 1

Start at the shoreline and walk inland — that is, process the
buildings from right to left.

### Hint 2

While walking, remember the tallest height passed so far; a building
sees the sea precisely when it is strictly taller than that.
