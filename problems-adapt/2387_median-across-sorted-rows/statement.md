# Median Across Sorted Rows

## Description

You are given an `m x n` matrix `grid` with an odd total count of integers.
Each row is in non-decreasing order; the rows need not relate to each other in
any way. Return the median of all `m * n` values — the middle element of the
multiset, which the odd count makes a single matrix value rather than an
average.

Gathering and sorting every value is `O(m * n)` work. Do better than that.

### Example 1

```text
Input: grid = [[2,2,6],[1,4,4],[2,4,8]]
Output: 4
Explanation: All nine values in sorted order are 1, 2, 2, 2, 4, 4, 4, 6, 8.
The middle (5th) value is 4.
```

### Example 2

```text
Input: grid = [[3,5,5,9,11]]
Output: 5
Explanation: A single sorted row is its own sorted order; the middle of
3, 5, 5, 9, 11 is 5.
```

### Example 3

```text
Input: grid = [[6],[2],[10]]
Output: 6
Explanation: Each row holds one value, so the rows behave like an unsorted
list 6, 2, 10 whose median is 6.
```

### Constraints

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 500`
- both `m` and `n` are odd.
- `1 <= grid[i][j] <= 10⁶`
- every `grid[i]` is sorted in non-decreasing order.

## Hints

### Hint 1

The rows arrive pre-sorted. What question about a candidate value can each row
answer in logarithmic time?

### Hint 2

Instead of locating the median among positions, search for it among values:
the median is the smallest value with enough elements at or below it.
