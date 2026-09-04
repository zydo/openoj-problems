# Ways to Split a Digit String

## Description

A list of integers was written out with the separating spaces lost, so
what remains is one digit string `s`. Every number on the original list
was between `1` and `k` inclusive, and none was written with a leading
zero.

Given `s` and `k`, count the distinct lists that could have produced
`s` under those rules — in other words, the ways to cut `s` into
contiguous pieces so that each piece has no leading zero and, read as a
number, lies in `[1, k]`. The count can be huge, so report it modulo
`10⁹ + 7`.

### Example 1

```text
Input: s = "409", k = 500
Output: 2
Explanation: The two possible lists are [409] and [40, 9]. Cutting
after the 4 would give [4, 09], and "09" has a leading zero.
```

### Example 2

```text
Input: s = "777", k = 7
Output: 1
Explanation: No two-digit piece fits under k, so the only option is
[7, 7, 7].
```

### Example 3

```text
Input: s = "51230015", k = 1000000
Output: 29
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s` contains only digits and does not start with `'0'`.
- `1 <= k <= 10⁹`

## Hints

### Hint 1

Count from the right. Let `dp[i]` be the number of valid splittings of
the suffix that starts at index `i`; the position of a piece determines
only where the next one starts.

### Hint 2

From each `i`, try piece lengths up to the number of digits in `k` —
longer pieces always exceed `k` — skipping any piece that begins with
`'0'`, and add up `dp[i + L]`. Reduce the sums modulo `10⁹ + 7` as you
go.
