# Best Picks Under Row Caps

## Description

You are given an `n x m` integer matrix `grid`, an integer array `limits`
of length `n`, and an integer `k`. Choose some elements of the matrix to
make their sum as large as possible, subject to:

- At most `k` elements are chosen in total.
- At most `limits[i]` elements come from row `i`.

Return the largest achievable sum.

### Example 1

```text
Input: grid = [[9,1],[7,5],[6,8]], limits = [1,1,2], k = 3
Output: 24
Explanation: Row 0 can give up to 1 element, row 1 up to 1, and row 2 up
to 2. The best three picks are 9 (row 0), 8 (row 2), and 7 (row 1), so
the answer is 9 + 8 + 7 = 24.
```

### Example 2

```text
Input: grid = [[2,4,6],[3,5,9]], limits = [2,1], k = 3
Output: 19
Explanation: Row 0 can give up to 2 elements and row 1 up to 1. The best
picks are 9 (row 1), 6 and 4 (row 0), summing to 9 + 6 + 4 = 19.
```

### Example 3

```text
Input: grid = [[10]], limits = [1], k = 1
Output: 10
Explanation: The single element is the only choice, and it fits both
caps.
```

### Example 4

```text
Input: grid = [[3,3]], limits = [1], k = 0
Output: 0
Explanation: With k = 0 nothing may be picked, so the sum is 0.
```

### Constraints

- `n == grid.length == limits.length`
- `m == grid[i].length`
- `1 <= n, m <= 500`
- `0 <= grid[i][j] <= 10⁵`
- `0 <= limits[i] <= m`
- `0 <= k <= min(n * m, sum(limits))`

## Hints

### Hint 1

No element beyond a row's `limits[i]` largest values can ever earn its
place, since values are non-negative — trim each row to its top candidates
first.

### Hint 2

Throw those trimmed candidates into one pool and take the `k` largest; a
sort is enough, and a max-heap works just as well.
