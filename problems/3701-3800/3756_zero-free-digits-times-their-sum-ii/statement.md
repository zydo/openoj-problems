# Zero-Free Digits Times Their Sum II

## Description

You are given a digit string `s` of length `m` and a 2D integer array
`queries`, where `queries[i] = [li, ri]`.

Each query names the substring `s[li..ri]`. Compress that substring the
same way as in the previous problem: erase every `0` digit and read the
surviving digits, in order, as the integer `x` (if no digit survives,
`x = 0`). Let `sum` be the sum of the digits of `x`; the query's answer
is `x * sum`.

Return an array `answer` where `answer[i]` is the answer to the `i`th
query. Because the raw products can be enormous, report every answer
modulo `10⁹ + 7`.

### Example 1

```text
Input: s = "5070080", queries = [[0,6],[2,4],[5,5]]
Output: [11560, 49, 64]
Explanation:
s[0..6] = "5070080" — the nonzero digits pack into x = 578 with
    sum = 5 + 7 + 8 = 20, giving 578 * 20 = 11560.
s[2..4] = "700" — x = 7 and sum = 7, giving 7 * 7 = 49.
s[5..5] = "8" — x = 8 and sum = 8, giving 8 * 8 = 64.
```

### Example 2

```text
Input: s = "30313", queries = [[0,4],[2,2]]
Output: [33130, 9]
Explanation:
s[0..4] = "30313" — x = 3313 and sum = 3 + 3 + 1 + 3 = 10, giving
    3313 * 10 = 33130.
s[2..2] = "3" — x = 3 and sum = 3, giving 3 * 3 = 9.
```

### Example 3

```text
Input: s = "999999999999999999", queries = [[0,17]]
Output: [7776]
Explanation: Here x = 999999999999999999 and sum = 162. The raw product
161999999999999999838 is far past any fixed-width integer, so it is
reported modulo 10⁹ + 7: 7776.
```

### Constraints

- `1 <= m == s.length <= 10⁵`
- `s` consists of digits only.
- `1 <= queries.length <= 10⁵`
- `queries[i] = [li, ri]`
- `0 <= li <= ri < m`

## Hints

### Hint 1

Precompute prefix arrays over the whole string: how many nonzero digits
have appeared so far, their packed value modulo `10⁹ + 7`, and their
digit sum.

### Hint 2

A query's compressed digit count is the difference of the count prefix
at its two ends; the packed value of the substring follows from the two
prefix values plus one power-of-ten shift, and the digit sum is a plain
prefix difference.

### Hint 3

If a range holds no nonzero digits at all, the packed value is `0` and
the formula already returns `0` on its own.
