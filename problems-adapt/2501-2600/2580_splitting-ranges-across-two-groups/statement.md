# Splitting Ranges Across Two Groups

## Description

Each entry of a 2D integer array `ranges` describes one integer
interval: `ranges[i] = [startᵢ, endᵢ]` covers every integer from
`startᵢ` through `endᵢ`, endpoints included.

Distribute the ranges over two groups — either may end up empty —
subject to one rule: whenever two ranges overlap, they must land in
the same group. Overlap means the ranges share at least one integer;
for instance `[1, 3]` and `[2, 5]` overlap, since both contain 2 and 3.

Count the distinct ways to perform this split, answering modulo
`10⁹ + 7`.

### Example 1

```text
Input: ranges = [[6,10],[5,15]]
Output: 2
Explanation: The ranges share 6 through 10, so they travel
together. Both can sit in the first group or both in the second —
two ways in total.
```

### Example 2

```text
Input: ranges = [[1,5],[3,8],[10,12]]
Output: 4
Explanation: [1,5] and [3,8] overlap, forming one cluster; [10,12]
touches nothing else and forms another. Each cluster chooses its
group freely, giving 2 × 2 = 4 ways.
```

### Example 3

```text
Input: ranges = [[0,2],[2,4]]
Output: 2
Explanation: The endpoints are inclusive, so the shared value 2
makes these two ranges overlap; they must stay together, leaving
only the two all-in-one-group arrangements.
```

### Constraints

- `1 <= ranges.length <= 10⁵`
- `ranges[i].length == 2`
- `0 <= startᵢ <= endᵢ <= 10⁹`

## Hints

### Hint 1

Sorting the ranges by their start points puts every chain of
overlapping ranges back to back — does that suggest a merging pass?

### Hint 2

Collapse the ranges into maximal overlapping clusters, and notice
that separate clusters never constrain one another.

### Hint 3

If the merge leaves `k` independent clusters, each one has two
choices of group, so the count is a power of 2 taken modulo
`10⁹ + 7`.
