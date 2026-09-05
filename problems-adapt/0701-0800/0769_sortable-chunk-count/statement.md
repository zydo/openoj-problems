# Sortable Chunk Count

## Description

You are given an integer array `arr` of length `n` holding a permutation of
`0` to `n - 1`: every value in that range appears exactly once.

Cut `arr` into one or more contiguous pieces, sort each piece on its own,
then glue the pieces back together in their original order. Whenever the
reassembled array comes out fully sorted, that set of cuts is valid.

Return the greatest number of pieces any valid set of cuts can produce.

### Example 1

```text
Input: arr = [3,2,1,0]
Output: 1
Explanation: Any cut you try leaves a piece holding a value that belongs
somewhere outside it once everything is sorted per-piece and rejoined, so
the array can only stand as a single piece.
```

### Example 2

```text
Input: arr = [1,2,0,3,5,4]
Output: 3
Explanation: Cutting into [1,2,0], [3], [5,4] sorts each piece to
[0,1,2], [3], [4,5], and rejoining gives the fully sorted array — no set
of cuts produces more than these three pieces.
```

### Constraints

- `n == arr.length`
- `1 <= n <= 10`
- `0 <= arr[i] < n`
- All the elements of `arr` are unique.

## Hints

### Hint 1

A cut right after index `k` is usable exactly when the first `k + 1`
entries are some rearrangement of `0` to `k` — nothing from outside that
range may sit inside it. Scan left to right with a running maximum: the
moment it equals the current index, that position is a legal cut, and
taking every legal cut at once gives the most pieces.
