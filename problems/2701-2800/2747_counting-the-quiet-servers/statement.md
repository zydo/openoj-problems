# Counting The Quiet Servers

## Description

A fleet runs `n` servers, numbered `1` through `n`. You are given a 2D
0-indexed array `logs`, where `logs[i] = [server_id, time]` records that
the server numbered `server_id` received a request at moment `time`.

You are also given an integer `x` and a 0-indexed array `queries`.

For every query `q`, look at the closed window of moments `[q - x, q]` and
count the servers that received no request at any moment inside it. Return
a 0-indexed array `arr` of length `queries.length` where `arr[i]` is that
count for `queries[i]`.

### Example 1

```text
Input: n = 4, logs = [[1,2],[2,4],[3,4],[4,7]], x = 3, queries = [6,9]
Output: [2,3]
Explanation:
For queries[0]: the window [3, 6] catches requests from servers 2 and 3, so servers 1 and 4 stayed quiet.
For queries[1]: the window [6, 9] catches only the request from server 4, so three servers — 1, 2, and 3 — stayed quiet.
```

### Example 2

```text
Input: n = 2, logs = [[1,5],[2,5]], x = 2, queries = [7,3]
Output: [0,2]
Explanation:
For queries[0]: the window [5, 7] contains both requests — the window edges are inclusive, so moments exactly at 5 count — leaving no quiet server.
For queries[1]: the window [1, 3] contains no requests at all, so both servers stayed quiet.
```

### Constraints

- `1 <= n <= 10⁵`
- `1 <= logs.length <= 10⁵`
- `1 <= queries.length <= 10⁵`
- `logs[i].length == 2`
- `1 <= logs[i][0] <= n`
- `1 <= logs[i][1] <= 10⁶`
- `1 <= x <= 10⁵`
- `x < queries[i] <= 10⁶`

## Hints

### Hint 1

A log entry can serve a query only through its time value, never through
its position in the array — so consider sorting both the logs and the
queries by time.

### Hint 2

Once the logs are sorted by time, the entries touching one query form one
contiguous stretch of that sorted list: precisely those with time between
`q - x` and `q`.

### Hint 3

Sweep the queries in increasing order while sliding a single window across
the sorted logs. Keep a per-server occurrence count inside the window and a
running tally of how many distinct servers appear at least once.
