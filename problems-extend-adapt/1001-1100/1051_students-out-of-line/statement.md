# Students Out of Line

## Description

Before the school photo, the students are asked to line up in
non-decreasing order of height. The array `heights` records how the line
actually stands at the moment: `heights[i]` is the height of the student
in position `i` (0-indexed).

Now picture the same students rearranged into non-decreasing order, and
call that imagined line `expected`, where `expected[i]` is the height
standing in position `i` afterwards. Return how many positions `i` have
`heights[i] != expected[i]` — the number of students occupying a spot
the ordered line would not have given them.

### Example 1

```text
Input: heights = [3,7,2,7,9,2]
Output: 5
Explanation:
heights:  [3,7,2,7,9,2]
expected: [2,2,3,7,7,9]
Only positions 1 and 3 agree.
```

### Example 2

```text
Input: heights = [6,6,6,5]
Output: 2
Explanation:
heights:  [6,6,6,5]
expected: [5,6,6,6]
Positions 0 and 3 differ; the two extra 6s happen to land on positions
that hold a 6 either way.
```

### Example 3

```text
Input: heights = [4,1,3,2,5,8,6,9]
Output: 5
Explanation:
heights:  [4,1,3,2,5,8,6,9]
expected: [1,2,3,4,5,6,8,9]
Positions 0, 1, 3, 5, and 6 differ.
```

### Constraints

- `1 <= heights.length <= 100`
- `1 <= heights[i] <= 100`

## Hints

### Hint 1

The ordered line is just a sorted copy of `heights`. Build that copy,
then count the indices where the two arrays disagree.
