# Most Value in K Consecutive Cells

## Description

An infinite row of cells is numbered `1, 2, 3, …` along the number line. You
are given a 2D array `runs`, where `runs[i] = [li, ri, ci]` says that every
cell from `li` through `ri` holds `ci` units of value. Cells outside every run
hold nothing, and the runs never overlap.

You are also given an integer `k`.

Collect the value of `k` consecutive cells — any block of `k` cell positions
in a row — and nothing else. Return the largest amount of value any such
block can hold.

### Example 1

```text
Input: runs = [[6,7,5],[1,4,3],[9,10,2]], k = 4
Output: 13
Explanation: The best block is cells 4, 5, 6, 7: it takes 3 + 0 + 5 + 5.
Cell 5 lies between runs and contributes nothing, but bridging the gap beats
staying inside the first run, whose best block of four is worth 12.
```

### Example 2

```text
Input: runs = [[2,9,4]], k = 3
Output: 12
Explanation: Any three cells inside the run hold 4 + 4 + 4.
```

### Example 3

```text
Input: runs = [[3,4,6],[10,12,1]], k = 5
Output: 12
Explanation: The block is longer than either run, so the best it can do is
cover the richer run completely: cells 3 through 7 hold 6 + 6 + 0 + 0 + 0.
```

### Constraints

- `1 <= runs.length <= 10⁵`
- `1 <= k <= 10⁹`
- `runs[i] == [li, ri, ci]`
- `1 <= li <= ri <= 10⁹`
- `1 <= ci <= 1000`
- The runs are non-overlapping.

## Hints

### Hint 1

An optimal block can always slide until its left edge lands on some `li` or
its right edge lands on some `ri` — sliding over empty space never costs
anything.

### Hint 2

Sort the runs by left endpoint and take a prefix sum of each run's total
value, so the fully covered middle of a block is one subtraction.

### Hint 3

A block clips at most two runs partially. Treat the two clipped ends
separately and let the prefix sum handle everything between them.
