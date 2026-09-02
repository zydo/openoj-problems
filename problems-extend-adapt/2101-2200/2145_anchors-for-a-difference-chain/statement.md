# Anchors for a Difference Chain

## Description

A sequence of `n + 1` integers is described only by its consecutive gaps.
You are given a 0-indexed array `differences` of length `n`, where
`differences[i]` is the amount the sequence rises or falls between
positions `i` and `i + 1`. On top of the gaps, every element of the
sequence must land inside the inclusive band `[lower, upper]`.

The gaps do not pin the sequence down: shifting the whole thing up or down
preserves them all. Count how many distinct sequences satisfy both the
gaps and the band — in other words, how many values the first element can
take.

### Example 1

```text
Input: differences = [2,-1,3], lower = 0, upper = 10
Output: 7
Explanation: Starting from 0 the walk visits 0, 2, 1, 4. Its lowest and
highest points sit 4 apart, so the start may be anything from 0 through 6
while every value stays within 0 to 10 — 7 sequences in total.
```

### Example 2

```text
Input: differences = [-2,5,-3], lower = -5, upper = 4
Output: 5
Explanation: From a start of 0 the walk dips to -2 and climbs to 3, a
span of 5. The start may range from -3 to 1, so 5 sequences work.
```

### Example 3

```text
Input: differences = [10], lower = 1, upper = 5
Output: 0
Explanation: The single gap forces two elements 10 apart, and no two such
values can both fit in a band of width 4.
```

### Example 4

```text
Input: differences = [1,1,1], lower = -3, upper = 3
Output: 4
Explanation: The walk from 0 runs 0, 1, 2, 3, a span of 3. Starts from -3
through 0 all work, giving 4 sequences.
```

### Constraints

- `1 <= differences.length <= 10⁵`
- `-10⁵ <= differences[i] <= 10⁵`
- `-10⁵ <= lower <= upper <= 10⁵`

## Hints

### Hint 1

Choose any starting value, ignore the band for a moment, and roll the gaps
forward — every remaining element is then forced.

### Hint 2

Shifting the start moves every element by the same amount, so the distance
between the walk's lowest and highest points never depends on the start.

### Hint 3

Subtract that span from the band's width: whatever slack remains is
exactly the number of legal starting values.
