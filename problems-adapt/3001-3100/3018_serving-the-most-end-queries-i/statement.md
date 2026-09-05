# Serving The Most End Queries I

## Description

You hold a row of values `nums` and a queue of requests `queries`, both
indexed from `0`.

Before the first request you may perform one preparatory move, at most
once: replace `nums` with any subsequence of itself, silently discarding
whatever you leave out.

The requests then run in order. Request `queries[i]` inspects the two ends
of the current `nums`: if the first and the last element are both smaller
than `queries[i]`, the run stops right there. Otherwise exactly one end
qualifies to go — choose either the first or the last element whose value
is at least `queries[i]` and remove it.

Play the preparatory move and every end-removal as well as possible, and
return the largest number of requests that can be served.

### Example 1

```text
Input: nums = [4,6,2,5], queries = [2,5,6,7]
Output: 3
Explanation: Nothing needs to be trimmed in advance. Request 2 takes the
leading 4, leaving [6,2,5]; request 5 takes the trailing 5, leaving
[6,2]; request 6 takes the leading 6, leaving [2], which is too small for
request 7. Three requests are served, and no play serves more.
```

### Example 2

```text
Input: nums = [3,1,4,1,5], queries = [4,3,2,1]
Output: 4
Explanation: First swap nums for the subsequence [3,1,4,5]. Request 4
takes the trailing 5, leaving [3,1,4]; request 3 takes the leading 3,
leaving [1,4]; request 2 takes the trailing 4, leaving [1]; request 1
takes that last element. All four requests are served — without the swap
the run would stall after two.
```

### Example 3

```text
Input: nums = [2,7,2,7,2], queries = [7,7,7]
Output: 2
Explanation: Both ends start below 7, so skipping the swap serves
nothing at all. Replace nums with the subsequence [7,7]: request one
removes the leading 7, request two removes the remaining 7, and the
third request finds nothing left to remove.
```

### Constraints

- `1 <= nums.length <= 1000`
- `1 <= queries.length <= 1000`
- `1 <= nums[i], queries[i] <= 10^9`

## Hints

### Hint 1

Dynamic programming fits: once the run starts, only the two ends of the
row ever change.

### Hint 2

The state is a little unusual — it tracks the slice that must survive,
not the requests already served.

### Hint 3

Let `dp[l][r]` be the most requests that can be served while every
element `nums[l..r-1]` still stands afterwards. The window begins as the
whole array and sheds one index per step: silently, when the one-time
move deleted it up front, or by serving the next request, which needs
the leaving end to be at least the next request's value.

### Hint 4

With nothing pre-deleted nothing has been served either, so
`dp[0][n] = 0` anchors the table.

### Hint 5

Whatever still survives at the end could have been handed to the
one-time move instead, so empty windows hold the answer — take the
largest `dp[i][i]`.
