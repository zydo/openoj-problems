# Sum Picks II

## Description

From a pool of candidate numbers `candidates`, pick out every distinct
set of values whose sum is exactly `target`.

Two rules keep the picks honest:

- each entry of `candidates` may join a set at most once — two entries
  carrying the same value still count as two separate entries;
- the same set of values may be reported only once, no matter how many
  different entry choices produce it.

For a deterministic answer, return every combination with its values in
ascending order, and order the combinations themselves in ascending
lexicographic order.

### Example 1

```text
Input: candidates = [4,3,2,7,1,1], target = 6
Output: [[1,1,4],[1,2,3],[2,4]]
Explanation: The pool holds two `1`s, which lets `[1,1,4]` exist. The
`7` overshoots the target and never appears.
```

### Example 2

```text
Input: candidates = [1,1,2,2,3], target = 5
Output: [[1,1,3],[1,2,2],[2,3]]
Explanation: `[1,2,2]` is legal precisely because the pool carries two
`2`s; a value available once cannot be picked twice.
```

### Example 3

```text
Input: candidates = [8,8,4,4], target = 12
Output: [[4,8]]
Explanation: The doubled values collapse — pairing either `8` with
either `4` yields the same set, and that set is reported exactly once.
```

### Constraints

- `1 <= candidates.length <= 100`
- `1 <= candidates[i] <= 50`
- `1 <= target <= 30`
