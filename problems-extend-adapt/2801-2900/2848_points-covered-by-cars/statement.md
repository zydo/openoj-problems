# Points Covered By Cars

## Description

Cars are parked along a number line. You are given a 0-indexed 2D integer
array `nums`, where `nums[i] = [startᵢ, endᵢ]` is the stretch of line
occupied by the i-th car, both endpoints included.

Return how many integer points on the line lie under at least one car.

### Example 1

```text
Input: nums = [[2,4],[8,10]]
Output: 6
Explanation: The first car holds the points 2, 3, 4 and the second holds
8, 9, 10; nothing between them is covered, so 6 points are covered.
```

### Example 2

```text
Input: nums = [[1,5],[3,8],[10,12]]
Output: 11
Explanation: The first two cars overlap and together blanket 1 through
8, while the third covers 10, 11, and 12 — 8 + 3 = 11 points.
```

### Example 3

```text
Input: nums = [[4,9],[1,2],[6,6]]
Output: 8
Explanation: The cars 4–9 and 6–6 stack on the same stretch of line, and
the remaining car sits on 1 and 2; their union spans 1, 2, 4, 5, 6, 7,
8, 9.
```

### Constraints

- `1 <= nums.length <= 100`
- `nums[i].length == 2`
- `1 <= startᵢ <= endᵢ <= 100`

## Hints

### Hint 1

Order the cars by their starting points; a single left-to-right pass then
meets every overlap exactly as it appears.

### Hint 2

Carry the rightmost integer point already counted. A car ending at or
before it is already fully accounted for; otherwise only the part of the
car sticking out past that point contributes fresh points.
