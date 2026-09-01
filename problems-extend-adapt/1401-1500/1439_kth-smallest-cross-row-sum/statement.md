# Kth Smallest Cross-Row Sum

## Description

You are given an `m x n` matrix `mat` whose every row is sorted in
non-decreasing order, and an integer `k`.

Choose exactly one entry from each row. The `m` chosen entries read as an
array, and that array has a sum; every way of choosing produces one such
sum.

Return the `k`-th smallest of these sums.

### Example 1

```text
Input: mat = [[2,5],[1,4,6]], k = 4
Output: 8
Explanation: The selections give the sums 3, 6, 6, 8, 9 and 11 — the two
6s come from [2,4] and [5,1]. The 4th smallest is 8.
```

### Example 2

```text
Input: mat = [[1,10,12],[2,8,9],[3,6,7]], k = 6
Output: 15
Explanation: The six smallest sums, in order, are 6, 9, 10, 12, 13 and
15, so the answer is 15.
```

### Example 3

```text
Input: mat = [[4,8],[3,9]], k = 2
Output: 11
Explanation: The selections [4,3], [4,9], [8,3] and [8,9] sum to 7, 13,
11 and 17; sorted, they read 7, 11, 13, 17, so the 2nd smallest is 11.
```

### Constraints

- `m == mat.length`
- `n == mat[i].length`
- `1 <= m, n <= 40`
- `1 <= mat[i][j] <= 5000`
- `1 <= k <= min(200, n ^ m)`
- Every row of `mat` is sorted in non-decreasing order.

## Hints

### Hint 1

Describe each selection by the tuple of column indexes it uses. Because
a row is sorted, advancing one row's index by one never lowers the sum,
so tuples form a grid ordered by sum. Keep candidate tuples in a
min-heap keyed by sum, starting from the tuple that takes each row's
first entry; every time you pop, push the tuples that advance exactly
one row's index, skipping any tuple already seen. The kth pop carries
the answer.
