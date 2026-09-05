# Rebuild the Sequence from Neighbor Pairs

## Description

A sequence of `n` distinct integers has been lost, but its neighbor
records survive: for every two values that stood side by side in the
sequence, one unordered pair of those values was written down.

You are given the records as a 2D integer array `pairs` of length `n - 1`,
where `pairs[i] = [u, v]` means `u` and `v` were adjacent. The records
appear in no particular order, and a pair may be written with either
value first.

Reconstruct a sequence that produces exactly these neighbor pairs. If
several sequences qualify, return any one of them.

### Example 1

```text
Input: pairs = [[5,3],[1,5],[4,1]]
Output: [3,5,1,4]
Explanation: Neighbors 3-5, 5-1, and 1-4 all appear in the input,
so this sequence qualifies. The reversed [4,1,5,3] would be just as
valid.
```

### Example 2

```text
Input: pairs = [[4,-9],[-9,0],[6,4]]
Output: [0,-9,4,6]
Explanation: Values may be negative. The sequence [6,4,-9,0] is
another accepted reconstruction.
```

### Example 3

```text
Input: pairs = [[99999,-99999]]
Output: [99999,-99999]
```

### Constraints

- `2 <= n <= 10^5`
- `pairs.length == n - 1`
- `pairs[i].length == 2`
- `-10^5 <= pairs[i][0], pairs[i][1] <= 10^5`
- Some sequence of `n` distinct integers has `pairs` as its neighbor
  records.

## Hints

### Hint 1

The sequence traces a path, and a path's two ends are exactly the values
that show up in a single neighbor record.

### Hint 2

Turn the records into a value-to-neighbors map, start from one end, and
keep stepping to the neighbor you did not just arrive from.
