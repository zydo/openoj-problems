# Choose K From N

## Description

You are given two integers `n` and `k`. Among the whole numbers `1`
through `n`, lay out every way to keep `k` of them, where the order
inside a pick never matters — keeping 2 and 3 is the same pick as
keeping 3 and 2, so it is listed only once.

Report the picks in a fixed shape: each pick writes its numbers in
ascending order, and the picks themselves are listed in ascending
lexicographic order, compared element by element. Picks that share
their opening numbers therefore sit next to each other.

### Example 1

```text
Input: n = 3, k = 2
Output: [[1,2],[1,3],[2,3]]
Explanation: There are 3 choose 2 = 3 picks in total.
```

### Example 2

```text
Input: n = 4, k = 4
Output: [[1,2,3,4]]
Explanation: With k equal to n there is exactly one pick — every
number has to be kept.
```

### Example 3

```text
Input: n = 2, k = 1
Output: [[1],[2]]
Explanation: Each single number forms its own pick.
```

### Constraints

- `1 <= n <= 20`
- `1 <= k <= n`
