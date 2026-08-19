# Count Capped-Digit Numbers With a Given Ending

## Description

You are given two integers `start` and `finish` with `start <= finish`, an
integer `limit`, and a string `s` of decimal digits.

Call a number **capped** when every one of its digits is at most `limit`. Count
the capped numbers lying in the closed interval `[start..finish]` whose usual
decimal writing ends with the string `s` — that is, the last `s.length` digits
of the number, read as a string, are exactly `s`.

Return the count.

For instance, `21` is an ending of both `21` and `3121`, but not of `211`.

### Example 1

```text
Input: start = 1, finish = 1000, limit = 3, s = "21"
Output: 4
Explanation: The capped numbers up to 1000 that end in "21" are 21, 121, 221,
and 321. Each digit of each is at most 3. A four-digit candidate such as 1121
would also be capped, but it already exceeds 1000.
```

### Example 2

```text
Input: start = 150, finish = 600, limit = 4, s = "33"
Output: 3
Explanation: The capped numbers ending in "33" are 33, 133, 233, 333, 433, ...
and 233, 333, and 433 are the ones inside [150..600]. The shorter candidates
33 and 133 fall below the floor of the range.
```

### Example 3

```text
Input: start = 600, finish = 900, limit = 5, s = "55"
Output: 0
Explanation: Up to 900 the capped numbers ending in "55" are 55, 155, 255, 355,
455, and 555 — all below 600. Any larger one needs a hundreds digit of at
least 6, which the cap of 5 forbids.
```

### Constraints

- `1 <= start <= finish <= 10^15`
- `1 <= limit <= 9`
- `1 <= s.length <= floor(log10(finish)) + 1`
- Every digit of `s` is at most `limit`.
- `s` has no leading zero.

## Hints

### Hint 1

Reduce the two-sided range to a difference of two one-sided counts: the answer
is `f(finish) - f(start - 1)`, where `f(x)` counts qualifying numbers in
`[1..x]`.

### Hint 2

Fixing the ending `s` leaves only a prefix to choose: the number is some
(possibly empty) prefix followed by `s`, and the prefix's digits must respect
the cap, with no leading zero.

### Hint 3

For a bound `x`, the largest prefix that can still be followed by `s` without
passing `x` is `(x - int(s)) // 10^len(s)`. Counting capped prefixes up to that
cap is a standard digit walk.

### Hint 4

Prefixes strictly shorter than the cap walk free rein: the closed form
`limit * (limit + 1)^(p-1)` counts `p`-digit capped numbers. Only the length
matching the cap's own digit count needs a position-by-position walk with a
tight flag.
