# Best Permuted Request Total

## Description

You are handed an array of non-negative integers `nums` together with a
list of range `requests`, where each request is a pair
`requests[i] = [left, right]` naming the inclusive span of indexes
`left` through `right`. The value of one request is the sum of the array
entries currently sitting on the indexes it spans.

Before any request is valued you may shuffle `nums` into whichever
permutation you like, and that one ordering is then used for every
request. Pick the ordering that makes the combined value of all requests
as large as possible and return it. Because the combined value can be
enormous, report it modulo `10^9 + 7`.

### Example 1

```text
Input: nums = [3,1,6,4], requests = [[0,2],[2,3]]
Output: 20
Explanation: Index 2 is covered by both requests while every other index
is covered once, so the largest value belongs there. The ordering
[4,3,6,1] values the first request at 4 + 3 + 6 = 13 and the second at
6 + 1 = 7, for a combined 20. No ordering can do better.
```

### Example 2

```text
Input: nums = [7,2,9], requests = [[1,1],[1,1],[0,1]]
Output: 34
Explanation: Index 1 takes part in all three requests, so 9 goes there.
The ordering [7,9,2] values the requests at 9, 9, and 16, combining to
34.
```

### Example 3

```text
Input: nums = [5,10,2,8,1], requests = [[0,4],[1,2]]
Output: 44
Explanation: Indexes 1 and 2 are covered twice and the rest once, so
10 and 8 belong on them. The ordering [5,10,8,2,1] values the first
request at 26 and the second at 18, combining to 44.
```

### Constraints

- `n == nums.length`
- `1 <= n <= 10^5`
- `0 <= nums[i] <= 10^5`
- `1 <= requests.length <= 10^5`
- `requests[i].length == 2`
- `0 <= left <= right < n`

## Hints

### Hint 1

Count how many requests cover each position. The rearrangement
inequality says the total is largest when the biggest values are paired
with the most-covered positions.
