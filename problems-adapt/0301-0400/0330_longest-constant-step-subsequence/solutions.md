# Solutions — Longest Constant-Step Subsequence

## DP keyed by common difference

An endpoint alone does not identify a chain — the step it has been climbing
does. So `dp[i]` is a map from a step `d` to the length of the longest
constant-step subsequence ending at index `i` under exactly that step. Any
subsequence of length two or more has a definite step, and lone elements serve
as the implicit base through the `get(d, 1)` defaults.

Every transition looks at all earlier `j < i`: with `d = nums[i] - nums[j]`,
the champion chain ending at `j` with step `d` grows by one, and the outcome
replaces `dp[i][d]` when it is longer. Running `i` upward and `j` behind it
means `dp[j]` is settled before being read, while `best` collects the largest
length seen — the double loop sweeps every endpoint and every step, which is
exactly the maximization the answer needs.

Dictionaries rather than a dense `n` by step-range table keep memory tied to
the differences that actually appear; entries sit in `[0, 500]`, so each map
holds roughly a thousand possibilities in practice, well under the theoretical
worst case.

On `[16, 12, 8, 3, 4]` the winning step is `-4`: the chains `[16,12]`,
`[16,12,8]`, and `[16,12,8,4]` grow one index at a time through the maps at
indices 0 through 3, while the stray 3 joins nothing longer.

**Complexity:** `O(n^2)` time, `O(n^2)` space in the worst case.
