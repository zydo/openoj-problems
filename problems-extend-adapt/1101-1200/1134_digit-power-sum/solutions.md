# Solutions — Digit Power Sum

## Strip digits with modulus and division, sum their k-th powers

The check is a direct restatement of the definition. The digit count `k`
comes first — the number of divisions by 10 that reduce it to zero — and
then the same loop runs again as an accumulator: each round peels off the
least significant digit with `% 10`, raises it to the k-th power, and drops
the digit with an integer division.

The running sum can exceed 32-bit range only far outside the constraint
range: with `n <= 10⁸` there are at most eight digits, each contributing at
most `9⁸ ≈ 4.3·10⁷`, so the total stays under `3.5·10⁸` — comfortably
inside every judged integer width. Equality of the sum with the original
number is the verdict.

Every number in range that passes the check has at most 7 digits — the
practical truth set inside `10⁸` runs from the single digits `1` through `9`
through four-digit entries like `9474` up to `9926315` — but the check
itself never needs that knowledge.

**Complexity:** `O(k)` time and `O(1)` space for the `k <= 8` digits of `n`.
