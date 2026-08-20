# Minimum Threshold Tests With Fragile Probes

## Description

There are `levelCount` ordered levels and an unknown safe threshold `f` from
`0` through `levelCount`. Testing a probe at level `x` destroys it when
`x > f`; otherwise the probe survives and may be reused.

Given `probeCount` identical probes, return the minimum number of tests needed
in the worst case to determine `f` with certainty. Each test may use any
surviving probe at any level.

### Example 1

```text
Input: probeCount = 1, levelCount = 7
Output: 7
```

### Example 2

```text
Input: probeCount = 2, levelCount = 10
Output: 4
```

### Example 3

```text
Input: probeCount = 3, levelCount = 25
Output: 5
```

### Constraints

- `1 <= probeCount <= 100`
- `1 <= levelCount <= 10^4`

## Hints

### Hint 1

Ask how many levels can be distinguished with a fixed number of tests and
probes.

### Hint 2

One test splits into a destroyed-probe case below the chosen level and a
surviving-probe case above it.

### Hint 3

If `covered[m][p]` is the maximum levels resolved, then
`covered[m][p] = covered[m-1][p-1] + covered[m-1][p] + 1`.
