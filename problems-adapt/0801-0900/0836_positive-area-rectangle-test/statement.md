# Positive Area Rectangle Test

## Description

An axis-aligned rectangle is written as `[x1, y1, x2, y2]`, where
`(x1, y1)` is its lower-left corner and `(x2, y2)` is its upper-right
corner. Each input describes a valid rectangle with nonzero area.

Given `rec1` and `rec2`, return `true` when their intersection has positive
area. Rectangles that meet only along an edge or at one corner return
`false`.

### Example 1

```text
Input: rec1 = [-3,-1,2,4], rec2 = [1,0,5,3]
Output: true
Explanation: Their shared region has positive width and positive height.
```

### Example 2

```text
Input: rec1 = [-2,-2,0,2], rec2 = [0,-1,3,1]
Output: false
Explanation: The rectangles only share the vertical edge at x = 0.
```

### Example 3

```text
Input: rec1 = [-5,-5,-1,-1], rec2 = [0,0,2,2]
Output: false
Explanation: The rectangles are separated in both directions.
```

### Constraints

- `rec1.length == 4`
- `rec2.length == 4`
- `-10⁹ <= rec1[i], rec2[i] <= 10⁹`
- `rec1` and `rec2` each describe a valid rectangle with nonzero area.
