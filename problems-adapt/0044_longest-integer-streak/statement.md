# Longest Integer Streak

## Description

You are given an integer array `nums` whose entries arrive in no useful order
and may repeat. Look at the set of distinct values it holds: some of them chain
up as `v`, `v + 1`, `v + 2`, and so on. Return how long the longest such chain
gets.

The values forming the chain need not be adjacent in the array, and the array
may be empty, in which case the answer is `0`.

Aim for a running time proportional to the number of entries — sorting is
easier but slower than what this problem asks for.

### Example 1

```text
Input: nums = [12,45,13,11,46,50]
Output: 3
Explanation: 11, 12 and 13 are all present, so the chain has length 3. Nothing
extends it: 10 and 14 are missing.
```

### Example 2

```text
Input: nums = [-3,9,-2,-1,0,9,1]
Output: 5
Explanation: The chain runs -3, -2, -1, 0, 1. The repeated 9 counts once and
stands alone.
```

### Example 3

```text
Input: nums = [30,60,90]
Output: 1
Explanation: No value has a neighbour one step away, so every chain is a single
value.
```

### Constraints

- `nums` holds between `0` and `10⁵` entries
- every entry lies in `[-10⁹, 10⁹]`

## Hints

### Hint 1

Sorting answers the question directly but pays `O(n log n)`. The chains you are
measuring depend only on which values are present, not on where they sit, so a
structure that answers "is this value present?" instantly is the better start.

### Hint 2

Within a maximal chain, exactly one value has no predecessor in the set. Those
are the only sensible places to begin measuring, and they are cheap to spot.

### Hint 3

From such a value, step upward one at a time while the next value is present.
Because a walk only ever starts at a chain's first value, no value is walked
over more than once, and the doubly nested loop stays linear overall.
