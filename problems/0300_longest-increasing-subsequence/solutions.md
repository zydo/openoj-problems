# Solutions — Longest Increasing Subsequence

## Binary-Searched Tails Array (Patience Method)

The solution maintains `tails`, where `tails[k]` is the smallest value that can end an increasing subsequence of length `k + 1` seen so far. This array is always sorted — replacing an element with a smaller valid tail cannot break order — which is what licenses binary search.

For each new element `x`, `bisect_left` finds the first tail that is greater than or equal to `x`. If no such tail exists, `x` extends every existing subsequence, so it is appended and the best length grows by one. Otherwise `x` replaces that tail: it cannot lengthen any subsequence (it's not bigger than all tails), but it can end a subsequence of the same length more cheaply, leaving more room for future elements to extend it. Using `bisect_left` rather than `bisect_right` enforces strict increase — an equal value overwrites its own tail instead of extending it, which is why an all-equal input like `[7,7,7,7]` yields length 1.

A subtle but important point: `tails` is generally _not_ itself a valid subsequence of the input; only its length is meaningful. The replacement step may patch a tail in a way no actual subsequence matches. That is harmless because the invariant preserved is about the _existence_ of an increasing subsequence of each length ending at each tail value, and the answer only reads `len(tails)`.

With `n` up to 2500 this comfortably answers the follow-up: the quadratic DP that compares every earlier element is replaced by `n` binary searches. Single-element arrays return 1, and strictly decreasing inputs never append after the first element.

**Complexity:** `O(n log n)` time, `O(n)` space.
