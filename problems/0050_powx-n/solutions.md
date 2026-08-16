# Solutions — Pow(x, n)

## Iterative Exponentiation by Squaring

Multiplying `x` by itself `n` times is `O(n)`; exponentiation by squaring reaches the same result in `O(log n)` multiplications by exploiting the binary structure of the exponent: `x^n = (x^2)^(n/2)` when `n` is even, and `x^n = x · (x^2)^((n-1)/2)` when `n` is odd. Halving the exponent at every step is what turns the linear chain into a logarithmic one.

The inner `power` function implements this iteratively. It keeps `result = 1.0` and walks the bits of `exp` from least to most significant: whenever the current bit is set (`exp & 1`), the current square `base` is folded into `result`; then `base` is squared and `exp` shifted right. After the loop, `result` holds the product of `x^(2^k)` over exactly the set bits `k` of the original exponent, which is `x^exp`. An exponent of zero skips the loop entirely and yields `1.0`, correctly covering `x = 1` and `n = 0`.

A negative exponent is handled by symmetry: the code computes `power(x, -n)` and returns its reciprocal, since `x^n = 1 / x^(-n)`. This is safe in Python even for `n = -2^31` — the negation `-n = 2^31` exceeds 32-bit signed range, but Python integers are arbitrary precision, so no overflow occurs (in fixed-width languages the same step needs a wider type or an early `1/x` fold). The constraint that either `x` is nonzero or `n > 0` guarantees the reciprocal is never taken of zero.

Only a constant number of float variables (`result`, `base`, the loop counter) are used regardless of exponent size, and the loop runs once per bit of `|n|`.

**Complexity:** `O(log n)` time, `O(1)` space.
