# Unique Reconstructed Order

## Description

`nums` is a permutation of the integers from `1` through `n`, and
`sequences` lists subsequences of it. A shortest common supersequence is a
sequence of minimum length that contains every entry of `sequences` as a
subsequence.

Return `true` if `nums` is the only shortest common supersequence of
`sequences`, and `false` otherwise.

### Example 1

```text
Input: nums = [1,2,3], sequences = [[1,2],[2,3]]
Output: true
Explanation: The pinned orderings `1` before `2` and `2` before `3` force the
single three-value ordering `[1,2,3]`.
```

### Example 2

```text
Input: nums = [1,2,3], sequences = [[1,2]]
Output: false
Explanation: `[1,2]` pins only one adjacency, so `[1,3,2]` is a second
shortest supersequence alongside `[1,2,3]`.
```

### Example 3

```text
Input: nums = [1,2], sequences = [[1,2]]
Output: true
```

### Constraints

- `n == nums.length`, with `1 <= n <= 10⁴`.
- `nums` is a permutation of `[1, n]`.
- `sequences` has between `1` and `10⁴` entries.
- Each entry of `sequences` is a subsequence of `nums`, and the entries are
  all distinct.
- The total length of all entries is at most `10⁵`.
