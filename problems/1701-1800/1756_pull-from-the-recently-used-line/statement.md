# Pull From The Recently Used Line

## Description

A line of numbered positions holds the integers `1` through `n` in
order. A fetch(k) operation removes the integer at position `k`
(1-indexed) from wherever it currently sits and re-appends it at the end
of the line — the most recently used spot — shifting the intervening
elements left to close the gap.

Implement the `RecentLine` class:

- `RecentLine(int n)` initializes the line with `1, 2, …, n` in order.
- `int fetch(int k)` removes the `k`-th element of the current line
  (1-indexed), appends it at the end, and returns it.

### Example 1

```text
Input:
["RecentLine","fetch","fetch","fetch","fetch"]
[[8],[2],[3],[6],[1]]
Output: [null,2,4,8,1]
Explanation: The line starts [1,…,8]. fetch(2) removes the 2 and
re-appends it: [1,3,4,5,6,7,8,2]. fetch(3) now removes the third
element, the 4: [1,3,5,6,7,8,2,4]. fetch(6) removes the sixth element,
the 8: [1,3,5,6,7,2,4,8]. fetch(1) removes the first element, the 1,
which rejoins at the end: [3,5,6,7,2,4,8,1].
```

### Constraints

- `1 <= n <= 10⁹`
- At most `10⁴` calls are made to `fetch`.
- `fetch` is always called with a `k` in bounds for the current line.

## Hints

### Hint 1

A flat list makes each fetch O(n); the constraints allow it, but ask
what a much larger `n` would need.

### Hint 2

Split the line into consecutive blocks of about sqrt(n) elements: walk
blocks to find the k-th, lift the element out of its block, and re-append
it into a trailing block — every fetch then costs O(sqrt(n)).
