# Binary Substrings Under A Cap II

## Description

You are given a binary string `s` and an integer `k` that serves as the
cap.

A binary string stays under the cap when at least one of its two character
counts is small enough: it contains at most `k` zeros, or at most `k` ones.

You are also given a list of query ranges `queries`, where
`queries[i] = [li, ri]` names the slice `s[li..ri]` (both ends included,
zero-indexed). For each query, count how many substrings of that slice stay
under the cap, and return the answers as an array, one per query, in order.

### Example 1

```text
Input: s = "1001", k = 1, queries = [[0,3]]
Output: [9]
Explanation: The slice "1001" holds ten substrings, and only the whole
slice keeps both counts above the cap at once, so the other 9 stay under
it.
```

### Example 2

```text
Input: s = "000111", k = 1, queries = [[0,5],[3,5],[1,4]]
Output: [17,6,9]
Explanation: In the full string, every substring that spans the zero block
and at least two ones pushes both counts over the cap, leaving 17; the
slice "111" contributes 6; "0011" loses only its whole slice, giving 9.
```

### Example 3

```text
Input: s = "0110", k = 2, queries = [[0,3],[1,2]]
Output: [10,3]
Explanation: Neither slice can hold three of either character, so every
substring of both stays under the cap.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s[i]` is `'0'` or `'1'`.
- `1 <= k <= s.length`
- `1 <= queries.length <= 10⁵`
- `queries[i] == [li, ri]`
- `0 <= li <= ri < s.length`
- No two queries are the same.

## Hints

### Hint 1

The whole batch of queries is known in advance, so there is no reason to
honor their arrival order — process them together instead.

### Hint 2

For each right endpoint, work out the leftmost start from which the window
still stays under the cap. Which way can that boundary move as the endpoint
advances?

### Hint 3

Fold the per-endpoint counts into prefix sums so each query becomes a
constant-time lookup; the stretch where the boundary sits left of `l`
needs its own handling.
