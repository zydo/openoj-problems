# Solutions — Longest Additive Subsequence

## Pair-Keyed Dynamic Programming with a Value Index

The pick we are hunting for is an ordered list, but it has a compact
description: once its last two entries are known, its entire past is fixed,
because whatever preceded values `x` and `y` had to be `y - x`. That is the
whole idea of the solution. Instead of a state per index, keep a state per
**pair** of indices `(j, i)` with `j < i`, holding the length of the longest
additive pick whose final two entries are `nums[j]` and `nums[i]`.

Extending backwards is then a single lookup. The entry that must come before
`nums[j], nums[i]` has value `nums[i] - nums[j]`; a hash map built once from
value to index answers "is that value in the array, and where?" in constant
time, which is sound because a strictly increasing array has no repeats. If
the value is present at index `k`, then `best[j][i] = best[k][j] + 1`, and if
the pair `(k, j)` never started a chain of its own, its stored value is the
base case `2` — two entries standing alone.

One guard does the ordering work for free. The predecessor must lie strictly
left of `j`, and in an increasing array that is the same statement as
`nums[i] - nums[j] < nums[j]`. The comparison also rejects the degenerate read
where the predecessor would be `nums[j]` itself. So no index arithmetic or
bounds test is needed beyond that inequality.

Sweeping `i` upward and `j` from `0` to `i - 1` guarantees every `best[k][j]`
is final before it is read, since `j < i`. The running maximum over all pairs
is the answer — except that a maximum of `2` describes a pair that is not a
list of three, so the function reports `0` there. The reference solutions
store the table as a dense `n × n` array in the compiled languages and as a
dictionary keyed by the pair in Python; both are the same recurrence.

Work is one hash lookup per pair, which is quadratic overall and comfortably
inside the limits at `n = 1000`.

**Complexity:** `O(n^2)` time, `O(n^2)` space.
