# Top Creator and Flagship Video

## Description

A platform stores three parallel arrays of length `n`: `creators[i]` made the
video with id `ids[i]`, which drew `views[i]` views. A creator's popularity
is the total views across all their videos.

Find the most popular creator (or creators, on a tie) and, for each, the id
of their single most-viewed video — choosing the lexicographically smallest
id when several videos tie for the top view count. Different videos may
share an id; each entry is still its own video.

Return the result as `[creator, id]` pairs, in any order.

### Example 1

```text
Input: creators = ["ada","bob","ada","carol"], ids = ["v1","v2","v3","v4"], views = [10,20,10,5]
Output: [["ada","v1"],["bob","v2"]]
Explanation: Ada and Bob both total 20 views, ahead of Carol's 5. Ada's two
videos tie at 10 views, so her flagship is the lexicographically smaller id
"v1"; Bob's flagship is "v2".
```

### Example 2

```text
Input: creators = ["ada","ada","ada"], ids = ["a","b","c"], views = [1,2,2]
Output: [["ada","b"]]
Explanation: Videos "b" and "c" tie for the top view count, so the smaller
id "b" is reported.
```

### Constraints

- `n == creators.length == ids.length == views.length`
- `1 <= n <= 10⁵`
- `1 <= creators[i].length, ids[i].length <= 5`
- `creators[i]` and `ids[i]` are lowercase English letters.
- `0 <= views[i] <= 10⁵`

## Hints

### Hint 1

Aggregate each creator's total views and per-creator best video in one pass
through the three arrays.

### Hint 2

Track the running highest popularity; when a later creator ties it, they join
the answer too.
