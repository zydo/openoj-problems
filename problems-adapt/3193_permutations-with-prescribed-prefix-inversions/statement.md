# Permutations with Prescribed Prefix Inversions

## Description

You are given an integer `n` and a list of pairs `requirements`, where each
entry `requirements[i] = [end_i, cnt_i]` names an index and a count.

Call a pair of positions `(i, j)` of an array an **inversion** when `i < j`
and the earlier position holds the larger value.

Count the permutations `perm` of `[0, 1, 2, ..., n - 1]` such that every
requirement holds: for each `[end_i, cnt_i]`, the prefix `perm[0..end_i]`
contains exactly `cnt_i` inversions.

Return the count modulo `10⁹ + 7`, since it can be enormous.

### Example 1

```text
Input: n = 4, requirements = [[3,5]]
Output: 3
Explanation: Only the whole array is constrained, and exactly five of its six
positions must be inverted. Three permutations achieve that: [2,3,1,0],
[3,1,2,0] and [3,2,0,1].
```

### Example 2

```text
Input: n = 4, requirements = [[2,1],[3,4]]
Output: 2
Explanation: [1,3,2,0] has one inversion inside its first three entries and
four overall; [2,1,3,0] has one inversion after the swap of the leading pair
and four overall. Nothing else matches both counts.
```

### Example 3

```text
Input: n = 3, requirements = [[1,2],[2,2]]
Output: 0
Explanation: Two entries can form at most one inversion, so no permutation
ever reaches the demanded count of 2 by the end of index 1.
```

### Constraints

- `2 <= n <= 300`
- `1 <= requirements.length <= n`
- each element is a pair `end_i, cnt_i`
- `0 <= end_i <= n - 1`
- `0 <= cnt_i <= 400`
- some requirement has `end_i = n - 1`
- all `end_i` are distinct

## Hints

### Hint 1

Build the permutation one position at a time and ask a smaller question: how
many length-`i` prefixes are there with exactly `j` inversions?

### Hint 2

Extending a prefix of length `i` to length `i + 1` can add anywhere from `0`
to `i` inversions — the new entry chooses how many predecessors to overtake.
Each `dp[j]` therefore updates from a contiguous stretch of the previous row.

### Hint 3

A requirement at index `end_i` is a filter: after processing length
`end_i + 1`, every state whose inversion count differs from `cnt_i` dies.
States above the largest `cnt_i` can never come back down and may be dropped.
