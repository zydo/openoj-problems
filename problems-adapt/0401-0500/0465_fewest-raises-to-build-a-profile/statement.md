# Fewest Raises to Build a Profile

## Description

An integer array `heights` describes a profile that must be built: position `i`
has to end at level `heights[i]`.

You hold a work array of the same length, filled with zeros. A single move
chooses a contiguous run of positions and raises every entry in that run by 1.

Return the smallest number of moves after which the work array equals
`heights`.

Every input is such that this minimum fits in a 32-bit integer.

### Example 1

```text
Input: heights = [2,5,3,5,2]
Output: 7
Explanation: Raise positions 0..4 twice, then positions 1..3 once, then
position 1 twice more, then position 3 twice more:
[0,0,0,0,0] -> [2,2,2,2,2] -> [2,3,3,3,2] -> [2,5,3,3,2] -> [2,5,3,5,2].
```

### Example 2

```text
Input: heights = [6,1,4]
Output: 9
Explanation: Raise positions 0..2 once, then position 0 five more times,
then position 2 three times:
[0,0,0] -> [1,1,1] -> [6,1,1] -> [6,1,4].
```

### Example 3

```text
Input: heights = [3,3,3,3]
Output: 3
Explanation: A flat profile needs only its base layer, raised three times
over the whole array.
```

### Constraints

- `1 <= heights.length <= 10⁵`
- `1 <= heights[i] <= 10⁵`
- The answer is guaranteed to fit in a 32-bit integer.

## Hints

### Hint 1

Each move paints one horizontal strip of the finished profile, so the profile
is a stack of strips. Counting the minimum is counting how few strips the
stack needs.

### Hint 2

A strip can reach position `i` only if it also covered `i - 1` or starts
exactly at `i`. So a climb of `heights[i] - heights[i-1]` units forces that
many strips to begin at `i`, while descents and flats cost nothing.
