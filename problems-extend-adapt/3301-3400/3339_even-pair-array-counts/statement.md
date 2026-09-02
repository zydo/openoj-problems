# Even-Pair Array Counts

## Description

You are given three integers `n`, `m`, and `k`.

Count the arrays `arr` of length `n` whose entries all lie in the range
`[1, m]` and for which exactly `k` neighboring positions `i`
(`0 <= i < n - 1`) make the expression
`(arr[i] * arr[i + 1]) - arr[i] - arr[i + 1]` even.

That count can be enormous, so report it modulo 10⁹ + 7.

### Example 1

```text
Input: n = 2, m = 3, k = 0
Output: 8
Explanation: The available values are 1, 2, and 3, giving 9 arrays in
all. The only one that fails is [2, 2] — its single neighboring pair is
the one way to make the expression even — so 8 arrays qualify.
```

### Example 2

```text
Input: n = 4, m = 5, k = 1
Output: 156
Explanation: Of the 5⁴ arrays over [1, 5], exactly 156 contain precisely
one neighboring pair that makes the expression even.
```

### Example 3

```text
Input: n = 6, m = 2, k = 3
Output: 7
Explanation: With `m = 2` the only values are 1 and 2, so an array is
just a choice of which positions hold the even value; exactly 7 of the
64 patterns produce three neighboring pairs of 2s.
```

### Constraints

- `1 <= n <= 750`
- `0 <= k <= n - 1`
- `1 <= m <= 1000`

## Hints

### Hint 1

Work out the parity of
`(arr[i] * arr[i + 1]) - arr[i] - arr[i + 1]` case by case — only one
combination of neighbor parities ever makes it even.

### Hint 2

Sweep the array left to right, tracking for each running pair count how
many partial arrays end in an even value versus an odd one.
