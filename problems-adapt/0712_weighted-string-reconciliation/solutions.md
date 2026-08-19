# Solutions — Weighted String Reconciliation

## Prefix Dynamic Programming

Let `cost[i][j]` be the least discard cost that makes `left[:i]` and
`right[:j]` identical. Along the top edge, every character of the right
prefix must be removed; along the left edge, every character of the left
prefix must be removed. Accumulating the character codes initializes both
boundaries.

When the two current characters match, keeping both is always at least as
good as removing them, so the diagonal value transfers unchanged. When they
differ, they cannot both finish the same retained subsequence. The recurrence
therefore chooses between removing the current left character and extending
`cost[i - 1][j]`, or removing the current right character and extending
`cost[i][j - 1]`.

Filling the table in increasing prefix order makes every dependency available
before it is used. The bottom-right cell reconciles both complete records.

**Complexity:** `O(m · n)` time and `O(m · n)` space, where `m` and `n` are
the two record lengths.
