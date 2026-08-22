# Solutions — Raise To A Power

Both variants below rest on one identity: an exponent can be halved rather than
decremented. `x^e = (x²)^(e/2)` when `e` is even, and `x^e = x · (x²)^((e-1)/2)`
when it is odd, so the work per step is a squaring plus at most one extra
factor, and the exponent loses a bit. That is what separates `O(log n)`
multiplications from the `n` multiplications of repeated multiplication. The
two variants differ only in whether the exponent is halved by recursion or
consumed bit by bit in a loop.

## fast_pow_recursive

The same identity stated top-down. `power(x, e)` asks for `power(x, e / 2)`
exactly once, squares what comes back, and multiplies in one extra `x` when
`e` is odd. Producing the half a single time and squaring it — rather than
multiplying two recursive calls — is the point: the recursion is a chain of
depth `log₂(e) + 1`, about 31 frames at the top of the 32-bit range, with one
multiplication per even level and two per odd one.

The base case `e == 0` returns `1.0` with no loop at all. A negative exponent
reciprocates the positive result, exactly as in the iterative variant, and the
fixed-width ports widen the exponent before negating it so that `n = -2³¹`
cannot overflow. For `x = 3`, `n = 5` the chain runs 5 → 2 → 1 → 0: the base
case returns 1, the odd level at 1 contributes the spare factor 3, the level
at 2 squares to 9, and the top level squares again and folds in the last 3 to
reach 243.

The structural difference from the iterative variant is the call stack:
`O(log n)` frames against a fixed handful of variables, both negligible at
this exponent bound.

**Complexity:** `O(log n)` time, `O(log n)` stack space.

## fast_pow_iterative

Read the exponent in binary. Since `e = Σ 2^k` over its set bits `k`, the
power `x^e` is the product of `x^(2^k)` over exactly those bits — and the
factors `x, x², x⁴, x⁸, …` are each one squaring past the last. The loop keeps
`result = 1.0` and a running square `base`: whenever the low bit of `exp` is
set, `base` is folded into `result`; then `base` is squared and `exp` shifted
right. When the shift has consumed every bit, `result` holds exactly the
product above. An exponent of zero never enters the loop and returns `1.0`,
which is also the right answer for any `x` paired with `n = 0`.

Negative exponents are symmetry, not a new mechanism: `x^n` with `n < 0` is
`1 / x^(-n)`, so the code evaluates the positive power and reciprocates. The
guard that `x` is nonzero whenever `n` is not positive is what makes that
reciprocal safe. One portability note that the fixed-width languages feel and
Python does not: `n = -2³¹` negates to `2³¹`, one past the 32-bit signed range,
so `n` is widened before the sign flip in those ports — Python's integers are
unbounded and need nothing.

Worked on `x = 1.5`, `n = 4`: binary `100`, so only bit 2 is set. The loop
squares twice (1.5 → 2.25 → 5.0625) and folds in only the second square, and
the answer is 5.0625 after three multiplications instead of four.

The state is three float variables regardless of exponent size, and the loop
runs once per bit of `|n|`.

**Complexity:** `O(log n)` time, `O(1)` space.
