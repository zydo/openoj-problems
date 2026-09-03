# Every-Slice Prime

## Description

You are given an integer `num`.

A number deserves the name **every-slice prime** when each of its prefixes
and each of its suffixes is a prime number. A prefix keeps the first `k`
digits of `num` for some `k`, a suffix keeps the last `k`; whichever slice
you take, reading it as an ordinary integer must give a prime. The full
number shows up in both readings, and a single-digit number qualifies
exactly when that digit is itself prime.

Return `true` if `num` is an every-slice prime, otherwise `false`.

### Example 1

```text
Input: num = 373
Output: true
Explanation: The prefixes are 3, 37, and 373 — all prime. The suffixes
are 3, 73, and 373 — all prime too. Nothing fails, so 373 is an
every-slice prime.
```

### Example 2

```text
Input: num = 233
Output: false
Explanation: The prefixes 2, 23, 233 are all prime, but the suffix 33 is
not (33 = 3 x 11). One bad slice is enough to disqualify the number.
```

### Example 3

```text
Input: num = 59
Output: false
Explanation: The prefixes 5 and 59 are prime, but the one-digit suffix 9
is composite. So 59 is not an every-slice prime despite being prime
itself.
```

### Constraints

- `1 <= num <= 10⁹`

## Hints

### Hint 1

There are at most ten digits, so at most eighteen nonempty slices exist.
Test each prefix and suffix for primality and demand a clean sweep.

### Hint 2

Trial division is more than fast enough at this size: each slice costs
about sqrt(num) / 3 division attempts, and most inputs die on their first
digit or two.
