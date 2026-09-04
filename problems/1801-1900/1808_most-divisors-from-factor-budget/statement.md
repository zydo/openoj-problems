# Most Divisors From a Factor Budget

## Description

You are given a positive integer `primeFactors` — a budget of prime factors
to spend. Pick any positive integer `n` whose prime factorization, counted
with multiplicity, uses at most that many factors. A divisor of `n` is
_full_ when it is divisible by every prime that appears in `n`. For
instance, `12` factors as `[2, 2, 3]`, so `6` and `12` are full divisors of
it while `3` and `4` are not.

Choose `n` so that the number of full divisors it has is as large as
possible, and return that count modulo `10⁹ + 7`.

### Example 1

```text
Input: primeFactors = 9
Output: 27
Explanation: One best choice is n = 2³ · 3³ · 5³ = 1000, which spends all
nine factors. A divisor of it is full exactly when it contains at least one
2, one 3, and one 5, giving 3 · 3 · 3 = 27 full divisors. No integer with
at most nine prime factors has more.
```

### Example 2

```text
Input: primeFactors = 13
Output: 108
```

### Example 3

```text
Input: primeFactors = 999999997
Output: 299045062
```

### Constraints

- `1 <= primeFactors <= 10⁹`

## Hints

### Hint 1

Write `n` as `p^a · q^b · ...`. A full divisor fixes an exponent of each
prime, so their count is `a · b · ...` — the task becomes splitting the
budget into positive parts whose product is as large as possible.

### Hint 2

No part larger than 4 is ever needed: cutting `x` into
`floor(x/2) + ceil(x/2)` strictly grows the product, and a 4 is just two
2s. Some optimal split therefore uses only 2s and 3s.

### Hint 3

Three 2s trade up to two 3s, since `3 · 3 > 2 · 2 · 2` — so an optimal
split takes 3s while the budget is at least 5 and finishes with a single
small remainder.

### Hint 4

The exponent of 3 reaches about `primeFactors / 3`, so compute the power by
repeated squaring under the modulus instead of multiplying one factor at a
time.
