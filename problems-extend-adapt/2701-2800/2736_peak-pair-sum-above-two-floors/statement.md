# Peak Pair Sum Above Two Floors

## Description

You are given two integer arrays, `nums1` and `nums2`, both of length
`n`. Read them as `n` points: point `j` sits at `(nums1[j], nums2[j])`
and carries the sum `nums1[j] + nums2[j]`.

You are also given a 2D array `queries` where each row is a pair
`queries[i] = [xi, yi]` naming two floors. To answer a query, look at
every point `j` whose first coordinate is at least `xi` and whose
second coordinate is at least `yi`; report the largest carried sum
among them, or `-1` if no point clears both floors.

Return an array `answer` where `answer[i]` is the answer to query `i`.

### Example 1

```text
Input: nums1 = [7,2,5,9], nums2 = [1,6,3,4], queries = [[6,3],[5,5],[8,1]]
Output: [13,-1,13]
Explanation: Query [6,3] admits points 0 and 3; point 3 carries the
larger sum, 9 + 4 = 13. Query [5,5] admits nothing — every point with
a first coordinate of at least 5 has a second coordinate below 5 — so
it reports -1. Query [8,1] admits point 3, whose sum is 13.
```

### Example 2

```text
Input: nums1 = [4,4,4], nums2 = [2,7,5], queries = [[3,3],[4,7],[5,2]]
Output: [11,11,-1]
Explanation: Every point clears the first floor of both [3,3] and
[4,7]. For [3,3] the largest eligible sum is 4 + 7 = 11, and for [4,7]
only point 1 clears the second floor, again giving 11. No point has a
first coordinate of at least 5, so [5,2] reports -1.
```

### Example 3

```text
Input: nums1 = [1,3], nums2 = [5,2], queries = [[3,5]]
Output: [-1]
Explanation: Point 0 has the required second coordinate but its first
coordinate stops short of 3; point 1 reaches the first floor but sits
below the second. Neither point clears both floors, so the answer is
-1.
```

### Constraints

- `1 <= n <= 10⁵`
- `nums1.length == nums2.length == n`
- `1 <= nums1[j], nums2[j] <= 10⁹`
- `1 <= queries.length <= 10⁵`
- `queries[i].length == 2`
- `1 <= xi, yi <= 10⁹`

## Hints

### Hint 1

Sort the points by first coordinate in descending order, and process
the queries in descending order of their first floor, carrying each
query's original index along so the answers come out in order.

### Hint 2

Sweep the queries in that order. Just before answering a query, every
point whose first coordinate meets the current first floor has been
seen; insert each such point, keyed by its second coordinate, into a
structure that answers "largest sum among keys at least yi".

### Hint 3

A sorted map with ascending keys and strictly descending sums works.
When a new point `(y, s)` arrives, any stored pair with a
smaller-or-equal key and a smaller-or-equal sum is dominated and can
be dropped; binary search locates the insertion slot.

### Hint 4

Answering a query is then a single binary search: the first key at or
above `yi` holds the maximum sum among all eligible points, and an
empty suffix means no point qualifies.
